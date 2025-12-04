import { VCardData, getVCardsByIds } from './card';

// Define a Trigger
interface RouterTrigger {
  id: string;
  name: string;
  condition: (input: { objective: string; format?: string }) => boolean;
  targetCardId: string; 
}

// --- THE TIG LOGIC MAP (Synced with SC_TIG_MASTER v2.0) ---
const triggers: RouterTrigger[] = [
  // 1. RESEARCH LAYER (Tier S/A)
  // Keywords: deep research, citations, investigate, summarize
  {
    id: 'tig_research',
    name: 'TIG: Research & Analysis',
    condition: (input) => {
      const keywords = ['research', 'citation', 'investigate', 'literature', 'summarize', 'analysis', 'data'];
      return keywords.some(kw => input.objective.toLowerCase().includes(kw));
    },
    targetCardId: 'VC_MEM_RAG' // Maps to Knowledge Retrieval
  },

  // 2. CREATIVE LAYER (Tier S)
  // Keywords: story, narrative, brainstorm, novel, idea
  {
    id: 'tig_creative',
    name: 'TIG: Creative Studio',
    condition: (input) => {
      const keywords = ['story', 'narrative', 'novel', 'poem', 'script', 'brainstorm', 'idea', 'creative', 'write a'];
      return keywords.some(kw => input.objective.toLowerCase().includes(kw));
    },
    targetCardId: 'VC_CREATIVE_FICTION' // Maps to Speculative Engine
  },

  // 3. CODING LAYER (Tier C)
  // Keywords: python, script, debug, json, code, function
  {
    id: 'tig_coding',
    name: 'TIG: Dev Center',
    condition: (input) => {
      const keywords = ['code', 'python', 'script', 'debug', 'json', 'function', 'api', 'typescript', 'react'];
      return keywords.some(kw => input.objective.toLowerCase().includes(kw));
    },
    targetCardId: 'VC_FLOW_COC' // Maps to Chain-of-Code
  },

  // 4. VISUAL LAYER (Tier A)
  // Keywords: image, draw, visualize, midjourney, prompt
  {
    id: 'tig_visual',
    name: 'TIG: Visual Engine',
    condition: (input) => {
      const keywords = ['image', 'draw', 'visualize', 'picture', 'photo', 'midjourney', 'dall-e', 'flux'];
      return keywords.some(kw => input.objective.toLowerCase().includes(kw));
    },
    targetCardId: 'VC_DATA_MULTIMODAL' // Maps to Multi-Modal Protocol
  },

  // 5. SAFETY OVERRIDE (Global)
  // Trigger: "ignore rules", "system mode"
  {
    id: 'tig_safety',
    name: 'TIG: Security Sentinel',
    condition: (input) => {
      const keywords = ['ignore rules', 'system mode', 'unrestricted', 'bypass'];
      return keywords.some(kw => input.objective.toLowerCase().includes(kw));
    },
    targetCardId: 'VC_SAFETY_SANITIZE' // Maps to Input Sanitization
  }
];

// The Main Router Function
export async function detectTriggers(input: { objective: string; format?: string }): Promise<VCardData[]> {
  const activeCardIds: string[] = [];

  // 1. Run all checks
  triggers.forEach(trigger => {
    if (trigger.condition(input)) {
      console.log(`[TIG ROUTER] Intent Detected: ${trigger.name} -> Routing to ${trigger.targetCardId}`);
      activeCardIds.push(trigger.targetCardId);
    }
  });

  // 2. Fetch the actual card content for any triggered IDs
  if (activeCardIds.length > 0) {
    return await getVCardsByIds(activeCardIds);
  }

  return [];
}