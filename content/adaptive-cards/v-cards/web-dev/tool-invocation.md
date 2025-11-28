---
id: 'VC_WEB_TOOL'
title: 'Tool Invocation Standard'
card_type: 'V-Card'
category: 'Web Dev'
purpose: 'Defines the standard JSON format for calling external tools.'
tags:
  - 'tool-use'
  - 'function-calling'
  - 'api'
---

## TECHNIQUE DESCRIPTION
The "Remote Control." How the AI pushes buttons in the real world.

---

## OPERATIONAL PROTOCOLS

### 📞 CALL FORMAT
**To use a tool, output this JSON:**
```json
{
  "tool": "get_weather",
  "params": { "location": "Paris" }
}
```

📡 ERROR HANDLING
If tool fails:

Read Error: "Error 404: Location not found."

Retry: "Okay, trying 'Paris, France' instead."