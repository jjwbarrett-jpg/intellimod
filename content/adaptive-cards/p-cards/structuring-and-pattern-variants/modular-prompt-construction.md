---
id: 'PC_MODULAR_001'
title: 'Modular Prompt Construction'
card_type: 'P-Card'
category: 'Prompt Structuring & Pattern Variants'
purpose: 'Assemble prompts from reusable template blocks/partials to improve consistency, maintainability, and fast iteration.'
references:
- 'VC_015' # Cognitive Scaffolding
- 'VC_024' # C.R.A.F.T.
tags:
  - 'templates'
  - 'modularity'
  - 'prompts'
  - 'reuse'
  - 'composition'
---

## AI PROMPT CONTENT

### Goal
Build prompts by composing **reusable partials** (role, task, format, constraints) so teams can version, test, and update instructions without rewriting entire prompts.

### Core Technique
- Define a **library of partials/blocks**, each with a single purpose:
  - **role_definition** (persona/stance)
  - **task_instruction** (action & scope)
  - **constraints** (tone, length, policies)
  - **output_format** (schema/markdown)
  - **tools/context** (APIs, paths, retrieved snippets)
- Use a templating engine (e.g., **Handlebars**, **Jinja**) to insert dynamic values and stitch partials into the final prompt at runtime.

### Best Practices
- Store partials as **JSON/YAML** with clear IDs, descriptions, and version fields.
- Keep blocks **small and single-responsibility**; avoid overlapping instructions.
- Prefer **explicit output contracts** (schemas, bullet counts) as separate partials.
- Add **unit tests** (golden prompts/outputs) for critical compositions.
- Track changes with **semver** and changelogs; deprecate old blocks gradually.

### Prompt Pattern
```text
{{> role_definition_<persona> }}
{{> task_instruction_<task> }}
{{> constraints_<policy_pack> }}
{{> context_<source> }}
{{> output_format_<schema> }}

# Dynamic Data
Inputs:
{{ dynamic_inputs }}
```

### Example
```text
{{> role_definition_expert_coder }}
{{> task_instruction_generate_function }}
Function Name: {{ function_name }}
Parameters: {{ parameters }}
{{> output_format_json_with_code }}
```

### Output Rules
   - Final prompt must include exactly one role, one task, one output format; multiple constraint/context blocks are allowed but should not conflict.
   - If partials conflict, last-applied wins (or fail build per policy); log the resolution.

## DEVELOPER NOTES

### Compatible Modes
   - template-driven prompting
   - multi-team libraries
   - A/B testing of prompt variants
   - CI/CD prompt pipelines

### Common Uses
   - Standardize codegen, summarization, and extraction prompts across products.
   - Swap persona or format by changing only one partial.
   - Roll out policy packs (safety/tone) across all prompts via a single library update.

### Notes
   - Combine with Prompt Validation Pipeline (pre) to sanitize dynamic inputs.
   - Pair with Fallback Prompt Designs to fail gracefully when a composition is invalid.
   - Maintain a registry (ID → partial path/version) and a resolver that verifies required blocks are present before execution.
