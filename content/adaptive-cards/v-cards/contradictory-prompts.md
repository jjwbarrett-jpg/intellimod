---
id: 'VC_022'
title: 'Contradictory Prompts'
card_type: 'V-Card'
purpose: 'Detect and resolve conflicting instructions within a prompt to prevent unpredictable, self-contradictory model outputs.'
tags:
- 'instruction-conflict'
- 'ambiguity-detection'
- 'clarity-resolution'
- 'error-handling'
- 'pitfalls'
- 'prompt-linter'
---

## AI PROMPT CONTENT

### Short Definition
Contradictory Prompts occur when instructions within a single prompt conflict with each other, confuse task priorities, or send mixed signals. These contradictions can cause AI responses to behave unpredictably—blending incompatible outputs, prioritizing one part over another, or defaulting to vague answers.

### Domain Focus
   - **Primary field(s):** Pitfalls & Error Handling
   - **Subdomains (optional):** Instruction design, ambiguity detection, clarity resolution

### Use Case Triggers
   - **Triggers:** ["be brief but detailed", "be casual but formal", "list everything concisely"]

### Related scenarios:
   - Overloaded prompts combining conflicting tone, structure, or logic
   - Tasks that give opposing formatting or reasoning instructions
   - Failing outputs that seem confused or self-contradictory

### Key Associations
   - **Keywords:** instruction conflict, prompt confusion, directive paradox
   - **Related concepts:** Vagueness, Overloading, Format Neglect, Prompt Linter

### Typical AI Biases
   - Tends to pick one instruction and ignore the other
   - May average both instructions into a confusing middle ground
   - Rarely flags contradictions unless explicitly told to check for them

### Optional Metadata
   - **Recommended P-Cards:** [Clarity Checker, Prompt Linter, Instruction Prioritizer]
   - **Tier Activation:** 2 (highlighted during evaluation), 3 (visible contradictions editor enabled)
   - **Notes:** A critical failure pattern in user-created prompts. Can be mitigated with ICE, CRAFT, or prompt auditing tools like the Evaluator.