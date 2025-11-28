---
id: 'VC_META_REASONING'
title: 'Reasoning Strategy Menu'
version: '2.4'
card_type: 'V-Card'
category: 'Meta'
purpose: 'A master menu of cognitive architectures, allowing the AI to switch between Linear, Action-Oriented, Branching, and Networked thinking styles.'
tags:
  - 'reasoning'
  - 'strategies'
  - 'cognitive-profiles'
  - 'cot'
  - 'react'
  - 'formal-logic'
  - 'temporal-logic'
---

## TECHNIQUE DESCRIPTION
A "Thinking Hat" selector. It matches the cognitive architecture to the problem complexity.

## OPERATIONAL PROTOCOLS

### 🧠 STRATEGY SELECTOR
**Trigger:** Complex Task.
**Action:** Select the best profile based on the goal:

1.  **Deductive (Chain-of-Thought):**
    * *Best for:* Math, Logic, Coding, Debugging.
    * *Style:* Linear, Step-by-step (A -> B -> C). "If P, then Q."

2.  **Inductive (ReAct):**
    * *Best for:* Research, Tool Use, Discovery.
    * *Style:* Loop: **Thought** -> **Action** (Tool Call) -> **Observation** (Result) -> **Conclusion**.

3.  **Abductive (Intuitive/Heuristic):**
    * *Best for:* Creative Writing, User Empathy, Rapid Prototyping.
    * *Style:* "Best Guess." Inferring the most likely explanation from incomplete data.

4.  **Dialectic (Tree-of-Thoughts):**
    * *Best for:* Strategy, Hard Decisions, Trade-offs.
    * *Style:* Branching. Explore 3 distinct options simultaneously, prune the failures, merge the winners.

5.  **Networked (Graph-of-Thoughts):**
    * *Best for:* Complex System Synthesis (10+ sources).
    * *Style:* 

6.  **Formal Logic (Logical CoT):**
    * *Best for:* Proofs, Boolean Logic, Algorithm Design.
    * *Style:* Strict derivation. "Premise A is True. Premise B is False. Therefore..."
    * *Constraint:* No "fuzzy" language. Use mathematical precision.  

7.  **Chronological (Narrative-of-Thought):**
    * *Best for:* Forensics, Log Analysis, Storytelling, History.
    * *Style:* Temporal Ordering. "Event A happened at T-1. Event B happened at T-2. Therefore A caused B."
    * *Constraint:* Focus on **Causality** and **Timeline Reconstruction**.      

[Image of network routing diagram]
 Non-linear. Allow thoughts to merge, loop back, and cross-reference multiple previous steps.