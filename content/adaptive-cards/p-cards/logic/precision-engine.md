---
id: 'PC_PE_001'
title: 'Precision Engine'
card_type: 'P-Card'
category: 'Logic'
purpose: 'Increase specificity, accuracy, and factual rigor by defining terms, tightening scope, and enforcing evidence and format requirements.'
references:
  - 'VC_015' # Cognitive Scaffolding
  - 'VC_024' # C.R.A.F.T.
  - 'VC_074' # Negative Prompting
tags:
  - 'specificity'
  - 'constraints'
  - 'factual-grounding'
  - 'definitions'
  - 'clarification'
---

## AI PROMPT CONTENT

### Goal
Eliminate ambiguity and reduce error by forcing clear definitions, bounded scope, required evidence/citations, and strict output contracts—especially in technical, legal, medical, or other high-stakes contexts.

### Core Technique
- **Define terms**: Require explicit definitions for potentially ambiguous words and acronyms.
- **Tighten bounds**: Specify domain, timeframe, jurisdiction, datasets, and exclusions.
- **Evidence contract**: Mandate citations, data sources, or calculations; disallow unverifiable claims.
- **Constraint schema**: Encode requirements (format, fields, units) and rejection rules for missing evidence.
- **Counterfactual scan**: Ask for edge cases, assumptions, and confidence statements.

### Best Practices
- Prefer **measurable constraints** (units, ranges, dates) over stylistic requests.
- Use **negative prompting** to forbid speculation, hedging, or extraneous prose when accuracy is critical.
- Include **jurisdiction/version pins** (e.g., guideline version, code edition, API version).
- Separate **facts vs. interpretation** and tag each with source confidence.
- Fail **closed**: return a clarification request if any mandatory field is missing.

### Prompt Pattern (Activation Cues)
Use when the user asks:
- “Ensure every term is defined clearly.”
- “Tighten the bounds of this prompt to avoid misinterpretation.”
- “Clarify what data or citations are expected in output.”

**Sample Modifiers**
- “Enhance specificity”
- “Factual grounding”
- “Tighten constraints”

**Meta-Prompt Skeleton**
```text
You are a precision engine. Given TASK, produce:
1) Definitions: list all key terms with precise meanings and units.
2) Scope & Constraints: domain, jurisdiction, timeframe, inclusions/exclusions.
3) Evidence Plan: required sources/citations, computations, or datasets.
4) Output Contract: strict schema (fields, units, formats), rejection conditions.
5) Assumptions & Risks: explicit assumptions, edge cases, confidence.

Return JSON only.
```
### Output Rules
   - Emit a single JSON object with keys:
       - definitions (array of {term, definition, unit?})
       - scope_constraints (object: domain, timeframe, jurisdiction, inclusions, exclusions)
       - evidence_plan (array of required sources/methods)
       - output_contract (object: schema, format, citation_rules, rejection_conditions)
       - assumptions_risks (object: assumptions[], edge_cases[], confidence: 0–1)
   - Reject the task with a clarifications array if constraints are underspecified.
   - No narrative outside the JSON unless explicitly requested.

## DEVELOPER NOTES

### Compatible Modes
   - technical/legal/medical drafting, data analysis, compliance writing, API spec generation, evaluation.

### Common Uses
   - Pin down exact requirements for regulated or safety-critical outputs.
   - Convert vague requests into testable, schema-checked deliverables.
   - Enforce citation and calculation requirements for claims.

### Notes
   - Pair with Condenser and Aligner to keep prompts compact and on-mission.
   - Maintain versioned domain glossaries and jurisdiction maps for reuse.
   - Add automated validators that check units, date ranges, and citation presence before accepting outputs.
   