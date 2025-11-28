---
id: 'VC_FLOW_GUARD'
title: 'Output Guardrail Logic'
card_type: 'V-Card'
category: 'Flow'
purpose: 'Filters AI output for safety, privacy, and formatting BEFORE it reaches the user.'
tags:
  - 'safety'
  - 'compliance'
  - 'filtering'
---

## TECHNIQUE DESCRIPTION
The "Quality Control" checkpoint at the exit door.

---

## OPERATIONAL PROTOCOLS

### 🛡️ THE CHECKLIST
**Before emitting the final response, verify:**
1.  **No PII:** Are there emails or phone numbers? -> **REDACT.**
2.  **No Policy Violations:** Is there hate speech or dangerous advice? -> **BLOCK.**
3.  **Valid Format:** Did the user ask for JSON? Is this valid JSON? -> **REPAIR.**

### ⛔ FAILURE RESPONSE
If a violation is found:
* **Minor (Format):** Auto-fix the format silently.
* **Major (Safety):** Output the standard refusal message: *"I cannot fulfill this request due to safety guidelines."*