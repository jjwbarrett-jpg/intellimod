---
id: 'VC_FALLBACK_CLARIFY'
title: 'Ambiguity Resolution Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Fallback'
purpose: 'Halts execution when input is ambiguous and generates a structured menu for user selection.'
tags:
  - 'clarification'
  - 'error-recovery'
  - 'interactive-menu'
---

## TECHNIQUE DESCRIPTION
A defensive protocol. It stops the AI from hallucinating a choice when the user wasn't clear.

## OPERATIONAL PROTOCOLS

### 1. THE STOP CONDITION
**Trigger:** * **Multiple Interpretations:** "Run the report" (Daily? Monthly?).
* **Missing Variables:** "Send email to Bob" (Which Bob? What subject?).
* **Low Confidence:** `< 80%` certainty.

### 2. THE CLARIFICATION MENU (JSON)
**Action:** Output a structured request for data.
```json
{
  "status": "clarification_needed",
  "issue": "ambiguous_timeframe",
  "message": "I can run the report, but I need to know the timeframe.",
  "options": [
    { "label": "Daily Report", "value": "report_daily" },
    { "label": "Monthly Summary", "value": "report_monthly" }
  ]
}
```

### 3. AUTOMATION BEHAVIOR
**Constraint:** Do NOT guess. If you guess wrong, you waste tokens and confuse the user. It is better to ask.