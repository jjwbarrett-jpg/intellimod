---
id: 'VC_047'
title: 'Input Sanitization Techniques'
card_type: 'V-Card'
purpose: 'Prevent XSS and injection vulnerabilities by removing or neutralizing harmful characters in user inputs before storage or rendering.'
tags:
- 'security'
- 'sanitization'
- 'xss'
- 'injection'
- 'html'
---

## AI PROMPT CONTENT

### Category
Security

### Summary
Input sanitization removes or neutralizes harmful characters in user-provided input to prevent malicious scripts or data from being executed in the system.

### Core Principles
   - Unsanitized input can lead to XSS (Cross-Site Scripting) and code injection vulnerabilities.
   - Sanitization removes or escapes HTML, scripts, or special characters that could be executed.

### Best Practices
   - Sanitize all user-generated content before rendering it in the DOM or saving it to a database.
   - Use trusted libraries like DOMPurify or built-in server sanitizers (e.g., Django, Express).
   - Validate and encode output appropriate to context (HTML, URL, JS, CSS).

### Use Cases
   - Sanitizing chatbot input before display.
   - Cleaning HTML or Markdown from public user submissions.