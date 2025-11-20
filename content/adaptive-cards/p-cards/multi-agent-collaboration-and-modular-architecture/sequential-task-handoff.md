---
id: 'PC_ROLE_001'
title: 'Role-Based Agent Delegation'
card_type: 'P-Card'
category: 'Multi-Agent Collaboration & Modular Architecture'
purpose: 'Use an orchestrator to classify intent and delegate each request to a narrowly scoped worker agent, preserving modularity and specialization.'
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
Route user requests to the **right specialist agent** via an **Orchestrator** that classifies intent, attaches minimal necessary context, and keeps core work out of the orchestrator.

### Roles & Responsibilities
- **Orchestrator**
  - Receives the initial user query.
  - Classifies intent and selects the appropriate **Worker** agent.
  - Attaches only required context (inputs, constraints, output schema).
  - Tracks task status; does **not** perform core work.
- **Worker Agents** (examples)
  - **CodeWriterAgent**: code generation/editing.
  - **DataAnalyzerAgent**: data analysis, stats, plots.
  - **CreativeWriterAgent**: narrative, copy, tone control.

### Core Technique
- Parse and classify user query → map to **role** (worker).
- Prepare a targeted prompt with **objective**, **inputs**, **constraints**, and **output contract**.
- Forward to the selected worker and collect the artifact.

### Best Practices
- Keep workers **highly specialized** and single-responsibility.
- Orchestrator manages **routing and context**, not deliverables.
- Enforce **explicit I/O schemas** to prevent drift.
- Log routing decisions and artifacts for auditability.

### Prompt Pattern (Orchestrator → Worker)
**Orchestrator Logic**
- **User Query**: "<user_request>"
- **Classification**: "<intent_label>"
- **Selected Agent**: "<WorkerAgentRole>"

**Prompt sent to <WorkerAgentRole>**
```text
system_prompt: |
  You are the <WorkerAgentRole>. Your sole purpose is to deliver the requested artifact.
  Output only the artifact; no explanations unless explicitly requested.

objective: "<specific_subtask>"
inputs: "<paths, data, or context>"
constraints: "<libraries/tools/limits>"
output_contract: "<schema or format to return>"
```

### Example
Orchestrator Logic
   - User Query: "Write a Python script to scrape a website."
   - Classification: "code_generation_request"
   - Selected Agent: "CodeWriterAgent"
Prompt sent to CodeWriterAgent

system_prompt: |
  You are the CodeWriterAgent. Your sole purpose is to write high-quality, executable code based on the user's request.
  Do not add explanations unless asked.

objective: "Create a Python web scraper."
inputs: "Target URL(s) provided by user; basic scraping requirements."
constraints: "Use requests and BeautifulSoup; handle HTTP errors; respect robots.txt."
output_contract: "A single .py script that fetches pages, parses content, and prints extracted fields."

## DEVELOPER NOTES

### Compatible Modes
   - orchestration, planning, code generation, data analysis, creative writing, retrieval.

### Common Uses
   - Classify and route coding tasks to CodeWriterAgent.
   - Send analysis tasks to DataAnalyzerAgent with dataset paths and metrics.
   - Delegate copy/tone tasks to CreativeWriterAgent with brand/style constraints.

### Notes
   - Centralize intent taxonomy and agent capability matrix for deterministic routing.
   - Add fallback (e.g., Re-route or Ask-for-Clarification) when confidence in classification is low.
   - Version prompts per agent; test with golden sets to prevent regressions.
