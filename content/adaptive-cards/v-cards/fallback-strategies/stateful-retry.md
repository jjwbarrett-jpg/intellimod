---
id: 'VC_FALLBACK_RETRY'
title: 'Stateful Smart-Retry Logic'
version: '2.0'
card_type: 'V-Card'
category: 'Fallback'
purpose: 'Recovers from step failures by analyzing the error code and adjusting the strategy for the next attempt.'
tags:
  - 'self-healing'
  - 'debugging'
  - 'loop-handling'
---

## TECHNIQUE DESCRIPTION
A "Smart Retry" mechanism. It assumes that doing the exact same thing twice will result in the same error.

## OPERATIONAL PROTOCOLS

### 1. THE CHECKPOINT RULE
**Input:** The system provides `{ "last_error": "...", "attempt_count": 2 }`.

### 2. STRATEGY ADJUSTMENT LOGIC
**Action:** Before generating the retry, analyze the error:

* **Error: SyntaxError** -> **Fix:** Rewrite code with syntax correction.
* **Error: RateLimit** -> **Fix:** Reduce request size/tokens.
* **Error: ModuleNotFound** -> **Fix:** Switch to a standard library alternative.

### 3. THE RETRY SIGNAL
**Output:**
```json
{
  "status": "retrying",
  "attempt": 2,
  "strategy_change": "Switching from 'pandas' to 'csv' module due to import error.",
  "new_payload": "[Adjusted Code/Prompt]"
}
```

### 4. THE GIVE-UP CONDITION
**Constraint:** If `attempt_count` > 3, stop and trigger VC_FALLBACK_DEGRADE (Tier 2).