---
id: 'PC_BCAST_AGG_001'
title: 'Broadcast & Aggregate Pattern'
card_type: 'P-Card'
category: 'Multi-Agent Coordination & Delegation'
purpose: 'Elicit diverse expert perspectives by broadcasting the same request to multiple persona-configured agents, then aggregate and synthesize a balanced final answer.'
references: []
tags:
  - 'brainstorming'
  - 'aggregation'
  - 'consensus'
  - 'multi-perspective'
  - 'parallel-processing'
---

## AI PROMPT CONTENT

### Goal
Improve solution quality and creativity by running **parallel** expert personas on the same query, then **aggregating** their outputs into a coherent, ranked, or consensus result.

### Roles
- **Dispatcher**: Sends the base query to N persona-configured agents.
- **Persona Agents**: Produce viewpoint-specific analyses (e.g., Skeptic, Optimist, Finance, Marketing, Tech).
- **Aggregator**: Collects responses and synthesizes a single, well-scoped output per rules or an LLM-based reducer.

### Core Technique
- Broadcast a normalized prompt to multiple agents with **distinct system prompts** that enforce different lenses.
- Aggregate via:
  - **Rule-based reducer** (dedupe, cluster themes, rank by evidence).
  - **LLM reducer** with explicit **output contract** (e.g., JSON schema for pros/cons, risks, recommendations).

### Best Practices
- Make personas **meaningfully distinct** (not just tone; change goals, constraints, evidence standards).
- Normalize **input context** so comparisons are fair.
- Use **structured outputs** from each agent to simplify aggregation.
- Handle conflicts explicitly (vote, confidence weighting, tie-break rules).
- Log individual outputs for auditability before synthesis.

### Prompt Pattern

**Dispatcher (Broadcast Skeleton)**
```text
BASE_QUERY: "<your question>"
PERSONAS:
  - "Financial Analyst" -> ROI, costs, risk sensitivity, breakeven
  - "Marketing Strategist" -> TAM/SAM/SOM, segments, GTM, CAC/LTV
  - "Technical Lead" -> feasibility, stack, dependencies, complexity & risks
OUTPUT CONTRACT (per agent): JSON with { "assumptions":[], "analysis":[], "risks":[], "recommendation":"" }
```

### Example

Broadcast Dispatcher
   - Base Query: "Should our company invest in developing a new AI-powered mobile app?"

Prompts sent to parallel agents
   - Agent 1 (Financial Analyst Persona)
"From a financial perspective, analyze the ROI and risks of developing a new AI-powered mobile app."
   - Agent 2 (Marketing Persona)
"From a marketing perspective, analyze the market opportunity and user acquisition strategy for a new AI-powered mobile app."
   - Agent 3 (Technical Lead Persona)
"From a technical perspective, analyze the feasibility, required stack, and development challenges for a new AI-powered mobile app."

### Output Rules
   - Each persona returns the structured JSON per the contract.
   - Aggregator outputs the final synthesized JSON only (no free-form commentary unless requested).

## DEVELOPER NOTES

 ### Compatible Modes
   - orchestration, brainstorming, strategy analysis, risk review, product planning, due diligence.

### Common Uses
   - Strategic decisions requiring multiple lenses (finance, market, tech, legal).
   - Creative ideation where tension between personas sparks novelty.
   - Policy or safety reviews that benefit from adversarial and supportive roles.

### Notes
   - Consider confidence scoring per agent and weight aggregation accordingly.
   - Cap personas (e.g., 3–5) to control cost/latency; use fan-out/fan-in with timeouts.
   - Maintain persona prompts as versioned assets; regression-test their distinctiveness.
   - For high stakes, include a fact-checker persona and a source-citation requirement in each agent’s output contract.
