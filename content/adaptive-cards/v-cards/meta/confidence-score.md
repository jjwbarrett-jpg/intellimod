---
id: 'VC_META_CONFIDENCE'
title: 'Confidence Scoring Protocol'
card_type: 'V-Card'
category: 'Meta'
purpose: 'Adds a machine-readable confidence score to the AI response.'
tags:
  - 'scoring'
  - 'transparency'
  - 'meta-data'
---

## TECHNIQUE DESCRIPTION
A transparency tool that forces the AI to rate its own certainty.

---

## OPERATIONAL PROTOCOLS

### 📊 SCORING RULES
**Range:** 1-10 (1 = Guessing, 10 = Certain).
**Criteria:**
* **Ambiguity:** Is the prompt clear?
* **Evidence:** Do I have sources?
* **Domain:** Is this my expertise?

### 📝 OUTPUT FORMAT
**Append this JSON block to the end of the response:**
```json
{
  "confidence_score": 7,
  "rationale": "I am certain about the general concept, but the specific dates may vary."
}
```

⚠️ THRESHOLD RULE
If Confidence is < 5, you must add a text warning: "Note: This answer is speculative."