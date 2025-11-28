---
id: 'SC_TIG_MASTER'
title: 'Task Intelligence Graph (TIG)'
version: '2.0'
card_type: 'S-Card'
category: 'Logic'
purpose: 'Central Brain. Routes tasks to specific AI models and enforces a FIFO queue to prevent context collision.'
tags:
  - 'routing'
  - 'queue-management'
  - 'model-registry'
  - 'n8n-core'
---

## TECHNIQUE DESCRIPTION
The TIG serves two roles:
1.  **The Router:** Maps the User Intent -> Best Model -> Sub-Workflow.
2.  **The Traffic Cop:** Enforces a Single-Task Lock to ensure requests are processed sequentially, preserving state integrity.

## OPERATIONAL PROTOCOLS

### 1. THE MODEL REGISTRY (2025 Standard)
**Directive:** Map abstract "Tiers" to specific Model IDs. This allows you to swap models globally by changing one variable.

* **Tier S (Deep Reasoning):** `gpt-5.1`, `claude-4.5-opus`, `gemini-3-ultra`, `o1-preview`
* **Tier A (High Speed/Chat):** `gemini-3-flash`, `claude-4.5-haiku`, `gpt-4o`, `nova-2`
* **Tier C (Code Specialist):** `claude-4.5-sonnet`, `qwen-3`, `grok-4.1`
* **Tier R (Deep Research):** `perplexity-sonar`, `gemini-3-pro`, `kimo-k2`

### 2. ROUTING LOGIC TABLE
**System Action:** Parse input keywords -> Assign Intent -> Route to Workflow.

| Intent Tag | Keywords | Tier | Tool/Sub-Flow |
| :--- | :--- | :--- | :--- |
| **Research** | `deep research`, `citations`, `investigate` | **Tier R** | `WF_RESEARCH_DOCLING` |
| **Creative** | `story`, `narrative`, `brainstorm` | **Tier S** | `WF_CREATIVE_ICE` |
| **Coding** | `python`, `script`, `debug`, `json` | **Tier C** | `WF_DEV_GITHUB` |
| **Visual** | `generate image`, `draw`, `visualize` | **Tier A** | `WF_IMAGE_GEN` |
| **Sorting** | `sort`, `organize`, `classify` | **Tier A** | `WF_SIGS_SORTER` |

### 3. THE CONTEXT QUEUE (FIFO)
**Critical Automation Rule:**
To prevent overlapping processes in n8n/Serverless environments:

1.  **Enqueue:** When `Task_Input` is received, push to `TIG_Queue`.
2.  **Lock Check:** Check Global Variable `tig_active_lock`.
    * *If True:* Wait (Retry in 500ms).
    * *If False:* Set `tig_active_lock = True` and Proceed.
3.  **Execute:** Run the routed Sub-Workflow.
4.  **Release:** On completion/error, set `tig_active_lock = False` and trigger `processNext()`.

### 4. FLUX PARSER INTEGRATION
* **Input:** Raw User String.
* **Action:** Extract "Command Verbs" (e.g., *Visualize, Summarize*).
* **Output:** JSON Object `{ "intent": "visual", "priority": "normal" }` passed to TIG.