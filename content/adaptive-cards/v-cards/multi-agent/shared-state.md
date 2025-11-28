---
id: 'VC_AGENT_STATE'
title: 'Async Job Queue Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Multi-Agent'
purpose: 'Manages long-running tasks via a shared State Store (Redis/JSON) rather than direct message passing.'
tags:
  - 'async-flow'
  - 'state-management'
  - 'job-queue'
---

## TECHNIQUE DESCRIPTION
The "Bulletin Board." Agents post work tickets here. 

## OPERATIONAL PROTOCOLS

### 1. JOB POSTING
**Action:** When a task takes >30 seconds (e.g., Deep Research), post a Ticket.
```json
{
  "ticket_id": "job_88a",
  "status": "queued",
  "assigned_to": "agent_research_deep",
  "payload": "[Context]"
}
```

### 2. STATUS CHECK (Polling)
**Rule:** The System polls this ticket every 5 seconds.

If `status == "complete"`, retrieve result.

If `status == "failed"`, trigger `VC_FALLBACK_RETRY`.