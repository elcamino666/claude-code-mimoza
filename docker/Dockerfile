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

# Create working directory (mimoza's sandbox)
RUN mkdir -p /app/workspace && \
    cd /app/workspace && \
    git init && \
    git config user.email "mimoza@bot" && \
    git config user.name "Mimoza"

# Copy CLAUDE.md into the workspace (CLAUDE.md is at repo root = build context)
COPY CLAUDE.md /app/workspace/CLAUDE.md
RUN cd /app/workspace && git add -A && git commit -m "Initial Mimoza setup"

# Copy Telegram plugin
COPY telegram-plugin/ /root/.claude/plugins/cache/claude-plugins-official/telegram/0.0.1/

# Install Telegram plugin dependencies
RUN cd /root/.claude/plugins/cache/claude-plugins-official/telegram/0.0.1 && bun install

# Copy minimal settings
COPY docker/settings.json /root/.claude/settings.json

# Create channels directory (will be mounted from host)
RUN mkdir -p /root/.claude/channels/telegram

# Copy entrypoint
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

WORKDIR /app/workspace

ENTRYPOINT ["/entrypoint.sh"]
