---
id: 'VC_MEM_STATE'
title: 'Session State Manager'
version: '2.0'
card_type: 'V-Card'
category: 'Memory'
purpose: 'Maintains the persistent JSON object that tracks user preferences, project settings, and active constraints across the workflow.'
tags:
  - 'state-management'
  - 'persistence'
  - 'json-context'
---

## TECHNIQUE DESCRIPTION
The "Save File." In n8n, this is the JSON payload passed into every single AI node.

## OPERATIONAL PROTOCOLS

### 1. THE STATE SCHEMA
**Directive:** You must parse the `session_state` object before generating content.

```json
{
  "user_profile": { "id": "u-123", "role": "admin" },
  "project_blueprint": { 
    "goal": "Build Python App", 
    "tone": "Professional" 
  },
  "runtime_constraints": ["no_markdown", "max_tokens_500"],
  "memory_summary": "[Summary of last 5 turns]"
}
```

### 2. STATE MUTATION (Write Access)
**Rule:** If the user changes a preference (e.g., "Switch to casual tone"), output a **State Update Signal:**

```json
{
  "signal": "update_state",
  "target": "project_blueprint.tone",
  "value": "Casual"
}
```