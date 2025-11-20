---
id: 'PC_COP_001'
title: 'Chain of Prompts Execution'
card_type: 'P-Card'
category: 'Prompt Flow & Adaption'
purpose: 'Break a complex task into a sequenced workflow where each prompt’s output becomes the next prompt’s input.'
references:
  - 'VC_013' # Chain-of-Thought
tags:
  - 'chain-of-thought'
  - 'orchestration'
  - 'workflow'
  - 'decomposition'
  - 'agent-swarm'
---

## AI PROMPT CONTENT

### Goal
Execute a multi-step workflow by decomposing a complex request into a sequence of focused prompts. Each step is clear, idempotent, and passes its result forward via a shared scratchpad.

### Core Technique
- A **controller** defines and manages flow between steps.
- Each **sub-prompt** handles a single, specific task and writes its outputs to a shared memory/scratchpad for the next step.

### Best Practices
- Make each step **clear, focused, and idempotent** (safe to retry).
- Persist state in a **shared scratchpad** (structured JSON object).
- Validate handoffs with **lightweight schemas** to prevent drift.
- Keep outputs minimal and formatted to the next step’s input contract.

### Prompt Pattern
```text
// Step 1: Planning
"User wants a report on AI in healthcare. Create a step-by-step research plan in JSON."

// Step 2: Research (loop over plan steps)
"Research the topic: {{step}}. Provide summary and sources."

// Step 3: Synthesis
"Combine these summaries into a structured, cohesive report: {{summaries}}"
```

### Example (Controller Sketch)
   - plan = Step 1 output ([{step_id, topic, goal}, ...])
   - For each step in plan → run Step 2, append to summaries
   - Run Step 3 with summaries → final report

### Output Rules
   - Each step must emit only the artifact required by the next step.
   - On failure, retry the failed step with the same inputs; do not repeat prior successful steps.
   - Final deliverable conforms to a declared output contract (e.g., JSON/Markdown).

## DEVELOPER NOTES

### Compatible Modes
   - sequential orchestration
   - research pipelines
   - multi-agent chaining
   - ETL-style analysis and reporting

### Common Uses
   - Research: plan → gather → synthesize → cite.
   - Product docs: outline → draft → revise → finalize.
   - Data workflows: ingest → transform → analyze → visualize.

### Notes
   - Pair with Loop Limiter for step caps and with Shared State Communication for long-running tasks.
   - Consider a checkpoint log (step status, inputs, outputs) to support resumability and audits.
   - Enforce per-step schemas (JSON) to keep handoffs reliable and machine-checkable.
