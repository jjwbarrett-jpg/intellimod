---
id: "gemini-3.0-pro"
title: "Gemini-3.0-Pro – Model Card"
card_type: "model-card"
provider: "google"
---

```json
{
  "id": "gemini-3.0-pro",
  "model_string": "gemini-3.0-pro-001",
  "provider": "google",
  "type": "chat_reasoning",
  "modalities": ["text", "code", "image", "audio", "video"],
  "context_length": 2097152,
  "extended_context": {
    "standard": "2M tokens",
    "research_preview": "10M tokens (via Deep Research)",
    "note": "Native multimodal context caching enabled by default"
  },
  "max_output_tokens": 65536,
  "knowledge_cutoff": {
    "reliable_cutoff": "2025-09",
    "training_data_through": "2025-10",
    "note": "Real-time information access via Google Grounding (Search)"
  },
  "release_date": "2025-11-18",
  "pricing": {
    "input": "$1.25 per million tokens",
    "output": "$5.00 per million tokens",
    "reasoning_tokens": "billed_as_output",
    "context_caching": "50% discount on cached input"
  },
  "strengths": [
    "native 'Deep Think' reasoning capabilities (System 2 thinking)",
    "vibe_coding (high-level architectural intuition from loose prompts)",
    "industry-leading video analysis (up to 2 hours with audio)",
    "native integration with Google Workspace (Docs, Drive, Gmail)",
    "long-horizon agentic planning (Deep Research capabilities)",
    "massive multimodal context window (2M+)",
    "superior math and logic performance (AIME 2025: 95%)",
    "dynamic compute allocation (adjusts 'thinking' time based on complexity)"
  ],
  "quirks": [
    "safety filters can be hypersensitive on 'dangerous' topics (e.g., cybersecurity)",
    "may exhibit 'temporal confusion' regarding dates post-training cutoff without search",
    "reasoning logs can be verbose if not explicitly suppressed",
    "occasional refusal to generate people/faces in high-res image generation",
    "tendency to 'lecture' on safety when queried about gray-area topics"
  ],
  "best_for": [
    "complex_multimodal_reasoning",
    "full_stack_application_development",
    "video_content_analysis_and_extraction",
    "academic_research_with_citations",
    "large_scale_document_synthesis",
    "agentic_workflows_needing_planning",
    "data_extraction_from_unstructured_media"
  ],
  "avoid_for": [
    "sub_millisecond_latency_tasks (use Gemini 2.5 Flash)",
    "unrestricted_content_generation (NSFW/Gore)",
    "simple_classification_tasks (overkill/expensive)"
  ],
  "access_method": ["web", "vertex_ai_api", "google_ai_studio", "mobile"],
  "prompt_style": {
    "preferred_format": "goal_oriented_natural_language",
    "tips": [
      "upload entire source files rather than snippets (leverages long context)",
      "explicitly request 'thinking' for complex logic puzzles",
      "use natural language for 'vibe coding' rather than rigid specs",
      "enable 'Grounding' for current events queries",
      "specify output constraints strictly to avoid reasoning verbosity"
    ]
  },
  "features": {
    "deep_think": true,
    "grounding_with_google_search": true,
    "code_execution": true,
    "multimodal_input": true,
    "image_generation": true,
    "function_calling": true,
    "structured_outputs": true,
    "context_caching": true
  },
  "safety_level": "High (Enterprise Grade)",
  "alignment_improvements": {
    "vs_gemini_2_5": "40% reduction in hallucination on long-context retrieval",
    "reasoning": "SOTA on hard logic benchmarks (Humanity's Last Exam)",
    "safety": "Strict adherence to CSAM and self-harm policies"
  },
  "model_size": "proprietary_flagship_mixture_of_experts",
  "hardware_requirements": "managed_by_google_tpu_v6",
  "license_type": "proprietary"
}
```