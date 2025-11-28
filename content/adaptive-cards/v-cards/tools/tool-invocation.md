---
id: 'VC_TOOL_INVOCATION'
title: 'Tool Call Standard'
version: '2.0'
card_type: 'V-Card'
category: 'Tools'
purpose: 'Defines the strict JSON schema required to trigger external functions (APIs, Webhooks) via n8n.'
tags:
  - 'function-calling'
  - 'api-integration'
  - 'json-schema'
---

## TECHNIQUE DESCRIPTION
The "Remote Control." It translates intent into executable API payloads.

## OPERATIONAL PROTOCOLS

### 1. THE CALL SCHEMA
**Constraint:** To invoke a tool, output this JSON object ONLY.

```json
{
  "tool_call": {
    "id": "call_[uuid]",
    "function_name": "get_weather",
    "reasoning": "User asked for Paris weather; need current temp.",
    "parameters": {
      "location": "Paris, FR",
      "units": "metric"
    }
  }
}
```

### 2. HALLUCINATION CHECK
**Rule:** Do **NOT** call a tool that is not listed in your `available_tools` context.
  If the tool doesn't exist: Output `status: "tool_not_found"` and ask the user for clarification.

### 3. ERROR RECOVERY
**Trigger:** If the Tool returns `Error 404` or `500`. **Action:**
  1. Read the error message.
  2. Correct the parameters (e.g., Fix spelling of "Paris").
  3. Retry Once.