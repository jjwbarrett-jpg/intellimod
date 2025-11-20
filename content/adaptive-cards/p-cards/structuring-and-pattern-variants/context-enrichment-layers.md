---
id: 'PC_CONTEXT_001'
title: 'Context Enrichment Layers'
card_type: 'P-Card'
category: 'Prompt Structuring & Pattern Variants'
purpose: 'Systematically enhance a base prompt with selective, well-structured context (profile, history, retrieved docs) to increase relevance and accuracy.'
references:
- 'VC_015' # Cognitive Scaffolding
- 'VC_024' # C.R.A.F.T.
- 'VC_097' # 'Retrieval-Augmented Generation 1'
- 'VC_098' # 'Retrieval-Augmented Generation 2'
tags:
  - 'context'
  - 'metadata'
  - 'personalization'
  - 'enrichment'
  - 'rag'
---

## AI PROMPT CONTENT

### Goal
Improve response quality by gathering salient context (user metadata, prior interactions, retrieved knowledge) and **injecting it in a structured way** into the prompt, while keeping noise low.

### Core Technique
- Before sending to the LLM, an intermediary collects:
  - **User profile/preferences** (role, language, tier).
  - **Interaction history** (recent tasks, prior choices).
  - **Retrieved knowledge** (docs/snippets from KB/DB/RAG).
- The intermediary formats this as **clearly delimited sections** and appends a concise **Task** block.

### Best Practices
- Use explicit delimiters (e.g., XML/angle tags) and **stable section names**.
- Be **selective**: include only context that directly reduces ambiguity for the task.
- Cap each section (e.g., tokens or items) and prefer **ranked snippets**.
- Normalize formats (e.g., bullet facts, JSON fields) for predictable parsing.
- Track provenance (doc IDs/links) for auditing and optional citation.

### Prompt Pattern
```text
<User_Profile>
name: <name>
subscription_tier: <tier>
preferred_language: <lang or N/A>
</User_Profile>

<User_History>
- last_actions: [<brief entries>]
- preferences_inferred: [<bullets>]
</User_History>

<Retrieved_Context>
- doc_1: "<trimmed, high-signal snippet>"
- doc_2: "<trimmed, high-signal snippet>"
</Retrieved_Context>

<Task>
<concise task instruction with output contract>
</Task>
```

### Example
```text
<User_Profile>
Name: Alex
Subscription_Tier: Pro
Preferred_Language: Python
</User_Profile>

<User_History>
- last_actions: ["built CLI tool with FastAPI", "deployed to Render"]
- preferences_inferred: ["prefers minimal dependencies", "likes clear docstrings"]
</User_History>

<Retrieved_Context>
- doc_fastapi_quickstart: "FastAPI uses type hints to define request/response models..."
</Retrieved_Context>

<Task>
Provide a minimal example for creating a web server in Python using FastAPI.
Output only a runnable code snippet with an endpoint GET /health returning {"status":"ok"}.
</Task>
```

### Output Rules
   - Respect the Task contract; do not echo context unless requested.
   - If context conflicts, prefer Task; otherwise use most recent/relevant items.
   - If context is insufficient, request one targeted clarification (development) or proceed with safe defaults (production).

## DEVELOPER NOTES

### Compatible Modes
   - personalization
   - RAG-augmented answering
   - tool-assisted coding/copy generation
   - customer support assistants

### Common Uses
   - Tailor examples to a user’s preferred language/stack.
   - Ground answers with retrieved snippets to reduce hallucinations.
   - Maintain continuity by leveraging recent interactions.

### Notes
   - Implement a ranking policy (BM25/embedding + recency) and token budgets per section.
   - Strip PII or sensitive fields before injection; store provenance separately.
   - Combine with Prompt Validation Pipeline (pre) and Guardrail Filter Layers (post) for end-to-end safety.
