---
id: 'VC_FALLBACK_DEGRADE'
title: 'Graceful Degradation Logic'
card_type: 'V-Card'
category: 'Fallback Strategies'
purpose: 'Ensures task completion by falling back to simpler methods when advanced ones fail.'
tags:
  - 'fallback'
  - 'resilience'
  - 'safety-net'
---

## TECHNIQUE DESCRIPTION
A resilience strategy. If the "Smart Way" fails, try the "Simple Way." If that fails, try the "Safe Way."

---

## OPERATIONAL PROTOCOLS

### 📉 DEGRADATION TIERS
* **Tier 0 (Primary):** Full Analysis. Use all tools, complex reasoning, and rich formatting.
* **Tier 1 (Fallback):** Summary Mode. If Tier 0 fails/times out, provide a bulleted summary of the raw data.
* **Tier 2 (Safety Net):** Acknowledgment. If Tier 1 fails, output a clean error message preserving the system state.

### ⚠️ FAILURE TRIGGERS
* **Timeouts:** The process took too long.
* **Bad Data:** The input file was corrupt or unreadable.
* **Tool Failure:** An external API (Search, Code Interpreter) crashed.

### EXECUTION RULE
If a failure trigger is detected, **IMMEDIATELY** switch to the next Tier down. Do not retry the failed tier endlessly.