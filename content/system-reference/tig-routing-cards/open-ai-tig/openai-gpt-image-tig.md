---
id: "gpt-image"
title: "GPT Image – TIG Routing"
card_type: "model-routing-card"
provider: "openai"
tier: "S"
---

```json
{
  "id": "gpt-image",
  "provider": "openai",
  "type": "image",
  "modalities": ["visual_image"],

  "tier": "S",
  "cost_bucket": "high",
  "speed_bucket": "medium",

  "capability_tags": ["image_generation", "photorealism"],
  "tags": ["text_to_image"],
  "avoid_tags": ["vector_graphics_only"]
}
```