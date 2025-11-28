---
id: 'VC_OPT_LOOP_LIMIT'
title: 'Recursion Limit Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Optimization'
purpose: 'Prevents infinite loops in recursive workflows by enforcing a hard stop logic based on external counters.'
tags:
  - 'safety'
  - 'recursion'
  - 'cost-control'
---

## TECHNIQUE DESCRIPTION
A "Circuit Breaker." It protects your API bill from runaway agents.

## OPERATIONAL PROTOCOLS

### 1. THE COUNTER CHECK
**Input:** The system provides `meta.iteration_count`.
**Logic:**
* **If** `iteration_count >= 3`: **STOP.** Output `status: "max_iterations_reached"`.
* **If** `iteration_count < 3`: **PROCEED.**

### 2. REPETITION GUARD
**Rule:** Compare the current draft against `history.last_output`.
* **Scan:** Calculate semantic overlap.
* **Action:** If overlap > 80% (The AI is repeating itself), **STOP** and return `status: "loop_detected"`.

### 3. EXIT STRATEGY
**Directive:** When stopping due to limits, output the **Partial Result** so the work isn't lost.