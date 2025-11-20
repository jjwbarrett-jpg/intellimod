---
id: 'PC_REDTEAM_001'
title: 'Red Teaming Agent Pattern'
card_type: 'P-Card'
category: 'Meta'
purpose: 'Subject a Worker agent’s output to adversarial review by a distinct Red Team agent to surface flaws, risks, and inconsistencies before delivery.'
references: []
tags:
  - 'red-teaming'
  - 'adversarial'
  - 'quality-control'
  - 'multi-agent'
  - 'critique'
---

## AI PROMPT CONTENT

### Goal
Increase reliability and safety by routing a Worker agent’s draft through a **Red Team** agent that challenges assumptions, finds vulnerabilities, and recommends fixes.

### Core Technique
- A **Worker** agent generates the initial output.
- A **Red Team** agent receives that output and performs an **adversarial critique** (logical, ethical, privacy, security, compliance).
- Orchestrator flags issues and either **revises** via the Worker or **blocks/requests escalation** depending on severity.

### Best Practices
- Use a **distinct persona** and style for the Red Team to ensure divergent reasoning.
- Calibrate **critique scope** (logic, data integrity, safety, privacy, ethics, compliance).
- Require **evidence-backed** findings with concrete references to problematic passages.
- Gate production with **severity thresholds** (e.g., critical findings must block release).
- Log critiques and resolutions for **auditability** and iterative improvement.

### Prompt Pattern (Red Team System)
```text
system_prompt: |
  You are a Red Team AI. Be skeptical and identify risks, logical flaws, privacy/security/ethical issues, and missing constraints in the proposal below.
  Return only a structured critique.

context: |
  Proposed Plan:
  "To increase engagement, users can upload contacts and find friends. Contacts will be stored in the main user database."

final_instruction: Provide a bulleted list of privacy, security, or ethical risks in this plan, grouped by category, and include suggested mitigations.
```

### Output Rules
   - Return a structured critique:
       - Findings (grouped: Logic, Privacy, Security, Ethics, Compliance)
       - Severity (Low/Med/High/Critical) per finding
       - Evidence/Reference (quote or section pointer)
       - Mitigation (actionable fix)
   - No free-form prose beyond the structured list.
   - If Critical issues exist, set release_recommendation: "block"; otherwise "revise" or "proceed".

### Example (Sketch)
   - Privacy – High: Storing contacts in main user DB risks unauthorized linkage; Mitigation: segregate PII in encrypted vault, minimize fields, rotate keys.
   - Security – Med: Contact-upload endpoint prone to abuse; Mitigation: rate limiting, abuse detection, file-type validation.
   - Ethics – Med: Implicit consent assumptions; Mitigation: explicit consent flows, purpose limitation, deletion API.

## DEVELOPER NOTES

### Compatible Modes
   - Multi-agent orchestration
   - Safety/ethics review
   - Compliance gating
   - Pre-release QA

### Common Uses
   - Vet feature proposals, product specs, or generated policies before rollout.
   - Review code diffs, data pipelines, or prompts for security/privacy/ethical issues.
   - Serve as a second opinion in high-stakes or regulated workflows.

### Notes
   - Keep Red Team independent from Worker to avoid shared biases; use separate models when possible.
   - Define routing thresholds (e.g., any Critical → block; ≥2 High → mandatory revision).
   - Store critiques and remediation steps as artifacts for audits and continuous improvement.
   - Pair with Confidence Scoring & Rationale to calibrate when to escalate to human review.