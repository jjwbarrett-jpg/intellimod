---
id: 'VC_MEM_RECALL'
title: 'Pattern Recall Logic'
card_type: 'V-Card'
category: 'Memory'
purpose: 'Searches past session history for patterns or specific details.'
tags:
  - 'search'
  - 'pattern-matching'
  - 'recall'
---

## TECHNIQUE DESCRIPTION
A "Search Bar" for your conversation history.

---

## OPERATIONAL PROTOCOLS

### 🔍 SEARCH LOGIC
**Trigger:** User asks "What did we say about X?"
**Action:**
1.  **Scan:** Look for keyword "X" in past logs.
2.  **Retrieve:** Pull the relevant snippet.
3.  **Synthesize:** "We decided that X should be Y."

### ❓ UNCERTAINTY HANDLING
**Rule:** If you find 2 conflicting memories, **ASK** the user which one is correct.