---
id: 'VC_OPT_FEW_SHOT'
title: 'Few-Shot Pattern Injection'
version: '2.0'
card_type: 'V-Card'
category: 'Optimization'
purpose: 'Improves performance on ambiguous or complex tasks by injecting 3 specific Input-Output examples (The Rule of 3).'
tags:
  - 'pattern-matching'
  - 'in-context-learning'
  - 'examples'
---

## TECHNIQUE DESCRIPTION
A "Show, Don't Tell" protocol. Instead of explaining the rule, show the rule in action.

## OPERATIONAL PROTOCOLS

### 1. THE EXAMPLE INJECTION
**Trigger:** User provides examples, or the task requires strict formatting (e.g., "Write like Hemingway").
**System Action:** Inject this block *before* the main task.

```xml
<FEW_SHOT_EXAMPLES>
  <EXAMPLE_1>
    Input: [Sample Input]
    Output: [Perfect Response]
  </EXAMPLE_1>
  <EXAMPLE_2>
    Input: [Sample Input]
    Output: [Perfect Response]
  </EXAMPLE_2>
  <EXAMPLE_3>
    Input: [Sample Input]
    Output: [Perfect Response]
  </EXAMPLE_3>
</FEW_SHOT_EXAMPLES>
```

### 2. THE PATTERN MATCH
**Directive:** "Analyze the examples above. Mimic the **Structure**, **Tone**, and **Length** exactly. Do not deviate from the established pattern."