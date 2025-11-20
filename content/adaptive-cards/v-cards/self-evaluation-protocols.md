---
id: 'VC_102'
title: 'Self-Evaluation Protocols'
card_type: 'V-Card'
purpose: 'Embed internal checks that make the model assess and revise its own output before delivery to improve reliability, factuality, and coherence.'
tags:
- 'self-evaluation'
- 'introspective-reasoning'
- 'validation'
- 'confidence-scoring'
- 'hallucination-detection'
---

## AI PROMPT CONTENT

### Category
**Reasoning & Cognitive Frameworks — Type:** Functional Strategy

**Related Concepts:** Introspective Reasoning, Recursive Validation, Autonomous QA

### Summary
Self-Evaluation Protocols are internal checks embedded in prompts that make the model assess its own output before showing it to the user. They improve reliability, factuality, and coherence.

### Key Functions
   - Check whether the response satisfies the original request.
   - Add a second pass such as “double-check your reasoning” or “review for accuracy.”
   - Optionally chain with hallucination detection or confidence scoring.

### Why It Matters
In safety-critical or high-stakes work, unverified outputs can mislead decisions. Self-evaluation increases trust by adding an internal validation cycle, especially in autonomous or semi-autonomous workflows.

### Implementation Tips
   - Use explicit reflection prompts: “Do you believe this response is logically valid?”
   - Add structured scoring or justification: “Rate completeness and coherence from 1–10.”
   - Combine with multi-agent review or external fact-checking for extra robustness.

### Experimental Use
    Can be layered in recursive prompting loops or paired with RAG pipelines to perform factual cross-checks after generation.

### Example Prompt
    Respond to the user query. Then, before finalizing your output, perform a self-evaluation to ensure logical coherence and factual alignment. Flag any uncertain statements.