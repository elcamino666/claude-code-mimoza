# Mimoza Docker Isolation Design

**Date:** 2026-03-23
**Status:** Draft

## Problem

Mimoza is a Claude Code Telegram bot serving Eni's mother (72, Albanian-speaking, learning German). She currently runs with `--dangerously-skip-permissions` and has full access to the host laptop's filesystem. This is unnecessary and risky — Mimoza only needs to talk to Telegram and the Claude API.

## Goals

- **Security:** Mimoza cannot access, modify, or delete host files
- **Privacy:** Mimoza cannot read sensitive documents, code, or other bots' data
- **Safety:** Even with `--dangerously-skip-permissions`, there's nothing dangerous inside the container
- **Stability:** Ember and Nox remain completely untouched

## Architecture

### What goes inside the container

- Claude Code binary (~190MB)
- Bun runtime (~66MB) for the Telegram plugin
- Telegram plugin code
- Mimoza's CLAUDE.md (personality/instructions)
- Minimal `.claude/settings.json` (just Telegram plugin enabled)
- Git-initialized working directory

### What's mounted from host (persistent volumes)

| Volume | Host Path | Container Path | Mode |
|--------|-----------|----------------|------|
| Telegram state | `~/.claude/channels/telegram-mimoza/` | `/root/.claude/channels/telegram/` | read-write |

### Authentication

Uses `claude setup-token` (run once on host) to generate a long-lived auth token. The token is stored in `~/.claude/channels/telegram-mimoza/.claude-token` and passed to the container as the `CLAUDE_CODE_TOKEN` environment variable.

- No file mounting needed for auth
- No browser OAuth flow inside the container
- Survives container rebuilds
- Token can be regenerated anytime with `claude setup-token`

### What Mimoza CANNOT access

- Desktop, Documents, Downloads — nothing on host
- Other bots' state (Ember, Nox)
- Host `.claude/` settings, keys, other channels
- Any other files on the laptop

### Networking

- Outbound only (Telegram API, Claude API)
- No access to host local network services

## Container Lifecycle

### Current flow (being replaced)

```
launchd → mimoza-launcher.sh → screen → claude --dangerously-skip-permissions
```

### New flow

```
launchd → mimoza-docker-launcher.sh → docker run → claude (inside container)
```

### Dockerfile

- Base image: `node:20-slim`
- Copy Claude Code binary
- Install Bun runtime
- Copy Telegram plugin code
- Copy CLAUDE.md into git-initialized working directory
- Set environment variables (bot token, state dir)

### Launcher (`mimoza-docker-launcher.sh`)

- Stop/remove any existing `mimoza` container
- `docker run` with volumes, env vars, restart policy
- Container runs Claude Code directly (no screen needed)

### Watchdog (`mimoza-docker-watchdog.sh`)

- Check 1: Container running? (`docker inspect mimoza`)
- Check 2: Claude process alive inside? (`docker exec mimoza pgrep claude`)
- Check 3: Stuck detection via `docker stats`
- On failure: `docker restart mimoza` + Telegram notification to Eni (chat ID: 2042522190)

### Launchd plists

Same structure as current, pointing to new launcher/watchdog scripts.

## Management Commands

| Action | Command |
|--------|---------|
| View logs | `docker logs -f mimoza` |
| Restart | `docker restart mimoza` |
| Stop | `docker stop mimoza` |
| Shell access | `docker exec -it mimoza bash` |
| Rebuild | `docker build -t mimoza . && docker restart mimoza` |

## What stays unchanged

- Ember: launchd + screen, full host access
- Nox: launchd + screen, full host access
- Both bots' launchers, watchdogs, and plists are untouched

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Docker Desktop must be running | Add Docker startup to launchd or login items |
| Claude Code updates need container rebuild | Dockerfile copies binary by version; rebuild script provided |
| Auth token expires/revoked | Re-run `claude setup-token` on host and update `.claude-token` file |
| Container overhead (~1-2GB RAM for Docker) | Acceptable on a laptop; no CPU overhead |
