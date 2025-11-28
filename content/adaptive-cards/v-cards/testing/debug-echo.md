---
id: 'VC_TEST_ECHO'
title: 'Input Interpretation Debugger'
version: '2.0'
card_type: 'V-Card'
category: 'Testing'
purpose: 'Forces the AI to explicitly state its interpretation of the user intent before execution logic begins.'
tags:
  - 'debugging'
  - 'observability'
  - 'tracing'
---

## TECHNIQUE DESCRIPTION
A "Read-Back" protocol. Use this when the AI keeps misunderstanding complex instructions.

## OPERATIONAL PROTOCOLS

### 1. THE ECHO BLOCK
**Directive:** Output this JSON block *before* any other content.
```json
{
  "debug_echo": {
    "intent_detected": "[What user wants]",
    "constraints_active": ["Constraint A", "Constraint B"],
    "assumptions_made": ["Assumption 1"],
    "tool_selected": "[Tool Name]"
  }
}
```

2. CONFLICT CHECK
**Rule:** Compare `intent_detected` vs `user_input`.

If **Misaligned:** STOP. Output `status: "interpretation_conflict"`.