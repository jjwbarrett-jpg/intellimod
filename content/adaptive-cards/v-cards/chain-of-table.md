---
id: 'VC_012'
title: 'Chain-of-Table'
card_type: 'V-Card'
purpose: 'Guide the model to reason over tabular data via stepwise, SQL-like filtering, aggregation, and comparison for accurate structured analysis.'
tags:
- 'structured-data'
- 'tabular-reasoning'
- 'sql-like'
- 'filtering'
- 'aggregation'
---

## AI PROMPT CONTENT

### Category
Structured Data Reasoning

### Core Function
Applies logical operations over tables using a step-by-step, SQL-like reasoning process.

### Definition
Chain-of-Table prompting enables the model to reason over tabular data by generating and applying sequential filters, aggregations, or comparisons. The approach mirrors spreadsheet logic or database queries, guiding the model to manipulate data structures accurately.

### Example

**Prompt:**
"Given the table of product sales, identify which product had the highest average rating and sold more than 100 units. Explain your steps."

### Trigger Phrases
   - "Scan the table row by row..."
   - "Apply filters to this dataset..."
   - "Summarize by column, then rank..."
   - "What query would extract this result?"

### Related Concepts
   - Chain-of-Thought
   - Program-of-Thought
   - Prompt Chaining
   - Logical Chain-of-Thought

### Use Cases
   - Analyzing CSV/Excel-style input
   - Structured QA for finance, medicine, or research
   - Database interaction agents
   - Internal tool interfaces for tabular reasoning