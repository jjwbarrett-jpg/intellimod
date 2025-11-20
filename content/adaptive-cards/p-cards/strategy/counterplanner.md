---
id: 'PC_COUNTER_001'
title: 'Counterplanner'
card_type: 'P-Card'
category: 'Strategy'
purpose: 'Generate adversarial/oppositional strategies to stress-test plans and expose weaknesses without changing the original objective.'
references:
  - 'VC_013' # Chain-of-Thought
  - 'VC_074' # Negative Prompting
  - 'VC_102' # Self-Evaluation Protocols
tags:
  - 'adversarial'
  - 'red-teaming'
  - 'stress-testing'
  - 'strategy'
  - 'simulation'
---

## AI PROMPT CONTENT

### Goal
Probe a plan, argument, or prompt by generating **opposition strategies** and **failure paths** that reveal assumptions, weak points, and likely exploits.

### Activation Cues
- "How would an opponent exploit this plan?"
- "Generate a rival strategy that outmaneuvers this."
- "Simulate a failure path to challenge our assumptions."

### Core Technique
- Assume the role of a **capable adversary** or **competing planner** with realistic constraints.
- Produce a **targeted counter-strategy** that exploits specific vulnerabilities (timing, resources, messaging, legal, technical).
- Map **attack vectors → mitigations**, keeping each critique actionable and tied to evidence or mechanism.

### Best Practices
- Stay **fact-pattern grounded**: reference explicit elements of the original plan.
- Separate **diagnosis** (what breaks) from **prescription** (how to harden).
- Include **assumption tests** and **edge cases**; note where uncertainty is high.
- Calibrate severity (low/med/high) and likelihood; avoid generic hand-waving.

### Prompt Pattern
Provide the source plan as `PLAN:` and optional context as `CONTEXT:`. Return the following sections in Markdown:

- **Adversary Model** (capabilities, goals, constraints)
- **Counter-Strategy** (stepwise plan)
- **Failure Paths** (how/where the original plan breaks)
- **Exploit Map** (vulnerability → attack method)
- **Mitigations** (hardening steps ranked by impact/effort)
- **Residual Risks** (what remains after mitigation)

### Output Rules
- Use concise bullets; reference plan elements explicitly.
- For each failure path, include a **mitigation** or clarification request.
- If information is insufficient, state **assumptions** and propose **data to collect**.

## DEVELOPER NOTES

### Compatible Modes
- Stress testing
- Strategy simulation
- Planning & evaluation

### Common Uses
- Stress-test business, product, or policy plans.
- Simulate rival moves, sabotage, or competitive positioning.
- Model “devil’s advocate” critiques to improve robustness.

### Notes
- Pairs well with **Planner** and **Evaluator** roles; run Counterplanner → Evaluator for triage and scoring.
- Useful in business strategy, cybersecurity tabletop exercises, game design, and political modeling.
- Consider running multiple **adversary archetypes** (cost-minimizer, PR spoiler, legal attacker, technical attacker) for coverage.
