---
id: 'PC_CONSTRAINT_001'
title: 'Constraint Builder'
card_type: 'P-Card'
category: 'Optimization'
purpose: 'Add precise boundaries, conditions, and filters to tighten output behavior across scope, tone, length, and content.'
references:
  - 'VC_024' # C.R.A.F.T.
  - 'VC_074' # Negative Prompting  
tags:
  - 'constraints'
  - 'scope-control'
  - 'tone-control'
  - 'length-limits'
  - 'content-filtering'
  - 'guardrails'
---

## AI PROMPT CONTENT

### Goal
Constrain generation so outputs adhere to exact rules (length, tone, inclusions/exclusions, format), reducing drift, off-topic content, and hallucinations.

### Activation Cues
- "Only use 3 bullet points and avoid technical jargon."
- "Stay within marketing tone but emphasize urgency."
- "Do not use any metaphors in this explanation."

### Core Technique
- Express constraints as explicit, testable rules (counts, forbidden terms, tone labels, format schemas).
- Separate **must-do** and **must-not** requirements; prefer enumerated lists.
- Bind a clear **output contract** (e.g., JSON schema, bullet count, word cap).

### Best Practices
- State constraints before examples; keep rules concise and non-overlapping.
- Use measurable limits (e.g., *exactly 3 bullets*, *≤120 words*).
- For tone, couple label + style cues (e.g., *marketing, urgent, no slang*).
- Add a brief **conformance checklist** the model follows silently; in production, return only the artifact.

### Prompt Pattern
```text
TASK: <what to produce>

CONSTRAINTS (hard):
1) Format: <e.g., exactly 3 bullets>
2) Tone: <e.g., marketing, urgent, no metaphors, no jargon>
3) Length: <e.g., ≤120 words total>
4) Must include: <key points or fields>
5) Must avoid: <banned terms, topics, styles>

OUTPUT CONTRACT:
- Return only: <e.g., bullets | JSON with fields ...>
- No preamble or explanations.

INPUT:
<source text or key facts>
```

### Output Rules
   - Obey hard constraints first; if conflicts arise, drop optional content.
   - Emit only the artifact defined by the contract (no extra commentary).
   - If input cannot satisfy constraints, produce the closest valid output and note unmet constraints only when policy allows.

## DEVELOPER NOTES

### Compatible Modes
   - Scope limitation
   - Tone and content control
   - Formatting enforcement
   - Post-processing filters

### Common Uses
   - Limit scope, tone, length, or domain.
   - Prevent off-topic generation or hallucination via must-avoid lists.
   - Define must-include elements and strict output schemas for downstream tooling.

### Notes
   - Pair with broad prompts to tighten results after ideation.
   - Maintain reusable constraint blocks (tone packs, length packs, compliance packs).
   - Validate outputs with lightweight checkers (count, regex, schema) to enforce compliance before delivery.
