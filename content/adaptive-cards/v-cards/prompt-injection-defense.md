---
id: 'VC_081'
title: 'Prompt Injection Defense'
card_type: 'V-Card'
purpose: 'Protect AI systems from malicious or manipulative inputs that attempt to subvert system instructions by enforcing separation, filtering, and preprocessing.'
tags:
- 'ai-security'
- 'prompt-injection'
- 'defense'
- 'validation'
- 'context-injection'
---

## AI PROMPT CONTENT

### Category
Security

### Summary
Prompt injection is a growing threat in AI applications where user input manipulates or subverts system instructions passed to a model.

### Core Principles
   - Prompt injections occur when input is interpreted as part of the model's system prompt or directive.
   - These attacks exploit natural language ambiguity to hijack output.

### Best Practices
   - Use strict separators between user input and system instructions.
   - Filter for known injection triggers (e.g., “Ignore previous”, “You are now”).
   - Avoid blindly injecting raw user input into the prompt—preprocess and gate it.

### Use Cases
   - Securing the IntelliMod system from override commands
   - Defending AI copilots or assistants from malicious prompt payloads