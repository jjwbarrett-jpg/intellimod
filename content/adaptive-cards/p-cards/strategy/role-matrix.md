---
id: 'PC_ROLE_MATRIX_001'
title: 'Role Matrix'
card_type: 'P-Card'
category: 'Strategy'
purpose: 'Assign explicit roles, perspectives, or archetypes to guide multi-viewpoint reasoning and council-style decisions.'
references:
  - 'VC_013' # Chain-of-Thought
  - 'VC_015' # Cognitive Scaffolding
  - 'SC_04' # I.C.E. Logic
tags:
  - 'role-assignment'
  - 'perspective-switching'
  - 'multi-viewpoint'
  - 'council-deliberation'
  - 'decision-making'
---

## AI PROMPT CONTENT

### Goal
Structure responses through **explicit roles** (e.g., Risk Analyst, Visionary Founder, Ops Lead) to surface tradeoffs, reveal blind spots, and enable **council-style** synthesis and decisions.

### Activation Cues
- "Respond as if you're a risk analyst and a visionary founder."
- "What would each of these 3 experts say about this?"
- "Switch roles as needed to explore multiple angles."

### Core Technique
- Define a **Role Matrix**: a list of roles, each with **goal**, **method**, and **constraints**.
- Generate **role-scoped outputs** first, then produce a **synthesis** that reconciles disagreements and proposes a decision with rationale.
- Keep roles **orthogonal** (distinct remit) to avoid overlap and muddled advice.

### Best Practices
- Limit to **3–5 roles** per pass for clarity and speed.
- Give each role a **clear objective** and **evaluation lens** (risk, upside, feasibility, ethics).
- Require a final **Decision & Rationale** that cites which roles influenced which parts.
- When roles conflict, present a **tradeoff table** and a **recommended path** with assumptions.

### Prompt Pattern
Provide the problem as `BRIEF:` and optional constraints as `CONSTRAINTS:`. Return the following sections:

- **Roles Defined** (name, mandate, success criteria)
- **Role Outputs** (one subsection per role)
- **Points of Agreement / Disagreement**
- **Tradeoff Table** (criteria × roles)
- **Decision & Rationale**
- **Next Steps & Owners**

**Example (Sketch)**
```text
BRIEF: Launch a paid newsletter for developers in 90 days.
ROLES:
  - Risk Analyst: minimize downside, budget guardrails.
  - Visionary Founder: maximize differentiation and long-term moat.
  - Ops Lead: execution plan, staffing, metrics.
CONSTRAINTS: budget $5k; 2-person team.

OUTPUT CONTRACT:
## Roles Defined
## Role Outputs
### Risk Analyst
### Visionary Founder
### Ops Lead
## Points of Agreement / Disagreement
## Tradeoff Table
## Decision & Rationale
## Next Steps & Owners
```

### Output Rules
   - Use separate subsections per role; avoid mixing voices.
   - Cite assumptions for each role; flag unknowns.
   - Conclude with a single recommended decision (or options ranked) and owner assignments.

## DEVELOPER NOTES

### Compatible Modes
   - Multi-perspective guidance
   - Role-based decision making
   - Planning & evaluation

### Common Uses
   - Guide outputs via character/job/system perspectives.
   - Run expert-council analyses in product strategy, security reviews, policy design.
   - Explore tradeoffs across risk, cost, speed, and differentiation.

### Notes
   - Pairs well with Council System and Dialogue Lab modules.
   - For large councils, chunk roles into waves and carry forward only the highest-signal viewpoints.
   - Maintain a role library with reusable mandates to keep analyses consistent across sessions.
