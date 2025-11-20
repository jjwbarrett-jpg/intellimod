---
id: 'PC_AMP_001'
title: 'Amplifier'
card_type: 'P-Card'
category: 'Clarity'
purpose: 'Boost emotional tone, energy, and emphasis while preserving meaning and authenticity.'
references:
  - 'VC_074' # Negative Prompting
  - 'VC_123' # Visual Prompting  
tags:
  - 'tone'
  - 'style'
  - 'storytelling'
  - 'marketing'
  - 'persuasion'
  - 'emphasis'
---

## AI PROMPT CONTENT

### Goal
Increase the energy, resonance, and persuasive force of text without adding fluff, exaggeration, or changing the core message.

### When to Use
- When the output feels flat, dry, or unengaging.
- When emphasis is needed without overstatement.
- To strengthen persuasive tone or narrative force.

### Core Technique
- Identify key claims and benefits; foreground them early.
- Tighten sentences; swap weak verbs/adjectives for precise, vivid language.
- Add rhythmic devices (parallelism, triads) sparingly.
- Preserve facts and commitments; **do not** invent details.
- Use **V20_Voice_Control** to keep persona consistent; apply **V6_Negative** to avoid hype words if required; optionally add sensory cues via **V5_Visual_Prompting**.

### Output Rules
- Maintain original meaning and constraints.
- Avoid hyperbole, clichés, and filler.
- Keep the register appropriate for audience and medium.
- Return only the amplified text (no commentary).

### Sample Prompts
- “Turn this up without overdramatizing it.”
- “Make the tone more engaging and bold.”
- “Add some electricity—energize the language.”

## DEVELOPER NOTES

### Compatible Modes
- Refinement after structure is set (post-Aligner/Clarifier).
- Storytelling, marketing copy, motivational content, executive summaries.

### Common Uses
- Punchier intros, headlines, and CTAs.
- Elevating product blurbs, pitch paragraphs, and case-study summaries.
- Boosting narrative momentum in long-form drafts.

### Integration Tips
- Run **Aligner** → **Clarifier** → **Amplifier** → final format card (e.g., JSON/Markdown).
- Pair with **Negative Prompting** lists to avoid banned words or hype.
- Use a small style glossary (approved verbs, adjectives) for consistency.

### Notes
- Prefer specificity over volume: one precise image beats three vague superlatives.
- Watch for tone drift in regulated contexts; keep compliance phrases intact.
- Consider A/B variants with different “intensity” levels (light/medium/bold).
