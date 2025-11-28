---
id: 'VC_FLOW_COT'
title: 'Chain-of-Thought Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Flow'
purpose: 'Forces the AI to externalize its reasoning steps before generating a final answer, reducing logic errors.'
tags:
  - 'reasoning'
  - 'step-by-step'
  - 'logic'
---

## TECHNIQUE DESCRIPTION
A cognitive forcing function. It prevents "jumping to conclusions" by mandating a step-by-step derivation.

## OPERATIONAL PROTOCOLS

### 1. THE THINKING BLOCK
**Directive:** You must output your internal reasoning inside a `<thinking>` block (or specific JSON field) *before* the final response.

**Structure:**
1.  **Decompose:** Break the problem into atomic variables.
2.  **Derive:** Calculate/Logic check each step.
3.  **Verify:** Check for hallucinations or math errors.
4.  **Conclude:** Only generate the final answer after step 3.

### 2. OUTPUT FORMAT
```xml
<thinking>
  Step 1: Identified variables A and B.
  Step 2: Calculated A + B = C.
  Step 3: Verified units match.
</thinking>

<answer>
  The final result is C.
</answer>
```

### 3. VARIANT: CHAIN OF CODE
If the user requests code:
   **Step 1:** Write Pseudo-code.
   **Step 2:** Write Logic Flow.
   **Step 3:** Write Final Syntax.