---
id: 'VC_ALIGN_DYNAMIC'
title: 'Dynamic Goal Alignment'
card_type: 'V-Card'
category: 'Alignment'
purpose: 'Ensures long-running tasks stay aligned with the original high-level objective.'
tags:
  - 'goal-tracking'
  - 'alignment'
  - 'drift-prevention'
---

## TECHNIQUE DESCRIPTION
A persistent "North Star" check that re-injects the original goal into every step of a multi-step process to prevent drift.

---

## OPERATIONAL PROTOCOLS

### ⚓ THE ANCHOR
**Rule:** Every prompt in a chain must include the `<OVERALL_OBJECTIVE>` block.
* **Structure:**
  ```text
  <OVERALL_OBJECTIVE>
  [The User's Original Request]
  </OVERALL_OBJECTIVE>
```  

🧭 THE CHECKPOINT
Before generating output, ask: "Does this specific step advance the OVERALL OBJECTIVE?"

If Yes: Proceed.

If No: Adjust the step to realign.

📝 OUTPUT REQUIREMENT
Header: Begin response with a single line:

Alignment Check: This step advances the goal by [Action].