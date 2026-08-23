<p class="doc-kicker">Long-term knowledge</p>

# Memory

Memory spaces turn your documents into searchable context. Cynosure splits uploaded content into chunks, creates vector embeddings, and can extract entities and relationships for visual exploration.

![Documents organized into memory folders](../img/memories.png)

## Add documents

1. Open **Memories → Documents**.
2. Select **New Folder** to create a focused collection, or select an existing folder.
3. Select **Upload** and choose your files.
4. Wait until each file shows **Indexed** before relying on it in chat.

Focused folders generally retrieve better than a single catch-all collection. Group documents by project, client, subject, or access boundary.

## Use memory in chat

Select the memory control in the composer, choose one or more folders, and enable **Automatically retrieve relevant memory**. On an agent, make the same choice in its **Memory** tab to reuse it in every conversation.

Automatic retrieval searches for chunks relevant to the current request. It does not paste every document into every message.

## Relationships and visual graph

The **Relationships** view lists extracted connections. **Visual Graph** lays entities out spatially so you can follow edges, filter fact levels, adjust spacing, and show or hide labels.

![A Cynosure memory entity graph](../img/memory-graph.png)

<p class="screenshot-caption">Select an entity to center the graph on a product, person, concept, or technology.</p>

## Memory settings that matter

- **Embedding Model** controls how document chunks and queries become vectors. Changing it can require re-embedding.
- **Automatic Memory Retrieval** controls the number of ranked results returned per query.
- **Retrieval Reranker** can improve ordering of candidates.
- **Chunking** sets chunk size and overlap.
- **OCR** extracts visible text from images embedded in supported documents.
- **Entity Extraction Model** creates graph entities and relationships during explicit entity indexing.

::: warning Changing embeddings
Do not switch embedding model or dimensions casually. Existing vectors may need to be rebuilt before search results become reliable again.
:::

## Improve weak retrieval

Use descriptive filenames, remove outdated duplicates, place documents in a narrowly scoped folder, and ask a specific question. If results remain poor, review chunk size and retrieval count before changing the embedding model.
