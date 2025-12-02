---
id: "claude-sonnet-4-5"
title: "Claude Sonnet 4.5 – Model Card"
card_type: "model-card"
provider: "anthropic"
tier: "S"
---

```json
{
  "id": "claude-sonnet-4-5",
  "model_string": "claude-sonnet-4-5-20250929",
  "provider": "anthropic",
  "type": "chat",
  "modalities": ["text", "code", "vision", "computer_use"],
  "context_length": 200000,
  "extended_context": {
    "api_1m_beta": true,
    "enterprise_500k": true,
    "note": "200K default; 1M available via API with beta header; 500K for Enterprise users"
  },
  "max_output_tokens": 64000,
  "knowledge_cutoff": {
    "reliable_cutoff": "2025-01-31",
    "training_data_through": "2025-07",
    "note": "Knowledge most extensive and reliable through January 2025"
  },
  "release_date": "2025-09-29",
  "pricing": {
    "input": "$3 per million tokens",
    "output": "$15 per million tokens",
    "prompt_caching_savings": "up to 90%",
    "batch_processing_savings": "50%"
  },
  "strengths": [
    "state-of-the-art coding performance (77.2% on SWE-bench Verified)",
    "exceptional long-horizon agentic tasks (30+ hour sustained autonomous work)",
    "advanced computer use capabilities (61.4% on OSWorld benchmark)",
    "improved tool orchestration and parallel execution",
    "hybrid reasoning model with optional extended thinking mode",
    "strong code security, specification adherence, and system design",
    "excellent at producing office files (spreadsheets, documents, slides)",
    "superior multi-step reasoning and codebase comprehension",
    "in-chat code execution and file creation",
    "enhanced context and memory management"
  ],
  "quirks": [
    "tends to be verbose unless asked to be concise",
    "deployed under ASL-3 safety protections (may occasionally flag benign CBRN-related content)",
    "has automatic web search for current events beyond knowledge cutoff",
    "default terminal command timeout ~2 minutes in Claude Code",
    "some platform-specific identity confusion reported on AWS Bedrock"
  ],
  "best_for": [
    "autonomous_coding_agents",
    "long_horizon_software_projects",
    "complex_multi_file_codebases",
    "cybersecurity_and_vulnerability_patching",
    "computer_use_automation",
    "agentic_workflows_with_tool_orchestration",
    "financial_analysis_and_compliance",
    "research_and_data_synthesis",
    "office_document_creation_and_editing"
  ],
  "avoid_for": [
    "ultra_low_latency_requirements_use_haiku_instead",
    "simple_tasks_where_haiku_would_suffice",
    "CBRN_sensitive_workflows_without_fallback_to_sonnet_4"
  ],
  "access_method": ["api", "web", "mobile", "desktop", "aws_bedrock", "google_vertex_ai", "microsoft_foundry"],
  "prompt_style": {
    "preferred_format": "structured_with_xml_tags",
    "tips": [
      "use XML tags for complex instructions (e.g., <task>, <context>, <requirements>)",
      "describe audience and tone explicitly",
      "set length constraints (short/medium/long)",
      "leverage extended thinking mode for complex reasoning tasks",
      "use numbered steps for multi-part instructions",
      "ask for revisions instead of rewriting from scratch",
      "take advantage of automatic web search for current information",
      "utilize context editing and memory features for long-running agents"
    ]
  },
  "features": {
    "extended_thinking_mode": true,
    "automatic_web_search": true,
    "code_execution": true,
    "file_creation": true,
    "computer_use": true,
    "function_calling": true,
    "structured_outputs": true,
    "multilingual": true,
    "prompt_caching": true,
    "batch_processing": true,
    "context_editing": true,
    "memory_tool": true
  },
  "safety_level": "ASL-3",
  "alignment_improvements": {
    "vs_sonnet_4": "60% improvement in alignment metrics",
    "political_bias": "3.3% (1.3% with extended thinking)",
    "prompt_injection_resistance": "industry-leading, lowest attack success rates"
  },
  "model_size": "proprietary_flagship",
  "hardware_requirements": "managed_by_anthropic",
  "license_type": "proprietary"
}
```