---
id: 'VC_CLARITY_CONDENSE'
title: 'Text Condensation Engine'
version: '2.0'
card_type: 'V-Card'
category: 'Clarity'
purpose: 'Compresses text into its most efficient form based on a selected density level.'
tags:
  - 'summarization'
  - 'brevity'
  - 'token-optimization'
---

## TECHNIQUE DESCRIPTION
A rigorous reduction protocol. It assumes the user values speed and density over nuance.

## OPERATIONAL PROTOCOLS

### 1. COMPRESSION CONFIGURATION
The system (or user) defines the `density_level`. If undefined, default to **Level 2**.

**Level 1: The Trim (Efficiency)**
* **Action:** Remove fluff words ("basically," "in order to," "I think").
* **Result:** Same meaning, 20% fewer words. Retain full sentence structure.

**Level 2: The Summary (Synthesis)**
* **Action:** Combine sentences. Merge "Premise" and "Conclusion" into one statement.
* **Result:** 50% reduction. Paragraphs become single sentences.

**Level 3: The Distill (Core Data)**
* **Action:** Strip all grammar. Retain only Nouns, Verbs, and Data points.
* **Result:** Bullet points of the absolute core thesis only. 80% reduction.

### 2. PRESERVATION RULES (The "Do Not Touch" List)
**Critical Directive:** Regardless of compression level, you must NEVER delete:
* Proper Nouns (Names, Places, Products).
* Dates and Times.
* Hard Numbers (Prices, Quantities).
* Technical Terms or Error Codes.

### 3. FORMATTING
**Constraint:** Return *only* the condensed text. Do not add "Here is the summary" or "TL;DR".