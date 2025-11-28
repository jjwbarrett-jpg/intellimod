---
id: 'VC_FEEDBACK_PIPELINE'
title: 'Automated Fine-Tuning Pipeline'
version: '2.0'
card_type: 'V-Card'
category: 'Feedback'
purpose: 'Filters and sanitizes high-quality interactions to build a "Golden Dataset" for future model training.'
tags:
  - 'data-engineering'
  - 'fine-tuning'
  - 'dataset-generation'
---

## TECHNIQUE DESCRIPTION
A backend harvester. It runs effectively as a "Post-Process" node in n8n.

## OPERATIONAL PROTOCOLS

### 1. THE QUALITY GATE
**Rule:** Only harvest this interaction IF:
1.  `quality_score` >= 0.9 (Strong Positive).
2.  `input_token_count` < 4000 (Keep samples focused).

### 2. THE PRIVACY SCRUB (Critical)
**Action:** Before saving, run `VC_SAFETY_SANITIZE` logic.
* **Regex Scan:** Remove Email patterns, IP addresses, and API Key patterns (`sk-...`).
* **Result:** If PII is found and cannot be cleanly removed, **DISCARD** the sample.

### 3. DATASET FORMAT (JSONL)
**Output:** Append to `training_data.jsonl`:
```json
{
  "messages": [
    {"role": "system", "content": "You are IntelliMod..."},
    {"role": "user", "content": "[Sanitized User Prompt]"},
    {"role": "assistant", "content": "[Successful Model Response]"}
  ]
}
```