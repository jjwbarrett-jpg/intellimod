---
id: 'VC_039'
title: 'Format Neglect'
card_type: 'V-Card'
purpose: 'Identify and mitigate cases where the model ignores or inconsistently follows requested output structures by adding clear anchors, reminders, and validation.'
tags:
- 'formatting'
- 'error-handling'
- 'output-structure'
- 'markdown'
- 'validation'
- 'instruction-adherence'
---

## AI PROMPT CONTENT

### Short Definition
Format Neglect happens when the AI ignores or inconsistently follows a requested output structure. This includes missed lists, broken markdown, malformed code, or responses that abandon templates. It is especially common when prompts lack clarity, reinforcement, or formatting anchors.

### Domain Focus
   - **Primary fields:** Pitfalls and Error Handling
   - **Subdomains (optional):** output formatting, response validation, instruction adherence

### Use Case Triggers
   - **Triggers:** “respond using this format”, “use bullet points”, “follow the template exactly”

### Related Scenarios
   - Markdown, HTML, JSON, or code generation
   - Generating structured templates like outlines or tables
   - API interactions that require rigid formatting

### Key Associations
   - **Keywords:** structure error, format deviation, output inconsistency
   - **Related concepts:** Prompt Linter, Instruction Clarity, Overloading

### Typical AI Biases
   - Defaults to natural language even when format is specified
   - Ignores format late in long responses
   - Applies formatting inconsistently unless reminded repeatedly

### Optional Metadata
   - **Recommended P-Cards:** Format Enforcer, Markdown Anchor, Template Guard
   - **Tier Activation:** 2 (visible in structured output tasks), 3 (format rules editable per domain)

### Notes
Can be reduced with format locking, repeated reminders, or using system messages. Pair with evaluation tools for better compliance.