---
id: 'PC_RSA_001'
title: 'Response Scoring & Annotation'
card_type: 'P-Card'
category: 'Feedback Loops & Iterative Tuning'
purpose: 'Capture explicit and implicit user feedback to score responses, analyze quality, and feed targeted improvements into future outputs.'
references: []
tags:
  - 'feedback'
  - 'scoring'
  - 'annotation'
  - 'data-collection'
  - 'user-signals'
---

## AI PROMPT CONTENT

### Goal
Collect structured feedback signals for each model response and link them with the originating prompt to enable analysis, dashboards, and data pipelines for tuning.

### Core Technique
- **Log interactions**: Store the prompt, LLM response, and user signals (thumbs, copy, edit, dwell time).
- **Triplet association**: Persist `{prompt, response, feedback}` as a single record for longitudinal quality tracking.
- **Signal normalization**: Convert heterogeneous events into a unified score (e.g., `[-1, 1]`) with metadata (`comment`, `rephrase_requested`, `copied`).

### Best Practices
- **Minimize friction**: Provide one-tap rating UI and optional comment field.
- **Blend signals**: Combine explicit ratings with passive telemetry (quick rephrase, abandon, copy-to-clipboard).
- **Segment analysis**: Track by task type, user cohort, and model version.
- **Privacy-first**: Redact PII; store only needed fields with retention windows.

### Example Prompt (Pattern)
```json
{
  "session_id": "session-xyz-123",
  "timestamp": "2025-07-22T12:54:00Z",
  "prompt": "How do I create a Docker container for a Node.js app?",
  "llm_response": "[... Dockerfile content ...]",
  "user_feedback": {
    "signal": "thumbs_up",
    "score": 1.0,
    "comment": "This was exactly what I needed."
  }
}
```

### Output Rules
   - Emit feedback records as append-only JSON objects with stable IDs.
   - Ensure fields: session_id, timestamp, prompt, llm_response, user_feedback{signal, score, comment?}, and optional meta.
   - Keep scores in a consistent range and document the mapping from raw events to scores.

## DEVELOPER NOTES

### Compatible Modes
- chat assistants, retrieval-augmented QA, coding copilots, data analysis, content generation.

### Common Uses
   - Build dashboards for response quality by task and model version.
   - Select high-signal examples for fine-tuning or few-shot libraries.
   - Detect regressions via moving averages of user satisfaction.

### Notes
   - Define a versioned feedback schema (feedback_schema_v1).
   - Guard against selection bias (e.g., only unhappy users rate) with passive signals and random prompts for rating.
   - Consider confidence weighting (experienced users, longer dwell) and spam filtering on comments.
   - Log only necessary content; hash or tokenize long responses to reduce storage and protect privacy.