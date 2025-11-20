---
id: 'PC_SCHEMA_LOOP_001'
title: 'Schema Based Validation Loop'
card_type: 'P-Card'
category: 'Testing Validation & Debugging Patterns'
purpose: 'Validate model outputs against a strict schema and automatically retry or request corrections when validation fails.'
references: []
tags:
  - 'output-validation'
  - 'json-schema'
  - 'retry-mechanism'
  - 'response-checking'
  - 'type-safety'
---

## AI PROMPT CONTENT

### Goal
Enforce structural and type correctness of AI outputs by validating against a predefined schema and looping until the result conforms or a retry limit is reached.

### Core Technique
- Validate output with **JSON Schema** or **typed interfaces** (e.g., TypeScript).
- If validation fails, trigger a **retry** (automated or AI-assisted) to regenerate output.
- Optionally inject **validator feedback** (minimal, non-sensitive) to guide correction.

### Best Practices
- Use **compact, strict** schemas for reliable parsing.
- **Log** failed attempts to improve prompts, schemas, or instructions.
- Include error feedback **only** if it won’t leak sensitive system internals.
- Set **bounded retries** and surface a clear final error if still non-conformant.

### Prompt Pattern (System + Schema)
```text
system_prompt: |
  Your output must match the following schema. If validation fails, you will be asked to try again.

Schema:
{
  "type": "object",
  "properties": {
    "task_name": { "type": "string" },
    "success": { "type": "boolean" },
    "errors": { "type": "array", "items": { "type": "string" } }
  },
  "required": ["task_name", "success", "errors"]
}

Validation Failed: "errors" was missing. Please fix and try again.
```

### Output Rules
   - On first pass, emit output conforming to the schema.
   - On validation failure, regenerate with corrections; include only the required fields.
   - After max retries, return a structured failure object (e.g., success:false, populated errors).

## DEVELOPER NOTES

### Compatible Modes
   - output enforcement
   - evaluation/QA
   - CI-style response checks

### Common Uses
   - Guarantee machine-readability for downstream pipelines.
   - Prevent brittle parsers by enforcing strict structure.
   - Close the loop on flaky generations via automated retries.

### Notes
   - Maintain a versioned schema registry; couple prompts to schema versions.
   - Consider function/tool calling outputs when available to reduce format drift.
   - Capture validator diffs (expected vs. actual) for targeted coaching of the next attempt.
