---
id: 'PC_CF_001'
title: 'Contradiction Finder'
card_type: 'P-Card'
category: 'Logic'
purpose: 'Identify logical inconsistencies, conflicting instructions, and hidden contradictions in a prompt before execution.'
references:
  - 'VC_013' # Chain-of-Thought
  - 'VC_024' # C.R.A.F.T.
  - 'VC_074' # Negative Prompting
tags:
  - 'contradiction'
  - 'consistency'
  - 'validation'
  - 'prompt-debugging'
  - 'clarification'
---

## AI PROMPT CONTENT

### Goal
Detect and report contradictions, ambiguities, and self-defeating directives within a prompt so they can be resolved prior to execution.

### Core Technique
- **Decompose instructions** into atomic assertions and constraints.
- **Normalize** wording (negations, scopes, roles) to a comparable form.
- **Check conflicts** pairwise and across groups (e.g., format vs. style vs. policy).
- **Flag ambiguities** (undefined terms, double requirements, overlapped scopes).
- **Propose resolutions**: restatements, precedence rules, or targeted clarifying questions.

### Best Practices
- Prefer **minimal edits** that preserve user intent.
- Separate **hard conflicts** (cannot both be true) from **soft tensions** (likely incompatible under constraints).
- Apply a **precedence order** if available (e.g., safety > policy > format > style).
- When uncertain, **ask for clarification** with specific, closed questions.

### Prompt Pattern (Use in meta-check phase)
**Activation cues** (any of):
- “Highlight any instructions that contradict each other.”
- “Point out ambiguous or self-defeating elements.”
- “Is there a logic flaw in this setup?”

**Sample modifiers**:
- “Logical consistency check”
- “Conflict resolution”
- “Clarify directives”

**Meta-prompt skeleton**:
```text
You are a contradiction and ambiguity auditor.
Given PROMPT_TEXT, list:
1) Contradictions (pairs or sets of directives that cannot both be satisfied),
2) Ambiguities (unclear or underspecified terms),
3) Tensions (likely incompatible preferences),
4) Proposed resolutions (minimal restatements or precedence choices),
5) Clarifying questions (numbered, closed-ended).
Output JSON only.
```

### Output Rules

Return only JSON with keys:
```json
{
  "contradictions": [
    {
      "items": ["directive_a", "directive_b"],
      "why": "mutually exclusive conditions",
      "proposed_resolution": "choose A over B due to format precedence"
    }
  ],
  "ambiguities": [
    { "item": "undefined term 'concise'", "question": "Max words?" }
  ],
  "tensions": [
    { "items": ["explain fully", "return only JSON"], "note": "style vs. format" }
  ],
  "clarifying_questions": [
    "Should the response include explanations, or strictly JSON only?"
  ]
}
```

## DEVELOPER NOTES

### Compatible Modes
   - debugging prompts, precision-critical systems, specification review, policy/format validation.

## Common Uses
   - When output appears confused or conflicted.
   - Preflight checks for legal, technical, or strategy prompts.
   - Quality-check phase before final execution in multi-agent chains.

### Notes
   - Pair with clarity tools like Aligner or Condenser for follow-up fixes.
   - Store precedence rules centrally (e.g., safety > policy > contract > style).
   - Log detected issues and resolutions to improve future prompt templates.
   