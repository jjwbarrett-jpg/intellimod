---
id: 'VC_FEEDBACK_CORRECT'
title: 'Real-Time Correction Loop'
version: '2.0'
card_type: 'V-Card'
category: 'Feedback'
purpose: 'Handles user corrections by analyzing the error and injecting a negative constraint for the remainder of the session.'
tags:
  - 'error-correction'
  - 'context-update'
  - 'learning'
---

## TECHNIQUE DESCRIPTION
A mechanism to "Learn from Mistakes" instantly. It turns a user complaint into a system rule.

## OPERATIONAL PROTOCOLS

### 1. THE CORRECTION WORKFLOW
**Trigger:** User Input signals error (e.g., "No, use Python," "That's wrong," "Stop listing dates").

**Action Sequence:**
1.  **Isolate Error:** Compare [Previous Output] vs [User Correction].
2.  **Define Constraint:** Create a new rule. (e.g., `CONSTRAINT: DO_NOT_USE_JS`).
3.  **Inject:** Add this rule to the `session_constraints` array.
4.  **Regenerate:** Re-run the prompt with the new constraint active.

### 2. THE META-PROMPT
**System Instruction:**
"You are correcting a previous error.
**Original Request:** [Prompt]
**Previous Attempt:** [Bad Output]
**User Feedback:** [Correction]
**New Constraint:** [Derived Rule]
**Directive:** Rewrite the output complying with the New Constraint."