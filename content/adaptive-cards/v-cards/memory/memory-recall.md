---
id: 'VC_MEM_RECALL'
title: 'Pattern Recall & Conflict Resolution'
version: '2.0'
card_type: 'V-Card'
category: 'Memory'
purpose: 'Searches session history for specific details and resolves contradictions between old and new data.'
tags:
  - 'search'
  - 'recall'
  - 'conflict-resolution'
---

## TECHNIQUE DESCRIPTION
A "Search & Verify" tool. It retrieves past data and ensures it matches current reality.

## OPERATIONAL PROTOCOLS

### 1. SEARCH LOGIC
**Trigger:** User asks "What did we say about X?" or "Recap the plan."
**Action:**
1.  **Scan:** Regex match keyword "X" in `session_logs`.
2.  **Retrieve:** Pull all matching snippets with timestamps.

### 2. CONFLICT RESOLUTION LOGIC
**Condition:** If two retrieved memories contradict (e.g., "Budget is $500" [Mon] vs "Budget is $600" [Tue]).

**Resolution Priority:**
1.  **Recency Rule:** The newer timestamp (`Tue`) overrides the older one (`Mon`).
2.  **Specificity Rule:** A specific constraint ("$600 for API costs") overrides a general one ("$500 budget").
3.  **Hard Constraints:** `VC_FEEDBACK_CORRECT` rules always win.

### 3. UNCERTAINTY FALLBACK
**Rule:** If Recency and Specificity are equal, **ASK** the user.
> "I found a conflict. On Monday we said X, but on Tuesday we implied Y. Which is correct?"