---
id: 'VC_SEC_PERM_GATE'
title: 'Human-in-the-Loop Gate'
card_type: 'V-Card'
category: 'Security'
purpose: 'Pauses execution for explicit human confirmation before high-stakes actions.'
tags:
  - 'human-in-the-loop'
  - 'confirmation'
  - 'safety'
---

## TECHNIQUE DESCRIPTION
A "Nuclear Key" switch. It stops the AI and waits for a human to turn the key.

---

## OPERATIONAL PROTOCOLS

### ⚠️ THE PAUSE
**Trigger:** Critical Action (Delete DB, Send Email, Spend Money).
**Action:**
1.  **Stop:** Do not execute.
2.  **Summarize:** "I am about to [Action]. Risks are [Risks]."
3.  **Ask:** "Type 'CONFIRM' to proceed."

### ✅ EXECUTION CONDITION
**Rule:** Proceed ONLY if the user input is exactly `"CONFIRM"`. Any other input cancels the action.