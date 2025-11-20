Task Intelligence Graph (TIG) — Plain Text Extract

Purpose
A routing system that matches tasks to models, tools, and agents. Queried whenever a task is issued. IntelliMod parses the request, tags it, consults TIG, and routes accordingly.

Routing Logic Flow
1) Task input received (from user, webhook, or automation).
2) Parse key phrases such as: generate, summarize, visualize.
3) Assign task type and select best model, platform, and/or agent.
4) Route to:
   - Best model (e.g., GPT-4o, Claude, Gemini, Mistral).
   - Best platform or tool (e.g., Poe, Leonardo, Google Drive, n8n).
5) Process result, apply card logic, refine output.
6) Save, export, or start feedback loop.

TIG Routing Guidelines (consolidated)
- Task Type: Deep Research
  Models: Gemini 1.5 Pro/Ultra; Claude 3 Opus; Mistral Large
  Tools/Platform: Web plus structured parse tools
  Tag: research

- Task Type: Creative Prompt or Creative Story
  Models: GPT-4o; Claude 3 Opus; Gemini 1.5 Pro
  Tools/Platform: Prompt Flow; ICE or similar creative boosters
  Tag: creative

- Task Type: Image Generation or Image Prompt Design
  Models: GPT-4o; Gemini 1.5
  Tools/Platform: Leonardo; Firefly or other image platforms
  Tag: image-gen

- Task Type: Summarization
  Models: Mistral Large; Claude 3 Haiku; GPT-4o
  Tools/Platform: n8n nodes; document parsers; summarization APIs
  Tag: summarize

- Task Type: SIGS Sorting
  Models: Gemini 1.5 Pro
  Tools/Platform: SIGS subflow or SIGS-Sorter
  Tag: sig-sort

- Task Type: File Backup or Export
  Models: (none)
  Tools/Platform: Google Drive API or equivalent
  Tag: backup

Context Queue and Single-Task Lock
To prevent overlap, TIG maintains a FIFO queue and enforces a single active task. New tasks are enqueued; only when the active task completes is the next dequeued and processed.

Pseudocode
queue = []
active = false

function handleTask(task):
  queue.append(task)
  if not active:
    processNext()

function processNext():
  if queue:
    active = true
    current = queue.pop(0)
    routeUsingTIG(current)
    active = false
    processNext()

Auto-Expand Hook
TIG can dynamically incorporate new models or tools when new capabilities are detected (for example, a newly available API or a better-suited model for a known tag).

Tier Visibility
- In Tier 1 (Quick Start), TIG routing is silent.
- In Tier 2+, model/tool recommendations should be visible and briefly explained when overridden.

Tag Matching Hints
Simple intent tags like "story", "summarize", "image" can be mapped to the guideline rows above to produce default model/tool suggestions.