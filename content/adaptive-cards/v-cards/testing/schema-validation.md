---
id: 'VC_TEST_SCHEMA'
title: 'Schema Validation Logic'
card_type: 'V-Card'
category: 'Testing'
purpose: 'Enforces strict JSON structure for machine-readable outputs.'
tags:
  - 'json-schema'
  - 'validation'
  - 'structure'
---

## TECHNIQUE DESCRIPTION
A "Strict Type" checker. If the output isn't valid JSON, it is rejected.

---

## OPERATIONAL PROTOCOLS

### 📄 THE CONTRACT
**Rule:** Output must conform to this JSON Schema:
```json
{
  "status": "success | error",
  "data": { ... },
  "metadata": { "latency": 100 }
}
```

🔄 RETRY LOGIC
Trigger: Invalid JSON. Action:

Catch Error: "Missing key: 'status'."

Reprompt: "You missed the 'status' key. Fix it."

Limit: 3 Retries max.