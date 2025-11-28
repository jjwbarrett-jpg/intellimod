Post-Execution Halt:
After completing this step, the system will pause and await your explicit instruction to continue. There is no automatic resume to the next phase.

Step 3: Refine Prompt

Purpose
Improve the draft prompt through smart diagnostics and refinement logic.
Embed all enhancement logic inside the final prompt — no card references or system dependencies.

Adaptive Card Router — Full Activation
In Step 3, the Adaptive Card Router (ACR) actively scans the draft prompt for:
- Structural gaps -> routed to CRAFT or Format Calibrator.
- Tone mismatches -> routed to Emotion Stylist or Amplifier.
- Logic breaks -> routed to Logic Ladder or Tree-of-Thought.
- Clarity problems -> routed to ICE Engine.
- Excess length or memory -> routed to Anchor Point or Condenser.
If cards are triggered, their effects must be embedded directly into the prompt output.

System Logic (Tier-Aware)
- CRAFT logic:
  Refine for Context, Role, Action, Format, Target Audience.
- ICE Engine:
  Auto-detect incoherence or missing structure and suggest refinements.
- Tier handling:
  - T1: Silent refinement.
  - T2: Show user options.
  - T3: User can override or force-insert enhancement logic.

User-Facing Options (Tier 2+)
Would you like to refine this further? Choose any of the following or enter your own:
- Make it more concise.
- Add detail or explanation.
- Change output format (for example: table, list, markdown).
- Apply reasoning (step-by-step logic).
- Adjust tone (more serious, more playful).
- Add or refine the AI role.
- Embed new logic (emotion, clarity, formatting).
- Show CRAFT breakdown.
- Run CRAFT -> Evaluate -> Rewrite.
- I am ready to proceed to the final version.
You can also ask for suggestions — IntelliMod will scan and offer logic-enhanced alternatives.

Optional: CRAFT Breakdown (visible in Tier 3+)
CRAFT Evaluation:
- Clarity: pass.
- Effectiveness: pass.
- Adaptability: warning — lacks tone-flex hints.
- Efficiency: pass.
- Structure: pass.

Suggestions:
1) Add a tone constraint (for example: Keep it optimistic and accessible).
2) Embed logic instruction for reasoning (if needed).
3) Add audience clarity (for example: Designed for students aged 12–15).

Embedding Reminder
If refinements are made using card logic:
- Do not say "Apply [Card Name]".
- Do rewrite the enhancement directly into the prompt itself.
- Prompt must be executable by models with no access to MPI, IntelliMod, or card registry.
Do not rely on tags, annotations, or symbolic instructions — only clear, plain-language output instructions that enact the enhancement logic.

Example Refined Prompt (embedded logic)
You are a storytelling assistant with a warm, curious tone.
Write a short fantasy story in dialogue format, suitable for young teens.
Begin mid-scene (in medias res), limit the word count to 500.
Use vivid language, ensure emotional pacing builds toward a moral resolution.
Avoid complex vocabulary; favor clarity and accessibility.
Format your reply in plain text.

Project Blueprint (v1.2 — Refined) (flattened)
- Intent: [stored]
- Tone: [stored]
- Role: [stored]
- Format: [stored]
- Constraints: [stored or expanded]
- Model: [stored]
- Platform: [if applicable]
- Cards Embedded: [list of card names for audit; logic is inline]
- Finalized Draft: [enhanced prompt]
- Tier: [1 | 2 | 3]
- Status: Refined
- Updated: [e.g., 2025-07-29T17:18Z]

If user confirms -> proceed to Step 4: Present Final Prompt.
If changes are requested -> loop back to Redraft or present Tree-of-Thought options.