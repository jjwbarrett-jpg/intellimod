---
id: 'VC_111'
title: 'Slot & Fallback Patterns'
card_type: 'V-Card'
purpose: 'Compose modular UIs by injecting parent-provided content into child component slots with defined fallbacks to preserve layout and usability.'
tags:
- 'slots'
- 'components'
- 'composition'
- 'fallback'
- 'content-projection'
- 'ui'
---

## AI PROMPT CONTENT

### Category
Modular Architecture — Tier: Core

### Summary
Slot patterns allow parent components to inject markup into child placeholders. Fallback content ensures usability even when no slot data is provided.

### Core Principles
   - Slots act as dynamic placeholders inside a component's layout.
   - Fallback content protects layout integrity and avoids rendering gaps.

### Best Practices
   - Use named slots for clarity in multi-part layouts (e.g., modal header, body, footer).
   - Always define fallback content for slot-based components.

### Use Cases
   - Building IntelliMod cards or dashboard panels with swappable content blocks.