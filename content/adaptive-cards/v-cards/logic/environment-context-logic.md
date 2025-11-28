id: 'VC_LOGIC_ENV'
title: 'Environment-Aware Output Control'
version: '2.0'
card_type: 'V-Card'
category: 'Logic'
purpose: 'Switches output verbosity based on the system environment variable.'
tags:
  - 'env-control'
  - 'debug-mode'
  - 'production'
---

## TECHNIQUE DESCRIPTION
Switches AI behavior between **Development Mode** (verbose debugging) and **Production Mode** (clean execution).

## OPERATIONAL PROTOCOLS

### 1. MODE DETECTION
The system checks the variable `ENV_MODE` (or `debug=true` in the prompt payload).

**Option A: DEVELOPMENT MODE (`ENV_MODE = "DEV"`)**
* **Action:** Append a "Reasoning Block" to the output.
* **Format:**
    ```text
    [DEBUG LOG]
    > Intent Detected: [X]
    > Routing: [Y]
    > Latency: [Z]ms
    ---
    [FINAL OUTPUT]
    (Content)
    ```

**Option B: PRODUCTION MODE (`ENV_MODE = "PROD"`)**
* **Action:** SUPPRESS all meta-text.
* **Constraint:** Output *only* the requested artifact. No "Here is the code." No "I have processed your request."