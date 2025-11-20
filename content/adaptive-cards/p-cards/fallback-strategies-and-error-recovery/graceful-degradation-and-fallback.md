---
id: 'PC_Degradation_001'
title: 'Graceful Degradation & Fallback'
card_type: 'P-Card'
category: 'Fallback Strategies & Error Recovery'
purpose: 'Ensure resilience by defining a hierarchy of task methods that automatically fall back to simpler, more robust alternatives when primary approaches fail.'
references: []
tags:
  - 'fallback'
  - 'graceful-degradation'
  - 'resilience'
  - 'error-handling'
  - 'redundancy'
---

## AI PROMPT CONTENT

### Goal
Maintain task completion under failure by attempting the most capable method first and, upon detection of failure, automatically retrying with progressively simpler, higher-reliability approaches.

### Core Technique
- Attempt **advanced method** first (e.g., multi-agent orchestration, tool-augmented reasoning).
- **Detect failure** via explicit signals (exceptions, timeouts, invalid schema) or low-confidence checks.
- **Fallback** to a simplified prompt or process that prioritizes reliability (single-agent, minimal tools, reduced scope).
- Record the **degradation path** for observability and later improvement.

### Best Practices
- Design fallback stages with **clear success criteria** and **small blast radius**.
- Prefer **deterministic, schema-bound** outputs in fallback steps.
- Keep each tier **independent** (don’t rely on upstream artifacts that may be corrupt).
- Track **degradation events** to identify brittle workflows and guide hardening.

### Example Prompt (Pattern)
**Failure Context**  
_Primary orchestration method fails._

**Fallback Prompt — System**
   - Your primary analysis method failed. Now, perform a simplified task.
   - You will be given a block of raw data.
   - Your only task is to write a brief, three-bullet-point summary of the main trends in the data.
   - Do not attempt to generate charts or perform complex calculations.


**Fallback Prompt — User Data**
[... CSV data of sales figures ...]

### Output Rules
- Return only the **fallback artifact** (e.g., three concise bullet points).
- Avoid tool calls or complex processing unless explicitly permitted in the fallback tier.
- Include a minimal **status note** field if the system requires: `{ "degraded": true, "tier": 2 }`.

## DEVELOPER NOTES

### Compatible Modes
- Orchestration layers, data analysis assistants, retrieval/report pipelines, customer support flows, batch automation.

### Common Uses
- Complex pipeline fails over to a **summary-only** pass.
- Retrieval+QA falls back to **best-effort extractive answer** without synthesis.
- Code generation degrades to **skeleton/stub** with TODOs when full build fails.

### Notes
- Define a **tiered plan** upfront (Tier 0 primary → Tier 1 simple → Tier 2 minimal).
- Instrument with **timeouts**, **circuit breakers**, and **retry budgets** per tier.
- Log **root cause + chosen fallback tier**; surface metrics to improve the primary path.
- In regulated contexts, ensure fallback still honors **compliance constraints** and redactions.
