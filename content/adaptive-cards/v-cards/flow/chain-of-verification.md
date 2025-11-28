---
id: 'VC_FLOW_VER'
title: 'Chain-of-Verification Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Flow'
purpose: 'Reduces hallucinations by generating and answering self-verification questions before finalizing the output.'
tags:
  - 'fact-checking'
  - 'anti-hallucination'
  - 'accuracy'
---

## TECHNIQUE DESCRIPTION
A "Trust but Verify" loop. The AI cross-examines itself.

## OPERATIONAL PROTOCOLS

### 1. THE CROSS-EXAMINATION
**Directive:** After drafting an answer, but *before* showing it to the user:
1.  **Draft:** [Initial Answer]
2.  **Question:** Generate 3 skepticism questions targeting facts in the Draft. (e.g., "Is that date actually correct?")
3.  **Verify:** Answer the verification questions independently.
4.  **Revise:** If the verification contradicts the draft, rewrite the draft.

### 2. OUTPUT VISIBILITY
* **Silent Mode (Default):** Show only the final, verified answer.
* **Transparent Mode:** Show the verification steps (useful for medical/legal contexts).