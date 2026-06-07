import os
import asyncio
from typing import Optional

from dotenv import load_dotenv

# Load Stream keys from the parent repo .env
load_dotenv(os.path.join(os.path.dirname(__file__), "..", ".env"))
# Local .env adds OPENAI_API_KEY and can override any key
load_dotenv(os.path.join(os.path.dirname(__file__), ".env"), override=True)

from getstream.models import MemberRequest  # noqa: E402
from openai.types.realtime.realtime_transcription_session_audio_input_turn_detection_param import ServerVad  # noqa: E402
from vision_agents.core import Agent, AgentLauncher, User, Runner  # noqa: E402
from vision_agents.core.instructions import Instructions  # noqa: E402
from vision_agents.core.llm.realtime import (  # noqa: E402
    RealtimeAgentTranscript,
    RealtimeUserTranscript,
)
from vision_agents.plugins import getstream, openai  # noqa: E402

AGENT_USER_ID = "ai-teacher"

LANGUAGE_NAMES: dict[str, str] = {
    "es": "Spanish",
    "fr": "French",
    "ja": "Japanese",
    "de": "German",
}

DEFAULT_SYSTEM_PROMPT = (
    "You are a warm, energetic, and encouraging AI language teacher. "
    "Your goal is to help the student learn the specific words and phrases of this lesson. "
    "Speak naturally like a human teacher would—use contractions, short sentences, and a friendly tone. "
    "Stay strictly focused on the current lesson's vocabulary and context; don't drift into other topics.\n"
    "HOW TO TEACH:\n"
    "- Mostly speak English. Introduce target-language words slowly with their translations.\n"
    "- Give gentle encouragement and clear feedback.\n"
    "- Always ask the student to repeat a word or try using a phrase. 'Can you say that?' or 'Now you try!'\n"
    "- Listen carefully to the student's response. If they struggle, offer a tip and ask them to try again. If they succeed, give a warm 'Great job!' and move to the next item.\n"
    "- Keep your replies to one or two short, conversational sentences maximum.\n"
    "ABSOLUTE RULES:\n"
    "- Never continue speaking past a question. Every question is a hard stop to let the student talk.\n"
    "- Never imagine or role-play the student's response. Wait for their actual speech.\n"
    "- Do not switch to other languages or teach unrelated vocabulary."
)

def _require_env(var_name: str) -> None:
    if not os.getenv(var_name):
        raise RuntimeError(f"Missing required environment variable: {var_name}")

def _language_name_from_call_id(call_id: str) -> Optional[str]:
    # v10 format: l-{userId}-{random}
    # new format: l-{langCode}-{lessonId}-{userId}
    # old format: lesson-{langCode}-lesson-{n}-{userId}
    parts = call_id.split("-")
    if len(parts) >= 2:
        if parts[0] == "l":
            # If it's the v10 format, the second part is the start of the UUID, not langCode.
            # However, we now pass language in custom data, so this is just a fallback.
            return LANGUAGE_NAMES.get(parts[1])
        elif parts[0] == "lesson":
            return LANGUAGE_NAMES.get(parts[1])
    return None


async def create_agent(**kwargs) -> Agent:
    return Agent(
        edge=getstream.Edge(),
        llm=openai.Realtime(
            # server_vad fires on raw audio energy (~100 ms after mic opens) rather
            # than waiting for semantic speech intent detection (~500 ms+).
            # This means the agent stops speaking almost immediately when the user
            # presses the push-and-hold mic button, before they have said a word.
            # 
            # Note: We use gpt-4o-mini-realtime-preview for lower costs while
            # keeping voice capabilities.
            realtime_session={
                "type": "realtime",
                "model": "gpt-4o-mini-realtime-preview",
                "audio": {
                    "input": {
                        "transcription": {"model": "gpt-4o-mini-transcribe"},
                        "turn_detection": ServerVad(
                            type="server_vad",
                            threshold=0.5,         # increased to reduce noise triggers
                            prefix_padding_ms=300,  # capture slightly more audio before speech
                            silence_duration_ms=600, # wait a bit longer to confirm turn end
                            interrupt_response=True, # stop agent audio the moment VAD fires
                        ),
                    }
                },
            }
        ),
        agent_user=User(name="AI Teacher", id=AGENT_USER_ID),
        instructions=DEFAULT_SYSTEM_PROMPT,
    )


async def join_call(agent: Agent, call_type: str, call_id: str, **kwargs) -> None:
    call = await agent.create_call(call_type, call_id)

    # Read lesson context packed into the call's custom data by the mobile app
    custom: dict = {}
    try:
        resp = await call.get()
        custom = resp.data.call.custom or {}
    except Exception as e:
        print(f"[agent] Warning: could not fetch call custom data: {e}")

    system_prompt  = custom.get("system_prompt") or DEFAULT_SYSTEM_PROMPT
    intro_message  = custom.get("intro_message")
    language_code  = custom.get("language") or ""
    lesson_title   = custom.get("lesson_title") or ""
    language_name  = LANGUAGE_NAMES.get(language_code) or _language_name_from_call_id(call_id) or "language"

    # Apply lesson-specific instructions before joining so the Realtime LLM receives them
    agent.instructions = Instructions(input_text=system_prompt)

    # Grant admin role + go live so the agent can publish audio
    try:
        await call.update_call_members(
            update_members=[MemberRequest(user_id=AGENT_USER_ID, role="admin")]
        )
    except Exception as e:
        print(f"[agent] Warning: could not set admin role: {e}")

    try:
        await call.go_live()
    except Exception as e:
        print(f"[agent] Warning: go_live failed (expected for default call type): {e}")

    # Accumulate transcript deltas and forward them as Stream custom events so the
    # mobile app can display real-time captions word-by-word as speech is generated.
    partial_agent: list[str] = []
    partial_user: list[str] = []

    async def on_transcript_event(event) -> None:
        if isinstance(event, RealtimeAgentTranscript):
            if event.mode == "delta" and event.text:
                partial_agent.append(event.text)
                try:
                    await agent.send_custom_event({
                        "type": "transcript_partial",
                        "speaker": "agent",
                        "text": "".join(partial_agent),
                    })
                except Exception as e:
                    print(f"[agent] send_custom_event error: {e}")
            elif event.mode == "final":
                partial_agent.clear()

        elif isinstance(event, RealtimeUserTranscript):
            if event.mode == "delta" and event.text:
                partial_user.append(event.text)
                try:
                    await agent.send_custom_event({
                        "type": "transcript_partial",
                        "speaker": "user",
                        "text": "".join(partial_user),
                    })
                except Exception as e:
                    print(f"[agent] send_custom_event error: {e}")
            elif event.mode == "final":
                partial_user.clear()

    agent.subscribe(on_transcript_event)

    async with agent.join(call):
        # Wait for the student to join (returns immediately if already present)
        await agent.wait_for_participant(timeout=60.0)

        if intro_message:
            context_parts = [f"A student just joined your {language_name} lesson"]
            if lesson_title:
                context_parts[0] += f" — '{lesson_title}'"
            context_parts[0] += "."
            context_parts.append(
                f"Deliver this greeting and NOTHING else: \"{intro_message}\" "
                f"After the greeting, ask the student one simple question to get them talking — "
                f"for example 'Are you ready to get started?' or 'Have you learned any {language_name} before?' "
                f"Then STOP and wait for the student's reply before teaching anything."
            )
            await agent.simple_response(" ".join(context_parts))
        else:
            await agent.simple_response(
                f"A student just joined your {language_name} lesson. "
                f"Greet them warmly and ask one short question — like 'Ready to learn some {language_name}?' "
                f"Then STOP and wait for their reply before you teach anything."
            )

        # Keep the agent alive until the call is ended or the student leaves
        try:
            while True:
                # wait_for_participant will return if the student is already there, 
                # so we use it to check for presence or wait.
                try:
                    await agent.wait_for_participant(timeout=1.0)
                    await asyncio.sleep(5.0) # Check every 5 seconds
                except (asyncio.TimeoutError, TimeoutError):
                    print("[agent] Student left or timeout, finishing...")
                    break
        except Exception as e:
            print(f"[agent] Error in main loop: {e}")

        await agent.finish()


if __name__ == "__main__":
    _require_env("STREAM_API_KEY")
    _require_env("STREAM_API_SECRET")
    _require_env("OPENAI_API_KEY")

    Runner(AgentLauncher(create_agent=create_agent, join_call=join_call)).cli()