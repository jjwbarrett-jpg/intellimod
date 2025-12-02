---
id: 'SC_TIG_MASTER'
title: 'Task Intelligence Graph (TIG)'
version: '2.0.FINAL'
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
2.  **The Traffic Cop:** Enforces a Single-Task Lock to ensure requests are processed sequentially.

## OPERATIONAL PROTOCOLS

### 1. THE MODEL REGISTRY (Active Environment)
**Directive:** These are the currently active model IDs available for API routing.

* **Tier S (Flagship / Deep Thinking):**
  * `gemini-3-pro` (Primary for complex reasoning & multimodal)
  * `gpt-5.1` (Primary for creative nuance & "human" tone)
  * `claude-4.5-opus` (Primary for large-context architecture)

* **Tier A (Generalist / Speed):**
  * `gpt-4o` (Legacy high-speed generalist)
  * `gemini-2.5-flash` (High throughput, low cost)
  * `claude-3-5-sonnet` (Balanced coding/writing)

* **Tier B (Utility / Bulk):**
  * `gpt-4o-mini`
  * `gemini-nano` (Local/Edge tasks)

### 2. ROUTING LOGIC TABLE
**System Action:** Parse input -> Assign Intent -> Route to Workflow.

| Category | Intent Tag | Keywords | Tier | Workflow ID |
| :--- | :--- | :--- | :--- | :--- |
| **Research** | `research_deep` | deep research, investigate, citations, literature review | **Tier S** | `WF_RESEARCH_DOCLING` |
| **Research** | `analysis_summary` | summarize, tl;dr, bullet points, extract data | **Tier A** | `WF_CONTENT_SUMMARY` |
| **Creative** | `creative_story` | story, narrative, scene, chapter, novel | **Tier S** | `WF_CREATIVE_ASSEMBLER` |
| **Creative** | `creative_concept` | brainstorm, ideas, what if, imagine | **Tier S** | `WF_CREATIVE_ASSEMBLER` |
| **Coding** | `coding_architect` | architecture, system design, refactor, complex logic | **Tier S** | `WF_DEV_ARCHITECT` |
| **Coding** | `coding_script` | python script, fix bug, write function, regex | **Tier A** | `WF_DEV_vbSCRIPT` |
| **Visual** | `visual_prompt` | generate image prompt, midjourney, flux description | **Tier S** | `WF_IMAGE_PROMPTER` |
| **Visual** | `visual_describe` | describe this image, what do you see | **Tier S** | `WF_VISION_ANALYSIS` |

### 3. THE CONTEXT QUEUE (FIFO)
**Critical Automation Rule:**
To prevent overlapping processes in n8n:

1.  **Enqueue:** Push `Task_Input` to `TIG_Queue`.
2.  **Lock Check:** Check Global Variable `tig_active_lock`.
    * *If True:* Wait (Retry in 500ms).
    * *If False:* Set `tig_active_lock = True` and Proceed.
3.  **Execute:** Run the routed Sub-Workflow.
4.  **Release:** On completion/error, set `tig_active_lock = False`.

### 4. FLUX PARSER INTEGRATION
* **Input:** Raw User String.
* **Action:** Extract "Command Verbs" (e.g., *Visualize, Summarize*).
* **Output:** JSON Object `{ "intent": "visual_prompt", "priority": "normal" }` passed to TIG.