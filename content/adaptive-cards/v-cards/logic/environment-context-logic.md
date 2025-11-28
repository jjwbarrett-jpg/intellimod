---
id: 'VC_LOGIC_ENV'
title: 'Environment-Aware Output Control'
card_type: 'V-Card'
category: 'Logic'
purpose: 'Dynamically adjust output verbosity and diagnostic detail based on runtime environment indicators.'
tags:
  - 'environment-control'
  - 'verbosity-switching'
  - 'debug-mode'
  - 'production-optimization'
---

## TECHNIQUE DESCRIPTION
Switches AI output behavior between **Development Mode** (verbose diagnostics) and **Production Mode** (concise execution) based on explicit or implicit environment indicators.

---

## MODE DETECTION

### Trigger Keywords
**Development Mode Indicators:**
- "debug", "development", "dev mode", "verbose"
- "show reasoning", "explain", "step-by-step"
- "diagnostic", "trace", "thinking process"

**Production Mode Indicators:**
- "production", "live", "final only", "concise"
- "no explanation", "code only", "raw output"
- "minimal", "compact", "clean output"

**Default Behavior:**
If no indicators present → **Production Mode**

---

## BEHAVIORAL PROTOCOLS

### 🛠️ Development Mode (Verbose)
**When Activated:**
- Provide a [Reasoning Block] before the final output
- Include decision rationale, assumptions, and edge cases
- Use diagnostic formatting (e.g., nested bullets, step markers)
- After reasoning, deliver the requested output

**Example Output Structure:**
```text
[Development Diagnostics]
* Detected pattern: [X]
* Assumption: [Y]
* Edge case consideration: [Z]

[Final Output]
<requested content>
🚀 Production Mode (Concise)
When Activated:

Suppress all reasoning, diagnostics, and explanations

Emit only the final requested artifact

Ensure output is clean, parseable, and ready for direct use

No commentary, preamble, or meta-text

PRIORITY RULES
P-Card Override: If an active P-Card (persona) requires a specific verbosity or style, that takes precedence over environment mode.

Explicit User Request: User instructions always override default mode behavior.

INTEGRATION NOTES
With ICE Logic: Environment mode applies AFTER ICE fills gaps.

With CRAFT: Environment mode affects the Format component of CRAFT (Dev = Structured, Prod = Minimal).

DEVELOPER NOTES
Compatible With: Code generation, Technical documentation, Prompt refinement. Limitations: Cannot detect environment from system-level variables (NODE_ENV) unless passed in via prompt text.
