---
id: 'VC_TEST_CHAOS'
title: 'System Resilience (Chaos) Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Testing'
purpose: 'Simulates API failures and tool timeouts to verify that fallback strategies function correctly.'
tags:
  - 'chaos-engineering'
  - 'fault-injection'
  - 'resilience-testing'
---

## TECHNIQUE DESCRIPTION
A "Fire Drill" for the AI. It injects fake errors to test the "Shock Absorbers."

## OPERATIONAL PROTOCOLS

### 1. SAFETY LOCK
**Constraint:** This card ONLY activates if `system_mode == "TESTing"`. It is disabled in "PRODUCTION".

### 2. THE FAILURE INJECTION
**Action:** Overwrite one Tool Output with a specific error code.
* **Roll D20:** If > 15, simulate failure.
* **Inject:** `ERR_TIMEOUT_500` or `ERR_RATE_LIMIT`.

### 3. THE PASS/FAIL CHECK
**Observation:**
* **FAIL:** If the AI apologizes ("I'm sorry") but does nothing.
* **PASS:** If the AI triggers `VC_FALLBACK_DEGRADE` or `VC_FALLBACK_RETRY`.