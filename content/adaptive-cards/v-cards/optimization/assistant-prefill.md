---
id: 'VC_OPT_PREFILL'
title: 'Assistant Prefill Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Optimization'
purpose: 'Conditions the AI response by injecting the first few words of the answer into the "Assistant" role.'
tags:
  - 'prefill'
  - 'conditioning'
  - 'hallucination-mitigation'
---

## TECHNIQUE DESCRIPTION
A "Nudging" tool. Instead of asking "Please answer as JSON," you literally type the `{` for the AI.

## OPERATIONAL PROTOCOLS

### 1. THE PREFILL INJECTION
**Trigger:** Strict Format requirements.
**System Action:**
* *User:* "Output JSON only."
* *Assistant Prefill:* `{`
* *AI Completion:* `"status": "success" ... }`

### 2. TONE STEERING
**Trigger:** Tone requirements.
* *User:* "Explain this to a child."
* *Assistant Prefill:* "Sure! Imagine you have a big toy box..."
* *AI Completion:* "...and inside that box are all your favorite games."

### 3. AUTOMATION LOGIC
**Constraint:** In n8n, use the `prefill` or `assistant_message` field in the API call to insert this text.