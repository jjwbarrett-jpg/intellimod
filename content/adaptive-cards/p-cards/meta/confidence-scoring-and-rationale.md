---
id: 'PC_CONF_001'
title: 'Confidence Scoring & Rationale'
card_type: 'P-Card'
category: 'Meta'
purpose: 'Require each answer to include a confidence score and brief rationale to improve transparency and enable programmatic trust decisions.'
references: []
tags:
  - 'confidence-score'
  - 'self-critique'
  - 'rationale'
  - 'explainability'
  - 'meta-reasoning'
---

## AI PROMPT CONTENT

### Goal
Provide an answer **and** a compact, machine-readable confidence signal with a short rationale, enabling downstream logic to judge reliability.

### Core Technique
- Modify the instruction to structure output as a JSON object with keys: **answer**, **confidence_score**, and **rationale**.
- Base **confidence_score** on query ambiguity, evidence quality, and alignment with known constraints.

### Best Practices
- Use confidence scores to **trigger fallback/clarification** when below a threshold.
- Treat confidence as an **internal estimate**, not ground truth.
- Keep **rationale** concise (1–3 sentences) and source/assumption focused.

### Prompt Pattern (System + User)
```text
system_prompt: |
  You are an analytical assistant. For any query, respond ONLY with a JSON object:
  {
    "answer": string,
    "confidence_score": integer (1-10),
    "rationale": string
  }
  Base confidence on source quality, clarity of the query, and uncertainty in the domain.

user_query: "Will quantum computing break RSA encryption within the next 5 years?"
```

### Expected Output (Example)
```json
{
  "answer": "While research is advancing, it is unlikely that a fault-tolerant quantum computer capable of breaking RSA will be operational within five years.",
  "confidence_score": 7,
  "rationale": "Reflects current expert consensus and public research timelines, with uncertainty around unforeseen breakthroughs."
}
```

## DEVELOPER NOTES

### Compatible Modes
   - planning, research synthesis, fact-checking, evaluation/QA, retrieval-augmented generation (RAG), decision support.

### Common Uses
   - Gate downstream actions (e.g., auto-send vs. request human review) using a confidence threshold.
   - Trigger clarifying questions when confidence is low or rationale mentions missing data.
   - Provide audit traces: store confidence_score and rationale with outputs for review.

### Notes
   - Define policy thresholds (e.g., ≤5 → ask clarifying follow-up; ≥8 → proceed).
   - In high-stakes domains, require evidence-linked rationales or citations.
   - Normalize score meanings across services to avoid calibration drift; periodically calibrate with labeled eval sets.