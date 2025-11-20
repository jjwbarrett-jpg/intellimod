---
id: 'SC_01'
title: 'Adaptive Card Router (ACR)'
card_type: 'S-Card'
purpose: 'Dynamically route detected prompt issues or intents to the appropriate enhancement cards and logic modules to refine prompts across tiers.'
tags:
- 'adaptive-routing'
- 'triggers'
- 'prompt-refinement'
- 'tier-logic'
- 'card-chaining'
- 'craft-ice'
---

## AI PROMPT CONTENT

### Modular Card Trigger Map
**Overview:** Route prompt patterns, gaps, or user intents to enhancement cards or logic modules so the system (e.g., Modular Prompt Engineer / IntelliMod) adaptively refines prompts across tiers.

### Trigger-to-Card Map
   - **Trigger:** Missing format directive
    **Detected From:** ICE Logic (Step 3)
    **Route:** CRAFT, Format Calibrator (V) — define structure (list, table, etc.).
   - **Trigger:** Vague or weak instruction
    **Detected From:** ICE, Step 1
    **Route:** Instruction Sharpener (V), Aligner (P) — tighten task phrasing.
   - **Trigger:** Conflicting instructions
    **Detected From:** IntelliMod Step 1, Refine
    **Route:** Contradiction Finder (P), CRAFT, Mirror Layer (P) — detect and resolve contradictions.
   - **Trigger:** Emotional engagement needed
    **Detected From:** User tweak, tone issue
    **Route:** Amplifier (P), Emotion Prompting (V) — adjust affective tone.
   - **Trigger:** Chain logic required
    **Detected From:** User selects stepwise/logic mode
    **Route:** Chain-of-Thought (V), Logic Ladder (P), CRAFT — enforce sequential reasoning.
   - **Trigger:** Prompt loses structure in long flow
    **Detected From:** Output drift or token overflow
    **Route:** Anchor Point (P), Recall Assistant (P) — reinforce or rehydrate intent.
   - **Trigger:** Role missing or unclear
    **Detected From:** Step 1 / ICE
    **Route:** Persona Prompting (V), CRAFT, System Prompt (V) — apply stable identity.
   - **Trigger:** Repetitive / verbose input
    **Detected From:** ICE, Refine phase
    **Route:** Condenser (P), Abbreviator (P) — reduce token noise.
   - **Trigger:** High stakes or precision domain
    **Detected From:** Step 1 + 3
    **Route:** Precision Engine (P), Constraint Builder (P) — tighten control prompts.
   - **Trigger:** Uncertain user intent
    **Detected From:** Step 0–1 / ICE
    **Route:** Mirror Layer (P), Evaluator Node (P) — reflect and clarify intent.

### Tier Logic (Default Behavior)
   - **Tier 1 (Default):** Apply silently if a high-confidence trigger is detected.
   - **Tier 2:** Offer visible card options with explanation.
   - **Tier 3:** Allow full manual selection and override.

### Integration Points
   - **Linked to:** ICE & CRAFT logic.
   - **Used by:** IntelliMod Steps 2 & 3.
   - **Note:** Adaptive Specialist Trigger may consult this router to simulate agent-level card chaining.

### Planned Expansions
   - **Symbolic activation tags:** reasoning, emotion, format.
   - Multi-card routing trees.
   - **Project-specific card stacks:** storytelling, legal, branding.
   - **Feedback-loop learning:** refine from past activations.