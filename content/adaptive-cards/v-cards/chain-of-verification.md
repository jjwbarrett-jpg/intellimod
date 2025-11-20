---
id: 'VC_014'
title: 'Chain-of-Verification'
card_type: 'V-Card'
purpose: 'Guide the model to fact-check its own outputs by generating verification questions, answering them, and revising before finalizing.'
tags:
- 'factual-accuracy'
- 'self-checking'
- 'verification'
- 'hallucination-mitigation'
- 'rag'
---

## AI PROMPT CONTENT

### Category
Factual Accuracy

### Core Function
Guides the AI to fact-check its own answers step by step before finalizing them.

### Definition
   - Chain-of-Verification prompts require the model to:
   - Generate an initial answer.
   - Create fact-checking questions.
   - Answer those questions.
   - Revise the original output accordingly.
   - This layered verification improves truthfulness and reliability.

### Example

**Prompt:**
"Answer this question, then generate 3 verification questions about your answer. Answer each one and revise your original if needed."

### Trigger Phrases
   - "Verify each part of your answer with questions."
   - "Self-check before finalizing."
   - "Fact-check yourself in 3 steps."
   - "What would a critic ask about your answer?"

### Related Concepts
   - Hallucination Mitigation
   - Retrieval-Augmented Generation
   - ReAct Prompting
   - Self-Consistency

### Use Cases
   - High-stakes factual domains (medical, legal, science)
   - Long-form generation with references
   - Reliable automated reporting
   - AI assistant models with built-in audit layers
