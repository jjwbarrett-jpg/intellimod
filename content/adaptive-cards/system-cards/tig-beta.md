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
**System Action:** Use `command_verbs`, `modality_hints`, and `raw_text` to resolve to the most likely `intent_tag`, then route to the corresponding workflow.
    Note: Keywords here are illustrative; you'll encode them as arrays / regex in JSON for n8n.

#### 2.1 Research/Analysis
| Intent Tag | Keywords | Tier | Tool/Sub-Flow |
| :--- | :--- | :--- | :--- |
`research_general` | `deep research`, `citations`, `investigate`, `literature review`, `compare sources` | **Tier R** | `WF_RESEARCH_DOCLING` |
| `analysis_summarize` | `summarize`, `tl;dr`, `bullet summary`, `key points`, `explain this` | **Tier A** | `WF_RESEARCH_SUMMARY` | 

#### 2.2 Creative – Stories, Poems, Scripts
| Intent Tag | Keywords | Tier | Tool/Sub-Flow |
| :--- | :--- | :--- | :--- |
| `creative_story` | `story`, `short story`, `scene`, `chapter`, `fanfic`, `fan fiction`, `narrative`, `write a story about`, `episode` | **Tier S** | `WF_CREATIVE_ICE` |
| `creative_poem` | `poem`, `poetry`, `haiku`, `sonnet`, `free verse`, `write a poem`, `lyrical but not lyrics`, `rhyming piece` | **Tier S** | `WF_CREATIVE_ICE` |
| `creative_brainstorm` | `brainstorm`, `ideas`, `concept list`, `prompt ideas`, `plot hooks`, `story seeds`, `what are some ways to` | **Tier A** | `WF_CREATIVE_ICE` |
| `creative_script` | `script`, `screenplay`, `dialogue only`, `scene script`, `stageplay`, `tv episode format` | **Tier S** | `WF_CREATIVE_SCRIPT` |

#### 2.3 Coding / Technical
| Intent Tag | Keywords | Tier | Tool/Sub-Flow |
| :--- | :--- | :--- | :--- |
| `coding_general` | `python`, `javascript`, `script`, `function`, `api`, `write code`, `pseudocode` | **Tier C** | `WF_DEV_GITHUB` |
| `coding_debug` | `bug`, `error`, `traceback`, `debug`, `fix this code`, `why is this failing`	| **Tier C** | `WF_DEV_DEBUGGER` |
| `coding_explain` | `explain this code`, `code review`, `refactor`, `clean up`, `optimize` | **Tier C** | `WF_DEV_REVIEW` |

#### 2.4 Visual – Image vs Video
| Intent Tag | Keywords | Tier | Tool/Sub-Flow |
| :--- | :--- | :--- | :--- |
| `visual_image` | `generate image`, `image of`, `illustrate`, `draw`, `concept art`, `cover art`, `thumbnail`, `logo`, `photo`, `picture` | **Tier A** | `WF_IMAGE_GEN` |
| `visual_video` | `generate video`, `short clip`, `animation`, `motion`, `video story`, `animated scene`, `turn this into a video` | **Tier S** | `WF_VIDEO_GEN` |
| `visual_variation` | `remix this image`, `variation of`, `change colors`, `adjust style`, `edit this picture`, `upscale`, `improve image` | **Tier A** | `WF_IMAGE_EDIT` |

#### 2.5 Utility – Sorting / Classification / SIGS
| Intent Tag | Keywords | Tier | Tool/Sub-Flow |
| :--- | :--- | :--- | :--- |
| `orting_general` | `sort`, `organize`, `classify`, `group`, `label`, `cluster`, `categorize` | **Tier A** | `WF_SIGS_SORTER` |
| `tagging_semantic` | `tag this`, `add tags`, `label with categories`, `semantic labels`, `SIGS routing` | **Tier A** | `WF_SIGS_ROUTER` |

#### 2.6 Fallback / Meta
| Intent Tag | Keywords | Tier | Tool/Sub-Flow |
| :--- | :--- | :--- | :--- |
| `meta_router_debug` | `show routing`, `which workflow`, `what are you using`, `debug tig`	| **Tier A** | `WF_TIG_DEBUG` |
| `unknown` | (No matches or low confidence) | **Tier S** | `WF_HUMAN_REVIEW` or `WF_GENERIC_LLM` |

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