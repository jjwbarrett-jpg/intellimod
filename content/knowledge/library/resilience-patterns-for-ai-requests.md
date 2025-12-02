---
id: 'VC_094'
title: 'Resilience Patterns For AI Requests'
card_type: 'V-Card'
purpose: 'Increase robustness of AI app requests by using retries, timeouts, and cancellation to handle slow or failing APIs and prevent degraded UX.'
tags:
- 'resilience'
- 'retry-loops'
- 'timeouts'
- 'abortcontroller'
- 'exponential-backoff'
- 'logging'
---

## AI PROMPT CONTENT

### Category
API Integration — Tier: Expert

### Summary
AI apps must be resilient to slow or failing APIs. Retry loops and request timeouts help prevent user lockups and degraded UX during high latency or partial outages.

### Core Principles
   - Retry loops improve resilience for transient server errors.
   - AbortController can cancel long-running fetch or Axios calls.

### Best Practices
   - Retry failed AI requests two to three times with exponential backoff.
   - Use AbortController to cap long-running requests (e.g., a 30-second timeout).
   - Log all retries and timeouts for analytics.

### Use Cases
   - LLM queries that stall.
   - Fetching vector data from knowledge graphs.