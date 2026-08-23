<p class="doc-kicker">Start here · 5 minutes</p>

# Getting started

The setup guide prepares Cynosure for its first conversation. You will create a local profile, connect at least one AI provider, choose memory defaults, optionally connect tools, and optionally create your first agent.

## Before you begin

You need an API key for a hosted AI provider, or a running local provider such as Ollama or LM Studio. Hosted providers charge according to their own pricing; Cynosure does not replace that provider account.

::: tip Local models
Ollama and LM Studio can run models on your computer without a hosted API key. Make sure the local service is running before testing the connection.
:::

## Complete the setup guide

1. **Profile** — Enter the name Cynosure should use for you. This is available to prompts through the user smart tag.
2. **AI Provider** — Choose a provider, enter its base URL and API key when required, then choose a default model. A working provider is required to continue.
3. **Memory** — Select the provider and model Cynosure should use to create vector embeddings. The default is a sensible starting point.
4. **MCP Tools** — Add any suggested Model Context Protocol servers you want. You can skip this and connect tools later.
5. **First Agent** — Optionally name a specialist, choose its model, write its system prompt, and give it memory.

Select **Go to Chat** when setup is complete.

## Send your first message

1. Open **Chat** in the sidebar.
2. Keep **Free Chat** selected for a model-only conversation, or select an agent.
3. Use the provider/model control at the right of the composer to confirm the model.
4. Type a message and press **Enter** or select **Send**.

![Cynosure ready for a new conversation](../img/cynosure_main.png)

## Re-run setup

Open **Settings → General**, scroll to **Setup Guide**, and select **Redo Setup**. Re-running the guide does not require you to erase your workspace.

## Your next step

Use [Chat](/features/chat) for one-off work, or create an [agent](/features/agents) when you want to reuse the same model, instructions, and capabilities.
