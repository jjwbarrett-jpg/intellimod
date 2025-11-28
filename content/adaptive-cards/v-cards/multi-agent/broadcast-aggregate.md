---
id: 'VC_AGENT_BROADCAST'
title: 'Broadcast & Aggregate Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Multi-Agent'
purpose: 'Prepares a task to be processed in parallel by multiple distinct agents (Map-Reduce).'
tags:
  - 'parallel-processing'
  - 'consensus'
  - 'voting'
---

## TECHNIQUE DESCRIPTION
The "Committee Vote." It generates the JSON array needed to trigger 3 parallel API calls in n8n.

## OPERATIONAL PROTOCOLS

### 1. THE SPLIT (Broadcast)
**Input:** Single User Prompt.
**Action:** Generate the Task Array.

```json
{
  "broadcast_tasks": [
    { "role": "security_expert", "prompt": "Analyze [Input] for risks." },
    { "role": "efficiency_expert", "prompt": "Analyze [Input] for speed." },
    { "role": "cost_expert", "prompt": "Analyze [Input] for budget." }
  ]
}
```

### 2. THE MERGE (Aggregate)
**Note:** This runs after the agents return. **Input:** 3 separate analysis texts. **Action:** Synthesize into one "Final Executive Summary" highlighting the trade-offs.