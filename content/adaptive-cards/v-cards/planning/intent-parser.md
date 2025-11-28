---
id: 'VC_PLAN_INTENT'
title: 'Intent & Slot Parsing Logic'
version: '2.0'
card_type: 'V-Card'
category: 'Planning'
purpose: 'Converts natural language into strict JSON parameters and identifies missing "Slots" (variables) required for execution.'
tags:
  - 'nlu'
  - 'slot-filling'
  - 'parameter-extraction'
  - 'tool-use'
---

## TECHNIQUE DESCRIPTION
A translation layer that turns "Human Speak" into "Machine Speak." It identifies **Intent** (Action) and **Slots** (Variables).

## OPERATIONAL PROTOCOLS

### 1. PARSING LOGIC
1.  **Detect Intent:** Map user input to a specific Tool Function (e.g., "Schedule Meeting" -> `calendar_create_event`).
2.  **Scan Slots:** specific tools require specific variables (Time, Date, Email). Check if they exist.
3.  **Validate:** Are the variables in the right format? (e.g., Is the email valid?)

### 2. OUTPUT STATES

**State A: Success (Ready to Run)**
```json
{
  "status": "ready",
  "intent": "calendar_create_event",
  "confidence": 0.98,
  "parameters": {
    "title": "Meeting with Bob",
    "time": "2025-11-26T14:00:00",
    "attendees": ["bob@example.com"]
  }
}
```

**State B: Missing Slots (Ask User)**
```json
{
  "status": "input_required",
  "intent": "calendar_create_event",
  "missing_slots": ["time"],
  "clarification_question": "What time would you like to schedule the meeting with Bob?"
}
```

### 3. AMBIGUITY HANDLING
Rule: If multiple intents are possible, return status: "ambiguous" and list the options.

Rule: Never guess a parameter (e.g., don't assume "tomorrow" means 9 AM unless specified).