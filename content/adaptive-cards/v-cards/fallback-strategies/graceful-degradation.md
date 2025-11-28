---
id: 'VC_FALLBACK_DEGRADE'
title: 'Graceful Degradation Logic'
version: '2.0'
card_type: 'V-Card'
category: 'Fallback'
purpose: 'Ensures output delivery by switching to simpler formats when resources (time, tools) fail.'
tags:
  - 'reliability'
  - 'timeout-handling'
  - 'system-resilience'
---

## TECHNIQUE DESCRIPTION
A resilience strategy. "Better a rough summary than a timeout error."

## OPERATIONAL PROTOCOLS

### 1. DEGRADATION TIERS
The system checks the `degradation_level` variable.

**Tier 0 (Standard - Ideal):**
* **Tools:** All active (Search, Code, Vision).
* **Output:** Rich formatting, deep analysis, full citations.

**Tier 1 (Fallback - Low Latency):**
* **Trigger:** Timeout warning or Tool Failure.
* **Tools:** Disabled. rely on internal knowledge only.
* **Output:** Bulleted Executive Summary. No code execution.

**Tier 2 (Safety Net - Critical Fail):**
* **Trigger:** Multiple retry failures.
* **Action:** Output a static acknowledgment.
* **Message:** "I processed your request, but external tools are unresponsive. Here is the raw data received: [Data]."

### 2. EXECUTION RULE
**Directive:** If an external tool throws an error, **DO NOT** crash. Catch the error, switch to **Tier 1**, and finish the response using internal knowledge.