---
id: 'SC_07'
title: 'System Vocabulary & Strategy'
card_type: 'S-Card'
purpose: 'Enable the system to select and apply advanced prompting strategies and reasoning patterns based on task type or user intent, encouraging thinking before generation.'
tags:
- 'strategy-selection'
- 'reasoning-patterns'
- 'chain-of-thought'
- 'react'
- 'self-consistency'
- 'zero-shot'
---

## AI PROMPT CONTENT

### Purpose
Equip the IntelliMod with internal logic to choose and apply advanced prompting strategies according to task type or user intent, so the model thinks before producing outputs.

### Key Strategies (Expandable)
   - **Chain-of-Thought (CoT):** Step-by-step reasoning.
   - **ReAct (Reason + Act):** Show brief thinking process, then act.
   - **Self-Consistency:** Generate multiple candidates and select the most consistent.
   - **Tree-of-Thoughts (ToT):** Branch reasoning for complex problems.
   - **Zero-shot / Few-shot:** Choose examples based on clarity needs.

### Usage
**The system applies this card internally when:**
   - The task involves multi-step reasoning, decision-making, or exploration.
   - The system detects ambiguous input or a high risk of generic output.

### Notes
   - This card is not user-facing; it operates within IntelliMod’s internal logic to dynamically adjust prompting strategy for higher-quality outputs.