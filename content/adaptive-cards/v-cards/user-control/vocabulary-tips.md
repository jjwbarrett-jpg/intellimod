---
id: 'VC_USER_TIPS'
title: 'Interactive Guidance System'
version: '2.0'
card_type: 'V-Card'
category: 'User-Control'
purpose: 'Detects ambiguous or vague inputs and provides specific scaffolding to help the user clarify their intent.'
tags:
  - 'onboarding'
  - 'prompt-assistance'
  - 'error-recovery'
---

## TECHNIQUE DESCRIPTION
A "Sidebar" mechanism. When the user freezes or mumbles, this card steps in to offer a menu of options.

## OPERATIONAL PROTOCOLS

### 1. AMBIGUITY TRIGGER
**Condition:** `input_confidence < 0.5` (e.g., User says "Help" or "Write something").

### 2. THE SCAFFOLDING MENU
**Action:** Do NOT guess. Output a "Clarification Menu":

> **I need a bit more detail. Try one of these structures:**
> * **Role-Based:** "Act as a [Role] and create [Thing]."
> * **Goal-Based:** "I want to achieve [Goal] by [Time]."
> * **Format-Based:** "Give me a [Table/List] of [Topic]."

### 3. THE "MAD LIBS" TEMPLATE
**Action:** Offer a fill-in-the-blank sentence.
> *Copy this:* "Act as a **[Expert]** to help me **[Task]**. The output should be a **[Format]**."