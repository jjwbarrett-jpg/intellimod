---
id: 'VC_MEM_COMPRESS'
title: 'Context Compression Engine'
card_type: 'V-Card'
category: 'Memory'
purpose: 'Shrinks large text blocks into compact "Recall Keys" to save tokens.'
tags:
  - 'compression'
  - 'summarization'
  - 'token-optimization'
---

## TECHNIQUE DESCRIPTION
A "Zip File" for text. It turns 1000 words into 50 words.

---

## OPERATIONAL PROTOCOLS

### 🗜️ COMPRESSION ALGORITHM
**Input:** Long Text.
**Output:** JSON Object.
```json
{
  "recall_key": "project-alpha-v1",
  "summary": "[3-bullet summary of key decisions]",
  "open_questions": ["[Question 1]", "[Question 2]"],
  "sources": ["doc-1.md"]
}
```

💧 REHYDRATION INSTRUCTION
Directive: When you see a recall_key, expand it back into the full context using the stored summary.