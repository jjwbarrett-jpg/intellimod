---
id: "image_generation"
title: "Image Generation"
card_type: "tool-card"
category: "visual"
---

```json
{
  "id": "image_generation",
  "category": "visual",

  "intents": ["visual_image"],
  "tool_tags": ["image_generation"],

  "modalities": ["visual_image"],

  "description": "Generate images from text prompts, with support for different styles such as photorealism, illustration, and concept art.",

  "required_capabilities": ["image_generation"],

  "recommended_models": [
    "gpt-image",
    "leonardo",
    "flux-2"
  ],

  "platform_modes": {
    "chatgpt": "Create image",
    "leonardo": "Text-to-image",
    "flux": "Text-to-image"
  },

  "workflow_hint": "WF_IMAGE_GEN"
}
```