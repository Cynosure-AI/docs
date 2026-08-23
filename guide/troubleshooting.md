<p class="doc-kicker">Quick fixes</p>

# Troubleshooting

Start with the symptom below. If a task is still running, avoid closing Cynosure until you have checked workspace activity.

## Cynosure cannot send a message

Open **Settings → Providers**, test the active provider, and confirm its API key, base URL, default model, account credit, and network access. For Ollama or LM Studio, confirm the local service is running and the model is installed.

## A model is missing

Refresh or retest the provider. Some providers expose only models enabled for the account or endpoint. You can also enter a model identifier manually where the interface allows it.

## A tool is unavailable

Confirm the MCP server is connected, required environment variables are filled in, and the tool is selected for the current conversation or agent. Automatic discovery does not make a disconnected tool available.

## An agent is waiting

Check workspace activity for an approval request. Review the requested tool and arguments, then approve or deny it. Scheduled and background work can also wait for approval.

## Memory returns nothing useful

Verify the document says **Indexed**, the correct memory folder is selected, and automatic retrieval is enabled. Ask a more specific question and remove stale duplicates. If the embedding configuration changed, rebuild the affected vectors.

## Voice input does not appear

Enable it under **Settings → Voice**. For local Whisper, download the selected model and permit microphone access. Confirm the correct input device is selected.

## A schedule did not run

Check that the job and its agent are enabled, inspect the displayed next-run time, and run the job manually. Then verify the agent’s provider, tools, and credentials. A protected tool may be waiting for approval.

## The interface looks wrong after a theme change

Switch to **Dark** or **Light** under **Settings → General**. If controls remain difficult to read, restart the desktop app. Theme choice is a display preference and does not alter workspace data.

## Before resetting data

Use **Settings → Backup & Restore** to export the relevant modules. Reset only the smallest affected area; rebuilding vector indexes is safer than deleting source documents when the problem is limited to retrieval.

::: tip Useful details for a bug report
Record the Cynosure version, operating system, provider and model, the exact action, visible error text, whether it is reproducible, and whether the same action works in Free Chat.
:::
