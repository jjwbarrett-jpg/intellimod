---
id: 'PC_EPI_001'
title: 'Explicit Profile Injection'
card_type: 'P-Card'
category: 'User Profiling Personalization'
purpose: 'Inject a user’s explicit preferences, settings, and profile as a structured context block so outputs consistently match desired style, format, and complexity.'
references: []
tags:
  - 'personalization'
  - 'user-profile'
  - 'settings'
  - 'explicit-context'
  - 'customization'
---

## AI PROMPT CONTENT

### Goal
Ensure responses consistently follow the user’s declared preferences by retrieving profile data and injecting it as a **static, machine-readable context layer** in the prompt.

### Core Technique
- Retrieve user profile fields (e.g., **expertise_level**, **preferred_language**, **output_preference**, **tone**).
- Insert them into a dedicated **profile context block** (usually in the system prompt) with clear keys and stable schemas.

### Best Practices
- Make profile settings **visible and editable** by the user.
- Use **concise keys** and normalized values (e.g., `expertise_level: "expert"`).
- Keep profile blocks **separate** from transient conversation context to avoid drift.
- Validate and version the profile schema to maintain compatibility across agents.

### Prompt Pattern (Template + Example)

**Template**
[PROFILE CONTEXT]
user_profile:
name: "<name>"
role: "<role>"
expertise_level: "<beginner|intermediate|expert>"
preferred_language: "<e.g., Go, Python>"
output_preference: "<instruction on format/order>"
tone: "<concise|friendly|formal|...>"

[USER QUERY]
user_query: "<user request>"

**Example**
[PROFILE CONTEXT]
user_profile:
name: "Brenda"
role: "Senior DevOps Engineer"
expertise_level: "expert"
preferred_language: "Go"
output_preference: "Provide code first, then a brief explanation."
tone: "concise"

[USER QUERY]
user_query: "Show me how to set up a CI/CD pipeline for a microservice."


### Output Rules
- Follow **output_preference** ordering and **preferred_language** by default.
- Match **tone** and **expertise_level** (skip basics for experts; add scaffolding for beginners).
- If a preference conflicts with safety or policy, **explain the constraint** and proceed safely.

## DEVELOPER NOTES

### Compatible Modes
- onboarding/personalization flows, assistants with persistent settings, documentation helpers, coding copilots.

### Common Uses
- Enforce code language preferences and **result formatting**.
- Maintain consistent tone and complexity across sessions.
- Power **team-wide presets** (e.g., org style guides) via shared profiles.

### Notes
- Store profile separately from conversation history; inject on each turn for determinism.
- Provide **override controls** per request (e.g., “ignore tone; be extremely brief”).
- Audit: log which profile fields influenced the response for transparency and debugging.
