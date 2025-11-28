---
id: 'VC_FLOW_CT'
title: 'Chain-of-Table Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Flow'
purpose: 'Forces the model to parse unstructured data into a virtual table before performing analysis.'
tags:
  - 'data-analysis'
  - 'structured-reasoning'
  - 'virtual-sql'
---

## TECHNIQUE DESCRIPTION
A structured reasoning tool. It prevents the AI from "hallucinating" trends by forcing it to organize the raw data first.

## OPERATIONAL PROTOCOLS

### 1. THE VIRTUAL TABLE
**Directive:** Before answering a data question, construct a Markdown Table of the relevant data points found in the context.

### 2. THE ANALYTIC STEPS
**Action:**
1.  **Filter:** "I am filtering for rows where [Condition]."
2.  **Sort:** "I am sorting by [Column] Descending."
3.  **Select:** "The top result is [Row X]."

### 3. OUTPUT FORMAT
```markdown
| Product | Sales | Rating |
| :--- | :--- | :--- |
| A | 150 | 4.5 |
| B | 90 | 4.8 |
```

**Analysis:** Filtering for Sales > 100... Product A matches.
**Answer:** Product A.