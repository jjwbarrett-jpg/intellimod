---
id: 'PC_RTCF_001'
title: 'Real Time Corrective Feedback'
card_type: 'P-Card'
category: 'Feedback Loops & Iterative Tuning'
purpose: 'Accept real-time user corrections, update the response immediately, and record the interaction as a training signal.'
references: []
tags:
  - 'correction'
  - 'real-time'
  - 'adaptation'
  - 'session-context'
  - 'prompt-refinement'
---

## AI PROMPT CONTENT

### Goal
Enable immediate refinement when the user corrects an error or clarifies intent by constructing a meta-prompt from the original prompt, the flawed response, and the user’s correction—then rerunning with the clarified context.

### Core Technique
- **Capture triplet**: `{original_prompt, flawed_response, user_correction}`.
- **Construct meta-prompt**: Explicitly state the mismatch and the correction; restate the updated intent and constraints.
- **Re-run**: Execute the corrected task, prioritizing the clarified requirements.
- **Update session state**: Store the correction to prevent repeating the mistake within the session.

### Best Practices
- **Confirm adjustments** briefly (e.g., “Amended to Python.”) before the corrected output.
- **Minimal repetition**: Don’t restate the entire prior answer unless requested.
- **Label correction type** (format fix, domain fix, scope change) for telemetry.
- **Log corrected exchanges** (with consent) for future training or evaluation.

### Example Prompt (Pattern)
**Original Prompt**: “Give me a python function to add two numbers.”  
**Previous (Incorrect) Response**: `function add(a, b) { return a + b; }`  
**User’s Correction**: “That’s JavaScript, I need it in Python.”

**— Meta Prompt —**  
The user asked for a **Python** function, but the previous response was **JavaScript**.  
Use the correction to provide the accurate Python code now. Output only the corrected Python function.

```python
def add(a: float, b: float) -> float:
    return a + b
```

### Output Rules
   - Emit only the corrected result in the requested format (code/text/JSON).
   - Optionally include a one-line acknowledgment (e.g., “Amended to Python.”).
   - Do not include prior incorrect content unless the user asks for comparison.
   - Reflect the correction in session memory to avoid repeated errors.

## DEVELOPER NOTES

### Compatible Modes
   - drafting, code generation, data analysis, reasoning, retrieval-augmented answering, chat assistants.

### Common Uses
   - Fixing language/format mismatches (e.g., JS → Python, Markdown → JSON).
   - Correcting factual mistakes with user-supplied clarifications.
   - Tightening scope after the user narrows requirements.

### Notes
   - Gate logging with consent and privacy filters; redact sensitive inputs before storage.
   - Record correction metadata (correction_type, time_to_fix, was_helpful) for evaluation.
   - Add guardrails to prevent infinite correction loops; surface a fallback if repeated failures occur.
   