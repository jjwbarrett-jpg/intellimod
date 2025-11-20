import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';

// This function reads a file from the 'content' directory
async function readContentFile(filename: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'content', filename);
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading file: ${filename}`, error);
    return ''; 
  }
}

export async function POST(req: NextRequest) {
  const { promptText } = await req.json();

  if (!promptText) {
    return NextResponse.json({ error: "Prompt text is required" }, { status: 400 });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    // 1. Read our instruction manual for the auditor
    const auditorInstructions = await readContentFile('modular-prompt-auditor.md');
    
    // 2. Construct the "mega-prompt" for the audit task
    const finalPrompt = `
      **ROLE & GOAL:** You are the IntelliMod Modular Prompt Auditor. Your task is to analyze the user-submitted prompt below, using your instruction manual to provide a step-by-step evaluation.

      **INSTRUCTION MANUAL:**
      ---
      ${auditorInstructions}
      ---
      
      **USER PROMPT TO AUDIT:**
      ---
      ${promptText}
      ---

      **YOUR TASK:**
  1. First, provide a step-by-step analysis based on your manual.
  2. After the analysis, your MOST IMPORTANT task is to provide the final, improved prompt under a clear heading that says: "### Suggested Revision".
`;

    // 3. Send the assembled prompt to the AI
    const result = await model.generateContent(finalPrompt);
    const response = await result.response;
    const analysisText = response.text();

    return NextResponse.json({ analysis: analysisText });

  } catch (error) {
    console.error("Error calling Gemini API for audit:", error);
    return NextResponse.json(
      { error: "Failed to generate AI analysis" },
      { status: 500 }
    );
  }
}