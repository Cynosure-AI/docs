<p class="doc-kicker">Protect your workspace</p>

# Backup & restore

A Cynosure backup is a zip archive containing the workspace modules you select. Create one before moving computers, resetting data, replacing provider configuration, or making major memory changes.

## Export a backup

1. Open **Settings → Backup & Restore**.
2. Choose the modules to include.
3. Select **Export** and store the resulting zip somewhere safe.

Available modules include agents, providers, MCP servers, settings, channels, memory spaces, the knowledge graph, conversations, and usage statistics. The knowledge graph module preserves extracted facts, source evidence, manual corrections, entity merges, and manually created relationships. Provider and MCP backups can contain credentials; protect the archive accordingly.

## Restore a backup

1. Open **Settings → Backup & Restore**.
2. Choose the backup zip.
3. Review the detected modules and select what to import.
4. Confirm the restore and allow indexing work to finish.

Memory documents are restored with their stable identities and marked for search re-indexing. Knowledge search projections are rebuilt locally after import. Conversations restore only where their associated agents are present, so restore agents alongside conversations when you need both.

## A practical backup routine

- Export after building an important agent or schedule.
- Keep a copy outside the computer that runs Cynosure.
- Date filenames and retain more than one version.
- Test a restore before relying on the archive as your only copy.

::: warning Secrets inside
Treat backup archives like API keys. Do not attach them to public issues or store them in an unprotected shared folder.
:::
