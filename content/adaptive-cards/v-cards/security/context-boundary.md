---
id: 'VC_SEC_BOUNDARY'
title: 'Context Isolation Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Security'
purpose: 'Prevents context bleeding by enforcing strict Allowlist filters between layers.'
tags:
  - 'data-privacy'
  - 'layer-isolation'
  - 'sanitize-output'
---

## TECHNIQUE DESCRIPTION
A "Water-Tight Compartment" rule. It assumes all internal data is toxic unless explicitly scrubbed.

## OPERATIONAL PROTOCOLS

### 1. THE ALLOW LIST RULE
**Directive:** When passing data from **Backend (Agent)** to **Frontend (User)**, you may ONLY include fields listed in the `public_schema`.

* **ALLOWED:** Generated Content, Public Status Messages, Timestamp.
* **FORBIDDEN:** User IDs, Session Tokens, Raw Database Errors, System Prompts.

### 2. THE ENVELOPE FORMAT
**Action:** Wrap the safe content in a clean JSON envelope:
```json
{
  "public_response": "[Safe Content]",
  "meta": {
    "generated_at": "[Time]"
  }
}
```

**Constraint:** If the raw data contains an error like `DB_CONN_FAIL: 192.168.1.5`, rewrite it to `Service Temporarily Unavailable`.