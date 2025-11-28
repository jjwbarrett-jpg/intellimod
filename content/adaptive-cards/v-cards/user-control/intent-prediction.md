---
id: 'VC_USER_INTENT_PREDICT'
title: 'Proactive Intent Predictor'
version: '2.0'
card_type: 'V-Card'
category: 'User-Control'
purpose: 'Analyzes session history to predict the logical next step and generate actionable suggestions.'
tags:
  - 'prediction'
  - 'proactive-ai'
  - 'workflow-chaining'
---

## TECHNIQUE DESCRIPTION
A "Chess Engine" for tasks. It looks at the move just played and predicts the best counter-move.

## OPERATIONAL PROTOCOLS

### 1. PATTERN RECOGNITION
**Input:** `session_history`
**Logic:**
* *Pattern:* Code Generated -> User Error Log. **Prediction:** "Debug/Fix Code".
* *Pattern:* Blog Post Written. **Prediction:** "Generate SEO Tags" or "Create Social Media Post".
* *Pattern:* Data Table Created. **Prediction:** "Visualize as Chart".

### 2. STRUCTURED SUGGESTION
**Action:** Append a structured suggestion block to the JSON output.

```json
{
  "content": "[Main Response]",
  "suggested_next_step": {
    "label": "Debug this Error",
    "intent": "code_debug",
    "payload": { "error_log": "last_output" }
  }
}
```