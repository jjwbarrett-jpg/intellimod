---
id: 'PC_TOOL_001'
title: 'Tool Use Invocation & Schema'
card_type: 'P-Card'
category: 'Unified Web Dev Research'
purpose: 'Enable an AI to invoke external tools/APIs by emitting a structured, machine-readable intent that the host executes and returns as results for continued interaction.'
references: []
tags:
  - 'tool-use'
  - 'function-calling'
  - 'api-integration'
  - 'structured-output'
  - 'agent-capabilities'
---

## AI PROMPT CONTENT

### Goal
Allow the model to **request tools** by outputting a compact JSON object describing **which tool** to call and **with what parameters**, so the host system can execute it and return results to the model.

### Core Technique
- Provide the AI a **registry of tools** with **name**, **description**, and **parameters**.
- When a tool is needed, the AI emits a JSON object: **{"tool_name": string, "parameters": object}**.
- The backend **parses**, **executes**, and **returns** the tool result to the AI for the next step.

### Best Practices
- Keep **tool definitions** short, unambiguous, and easily parsed by an LLM.
- Validate and **schema-check** parameters before execution.
- Return **structured results** (e.g., JSON) and include **error fields** when failures occur.
- Feed tool **errors** back to the model so it can **retry** or **degrade gracefully**.

### Prompt Pattern (System + Example)

```text
system_prompt: |
  You have access to the following tools. To use one, respond ONLY with a JSON object:
  {
    "tool_name": "<tool_name>",
    "parameters": { ... }
  }

  Tools:
  - tool: "get_weather"
    description: "Get the current weather for a specific location."
    parameters: {"location": "string"}

user_request: "What's the weather like in Paris?"
```
### Expected LLM Output
```json
{
  "tool_name": "get_weather",
  "parameters": {
    "location": "Paris, FR"
  }
}
```

### Output Rules
   - Emit only the invocation JSON when calling a tool.
   - When not calling a tool, produce the final answer in the requested format.
   - On tool failure, request a retry or propose a fallback with updated parameters.

## DEVELOPER NOTES

### Compatible Modes
   - orchestration, retrieval-augmented generation (RAG), agents, API gateways, backend automation.

### Common Uses
   - Querying data sources (DB, search, weather, geo).
   - Performing side effects (notifications, file ops) in controlled ways.
   - Multi-step agents that alternate between reasoning and tool execution. 

### Notes
   - Define a stable schema for tool invocation and tool results (e.g., { "ok": true, "data": {...} } or { "ok": false, "error": {...} }).
   - Log invocations with minimal user content; store inputs/outputs separately for auditing.
   - Consider rate limits and retries with backoff; surface errors to the model for adaptive recovery.
