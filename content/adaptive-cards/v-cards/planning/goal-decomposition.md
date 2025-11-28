---
id: 'VC_PLAN_DECOMPOSE'
title: 'Structured Goal Decomposition'
card_type: 'V-Card'
category: 'Planning'
purpose: 'Forces a JSON-structured plan before execution begins.'
tags:
  - 'planning'
  - 'json'
  - 'structure'
---

## TECHNIQUE DESCRIPTION
A "Measure Twice, Cut Once" protocol. It forces the AI to output a JSON plan before doing any work.

---

## OPERATIONAL PROTOCOLS

### 📋 THE PLANNING CONTRACT
**Trigger:** Complex requests (Coding, Research, Multi-step).
**Action:** Output a JSON object *first*.

### 📄 JSON SCHEMA
```json
{
  "user_goal": "[1-sentence summary]",
  "execution_plan": [
    "Step 1: [Action]",
    "Step 2: [Action]",
    "Step 3: [Action]"
  ],
  "required_tools": ["Tool A", "Tool B"]
}
```

⛔ FAILURE CONDITION
If the plan is vague (e.g., "Step 1: Do the work"), REJECT and ask for specific sub-steps.