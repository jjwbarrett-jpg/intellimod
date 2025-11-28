---
id: 'VC_OPT_WEIGHTING'
title: 'Priority Weighting Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Optimization'
purpose: 'Assigns explicit numerical importance to conflicting instructions to resolve prioritization issues.'
tags:
  - 'priority'
  - 'weighting'
  - 'conflict-resolution'
---

## TECHNIQUE DESCRIPTION
A "Mixing Board." Use this when the AI is ignoring one instruction in favor of another.

## OPERATIONAL PROTOCOLS

### 1. THE WEIGHTING SYNTAX
**Directive:** Treat instructions with higher weights as mandatory; lower weights as optional.

* **Format:** `[Instruction]::[Weight]`
* **Scale:** 0.1 (Minor) to 3.0 (Critical).

### 2. EXAMPLE USAGE
* "Be concise::2" (Very important)
* "Be friendly::0.5" (Nice to have)
* "Use Python::3" (Mandatory)

### 3. AUTOMATION LOGIC
**Action:** If two weights conflict (e.g., "Be detailed::3" vs "Be brief::3"), the System triggers **`VC_LOGIC_CONTRADICT`** to resolve the error.