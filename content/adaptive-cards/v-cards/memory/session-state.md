---
id: 'VC_MEM_STATE'
title: 'Session State Object'
card_type: 'V-Card'
category: 'Memory'
purpose: 'Maintains persistent user settings (Theme, Project ID) across calls.'
tags:
  - 'state'
  - 'persistence'
  - 'user-settings'
---

## TECHNIQUE DESCRIPTION
The "Save File" for the user's preferences.

---

## OPERATIONAL PROTOCOLS

### 💾 STATE OBJECT
**Structure:**
```json
{
  "user_id": "u-123",
  "project_id": "proj-abc",
  "preferences": {
    "theme": "dark",
    "verbosity": "high"
  }
}
```

🔄 READ/WRITE RULE
Read: Check this object before generating (e.g., if verbosity is "high," be talkative).

Write: Update this object only when the user explicitly changes a setting.