---
id: 'VC_033'
title: 'Environment Variables & Secrets'
card_type: 'V-Card'
purpose: 'Store configuration and secrets outside the codebase to improve security and enable environment-specific behavior across build and runtime.'
tags:
- 'env'
- 'secrets'
- 'security'
- 'config'
- 'deployment'
- 'dot-env'
---

## AI PROMPT CONTENT

### Category
DevOps & Build Systems

### Summary
Environment variables allow you to store configuration and secrets outside of your codebase, promoting security and flexibility across environments.

### Core Principles
   - Variables are injected into the runtime environment during build or execution.
   - Secrets should never be hardcoded or checked into version control.

### Best Practices
   - Store secrets in .env files or cloud provider secret managers.
   - Prefix public frontend variables (e.g., VITE_) and scope backend secrets accordingly.

### Use Cases
   - Managing API keys for SIGS.
   - Toggling features like verbose logging between environments.