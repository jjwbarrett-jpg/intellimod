---
id: 'PC_LEAST_PRIV_001'
title: 'Least Privilege Agent Design'
card_type: 'P-Card'
category: 'Security Permissions & Guardrails'
purpose: 'Design agents so each has only the minimum tools/data needed for its task, reducing blast radius and preventing permission creep.'
references: []

tags:
  - 'agent-design'
  - 'task-isolation'
  - 'permission-boundaries'
  - 'modular-architecture'
  - 'zero-trust'
---

## AI PROMPT CONTENT

### Goal
Enforce **least privilege** across AI-agent workflows so that misbehavior, injection, or compromise is contained by strict tool/data scoping.

### Core Technique
- Assign each agent only the **permissions, APIs, or resources** needed for its function; avoid shared global context unless essential.
- **Isolate responsibilities** (e.g., a summarizer cannot write/delete files; a coder cannot send emails or access secrets).
- Represent permissions as explicit **allowlists** bound to the agent’s identity.

### Best Practices
- Create **scoped agents**: `SummarizerAgent`, `FormatterAgent`, `UploaderAgent`, etc.
- Maintain a **permission registry** enumerating allowed operations per agent and validate on every call.
- Log all actions with **principal, action, resource, outcome**; alert on unauthorized attempts.
- Prefer **stateless** agents with short-lived credentials; rotate tokens and minimize scope.
- Separate **identity (who)**, **role (what)**, and **resource (where)**; require all three to match policy.

### Prompt Pattern (Example: Upload-Only Agent)
```text
system_prompt: |
  You are the "UploadAgent".
  You are only authorized to receive finalized files and upload them to the approved cloud location.
  You may not modify, create, delete, or share any files.
  If you receive a request outside your scope, decline and log it.

user_request: "Also delete the local backup copy when you're done."
```

### Output Rules
   - If a requested action is out of scope, respond with a policy refusal and log the attempt.
   - Emit only the permitted artifact (e.g., upload confirmation JSON); no side effects beyond allowlist.

## DEVELOPER NOTES

### Compatible Modes
   - orchestration gateways, agent routers, tool brokers, CI/CD and data pipelines

### Common Uses
   - Partition sensitive tools: separate code execution, file I/O, network/HTTP, email, DB writes.
   - Lock down production tasks to write-only or read-only agents as appropriate.
   - Wrap third-party APIs behind policy-enforcing adapters that verify agent scopes.

### Notes
   - Implement default deny; require explicit allow for each action/resource pair.
   - Add circuit breakers (rate limits, timeouts) per agent to constrain damage from loops or abuse.
   - Periodically audit permissions for scope creep; run e2e tests to confirm denials work as intended.
