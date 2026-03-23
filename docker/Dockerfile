FROM node:20-slim

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    unzip \
    procps \
    && rm -rf /var/lib/apt/lists/*

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# Install Claude Code globally via npm
RUN npm install -g @anthropic-ai/claude-code@2.1.81

# Create non-root user (Claude Code refuses --dangerously-skip-permissions as root)
RUN useradd -m -s /bin/bash mimoza

# Create working directory (mimoza's sandbox)
RUN mkdir -p /app/workspace && \
    chown -R mimoza:mimoza /app/workspace

# Switch to non-root user for remaining setup
USER mimoza

# Install Bun for mimoza user
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/home/mimoza/.bun/bin:$PATH"

# Set up workspace git repo
RUN cd /app/workspace && \
    git init && \
    git config user.email "mimoza@bot" && \
    git config user.name "Mimoza"

# Copy CLAUDE.md into the workspace (CLAUDE.md is at repo root = build context)
COPY --chown=mimoza:mimoza CLAUDE.md /app/workspace/CLAUDE.md
RUN cd /app/workspace && git add -A && git commit -m "Initial Mimoza setup"

# Copy Telegram plugin
COPY --chown=mimoza:mimoza telegram-plugin/ /home/mimoza/.claude/plugins/cache/claude-plugins-official/telegram/0.0.1/

# Install Telegram plugin dependencies
RUN cd /home/mimoza/.claude/plugins/cache/claude-plugins-official/telegram/0.0.1 && /home/mimoza/.bun/bin/bun install

# Copy minimal settings
COPY --chown=mimoza:mimoza docker/settings.json /home/mimoza/.claude/settings.json

# Create channels directory (will be mounted from host)
RUN mkdir -p /home/mimoza/.claude/channels/telegram

# Create .claude.json to skip onboarding
RUN echo '{"hasCompletedOnboarding":true,"lastOnboardingVersion":"2.1.81","numStartups":100,"installMethod":"npm","projects":{"/app/workspace":{"allowedTools":[],"hasTrustDialogAccepted":true}}}' > /home/mimoza/.claude.json

# Pre-accept the workspace trust by creating the project config with trust marker
RUN mkdir -p /home/mimoza/.claude/projects/-app-workspace && \
    echo '{"hasTrustedWorkspace":true}' > /home/mimoza/.claude/projects/-app-workspace/settings.json && \
    echo '{"hasTrusted":true}' > /home/mimoza/.claude/projects/-app-workspace/.trust

# Copy entrypoint
USER root
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Run as mimoza user
USER mimoza

WORKDIR /app/workspace

ENTRYPOINT ["/entrypoint.sh"]
