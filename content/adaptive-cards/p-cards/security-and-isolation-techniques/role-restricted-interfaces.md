---
id: 'PC_ROLE_IFACE_001'
title: 'Role Restricted Interfaces'
card_type: 'P-Card'
category: 'Security & Isolation Techniques'
purpose: 'Constrain which agent roles can be invoked and by whom, preventing impersonation and unauthorized permission escalation at the prompt/interface layer.'
references: []
  
tags:
  - 'role-prompting'
  - 'interface-design'
  - 'layered-access'
---

## AI PROMPT CONTENT

### Goal
Design prompt interfaces that **bind** requests to approved roles and **verify** the caller’s identity/context, so users and agents cannot impersonate privileged roles or escalate permissions.

### Core Technique
- **Bind** prompt templates to **system-defined roles** (e.g., Analyst, Auditor, Orchestrator).
- Require **symbolic keys/tokens** (e.g., SIGS-issued handle, JWT claim) that prove a **valid initiator context** (IntelliMod, MPA, service account).
- Enforce **deny-by-default** for chains not explicitly allowed to the caller’s role.

### Best Practices
- Do **not** let user input define or alter agent roles; treat any “act as X” text as **untrusted**.
- Use **tiered access** (public → internal → privileged) with distinct templates and immutable system headers.
- Keep a **role-to-chain allowlist**; reject or downgrade requests that target **restricted chains**.
- Log **caller_id**, **role**, and **chain_id** for audit; never co-mingle privileged system prompts with raw user text.

### Prompt Pattern (Interface Guard)
```text
SYSTEM_ROLE: Analyst
INPUT_TYPE: User Text
VALID_CALLER: IntelliMod (Verified via token)
RESTRICTED_CHAIN: NO_ACCESS
```

### Input/Output Contract
```json
   - Input (from caller):
   {
  "caller_id": "intellimod",
  "caller_token": "sig_handle_or_jwt",
  "requested_role": "Analyst",
  "requested_chain": "summarization_v2",
  "user_text": "...",
  "constraints": ["output_format:json"]
}
```

### Validation (gateway):
   - verify(caller_token) → issuer + scopes
   - allowlist.contains(requested_role, requested_chain, caller_id) → true/false

### Output (to agent):
```json
{
  "role": "Analyst",
  "chain": "summarization_v2",
  "content": "sanitized_user_text",
  "policy_flags": ["no_role_change", "json_only"]
}
```
### Failure Handling
   - If validation fails: return a policy error (no execution), or downgrade to a safe public chain.
   - Record reason_code (e.g., invalid_token, role_not_allowed, restricted_chain).

## DEVELOPER NOTES

### Compatible Modes
   - orchestration gateways, SIGS middleware, agent routers, RAG brokers

### Common Uses
   - Ensure only IntelliMod (or other verified frontends) can call internal chains.
   - Prevent “act as admin” or role-jailbreak attempts from user text.
   - Partition high-risk tools (code exec, system calls) behind privileged roles.

### Notes
   - Keep role bindings in versioned policy; test with unit/e2e checks for route denials.
   - Separate identity (who), role (what), and chain (where); require all three to match policy.
   - Consider short-lived tokens and context-bound handles to reduce replay or cross-context misuse.
