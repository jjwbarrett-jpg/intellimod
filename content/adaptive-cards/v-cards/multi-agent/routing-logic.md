---
id: 'VC_AGENT_ROUTING'
title: 'Role-Based Routing Logic'
card_type: 'V-Card'
category: 'Multi-Agent'
purpose: 'Classifies user intent and routes it to the correct specialist agent.'
tags:
  - 'routing'
  - 'classification'
  - 'dispatch'
---

## TECHNIQUE DESCRIPTION
The "Switchboard Operator." It decides who gets the call.

---

## OPERATIONAL PROTOCOLS

### 🔀 ROUTING TABLE
**Analyze Intent:**
* **Coding Request:** -> Route to [CodeWriterAgent]
* **Data Question:** -> Route to [DataAnalyzerAgent]
* **Story/Tone:** -> Route to [CreativeWriterAgent]

### 📦 HANDOFF PACKET
**Structure:**
```json
{
  "target_agent": "CodeWriterAgent",
  "task": "Write a Python script...",
  "context": { "language": "python", "libraries": ["pandas"] },
  "constraints": ["No comments", "Production ready"]
}
```