---
id: 'PC_SUST_001'
title: 'Stateful User Session Tracking'
card_type: 'P-Card'
category: 'Memory'
purpose: 'Maintain persistent, server-side session state (auth, project, UI prefs) to ensure consistent personalization and flow across interactions.'
references: []
tags:
  - 'session-state'
  - 'persistence'
  - 'user-data'
  - 'bff'
  - 'state-tracking'
---

## AI PROMPT CONTENT

### Goal
Provide durable, consistent personalization by storing and updating user session state server-side (BFF/SIGS), independent of the chat context window.

### Core Technique
- **Server-side session object**: Maintain a per-user session in a fast store (e.g., Redis), keyed by a secure token.
- **Token-mediated access**: Each request includes a **session_id** or JWT; BFF/SIGS loads, updates, and persists state.
- **Clear separation**: Keep **UI state** (theme, language) and **task state** (current project, step) separate from conversational memory.

### Best Practices
- Keep the **frontend stateless**; centralize session logic in the backend.
- Version session schemas; perform **migrations** on change.
- Apply **TTL + sliding expiration**; refresh on activity.
- Store **minimal PII**; encrypt sensitive fields; follow least-privilege access.
- Emit **audit trails** for changes (who/when/what).
- Distinguish **conversational memory** from **application/session state** to avoid coupling.

### Prompt Pattern (Example)
```json
// Session object stored in Redis, keyed by session_id
{
  "session_id": "user-abc-123",
  "user_id": "u-456",
  "auth_status": "authenticated",
  "current_project_id": "proj-789",
  "ui_preferences": {
    "theme": "dark",
    "language": "en"
  },
  "last_active_timestamp": 1753170386
}
```

### Output Rules
   - Downstream agents must read session first and write back only changed fields.
   - If session is missing/expired, return a re-auth / re-init signal.
   - Never echo sensitive fields into model prompts; pass handles/IDs instead.

## DEVELOPER NOTES

### Compatible Modes
   - multi-step apps, assistants with user accounts, dashboards, code workspaces, long-running projects.

### Common Uses
   - Persist current project/task across chats.
   - Enforce personalization (theme/language) and feature flags.
   - Coordinate agent workflows using shared session keys.

### Notes
   - Use Redis hashes or a document store; set namespacing by environment (e.g., prod:sessions:*).
   - Add schema version and ETag to prevent write conflicts; prefer upserts with CAS.
   - Implement rate limits and revocation for tokens; rotate keys periodically.
   - Log minimal diffs (before/after) for observability without leaking content.
   