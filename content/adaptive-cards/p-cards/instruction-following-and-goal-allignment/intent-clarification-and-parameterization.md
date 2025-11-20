---
id: 'PC_ICP_001'
title: 'Intent Clarification & Parameterization'
card_type: 'P-Card'
category: 'Instruction Following & Goal Alignment'
purpose: 'Transform natural-language requests into validated, schema-based task parameters, requesting clarifications when fields are missing or ambiguous.'
references: []
tags:
  - 'intent-parsing'
  - 'parameterization'
  - 'structured-data'
  - 'goal-alignment'
  - 'bff'
  - 'sigs'
---

## AI PROMPT CONTENT

### Goal
Convert raw user input into structured parameters that match an operation-specific schema so downstream agents receive clean, unambiguous instructions.

### Core Technique
- **Parse** raw user text with an Intent Parser agent.
- **Extract** required/optional fields per a registered schema; emit a JSON object.
- **Clarify** missing or ambiguous parameters by asking targeted questions before continuing.

### Best Practices
- Implement in a **BFF/SIGS** layer to enforce input validation early.
- Maintain a **schema registry** with versions (e.g., `save_file.v1`) for consistency.
- Fail **closed**: if validation fails, emit a clarification object rather than guessing.

### Prompt Pattern (Example)
```yaml
system_prompt: |
  You are a task parameterization service. Analyze the user's text and extract the required parameters for the "save_file" operation.
  The required parameters are "filename" (string) and "content" (string).
  Respond only with a valid JSON object.

user_request: "Okay, take that code we just wrote and save it for me in a file named 'test.py'."
```

### Output Rules
   - Emit only valid JSON matching the operation schema.
   - Include a clarifications array instead of final parameters when required fields are missing.
   - No extra prose outside JSON.

```json
{
  "operation": "save_file",
  "filename": "test.py",
  "content": "<<code from prior step>>",
  "meta": { "source": "intent_parser", "schema": "save_file.v1" }
}
```
```json
{
  "operation": "save_file",
  "clarifications": [
    { "field": "content", "question": "What content should be saved into 'test.py'?" }
  ],
  "meta": { "schema": "save_file.v1" }
}
```

## DEVELOPER NOTES

### Compatible Modes
   - orchestration kickoff, BFF/SIGS middleware, workflow routers, agent dispatchers.

### Common Uses
   - Normalizing free-text requests into tool/agent parameters.
   - Front-loading validation and preventing downstream errors.
   - Building auditable request logs with explicit schemas.

### Notes
   - Version schemas and validate with JSON Schema or equivalent.
   - Track provenance in meta (source message IDs, model version).
   - Redact or hash sensitive fields before logging or training.
   