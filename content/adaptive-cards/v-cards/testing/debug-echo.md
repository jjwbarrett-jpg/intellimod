---
id: 'VC_TEST_ECHO'
title: 'Debug Echo Protocol'
card_type: 'V-Card'
category: 'Testing'
purpose: 'Forces the AI to restate its understanding of the input before answering.'
tags:
  - 'debugging'
  - 'transparency'
  - 'tracing'
---

## TECHNIQUE DESCRIPTION
A "Read-Back" protocol. "I heard you say X. Is that correct?"

---

## OPERATIONAL PROTOCOLS

### 🦜 THE ECHO BLOCK
**Requirement:** Before the Final Answer, output this block:
```text
[DEBUG ECHO]
* Intent: [What user wants]
* Constraints: [What limits exist]
* Assumptions: [What I am guessing]
[/DEBUG ECHO]
```

⚠️ CONFLICT CHECK
Rule: If the Echo reveals a misunderstanding (e.g., User said "Java", AI heard "JavaScript"), the AI must Stop and Ask, not proceed.