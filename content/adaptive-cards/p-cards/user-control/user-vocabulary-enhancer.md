---
id: 'PC_UVE_001'
title: 'User Vocabulary Enhancer'
card_type: 'P-Card'
category: 'User Control'
purpose: 'Provide a quick reference that helps users craft clear, specific, and effective prompts by improving phrasing, structure, and constraints.'
references: []
tags:
  - 'prompt-engineering'
  - 'vocabulary'
  - 'clarity'
  - 'constraints'
  - 'output-format'
  - 'user-education'
---

## AI PROMPT CONTENT

### Goal
Offer foundational principles and concrete phrasing guides so users can specify intent, format, and constraints clearly—leading to more accurate and useful AI outputs.

### Best Practices for Prompt Creation

- **Be Specific**  
  General prompts yield general results. Add details about topic, style, tone, length, and format whenever possible.  
  **Example:** Instead of "Tell me about AI," use "Summarize the top three benefits of AI for healthcare in bullet points."

- **State Desired Output Format**  
  Clarify how you want the response (list, table, narrative, Q&A, concise summary).  
  **Example:** "Write as a step-by-step guide in less than 100 words."

- **Provide Context (if relevant)**  
  If the task depends on background info, give it up front.  
  **Example:** "Assume the reader is new to the topic."

- **Use Constraints**  
  Set limits on length, style, or complexity to control verbosity or tone.  
  **Example:** "Explain in simple language for a 10-year-old."

- **Iterate and Refine**  
  Prompts do not have to be perfect on the first try—adjust wording, details, or constraints based on results.

### Common Prompt Pitfalls to Avoid

- **Vague requests:** "Tell me about X" results in broad, generic output.  
- **Overloaded instructions:** Too many conflicting requests confuse the AI.  
- **Missing format:** Not stating desired structure often leads to default paragraphs.

### Notes
This is a User-Facing Prompt Card that can be offered in the Refine Prompt Module or as a suggested read when users are stuck.  
Works for all prompt types: text, image, video, voice.

## DEVELOPER NOTES

### Compatible Modes
- Refine Prompt Module
- Onboarding/help panels
- Inline prompt hints

### Common Uses
- Provide phrasing tips near input fields to increase clarity and reduce retries.
- Offer as a pre-flight checklist before running long/expensive tasks.
- Surface when the system detects vague or conflicting instructions.

### Notes
- Keep examples concise and domain-agnostic.
- Pair with **Evaluator Node** to rate clarity and suggest minimal refinements.
- For multimodal prompts, adapt examples to specify modality and format explicitly.
