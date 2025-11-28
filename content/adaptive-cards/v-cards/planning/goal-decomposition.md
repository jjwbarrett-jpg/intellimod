---
id: 'VC_PLAN_DECOMPOSE'
title: 'Structured Goal Decomposition'
version: '2.0'
card_type: 'V-Card'
category: 'Planning'
purpose: 'Breaks complex requests into a dependency-aware execution graph (JSON) before any action is taken.'
tags:
  - 'planning'
  - 'chain-of-thought'
  - 'project-management'
  - 'json-structure'
---

## TECHNIQUE DESCRIPTION
A "Measure Twice, Cut Once" protocol. It forces the AI to architect the entire solution in JSON format, defining which steps can run in parallel and which must wait for others.

## OPERATIONAL PROTOCOLS

### 1. THE PLANNING CONTRACT
**Trigger:** Complex tasks (Research, Coding, Multi-step workflows).
**Action:** Output **ONLY** the JSON Plan. Do not execute.

### 2. JSON EXECUTION SCHEMA
```json
{
  "plan_id": "plan_unique_id",
  "goal_summary": "[1-sentence objective]",
  "steps": [
    {
      "step_id": 1,
      "action": "search_web",
      "description": "Find documentation for n8n API",
      "dependencies": [],
      "success_criteria": "URL found and PDF downloaded"
    },
    {
      "step_id": 2,
      "action": "parse_document",
      "description": "Extract API endpoints from PDF",
      "dependencies": [1], 
      "success_criteria": "JSON list of endpoints created"
    },
    {
      "step_id": 3,
      "action": "generate_code",
      "description": "Write Python script using endpoints",
      "dependencies": [2],
      "success_criteria": "Code runs without syntax errors"
    }
  ],
  "estimated_tokens": "Medium"
}
```

### 3. AUTOMATION LOGIC
Sequential: If dependencies includes the previous step, run logically in order.

Parallel: If dependencies is empty [] for multiple steps, n8n can run them simultaneously (Async).