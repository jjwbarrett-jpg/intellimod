---
id: 'PC_ROUTE_001'
title: 'Layer Specific Prompt Routing'
card_type: 'P-Card'
category: 'Logic'
purpose: 'Route and contextualize prompts per system layer so each layer adds only the minimum required context and controls.'
references: []
tags:
  - 'routing'
  - 'layered-architecture'
  - 'security'
  - 'prompt-engineering'
  - 'sigs'
---

## AI PROMPT CONTENT

### Goal
Ensure prompts move through a layered architecture (e.g., **IntelliMod → SIGS → MPA**) where each layer contributes only its necessary context, constraints, and routing decisions.

### Layers & Responsibilities
- **IntelliMod (frontend/UX)**
  - Provides raw or minimal **intent** (task + user input).
  - No credentials, secrets, or backend-specific parameters.
- **SIGS (policy/routing middleware)**
  - Enriches with **constraints**, **permissions**, **redactions**, and **route selection**.
  - Maps intent to backend-safe schemas and enforces access context.
- **MPA / Backend Agent Layer**
  - Executes the task using the **sanitized** and **constrained** prompt payload.
  - Produces output in the specified format and applies post-conditions.

### Core Technique
- IntelliMod sends minimal, schema-light intent.
- SIGS injects constraints, permissions, redactions, and selects destination tool/agent.

### Best Practices
- **No direct** IntelliMod → Agent interaction for powerful or sensitive requests.
- Use **SIGS** to:
  - Insert access context (user IDs, scopes, roles).
  - **Redact** sensitive text and replace with references/handles.
  - Normalize output contracts (e.g., `output_format: json`).
- Maintain **least-privilege** payloads; pass only what the next layer needs.
- Log **routing metadata** separately from user content to avoid data exposure.
- Validate payloads against **strict schemas** at each hop.

### Example Flow

**Initial Prompt (IntelliMod)**
```json
{ "user_query": "Summarize my latest document." }


Transformed Prompt (from SIGS):
{
  "task": "summarize_document",
  "user_id": "user-12345",
  "document_id": "doc-abc-789",
  "constraints": ["access_level:private", "output_format:json"]
}
```
  ### Output Rules
        - Backend returns only the requested format (e.g., compact JSON).

        - Include policy flags (e.g., redactions_applied: true) when applicable.

        - Disallow free-form commentary unless explicitly requested by policy.

## DEVELOPER NOTES
    
### Compatible Modes: 
planning, orchestration, policy-enforcement, backend execution, evaluation.

### Common Uses:
   - Frontend intent capture with middleware enrichment and secure backend execution.
   - Centralized policy enforcement for privacy, compliance, and rate-limiting.
   - Multi-agent routing where SIGS selects tools based on task type and permissions.

### Notes:
   - Define versioned schemas for each layer (e.g., IntelliMod.v1, SIGS.v2).
   - Implement deterministic redaction/handle mapping for auditability.
   - Add deny-lists for disallowed direct routes; enforce via SIGS with tests.
   - Monitor for payload creep—run CI checks to ensure minimal field sets per layer.