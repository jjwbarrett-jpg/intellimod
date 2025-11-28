---
id: 'VC_STRUCT_CONTEXT'
title: 'Context Injection Protocol'
card_type: 'V-Card'
category: 'Structuring'
purpose: 'Systematically injects User Profile, History, and RAG data into the prompt.'
tags:
  - 'context'
  - 'personalization'
  - 'rag'
---

## TECHNIQUE DESCRIPTION
A standard format for adding "Background Info" without confusing the AI.

---

## OPERATIONAL PROTOCOLS

### 📥 INJECTION BLOCK
**Format:**
```xml
<CONTEXT_LAYER>
  <USER_PROFILE>
    Name: [User Name]
    Expertise: [Beginner/Expert]
    Preferred_Lang: [Python/JS]
  </USER_PROFILE>
  <HISTORY_SUMMARY>
    [Last 3 interactions]
  </HISTORY_SUMMARY>
  <RETRIEVED_DATA>
    [RAG Snippets]
  </RETRIEVED_DATA>
</CONTEXT_LAYER>
```

🎯 PRIORITY RULE
Directive:

Profile vs. Default: If Profile says "Python," ignore system default.

Data vs. Profile: If Retrieved Data contradicts Profile preferences (e.g., facts vs. opinion), prioritize Data.