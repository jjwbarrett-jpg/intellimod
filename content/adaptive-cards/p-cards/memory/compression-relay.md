---
id: 'PC_CR_001'
title: 'Compression Relay'
card_type: 'P-Card'
category: 'Memory'
purpose: 'Condense large memory blocks or project threads into compact recall keys or summaries that can be reliably rehydrated later.'
references:
  - 'VC_013' # Chain-of-Thought 
tags:
  - 'memory'
  - 'compression'
  - 'summarization'
  - 'recall-keys'
  - 'context'
  - 'checkpointing'
---

## AI PROMPT CONTENT

### Goal
Translate long or evolving context (brainstorms, research threads, project logs) into compact, reusable memory artifacts—such as summaries and recall keys—that can be expanded (“rehydrated”) on demand.

### Core Technique
- **Segment & label**: Break the source into logical chunks and label each with stable identifiers (e.g., `project:module:topic`).
- **Summarize hierarchically**: Create tiered summaries (ultra-compact key → short stub → extended outline).
- **Emit recall keys**: Generate portable, unique keys (hash or slug) that map to summaries and source pointers.
- **Rehydration plan**: Store instructions describing how to expand a stub back to fuller context (what to fetch, in what order).

### Best Practices
- Keep the **ultra-compact key** ≤ 1–2 sentences or 150 characters.
- Include **canonical pointers** (file IDs, note links, doc paths) in a `sources` field.
- Maintain **versioning** and timestamps; treat each relay as an immutable checkpoint.
- Prefer **domain-specific facets** (e.g., goals, risks, decisions, open-questions) for quick scanning.
- Pair with **Anchor Point** for continuity and **Recall Assistant** for retrieval.

### Activation Cues (Examples)
- “Summarize this 1000-token brainstorm into a compact format for future reuse.”
- “Build a recall key I can use to rehydrate this thread.”
- “Turn this research into a portable memory stub.”

### Prompt Pattern (Example)
```text
You are a memory compressor. Convert the SOURCE into a Compression Relay with fields:
- recall_key (string, unique, portable)
- ultra_compact (<=150 chars)
- stub (5–8 bullets capturing goals, decisions, constraints, open-questions)
- outline (optional, short hierarchical outline)
- sources (array of pointers/IDs/links)
- rehydrate_instructions (ordered steps to rebuild full context)
Return JSON only.
```

### Output Rules
   - Emit only a single JSON object with keys:
       - recall_key, ultra_compact, stub (array of bullet strings), outline (optional), sources (array), rehydrate_instructions (array).
   - Avoid verbatim long quotes; summarize and point to sources via IDs/links.
   - Keep ultra_compact within the character limit; enforce consistency checks (non-empty stub, at least one source if available).

## DEVELOPER NOTES

### Compatible Modes
   - long-running workflows, serialized writing, technical document management, research pipelines.

### Common Uses
   - Translate large context windows into reusable prompt forms.
   - Compress evolving projects into checkpoints with stable IDs.
   - Maintain continuity under token constraints by rehydrating only when needed.

### Notes
   - Store relays in a registry keyed by recall_key; include version and timestamp.
   - Validate field lengths and presence; reject if ultra_compact exceeds limit or stub is empty.
   - Consider hashing canonical source pointers into the recall_key for collision resistance.
   - Log rehydration usage to refine which facets matter most in future compressions.
   