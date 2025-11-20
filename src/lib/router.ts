import { VCardData, getVCardsByIds } from './card';

// Define a Trigger
interface RouterTrigger {
  id: string;
  name: string;
  condition: (input: { objective: string; format?: string }) => boolean;
  targetCardId: string; 
}

// The Logic Map
const triggers: RouterTrigger[] = [
  /* // Temporarily disabled until Format Calibrator card is created
  {
    id: 'missing_format',
    name: 'Missing Format Directive',
    condition: (input) => !input.format || input.format.trim() === '',
    targetCardId: 'VC_FORMAT_CALIBRATOR' 
  }, 
  */
  {
    id: 'emotional_engagement',
    name: 'Emotional Engagement Needed',
    // Trigger: words like story, narrative, emotional, etc.
    condition: (input) => {
      const keywords = ['story', 'narrative', 'emotional', 'feeling', 'tone', 'exciting', 'sad', 'dramatic'];
      return keywords.some(kw => input.objective.toLowerCase().includes(kw));
    },
    targetCardId: 'VC_031' // Emotion Prompting
  },
  {
    id: 'chain_logic',
    name: 'Chain Logic Required',
    // Trigger: words like step-by-step, logic, reason
    condition: (input) => {
      const keywords = ['step-by-step', 'reasoning', 'logic', 'think', 'evaluate', 'analyze'];
      return keywords.some(kw => input.objective.toLowerCase().includes(kw));
    },
    targetCardId: 'VC_013' // Chain-of-Thought
  }
];

// The Main Router Function
export async function detectTriggers(input: { objective: string; format?: string }): Promise<VCardData[]> {
  const activeCardIds: string[] = [];

  // 1. Run all checks
  triggers.forEach(trigger => {
    if (trigger.condition(input)) {
      console.log(`[ACR] Trigger Detected: ${trigger.name} -> Routing to ${trigger.targetCardId}`);
      activeCardIds.push(trigger.targetCardId);
    }
  });

  // 2. Fetch the actual card content for any triggered IDs
  if (activeCardIds.length > 0) {
    return await getVCardsByIds(activeCardIds);
  }

  return [];
}