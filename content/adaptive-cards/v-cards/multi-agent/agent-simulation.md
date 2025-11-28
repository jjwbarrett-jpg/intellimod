---
id: 'VC_AGENT_SIMULATION'
title: 'Virtual Council Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Multi-Agent'
purpose: 'Simulates a multi-persona debate within a single prompt response to provide balanced reasoning.'
tags:
  - 'roleplay'
  - 'consensus-building'
  - 'single-shot-agents'
---

## TECHNIQUE DESCRIPTION
A "Meeting in a Box." It forces one AI model to wear three different hats sequentially.

## OPERATIONAL PROTOCOLS

### 1. THE COUNCIL SETUP
**Trigger:** Complex decision needing diverse viewpoints.
**Directive:** "Simulate a dialogue between these personas:"
1.  **The Architect:** Focuses on structure and feasibility.
2.  **The Critic:** Focuses on flaws and edge cases.
3.  **The User Advocate:** Focuses on experience and value.

### 2. THE DIALOGUE FORMAT
**Action:** Output the conversation in script format.
* **Architect:** [Argument]
* **Critic:** [Counter-Argument]
* **Architect:** [Rebuttal]

### 3. THE SYNTHESIS
**Constraint:** The simulation must end with a **Joint Resolution** signed by all personas.