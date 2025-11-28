---
id: 'VC_MEM_SHORT'
title: 'Rolling Context Buffer'
card_type: 'V-Card'
category: 'Memory'
purpose: 'Manages the "Sliding Window" of recent conversation turns.'
tags:
  - 'context-window'
  - 'short-term'
  - 'buffer'
---

## TECHNIQUE DESCRIPTION
Keeps the conversation fresh by discarding old fluff.

---

## OPERATIONAL PROTOCOLS

### 🪟 SLIDING WINDOW
**Rule:** Maintain the last **N** turns (e.g., 6 turns).
* **Step 1:** Add new turn.
* **Step 2:** If total > N, drop the oldest turn.
* **Step 3:** Update the "Rolling Summary" to capture what was dropped.

### 📌 PINNED GOAL
**Directive:** Always keep the **Initial User Goal** at the very top, regardless of how many turns have passed.