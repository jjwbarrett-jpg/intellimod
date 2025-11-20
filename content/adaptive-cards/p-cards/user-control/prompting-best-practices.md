---
id: 'PC_PROMPT_BP_001'
title: 'Prompting Best Practices'
card_type: 'P-Card'
category: 'User Control'
purpose: 'Provide a compact, user-facing reference for crafting clear, specific, and effective prompts across models and modalities.'
references: []
tags:
  - 'prompt-engineering'
  - 'clarity'
  - 'constraints'
  - 'output-format'
  - 'user-education'
---

## AI PROMPT CONTENT

### Goal
Give users a fast, practical checklist to improve prompt quality—clarity, context, constraints, and output formatting—so results are targeted and reliable.

### Best Practices for Prompt Creation
- **Be Specific**  
  - General prompts yield general results. Add topic, audience, tone, length, and format.  
  - **Example**: Instead of “Tell me about AI,” use “Summarize the top three benefits of AI for healthcare in bullet points.”

- **State Desired Output Format**  
  - Say whether you want a list, table, narrative, Q&A, or concise summary.  
  - **Example**: “Write as a step-by-step guide in fewer than 100 words.”

- **Provide Context (if relevant)**  
  - Include any background that affects the answer.  
  - **Example**: “Assume the reader is new to the topic.”

- **Use Constraints**  
  - Control verbosity, tone, and difficulty with explicit limits.  
  - **Example**: “Explain in simple language for a 10-year-old.”

- **Iterate & Refine**  
  - Adjust wording, details, or constraints based on results. Prompting is iterative.

### Common Prompt Pitfalls to Avoid
- **Vague requests**: “Tell me about X” produces broad, generic output.  
- **Overloaded instructions**: Too many conflicting goals confuse the model.  
- **Missing format**: If you don’t specify structure, you’ll usually get default paragraphs.

### Prompt Pattern (Quick Template)
TASK: <what you want produced>
CONTEXT: <audience, domain, constraints, any background>
FORMAT: <bullets | table | JSON | short narrative | Q&A>
LENGTH/TONE: <word limit, tone/style>
CHECKS: <must include/exclude, cite, avoid jargon, etc.>

## DEVELOPER NOTES

### Compatible Modes
- onboarding/help panels, refine-prompt modules, UI tooltips, education flows, multi-modal prompting (text/image/video/voice).

### Common Uses
- Offer as a **Refine Prompt** helper when users are stuck.
- Provide as a **pre-flight** checklist before running long/expensive tasks.
- Embed as a **sidebar card** next to input fields to encourage better structure.

### Notes
- Keep examples domain-agnostic and succinct; rotate examples per product area (docs, code, research).
- Pair with **Evaluator Node** or **Confidence Scoring & Rationale** to gate execution on clarity.
- Works for all prompt types (text, image, video, voice); adapt the **FORMAT** and **CHECKS** for the specific modality.
