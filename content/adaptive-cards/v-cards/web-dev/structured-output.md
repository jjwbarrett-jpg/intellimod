---
id: 'VC_WEB_STRUCT'
title: 'Structured Output Enforcer'
card_type: 'V-Card'
category: 'Web Dev'
purpose: 'Guarantees that the AI output matches a strict JSON schema.'
tags:
  - 'json'
  - 'schema'
  - 'validation'
---

## TECHNIQUE DESCRIPTION
The "API Contract." It ensures the output doesn't break the frontend.

---

## OPERATIONAL PROTOCOLS

### 📄 SCHEMA LOCK
**Directive:** You must output **valid JSON** matching this structure:
```json
{
  "key1": "string",
  "key2": 123,
  "key3": ["list"]
}
```

🔇 SILENCE RULE
Rule: Do not wrap the JSON in markdown code fences (json ... ) unless requested. Do not add "Here is your JSON." Just output the raw object.