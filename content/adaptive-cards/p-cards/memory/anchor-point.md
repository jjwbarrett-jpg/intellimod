---
id: 'PC_AP_001'
title: 'Anchor Point'
card_type: 'P-Card'
category: 'Memory'
purpose: 'Ground prompts in specific past context, memory tags, or prior session information to preserve continuity.'
references:
  - 'VC_013' # Chain-of-Thought
  - 'VC_015' # Cognitive Scaffolding  
tags:
  - 'memory'
  - 'anchor'
  - 'continuity'
  - 'context'
  - 'themes'
  - 'session'
---

## AI PROMPT CONTENT

### Goal
Preserve narrative and conceptual continuity across sessions by anchoring the current prompt to explicit past context, memory tags, or saved references.

### Core Technique
- **Select anchor**: Identify the relevant memory tag, prior session snippet, or saved prompt ID.
- **Inject context**: Include a concise summary or pointer (e.g., link/ID) to the anchor in the prompt.
- **Constrain scope**: Tie current instructions to the anchor to maintain theme and goal consistency.

### Best Practices
- Use stable **memory tags** or IDs (e.g., Obsidian links, prompt IDs).
- Keep the anchor **brief and specific**; avoid pasting entire histories.
- Add a **continuity check**: confirm the output aligns with the anchor’s theme and goals.

### Activation Cues (Examples)
- “Reference our last session on the Sky Nation timeline.”
- “Continue from memory anchor: <<V-Card_Chain-of-Thought>>.”
- “Tie this to the core theme I defined earlier.”

### Prompt Pattern (Example)
```text
You are continuing a long-running project.

<ANCHOR_CONTEXT>
- Memory Tag: sky_nation_timeline_v2
- Last Session Summary (2–3 bullets)
- Core Theme: exploration, treaty politics, skyborne logistics
</ANCHOR_CONTEXT>

<TASK>
Draft the next scene focusing on the diplomatic convoy’s departure, consistent with the anchor.
</TASK>

<CONTINUITY_CHECK>
- Does this scene reinforce the core theme?
- Are character motivations consistent with the last session?
</CONTINUITY_CHECK>
```

### Output Rules
   - Begin with a one-line continuity note describing how the output uses the anchor.
   - Produce only the requested artifact; avoid re-summarizing past sessions unless asked.
   - Flag misalignment if anchor and task conflict, and propose a minimal fix.

## DEVELOPER NOTES

### Compatible Modes
   - long projects, serialized interactions, world-building, research logs, multi-session design docs.

### Common Uses
   - Preserve narrative or conceptual continuity across drafts.
   - Refer back to user-defined memory tags or prior outputs.
   - Reinforce recurring themes or long-term goals.

### Notes
   - Store anchors separately from transient context to avoid truncation.
   - Maintain a registry of anchor IDs → summaries for quick injection.
   - Consider lightweight embeddings to retrieve the most relevant anchor snippets.
