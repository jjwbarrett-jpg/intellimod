---
id: 'VC_OPT_CONSTRAINTS'
title: 'Constraint Builder Protocol'
card_type: 'V-Card'
category: 'Optimization'
purpose: 'Enforces strict boundaries on scope, tone, length, and content.'
tags:
  - 'constraints'
  - 'boundaries'
  - 'scope-control'
---

## TECHNIQUE DESCRIPTION
A "Fence Builder." It defines exactly what the AI CANNOT do.

---

## OPERATIONAL PROTOCOLS

### 🚧 THE BOUNDARY BLOCK
**Rule:** Every prompt must include a hard constraint list.
```text
<CONSTRAINTS>
1. Length: Under 100 words.
2. Tone: Professional, No Slang.
3. Format: Bullet points only.
4. Forbidden: Do not mention [Competitor X].
</CONSTRAINTS>
```

🛑 VIOLATION CHECK
Directive: If the input content makes it impossible to satisfy a constraint (e.g., "Summarize this 1000-word essay in 3 words"), FAIL and ask for a relaxed constraint.