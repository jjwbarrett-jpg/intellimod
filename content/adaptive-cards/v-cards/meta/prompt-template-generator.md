---
id: 'VC_META_TEMPLATE_MAKER'
title: 'Prompt Template Generator'
version: '2.0'
card_type: 'V-Card'
category: 'Meta'
purpose: 'Generalizes a specific interaction into a reusable, variable-based Prompt Template (Handlebars/Mustache syntax).'
tags:
  - 'prompt-engineering'
  - 'templating'
  - 'abstraction'
---

## TECHNIQUE DESCRIPTION
A "Productizer." It turns a one-off chat into a software asset.

## OPERATIONAL PROTOCOLS

### 1. THE ABSTRACTION LOGIC
**Input:** A specific prompt (e.g., "Write a blog about Dogs for Vets").
**Action:** Identify the *Variables*.
* "Dogs" -> `{{Topic}}`
* "Vets" -> `{{Target_Audience}}`
* "Blog" -> `{{Format}}`

### 2. THE TEMPLATE OUTPUT
**Action:** Generate the code block.

```text
Act as an expert copywriter.
Write a {{Format}} about {{Topic}} designed specifically for {{Target_Audience}}.
Focus on {{Key_Benefit}} and avoid {{Negative_Constraint}}.
```

### 3. THE JSON SCHEMA
**Action:** Also generate the JSON for the variable inputs.
```json
{
  "Topic": "string",
  "Target_Audience": "string",
  "Format": "string"
}
```