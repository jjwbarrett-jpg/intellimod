import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';
import { getAllPCards, findBestPCard, getVCardsByIds, VCardData } from '../../../lib/card';
import { detectTriggers } from '../../../lib/router'; // <-- Import the router

async function readSystemFile(relativePath: string): Promise<string> {
    const isSystemRefFile = relativePath.startsWith('system-reference/');
    const baseDir = isSystemRefFile 
        ? path.join(process.cwd(), 'content') 
        : path.join(process.cwd(), 'content', 'adaptive-cards');

    const filename = path.basename(relativePath);
    const dirPath = isSystemRefFile 
        ? path.dirname(relativePath).replace('system-reference/', '') 
        : path.dirname(relativePath); 
            
    const filePath = path.join(baseDir, dirPath, filename);

    try {
        return await fs.readFile(filePath, 'utf8');
    } catch (error) {
        console.error(`Error reading file: ${relativePath} at path ${filePath}`, error);
        return '';
    }
}

export async function POST(req: NextRequest) {
    const { objective, audience, format } = await req.json();

    if (!objective) {
        return NextResponse.json({ error: "Objective is required" }, { status: 400 });
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

        // 1. Load P-Cards (Strategy Layer)
        const allPCards = await getAllPCards();
        const selectedPCard = findBestPCard(objective, allPCards);

        if (!selectedPCard) {
            return NextResponse.json({ error: "Could not find a suitable P-Card." }, { status: 400 });
        }

        console.log(`--- 🃏 ROUTER SELECTED P-CARD: ${selectedPCard.title} ---`);

        // 2. Load System Files (Foundation Layer)
        const corePrompt = await readSystemFile('system-reference/00-core-prompt.md');
        const stepZeroLogic = await readSystemFile('system-reference/01-intellimod-mpi-step0.md');
        const iceLogic = await readSystemFile('system-cards/ice-logic.md');
        const craftLogic = await readSystemFile('system-cards/craft-refiner.md');
        const pCardContent = selectedPCard.content;

        // 3. Load V-Cards (Explicitly Referenced by P-Card)
        let vCardContent = '';
        if (selectedPCard.references && selectedPCard.references.length > 0) {
            console.log(`--- 🔗 LOADING REFERENCED V-CARDS: ${selectedPCard.references.join(', ')} ---`);
            const referencedVCards = await getVCardsByIds(selectedPCard.references);
            vCardContent = referencedVCards.map((vc: VCardData) => `
---
## Referenced V-Card: ${vc.title} (ID: ${vc.id})
${vc.content}
---
            `).join('\n\n');
        } else {
            console.log(`--- ℹ️  NO V-CARDS REFERENCED by this P-Card ---`);
        }

        // 4. --- NEW: Run Adaptive Router (Implicit Triggers) ---
        // This checks the user's text for clues like "sad", "logic", "step-by-step"
        const triggeredVCards = await detectTriggers({ objective, format });
        let triggeredContent = '';

        if (triggeredVCards.length > 0) {
            console.log(`--- ⚡ ACR TRIGGERED ${triggeredVCards.length} CARDS: ${triggeredVCards.map(c => c.title).join(', ')} ---`);
            triggeredContent = triggeredVCards.map((vc: VCardData) => `
---
## ⚡ ADAPTIVE ROUTER INJECTION: ${vc.title} (ID: ${vc.id})
${vc.content}
---
            `).join('\n\n');
        }
        // -------------------------------------------------------

        // 5. Assemble the "Layer Cake" Prompt
        const finalPrompt = `
${corePrompt}

---
## SYSTEM PHASE: MPI STEP 0 (PLANNING)
${stepZeroLogic}
---
## Core Logic Principles (ICE)
${iceLogic}
---
## Core Logic Principles (CRAFT)
${craftLogic}
---

## Selected P-Card Strategy: ${selectedPCard.title}
${pCardContent}

${vCardContent}

${triggeredContent} 

---

## User's Request
- Objective: ${objective}
- Audience: ${audience || 'Not specified'}
- Format: ${format || 'Not specified'}

---

## FINAL INSTRUCTION
You are currently executing MPI Step 0 (Planning). Using the logic from Step 0, combined with the strategy from the selected P-Card, the referenced V-Cards, and any Adaptive Router injections, generate the final prompt snippet. Output *only* the prompt snippet itself.
        `;

        console.log("--- Sending Final Prompt to AI ---");
        
        const result = await model.generateContent(finalPrompt);
        const response = await result.response;
        const aiResponseText = response.text();

        return NextResponse.json({ snippet: aiResponseText, usedPCard: selectedPCard.title });

    } catch (error) {
        console.error("Error in /api/generate:", error);
        return NextResponse.json(
            { error: "Failed to generate AI response" },
            { status: 500 }
        );
    }
}