TIG: README

My Note: "Adaptive Cards need to also be routed. I don't know if that is listed below."

✨ TIG: Final Vision — Cross-Model Synthesis ✨

### 1. Core Vocabulary (Shared Definitions)

TIG operates with three distinct layers:

Model
The raw LLM or generation engine.
Examples: gpt-5.1, claude-3.5, gemini-3, sora, runway-gen-3, leonardo.

Tool / Capability
A function built on top of one or more models.
Examples: deep research, image generation, video generation, agent mode, document analysis, web search, docling RAG.

Workflow (Pipeline)
An orchestration chain (e.g., n8n) that connects models + tools + storage.
Examples: WF_CREATIVE_ICE, WF_RESEARCH_DOCLING, WF_IMAGE_GEN.

These three layers must be treated separately to avoid vocabulary confusion.

### 2. TIG’s Purpose (The Simplified Mission)

TIG is not a giant routing table of models.
TIG is not trying to know “the best model.”

TIG is a two-stage reasoning engine that:

Identifies what the user is trying to do (Intent Detection)

Determines which tool(s) or model(s) make sense for that intent (Tool Selection)

TIG reduces cognitive load by translating natural language requests into clear, transparent, capability-based routing decisions.

### 3. TIG’s Two-Layer Architecture

#### Layer 1 — Intent Classification

“What is the user trying to do?”

Examples of intents:
- research
- creative_text
- visual_image
- visual_video
- coding
- planning
- sorting
- summarization

##### Output example:

```json
{
  "task_intent": "visual_image"
}
```

#### Layer 2 — Tool / Model Selection

“What tool or model is appropriate for this task?”

Rules:
- If the user names a tool/model → respect it.
(“Using Gemini…”, “Run this with Claude…”, “I have Leonardo…”)

- If they don’t → suggest or pick based on capability.
Use a small tool-registry with modal strengths and quirks.

- Explain tradeoffs, not absolute claims.
(“Tool A handles motion better; Tool B is better for textures.”)

- Provide a reasonable default if the user doesn’t want to choose.

#### Output example:

```json
{
  "task_intent": "visual_image",
  "tool_explicit": null,
  "tool_suggestions_needed": true
}
```

#### Or after auto-selecting:

```json
{
  "task_intent": "visual_video",
  "chosen_tool": "sora",
  "reason": "user described animated movement; Sora handles motion well"
}
```

### 4. The Tool Capability Registry (Minimal Required Metadata)

This enables TIG to reason about tools without hardcoding everything.

#### Example schema:

```json
{
  "tools": [
    {
      "id": "gemini",
      "modalities": ["research", "text", "image"],
      "strengths": ["structured reasoning", "live context"],
      "prompt_style": "long-form, structured prompts"
    },
    {
      "id": "perplexity",
      "modalities": ["research"],
      "strengths": ["web search", "citations"],
      "prompt_style": "short, precise queries"
    },
    {
      "id": "leonardo",
      "modalities": ["image"],
      "strengths": ["stylized art", "concept art"],
      "prompt_style": "concise, style-heavy"
    },
    {
      "id": "gpt_image",
      "modalities": ["image"],
      "strengths": ["photorealism"],
      "prompt_style": "highly descriptive"
    },
    {
      "id": "sora",
      "modalities": ["video"],
      "strengths": ["motion", "complex scenes"],
      "prompt_style": "clear action + camera directions"
    }
  ]
}
```

This registry is small, editable, and sufficient for capability-based routing.

### 5. High-Level Routing Loop (Universal Logic)

1. Detect Intent

Analyze the user's request and return the task_intent.

2. Check for Explicit Tool
Scan for named tools/models.
If found → verify compatibility → lock it in.

3. If No Explicit Tool
Use the tool registry to:
- identify tools compatible with the intent
- offer 2–3 suggestions with short reasoning, OR
- auto-select a default depending on mode

4. Output a Structured Result
This is what downstream agents use to load the right cards, patterns, and workflows.

### 6. Why This Works Across All Models

This synthesized framework avoids:
- hardcoding model names
- massive routing tables
- brittle assumptions about capabilities
- model favoritism or “opinions as truth”
- And enables:
    - adaptability
    - explainability
    - capability-based reasoning
    - cross-tool interoperability
    - simple n8n implementation