---
id: 'VC_024'
title: 'C.R.A.F.T.'
card_type: 'V-Card'
purpose: 'Refine prompts by structuring Context, Role, Action, Format, and Target Audience to reduce ambiguity and improve precision.'
tags:
- 'prompt-engineering'
- 'refinement'
- 'meta-prompting'
- 'structure'
- 'intent'
---

## AI PROMPT CONTENT

### Short Definition
CRAFT is a structured prompt refinement method built around five elements: Context, Role, Action, Format, and Target Audience. It guides users to clarify and optimize intent before generating prompts, reducing ambiguity and improving outcome precision.

### Domain Focus
   - **Primary field(s):** Prompt Engineering Techniques
   - **Subdomains (optional):** Prompt design, meta-prompting, user intent translation

### Use Case Triggers
   - **Triggers:** ["refine this prompt", "make the prompt clearer", "who is the prompt for?"]

### Related scenarios:
   - Teaching prompt writing to beginners
   - Clarifying vague or overloaded prompts
   - Rewriting failed or low-quality outputs with intention

### Key Associations
   - **Keywords:** prompt refining, CRAFT framework, meta-prompting, structural decomposition
   - **Related concepts:** ICE Logic, Prompt Evaluator, Instruction Design, Role Assignment

### Typical AI Biases
   - May assume too rigid a structure if overused
   - Can delay fast iteration if misunderstood
   - Requires accurate user input to be effective

### Optional Metadata
   - **Recommended P-Cards:** [Prompt Evaluator, Intent Clarifier, Output Optimizer]
   - **Tier Activation:** 2 (suggested during prompt editing), 3 (editable by power users)
   - **Notes:** Works especially well with Generate → Evaluate → Refine workflows; a staple of IntelliMod’s Step 3 logic.

### CRAFT Skeleton
   - **Context:** {essential background, constraints, prior steps}
   - **Role:** {who the AI is and its scope/voice}
   - **Action:** {the specific task to perform}
   - **Format:** {desired structure, length, sections, style}
   - **Target Audience:** {who will read/use the output and their needs}

### Prompt Fragment Example
    "Using CRAFT, specify Context, Role, Action, Format, and Target Audience. Then produce the output. If any element is missing, ask one clarifying question before proceeding."