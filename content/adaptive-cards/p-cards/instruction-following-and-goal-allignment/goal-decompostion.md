---
id: 'PC_GDSO_001'
title: 'Goal Decompostion Structured Output'
card_type: 'P-Card'
category: 'Instruction Following & Goal Alignment'
purpose: 'Force explicit goal restatement and a step-by-step plan with structured JSON output so alignment can be validated before execution.'
references: []
tags:
  - 'goal-decomposition'
  - 'structured-output'
  - 'alignment'
  - 'planning'
  - 'instruction-parsing'
  - 'chain-of-thought'
---

## AI PROMPT CONTENT

### Goal
Ensure the AI first restates the user’s goal, then produces a concrete execution plan and tool list, all in a strict JSON schema that can be validated before any work begins.

### Core Technique
- **Goal restatement**: Model summarizes the user’s objective in one clear sentence.
- **Plan first**: Model outputs a numbered/bulleted plan as a JSON array of steps.
- **Structured contract**: Entire response must be a **single JSON object** with required keys to enable programmatic checks.

### Best Practices
- Validate the JSON against a schema before proceeding.
- Treat this as a **kickoff** step in multi-agent chains to anchor scope and expectations.
- Keep steps atomic; prefer many small steps over a few vague ones.
- Fail **closed**: if JSON is invalid or fields are missing, request clarification instead of guessing.

### Prompt Pattern (Example)
```yaml
system_prompt: |
  You are a meticulous planning agent. Analyze the user's request and respond with a JSON object containing three keys: "user_goal", "execution_plan", and "required_tools".

  "user_goal" must be a one-sentence summary of what the user wants to achieve.
  "execution_plan" must be an array of strings detailing the specific steps you will take.
  "required_tools" must be an array of the tools or agents you need (e.g., "CodeWriter", "FileSaver").

user_request: "I need to refactor my Python script to be more efficient and then save it as a new file called 'optimized_script.py'."
```
### Output Rules
   - Emit only a single JSON object with keys:
       - user_goal (string)
       - execution_plan (array of strings; each step is imperative and testable)
       - required_tools (array of strings; tool/agent names)
   - No extra prose outside the JSON.
   - Prefer deterministic, lowercase tool identifiers when used downstream.

### Example Output
```json
{
  "user_goal": "Refactor the Python script for efficiency and save it as 'optimized_script.py'.",
  "execution_plan": [
    "Load the existing Python script",
    "Profile the script to identify bottlenecks",
    "Refactor hot functions and data structures",
    "Re-run tests to ensure correctness",
    "Measure performance improvement and document changes",
    "Save the refactored file as 'optimized_script.py'"
  ],
  "required_tools": ["CodeWriter", "Profiler", "TestRunner", "FileSaver"]
}
```
## DEVELOPER NOTES

### Compatible Modes
   - planning, orchestration kickoff, code generation prep, research scoping, multi-agent pipelines.

### Common Uses
   - Convert vague requests into an actionable, verifiable plan.
   - Gate execution behind JSON schema validation and human approval.
   - Feed execution_plan directly into an orchestrator as a task list.

### Notes
   - Maintain a versioned response schema (e.g., gdsov1) to track changes.
   - Add optional fields (assumptions, risks) if needed, but keep required keys minimal.
   - If the user goal is ambiguous, instruct the model to return a clarifications array instead of guessing and halt execution until resolved.
   