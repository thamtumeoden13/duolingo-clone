# Vision AI Teacher Service

This is the AI language teacher service built using [Vision Agents](https://visionagents.ai).

## Prerequisites

- **Python 3.10 or higher** (Required by the `vision-agents` SDK)
- `uv` (recommended) or `pip`

## Setup

1.  **Install dependencies**:
    Using `uv`:
    ```bash
    uv add "vision-agents[getstream,openai]" python-dotenv
    ```
    Using `pip`:
    ```bash
    pip install "vision-agents[getstream,openai]" python-dotenv
    ```

2.  **Configure environment variables**:
    Update the `.env` file in this directory with your `OPENAI_API_KEY`. The Stream keys are already pre-filled from the project root.

## Running the Agent

### Step 0: Ensure `uv` is in your PATH
If you just installed `uv`, you might need to source your shell profile or the `uv` environment:
```bash
source $HOME/.local/bin/env
```

### Console Mode (Local Testing)
To test the agent in your terminal:
```bash
uv run agent.py run
```

### Server Mode (Production)
To run the agent as an HTTP server that can spawn sessions on demand:
```bash
uv run agent.py serve --host 0.0.0.0 --port 8000
```

## Features

- **Low Latency**: Uses OpenAI Realtime for fast voice-to-voice interaction.
- **English First**: The teacher speaks English and teaches the target language.
- **Stream Integration**: Uses Stream Edge for reliable audio transport.
