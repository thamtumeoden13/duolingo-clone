from vision_agents.core import Agent, Runner, AgentLauncher, User
from vision_agents.plugins import openai, getstream
from vision_agents.core.edge.events import ParticipantJoinedEvent
import os
from dotenv import load_dotenv
import asyncio
import sys

load_dotenv()

async def create_agent(**kwargs) -> Agent:
    """
    Factory function to create the AI Language Teacher agent.
    """
    # Initialize Stream transport
    edge = getstream.Edge(
        api_key=os.environ.get("STREAM_API_KEY"),
        api_secret=os.environ.get("STREAM_API_SECRET")
    )
    
    # Define the agent user
    agent_user = User(id="ai-teacher", name="AI Teacher")
    
    # Use OpenAI Realtime for low-latency voice
    llm = openai.Realtime(
        model="gpt-4o-realtime-preview"
    )
    
    agent = Agent(
        edge=edge,
        llm=llm,
        agent_user=agent_user,
        instructions=(
            "You are a friendly and encouraging AI language teacher. "
            "You speak English naturally and teach the student their selected language. "
            "Always respond in English first, then provide the translation or instruction in the target language. "
            "Keep your responses concise and focused on the lesson. "
            "Help the student with pronunciation and vocabulary."
        )
    )
    
    async def on_participant_joined(event: ParticipantJoinedEvent):
        if event.participant.role == "user":
            await agent.say("Hello! I'm your AI teacher. Ready to start our lesson?")

    agent.events.subscribe(on_participant_joined)

    return agent

async def join_call(agent: Agent, call_type: str, call_id: str, **kwargs):
    """
    Entry point for the agent to join a Stream call.
    """
    # Authenticate the agent before creating the call
    await agent.authenticate()
    
    # Use the edge transport from the agent to get the call object
    call = await agent.edge.create_call(call_id=call_id, call_type=call_type)
    
    async with agent.join(call):
        await agent.finish()

if __name__ == "__main__":
    launcher = AgentLauncher(
        create_agent=create_agent,
        join_call=join_call
    )
    Runner(launcher).cli()
