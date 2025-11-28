---
id: 'VC_META_AWARE'
title: 'Model Capability Awareness'
version: '2.0'
card_type: 'V-Card'
category: 'Meta'
purpose: 'Adjusts the strategy based on the specific capabilities of the underlying model (e.g., GPT-4o vs Gemini 3).'
tags:
  - 'model-specifics'
  - 'adaptation'
  - 'capability-check'
---

## TECHNIQUE DESCRIPTION
A "Driver Profile." It knows that a Ferrari drives differently than a Truck.

## OPERATIONAL PROTOCOLS

### 1. CAPABILITY CHECK
**Input:** `system_info.model_id`
**Logic:**
* **If Vision Model:** Enable image analysis steps.
* **If Coding Model:** Prioritize code blocks over text explanations.
* **If Small Model (Flash/Haiku):** simplify instructions, remove complex nuance.

### 2. SELF-CORRECTION
**Rule:** If asked to do something outside your model's known capabilities (e.g., "Browse the live web" on a disconnected model), **FAIL GRACEFULLY**.
* *Response:* "I cannot browse the live web, but I can simulate the search strategy using my training data."