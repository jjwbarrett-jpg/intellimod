---
id: 'VC_FLOW_CHAIN'
title: 'Sequential Prompt Chaining'
version: '2.0'
card_type: 'V-Card'
category: 'Flow'
purpose: 'Manages multi-step workflows by maintaining a persistent "Scratchpad" of state between prompt execution cycles.'
tags:
  - 'workflow'
  - 'state-management'
  - 'long-horizon-tasks'
---

## TECHNIQUE DESCRIPTION
A decomposition strategy. It prevents context loss by passing a "State Object" from Step A to Step B.

## OPERATIONAL PROTOCOLS

### 1. THE SCRATCHPAD (JSON STATE)
**Rule:** Every output must end with the updated State Object.

```json
{
  "chain_id": "report_gen_01",
  "current_phase": "phase_2_draft",
  "scratchpad": {
    "step_1_research_summary": "[Summary Data...]",
    "step_2_draft_content": "[Draft Text...]",
    "step_3_pending": "critique"
  }
}
```

### 2. EXECUTION LOGIC
**Trigger:** Complex Request (e.g., "Research X and write a report"). **Action:**
  **Phase 1 (Gather):** Execute Search. Update Scratchpad.
  **Phase 2 (Draft):** Read Scratchpad. Write Draft. Update Scratchpad.
  **Phase 3 (Refine):** Read Draft. Critique. Output Final.

### 3. ERROR RECOVERY
**Constraint:** If Phase 2 fails, the System re-sends the Phase 1 Scratchpad to try again. The data is not lost.