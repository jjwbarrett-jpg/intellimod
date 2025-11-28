---
id: 'VC_META_REFLEX'
title: 'Reflexive Critique Loop'
version: '2.0'
card_type: 'V-Card'
category: 'Meta'
purpose: 'A "System 2" thinking protocol. It forces a Draft -> Critique -> Finalize loop to eliminate logic errors.'
tags:
  - 'quality-control'
  - 'self-correction'
  - 'two-pass-generation'
---

## TECHNIQUE DESCRIPTION
A "Self-Editing" protocol. Write drunk, edit sober.

## OPERATIONAL PROTOCOLS

### 1. THE THREE-STEP LOOP
**Directive:** You are not allowed to output the first thing that comes to mind.
1.  **Draft:** Generate a candidate response in your "scratchpad."
2.  **Critique:** Audit the draft.
    * *Check:* Did I miss any constraints?
    * *Check:* Is the tone correct?
    * *Check:* Are the facts accurate?
3.  **Finalize:** Rewrite the response based on the Critique.

### 2. VISIBILITY
**Output:** Only the **Finalize** step is shown to the user. The Draft and Critique remain internal (unless `debug_mode=true`).