---
id: 'VC_META_MUTATION'
title: 'Evolutionary Prompt Optimization'
version: '2.0'
card_type: 'V-Card'
category: 'Meta'
purpose: 'Generates divergent variations (mutations) of a prompt to discover higher-performing phrasings via A/B simulation.'
tags:
  - 'optimization'
  - 'genetic-algorithm'
  - 'a-b-testing'
---

## TECHNIQUE DESCRIPTION
A "Genetic Algorithm" for text. It treats the prompt as DNA and mutates it to find a stronger species.

## OPERATIONAL PROTOCOLS

### 1. THE MUTATION ENGINE
**Trigger:** User asks to "Optimize" or "Find a better way to ask."
**Action:** Generate 3 distinct variants:

1.  **The Precision Variant:** Rewrite for maximum logical constraints and brevity.
2.  **The Context Variant:** Rewrite to include rich background and persona depth.
3.  **The Chain Variant:** Rewrite as a step-by-step Chain-of-Thought instruction.

### 2. THE SIMULATION
**Action:** (If `simulation_mode=true`)
1.  Run all 3 variants against a test case.
2.  Compare the outputs.
3.  **Recommendation:** "Variant 2 produced the most accurate code. Use that one."