---
id: 'PC_ALIGN_001'
title: 'Aligner'
card_type: 'P-Card'
category: 'Clarity'
purpose: 'Refine structure and logical flow to resolve conflicts and ensure consistent tone and intent across a prompt.'
references:
  - 'VC_013' # Chain-of-Thought
  - 'VC_015' # Cognitive Scaffolding
  - 'VC_024' # C.R.A.F.T.
tags:
  - 'alignment'
  - 'cohesion'
  - 'clarity'
  - 'structure'
  - 'prompt-engineering'
---

## AI PROMPT CONTENT

### Goal
Transform fragmented or contradictory prompts into a coherent, consistently toned instruction that preserves intent and clarifies relationships between ideas.

### When to Use
- When the prompt feels fragmented or contradictory.
- When multiple roles, goals, or tones seem to compete.
- When converting abstract ideas into a structured framework.

### Core Technique
- Identify and resolve internal conflicts (roles, goals, tone).
- Normalize terminology and unify voice.
- Reorder elements into a logical sequence (context → objective → constraints → outputs).
- Make implicit relationships explicit with labeled sections and bullets.

### Output Rules
- Maintain original intent and necessary constraints.
- Remove redundancy and contradictory directives.
- Return a single, well-structured prompt—no extra commentary unless requested.

### Sample Prompts
- "Align this prompt's structure with its intent."
- "Refine the message to maintain consistency throughout."
- "Reorder and unify elements for better clarity and cohesion."

## DEVELOPER NOTES

### Compatible Modes
   - Pre-formatting polish before submission.
   - Works well alongside **Clarifier** or **Editor** roles.

### Common Uses
   - Consolidating multi-voice drafts into one consistent instruction.
   - Cleaning up role/tone conflicts in long prompts.
   - Turning abstract notes into an actionable prompt template.

### Notes
   - Keep edits minimally invasive; prefer reordering and labeling before rewriting content.
   - Preserve domain-critical terms; flag any removed constraints that could affect outcomes.
