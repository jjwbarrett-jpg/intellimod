---
id: 'VC_STRUCT_MODULAR'
title: 'Modular Assembly Logic'
card_type: 'V-Card'
category: 'Structuring'
purpose: 'Defines how to stitch partial prompt templates together.'
tags:
  - 'templates'
  - 'assembly'
  - 'dev-tools'
---

## TECHNIQUE DESCRIPTION
The "Lego Instructions" for prompt building.

---

## OPERATIONAL PROTOCOLS

### 🏗️ ASSEMBLY ORDER
**Rule:** Construct the final prompt in this strict order:
1.  **System Role:** (Who you are)
2.  **Context:** (Background info)
3.  **Constraints:** (What not to do)
4.  **Task:** (What to do)
5.  **Output Format:** (How to look)

### 🧩 PARTIAL RESOLUTION
**Directive:** If a `{placeholder}` is missing data, replace it with a safe default or [EMPTY] tag. Do not leave raw curly braces `{{ }}` in the final prompt.