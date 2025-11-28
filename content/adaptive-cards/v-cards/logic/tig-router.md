---
id: 'VC_TIG_ROUTING'
title: 'Task Intelligence Graph (TIG)'
card_type: 'V-Card'
category: 'Logic'
purpose: 'A structured routing table mapping task types to the optimal AI Models and Tools.'
tags:
  - 'routing'
  - 'model-selection'
  - 'n8n-config'
  - 'tig'
---

## TECHNIQUE DESCRIPTION
The "Air Traffic Controller." This file defines which AI Model gets the job based on the task type.

---

## OPERATIONAL PROTOCOLS

### 🔀 ROUTING TABLE (JSON)
*System/n8n should parse this block to determine the destination.*

```json
{
  "routes": [
    {
      "tag": "research",
      "keywords": ["deep research", "investigate", "find citations", "study"],
      "recommended_models": ["gemini-3-pro", "claude-4-opus", "gpt-5.1"],
      "preferred_tools": ["web-search", "document-parser"]
    },
    {
      "tag": "creative",
      "keywords": ["story", "narrative", "write a poem", "brainstorm"],
      "recommended_models": ["gpt-5.1", "claude-4-opus", "gemini-3-flash"],
      "preferred_tools": ["prompt-flow", "ice-booster"]
    },
    {
      "tag": "image-gen",
      "keywords": ["generate image", "picture of", "draw", "visualize"],
      "recommended_models": ["midjourney-v7", "dall-e-3", "gemini-3-vision"],
      "preferred_tools": ["leonardo-ai", "firefly"]
    },
    {
      "tag": "coding",
      "keywords": ["write code", "python script", "debug", "refactor"],
      "recommended_models": ["claude-4.5-sonnet", "gpt-5.1-turbo", "gemini-3-code"],
      "preferred_tools": ["github-api", "code-interpreter"]
    },
    {
      "tag": "summarize",
      "keywords": ["summarize", "tl;dr", "shorten", "condense"],
      "recommended_models": ["gemini-3-flash", "claude-4-haiku"],
      "preferred_tools": ["n8n-summarizer"]
    },
    {
      "tag": "backup",
      "keywords": ["save", "export", "backup", "archive"],
      "recommended_models": [],
      "preferred_tools": ["google-drive-api", "s3-bucket"]
    }
  ],
  "default_route": "gemini-3-flash"
}
```
🚦 QUEUE LOGIC (Pseudocode Implementation)
For n8n or Backend Implementation

Input: New Task Received.

Lock Check: Is active_task_id present in Redis?

Yes: Push new task to tig_queue.

No: Set active_task_id, Execute Task.

On Complete: Clear active_task_id, Pop next from tig_queue.

👁️ VISIBILITY TIERS
Tier 1 (Auto): Silent routing. The user doesn't know which model was used.

Tier 2 (Visible): Show a badge: "Processed by Claude 3 Opus (Research Mode)."