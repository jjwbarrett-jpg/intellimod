---
id: 'VC_FALLBACK_RETRY'
title: 'Stateful Retry Logic'
card_type: 'V-Card'
category: 'Fallback Strategies'
purpose: 'Recovers from single-step failures by retrying only the failed component.'
tags:
  - 'retry-logic'
  - 'persistence'
  - 'workflow'
---

## TECHNIQUE DESCRIPTION
A smart retry mechanism that saves progress (Checkpoints) so failures don't restart the whole job.

---

## OPERATIONAL PROTOCOLS

### 💾 CHECKPOINTING
**Rule:** After every successful Step (e.g., Step 1 Complete), save the state.
* **Snapshot:** `{ "completed_steps": [1], "current_data": {...} }`

### 🔄 RETRY STRATEGY
**Trigger:** Step 2 Fails.
**Action:**
1.  **Load Snapshot:** Reload data from Step 1.
2.  **Adjust Parameters:** Increase timeout OR simplify the prompt.
3.  **Re-Run Step 2 ONLY:** Do not re-run Step 1.

### ⛔ LIMITS
* **Max Retries:** 3 Attempts.
* **Backoff:** Wait 1s, then 2s, then 4s between attempts.
* **Final Failure:** If Attempt 3 fails, trigger [VC_FALLBACK_DEGRADE].