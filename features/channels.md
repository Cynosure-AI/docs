<p class="doc-kicker">Remote conversations</p>

# Messaging channels

Channels connect agents to Telegram, Discord, or Slack so you can interact with them away from the desktop UI.

## Add a channel

1. Open **Settings → Channels**.
2. Add a Telegram, Discord, or Slack channel.
3. Enter the bot or app credentials required by that service.
4. Choose which agents the channel may use.
5. Test the connection, then enable it.

Each service has its own bot setup. Discord may require the Message Content intent; Slack commonly uses app and bot tokens with Socket Mode; Telegram uses a bot token from BotFather.

## Choose exposed agents carefully

Only allow agents intended for remote use. Review their tools, memory folders, approval policy, and sub-agents. A channel-facing agent should not have broad access simply because a desktop-only agent does.

## Troubleshoot a silent channel

Confirm the channel is enabled, the token has not expired or been revoked, the service-specific permissions are present, and the intended agent is allowed. Then run the connection test and inspect Cynosure’s activity or notifications for an error.
