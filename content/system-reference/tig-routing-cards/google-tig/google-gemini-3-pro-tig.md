---
id: "gemini-3-pro"
title: "Gemini-3-Pro – TIG Routing"
card_type: "routing-card"
provider: "google"
---

```json
{
  "id": "gemini-3-pro",
  "provider": "google",
  "type": "chat|image|video|code",
  "modalities": [
    "text", "code", "image", "audio", "video"
    ],
  "context_length": 2097152,
  "tier": "S",
  "cost_bucket": "low|medium|high",
  "speed_bucket": "low|medium|high",
  "tags": [
    "deep_reasoning",
    "long_context",
    "coding",
    "video_summarization_and_qa",
    "high_volume_text_processing",
    "translation_and_localization",
    "RAG"
    ],
  "avoid_tags": [
    "unrestricted_content_generation",
    "simple_classification_tasks"
  ]
}
```