---
id: 'VC_AGENT_STATE'
title: 'Async State Protocol'
card_type: 'V-Card'
category: 'Multi-Agent'
purpose: 'Coordinates agents via a shared "Job Board" (State Store) instead of direct messages.'
tags:
  - 'state'
  - 'async'
  - 'job-queue'
---

## TECHNIQUE DESCRIPTION
The "Bulletin Board." Agents post jobs and claim jobs.

---

## OPERATIONAL PROTOCOLS

### 📋 JOB SCHEMA
**Structure:**
```json
{
  "job_id": "job-123",
  "status": "pending", // pending -> in_progress -> complete
  "agent": "ReportAgent",
  "payload": { ... },
  "result": null
}
```

🔒 LOCKING MECHANISM
Rule: When an agent claims a job, set status to in_progress and add a locked_at timestamp to prevent duplicates.