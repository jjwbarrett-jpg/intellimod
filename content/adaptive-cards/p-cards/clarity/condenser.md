---
id: 'PC_COND_001'
title: 'Condenser'
card_type: 'P-Card'
category: 'Clarity'
purpose: 'Compress longer prompts or outputs into compact, efficient expressions while preserving tone and key insights.'
references:
  - 'VC_024' # C.R.A.F.T.  
  - 'SC_04' # I.C.E. Logic
tags:
  - 'compression'
  - 'summarization'
  - 'brevity'
  - 'clarity'
  - 'context-window'
  - 'token-budget'
---

## AI PROMPT CONTENT

### Goal
Produce a shorter version of the input that keeps core meaning, key insights, and tone, suitable for tight token budgets or smaller context windows.

### When to Use
- When word count or space is limited.
- When outputs are redundant or overly wordy.
- When preparing inputs for smaller context windows (e.g., short summaries or memory slots).

### Core Technique
- Identify thesis, critical facts, and decisive claims; remove repetition and hedging.
- Prefer concrete nouns/verbs over qualifiers; collapse lists where possible.
- Preserve domain terms and named entities; maintain original tone constraints.
- Apply **V4_CRAFT** for structure, **V19_Efficiency_Optimizers** for brevity tactics, **V12_ICE** for context retention.

### Output Rules
- Honor any explicit length targets (e.g., tokens, characters, sentences).
- Do not introduce new facts; do not change commitments.
- Return only the condensed text with original tone intact.

### Sample Prompts
- "Compress this to half the length."
- "Keep only the most important parts."
- "Summarize while keeping key tone and structure."

## DEVELOPER NOTES

### Compatible Modes
- Refinement after drafting; pre-inference compression; memory/notes condensation.

### Common Uses
- Tight executive summaries from long drafts.
- Shrinking verbose prompts before agent/tool calls.
- Preparing compact context windows for retrieval or chaining.

### Integration Tips
- Often paired with Expanders (e.g., Explainer, Clarifier) for bidirectional simplification.
- Run after **Aligner/Clarifier**, before formatting/output cards.
- For regulated content, whitelist required disclaimers to avoid accidental removal.

### Notes
- Consider graded targets (e.g., 70%, 50%, 25% length) and enforce via tests.
- Track meaning-preservation with a checklist: thesis present, entities kept, constraints intact.
