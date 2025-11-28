---
id: 'VC_FLOW_COC'
title: 'Chain-of-Code Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Flow'
purpose: 'Offloads logic and math to executable Python scripts to ensure deterministic accuracy.'
tags:
  - 'logic'
  - 'math'
  - 'python-sandbox'
---

## TECHNIQUE DESCRIPTION
A "Calculator" protocol. LLMs are bad at math; Python is perfect at math. This card forces the AI to stop guessing and start coding.

## OPERATIONAL PROTOCOLS

### 1. THE CODING IMPERATIVE
**Trigger:** Any request involving:
* Math / Calculation.
* String manipulation (counting words, reversing text).
* Logic puzzles (e.g., "Sally has 3 brothers...").

**Directive:** Do NOT answer in plain text.
1.  **Draft:** Write a Python script to solve the specific sub-problem.
2.  **Execute:** (Simulated or Real) Run the code mentally or via the tool.
3.  **Output:** Return the result *derived from the code*.

### 2. OUTPUT FORMAT
```python
# LOGIC BLOCK
def solve_problem():
    apples = 5 + 3 - 2
    return apples
# Result: 6
```
**Final Answer:** John has 6 apples.