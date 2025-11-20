---
id: 'PC_EVAL_001'
title: 'Evaluator Node'
card_type: 'P-Card'
category: 'Meta'
purpose: 'Assess a prompt’s clarity, risks, and fitness before execution, and recommend targeted refinements without changing the core intent.'
references:
- 'VC_015' # Cognitive Scaffolding
- 'VC_024' # C.R.A.F.T.  
- 'VC_074' # Negative Prompting
tags:
  - 'evaluation'
  - 'prompt-quality'
  - 'diagnostics'
  - 'clarity'
  - 'risk-analysis'
---

## AI PROMPT CONTENT

### Goal
Assess the strength, clarity, intent alignment, and potential failure modes of a prompt **before** execution, then suggest precise improvements while preserving the original goal.

### Activation Cues
- "Evaluate this prompt before I run it."
- "Where might this fail or be misunderstood?"
- "Rate this on a scale of 1–10 for clarity and purpose."

### Core Technique
- Run a pre-execution review that scores **clarity**, **scope fit**, and **risk**.
- Identify ambiguities, missing constraints, and likely misinterpretations.
- Propose **minimal, surgical** edits (wording, constraints, formats) that keep the prompt’s core intent intact.

### Best Practices
- Keep critiques **specific and actionable** (point to exact phrases or omissions).
- Separate **diagnosis** from **recommendations**; present both.
- Avoid changing user intent; suggest parameterization (e.g., audience, format, length) rather than rewriting goals.
- When uncertainty is high, recommend a **clarifying question**.

### Prompt Pattern
Provide the prompt to evaluate as `PROMPT:`.

Return only the following Markdown sections:

- **Clarity Score (1–10)**
- **Strengths**
- **Risks & Ambiguities**
- **Recommended Refinements** (bullet list; minimal edits)
- **Optional Clarifying Questions** (only if needed)

### Example Use
**PROMPT:** “Summarize my report.”

**Expected Evaluation Output (Sketch):**
- **Clarity Score (1–10):** 4
- **Strengths:** concise request
- **Risks & Ambiguities:** no target length, audience, or file reference
- **Recommended Refinements:**
  - Specify document identifier or attach text.
  - Define audience (e.g., exec, technical).
  - Set output format and length (e.g., 5 bullets, <120 words).
- **Optional Clarifying Questions:**
  - Which report (filename or link)?
  - Who is the audience?
  - Preferred format (bullets, abstract, JSON)?

## DEVELOPER NOTES

### Compatible Modes
- Pre-run diagnostics
- Quality assurance
- Planning & prompt refinement

### Common Uses
- Pre-run checks on user prompts for **clarity**, **intent alignment**, and **scope fit**.
- Risk surfacing (ambiguous terms, missing constraints, unsafe assumptions).
- Suggesting targeted edits and structured **output contracts** (e.g., JSON, bullets).

### Notes
- Can be automated in orchestration workflows or invoked manually during authoring.
- Useful for teaching prompt refinement and maintaining quality standards across teams.
- Pair with confidence scoring for gates (e.g., execute only if **Clarity ≥ 7**).
