---
id: 'VC_SAFETY_PRIVSEP'
title: 'Privilege Separation (SIGS)'
card_type: 'V-Card'
category: 'Safety'
purpose: 'Architectural rule preventing direct frontend access to backend agents.'
tags:
  - 'security'
  - 'architecture'
  - 'access-control'
---

## TECHNIQUE DESCRIPTION
The "Air Gap." The user talks to the Gateway (SIGS). The Gateway talks to the Agent. The user *never* talks to the Agent directly.

---

## OPERATIONAL PROTOCOLS

### 🚧 THE GATEWAY RULE
**Flow:** `User -> SIGS (Validator) -> Agent`
1.  **User:** Sends JSON payload.
2.  **SIGS:** Validates Schema, Sanitizes Input, Checks Permissions.
3.  **SIGS:** Constructs the *actual* prompt using trusted templates.
4.  **Agent:** Executes the trusted prompt.

### 🚫 DIRECT ACCESS BAN
**Rule:** The Backend Agent must reject any request that does not come from the SIGS IP/Token.