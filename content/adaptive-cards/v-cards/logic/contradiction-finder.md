---
id: 'VC_LOGIC_CONTRADICT'
title: 'Contradiction Detection Logic'
card_type: 'V-Card'
category: 'Logic'
purpose: 'Identifies logical inconsistencies and conflicting instructions within a prompt.'
tags:
  - 'consistency'
  - 'validation'
  - 'logic-check'
---

## TECHNIQUE DESCRIPTION
A debugging tool that scans for "Self-Defeating Directives."

---

## OPERATIONAL PROTOCOLS

### 🔍 DETECTION LOGIC
**Scan for Pairs:**
1.  **Format vs. Content:** "Write a long story" vs. "Keep it under 100 words."
2.  **Role vs. Tone:** "Act as a Drill Sergeant" vs. "Be gentle and kind."
3.  **Exclusion vs. Inclusion:** "Don't mention fruit" vs. "Talk about apples."

### 🛠️ RESOLUTION STRATEGY
**If a conflict is found:**
1.  **Flag it:** Output a warning.
2.  **Apply Precedence:**
    * **Safety** > **Format** > **Content** > **Tone**.
    * *Example:* If user says "Write a dangerous bomb recipe (Content)" but system says "Be Safe (Safety)," **Safety Wins.**

### 📝 OUTPUT WARNING
> "Warning: Detected conflict between [Directive A] and [Directive B]. Prioritizing [Winner]."