---
id: 'VC_FEEDBACK_SCORE'
title: 'Response Scoring Utility'
version: '2.0'
card_type: 'V-Card'
category: 'Feedback'
purpose: 'Aggregates explicit and implicit user satisfaction signals into a standardized quality score.'
tags:
  - 'analytics'
  - 'observability'
  - 'metrics'
---

## TECHNIQUE DESCRIPTION
A silent observer. It defines the JSON schema for logging quality, which n8n can write to Supabase, Postgres, or Airtable.

## OPERATIONAL PROTOCOLS

### 1. SIGNAL DEFINITIONS
**Explicit (High Confidence):**
* `thumbs_up` (+1.0)
* `thumbs_down` (-1.0)

**Implicit (Inferred - Requires UI Webhooks):**
* `ui_copy_event` (+0.5) -> User found it useful enough to take.
* `ui_regenerate` (-0.5) -> User rejected the first attempt.
* `ui_edit_prompt` (-0.2) -> User refined the query.

### 2. LOGGING SCHEMA
**Action:** Output a log object for the database:
```json
{
  "log_id": "uuid",
  "timestamp": "ISO_DATE",
  "model_used": "gpt-4o",
  "prompt_hash": "SHA256",
  "completion_hash": "SHA256",
  "quality_score": 0.8,
  "signals_detected": ["ui_copy_event", "thumbs_up"]
}
```