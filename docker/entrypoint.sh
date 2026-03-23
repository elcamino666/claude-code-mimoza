#!/bin/bash

# Telegram env vars are passed via docker run -e in the launcher
export TELEGRAM_STATE_DIR="/home/mimoza/.claude/channels/telegram"

# Write inner script that runs inside the PTY
cat > /tmp/mimoza-run.sh << 'INNEREOF'
#!/bin/bash
export TELEGRAM_STATE_DIR="/home/mimoza/.claude/channels/telegram"

# Background: handle dialogs and send startup prompt
(
    # Wait for "Do you want to use this API key?" dialog
    sleep 5
    # Send Up Arrow to select "Yes" (it defaults to "No")
    printf '\033[A' > /dev/pts/0
    sleep 1
    # Send Enter to confirm
    echo "" > /dev/pts/0

    # Wait for Claude to fully start, then send startup prompt
    sleep 30
    echo "You just started. Follow the On Startup instructions in CLAUDE.md now." > /dev/pts/0
) &

# Use --bare with ANTHROPIC_API_KEY, settings, and channels
exec claude \
    --dangerously-skip-permissions \
    --channels plugin:telegram@claude-plugins-official \
    --settings /home/mimoza/.claude/settings.json \
    --model opus
INNEREOF
chmod +x /tmp/mimoza-run.sh

exec script -qc /tmp/mimoza-run.sh /dev/null
