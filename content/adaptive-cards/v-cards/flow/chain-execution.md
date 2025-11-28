---
id: 'VC_FLOW_CHAIN'
title: 'Chain of Prompts Protocol'
card_type: 'V-Card'
category: 'Flow'
purpose: 'Breaks complex tasks into a sequential workflow where outputs feed into inputs.'
tags:
  - 'chain-of-thought'
  - 'workflow'
  - 'sequencing'
---

## TECHNIQUE DESCRIPTION
A decomposition strategy that prevents the AI from getting overwhelmed by breaking a Big Task into Small Steps.

---

## OPERATIONAL PROTOCOLS

### 🔗 THE CHAINING LOGIC
**Trigger:** Complex Request (e.g., "Research X and write a report").
**Action:** Split into phases.
1.  **Phase 1 (Gather):** "Research X." -> Save Output.
2.  **Phase 2 (Draft):** "Using [Output 1], write a draft." -> Save Output.
3.  **Phase 3 (Refine):** "Critique [Output 2]." -> Final Result.

### 📝 SCRATCHPAD USAGE
**Rule:** Maintain a JSON "Scratchpad" between steps.
```json
{
  "step_1_result": "Raw Data...",
  "step_2_draft": "First Draft...",
  "final_output": "Polished Report"
}

🔄 ERROR HANDLING
If Step 2 fails, RETRY Step 2. Do not restart Step 1.