---
id: 'VC_SEC_PERM_GATE'
title: 'Human-in-the-Loop Gate'
version: '2.0'
card_type: 'V-Card'
category: 'Security'
purpose: 'Signals the automation workflow to PAUSE and await explicit external confirmation before high-stakes actions.'
tags:
  - 'human-in-the-loop'
  - 'async-flow'
  - 'risk-management'
---

## TECHNIQUE DESCRIPTION
A "Break Glass" protocol. It prevents the AI from hallucinating consent.

## OPERATIONAL PROTOCOLS

### 1. RISK DETECTION
**Trigger:** Any action involving:
* **Destruction:** Deleting files, overwriting databases.
* **Cost:** Spending money, tokens, or credits.
* **Communication:** Sending emails, posting to social media.

### 2. THE SIGNAL (Async Pause)
**Action:** Do NOT execute the task. Instead, output the **Pause Signal**:

```json
{
  "status": "PAUSED_FOR_APPROVAL",
  "risk_level": "CRITICAL",
  "action_attempted": "[Describe Action]",
  "required_input": "CONFIRM_EXECUTION"
}
```

### 3. RESUMPTION LOGIC
Constraint: The system will only proceed if the next message payload contains: {"approval": "GRANTED"}. Any other input triggers an abort.


**How this works in n8n:**
1.  AI outputs the JSON.
2.  An `If` Node sees `"status": "PAUSED_FOR_APPROVAL"`.
3.  The workflow hits a **Wait Node**.
4.  You get an email/Slack message. You click "Approve."
5.  The workflow resumes.