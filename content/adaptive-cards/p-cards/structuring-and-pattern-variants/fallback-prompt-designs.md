---
id: 'PC_FALLBACK_001'
title: 'Fallback Prompt Designs'
card_type: 'P-Card'
category: 'Prompt Structuring & Pattern Variants'
purpose: 'Increase resilience by retrying failed tasks with a simpler, more explicit fallback prompt triggered by validation or low confidence.'
references: []
tags:
  - 'fallback'
  - 'error-handling'
  - 'redundancy'
  - 'safety-net'
  - 'resilience'
---

## AI PROMPT CONTENT

### Goal
Provide a structured safety net: attempt a task with a nuanced primary prompt; if validation fails or confidence is low, automatically re-run with a **simpler**, **more explicit** fallback prompt to guarantee a minimally acceptable result.

### Core Technique
- Run **Primary Prompt** first (rich instructions, flexible style).
- Validate response (schema, confidence score, latency, toxicity/PII).
- On failure/timeout/low-confidence, **retry once** with a **fallback prompt** that is direct, constrained, and format-locked.

### Best Practices
- Make fallback **unambiguous** with strict output contracts (counts, fields, length caps).
- Keep validation **programmatic** (JSON schema, regex, confidence thresholds).
- Log both attempts; surface which path produced the final output.
- Cap retries (usually 1) to avoid cost spirals and loops.

### Prompt Pattern

**Primary Prompt**
```text
"Synthesize the key strategic insights from the attached quarterly earnings call transcript."
```

### Fallback Prompt (triggered if primary fails)
```text
"Summarize the following text in exactly five bullet points.
Focus only on stated financial results and future outlook.
Return only the five bullets—no preamble.

Text:
[transcript_text]"
```

### Validation & Trigger Logic
   - Schema check: required fields present; valid JSON/Markdown structure.
   - Confidence: if confidence_score < 7 (or missing) → trigger fallback.
   - Latency/timeout: if no valid response in T seconds → trigger fallback.
   - Safety/format: guardrail violations or format errors → trigger fallback.

### Output Rules
   - If primary passes validation → return primary result.
   - Else run fallback and return its result if valid; otherwise return a safe minimal message and request clarification.
   - Do not exceed the configured retry cap; include a brief result provenance tag (primary|fallback).

## DEVELOPER NOTES

### Compatible Modes
   - summarization, synthesis, extraction, QA, structured reporting, customer support.

### Common Uses
   - Executive summaries from long transcripts with guaranteed bullet fallback.
   - Data extraction with strict JSON fallback when generative prose drifts.
   - Creative drafts with a template-based fallback to ensure deliverables.

### Notes
   - Pair with Prompt Validation Pipeline (pre) and Guardrail Filter Layers (post).
   - Store both attempts for audit/metrics (hit rate, fallback success, delta quality).
   - Consider tiered fallbacks (e.g., Primary → Fallback A → Fallback B) only if justified by ROI and latency budgets.