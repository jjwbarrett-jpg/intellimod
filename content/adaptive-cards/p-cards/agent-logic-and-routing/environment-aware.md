---
id: 'PC_ENV_001'
title: 'Environment Aware Prompting'
card_type: 'P-Card'
category: 'Logic'
purpose: 'Adjust prompt verbosity and format based on the runtime environment.'
references: []
tags:
  - 'prompting'
  - 'environment-variables'
  - 'testing'
---

## AI PROMPT CONTENT

### Goal
Dynamically tailor responses according to the runtime environment to optimize clarity during development and efficiency in production.

### Inputs
- **user_query**: The end-user request.
- **Environment flags/variables**: e.g., `NODE_ENV`.

### Core Technique
- Use runtime variables to toggle between prompt modes.
- Inject diagnostic detail **only** in development environments.

### Output Rules
- **Development**: Provide a brief rationale or step-by-step explanation followed by the final output.
- **Production**: Emit only the final output in the requested format, with no reasoning or extra text.

### Prompt Pattern (Example)
```handlebars
{{#if is_development}}
Debug mode enabled. Explain reasoning step-by-step.
{{/if}}

User Query: "{{user_query}}"

{{#if is_production}}
Return only the compact output. No commentary.
{{/if}}
```

## DEVELOPER NOTES

   ### Compatible Modes: 
   planning, drafting, evaluation, code generation.

   ### Common Uses: 
   Toggle verbose diagnostics, switch between rich Markdown and terse strings.

   ### Notes: 
   Ensure environment flags are mutually exclusive (e.g., is_development XOR is_production).