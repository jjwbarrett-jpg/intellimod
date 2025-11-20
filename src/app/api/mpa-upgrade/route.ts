import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GOOGLE_API_KEY not set" }, { status: 500 });
    }

    // 🔷 PASTE YOUR EXISTING MPA PROMPT TEXT BETWEEN THE BACKTICKS:
    const systemInstruction = `
<<< PASTE YOUR MPA SPEC / PROMPT HERE, EXACTLY AS-IS >>>
`.trim();

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-pro",
      systemInstruction,
    });
    // right before the call to model.generateContent(...)
const outputContract = `
OUTPUT RULES (must follow strictly):
- Do NOT generate or link images.
- Do NOT return Markdown image syntax (no ![...](...)).
- Do NOT hold a conversation; no preface or analysis.
- Return a single upgraded TEXT prompt only.
- Keep plain text (no code fences), max ~220 words.
`.trim();

const userMsg = `
Original prompt:
"""${prompt}"""

Apply the MPA exactly as specified in the system prompt,
but obey the OUTPUT RULES above. Return only the upgraded prompt text.
`.trim();


    // Send the user's prompt as-is; your MPA prompt governs behavior.
    const resp = await model.generateContent(userMsg);
    const raw = resp.response.text();

    // Return exactly what your MPA produced (no reshaping).
    return NextResponse.json({ raw });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Unknown error" }, { status: 500 });
  }
}