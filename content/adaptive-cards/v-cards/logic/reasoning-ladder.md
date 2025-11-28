---
id: 'VC_LOGIC_LADDER'
title: 'Stepwise Reasoning Protocol'
card_type: 'V-Card'
category: 'Logic'
purpose: 'Enforces explicit, numbered steps to validate complex arguments.'
tags:
  - 'chain-of-thought'
  - 'reasoning'
  - 'validation'
---

## TECHNIQUE DESCRIPTION
A "Show Your Work" protocol that forces the AI to build an argument from the ground up.

---

## OPERATIONAL PROTOCOLS

### 🪜 THE LADDER STEPS
**Requirement:** Before the Conclusion, output this block:
1.  **Premise 1:** [Fact A] (Verified?)
2.  **Premise 2:** [Fact B] (Verified?)
3.  **Inference:** Since A and B are true, C is likely true.
4.  **Check:** Are there any logical fallacies?

### 🎯 TRIGGER PHRASES
* "Walk me through it."
* "Prove it."
* "Explain your logic."

### ⚠️ FAILURE CONDITION
If a step cannot be verified (e.g., "Premise 2 is an assumption"), stop and flag it as a **Weak Link**.