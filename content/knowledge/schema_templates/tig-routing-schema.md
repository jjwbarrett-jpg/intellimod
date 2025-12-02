---
id: "tig-routing-schema"
title: "Model – Model Card"
card_type: "routing-card"
provider: "company"
---

```json
{
  "id": "string",
  "provider": "string",
  "type": "chat|image|video|code",
  "modalities": ["text", "code", "image_generation", "vision", "audio"],
  "context_length": 128000,
  "tier": "S|A|B",
  "cost_bucket": "low|medium|high",
  "speed_bucket": "low|medium|high",
  "tags": ["..."],
  "avoid_tags": ["..."]
}
```

## 1. Tiers:

**Tier S**
Frontier / flagship models you’d pick when:
quality matters most
not cost-sensitive

**Example:** `GPT-5.1`, `Claude Sonnet 4.5`, `Gemini 3 Pro`

**Tier A**
Strong generalists:
good for most everyday tasks
better balance of cost / speed / quality

**Example:** `GPT-4o`, `Gemini 2.5 Flash/Pro`

**Tier B**
Budget / utility / fallback:
fast
cheap
simple tasks, routing, or bulk jobs