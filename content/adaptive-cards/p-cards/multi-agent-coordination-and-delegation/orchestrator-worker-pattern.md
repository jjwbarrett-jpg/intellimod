---
id: 'PC_ORCH_WORKER_001'
title: 'Orchestrator Worker Pattern'
card_type: 'P-Card'
category: 'Multi-Agent Coordination & Delegation'
purpose: 'Use a central orchestrator to decompose a complex request into sub-tasks and delegate each to a stateless, specialized worker, then synthesize the final result.'
references: []
tags:
  - 'orchestration'
  - 'delegation'
  - 'routing'
  - 'agent-fleet'
  - 'modular-architecture'
---

## AI PROMPT CONTENT

### Goal
Coordinate complex tasks by having an **Orchestrator** analyze the user request, split it into targeted sub-tasks, dispatch each to **specialized Worker agents**, and merge their outputs into a final deliverable.

### Roles & Responsibilities
- **Orchestrator**
  - Interprets the initial query and identifies required capabilities (e.g., code generation, data analysis).
  - Constructs targeted prompts for workers, passes minimal necessary context, and manages state.
  - Aggregates worker outputs and produces the final response.
- **Worker Agents**
  - Highly specialized and **stateless**; perform a single task reliably.
  - Accept explicit inputs and constraints; emit only the requested artifact per output contract.

### Core Technique
- Orchestrator derives a **task graph** from the user request.
- For each node (sub-task), select a worker by capability and send a **focused prompt** with an **output contract**.
- Collect and validate outputs; then synthesize into a coherent final result.

### Best Practices
- Keep workers **narrow** and **deterministic**; make tasks idempotent where possible.
- Centralize **state** in the orchestrator (task statuses, artifacts, errors).
- Define strict **I/O schemas** per worker to reduce prompt drift.
- Apply timeouts and retries with bounded backoff; log provenance for each artifact.

### Prompt Pattern (Orchestrator → Worker)
**Prompt from Orchestrator to a Code-Generation Worker Agent**

```text
--- Orchestrator's instructions ---
role: You are a Python Code Generation Agent.
task: The user wants to create a web scraper. Your task is to write only the Python script to fetch and parse the content of a given URL.

--- Data provided by Orchestrator ---
context:
  url: "https://example.com"
  libraries: ["requests", "beautifulsoup4"]
  target_element: "div#main-content"

--- Output contract ---
- Produce a single runnable .py script.
- Handle HTTP errors and missing elements gracefully.
- Print the extracted text for the specified target element.
- Do not include explanations or comments.

--- Final instruction ---
Generate the Python code. Output ONLY the code.
```

### Output Rules
   - Workers must return only the artifact defined by the output contract (no commentary).
   - Orchestrator validates outputs (format, constraints) before synthesis.
   - Final response includes merged artifacts or a composed deliverable as required.

## DEVELOPER NOTES

### Compatible Modes
   - orchestration, planning, code generation, data analysis, retrieval, evaluation/QA.

### Common Uses
   - Decompose a feature request into code, docs, and tests handled by separate workers.
   - Split research into retrieval → synthesis → fact-check sub-tasks.
   - Data workflows: ingest → clean → analyze → visualize.

### Notes
   - Maintain a capability matrix to deterministically map sub-tasks to workers.
   - Prefer schema-validated envelopes (e.g., JSON) for worker I/O.
   - Track metrics (latency, success rate) per worker to refine routing and SLAs.
