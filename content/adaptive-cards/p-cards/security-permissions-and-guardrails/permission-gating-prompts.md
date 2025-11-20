---
id: 'PC_PERM_GATE_001'
title: 'Permission Gating Prompts'
card_type: 'P-Card'
category: 'Security Permissions & Guardrails'
purpose: 'Insert explicit user confirmation checkpoints before sensitive or high-impact actions to prevent unintended execution.'
references: []

tags:
  - 'execution-control'
  - 'user-confirmation'
  - 'AI-permission-check'
  - 'guardrail-layer'
  - 'task-authorization'
---

## AI PROMPT CONTENT

### Goal
Introduce a mandatory confirmation step inside multi-step reasoning or agent chains to **pause** before critical actions and proceed only on explicit user approval.

### Core Technique
- Before performing a critical action (send, delete, write, tool-call), **summarize** the action and **ask for confirmation**.
- Delay execution until a verified, unambiguous **"Confirm"** (or policy-approved synonym) is received; otherwise **Cancel**.

### Best Practices
- Use **clear, direct** language: “Are you sure you want to proceed?”
- Include **context**: item counts, filenames, recipients, risks, and consequences.
- Add **retry/clarify** logic if the response is ambiguous, partial, or timed out.
- Log confirmations with **timestamp**, **request summary**, and **user id** for auditability.

### Prompt Pattern (System + User)
```text
user_request: "Delete all draft files and send the final version to the client."

system_prompt: |
  A critical action was requested. Do not execute yet.
  First, present a confirmation message summarizing the action, then wait for explicit user approval.

Confirmation Message:
Action Summary:
- Delete 3 draft files
- Send 'Final_Contract_v2.pdf' to client@example.com

Type "Confirm" to proceed or "Cancel" to abort.
```

### Output Rules
   - If user responds "Confirm" → proceed with the action and return a receipt (what was done, where, when).
   - If "Cancel" or no clear approval → abort and return a safe acknowledgment.
   - If ambiguous (e.g., “sure”/“okay”) → ask a follow-up: “Please reply with ‘Confirm’ or ‘Cancel’.”

## DEVELOPER NOTES

### Compatible Modes
   - orchestration gateways, agent routers, workflow automations, CI/CD deploys, data operations

### Common Uses
   - Prevent accidental email sends, file deletions, database writes, or external API calls.
   - Add a stop-gap before costly operations (GPU runs, batch jobs).
   - Wrap third-party tools with a confirm-before-execute layer.

### Notes
   - Support synonyms via a strict approval lexicon (e.g., ["Confirm"]) to avoid accidental approvals.
   - Timebox pending confirmations; on timeout, default to Cancel.
   - Record reason codes for denials and surface them in run logs for later review.
