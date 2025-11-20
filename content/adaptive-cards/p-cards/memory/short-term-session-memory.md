---
id: 'PC_STSM_001'
title: 'Short-Term Session Memory'
card_type: 'P-Card'
category: 'Memory'
purpose: 'Maintain session context within fixed token limits using rolling summaries and a sliding window of recent turns.'
references: []
tags:
  - 'session-memory'
  - 'context-window'
  - 'state-management'
  - 'short-term'
  - 'summarization'
---

## AI PROMPT CONTENT

### Goal
Sustain relevant conversational context in a single session by summarizing older turns and keeping only the most pertinent recent exchanges in view.

### Core Technique
- **Rolling summary**: Periodically summarize older turns via a helper call; replace raw history with a compact summary.
- **Sliding window**: Include only the last **N** user/assistant turns plus the rolling summary in the prompt.
- **Pin the origin**: Preserve the initial user goal in a fixed slot to prevent drift.

### Best Practices
- Combine the rolling summary with a **pinned initial query/goal** to anchor intent.
- Offload context management to **BFF/SIGS** so the client stays simple and stateless.
- Guard against summary drift with lightweight **checksums/versioning** and occasional **re-summarization**.
- Redact sensitive data before persisting summaries.

### Prompt Pattern (Example)
```yaml
# Injected by the SIGS layer

conversation_summary: >
  The user is debugging a Python web scraper using 'requests' and 'BeautifulSoup'.
  They fixed a network error; current focus is HTML parsing selectors.

initial_goal: >
  Help the user debug and improve their Python scraper reliably.

recent_turns:
  - role: user
    content: "Okay, it's failing on parsing the HTML. What's the best way to select an element by its ID?"
  - role: assistant
    content: "Use soup.find(id='main-content') to select by ID."
current_user_query:
  content: "What about by class name?"

assistant_instructions: >
  Answer concisely. If multiple classes are involved, show at least one safe pattern.
```

### Output Rules
   - Prefer concise answers that reference the summary and last N turns only when needed.
   - If context seems insufficient, return a context_gap note requesting a brief recap.
   - Do not re-expand the full history; keep replies bounded.

## DEVELOPER NOTES

### Compatible Modes
   - chat assistants, coding copilots, support bots, research aides, multi-step troubleshooting.

### Common Uses
   - Keep sessions coherent despite token limits.
   - Retain long-running debugging or drafting context.
   - Maintain a stable “north star” via the pinned initial goal.

### Notes
   - Tune N based on model/context size; e.g., 4–8 turns.
   - Store conversation_summary with a version and timestamp; periodically re-roll to reduce drift.
   - Add automated tests that simulate long sessions to verify continuity under summarization. 
   