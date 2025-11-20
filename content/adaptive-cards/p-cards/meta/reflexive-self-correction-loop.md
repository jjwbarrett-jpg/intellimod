---
id: 'PC_REFLEX_001'
title: 'Reflexive Self Correction Loop'
card_type: 'P-Card'
category: 'Meta'
purpose: 'Improve output quality via a two-pass process—first draft, then self-critique and revision against explicit criteria.'
references: []
tags:
  - 'self-correction'
  - 'reflection'
  - 'iterative-improvement'
  - 'two-pass'
  - 'quality-assurance'
---

## AI PROMPT CONTENT

### Goal
Raise clarity, accuracy, and usefulness by generating an initial draft and then running a structured self-review that identifies issues and produces a refined final version.

### Core Technique
- **Pass 1 (Draft):** Generate an initial answer to the user query.
- **Pass 2 (Review & Revise):** Re-prompt to critique the draft against a checklist (e.g., clarity, tone, factual accuracy, format compliance), then rewrite a polished final.

### Best Practices
- Use a short, repeatable **review checklist** (clarity, correctness, completeness, constraints).
- Keep critiques **specific and actionable**; point to exact sentences or omissions.
- Limit to **high-stakes or high-value** tasks due to added cost/latency.
- Preserve **original intent**; avoid scope creep during revision.

### Prompt Pattern (System + Context)
```text
system_prompt: |
  You are a quality assurance editor. Review the original query and the draft response.
  Identify errors, unclear phrasing, missing details, or format violations.
  Then rewrite an improved final version that corrects these issues.

context: |
  User Query:
  "<USER_QUERY>"

  Draft Response:
  "<DRAFT_TEXT>"

final_instruction: Return two sections:
  1) "Findings" — bullet list of concrete issues and proposed fixes
  2) "Final Response" — the improved response only
```

### Output Rules
   - Findings: concise bullets mapping issue → fix.
   - Final Response: single authoritative revision that implements all fixes.
   - No extraneous commentary beyond these sections.

### Example (Sketch)
   - User Query: “Explain the difference between a container and a virtual machine.”
   - Draft Response: “They both let you run apps in an isolated way. VMs are bigger and have a whole OS, while containers are smaller and share the OS kernel.

### Expected Output:
   - Findings:
       - Lacks definition of isolation scope → add resource and process isolation details.
       - Missing performance/overhead comparison → mention boot time and density.
       - Tone slightly informal → make concise and neutral.
   - Final Response: Clear, neutral comparison covering OS layering, isolation, overhead, startup time, and common use cases.

## DEVELOPER NOTES

### Compatible Modes
   - Editing/revision, research synthesis, documentation, help center drafting, product messaging.

### Common Uses
   - Post-process complex answers to enforce tone, structure, and accuracy.
   - Improve long-form outputs (docs, proposals, specs) with a quick quality pass.
   - Apply uniform standards via a shared review checklist across teams.

### Notes
   - Consider gating via confidence threshold or risk score to decide when to run the loop.
   - Log both pass outputs for auditability; surface delta to reviewers.
   - Combine with a Red Team or Evaluator Node for additional safety/quality layers when needed.

   