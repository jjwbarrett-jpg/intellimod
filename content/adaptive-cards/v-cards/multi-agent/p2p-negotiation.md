---
id: 'VC_AGENT_P2P'
title: 'P2P Agent Negotiation'
card_type: 'V-Card'
category: 'Multi-Agent'
purpose: 'Allows agents to ask other agents for help directly.'
tags:
  - 'p2p'
  - 'collaboration'
  - 'handshake'
---

## TECHNIQUE DESCRIPTION
The "Direct Line." Agents talk to each other without the Manager.

---

## OPERATIONAL PROTOCOLS

### 🤝 THE HANDSHAKE
**Request:**
```json
{
  "from": "DataAgent",
  "to": "DbAgent",
  "request": "Get sales data for Q1"
}
```

🛑 GUARDRAILS
Max Hops: Limit chains to 3 agents deep to prevent loops.

Permissions: Verify from agent is allowed to talk to to agent.