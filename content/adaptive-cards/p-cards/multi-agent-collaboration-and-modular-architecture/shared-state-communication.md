---
id: 'PC_SHARED_STATE_001'
title: 'Shared State Communication'
card_type: 'P-Card'
category: 'Multi-Agent Collaboration & Modular Architecture'
purpose: 'Enable asynchronous, loosely coupled coordination by having agents read/write a shared persistent job/state object instead of using direct messaging.'
references: []
tags:
  - 'shared-state'
  - 'communication-protocol'
  - 'async'
  - 'state-management'
  - 'persistence'
  - 'redis'
  - 'database'
---

## AI PROMPT CONTENT

### Goal
Coordinate multiple agents asynchronously using a **shared, persistent state** (e.g., Redis key, DB record). Agents **poll** for relevant jobs, **claim** work safely, and **write results** back to the state—no direct agent-to-agent messaging required.

### Architecture
- **Orchestrator** creates a job record with unique ID and initial status.
- **Worker Agents** poll/subscribe to the store for jobs matching their specialty.
- **State Store** (Redis/DB) provides atomic updates, locks, and durable persistence.

### Core Technique
- Orchestrator inserts a job: `{ job_id, status, assigned_agent, task_definition, result }`.
- Workers acquire the job via **status + lock** transition (`pending → in_progress (locked)`).
- On completion or failure, workers update `status` (`complete` or `failed`) and attach `result` or `error`.

### Best Practices
- Use **status flags** and **locking mechanisms** to prevent duplicate work.
- Include **retry counters** and **backoff** fields for resilience.
- Keep payloads **schema-versioned** and **minimal**; store large artifacts externally and reference by URL.
- Prefer **idempotent** agents—re-running should not corrupt state.
- Log **state transitions** for auditability.

### Example: Job State Schema
```json
{
  "job_id": "xyz123",
  "status": "pending",           // -> in_progress -> complete | failed
  "requested_by": "user_456",
  "assigned_agent": "ReportGeneratorAgent",
  "task_definition": {
    "type": "generate_monthly_report",
    "month": "July",
    "year": "2025"
  },
  "result": null,
  "error": null,
  "retries": 0,
  "lock": null,                  // e.g., { "holder": "agent_instance_1", "expires_at": 1759971200 }
  "schema_version": "1.0.0",
  "created_at": 1759350000,
  "updated_at": 1759350000
}
```

### Agent Prompt Pattern

Prompt for ReportGeneratorAgent
You are the ReportGeneratorAgent. Your task is to execute the job defined in the provided JSON object.

Protocol:
1) Validate schema_version and task_definition fields.
2) Atomically claim the job (set status=in_progress and acquire lock).
3) Execute the task exactly as specified.
4) Write back:
   - status=complete and result=<artifact or summary>
   - or status=failed and error=<message>, increment retries.
5) Release lock and update timestamps.
Output ONLY the fields you update (partial record), in JSON.

### Output Rules
   - Workers must output only the updated fields to be merged server-side.
   - Orchestrator and monitors react to status transitions; no free-form text.

### Failure & Concurrency Handling
   - Use locks with TTL to avoid deadlocks; allow re-claim after expiry.
   - Implement retry policy (max_retries, exponential backoff).
   - On repeated failure, escalate to manual review or alternate agent.

## DEVELOPER NOTES

### Compatible Modes
   - orchestration, long-running tasks, batch processing, ETL/reporting, retrieval/analysis, tool execution.

### Common Uses
   - Long-running report generation or data pipelines where request/response is impractical.
   - Multi-step workflows with independent specialists reading/writing to the same job state.
   - Fan-out/fan-in patterns: orchestrator creates N jobs; aggregator reads complete results.

### Notes
   - Prefer Redis streams/lists or DB queues for subscription patterns; use atomic operations.
   - Keep PII out of job bodies; reference external secure stores via opaque IDs.
   - Define state machine transitions and enforce them with server-side guards or DB constraints.
   - Provide observability dashboards: counts by status, average time in state, failure reasons.