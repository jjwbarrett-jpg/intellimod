---
id: 'PC_IPW_001'
title: 'Image Prompt Weaver'
card_type: 'P-Card'
category: 'Visuals'
purpose: 'Convert concepts, scenes, or data into a structured, model-ready image prompt that preserves subject, style, composition, and constraints.'
references: [] 
tags:
  - 'image-generation'
  - 'visual-prompting'
  - 'composition'
  - 'style'
  - 'constraints'
  - 'cinematic'
  - 'aspect-ratio'
---

## AI PROMPT CONTENT

### Goal
Translate ideas into consistent, high-fidelity image prompts by separating **what** to depict (subjects), **how** to depict it (style, lighting, camera), and **what to avoid** (negative cues), while targeting the syntax of the chosen image model.

### Activation Cues
- "Turn this scene into a prompt for [image AI]."
- "Format this story beat into a stylized landscape image."
- "Use cinematic lighting and a 16:9 ratio in the result."

### Core Technique
- Decompose the request into fields: **subject**, **setting**, **composition**, **camera/lens**, **lighting**, **color/mood**, **style references**, **detail constraints**, **negative cues**, **aspect ratio/output**.
- Emit a **final prompt block** tailored to the selected model (e.g., Midjourney, Stable Diffusion, Firefly, Leonardo, Hailuo), preserving the same semantic content but mapping to model-specific tokens.

### Best Practices
- Prefer **concrete nouns** and **visual verbs**; avoid abstract adjectives unless paired with visual anchors.
- Lock **composition** (framing, perspective, depth) and **lighting** (time of day, quality, direction).
- Include **aspect ratio** explicitly (e.g., 16:9) and **style anchors** (artist-era, film stock, lens).
- Use a short **negative list** to prevent common artifacts (e.g., blur, extra limbs, watermark).
- Keep the spec concise (5–12 short clauses) to reduce prompt drift.

### Prompt Pattern (Model-Agnostic Spec)
[IMAGE PROMPT SPEC]
subject: <primary subjects and their key attributes>
setting: <location, time, environment details>
composition: <framing, perspective, rule-of-thirds/leading lines, foreground-midground-background>
camera: <camera type, lens focal length, depth of field, shot type (wide/close-up)>
lighting: <source, quality, direction, time-of-day, cinematic terms>
color_mood: <palette, mood adjectives grounded in color/lighting>
style: <art style, medium, era, film stock, texture>
detail_constraints: <must-have elements, symmetry, typography if any>
negative: <things to avoid, e.g., low-res, jpeg artifacts, watermark>
aspect_ratio: <e.g., 16:9>
output: <render intent, e.g., ultra-detailed, photoreal, illustrative>
model_target: <midjourney|stable-diffusion|firefly|leonardo|hailuo>

### Example (Filled Spec)
[IMAGE PROMPT SPEC]
subject: solitary pine on a cliff above stormy sea, gulls circling
setting: rugged coastline at dusk, distant lighthouse, rain mist
composition: wide establishing shot, low-angle from cliff edge, leading lines from shoreline
camera: full-frame DSLR, 24mm wide lens, deep focus
lighting: cinematic overcast rim light, moody dusk glow, volumetric haze
color_mood: cool teal-blues with warm lighthouse highlights, melancholic but hopeful
style: fine-art landscape photography, long exposure water, subtle grain
detail_constraints: visible cliff texture, lighthouse beam cutting mist, crisp silhouette of pine
negative: blurry details, extra lighthouses, text, watermark, oversaturation
aspect_ratio: 16:9
output: high fidelity, dramatic realism
model_target: midjourney

### Model-Specific Output Mapping

**Midjourney (example)**
solitary pine on a cliff above a stormy sea, gulls circling, rugged coastline at dusk, distant lighthouse in rain mist :: wide establishing shot, low-angle from cliff edge, leading lines from shoreline :: full-frame DSLR look, 24mm wide lens, deep focus :: cinematic overcast rim light, volumetric haze :: cool teal-blues with warm lighthouse highlights, melancholic :: fine-art landscape photography, long exposure water, subtle grain :: visible cliff texture, lighthouse beam through mist, crisp pine silhouette --ar 16:9 --v 6 --stylize 250 --chaos 0
--no text, watermark, blurry details, extra lighthouses, oversaturation

**Stable Diffusion / SDXL (example)**
PROMPT: solitary pine on a cliff above a stormy sea, gulls circling; rugged coastline at dusk; distant lighthouse in rain mist; wide establishing shot; low-angle from cliff edge; leading shoreline lines; 24mm wide lens look; deep focus; cinematic overcast rim light; volumetric haze; cool teal-blues with warm lighthouse highlights; melancholic mood; fine-art landscape; long exposure water; subtle grain; visible cliff texture; lighthouse beam through mist; crisp pine silhouette.
NEGATIVE PROMPT: text, watermark, blurry details, duplicate lighthouses, oversaturation, extra limbs
PARAMS: aspect_ratio=16:9, cfg=7.0, steps=30, sampler=DPM++ 2M Karras


### Output Rules
- Emit **one final prompt** in the target model’s syntax, plus a compact **NEGATIVE/--no** block.
- Include **aspect ratio** and essential camera/lighting cues.
- Keep within **concise token limits**; avoid multi-paragraph prose.

## DEVELOPER NOTES

### Compatible Modes
- Image generation
- Cross-modality storytelling and visualization

### Common Uses
- Translate narrative beats into consistent visual prompts.
- Maintain composition and style across a multi-image sequence.
- Hand off structured prompts to Midjourney, Leonardo, Firefly, Hailuo, or SDXL.

### Notes
- Maintain a small **adapter layer** to map `[IMAGE PROMPT SPEC]` fields to each model’s syntax/tokens.
- Store a **style library** (lighting, lenses, palettes) for reusable, consistent art direction.
- Respect platform safety/content policies; filter or adjust negative lists accordingly.
- For sequences, carry over **subject/composition/style** fields; vary **setting/lighting** for progression.
