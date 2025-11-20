---
id: 'PC_LONG_GAME_001'
title: 'Long-Game Builder'
card_type: 'P-Card'
category: 'Strategy'
purpose: 'Design multi-phase strategies with timelines, milestones, and checkpoints that align near-term actions to long-term goals.'
references:
  - 'VC_013' # Chain-of-Thought
  - 'VC_015' # Cognitive Scaffolding
  - 'VC_024' # C.R.A.F.T.
tags:
  - 'multi-phase'
  - 'planning'
  - 'milestones'
  - 'roadmap'
  - 'long-term'
---

## AI PROMPT CONTENT

### Goal
Develop a structured, multi-phase plan (e.g., 3–6 stages) with clear objectives, timelines, deliverables, and decision checkpoints that maintain long-term alignment.

### Activation Cues
- "Lay out a 4-stage rollout plan with timelines."
- "Build a 6-month content strategy from this."
- "What's the long-term structure behind this system?"

### Core Technique
- Convert a single objective into a **phase-based roadmap** with:
  - **Objectives** (what to achieve),
  - **Deliverables** (what to produce),
  - **Dependencies** (what must precede),
  - **Metrics/OKRs** (how to measure),
  - **Risks & Mitigations** (how to protect),
  - **Checkpoints/Exit Criteria** (when to advance).
- Use progressive elaboration: later phases have broader estimates, refined as earlier phases complete.

### Best Practices
- Anchor each phase to **timeboxes** and **entry/exit criteria**.
- Keep **scope creep** in check via explicit out-of-scope notes per phase.
- Include **feedback loops** (retrospectives) and **go/no-go gates**.
- Define **leading indicators** (early signals) and **lagging metrics** (outcomes).

### Prompt Pattern
Provide the seed goal or brief as `BRIEF:` and any constraints as `CONSTRAINTS:`. Return the following sections:

- **Overview & Assumptions**
- **Phase Plan** (Phase 1…N with Objectives, Deliverables, Timeline, Dependencies)
- **Milestones & Checkpoints**
- **Resourcing & Roles** (who does what; tools)
- **Risks & Mitigations**
- **Metrics & Review Cadence**
- **Roadmap Visualization (ASCII/Markdown)** (optional schematic timeline)

### Output Rules
- Use **concise bullets**; ensure each phase has **Objective**, **Deliverables**, **Timeline**, **Exit Criteria**.
- Include at least one **checkpoint** per phase and a cross-phase **risk** with mitigation.
- If details are missing, state **assumptions** and propose a **clarification list**.

## DEVELOPER NOTES

### Compatible Modes
- Campaign design
- Timeline tracking
- Program/portfolio planning

### Common Uses
- Design campaigns, product rollouts, or sequential builds.
- Track development stages and milestones across quarters.
- Align prompt outputs and agent actions with **long-term objectives**.

### Notes
- Complements **ICE** logic and systems-thinking workflows; ideal for multi-session coordination.
- Pair with **Counterplanner** for red-teaming each phase before advancing.
- Consider **versioned roadmaps** (v1/v2) and a **change log** to document adjustments over time.
