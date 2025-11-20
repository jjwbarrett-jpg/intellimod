---
id: 'PC_FORMATTER_001'
title: 'Final Output Synthesis & Formatting'
card_type: 'P-Card'
category: 'Unified Web Dev Research'
purpose: 'Separate computation from presentation by routing structured outputs to a dedicated formatter that synthesizes and renders polished, human-readable content.'
references: []
tags:
  - 'synthesis'
  - 'formatting'
  - 'user-experience'
  - 'final-step'
  - 'presentation-layer'
  - 'reporting'
---

## AI PROMPT CONTENT

### Goal
Assign a **final-stage formatter** to transform structured data (JSON, tables, key-value sets) into clear, audience-appropriate content without adding new business logic.

### Core Technique
- Upstream agents/tools perform **data processing** and hand off **structured output**.
- A dedicated **FormatterAgent** converts that structure into a **polished artifact** (Markdown report, email draft, UI panel).

### Best Practices
- Do **not** introduce new logic in the formatter; only **layout, tone, and clarity** improvements.
- Tailor formatting to the **delivery channel** (email, UI component, Markdown doc).
- Enforce an **output contract** (e.g., required sections, heading levels, bullet rules).

### Prompt Pattern (Formatter Agent)
```text
system_prompt: |
  You are a report-writing assistant.
  Convert the provided JSON data into a clean, professional summary using Markdown.
  The summary must include:
  - A main header (= report title),
  - A brief introductory sentence,
  - A bulleted list of key findings.

input_data: |
{
  "report_title": "Q2 Sales Performance",
  "key_findings": [
    "Total revenue increased by 15% to $1.2M.",
    "The 'Fusion' product line was the top performer.",
    "The EMEA region showed the strongest growth at 25%."
  ]
}
```

### Output Rules
   - Preserve heading discipline (#/##/###) and use bulleted lists for findings.
   - Do not invent metrics or conclusions not present in the input data.
   - Keep language concise; prioritize readability and scannability.

## DEVELOPER NOTES

### Compatible Modes
   - presentation layer
   - reporting & summaries
   - UX copy synthesis

### Common Uses
   - Render multi-agent pipeline results into Markdown reports.
   - Format analytics outputs for emails or dashboard panels.
   - Produce printable briefs from raw JSON or tabular data.

### Notes
   - Define a strict schema for input_data and validate before formatting.
   - Pair with Schema Based Validation Loop upstream; the formatter should fail fast on malformed inputs.
   - Maintain template variants per channel (email vs. Markdown vs. UI) and select via a routing flag (e.g., channel: "markdown").
