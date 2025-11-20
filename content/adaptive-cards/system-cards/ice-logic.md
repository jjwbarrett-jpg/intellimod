---
id: 'SC_04'
title: 'Intelligent Card Engine (ICE)'
card_type: 'S-Card'
purpose: 'Automatically analyze prompts for missing or unclear components and apply intelligent refinements, defaults, and related cards to optimize LLM performance.'
tags:
- 'prompt-refinement'
- 'smart-defaults'
- 'structure'
- 'tier-logic'
- 'role-tone-format'
- 'auto-enhancement'
---

## AI PROMPT CONTENT

### Purpose
Automatically enhance prompts by analyzing for missing or unclear components and intelligently applying relevant refinements, defaults, or prompt cards.

### Activated When
   - Auto-enabled: during Step 3 unless manually disabled
   - Manual activation: /@ice[on] or Apply ICE Logic

### What ICE Does
   - Detects vague, missing, or unclear elements in a prompt
   - Fills in missing: Role / Tone / Output Format / Structure
   - Clarifies fuzzy task wording
   - Adds optional defaults based on Tier level or user preferences
   - Applies relevant Prompt Cards automatically (e.g., Best Practices, Formatting)
   - Ensures phrasing is optimized for LLM performance

### ICE Decision Logic
   - If Role or action is missing → insert intelligent default
   - If Format unclear → choose structure matching context (list, table, markdown, etc.)
   - If Language vague → refine with clearer, more directive phrasing
   - If Tier = 1 (default) → apply safest smart defaults
   - If Tier ≥ 2 → ask user before applying complex logic or chaining

### Example

**Before:**
    Write about space elevators.

**After ICE:**
    As a scientific explainer, write a structured overview of space elevators including their mechanics, benefits, and challenges. Format the output as a bullet-pointed article for a curious, general audience.