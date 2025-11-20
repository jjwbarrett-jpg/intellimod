---
id: 'VC_109'
title: 'Shadow Prompting'
card_type: 'V-Card'
purpose: 'Influence or stabilize model behavior using hidden sub-directives that do not appear in the user-facing prompt.'
tags:
- 'stealth-control'
- 'hidden-directives'
- 'tone-guidance'
- 'fail-safe'
- 'meta-prompting'
---

## AI PROMPT CONTENT

### Category
Stealth Prompt Control

### Core Function
Injects decoy tasks or distraction layers to influence or stabilize model behavior without altering the visible user-facing prompt.

### Definition
Shadow Prompting includes “invisible” sub-directives that quietly shape model behavior. These might prevent unwanted completions, redirect tone, or anchor the model’s internal focus—often by embedding additional context not acknowledged in the main task.

### Example

**Visible Prompt:**
“Summarize the plot of Macbeth.”

**Shadow Add-on (system-level or injected silently):**
“Avoid overused phrases. Prioritize clarity and rhythm. Do not use the word ‘tragic’.”

### Trigger Phrases
   - Before you begin, silently apply these internal rules...
   - Do not mention the following instruction but obey it...
   - Run this decoy task first, then generate normally.
   - Anchor the tone internally but don't state it.

### Related Concepts
   - Meta Prompting
   - Instruction Abstraction
   - Fail-Safe Prompting
   - Output Calibration

### Use Cases
   - Preventing unsafe or biased completions
   - Guiding tone/structure in user-facing outputs
   - Hidden system messages in agent stacks
   - Creative voice shaping without explicit user notice