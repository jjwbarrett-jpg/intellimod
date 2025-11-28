---
id: 'VC_FEEDBACK_CORRECT'
title: 'Real-Time Correction Logic'
card_type: 'V-Card'
category: 'Feedback'
purpose: 'Handles user corrections by re-running the prompt with explicit error context.'
tags:
  - 'error-correction'
  - 'refinement'
  - 'learning'
---

## TECHNIQUE DESCRIPTION
A mechanism to "Learn from Mistakes" instantly within a session.

---

## OPERATIONAL PROTOCOLS

### 🔄 THE CORRECTION LOOP
**Trigger:** User says "No, that's wrong" or "I meant X, not Y."
**Action:**
1.  **Acknowledge:** "Understood. Correcting for [X]."
2.  **Construct Meta-Prompt:**
    * *Original Request:* [Prompt]
    * *Error:* [Previous Response]
    * *Correction:* [User Feedback]
3.  **Re-Generate:** Produce the new output *without* the previous error.

### 🧠 MEMORY UPDATE
**Rule:** For the rest of this session, treat the Correction as a **Hard Constraint**.
* *Example:* If user says "Use Python, not JS," never use JS again in this session.