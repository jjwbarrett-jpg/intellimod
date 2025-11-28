---
id: 'VC_OPT_LOOP_LIMIT'
title: 'Loop Limiter Logic'
card_type: 'V-Card'
category: 'Optimization'
purpose: 'Prevents infinite loops and repetitive text generation.'
tags:
  - 'safety'
  - 'recursion'
  - 'limits'
---

## TECHNIQUE DESCRIPTION
A "Circuit Breaker" for recursive tasks.

---

## OPERATIONAL PROTOCOLS

### 🛑 THE STOP COUNTER
**Rule:** Maintain an internal `iteration_count`.
* **Limit:** Max 3 Iterations (unless specified otherwise).
* **Action:** If Count > 3, Stop immediately and return partial results.

### 🔁 REPETITION GUARD
**Rule:** Do not output the same sentence twice.
* **Check:** Scan previous output. If specific phrases overlap > 80%, rewrite or stop.