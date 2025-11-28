---
id: 'VC_SEC_ROLE_GATE'
title: 'Role Access Control (ACL)'
card_type: 'V-Card'
category: 'Security'
purpose: 'Ensures only authorized roles can trigger specific prompt chains.'
tags:
  - 'acl'
  - 'access-control'
  - 'permissions'
---

## TECHNIQUE DESCRIPTION
The "Bouncer" at the club. It checks if your ID allows you to enter the VIP section.

---

## OPERATIONAL PROTOCOLS

### 🛑 ACCESS CHECK
**Before executing a chain, verify:**
1.  **Caller Identity:** Who is asking? (e.g., "FrontendUser" vs. "SystemAdmin")
2.  **Required Role:** What role is needed? (e.g., "Admin")
3.  **Match:** Does Caller have Role?

### ⛔ DENIAL RESPONSE
If checks fail:
> "Access Denied: Role [User] is not authorized to execute [AdminChain]."