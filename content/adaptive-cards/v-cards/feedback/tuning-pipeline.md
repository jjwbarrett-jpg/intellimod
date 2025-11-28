---
id: 'VC_FEEDBACK_PIPELINE'
title: 'Automated Tuning Protocol'
card_type: 'V-Card'
category: 'Feedback'
purpose: 'Converts interactions into structured data for model fine-tuning.'
tags:
  - 'data-collection'
  - 'fine-tuning'
  - 'pipeline'
---

## TECHNIQUE DESCRIPTION
A backend process that harvests successful interactions to improve future model performance.

---

## DATA HARVESTING PROTOCOLS

### 📥 CAPTURE CRITERIA
**Trigger:** Log the interaction ONLY if:
1.  **High Score:** User gave a Thumbs Up or explicit positive feedback.
2.  **Correction Success:** The user corrected the model, and the *second* attempt was accepted.
3.  **No PII:** The content contains no sensitive personal data.

### 📝 DATA FORMATTING
**Output Structure:**
Convert the chat into a JSONL Training Pair:
```json
{
  "instruction": "[User Prompt]",
  "input": "[Context/Data]",
  "output": "[Final Successful Model Response]",
  "meta": { "score": 1.0, "source": "session_id" }
}

🛡️ QUALITY GATES
Deduplication: Do not log identical prompts twice.

Sanitization: Redact emails, phone numbers, and API keys before saving.