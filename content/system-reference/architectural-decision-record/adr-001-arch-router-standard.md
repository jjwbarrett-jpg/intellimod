---
ADR-001: Adoption of Arch-Router Taxonomy
Status: Accepted Date: 2025-12-04 Context: IntelliMod v2.0 Transition
---

### 1. The Context
The Task Intelligence Graph (TIG) requires a consistent naming convention ("Taxonomy") to route user requests to the correct AI models.
    - **Previous State:** We used ad-hoc keywords (e.g., tig_coding, tig_creative) which were brittle and hard to scale.
    - **Discovery:** We identified HuggingChat Omni and its underlying Arch-Router (1.5B) as a production-grade validation of our "Router -> Model" architecture.

### 2. The Decision
We have decided to align IntelliMod's taxonomy with the Arch-Router standard (`domain.task`), but retain our lightweight execution engine.

#### We ARE doing this:
    - **Adopting the Naming Convention:** We are renaming all TIG Intents to dot-notation (e.g., `knowledge.research`, `creative.generation`).
    - **Aligning Categories:** We are matching industry-standard groupings (Knowledge, Creative, Programming, Multimodal).

#### We are NOT doing this:
    **Using the Arch-Router Model:** We will not implement the heavy 1.5B parameter routing model at runtime. We will keep our lightweight TypeScript/n8n logic for speed and control.

### 3. The New Standard (TIG v2.1)
The following mapping is now the Single Source of Truth:

Old Tag | New Standard Tag
`tig_research` | `knowledge.research`
`tig_summarize` | `knowledge.summarization`
`tig_creative` | `creative.generation`
`tig_brainstorm` | `creative.brainstorming`
`tig_coding` | `programming.scripting` (Simple) / `programming.architecture` (Complex)
`tig_visual` | `multimodal.image_generation`
`tig_safety` | `safety.moderation`

### 4. Consequences
- **Future-Proofing:** If we later decide to plug in an actual AI router (like Arch-Router), our data structure is already compatible.
- **Clarity:** Distinguishes between similar tasks (e.g., generating code vs. architecting code).
- **Flux Rename:** To avoid confusion with the "Black Forest Labs FLUX" image model, we have renamed our internal `FLUX PARSER` to `INTENT_COMMAND_PARSER`.