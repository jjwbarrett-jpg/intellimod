---
id: 'VC_MEM_ANCHOR'
title: 'Context Anchor Protocol'
card_type: 'V-Card'
category: 'Memory'
purpose: 'Grounds the current prompt in a specific past context or theme.'
tags:
  - 'memory'
  - 'continuity'
  - 'context'
---

## TECHNIQUE DESCRIPTION
A mechanism to "Pin" a specific memory to the top of the prompt so the AI doesn't drift.

---

## OPERATIONAL PROTOCOLS

### ⚓ THE ANCHOR BLOCK
**Rule:** Every prompt must include a reference to the active Anchor.
```text
<ANCHOR_CONTEXT>
* Active Theme: [Theme Name]
* Last Action: [Summary of last turn]
* Key Constraints: [Constraint A, Constraint B]
</ANCHOR_CONTEXT>
```

🔄 CONTINUITY CHECK
Directive: Before answering, verify: "Does my response contradict the Anchor?"

If Yes: Stop and adjust.

If No: Proceed.