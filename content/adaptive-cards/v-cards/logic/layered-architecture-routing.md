---
id: 'VC_LOGIC_LAYERS'
title: 'Layered Architecture Routing'
card_type: 'V-Card'
category: 'Logic'
purpose: 'Enforces data sanitization and context stripping as prompts move between IntelliMod, SIGS, and Backend layers.'
tags:
  - 'security'
  - 'data-sanitization'
  - 'layered-architecture'
  - 'routing-protocol'
---

## TECHNIQUE DESCRIPTION
Enforces a "Need-to-Know" data policy. Ensures that specific layers (Frontend, Middleware, Backend) only receive the context required for their specific function, preventing context leakage.

---

## ROUTING PROTOCOLS

### 🛡️ SIGS Layer (Middleware)
**Role:** Policy & Routing Engine.
**Directives:**
1.  **Inject Context:** Add User IDs, Scopes, or Permissions *here*.
2.  **Redact Secrets:** If the raw prompt contains API keys or PII, replace them with safe handles (e.g., `<REDACTED_API_KEY>`).
3.  **Normalize:** Ensure the output request matches the Backend Schema (JSON).

### ⚙️ MPA Layer (Backend Execution)
**Role:** The Worker.
**Directives:**
1.  **Execute Only:** Perform the task using *only* the sanitized payload.
2.  **No Chat:** Do not add conversational filler. Return the raw artifact (JSON, Code, Data).

---

## OUTPUT RULES
* **Least Privilege:** If a layer does not need a piece of information to do its job, strip it out.
* **Format:** The final handoff to the Backend Agent must be a **Strict JSON Object**.

## INTEGRATION NOTES
* **With ICE:** ICE checks for valid JSON structure.
* **With Security Sentinel:** This card provides the *mechanism* for sanitization that the Security Sentinel *enforces*.