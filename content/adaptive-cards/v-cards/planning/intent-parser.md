---
id: 'VC_PLAN_INTENT'
title: 'Intent Parsing Logic'
card_type: 'V-Card'
category: 'Planning'
purpose: 'Converts natural language into strict JSON parameters for tools.'
tags:
  - 'parsing'
  - 'parameters'
  - 'tool-use'
---

## TECHNIQUE DESCRIPTION
A translation layer that turns "Human Speak" into "Machine Speak."

---

## OPERATIONAL PROTOCOLS

### 🔍 PARSING RULES
1.  **Extract:** Identify the Operation (e.g., "save_file") and Parameters (e.g., "filename").
2.  **Validate:** Check against the Schema. Are all required fields present?
3.  **Clarify:** If a field is missing, output a `clarifications` array instead of guessing.

### 📄 OUTPUT FORMAT
**Success:**
```json
{
  "operation": "save_file",
  "filename": "test.py",
  "content": "print('hello')",
  "status": "valid"
}
```

**Missing Info:**

```json
{
  "operation": "save_file",
  "clarifications": ["Missing 'filename'"],
  "status": "incomplete"
}
```