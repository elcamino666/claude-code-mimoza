#!/bin/bash

# Telegram env vars are passed via docker run -e in the launcher
# TELEGRAM_BOT_TOKEN and TELEGRAM_STATE_DIR are set there
export TELEGRAM_STATE_DIR="/root/.claude/channels/telegram"

# Launch Claude Code with startup prompt as the initial message.
# Claude Code accepts a prompt as a positional argument.
exec claude \
    --dangerously-skip-permissions \
    --channels plugin:telegram@claude-plugins-official \
    --model opus \
    -p "You just started. Follow the On Startup instructions in CLAUDE.md now."
