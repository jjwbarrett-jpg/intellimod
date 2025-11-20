---
id: 'VC_027'
title: 'CSP Headers & Browser Protections'
card_type: 'V-Card'
purpose: 'Harden web applications by defining strict Content Security Policies and complementary headers to prevent injection-based attacks and unsafe resource loading.'
tags:
- 'security'
- 'csp'
- 'browser-headers'
- 'injection-protection'
- 'x-frame-options'
- 'x-content-type-options'
---

## AI PROMPT CONTENT

### Category
Web Security

### Summary
Content Security Policy (CSP) headers define which content can be loaded and executed in the browser, preventing many injection-based attacks.

### Core Principles
   - CSP restricts sources for scripts, styles, images, and frames.
   - Headers like X-Frame-Options and X-Content-Type-Options further harden browser behavior.

### Best Practices
   - Use strict CSPs that avoid unsafe-inline where possible.
   - Combine with sanitization and input validation for layered defense.

### Use Cases
   - Preventing prompt injection and UI hijacking in SIGS-admin panels.