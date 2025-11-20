---
id: 'PC_ABBR_001'
title: 'Abbreviator'
card_type: 'P-Card'
category: 'Clarity'
purpose: 'Condense long text into concise summaries, titles, or headers while preserving essential meaning.'
references:
  - 'VC_013' # Chain-of-Thought
  - 'VC_020' # Context Management
  - 'VC_074' # Negative Prompting   
tags:
  - 'summarization'
  - 'compression'
  - 'titles'
  - 'clarity'
  - 'editing'
---

## AI PROMPT CONTENT

### Goal
Produce a shorter version of a given passage (or a tight title/header) that retains key insights, intent, and tone.

### Activation Cues
- "Summarize this…"
- "Give me a short version…"
- "Compress into 1–2 sentences…"

### Inputs
- **source_text**: The passage to abbreviate.
- **length_target** (optional): words, characters, or sentence count.
- **style_modifiers** (optional): "Preserve tone", "Maintain key insights", "Make it punchy".

### Core Technique
- Identify core propositions, entities, and relationships.
- Remove redundancy, hedging, filler, and non-essential qualifiers.
- Preserve domain terms and decisive claims.

### Output Rules
- Honor **length_target** if provided.
- Keep proper nouns and technical terms intact where possible.
- Return only the abbreviated text (no extra commentary).

### Example Prompt
- **Instruction**: "Condense the following to 1–2 sentences. **Preserve tone** and **maintain key insights**."
- **Input**: `<source_text>`

## DEVELOPER NOTES

### Compatible Modes
- IntelliMod: Step 3 (Refine)
- MPA: Compression / Clarity Evaluation Phase

### Common Uses
- Naming sections and generating titles.
- Short executive summaries.
- Tightening verbose passages prior to formatting or publication.

### Sample Modifiers
- "Preserve tone"
- "Maintain key insights"
- "Make it punchy"

### Notes
- Often paired with Expanders (e.g., Explainer, Clarifier) for bidirectional simplification.
- Consider a guardrail to avoid removing legal/medical disclaimers or safety-critical details.
