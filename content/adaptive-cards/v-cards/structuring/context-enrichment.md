---
id: 'VC_STRUCT_CONTEXT'
title: 'Context Injection Layout'
version: '2.0'
card_type: 'V-Card'
category: 'Structuring'
purpose: 'Standardizes how User Profile, History, and RAG data are visually presented within the prompt context window.'
tags:
  - 'prompt-formatting'
  - 'context-window'
  - 'xml-structure'
---

## TECHNIQUE DESCRIPTION
The "HTML" of the prompt. It ensures the AI knows the difference between a "User Command" and a "Background Fact."

## OPERATIONAL PROTOCOLS

### 1. THE LAYOUT BLOCK
**System Action:** Wrap injected data in these strict XML tags:

```xml
<SYSTEM_CONTEXT>
  <USER_PROFILE>
    [Insert: state.user_profile]
  </USER_PROFILE>
  
  <PROJECT_BLUEPRINT>
    [Insert: state.project_blueprint]
  </PROJECT_BLUEPRINT>

  <RAG_KNOWLEDGE_BASE>
    [Insert: retrieved_chunks]
  </RAG_KNOWLEDGE_BASE>

  <CONVERSATION_HISTORY>
    [Insert: memory.short_term_buffer]
  </CONVERSATION_HISTORY>
</SYSTEM_CONTEXT>
```

### 2. PRIORITY HIERARCHY
**Directive:** If conflicts exist between sections:
  1. **Blueprints** (Current Goal) override **History** (Past Actions).
  2. **RAG Data** (Facts) overrides **User Profile** (Opinions/Bias).