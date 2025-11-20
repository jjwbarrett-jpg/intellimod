---
id: 'PC_LTRAG_001'
title: 'Long-Term RAG'
card_type: 'P-Card'
category: 'Memory'
purpose: 'Provide durable memory by retrieving relevant knowledge from an external store (e.g., vector DB) and injecting it into prompts before generation.'
references: []
tags:
  - 'long-term-memory'
  - 'rag'
  - 'embeddings'
  - 'vector-database'
  - 'knowledge-base'
---

## AI PROMPT CONTENT

### Goal
Augment responses with accurate long-term context by converting the user query into embeddings, retrieving top-matching chunks from a knowledge base, and conditioning the LLM on those chunks.

### Core Technique
- **Embed → Retrieve**: Convert the query to an embedding and search a vector DB (top-k with score threshold).
- **Chunk discipline**: Store knowledge as small, coherent passages to improve retrieval precision.
- **Context injection**: Prepend/append retrieved chunks to the model prompt with clear boundaries and citations/handles.

### Best Practices
- Maintain **consistent chunk sizes** (e.g., 200–500 tokens) with overlap for continuity.
- **De-duplicate** overlapping hits; rank by **semantic score × recency × source trust**.
- Separate **retrieval** from **generation** in a modular agent within the MPA.
- Record **source pointers** (doc, section, line range) for auditing and follow-up.
- Cache frequent queries and apply **freshness rules** for time-sensitive content.

### Prompt Pattern (Example)
**User Query**  
“How does our company’s new PTO policy work?”

**Retrieved Context (via RAG)**  
```yaml
retrieved_context:
  - "Document: HR_Policies.md | Section: PTO | Content: All full-time employees accrue 1.5 days of PTO per month..."
  - "Document: HR_Policies.md | Section: Carry-Over | Content: Employees may carry over a maximum of 5 unused PTO days..."
```

### Output Rules
   - Prefer grounded statements strictly supported by retrieved context.
   - Include source handles (doc name/section) for each specific claim.
   - If context is insufficient or conflicting, state limitations and request follow-up retrieval or human review.

## DEVELOPER NOTES

### Compatible Modes
   - knowledge assistants, internal policy Q&A, customer support, research helpers, procedural guidance.

### Common Uses
   - Answer org-specific policy or process questions.
   - Provide product documentation or SOP excerpts inline.
   - Summarize long docs with citations for verification.

### Notes
   - Implement a retrieval pipeline: query rewrite → embed → search → rerank → dedupe → prompt pack.
   - Track metadata (source, timestamp, version) and apply recency weighting where relevant.
   - Consider hybrid retrieval (BM25 + embeddings) and self-querying for better recall.
   - Add guardrails: max tokens for context, source diversity, and a no-evidence fallback that prompts additional retrieval.
   