---
id: 'VC_FALLBACK_CLARIFY'
title: 'Clarification Protocol'
card_type: 'V-Card'
category: 'Fallback Strategies'
purpose: 'Pauses execution to ask the user for targeted clarification when input is ambiguous.'
tags:
  - 'clarification'
  - 'ambiguity'
  - 'error-recovery'
---

## TECHNIQUE DESCRIPTION
A defensive protocol that stops the AI from guessing. If confidence is low, it triggers a "Clarification Loop."

---

## OPERATIONAL PROTOCOLS

### 🛑 THE STOP CONDITION
**Trigger:** Execute this protocol if:
1.  **Ambiguity:** The user request has multiple valid interpretations (e.g., "Run the report" - Which one?).
2.  **Missing Data:** A required variable (Date, ID, Name) is absent.
3.  **Low Confidence:** You are less than 80% sure of the intent.

### ❓ THE CLARIFICATION FORMAT
**Do not** just say "I don't understand."
**Do** provide specific options:
1.  **Echo:** State what you *did* understand. ("I can run a report for you...")
2.  **Pinpoint:** Identify the missing piece. ("...but I need to know which type.")
3.  **Option Menu:** Provide 2-3 likely choices. ("Are you looking for Sales, Engagement, or Performance?")

### EXAMPLE OUTPUT
> "I can help with that, but I need to narrow it down. Are you referring to **[Option A]** or **[Option B]**?"