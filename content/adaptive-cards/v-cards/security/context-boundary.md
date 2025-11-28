---
id: 'VC_SEC_BOUNDARY'
title: 'Context Isolation Protocol'
card_type: 'V-Card'
category: 'Security'
purpose: 'Prevents context bleeding between different layers of the application.'
tags:
  - 'isolation'
  - 'boundaries'
  - 'layering'
---

## TECHNIQUE DESCRIPTION
A "Water-Tight Compartment" rule. What happens in the UI stays in the UI. What happens in the Backend stays in the Backend.

---

## OPERATIONAL PROTOCOLS

### 🧱 THE WALL
**Rule:** Downstream agents (Backend) must NEVER see raw UI context (User Session IDs, Browser Headers).
* **Pass Only:** Explicitly allowed data fields.
* **Strip:** Everything else.

### 🔄 CROSS-LAYER RULE
**Directive:** If Layer A talks to Layer B, it must use a **Structured Envelope** (JSON). No free text.