---
id: 'VC_MEM_SHORT'
title: 'Rolling Context Buffer'
version: '2.0'
card_type: 'V-Card'
category: 'Memory'
purpose: 'Manages the short-term context window using a First-In-First-Out (FIFO) sliding window with a Pinned Anchor.'
tags:
  - 'context-window'
  - 'short-term-memory'
  - 'buffer-logic'
---

## TECHNIQUE DESCRIPTION
Keeps the conversation fresh by discarding old chatter while preserving the Prime Directive.

## OPERATIONAL PROTOCOLS

### 1. THE PINNED ANCHOR
**Rule:** Index 0 of the context list MUST ALWAYS be the **System Prompt** + **Initial User Goal**.
* *Never* delete this, even if the window is full.

### 2. THE SLIDING WINDOW
**Rule:** Maintain a window of **N** turns (e.g., 10).
* **If** `current_turns > N`:
    1.  Keep Index 0 (Anchor).
    2.  Drop Index 1 (Oldest Message).
    3.  Shift Index 2-N up.
    4.  Append New Message.

### 3. SUMMARY INJECTION
**Option:** When dropping Index 1, summarize it and append it to `memory_summary` in the State Object so the data isn't lost entirely.