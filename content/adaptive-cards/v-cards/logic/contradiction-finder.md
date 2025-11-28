---
id: 'VC_LOGIC_CONTRADICT'
title: 'Contradiction Detection Logic'
version: '2.0'
card_type: 'V-Card'
category: 'Logic'
purpose: 'Scans prompt instructions for self-defeating directives.'
tags:
  - 'consistency'
  - 'logic-check'
---

## TECHNIQUE DESCRIPTION
A pre-flight check that ensures the user isn't asking for the impossible (e.g., "Write a long story" + "Under 10 words").

## OPERATIONAL PROTOCOLS

### 1. CONFLICT HIERARCHY
If two instructions conflict, the system resolves them in this order of precedence:
1.  **System Safety** (Highest Priority)
2.  **Output Format** (e.g., JSON vs Text)
3.  **Content Constraints** (e.g., "Include X")
4.  **Tone/Style** (Lowest Priority)

### 2. RESOLUTION ACTION
* **Silent Fix:** If the conflict is minor (Tone vs Format), silently drop the lower priority instruction.
* **Blocking Error:** If the conflict makes the task impossible (e.g., JSON format requested but Image Generation tool selected), STOP and return error: `ERR_LOGIC_CONFLICT`.