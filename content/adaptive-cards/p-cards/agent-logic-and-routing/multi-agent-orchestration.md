---
id: 'PC_ORCH_001'
title: 'Multi-Agent Orchestration'
card_type: 'P-Card'
category: 'Logic'
purpose: 'Delegate a user request to a master orchestrator that scopes work, splits into sub-tasks, and dispatches each to narrowly scoped specialist agents.'
references: []
tags:
  - 'orchestration'
  - 'ai-agents'
  - 'modularity'
  - 'backend'
  - 'routing'
---

## AI PROMPT CONTENT

### Goal
Use a master **orchestrator** agent to analyze the request, decompose it into sub-tasks, and route each sub-task to a specialized agent. Coordinate execution (parallel or sequential) and consolidate results.

### Roles
- **Orchestrator**: Interprets the user request, defines sub-tasks, selects agents, tracks state, merges outputs.
- **Specialist Agents** (examples):
  - **CodeGen Agent**: Generates or edits code.
  - **Research Agent**: Gathers facts, sources, and summaries.
  - **Retrieval Agent**: Fetches documents/data via tools.
  - **Evaluation/QA Agent**: Validates outputs against constraints.

### Core Technique
- Orchestrator determines **task scope** and **breaks down** work.
- Dispatches sub-tasks to **specialist agents** with clear input contracts and output schemas.
- Executes **in parallel** when independent; **in sequence** when dependencies exist.

### Best Practices
- Keep agent capabilities **narrow and predictable**.
- Enforce **explicit I/O schemas** per agent to avoid prompt drift.
- Track interactions and outcomes via **orchestrator state** (task graph, statuses, artifacts).
- Prefer **idempotent** sub-tasks; enable retries with bounded backoff.
- Record **provenance** (which agent produced what, when, and with which inputs).

### Orchestrator → Specialist Prompt Pattern
[Orchestrator to Specialist Agent]  
User request: "<user_request>"

- **You are the {{agent_role}}.**
- **Objective**: {{specific_subtask}}
- **Inputs/Context**: {{inputs_or_paths}}
- **Constraints**: {{libraries/tools/limits}}
- **Output Contract**: {{schema_or_format}}
- **Style**: Output **only** the required artifact (no commentary).

#### Example
```text
[Orchestrator to CodeGen Agent]
User request: "Write a Python script to analyze 'sales_data.csv' and plot quarterly revenue."
You are the Code-Gen Agent. Output only valid code.
Required libraries: pandas, matplotlib.
Data path: ./data/sales_data.csv
Output Contract: A single .py script that reads the CSV, aggregates quarterly totals, and renders a plot.
```

### Output Rules

- Specialists must emit only the artifact defined in the contract.

- Orchestrator merges artifacts and produces a final deliverable plus a run log (tasks, agents, durations, statuses).

## DEVELOPER NOTES

### Compatible Modes: 
orchestration, planning, code generation, retrieval/analysis, evaluation/QA, reporting.

### Common Uses:
   - Complex coding tasks split into fetch → generate → test → document.
   - Research pipelines with retrieval → synthesis → fact-check → cite.
   - Data workflows: ingest → transform → analyze → visualize.

### Notes:
   - Model/tool routing should be deterministic given the same inputs.
   - Maintain a task DAG (directed acyclic graph) and serialize state for resumption.
   - Define timeouts and circuit breakers per agent to control runaway costs.
   - Log all agent calls with minimal user content; store artifacts separately for auditing.        