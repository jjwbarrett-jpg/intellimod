---
id: 'VC_STRUCT_TEMPLATE'
title: 'Modular Prompt Assembly Logic'
version: '2.0'
card_type: 'V-Card'
category: 'Structuring'
purpose: 'Defines the standard architecture for constructing high-fidelity prompts (System -> Context -> Task).'
tags:
  - 'prompt-engineering'
  - 'meta-prompting'
  - 'assembly'
---

## TECHNIQUE DESCRIPTION
The "Lego Instructions." Use this card when asking the AI to write a prompt for another agent.

## OPERATIONAL PROTOCOLS

### 1. THE ASSEMBLY ORDER
**Rule:** Construct prompts in this vertical stack:
1.  **IDENTITY:** (System Role / Persona)
2.  **CONTEXT:** (Background / XML Data)
3.  **PROTOCOL:** (Operational Rules / Constraints)
4.  **TASK:** (The Immediate Instruction)
5.  **OUTPUT:** (Format Requirements)

### 2. VARIABLE HANDLING
**Directive:** When writing templates, use `{{handlebars}}` syntax for variables.
* **Safety:** If a variable is missing, default to `[UNSPECIFIED]` rather than breaking the prompt.