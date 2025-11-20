---
id: 'PC_MIRROR_001'
title: 'Mirror Layer'
card_type: 'P-Card'
category: 'Meta'
purpose: 'Reflect the user’s prompt in interpreted form to confirm understanding and surface misalignment before execution.'
references:
  - 'VC_013'   # Chain-of-Thought
  - 'VC_024' # C.R.A.F.T.  
tags:
  - 'intent-verification'
  - 'alignment'
  - 'reflection'
  - 'communication-accuracy'
  - 'prompt-interpretation'
---

## AI PROMPT CONTENT

### Goal
Reflect back the **interpreted intent** of the user’s prompt prior to action, so misunderstandings are caught early and fixed with minimal friction.

### Activation Cues
- "Reflect my intent before running the response."
- "What do you understand from this prompt?"
- "Does this sound like what I mean to ask?"

### Core Technique
- Parse the prompt and restate:
  - **What I think you want:** high-level objective.
  - **Key constraints:** format, audience, length, tone, data sources.
  - **Assumptions detected:** inferred context or missing details.
  - **Planned approach:** brief outline of steps or output contract.
- Ask for **confirmation or corrections** before proceeding.

### Best Practices
- Keep reflections **concise and structured** (bullets or short sections).
- Separate **facts** from **assumptions**; mark assumptions clearly.
- Offer a **one-line correction handle** (user can reply with just the fix).
- In production, cap reflection length to control latency and cost.

### Prompt Pattern
Provide the user’s prompt as `PROMPT:`. Return only the following sections and then wait for confirmation:

- **Interpreted Intent**
- **Key Constraints**
- **Assumptions (Please Confirm/Correct)**
- **Proposed Output Contract**
- **Reply Options** (e.g., “Looks good — proceed”, or a concise correction)

### Example (Sketch)
**PROMPT:** “Summarize my policy document for executives in five bullets.”

- **Interpreted Intent:** Create an executive summary of the policy document.
- **Key Constraints:** 5 bullets; audience = executives; tone = concise, non-technical.
- **Assumptions (Please Confirm/Correct):** The latest version is the attached file; no citations required.
- **Proposed Output Contract:** Exactly 5 bullets, outcome-first phrasing, ≤20 words each.
- **Reply Options:** “Proceed”; or “Use version ‘Policy_v3’ and include 1 citation.”

## DEVELOPER NOTES

### Compatible Modes
- Intent verification
- Communication accuracy
- Planning & pre-run checks

### Common Uses
- Catch **intent mismatches** before expensive or sensitive actions.
- Improve user–AI **communication accuracy** in high-stakes workflows.
- Support **iterative prompt improvement** by exposing assumptions early.

### Notes
- Pairs well with **Evaluator Node** and ICE logic for pre-run quality gates.
- For novice users, enable by default; for experts, allow a quick-confirm mode.
- Log the reflected intent for auditability; trim or redact sensitive content in regulated environments.
