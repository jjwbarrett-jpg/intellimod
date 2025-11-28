---
id: 'VC_MEM_PRIME'
title: 'Context Priming Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Memory'
purpose: 'Pre-loads the context window with relevant entities and relationships before the main query is processed.'
tags:
  - 'context-loading'
  - 'priming'
  - 'rag-prep'
---

## TECHNIQUE DESCRIPTION
A "Warm Start" protocol. It ensures the AI isn't "cold" when discussing complex topics like "Multi-Agent Setups."

## OPERATIONAL PROTOCOLS

### 1. THE PRIMING INJECTION
**Trigger:** Start of a new turn in an existing project.
**Action:** Inject the **Prime Block** at the very top of the system prompt.

```text
<MEMORY_PRIME_BLOCK>
  [Topic: Multi-Agent Arbitration]
  - Key Concept: "Task Arbitration" was defined as [Definition] in Session 4.
  - Active Strategy: "Leaderless Selection"
  - Last Milestone: "Drafted Protocol V1"
</MEMORY_PRIME_BLOCK>
```

### 2. CONNECTION INSTRUCTION
Directive: "Use the <MEMORY_PRIME_BLOCK> to inform your tone and vocabulary. Do not redefine terms listed there; use them as established facts."