---
id: "tool_name"
title: "Tool Name"
card_type: "tool-card"
category: "tool_category"
---

```json
{
  "id": "tool_name",
  "category": "tool_category",

  "intents": ["intent_tag_1", "intent_tag_2"],

  "tool_tags": ["capability_slug_1", "capability_slug_2"],

  "modalities": ["text", "visual_image", "visual_video"],

  "description": "Short description of what this tool/capability does.",

  "required_capabilities": ["capability_slug_that_models_must_have"],
  
  "recommended_models": [
    "model_id_1",
    "model_id_2"
  ],

  "platform_modes": {
    "chatgpt": "UI label on ChatGPT (if any)",
    "gemini": "UI label on Gemini (if any)",
    "perplexity": "UI label on Perplexity (if any)"
  },

  "workflow_hint": "WF_SOME_CHILD_WORKFLOW"
}
```