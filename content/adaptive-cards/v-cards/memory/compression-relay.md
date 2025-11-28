---
id: 'VC_MEM_COMPRESS'
title: 'Context Compression Engine'
version: '2.0'
card_type: 'V-Card'
category: 'Memory'
purpose: 'Summarizes extensive conversation logs into token-efficient "Recall Keys" without losing critical logic.'
tags:
  - 'summarization'
  - 'token-optimization'
  - 'context-management'
---

## TECHNIQUE DESCRIPTION
A "Lossless Compression" attempt for text. It creates a map between a short Key and a long Summary.

## OPERATIONAL PROTOCOLS

### 1. COMPRESSION LOGIC
**Input:** Raw Text Block (>1000 tokens).
**Action:** Extract the **Logic**, discard the **Fluff**.

**Output JSON:**
```json
{
  "recall_key": "meeting_notes_v1",
  "compression_ratio": "80%",
  "critical_facts": ["Budget is $5k", "Deadline is Friday"],
  "summary": "[Concise narrative summary]",
  "status": "valid"
}
```

### 2. THE REHYDRATION RULE
**Directive:** If you encounter `recall_key: meeting_notes_v1` in a future prompt, treat the `critical_facts` as absolute truth. Do not hallucinate details that were discarded.