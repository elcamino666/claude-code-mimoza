#!/bin/bash

# Telegram env vars are passed via docker run -e in the launcher
export TELEGRAM_STATE_DIR="/home/mimoza/.claude/channels/telegram"

# Create a FIFO for stdin — keeps Claude alive in interactive mode
mkfifo /tmp/claude-stdin 2>/dev/null || true

# Send startup prompt after 25s delay
(
    sleep 25
    echo "You just started. Follow the On Startup instructions in CLAUDE.md now." > /tmp/claude-stdin
    # Keep writer open so the pipe doesn't close (keeps Claude alive)
    sleep infinity
) &

# Launch Claude Code with apiKeyHelper in settings for auth (no --bare)
# The settings.json has apiKeyHelper that reads ANTHROPIC_API_KEY env var
exec claude \
    --dangerously-skip-permissions \
    --channels plugin:telegram@claude-plugins-official \
    --model opus \
    < /tmp/claude-stdin
