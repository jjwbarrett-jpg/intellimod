---
id: "gemini-2.5-pro"
title: "Gemini-2.5-Pro – Model Card"
card_type: "model-card"
provider: "google"
---

```json
{
  "id": "gemini-2.5-pro",
  "model_string": "gemini-2.5-pro-002",
  "provider": "google",
  "type": "chat",
  "modalities": ["text", "code", "image", "audio", "video"],
  "context_length": 1048576,
  "extended_context": {
    "standard": "1M tokens",
    "extended": "2M tokens (via allowlist)",
    "note": "First 32k tokens are effectively 'hot' (fastest retrieval)"
  },
  "max_output_tokens": 8192,
  "knowledge_cutoff": {
    "reliable_cutoff": "2025-01",
    "training_data_through": "2025-03",
    "note": "Standard Google Grounding covers events post-cutoff"
  },
  "release_date": "2025-06-17",
  "pricing": {
    "input_short": "$1.25 per million tokens (≤128k context)",
    "input_long": "$2.50 per million tokens (>128k context)",
    "output_short": "$5.00 per million tokens (≤128k context)",
    "output_long": "$10.00 per million tokens (>128k context)",
    "context_caching": "75% discount on cached tokens"
  },
  "strengths": [
    "highly stable 'workhorse' performance for production apps",
    "massive multimodal context (1M+) at a lower price point than 3.0",
    "excellent at 'in-context learning' (uploading a manual and asking Qs)",
    "native audio/video understanding (no transcoding needed)",
    "strong integration with Firebase and Vertex AI stacks",
    "lower latency than 3.0 (no 'thinking' pause)"
  ],
  "quirks": [
    "can be 'lazy' with code generation (often abbreviates with // ...rest of code)",
    "refuses to output copyright lyrics/text more aggressively than 3.0",
    "struggles with complex logic puzzles that require multi-step planning (use 3.0 for this)",
    "occasionally hallucinates specific citations in very long (>500k) contexts"
  ],
  "best_for": [
    "RAG_(Retrieval_Augmented_Generation)",
    "video_summarization_and_qa",
    "high_volume_text_processing",
    "translation_and_localization",
    "maintaining_legacy_codebases",
    "chatbots_requiring_low_latency"
  ],
  "avoid_for": [
    "autonomous_agent_loops (can get stuck in loops)",
    "complex_mathematical_proofs",
    "generating_entire_apps_from_scratch (use 3.0)",
    "highly_nuanced_creative_writing (can sound robotic)"
  ],
  "access_method": ["web", "vertex_ai_api", "firebase_genkit"],
  "prompt_style": {
    "preferred_format": "explicit_instructions",
    "tips": [
      "break complex tasks into separate prompts (chaining) rather than one big prompt",
      "explicitly tell it 'do not abbreviate code' to avoid lazy outputs",
      "use XML tags for data separation",
      "leverage context caching for repeated long-document queries"
    ]
  },
  "features": {
    "grounding_with_google_search": true,
    "context_caching": true,
    "function_calling": true,
    "json_mode": true,
    "system_instructions": true
  },
  "safety_level": "Standard Enterprise (High)",
  "model_size": "dense_transformer",
  "hardware_requirements": "managed_by_google_tpu_v5p",
  "license_type": "proprietary"
}
```