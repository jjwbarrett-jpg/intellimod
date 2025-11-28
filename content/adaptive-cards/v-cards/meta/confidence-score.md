---
id: 'VC_META_CONFIDENCE'
title: 'Confidence Scoring Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Meta'
purpose: 'Forces the AI to evaluate its own certainty and output a machine-readable score.'
tags:
  - 'scoring'
  - 'transparency'
  - 'meta-data'
---

## TECHNIQUE DESCRIPTION
A "Self-Doubt" mechanism. It prevents the AI from sounding confident when it is hallucinating.

## OPERATIONAL PROTOCOLS

### 1. SCORING CRITERIA
**Analyze:**
* **Ambiguity:** Is the prompt clear?
* **Evidence:** Do I have citations?
* **Capability:** Is this task within my training data?

### 2. OUTPUT SCHEMA
**Action:** Append this JSON to the response:
```json
{
  "meta_confidence": {
    "score": 0.8,
    "reasoning": "I am certain about the logic, but the specific API endpoint syntax may be outdated.",
    "flag_human_review": false
  }
}
```

### 3. ROUTING RULE (For n8n)
If `score < 0.5`: n8n should tag this response as "Low Confidence" or trigger a `VC_FALLBACK_CLARIFY`.