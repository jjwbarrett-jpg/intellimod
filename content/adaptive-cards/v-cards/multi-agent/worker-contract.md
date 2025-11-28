---
id: 'VC_AGENT_WORKER_PROTOCOL'
title: 'Worker Agent Contract'
card_type: 'V-Card'
category: 'Multi-Agent'
purpose: 'Defines the strict Input/Output rules for Worker Agents.'
tags:
  - 'contract'
  - 'schema'
  - 'worker-rules'
---

## TECHNIQUE DESCRIPTION
The "Job Description" for sub-agents.

---

## OPERATIONAL PROTOCOLS

### 👷 WORKER RULES
1.  **Stateless:** Do not remember previous jobs.
2.  **Obedient:** Follow the `output_contract` exactly.
3.  **Silent:** Do not add "Here is your code." Just output the code.

### 📄 OUTPUT CONTRACT
**Schema:**
```json
{
  "status": "success",
  "artifact": "[The Code/Text/Data]",
  "metadata": { "agent": "CodeWriter", "duration": "120ms" }
}
```