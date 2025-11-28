---
id: 'VC_MEM_RAG'
title: 'Knowledge Retrieval (RAG)'
card_type: 'V-Card'
category: 'Memory'
purpose: 'Injects external knowledge (docs, policies) into the prompt.'
tags:
  - 'rag'
  - 'knowledge-base'
  - 'external-data'
---

## TECHNIQUE DESCRIPTION
A bridge to the outside world. It fetches facts from your database.

---

## OPERATIONAL PROTOCOLS

### 📥 INJECTION FORMAT
**Rule:** Retrieved chunks must be clearly labeled.
```text
<RETRIEVED_CONTEXT>
[Source: policy.md]
"Employees must wear badges at all times."
</RETRIEVED_CONTEXT>
```

🔒 CITATION RULE
Directive: If you use a fact from the retrieved context, you MUST cite the source.

Example: "According to the policy (policy.md), badges are required."