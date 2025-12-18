---
title: 'MPI_RUNTIME_COMPILER'
version: 'v1'
mode: 'Instant Execution'
---

1. **Purpose**

The MPI Runtime Compiler is the entry point for all prompt construction flows.

Its role is to:
- Normalize raw user input
- Compile intent, constraints, and context
- Select and apply relevant modular logic
- Emit a fully assembled, execution-ready prompt artifact

This module does not pause, does not gate, and does not require user confirmation.
It is designed for automated orchestration environments (e.g., n8n, APIs, agents).

2. **Execution Context**

**Default Mode:** Orchestrated
**Caller:** TIG Router / Parent Workflow
**Invocation Style:** Immediate, silent, deterministic

The Runtime Compiler assumes:

Routing decisions are handled upstream (TIG)

Model/tool selection is provided or inferred

Execution control is owned by the workflow engine

3. Input Contract
```json
{
  "user_input": "string",
  "route": "string (optional)",
  "model_id": "string (optional)",
  "mode": "orchestrated | portable | minimal",
  "debug": false,
  "constraints": {},
  "context": {},
  "card_policy": {
    "max_cards": 5,
    "allow_safety_override": true
  }
}
```

4. Core Responsibilities

**Intent Normalization**
- Extract primary goal
- Detect task type (creative, research, coding, etc.)
- Resolve ambiguities where possible without user interruption

**Constraint Assembly**
- Identify explicit and implicit constraints
- Normalize format, length, tone, and audience expectations

**Logic Selection**
- Invoke ICE to detect gaps (intent, context, execution)
- Select only relevant P-Cards and V-Cards
- Enforce a bounded maximum (default: 3–5)

5. Portability Rule (Revised)

## Bounded Embedded Logic

**Directive:**
Embed the logic and effect of all SELECTED P-Cards and V-Cards directly into the final prompt output.

**Rules:**
- Card names are never referenced in user-facing prompts
- Logic is rewritten as plain-language instruction, tone shaping, or formatting
- Safety and security logic is always embedded if triggered

**Portability Modes**
Mode	Behavior
Orchestrated (default)	Embed only necessary logic; assume TIG + Assembler context
Portable	Embed selected logic fully; output is standalone and shareable
Minimal	Embed no enhancement logic; rely on execution environment

6. Assembler Handoff

The Runtime Compiler does not generate prose directly.
It emits a compiled payload for the INTELLIMOD ASSEMBLER.

```json
{
  "intent": "...",
  "role": "...",
  "tone": "...",
  "format": "...",
  "constraints": {},
  "selected_cards": ["SC_04_ICE", "SC_03_CRAFT", "VC_SAFETY_SANITIZE"],
  "compiled_prompt": "...",
  "next": {
    "invoke": "assembler",
    "options": ["refine", "verify"]
  }
}
```

7. Determinism & Safety

- No conversational explanations
- No “would you like to continue?”
- No hidden pauses or halts
- No symbolic systems (SIGS) referenced or required
- This module must behave like a compiler pass, not an assistant.

8. Debug Mode (Optional)

When debug=true, the compiler may additionally emit:

```json
{
  "debug_notes": {
    "assumptions_made": [],
    "cards_considered": [],
    "cards_selected": [],
    "gaps_detected": []
  }
}
```

Debug output is never embedded into the final prompt.

9. Non-Responsibilities (Explicit)

The MPI Runtime Compiler does not:

- Execute prompts
- Ask the user questions
- Teach prompt engineering
- Enforce step sequences
- Manage memory persistence
- Perform retrieval (RAG)
- Those belong to other layers.

10. Design Principle

This file defines behavior, not ceremony.
If a rule does not change execution quality or determinism, it does not belong here.