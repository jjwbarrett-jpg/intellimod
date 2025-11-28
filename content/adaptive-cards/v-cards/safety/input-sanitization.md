---
id: 'VC_SAFETY_SANITIZE'
title: 'Input Sanitization Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Safety'
purpose: 'Neutralizes Prompt Injection attacks by scanning for adversarial patterns before execution.'
tags:
  - 'security'
  - 'sanitization'
  - 'regex-defense'
---

## TECHNIQUE DESCRIPTION
A "Pre-Flight Wash" that scrubs dangerous patterns. In n8n, this should run as a **Code Node** (Regex) or a small **Guardrail LLM** call.

## OPERATIONAL PROTOCOLS

### 1. ADVERSARIAL PATTERN MATCHING (Regex/Logic)
**Scan for these Attack Vectors:**

* **Override Commands:** `(ignore|forget|disregard)\s+(previous|all)\s+instructions`
* **Privilege Escalation:** `(system\s+mode|developer\s+mode|unrestricted|god\s+mode)`
* **Data Exfiltration:** `(reveal|print|show)\s+(system\s+prompt|hidden\s+rules)`
* **Persona Hijacking:** `(you\s+are\s+now|act\s+as)\s+(DAN|unfiltered|chaos)`

### 2. DEFANGING ACTION
**If a match is found:**
* **Level 1 (Suspicious):** Replace the phrase with `[REDACTED_SAFETY_TRIGGER]`.
* **Level 2 (Malicious):** Abort the workflow. Return `{ "status": "blocked", "reason": "injection_detected" }`.

### 3. DECOY CHECK (Honeytoken)
* **Technique:** If the input asks for the "Secret Key," do not reveal it. Instead, log the user ID as a potential attacker.