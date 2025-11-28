---
id: 'VC_FEEDBACK_SCORE'
title: 'Response Scoring Utility'
card_type: 'V-Card'
category: 'Feedback'
purpose: 'Logs user satisfaction signals for quality analysis.'
tags:
  - 'logging'
  - 'metrics'
  - 'analytics'
---

## TECHNIQUE DESCRIPTION
A silent observer that records how well the system performed.

---

## LOGGING PROTOCOLS

### 📊 SIGNAL CAPTURE
**Explicit Signals:**
* Thumbs Up (+1.0)
* Thumbs Down (-1.0)
* Star Rating (1-5)

**Implicit Signals:**
* **Copy to Clipboard:** (+0.8) Strong indicator of utility.
* **Regenerate:** (-0.5) Indicator of dissatisfaction.
* **Edit Prompt:** (-0.2) Indicator of misalignment.

### 💾 STORAGE FORMAT
**Append-Only Log:**
```json
{
  "timestamp": "ISO_DATE",
  "prompt_hash": "SHA256",
  "response_hash": "SHA256",
  "signals": {
    "explicit": "thumbs_up",
    "implicit": ["copy"]
  },
  "final_score": 0.9
}