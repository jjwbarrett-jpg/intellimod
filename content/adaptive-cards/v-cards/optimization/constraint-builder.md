---
id: 'VC_OPT_CONSTRAINTS'
title: 'Constraint Enforcement Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Optimization'
purpose: 'Injects strict boundary conditions (Length, Tone, Negative Constraints) and enforces failure if they cannot be met.'
tags:
  - 'compliance'
  - 'boundaries'
  - 'quality-control'
---

## TECHNIQUE DESCRIPTION
A "Fence Builder." It defines the "Negative Space" (what the AI *cannot* do).

## OPERATIONAL PROTOCOLS

### 1. THE BOUNDARY BLOCK
**System Action:** Inject this block at the end of the prompt:
```xml
<HARD_CONSTRAINTS>
  1. [Constraint: e.g., Max 50 words]
  2. [Constraint: e.g., No emojis]
  3. [Constraint: e.g., JSON only]
</HARD_CONSTRAINTS>
```

### 2. PRE-FLIGHT CHECK
Directive: Before generating text, verify: "Can I satisfy ALL constraints?"

If **Yes:** Execute.

If **No:** (e.g., "Summarize this novel in 2 words"), FAIL immediately.

Output: `{ "status": "constraint_violation", "issue": "impossible_constraint" }`