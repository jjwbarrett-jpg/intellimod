---
id: 'VC_DATA_MULTIMODAL'
title: 'Multi-Modal Analysis Protocol'
version: '2.0'
card_type: 'V-Card'
category: 'Data'
purpose: 'Aligns the analysis of Text, Image, and Audio inputs to ensure cross-modal consistency.'
tags:
  - 'vision'
  - 'audio'
  - 'multimodal'
  - 'embedding-alignment'
---

## TECHNIQUE DESCRIPTION
A "Synesthesia" tool. It forces the AI to look at the image using the context of the text.

## OPERATIONAL PROTOCOLS

### 1. THE ALIGNMENT CHECK
**Trigger:** Input contains both Text and Image/Audio.
**Action:** Do not analyze them separately.
* *Bad:* "The image shows a cat. The text is a poem about sadness."
* *Good:* "The image shows a cat in shadow [Visual], which reinforces the melancholic tone of the poem [Text]."

### 2. THE VISION DIRECTIVE
**Rule:** When describing images, use the **Layered Scan**:
1.  **Literal Layer:** What objects are present?
2.  **Semantic Layer:** What is the mood/vibe?
3.  **Context Layer:** How does this relate to the user's prompt?

### 3. OUTPUT FORMAT
**Constraint:** If asked to "Read this chart," output the raw data as a Markdown Table first, then analyze it.