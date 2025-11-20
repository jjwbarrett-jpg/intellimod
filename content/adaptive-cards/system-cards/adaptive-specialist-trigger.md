---
id: 'SC_02'
title: 'Adaptive Specialist Trigger (AST)'
card_type: 'S-Card'
purpose: 'Analyze a user’s prompt or intent and dynamically activate the most relevant specialist role or prompt card as a second-pass enhancer.'
tags:
- 'adaptive-routing'
- 'specialist-roles'
- 'context-analysis'
- 'middleware'
- 'prompt-refinement'
- 'multi-agent'
---

## AI PROMPT CONTENT

### Notes
**Status:** Marked experimental due to architectural complexity. Revisit after IntelliMod Web Service prototype stabilizes.

### System Overview
   - **Type:** System Logic Module
   - **Scope:** IntelliMod v2+ / Nucleus OS
   - **Tags:** middleware, adaptive-routing, role-activation, context-analysis, modular-system
   - **Status:** In Development (Triggers Specialist Prompt Card Library)

### Summary
The Adaptive Specialist Trigger (AST) is a modular middleware that analyzes a user's prompt or intent and dynamically activates the most relevant Specialist Role or Prompt Card for refinement. It introduces a second-pass enhancement layer after the general IntelliMod prompt structure is generated.

### Purpose
   - Enable context-sensitive enhancements from expert roles
   - Automate prompt tuning without burdening the user
   - Provide a scalable method to manage multi-domain precision
   - Integrate with a future Council Model and multi-agent chains

### Trigger Logic (Example Flow)
   1. User submits a goal or prompt request.
   2. IntelliMod builds base structure (Steps 1–5).
   3. AST parses the intent clipboard or tags and routes:
       - [image] → Visual Prompt Engineer
       - [voice] → Voice Script Specialist
       - [legal] → Legal Precision Card
       - [code] → Coding & Automation Card
   4. AST activates the matching Specialist Card.
   5. User receives enhanced prompt with optional override and accept/refine/skip choices.

### Linked Specialist Roles (Planned Prompt Cards)
   - Visual Prompt Engineer
   - Voice Script Specialist
   - Legal Precision Agent
   - Scientific Research Optimizer
   - Code Generator & Automation Assistant
   - Copywriting Enhancer
   - Data Interpreter / Report Formatter

### Design Notes
   - Non-intrusive; fallback to base IntelliMod behavior if no specialist applies.
   - Future versions may include AI-based context classifiers and user-defined triggers.
   - Integrates with Clipboard, Tagging, and Role Suggestion modules of the IntelliMod Web Service.

### Development Notes
   - **Storage:** 01_System_Cards/ or 03_IntelliMod_Engine_Modules/
   - **Linking:** Connect to specialist P-Card directory when active
   - **UI:** Prepare toggle or modal for manual activation in early builds