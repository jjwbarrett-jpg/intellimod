---
id: 'PC_LL_001'
title: 'Logic Ladder'
card_type: 'P-Card'
category: 'Logic'
purpose: 'Enforce structured, stepwise reasoning from stated premises through validated steps to defensible conclusions.'
references:
  - 'VC_013' # Chain-of-Thought
  - 'VC_015' # Cognitive Scaffolding
  - 'VC_024' # C.R.A.F.T.
tags:
  - 'reasoning'
  - 'stepwise-validation'
  - 'assumptions'
  - 'logic-analysis'
  - 'argument-evaluation'
---

## AI PROMPT CONTENT

### Goal
Force explicit reasoning by enumerating premises, testing assumptions, validating each inference step, and landing on a conclusion with stated confidence and caveats.

### Core Technique
- **State premises**: List explicit assumptions and given facts.
- **Check assumptions**: Mark each as supported, weak, or unknown.
- **Derive steps**: Number every inference; cite which premises support each step.
- **Test for breaks**: Identify points where the logic could fail or alternative branches appear.
- **Conclude**: Provide a concise result plus confidence and remaining uncertainties.

### Best Practices
- Separate **facts** from **assumptions** and **inferences**.
- Prefer **small, verifiable steps** over large leaps.
- Flag **dependencies** (data needed, conditions).
- Include an **error/edge-case scan** before the conclusion.

### Prompt Pattern (Activation Cues)
Use when the user asks:
- “Walk through the logic from premise to conclusion.”
- “List each step in your reasoning explicitly.”
- “Where might the logic break down?”

**Sample Modifiers**
- “Step-by-step reasoning”
- “Validate assumptions”
- “Identify logical gaps”

**Meta-Prompt Skeleton**
```text
You are a structured-reasoning engine. Given the TASK, respond in sections:
1) Premises (facts vs. assumptions)
2) Step-by-step Reasoning (numbered; cite premises)
3) Breakpoints & Alternatives (where logic could fail or branch)
4) Conclusion (one sentence)
5) Confidence (0–1) and Caveats (bulleted)

Output in Markdown with headings.
```

## Output Rules
   - Use clear headings and a numbered list for reasoning steps.
   - Label each assumption with a support level: strong / weak / unknown.
   - Provide a single-sentence conclusion followed by confidence and caveats.
   - No hidden reasoning beyond what is written.
   
## DEVELOPER NOTES

### Compatible Modes
   - decision-making, technical design, strategy generation, debate prep, risk analysis.

### Common Uses
   - Break down decisions into testable steps.
    -Validate claims and surface faulty logic or missing data.
   - Structure technical trade-off analyses and strategic options.

### Notes
   - Pairs naturally with Chain-of-Thought; keep outputs concise to control cost.
   - Consider a JSON export mode for programmatic auditing of steps and premises.
   - Add unit-style checks where possible (e.g., compute examples, counterexamples).
   