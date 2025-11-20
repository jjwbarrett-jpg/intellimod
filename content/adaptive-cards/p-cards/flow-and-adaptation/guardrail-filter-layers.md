---
id: 'PC_GUARD_001'
title: 'Guardrail Filter Layers'
card_type: 'P-Card'
category: 'Prompt Flow & Adaption'
purpose: 'Intercept and validate raw LLM output with safety and format checks before returning a user-visible response.'
references: []
tags:
  - 'guardrails'
  - 'safety'
  - 'filters'
  - 'output-control'
  - 'moderation'
---

## AI PROMPT CONTENT

### Goal
Apply post-processing filters to the LLM’s raw output to ensure compliance with safety policies, content restrictions, and required formatting before it is shown to the user or passed downstream.

### Core Technique
- Use a **specialized model** or **rule-based filters** (regex, keyword lists, classifiers) to detect policy violations (e.g., hate speech, PII leakage).
- **Validate structure/format** (e.g., must be valid JSON/XML, required fields present, schema conformity).
- On violation or invalid format, **withhold** the raw output and produce a **safe fallback** or remediation path.

### Best Practices
- **Chain multiple filters** (policy → privacy → format/schema → business rules) for robust coverage.
- Prefer **allow-lists** for strict formats; keep schemas versioned and testable.
- Log violations and **return safe fallbacks** with neutral language.
- Keep guardrails **separate** from model prompts so they can evolve independently.
- Fail **closed** on ambiguous cases in high-stakes contexts; allow human review.

### Prompt Pattern
```text
INPUT (LLM Raw Output):
{ "tool_name": "database_query", "query": "SELECT * FROM users;" }

GUARDRAIL CHECKS:
1) Policy/Privacy: Does the query touch sensitive tables or PII?  -> Violation
2) Format/Schema: Is JSON valid and fields allowed?               -> Invalid "table" access
3) Business Rules: Disallow unrestricted user table queries.       -> Block

FINAL OUTPUT (User-Safe):
"I'm sorry, but I cannot fulfill that request as it involves accessing sensitive information."
```

### Output Rules
   - If any guardrail fails, do not display raw output; return a safe fallback or ask for a narrower, compliant request.
   - When format-only issues occur, optionally auto-repair structure (e.g., reformat JSON) if policy-safe.
   - Emit minimal, user-safe explanations; avoid exposing internal rule details.

## DEVELOPER NOTES

### Compatible Modes
   - post-generation moderation
   - formatting/structure enforcement
   - compliance gateways
   - API/tool invocation safety

### Common Uses
   - Block unsafe tool calls (e.g., direct database queries to sensitive tables).
   - Enforce output contracts (valid JSON/XML, presence of required keys).
   - Apply content policies (toxicity, hate, self-harm) before display.

### Notes
   - Maintain versioned filter sets and schemas with regression tests.
   - Instrument metrics (violation rate, auto-repair rate) and keep audit logs.
   - Pair with Constraint Builder (upstream) to reduce violations and with Shared State Communication (downstream) to route remediation.
