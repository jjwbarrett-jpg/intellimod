---
id: "claude-sonnet-4-5"
title: "Claude Sonnet 4.5 – TIG Routing"
card_type: "model-routing-card"
provider: "anthropic"
tier: "S"
---

```json
{
  "id": "claude-sonnet-4-5",
  "provider": "anthropic",
  "type": "chat",
  "modalities": ["text", "code", "vision"],
  "context_length": 200000,

  "tier": "S",
  "cost_bucket": "high",
  "speed_bucket": "medium",

  "tags": [
    "deep_reasoning",
    "long_context",
    "coding",
    "agentic_workflows"
  ],
  "avoid_tags": [
    "ultra_low_latency",
    "ultra_low_cost"
  ]
}
```