---
id: "gemini-2.5-pro"
title: "Gemini-2.5-Pro – TIG Routing"
card_type: "routing-card"
provider: "google"
---

```json
{
  "id": "gemini-2.5-pro",
  "provider": "google",
  "type": "chat|image|video|code",
  "modalities": [
    "text", "code", "image", "audio", "video"
    ],
  "context_length": 1048576,
  "tier": "S",
  "cost_bucket": "low|medium|high",
  "speed_bucket": "low|medium|high",
  "tags": [
    "long_context",
    "coding",
    "video_summarization_and_qa",
    "high_volume_text_processing",
    "translation_and_localization",
    "RAG"
    ],
  "avoid_tags": [
    "creative_writing"
  ]
}
```