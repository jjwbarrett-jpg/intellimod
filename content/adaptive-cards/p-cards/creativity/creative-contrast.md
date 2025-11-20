---
id: 'PC_CRECON_001'
title: 'Creative Contrast'
card_type: 'P-Card'
category: 'Creativity'
purpose: 'Inject opposing perspectives or deliberate tension to surface novel directions and break predictable patterns.'
references:
  - 'VC_013' # Chain-of-Thought
  - 'VC_015' # Cognitive Scaffolding  
  - 'VC_074' # Negative Prompting
tags:
  - 'inversion'
  - 'contrast'
  - 'perspective-shift'
  - 'tension'
  - 'novelty'
  - 'ideation'
---

## AI PROMPT CONTENT

### Goal
Systematically flip assumptions, juxtapose conflicting viewpoints, and combine clashing ideas to generate fresher, less predictable options.

### Activation Cues
- "Flip the core concept on its head."
- "What would the opposite look like?"
- "Combine these clashing ideas and see what emerges."

### Inputs
- **core_concept**: the idea, product, or hypothesis to challenge.
- **axis_of_contrast** (optional): price/luxury, speed/quality, open/closed, human/automated, centralized/decentralized.
- **constraints** (optional): boundaries to keep outputs feasible or compliant.

### Core Technique
- **Inversion**: articulate the opposite of the current approach; ask what must be true for the opposite to succeed.
- **Counterfactuals**: propose "what if X were forbidden/mandatory/instant?" scenarios to force new frames.
- **Antagonistic pairing**: deliberately combine two conflicting concepts and resolve the tension into a workable hybrid.
- **Scaffolded reasoning** (V2): break the contrast into lenses (market, UX, ops, ethics) to avoid shallow flips.
- **Guided logic** (V1): reason step-by-step to trace implications of each inversion.
- **Negative prompting** (V6): exclude cliché "edgy" tropes; avoid pure contrarianism without substance.

### Output Rules
- Produce **2–3 contrasted directions per axis** with one-sentence rationale each.
- Include **1 hybrid** concept that reconciles the most promising opposing elements.
- Label each idea with the **axis** it explores (e.g., *speed vs quality*).
- No extraneous commentary beyond the ideas and brief rationales.

### Example Prompt
**Instruction**: "Generate 8 contrast-driven ideas by flipping our core concept along 3 axes (price/luxury, human/automated, centralized/decentralized). Provide 2–3 ideas per axis and 1 hybrid concept. Exclude clichés."
**Input**: `<core_concept>`

## DEVELOPER NOTES

### Compatible Modes
- Challenging assumptions; inversion sprints; pre-mortem/anti-goal exploration.
- Early discovery and mid-cycle ideation when concepts feel safe or stagnant.

### Common Uses
- Questioning product defaults (e.g., self-serve vs white-glove).
- Stress-testing strategy with opposite-position prototypes.
- Generating novelty through structured conflict and reconciliation.

### Sample Modifiers
- "Contrast perspectives"
- "Opposing views"
- "Conflict-driven innovation"

### Notes
- Pair with **Brainstorm Buddy** for breadth, then converge with **Aligner/Refiner**.
- Encourage at least one **principled contrarian** idea per axis (not contrarian for its own sake).
- Keep a short **viability checklist** (user value, feasibility, differentiation) to quickly triage outputs.
