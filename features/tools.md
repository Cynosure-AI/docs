<p class="doc-kicker">Capabilities & control</p>

# Tools & approvals

Tools let an agent do more than generate text: search connected sources, work with files, call external services, or run specialized actions. Cynosure supports built-in tools and Model Context Protocol (MCP) servers.

## Give a conversation tool access

Select the tools control in the composer, then choose individual tools or enable **Automatic tool discovery**. Explicit selection is predictable; automatic discovery lets Cynosure route a task to relevant tools from a larger catalog.

For repeatable work, configure tools on the agent’s **Tools** tab instead of selecting them in every chat.

## Approval choices

When a protected tool is requested, Cynosure shows what the agent intends to run. Review the tool name and arguments, then choose the available approval or denial action. A denial can include a reason so the agent can adapt its plan.

Use auto-approval only for agents and tools you trust. Actions that write files, execute commands, send messages, or modify an external service deserve extra care.

## Connect an MCP server

1. Open **Settings**, then **MCP Servers** from the relevant tool-management entry.
2. Browse recommended servers or add a server configuration.
3. Enter required environment variables or credentials.
4. Connect the server and confirm its tools are available.
5. Add those tools to an agent or conversation.

::: tip Least privilege
Give each agent only the tools it needs. A smaller toolset improves routing and makes approval decisions easier to understand.
:::

## If a tool fails

Expand its call card in chat and read the output. Common causes are a disconnected MCP server, a missing credential, invalid arguments, inaccessible files, or an external service limit. Correct the configuration and ask the agent to retry.
