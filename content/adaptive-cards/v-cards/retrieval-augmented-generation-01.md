---
id: 'VC_097'
title: 'Retrieval-Augmented Generation (RAG)'
card_type: 'V-Card'
purpose: 'Combine a generative model with targeted retrieval of external context to produce factual, up-to-date, and context-specific outputs.'
tags:
- 'rag'
- 'retrieval'
- 'grounding'
- 'hybrid-models'
- 'context-injection'
- 'ranking'
---

## AI PROMPT CONTENT

### Short Definition
Retrieval-Augmented Generation combines a generative model with real-time information retrieval from external sources such as documents, databases, or search engines. Retrieved context is injected before generation to produce more factual, up-to-date, and context-specific outputs.

Domain Focus
   - **Primary fields:** Experimental and Research-Based Strategies
   - **Subdomains:** memory augmentation, search-augmented reasoning, hybrid modeling

### Use Case Triggers
   - “Pull from external sources”
   - “Use document context”
   - “Retrieve before answering”

### Related Scenarios
   - Chatbots accessing knowledge bases or FAQs
   - Research assistants citing documents or sources
   - Long-context workflows where memory or precision is critical

### Key Associations
   - **Keywords:** RAG, hybrid models, retrieval fusion, search-in-loop
   - **Related concepts:** Context Injection, Memory Retrieval, Auto-Documentation, Dynamic Prompting

### Typical AI Biases
   - May cite irrelevant or outdated documents if retrieval is weak
   - Can blend or hallucinate details from retrieved text without attribution
   - Needs precise filtering and ranking to maintain coherence

### Optional Metadata
   - **Recommended P-Cards:** Context Hook, Source Ranker, Fact Integrity Checker
   - **Tier Activation:** 2 suggested when document access is active; 3 when source configs are user editable
   - **Notes:** Works best with systems that allow dynamic context windows or plugin-based retrieval. Careful tuning greatly improves factual grounding.