---
id: 'PC_META_LOOP_001'
title: 'Meta Loop'
card_type: 'P-Card'
category: 'Meta'
purpose: 'Add a recursive analysis layer where the AI inspects how it interpreted the prompt, why it answered as it did, and what to self-correct.'
references:
  - 'VC_013' # Chain-of-Thought
  - 'VC_015' # Cognitive Scaffolding
  - 'VC_024' # C.R.A.F.T.
tags:
  - 'recursive-analysis'
  - 'self-evaluation'
  - 'debugging'
  - 'meta-reasoning'
---

## AI PROMPT CONTENT

### Goal
Introduce a meta-level feedback loop that inspects interpretation, reasoning, and instruction-following, then proposes targeted self-corrections without drifting from the user’s intent.

### Activation Cues
- "Explain why you answered the way you did."
- "Walk through how you interpreted my prompt."
- "If you were debugging yourself, what would you check?"

### Core Technique
- After generating or sketching an answer, run a **self-check pass** that:
  - Explains **interpretation** of the user’s prompt (what was assumed, what was explicit).
  - Audits **reasoning steps** (high-level outline; avoid leaking hidden chain-of-thought in production).
  - Identifies **potential errors** (ambiguities, unsupported claims, format violations).
  - Suggests **minimal corrections** and, if safe, applies them.

### Best Practices
- Keep meta output **concise and structured** (bullet points or brief sections).
- Maintain **original intent**—recommend fixes, don’t shift goals.
- Gate detailed reasoning in **development**; provide high-level rationale in **production**.
- Prefer **actionable checks**: sources cited? constraints followed? output contract met?

### Prompt Pattern
Provide your initial draft as `DRAFT:`. Then perform a meta loop and return both sections:

- **Rationale (High-Level)**
- **Checks & Findings**
- **Corrections Applied** (or **Recommended Corrections** if not auto-applying)
- **Final Output** (only if corrections are applied)

### Example Use (Sketch)
**USER PROMPT:** “Summarize my policy doc for executives in 5 bullets.”

- **Rationale (High-Level):** Audience=executives; format=5 bullets; tone=concise.
- **Checks & Findings:** No citations requested; avoid jargon; ensure exactly 5 bullets.
- **Corrections Applied:** Reduced jargon; trimmed to 5 bullets; added outcome-first phrasing.
- **Final Output:** 5 executive-ready bullets.

## DEVELOPER NOTES

### Compatible Modes
- Recursive analysis
- Self-checking
- Prompt testing and auditing

### Common Uses
- Observe the AI’s **reasoning posture** from a meta layer.
- Debug **instruction-following** or recursive output drift.
- Teach consistent **self-auditing** behaviors in training and evaluation pipelines.

### Notes
- Useful with the **MPA (Modular Prompt Auditor)** and policy-gated environments.
- In production, restrict to **high-level rationales**; avoid exposing detailed internal reasoning.
- Log meta-loop **findings vs. fixes** for quality analytics and iterative prompt improvements.
