---
id: 'PC_SMPR_001'
title: 'Stateful Multi-Pass Retry'
card_type: 'P-Card'
category: 'Fallback Strategies & Error Recovery'
purpose: 'Recover from a single-step failure in a multi-step workflow by preserving state and retrying only the failed step.'
references: []
tags:
  - 'stateful-retry'
  - 'error-recovery'
  - 'workflow'
  - 'chain-of-prompts'
  - 'persistence'
---

## AI PROMPT CONTENT

### Goal
Enable robust recovery within multi-step workflows by checkpointing state after each successful step and retrying only the failed step using the saved context.

### Core Technique
- **Checkpoint after each success**: Save structured state (plans, inputs, artifacts, step pointer) to a persistent cache.
- **Targeted retry**: On failure, reload prior state and re-execute **only** the failed step with adjusted parameters (timeouts, simplified queries, alternate tools).
- **Minimal blast radius**: Avoid re-running successful steps to preserve time and cost.

### Best Practices
- Make every step **idempotent** (safe to retry without side effects).
- Impose a **retry limit** and **backoff** strategy to avoid loops.
- Validate each step’s output against a **schema/contract** before advancing.
- Record **failure cause** and **retry metadata** (attempt number, adjustments) for observability.

### Example Prompt (Pattern)
**Failure Context**  
_Step 2 of a 3-step chain fails._

**State Snapshot**
Step 1: Planning - SUCCESS
Step 2: Data Gathering - FAIL


**Retry Prompt for Step 2 — System**
You are the Data Gathering agent.
Your previous attempt to fetch data failed due to a timeout.
You are now re-attempting the task. Use a longer timeout and simplified query if necessary.


**Retry Prompt for Step 2 — prior_state**
```json
{
  "plan": [
    "Fetch user data from UserAPI",
    "Fetch sales data from SalesAPI",
    "Synthesize results"
  ],
  "current_step": "Fetch user data from UserAPI"
}
```

### Output Rules
    Return only the step-2 result conforming to its schema.

    Include a concise status block if required, e.g.:
        { "recovered": true, "retried_step": 2, "attempts": 2 }

## DEVELOPER NOTES

   ### Compatible Modes
   - Orchestrated pipelines, ETL/data agents, retrieval-augmented generation chains, multi-agent workflows.

   ### Common Uses
    - Reattempt network/timeouts with tuned parameters.
    - Swap tools/providers for a step while keeping prior outputs intact.
    - Resume long-running chains after transient failures.

   ### Notes
   - Store state with versioned schemas to ensure backward compatibility.
   - Separate transient artifacts (cacheable) from side-effectful actions (gate with dry-run/check modes).
   - Add circuit breakers (max retries, total runtime budget) and surface telemetry for postmortems.