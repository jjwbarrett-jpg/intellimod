---
id: 'VC_ALIGN_DYNAMIC'
title: 'Dynamic Goal Alignment'
version: '2.0'
card_type: 'V-Card'
category: 'Alignment'
purpose: 'Injects a persistent objective into the context window to prevent logical drift in long conversations or multi-step workflows.'
tags:
  - 'drift-prevention'
  - 'consistency'
  - 'long-context'
---

## TECHNIQUE DESCRIPTION
This card acts as a "Gyroscope." In complex, multi-turn exchanges, the AI tends to forget the original instruction. This card forces a re-read of the Primary Goal before every single output.

## OPERATIONAL PROTOCOLS

### 1. THE NORTH STAR INJECTION
**Rule:** The System (or n8n Parent) must inject the original goal into the context using this specific XML block:
```xml
<PRIMARY_OBJECTIVE>
  [Insert the original User Request or Business Goal here]
</PRIMARY_OBJECTIVE>
```

2. THE SILENT CHECK (Drift Detection)
Directive: Before generating the final response, you must internally evaluate:

Read <PRIMARY_OBJECTIVE>.

Compare it to your current draft response.

Question: "Does this response directly contribute to the Primary Objective?"

If Yes: Proceed.

If No/Tangent: Discard the draft and rewrite it to focus ONLY on the objective.

3. OUTPUT CLEANLINESS
Rule: Do NOT print "Alignment Check" or explain your reasoning in the final output unless debug_mode=true is set.

Production Mode: Output only the aligned content.

Debug Mode: Append a footer: [Alignment Score: 5/5 - Goal Met].