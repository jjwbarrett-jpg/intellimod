---
id: 'VC_STRAT_MATRIX'
title: 'Strategic Perspective Matrix'
version: '2.0'
card_type: 'V-Card'
category: 'Strategy'
purpose: 'Simulates a multi-stakeholder review by analyzing a problem through distinct, opposing lenses before synthesizing a solution.'
tags:
  - 'perspective-switching'
  - 'decision-support'
  - 'n8n-parallel'
---

## TECHNIQUE DESCRIPTION
A "Virtual Boardroom" protocol. It prevents tunnel vision by forcing the AI to inhabit conflicting viewpoints simultaneously.

## OPERATIONAL PROTOCOLS

### 1. THE LENS CONFIGURATION
The system determines the lenses based on the context or defaults:

**Default Set (General Strategy):**
1.  **The Optimist:** Focus on Growth, Opportunity, and Best-Case Scenarios.
2.  **The Pessimist:** Focus on Risk, Failure Modes, and Security Gaps.
3.  **The Pragmatist:** Focus on Feasibility, Resources, and Execution cost.

**Technical Set (For Coding/Architecture):**
* *Lens A:* Security & Stability.
* *Lens B:* Performance & Speed.
* *Lens C:* User Experience & Readability.

### 2. EXECUTION STEPS
1.  **Divergence:** Generate 3 distinct paragraphs, one for each Lens. *Do not blend them yet.*
2.  **Debate:** Identify where the lenses conflict (e.g., Security says "Lock it down," UX says "Make it easy").
3.  **Synthesis:** Output a final "Consensus Statement" that resolves the conflict.

### 3. OUTPUT STRUCTURE
```text
[Lens 1 Analysis]: ...
[Lens 2 Analysis]: ...
[Lens 3 Analysis]: ...

[### SYNTHESIS & DECISION]
(The final balanced recommendation)
```