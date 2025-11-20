---
id: 'PC_ROLE_DELEG_001'
title: 'Role-Based Agent Delegation'
card_type: 'P-Card'
category: 'Multi-Agent Collaboration & Modular Architecture'
purpose: 'Delegate user requests to narrowly specialized Worker agents via an Orchestrator that classifies intent and forwards minimal, necessary context.'
references: []
tags:
  - 'delegation'
  - 'orchestration'
  - 'routing'
  - 'agent-fleet'
  - 'specialization'
  - 'modularity'
  - 'separation-of-concerns'
---

## AI PROMPT CONTENT

### Goal
Use a central **Orchestrator** to classify the user’s intent and dispatch the task to a single-responsibility **Worker** agent best suited to execute it.

### Core Technique
- **Orchestrator receives** the initial user query.
- **Classify intent** against predefined roles (e.g., `CodeWriterAgent`, `DataAnalyzerAgent`, `CreativeWriterAgent`).
- **Forward** the normalized task plus minimal necessary context to the selected Worker agent.
- **Collect** the Worker’s result and return it (or pass to post-processing if required).

### Best Practices
- Keep Worker agents **highly specialized** and predictable (one clear responsibility).
- Orchestrator performs **routing only**; it should not execute core work.
- Define **explicit I/O schemas** per agent to avoid drift and ease testing.
- Log routing **metadata** (classification, selected agent, rationale) separately from content.
- Prefer **immutable context packets** when forwarding (avoid leaking credentials or excess data).

### Prompt Pattern (Orchestrator → Worker)
**Orchestrator Logic (Example)**
User Query: "Write a Python script to scrape a website."
Classification: "code_generation_request"
Selected Agent: "CodeWriterAgent"

**Prompt sent to Code Writer Agent**
```text
system_prompt: |
  You are the CodeWriterAgent. Your sole purpose is to write high-quality, executable code based on the user's request.
  Do not add explanations unless asked.

user_request: "Write a Python script to scrape a website."
constraints: |
  - Output only code.
  - Use standard libraries where possible.
  - Include basic error handling.
output_contract: |
  A single Python script that fetches HTML from a URL, parses content, and prints selected fields.
```

### Output Rules
   - Worker emits only the artifact specified by the output contract (no commentary).
   - Orchestrator returns Worker output verbatim or attaches minimal metadata (e.g., agent name, status) if required by policy.

## DEVELOPER NOTES

### Compatible Modes
   - Orchestration, planning, code generation, data analysis, creative writing, retrieval/ETL.

### Common Uses
   - Route code tasks to CodeWriterAgent; data tasks to DataAnalyzerAgent; narrative tasks to CreativeWriterAgent.
   - Enforce separation of concerns in multi-agent systems for maintainability.
   - Enable A/B routing or model swaps without changing user-facing prompts.

### Notes
   - Calibrate the intent classifier with unit tests and confusion-matrix tracking.
   - Version and validate per-agent schemas; fail closed on invalid inputs.
   - Combine with Red Teaming or Evaluator Node for safety/quality gates on high-stakes outputs.
