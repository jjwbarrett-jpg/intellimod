# IntelliMod System Architecture (v2.0)
**Status:** Optimized for n8n Automation & API Execution

## 1. The Core Engine (System Cards)
The "Operating System" that runs every request.

ID,Name,Function
SC_TIG_MASTER,Task Intelligence Graph,The Central Router. Maps Intent -> Model -> Workflow. Manages the FIFO Queue.
SC_04_ICE,ICE Quality Assurance,"The Inspector. Scans inputs for gaps in (I)ntent, (C)ontext, and (E)xecution."
SC_03_CRAFT,C.R.A.F.T. Assembly,"The Architect. Assembles the prompt structure (Context, Role, Action, Format, Tone)."

## 2. The Guardrails (Safety & Security)
The "Brakes" and "Armor" protecting the system.

Category,ID,Name,Function
Safety,VC_SAFETY_SANITIZE,Input Sanitization,Regex/Logic filter to strip injection attacks and dangerous patterns.
Safety,VC_SAFETY_DELIMIT,XML Delimiter Defense,Wraps user input in <USER_DATA> tags to prevent instruction overrides.
Safety,VC_SAFETY_PRIVSEP,Air Gap Gateway,Enforces separation between User Interface and Backend Agents.
Safety,VC_SAFETY_LIABILITY,Liability Protocol,Injects mandatory medical/legal disclaimers for high-risk topics.
Security,VC_SEC_BOUNDARY,Context Isolation,Whitelists exactly what data can pass from Backend to Frontend.
Security,VC_SEC_ROLE_GATE,Role Access Control,Checks user.role before executing sensitive actions.
Security,VC_SEC_PERM_GATE,Human-in-the-Loop,"Async signal that pauses execution until a Human confirms ""PROCEED."""

## 3. The Cognitive Core (Logic & Strategy)
How the AI thinks and decides.

Category,ID,Name,Function
Logic,VC_LOGIC_CONTRADICT,Conflict Detection,Identifies and resolves conflicting instructions (Safety > Format > Tone).
Logic,VC_LOGIC_ENV,Environment Switch,"Toggles between ""Dev Mode"" (Verbose) and ""Prod Mode"" (Silent)."
Logic,VC_LOGIC_PRECISION,Precision Engine,Enforces strict definitions and evidence citations.
Logic,VC_LOGIC_SYMBOLIC,Symbolic Compression,Distills complex concepts into high-density tokens or glyphs.
Strategy,VC_STRAT_MATRIX,Perspective Matrix,Simulates a boardroom review (Optimist/Pessimist/Realist).
Strategy,VC_STRAT_DILEMMA,Trade-Off Resolution,"Forces a decision in ""Least Worst"" scenarios with ethical justification."
Planning,VC_PLAN_DECOMPOSE,Goal Decomposition,Breaks complex tasks into a JSON dependency graph.
Planning,VC_PLAN_INTENT,Intent Parser,Extracts structured parameters/slots from natural language.

## 4. The Mechanics (Flow, Memory, Meta)
How the system moves data and improves itself.

Category,ID,Name,Function
Flow,VC_FLOW_CHAIN,Sequential Chaining,Manages multi-step workflows using a persistent JSON Scratchpad.
Flow,VC_FLOW_COT,Chain-of-Thought,Forces step-by-step reasoning blocks (<thinking>) before answering.
Flow,VC_FLOW_INTERACTIVE,Collaborative Loop,"Enforces a ""Stop-and-Ask"" cadence for co-creation tasks."
Flow,VC_FLOW_SCAFFOLD,Cognitive Scaffolding,"Structures complex, long-horizon outputs (Frame -> Outline -> Content)."
Flow,VC_FLOW_VER,Verification Chain,Post-generation fact-checking loop (Draft -> Verify -> Fix).
Memory,VC_MEM_STATE,Session State Manager,"The ""Save File."" JSON object tracking User Prefs and Blueprint."
Memory,VC_MEM_COMPRESS,Context Compression,"Compresses conversation history into ""Recall Keys."""
Memory,VC_MEM_RECALL,Recall & Resolve,Searches history and resolves conflicts between old/new data.
Memory,VC_MEM_RAG,Knowledge Retrieval,Injects external docs with strict citation rules.
Memory,VC_MEM_PRIME,Context Priming,Pre-loads the context window with entity definitions.
Meta,VC_META_REASONING,Strategy Menu,"Selects the cognitive profile (Linear, ReAct, Intuitive, Graph)."
Meta,VC_META_CONFIDENCE,Confidence Scoring,specific 1-10 confidence score + reasoning.
Meta,VC_META_REFLEX,Reflexive Critique,"The ""Self-Correction"" loop (Draft -> Critique -> Finalize)."
Meta,VC_META_REWRITE,Prompt Optimizer,Rewrites vague user prompts into high-fidelity instructions.
Meta,VC_META_TEMPLATE,Template Generator,Abstract a conversation into a reusable Handlebars template.
Meta,VC_META_MUTATION,Evolutionary Lab,Generates 3 prompt variants to A/B test performance.
Meta,VC_META_AWARE,Model Awareness,"Adapts strategy based on model capabilities (e.g. Vision, Coding)."

## 5. The Interface (User, Tools, Optimization)
How the system talks to users and the world.

Category,ID,Name,Function
User,VC_USER_ADAPT_PERSONA,Tone Modulator,Adjusts complexity based on user expertise (Beginner/Expert).
User,VC_USER_INTENT_PREDICT,Next Step Predictor,Suggests the next logical action via JSON payload.
User,VC_USER_TIPS,Interactive Guidance,Offers specific menu options when the user is vague.
Tools,VC_TOOL_INVOCATION,Tool Call Standard,The JSON Schema for triggering external APIs.
Data,VC_DATA_MULTIMODAL,Multi-Modal Protocol,"Aligns Text, Image, and Audio analysis (Synesthesia)."
Optimize,VC_OPT_CONSTRAINTS,Constraint Enforcer,"Sets hard boundaries (Length, Format, Negative)."
Optimize,VC_OPT_TRIAD,Triad Protocol,Forces 3-step output: Identify -> Clarify -> Execute.
Optimize,VC_OPT_LOOP_LIMIT,Recursion Breaker,Prevents infinite loops using an iteration counter.
Optimize,VC_OPT_WEIGHTING,Priority Weighting,Assigns numerical importance to conflicting instructions.
Optimize,VC_OPT_PREFILL,Assistant Prefill,"""Puts words in the AI's mouth"" to steer format/tone."
Optimize,VC_OPT_FEW_SHOT,Pattern Injection,Injects 3 examples to force pattern adherence.

## 6. Resilience (Feedback & Fallback)
Handling failure and learning.

Category,ID,Name,Function
Feedback,VC_FEEDBACK_CORRECT,Real-Time Correction,"Updates session constraints based on user ""No, not that"" feedback."
Feedback,VC_FEEDBACK_SCORE,Scoring Utility,Logs implicit/explicit user satisfaction signals.
Feedback,VC_FEEDBACK_PIPELINE,Fine-Tuning Harvest,Sanitizes and saves high-quality interactions for training.
Fallback,VC_FALLBACK_CLARIFY,Ambiguity Resolution,Stops execution and asks for clarification via Menu.
Fallback,VC_FALLBACK_DEGRADE,Graceful Degradation,Switches to simpler logic if tools fail or timeout.
Fallback,VC_FALLBACK_RETRY,Smart Retry,Retries failed steps with a changed strategy (not just repeat).
Testing,VC_TEST_CHAOS,Chaos Protocol,Simulates API failures to test resilience (Dev Mode Only).
Testing,VC_TEST_ECHO,Debug Echo,Forces AI to state its assumptions before executing.

## 7. Creativity & Agents
Specialized Modes.

Category,ID,Name,Function
Creative,VC_CREATIVE_ABSTRACT,Abstract Thought,Philosophical/Metaphorical reasoning engine.
Creative,VC_CREATIVE_FICTION,Speculative Engine,Loosens factuality constraints for Worldbuilding/Sci-Fi.
Creative,VC_CREATIVE_CONTRAST,Lateral Thinking,"Inversion, Paradox, and Constraint Removal."
Creative,VC_CREATIVE_BLEND,Style Fusion,Blends two distinct styles (70/30 ratio).
Agent,VC_AGENT_SIMULATION,Virtual Council,Simulates a multi-persona debate in a single response.
Agent,VC_AGENT_BROADCAST,Broadcast/Aggregate,Map-Reduce logic for parallel agent execution.
Agent,VC_AGENT_CONTRACT,Worker Interface,"Enforces ""Headless"" (Silent) mode for worker agents."
Agent,VC_AGENT_STATE,Async Job Queue,Manages long-running jobs via a shared state board.