---
id: 'VC_017'
title: 'Component Injection'
card_type: 'V-Card'
purpose: 'Provide components with external dependencies to achieve loose coupling, reusability, and easier testing.'
tags:
- 'components'
- 'dependency-injection'
- 'modularity'
- 'decoupling'
- 'architecture'
- 'testability'
---

## AI PROMPT CONTENT

### Category
Modular Architecture

### Summary
Component injection is a design pattern where components receive their dependencies from an external source rather than creating them internally. This promotes loose coupling and enhances reusability and testability.

### Core Principles
   - Dependencies (services, logic, etc.) are passed into a component via props or context.
   - Control is inverted; components do not manage or instantiate their own dependencies.

### Best Practices
   - Use props for simple injection, and Context API for deeply nested trees to avoid prop-drilling.
   - Separate core logic from UI presentation through injected handlers or stores.

### Use Cases
   - Passing a shared data-fetching service into multiple IntelliMod modules for cleaner state control.