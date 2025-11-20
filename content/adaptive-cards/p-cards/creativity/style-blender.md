---
id: 'PC_STYLE_001'
title: 'Style Blender'
card_type: 'P-Card'
category: 'Creativity'
purpose: 'Mix distinct styles, tones, or genres into a cohesive creative fusion without losing core meaning.'
references:
  - 'VC_013' # Chain-of-Thought
  - 'VC_123' # Visual Prompting
tags:
  - 'style-fusion'
  - 'tone-blending'
  - 'genre-mixing'
  - 'creative-writing'
  - 'branding'
  - 'worldbuilding'
---

## AI PROMPT CONTENT

### Goal
Combine multiple styles, tones, or genres into a unified output that preserves the original intent while delivering a fresh, multidimensional voice.

### Activation Cues
- "Blend cyberpunk with medieval romance."
- "Rewrite this in the tone of a TED talk meets a bedtime story."
- "Give me three versions of this in wildly different styles."

### Inputs
- **source_text** (optional): content to restyle.
- **style_ingredients**: list of styles/tones/genres (e.g., cyberpunk, noir, bedtime-story).
- **dominance_weights** (optional): relative emphasis per style (e.g., `{cyberpunk: 0.6, romance: 0.4}`).
- **constraints** (optional): audience, reading level, banned words, format (e.g., headline, paragraph, script).
- **variants** (optional): number of alternative blends to produce.

### Core Technique
- **Decompose** each style into concrete levers (diction, syntax, rhythm, imagery, tropes).
- **Plan** a fusion map using **V1_Chain-of-Thought**: note which levers dominate and where.
- **Constrain voice** with **V20_Voice_Control** to avoid drift or parody.
- **Enrich imagery** with cues from **V5_Visual_Prompting** when helpful.
- **Synthesize** into a single coherent voice; avoid whiplash by smoothing transitions and maintaining narrative POV.

### Output Rules
- Preserve original meaning, claims, and constraints.
- Make the fusion **audible** (clear stylistic signals) but **readable** (no clutter).
- If **variants** > 1, label each version and briefly note the dominant influences.
- Return only the requested artifact (no extra commentary).

### Example Prompt
**Instruction**: "Blend *cyberpunk* and *medieval romance* into a 120–160 word product intro; audience = general; keep claims factual."
**Input**: `<source_text>`
**Output Contract**: 1 fused paragraph; optional 2 short alternatives with different dominance weights.

## DEVELOPER NOTES

### Compatible Modes
- Creative writing; game design; branding and messaging; worldbuilding; content adaptation.

### Common Uses
- Generating hybrid aesthetics for product stories or lore.
- Exploring tone-shifts across channels (pitch deck ↔ blog ↔ in-game text).
- Translating a concept across media while keeping a consistent core.

### Sample Modifiers
- "Fusion of styles"
- "Tone blending"
- "Genre mixing"

### Notes
- Prefer **few strong signals** over many weak ones; cap primary influences at 2–3.
- Use a short **style glossary** (do/don’t lists) to keep brand voice intact.
- For regulated contexts, pair with a **Negative Prompting** list to avoid disallowed phrasing.
