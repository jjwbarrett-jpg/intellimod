# 🧠 Prompt Card: Intelligent Card Engine (ICE)

🔧 Purpose:

Automatically enhance prompts by analyzing for missing or unclear components and intelligently applying relevant refinements, defaults, or prompt cards.

⚙️ Activated When:

Auto-enabled during Step 3 unless manually disabled

Can be manually activated anytime using:
/@ice[on] or Apply ICE Logic


🧠 What ICE Does:

Detects vague, missing, or unclear elements in a prompt

Fills in missing:
• Role / Tone / Output Format / Structure
• Clarifies fuzzy task wording
• Adds optional defaults based on Tier level or user preferences

Applies relevant Prompt Cards automatically (e.g., Best Practices, Formatting)

Ensures phrasing is optimized for LLM performance


🧩 ICE Decision Logic:

If:

Role or action is missing → Insert intelligent default

Format unclear → Choose structure that matches context (list, table, markdown, etc.)

Language vague → Refine with clearer, more directive phrasing

Tier = 1 (default) → Apply safest smart defaults

Tier = 2+ → Ask user before applying complex logic or chaining


💬 Example ICE Output:

Before:
"Write about space elevators."

After ICE:
"As a scientific explainer, write a structured overview of space elevators including their mechanics, benefits, and challenges. Format the output as a bullet-pointed article for a curious, general audience."

---

# P-Card: C.R.A.F.T. Refiner

🧠 Prompt Card: C.R.A.F.T. Refiner

Purpose:
Automatically structure and optimize a prompt using the C.R.A.F.T. method for maximum clarity, output quality, and reusability.

When to Use:

You want to ensure your prompt is well-scoped and complete.

You’re refining a rough idea into an actionable instruction.

You need structure, tone, and output format clarified.



---

🔧 C.R.A.F.T. Breakdown:

C = Context: Define the scenario or background clearly.

R = Role: Assign the LLM a suitable tone or persona.

A = Action: Specify step-by-step actions the LLM should take.

F = Format: Choose the most useful structure (e.g., table, list, markdown).

T = Target Audience: Match tone and language to who the output is for.



---

🌀 Example Input (Rough Prompt):
“Compare GPT-4 and Claude 3 for research tasks.”

✅ After C.R.A.F.T. Refinement:
“As a tech analyst, compare GPT-4 and Claude 3 for research purposes. List pros, cons, and use cases in a markdown table. Explain it in a tone suitable for enterprise IT professionals.”

---
