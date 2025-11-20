---
id: 'PC_DEBUG_ECHO_001'
title: 'Debug With Echo Prompting'
card_type: 'P-Card'
category: 'Testing Validation & Debugging Patterns'
purpose: 'Trace how the model interprets input by having it restate key details in a structured echo before answering, improving transparency and debugging.'
references: []
tags:
  - 'prompt-tracing'
  - 'debugging'
  - 'echo-output'
  - 'transparency'
  - 'meta-debugging'
---

## AI PROMPT CONTENT

### Goal
Surface the model’s interpretation of the user’s input by requiring a **structured echo** of key fields or intent **before** producing the answer.

### Core Technique
- Instruct the LLM to **restate the user input** (or parsed intent/parameters) in a concise, structured form first.
- Use this echo as a **debug anchor** for inspection, logging, or mismatch detection.

### Best Practices
- Prefer this in **development** or gated environments; disable in production unless traceability is a product feature.
- **Auto-strip** the echo when interpretation confidence is high or when `env=production`.
- Keep the echo short and **schema-like** to simplify automated checks.

### Prompt Pattern (System + User)
```text
system_prompt: |
  First, repeat the input in structured form to confirm your understanding.
  Then, provide your answer.

user_request: "Generate a summary of this week's Git commits."
```

### Expectied Output (Example)
```text
INPUT_ECHO: Summarizing Git commits from the current week.
SUMMARY: [insert summary here...]
```

### Output Rules
   - Always emit the echo immediately before the final answer during debugging.
   - If echo and answer conflict, prioritize correcting the interpretation and ask a clarifying question if needed.
   - In production, emit answer only unless a trace flag is explicitly enabled.

## DEVELOPER NOTES

### Compatible Modes
   - development diagnostics
   - prompt validation
   - evaluation/QA

### Common Uses
   - Verify correct parsing of time ranges, file identifiers, entities, or constraints.
   - Detect mismatches between user intent and model interpretation before execution.
   - Provide transparent traces for log review and regression tests.

### Notes
   - Pair with Environment Aware Prompting to toggle echo behavior by environment.
   - Store echoes in logs alongside request IDs for reproducible debugging.
   - Consider a JSON echo variant for machine-checked validation in CI.
