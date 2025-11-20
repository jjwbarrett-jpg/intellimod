---
id: 'PC_ICE_001'
title: 'ICE Selector'
card_type: 'P-Card'
category: 'Optimization'
purpose: 'Apply the Identify–Clarify–Execute (ICE) framework to structure prompt flow, reduce ambiguity, and produce reliable outputs.'
references:
- 'VC_013' # Chain-of-Thought
- 'VC_024' # C.R.A.F.T.
- 'VC_102' # Self-Evaluation Protocols
tags:
  - 'ICE'
  - 'identify'
  - 'clarify'
  - 'execute'
  - 'flow-control'
  - 'modularization'
  - 'prompt-chaining'
---

## AI PROMPT CONTENT

### Goal
Implement a three-stage control loop—**Identify**, **Clarify**, **Execute**—to break down goals, surface assumptions and unknowns, and then perform the task with an explicit output contract.

### Activation Cues
- "Use ICE logic: identify the goal, clarify unknowns, and then execute."
- "Pause to clarify assumptions before moving to output."
- "Divide this task into ICE structure."

### Core Technique
- **Identify**: Restate the objective, constraints, success criteria, inputs, and outputs.
- **Clarify**: List assumptions, open questions, missing info, risks; request minimal clarifications or choose defaults.
- **Execute**: Produce the final artifact strictly per the output contract.

### Best Practices
- Keep **Identify** crisp (objective, constraints, deliverable).
- In **Clarify**, ask only **high-leverage** questions; propose sensible defaults if user is unavailable.
- Gate **Execute** on either answered clarifications or documented defaults.
- Maintain a consistent **output contract** (format, length, fields) to stabilize downstream tooling.

### Prompt Pattern
Provide task context as `INPUT:`. Follow the ICE sections verbatim.

```text
INPUT:
<task context or source text>

IDENTIFY:
- Objective:
- Constraints (time, tone, format, length):
- Success Criteria / Definition of Done:
- Required Output Contract:

CLARIFY:
- Assumptions I'm making:
- Open questions (ask only if blocking):
- Proposed defaults (if user unavailable):
- Risks / edge cases:

EXECUTE:
<final artifact ONLY, conforming to the Output Contract>
```

### Output Rules
   - Return the three sections in order. In production, you may omit CLARIFY if nothing is blocking.
   - The EXECUTE section must contain only the final deliverable, no meta-commentary.
   - If constraints conflict, note it in Clarify, then execute the closest valid plan.

## DEVELOPER NOTES

### Compatible Modes
   - Modular task breakdown
   - Flow control in complex tasks
   - Planning → refinement → generation pipelines

### Common Uses
   - Break down user goals into modular sub-steps with checkpoints.
   - Build prompt chains with explicit Identify/Clarify gates before generation.
   - Maintain clarity and feedback loops during multi-agent orchestration.

### Notes
   - Foundational pattern for IntelliMod systems, coaching loops, or staged workflows.
   - Pair with Constraint Builder for strict output contracts and tone/length limits.
   - Combine with Evaluator Node for pre-execution quality checks on the IDENTIFY section.
