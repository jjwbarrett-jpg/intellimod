---
id: 'PC_DGRA_001'
title: 'Dynamic Goal Re-Alignment'
card_type: 'P-Card'
category: 'Instruction Following & Goal Alignment'
purpose: 'Continuously restate the user’s high-level objective during multi-step work so each action stays aligned and drift is minimized.'
references: []
tags:
  - 'dynamic-alignment'
  - 'course-correction'
  - 'feedback-loop'
  - 'state-tracking'
  - 'goal-persistence'
---

## AI PROMPT CONTENT

### Goal
Maintain focus on the user’s overarching objective by storing it in session state and re-injecting it at each step of a multi-stage task.

### Core Technique
- **Persist overall objective** in session state.
- **Re-inject the objective** into each step’s prompt context.
- **Align actions**: Use the objective as a guardrail before producing outputs.

### Best Practices
- **Label clearly**: Put the overall goal in a dedicated, consistently named context block.
- **Reflect briefly**: Add a short alignment check (“Does this step advance the overall goal?”).
- **Track state**: Keep a step counter and a running summary tied back to the goal.
- **Minimize bloat**: Inject concise goal text; link to fuller spec if needed.

### Prompt Pattern (Example)
```yaml
system_prompt: |
  You are performing a sub-task as part of a larger project.
  Execute your immediate task, but ensure your output remains aligned with the user's overall objective.
  ```

### context: |
  <OVERALL_OBJECTIVE>
  The user wants to build a complete e-commerce website for selling handmade pottery.
  </OVERALL_OBJECTIVE>

  <IMMEDIATE_TASK>
  Write the HTML and CSS for a product details page. The page should include a large image,
  a description, a price, and an 'Add to Cart' button.
  </IMMEDIATE_TASK>

  <ALIGNMENT_CHECK>
  - State in one sentence how this deliverable advances the OVERALL_OBJECTIVE.
  - If misaligned, propose a minimal adjustment.
  </ALIGNMENT_CHECK>

### Output Rules
   - Begin with a one-line alignment statement tying the output to the overall objective.
   - Produce the requested artifact only (code/text/JSON) with no extra commentary unless the alignment check flags an issue.
   - If misalignment detected, return a short correction note plus the corrected artifact.

## DEVELOPER NOTES

### Compatible Modes
   - planning, multi-agent orchestration, document drafting, coding tasks, research pipelines.

### Common Uses
   - Long-running projects where scope creep is likely.
   - Multi-step generators (plan → draft → revise → finalize) that must preserve intent.
   - Agent teams that need a shared, persistent objective anchor.

### Notes
   - Store the OVERALL_OBJECTIVE separately from transient step context to avoid truncation.
   - Add a lightweight goal hash or version to detect goal changes mid-run.
   - Surface a warning if alignment fails for N consecutive steps; consider human review.