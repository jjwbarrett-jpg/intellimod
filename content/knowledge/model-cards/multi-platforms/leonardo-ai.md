---
id: "leonardo"
title: "Leonardo.ai Platform"
card_type: "platform-card"
category: "image_platform"
---

```json
{
  "id": "leonardo",
  "type": "image_platform",

  "capabilities": ["image_generation", "video_generation"],

  "styles": [
    "cinematic",
    "creative",
    "dynamic",
    "fashion",
    "portrait",
    "stock_photo",
    "vibrant",
    "none"
  ],

  "dimension_presets": ["2:3", "1:1", "16:9", "custom"],
  "generation_modes": ["fast", "ultra"],

  "safety_profile": {
    "nsfw_tolerance": "medium",
    "notes": [
      "may reject certain prompts based on wording",
      "moderation stricter than some local deployments"
    ]
  },

  "context_window_tokens": 1500,

  "supported_models": [
    "gpt-image",
    "leonardo_lucid_origin",
    "nano_banana_pro",
    "seedream_4_0",
    "flux_2"
  ],

  "safety_profile": {
    "nsfw_tolerance": "unknown",   // "low" | "medium" | "high" when you know
    "notes": [
      // Free-form observations later, after research
    ]
  },

  "model_overrides": {
    // "gpt-image": {
    //   "notes": ["behaves slightly differently here than native OpenAI UI"]
    // }
  }
}
```