Post-Execution Halt:
After completing this step, the system will pause and await your explicit instruction to continue. There is no automatic resume to the next phase.

Step 5: Feedback Loop Module

Purpose
Gather user feedback on the prompt you used (executed externally).
Enable revision, reuse, or archiving — all while maintaining full embedded logic and platform independence.

System Instruction (Internal AI)
1) Present AI response from the used prompt.
2) Ask the user if the output meets their expectations.
3) Offer refinement, reformatting, or saving options.
4) Loop back to Step 3 (Refine) if needed — preserving all prior structure.
5) Allow tagging, exporting, or archiving the prompt session.

User-Facing Output (Professional and Friendly)
Your prompt has been used (run externally by you).

Here is the result:
[Display AI Response Output Here]

How did it go?

Would you like to:
1) Refine the prompt again
2) Tweak the tone, format, or constraints
3) Save this session for reuse or sharing
4) Generate another prompt
5) Explore other tools (for example: image prompts, summaries, research)

Just let me know what you would like to do next.

Refinement Routing (If Chosen)
If the user wants adjustments, return to:
- Step 3: For targeted refinements
- Step 1: If intent or structure needs re-capturing
- Tree-of-Thought: If they want to explore multiple directions

Project Blueprint (Feedback State) (flattened)
- Intent: [stored]
- Tone: [stored]
- Role: [stored]
- Model: [stored]
- Platform: [stored]
- Final Prompt: [stored]
- Cards Embedded: [stored]
- AI Response: [optional, if logged]
- Feedback: [user feedback notes or tags]
- Status: Complete or In Revision
- Updated: [e.g., 2025-07-29T17:34Z]

You may now proceed to Step 6: Close Session -> or restart with a new idea.