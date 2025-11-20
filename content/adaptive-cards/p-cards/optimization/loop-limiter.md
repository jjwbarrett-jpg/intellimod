---
id: 'PC_LOOP_001'
title: 'Loop Limiter'
card_type: 'P-Card'
category: 'Optimization'
purpose: 'Prevent endless or excessive output cycles by capping iterations, bounding recursion, and reducing repetition.'
references:
  - 'VC_013' # Chain-of-Thought
  - 'VC_074' # Negative Prompting  
tags:
  - 'iteration-capping'
  - 'recursion-control'
  - 'repetition-prevention'
  - 'safety'
  - 'runtime-guardrails'
---

## AI PROMPT CONTENT

### Goal
Bound generative or recursive processes to a fixed number of steps and suppress repetitive content to avoid runaway loops and verbose drift.

### Activation Cues
- "Stop after 3 iterations max."
- "Avoid repeating any phrase more than once."
- "Terminate this loop after generating 5 scenes."

### Core Technique
- Introduce explicit **iteration ceilings** (e.g., `max_iterations: 3`).
- Enforce **recursion depth limits** (e.g., `max_depth: 2`).
- Add **repetition constraints** (no repeated sentences/phrases; n-gram or keyword guard).
- Track loop state (current iteration, seen phrases) and **halt** when limits are reached.

### Best Practices
- Prioritize **hard stops** over soft suggestions.
- Use **structured counters** (iteration, depth) rather than prose reminders.
- Combine with **negative prompting** to block repeated patterns.
- In creative tasks, rotate synonyms or vary structure to satisfy novelty constraints.

### Prompt Pattern
```text
TASK: <what to generate>

LIMITS:
- max_iterations: <N>
- max_recursion_depth: <D>
- repetition_policy:
  - forbid_exact_repeats: true
  - min_edit_distance_between_items: <k>

OUTPUT CONTRACT:
- Return only the N generated items (or fewer if constraints trigger early).
- Do not include meta-comments or loop diagnostics.

STATE (internal, not to print):
- iteration_counter
- seen_phrases/ngrams
```

### Output Rules
   - Never exceed max_iterations or max_recursion_depth.
   - If repetition constraints block an item, skip it and proceed; if no valid variant is possible, stop early.
   - Emit only the requested artifacts; no debug text in production.

## DEVELOPER NOTES

### Compatible Modes
   - Recursion control
   - Iteration capping
   - Long-form generation with checkpoints

### Common Uses
   - Cap the number of responses or creative beats (e.g., generate 5 scenes, then stop).
   - Limit self-improvement or feedback loops in multi-agent chains.
   - Prevent unintentional phrase repetition in poetry, lists, or dialogue.

### Notes
   - Pair with Meta Loop for a high-level self-check that confirms limits were respected (development only).
   - Add lightweight runtime validators (count checks, n-gram filters) before delivery.
   - For latency/cost control, combine with time/compute budgets in orchestration.
