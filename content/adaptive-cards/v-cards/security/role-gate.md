---
id: 'VC_SEC_ROLE_GATE'
title: 'Role Access Control (ACL)'
version: '2.0'
card_type: 'V-Card'
category: 'Security'
purpose: 'Validates that the active user possesses the required capability tokens before proceeding.'
tags:
  - 'acl'
  - 'permissions'
  - 'auth-check'
---

## OPERATIONAL PROTOCOLS

### 1. THE VERIFICATION CHECK
**Input:** The system provides a `user_metadata` object.
**Logic:**
1.  Identify the **Required Role** for this task (e.g., `ACTION_DELETE` requires `ROLE_ADMIN`).
2.  Scan `user_metadata.roles`.
3.  **Result:**
    * *Match:* Proceed silently.
    * *No Match:* Output `{ "status": "DENIED", "reason": "Insufficient Permissions" }`.

### 2. HIERARCHY RULE
* `ROLE_ROOT` > `ROLE_ADMIN` > `ROLE_EDITOR` > `ROLE_USER`.
* A user with `ROLE_ADMIN` automatically passes checks for `ROLE_USER`.