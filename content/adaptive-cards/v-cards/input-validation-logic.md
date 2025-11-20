---
id: 'VC_048'
title: 'Input Validation Logic'
card_type: 'V-Card'
purpose: 'Ensure user data conforms to expected types, formats, and constraints before processing or storage to improve reliability and security.'
tags:
- 'validation'
- 'user-input'
- 'form-handling'
- 'frontend'
- 'backend'
- 'security'
---

## AI PROMPT CONTENT

### Category
Security

### Summary
Input validation ensures that user data matches the expected type, format, and constraints before being processed or stored.

### Core Principles
   - Validation prevents unexpected input that can break logic or introduce vulnerabilities.
   - Both frontend (UX) and backend (security) validation are required.

### Best Practices
   - Use HTML5 form validation and JavaScript checks for UX.
   - Mirror validation server-side to prevent bypassing via tools or scripts.
   - Define explicit schemas (e.g., Zod, Joi) for consistent rules across stack.
   - Fail closed: reject or sanitize on invalid input; log validation errors.

### Use Cases
   - Validating email, username, or file uploads in user forms.
   - Pre-checking prompt input for forbidden patterns.