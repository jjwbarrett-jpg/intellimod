---
id: 'PC_CLARIFY_001'
title: 'Clarification Request Pattern'
card_type: 'P-Card'
category: 'Fallback Strategies & Error Recovery'
purpose: 'When input is ambiguous or confidence is low, pause execution and ask the user for targeted clarification instead of guessing.'
references: []
tags:
  - 'clarification'
  - 'ambiguity'
  - 'user-interaction'
  - 'error-recovery'
  - 'input-handling'
---

## AI PROMPT CONTENT

### Goal
Improve accuracy and reduce frustration by detecting ambiguity or low-confidence interpretations and issuing a concise, option-oriented clarification question.

### Core Technique
- **Assess ambiguity** using an LLM confidence score or heuristic detection logic.
- If confidence < threshold, **trigger a clarification prompt** that:
  - States what was understood.
  - Pinpoints the ambiguous part.
  - Offers concrete options when available.

### Best Practices
- Provide **specific options** (from known intents/entities) rather than vague “please clarify.”
- **Echo the understood portion** so the user can simply confirm or correct.
- Keep questions **single-step** and **answerable in one reply**.
- Log the **confidence score/reason** to improve future disambiguation.

### Example Prompt (Pattern)
**User Query**  
`"Run the report."`

**System Analysis**  
Ambiguous input. Confidence score: **2/10**. Known reports: `sales`, `engagement`, `performance`.

**Clarification Agent – System Prompt**

The user's request is ambiguous.
Ask for clarification in a helpful, direct way.
Known report types: 'sales', 'engagement', 'performance'.


**Final Response to User**  
“I can run a report for you, but I need a bit more information. Are you looking for the **sales**, **engagement**, or **performance** report?”

## DEVELOPER NOTES

### Compatible Modes
- Interactive recovery, routing/orchestration layers, customer support assistants, internal tooling UIs.

### Common Uses
- Disambiguating request type (report name, environment, date range).
- Clarifying missing parameters (file, ID, timeframe, format).
- Guarding against incorrect assumptions in low-confidence states.

### Notes
- Define a **confidence threshold** (e.g., ≤ 0.4) that triggers clarification.
- Where possible, surface **top-3 candidate intents** as options.
- If the domain allows, provide a **default** only after asking once and receiving no answer (with an explicit “defaulting to X” notice).
- Consider accessibility: keep questions short, avoid jargon, and support numbered options for quick replies.
