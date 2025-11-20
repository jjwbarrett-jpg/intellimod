---
id: 'VC_119'
title: 'Uncertainty Quantification Prompts'
card_type: 'V-Card'
purpose: 'Guide the model to assess and communicate its confidence, flag weak parts, and explain uncertainty to reduce overconfidence and improve trust.'
tags:
- 'confidence-estimation'
- 'uncertainty'
- 'epistemic-humility'
- 'self-auditing'
- 'verification'
---

## AI PROMPT CONTENT

### Category
Confidence Estimation

### Core Function
Guides the model to assess its own certainty and flag weak or doubtful responses explicitly.

### Definition
This technique prompts the AI to attach confidence levels, express doubt, or identify parts of its response that may be less reliable. It helps reduce overconfidence bias and improves trust in outputs.

### Example

**Prompt:**
Answer this question, but also rate your confidence on a 1–10 scale. If any part feels uncertain, flag it and explain why.

### Trigger Phrases
   - How confident are you in this answer?
   - Highlight areas of uncertainty.
   - Rate your confidence per section.
   - Which part of your answer could be wrong?

### Related Concepts
   - Hallucination Mitigation
   - Self-Evaluation Protocols
   - Chain-of-Verification
   - Reflexive Critique Chains

### Use Cases
   - High-stakes decision support
   - Scientific or legal summarization
   - Self-auditing AI agents
   - Research assistants trained in epistemic humility

### Prompt Fragment
    Provide the answer, then include a confidence rating (1–10) and a brief note on any uncertain sections with reasons for doubt.