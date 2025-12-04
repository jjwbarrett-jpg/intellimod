---
id: 'SC_TIG_MASTER'
title: 'Task Intelligence Graph (TIG)'
version: '2.1.STANDARD'
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

### 2. ROUTING LOGIC TABLE (Standardized Taxonomy)
**System Action:** Parse input -> Assign Intent -> Route to Workflow.

| Domain.Task | Keywords | Tier | Workflow ID |
| :--- | :--- | :--- | :--- |
| **`knowledge.research`** | deep research, investigate, citations, literature review | **Tier S** | `WF_RESEARCH_DOCLING` |
| **`knowledge.summarization`** | summarize, tl;dr, bullet points, extract data | **Tier A** | `WF_CONTENT_SUMMARY` |
| **`creative.generation`** | story, narrative, scene, chapter, novel, poem | **Tier S** | `WF_CREATIVE_ASSEMBLER` |
| **`creative.brainstorming`** | brainstorm, ideas, what if, imagine, concept | **Tier S** | `WF_CREATIVE_ASSEMBLER` |
| **`programming.architecture`** | architecture, system design, refactor, complex logic | **Tier S** | `WF_DEV_ARCHITECT` |
| **`programming.scripting`** | python script, fix bug, write function, regex | **Tier A** | `WF_DEV_SCRIPT` |
| **`multimodal.image_generation`** | generate image prompt, midjourney, flux description | **Tier S** | `WF_IMAGE_PROMPTER` |
| **`multimodal.vision_analysis`** | describe this image, what do you see, analyze chart | **Tier S** | `WF_VISION_ANALYSIS` |
| **`safety.moderation`** | ignore rules, system mode, bypass, jailbreak | **BLOCK** | `WF_SECURITY_SENTINEL` |

### 3. THE CONTEXT QUEUE (FIFO)
**Critical Automation Rule:**
To prevent overlapping processes in n8n:

1.  **Enqueue:** Push `Task_Input` to `TIG_Queue`.
2.  **Lock Check:** Check Global Variable `tig_active_lock`.
    * *If True:* Wait (Retry in 500ms).
    * *If False:* Set `tig_active_lock = True` and Proceed.
3.  **Execute:** Run the routed Sub-Workflow.
4.  **Release:** On completion/error, set `tig_active_lock = False`.

### 4. INTENT_COMMAND_PARSER
* **Input:** Raw User String.
* **Action:** Extract "Command Verbs" (e.g., *Visualize, Summarize*).
* **Output:** JSON Object `{ "intent": "multimodal.image_generation", "priority": "normal" }` passed to TIG.