---
id: 'VC_096'
title: 'Responsive Units & Typography'
card_type: 'V-Card'
purpose: 'Guide responsive UI design by using relative CSS units and fluid sizing to achieve scalable, accessible typography and layouts across devices.'
tags:
- 'css'
- 'responsive-design'
- 'typography'
- 'rem'
- 'viewport-units'
- 'accessibility'
---

## AI PROMPT CONTENT

### Category
Responsive Design — Tier: Core

### Summary
Modern responsive UIs rely on relative units like rem, em, vw, vh, and %. These units allow interfaces to adapt to screen size and user preferences. rem is preferred for predictable global scaling; vw and vh are useful for macro layouts.

### Core Principles
   - **rem:** scalable base tied to root font size
   - **em:** scales relative to parent or self (context sensitive)
   - **vw / vh:** fluid units tied to viewport width and height
   - **clamp():** enables fluid resizing with minimum and maximum bounds

### Best Practices
   - Set base html font-size to 62.5% for easier rem math
   - Use rem for padding, font size, and spacing
   - Avoid px for layout unless absolutely necessary
   - Use clamp() for hybrid fluid–fixed sizing

### Use Cases
   - Typography scaling
   - Component spacing
   - Full-height hero sections