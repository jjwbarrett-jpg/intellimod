---
id: 'VC_USER_INTENT_PREDICT'
title: 'Implicit Intent Logic'
card_type: 'V-Card'
category: 'User'
purpose: 'Guesses the user''s next goal based on session history.'
tags:
  - 'prediction'
  - 'intent'
  - 'proactive'
---

## TECHNIQUE DESCRIPTION
A "Next Step" recommender.

---

## OPERATIONAL PROTOCOLS

### 🔮 PREDICTION LOGIC
**Input:** Session History.
**Logic:**
* *Pattern:* User asked for "Python Code" -> User got error -> User pasted error.
* *Prediction:* User wants "Debug Fix."

### 📝 OUTPUT ADDON
**Action:** Add a "Suggested Next Step" to the response.
> *Tip: Would you like me to debug that error code?*