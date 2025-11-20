"use client";

import * as React from "react";
import { useSearchParams } from 'next/navigation'; // Added missing import
import { useEffect } from 'react'; // Added missing import

/* ---------------------- Types & helpers (top-level) ---------------------- */

type OptionRow = { id: string; text: string; score: number; rationale: string };

// very small scoring so options can be ranked
function scoreBranch(text: string, opts: { wantsAspect?: boolean; wantsCamera?: boolean } = {}) {
  let s = 0;
  if (/\b(wide[- ]angle|camera|shot|3\/4)\b/i.test(text)) s += opts.wantsCamera ? 5 : 3;
  if (/\blighting|volumetric|rim light|key light\b/i.test(text)) s += 4;
  if (/\bAspect\s*:\s*\d+:\d+\b/i.test(text)) s += opts.wantsAspect ? 5 : 3;
  if (/\bPriority\b/i.test(text)) s += 3;
  if (/\bNegative(s)?\b/i.test(text)) s += 3;
  if (/Subject:\s*.+Setting:/i.test(text)) s += 2;
  return Math.min(s, 20);
} // Ensure closing brace

function pickBullets(text: string): string[] {
  const bullets: string[] = [];
  if (/\bAspect\s*:\s*\d+:\d+\b/i.test(text)) bullets.push("Sets aspect & priority for predictable framing.");
  if (/\bLighting\b/i.test(text) && /\bComposition\b/i.test(text))
    bullets.push("Adds shot + lighting for depth and a clear focal.");
  if (!bullets.length) bullets.push("Clarifies structure for more control.");
  if (bullets.length < 2) bullets.push("Removes fluff; adds explicit constraints.");
  return bullets.slice(0, 2);
} // Ensure closing brace

// turns raw model text into option rows (works with single or multiple)
function parseOptions(raw: string): OptionRow[] {
  const cleaned = String(raw || "").trim();
  const chunks = cleaned
    .split(/\n-{3,}\n|\n#{1,3}\s*Option\b|\n#{1,3}\s*Branch\b/gi)
    .map((s) => s.trim())
    .filter(Boolean);
  const bases = (chunks.length ? chunks : [cleaned]).slice(0, 6);
  const rows: OptionRow[] = bases.map((text, i) => {
    const score = scoreBranch(text, { wantsAspect: true, wantsCamera: true });
    const titleMatch = text.match(/^(?:Option|Branch)\s*[:\-]?\s*([^\n]+)/i);
    const rationale =
      titleMatch?.[1]?.trim() ||
      (/\bAspect\s*:\s*\d+:\d+\b/i.test(text) && /\bLighting\b/i.test(text)
        ? "Adds aspect + lighting controls"
        : "General upgrade");
    return { id: `opt_${i + 1}`, text, score, rationale };
  });
  rows.sort((a, b) => b.score - a.score);
  return rows;
} // Ensure closing brace

// table cell styles used below
const th: React.CSSProperties = {
  textAlign: "left",
  padding: "6px 8px",
  borderBottom: "1px solid #333",
};
const td: React.CSSProperties = {
  padding: "6px 8px",
  borderBottom: "1px solid #222",
  verticalAlign: "top",
};

// tiny fallback so the button still does something if API fails
function runInternalToT(original: string) {
  const base = original.replace(/\s+/g, " ").trim();
  const upgraded =
    `Concept art brief. Subject: ${base}. ` +
    `Setting: as described. Composition: wide-angle, low camera; clear focal hierarchy. ` +
    `Lighting: volumetric glow; warm key, cool rim. Style: detailed digital painting; ethereal. ` +
    `Constraints: Aspect: 3:2; Priority: subject > environment. Negatives: no clutter; no flat light. ` +
    `Acceptance: produce one image matching these controls.`;
  const best = { id: "opt_1", text: upgraded, score: scoreBranch(upgraded, { wantsAspect: true, wantsCamera: true }), rationale: "Fallback upgrade" };
  return { finalPrompt: upgraded, options: [best] as OptionRow[] };
} // Ensure closing brace

/* ------------------------------ Component ------------------------------- */

export default function AuditorPage() {
  const [original, setOriginal] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "working" | "done">("idle");
  const [options, setOptions] = React.useState<OptionRow[]>([]);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [finalPrompt, setFinalPrompt] = React.useState("");
  const [whyBetter, setWhyBetter] = React.useState<string[]>([]);
  const [decisionRows, setDecisionRows] = React.useState<Array<{ branch: string; score: number; rationale: string }>>([]);
  const [rawModel, setRawModel] = React.useState("");

  // --- Add code to read from URL ---
  const searchParams = useSearchParams();
  useEffect(() => {
    const promptFromUrl = searchParams.get('prompt');
    if (promptFromUrl) {
      setOriginal(promptFromUrl); // Set the prompt text from URL
    }
  }, [searchParams]);
  // --- End URL reading code ---


  async function handleImprove() {
    if (!original.trim()) return;
    setStatus("working");
    try {
      const res = await fetch("/api/mpa-upgrade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: original }),
      });
      const data = await res.json();
      const rawText = String(data.raw ?? "").trim();
      setRawModel(rawText);

      if (!rawText) {
        const fb = runInternalToT(original);
        setOptions(fb.options);
        setSelectedId(fb.options[0].id);
        setFinalPrompt(fb.finalPrompt);
        setWhyBetter(pickBullets(fb.finalPrompt));
        setDecisionRows(fb.options.slice(0, 4).map((r) => ({ branch: r.id.toUpperCase(), score: r.score, rationale: r.rationale })));
        return;
      }

      const sanitized = rawText.replace(/!\[[^\]]*]\([^)]*\)/g, "").trim();
      const usable = sanitized || rawText;
      const parsed = parseOptions(usable);
      setOptions(parsed);

      const best = parsed[0];
      if (best) {
        setSelectedId(best.id);
        setFinalPrompt(best.text);
        setWhyBetter(pickBullets(best.text));
        setDecisionRows(parsed.slice(0, 4).map((r) => ({ branch: r.id.toUpperCase(), score: r.score, rationale: r.rationale })));
      } else {
        setSelectedId(null);
        setFinalPrompt(usable);
        setWhyBetter(pickBullets(usable));
        setDecisionRows([]);
      }
    } catch {
      const fb = runInternalToT(original);
      setOptions(fb.options);
      setSelectedId(fb.options[0].id);
      setFinalPrompt(fb.finalPrompt);
      setWhyBetter(pickBullets(fb.finalPrompt));
      setDecisionRows(fb.options.slice(0, 4).map((r) => ({ branch: r.id.toUpperCase(), score: r.score, rationale: r.rationale })));
    } finally {
      setStatus("done");
    }
  } // Ensure closing brace for handleImprove

  function handleReset() {
    setOriginal("");
    setStatus("idle");
    setOptions([]);
    setSelectedId(null);
    setFinalPrompt("");
    setWhyBetter([]);
    setDecisionRows([]);
    setRawModel("");
  } // Ensure closing brace for handleReset

  /* ------------------------------- JSX -------------------------------- */

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
      {/* HEADER */}
      <header id="MPAHeader" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <h1 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>MPA — Prompt Upgrade</h1>
        <div />
      </header>

      {/* INPUT */}
      <section id="InputPane" style={{ marginBottom: 20 }}>
        <label htmlFor="PromptTextarea" style={{ fontSize: 14, opacity: 0.9 }}>Paste your prompt</label>
        <textarea id="PromptTextarea" value={original} onChange={(e) => setOriginal(e.target.value)} placeholder="Paste the prompt you want upgraded…" rows={8} style={{ width: "100%", marginTop: 8, padding: 12, borderRadius: 8, border: "1px solid var(--border, #444)", background: "#0b0b0b", color: "inherit", fontFamily: "inherit" }} />
        <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
          <button id="ImproveButton" onClick={handleImprove} disabled={!original.trim() || status === "working"} style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid var(--border, #444)", background: status === "working" ? "#222" : "#1f6feb", color: "#fff", cursor: !original.trim() || status === "working" ? "not-allowed" : "pointer" }}>
            {status === "working" ? "Improving…" : "Improve Prompt"}
          </button>
          <button id="ResetAudit" onClick={handleReset} style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid var(--border, #444)", background: "#111", color: "inherit" }}>
            Reset Audit
          </button>
        </div>
      </section>

      {/* OPTIONS */}
      <section id="OptionsPane" style={{ marginTop: 12, marginBottom: 16 }}>
        <h2 style={{ fontSize: 16, marginBottom: 8 }}>Options</h2>
        {options.length === 0 ? (
          <div style={{ opacity: 0.7 }}>— Run “Improve Prompt” to see options —</div>
        ) : (
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr" }}>
            {options.map((opt) => (
              <article key={opt.id} style={{ border: "1px solid var(--border, #444)", borderRadius: 8, background: selectedId === opt.id ? "#111" : "#0b0b0b", padding: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <strong>Option {opt.id.split("_")[1]}</strong>
                  <span style={{ fontSize: 12, padding: "2px 8px", border: "1px solid #333", borderRadius: 999 }}>Score: {opt.score}/20</span>
                </div>
                <pre style={{ whiteSpace: "pre-wrap", lineHeight: 1.4, fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace", margin: 0 }}>{opt.text}</pre>
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  <button onClick={() => { setSelectedId(opt.id); setFinalPrompt(opt.text); setWhyBetter(pickBullets(opt.text)); setDecisionRows(options.slice(0, 4).map((r) => ({ branch: r.id.toUpperCase(), score: r.score, rationale: r.rationale }))); }} style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid var(--border, #444)", background: "#1f6feb", color: "#fff", cursor: "pointer" }}>Use as Final</button>
                  <button onClick={() => navigator.clipboard.writeText(opt.text)} style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid var(--border, #444)", background: "#111", color: "inherit", cursor: "pointer" }}>Copy</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* FINAL PROMPT */}
      <section id="FinalPromptPane" style={{ marginTop: 8, marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
          <h2 style={{ fontSize: 16, margin: 0 }}>Final Prompt</h2>
          <button id="CopyButton" onClick={() => finalPrompt && navigator.clipboard.writeText(finalPrompt)} disabled={!finalPrompt} style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid var(--border, #444)", background: "#111", color: "inherit", cursor: finalPrompt ? "pointer" : "not-allowed" }}>Copy</button>
        </div>
        <pre id="FinalPromptBox" style={{ whiteSpace: "pre-wrap", padding: 12, minHeight: 120, border: "1px solid var(--border, #444)", borderRadius: 8, background: "#0b0b0b", fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace", lineHeight: 1.4 }}>
          {finalPrompt || "— The upgraded prompt will appear here —"}
        </pre>
      </section>

      {/* WHY / DETAILS */}
      {selectedId ? (
        <section id="WhyBetter" style={{ marginTop: 16 }}>
          <h3 style={{ fontSize: 14, margin: "0 0 4px 0" }}>Why this is better</h3>
          <ul id="GainBullets" style={{ marginTop: 6 }}>{whyBetter.map((b, i) => (<li key={i}>{b}</li>))}</ul>
          <details id="DetailsAccordion" style={{ marginTop: 8 }}>
            <summary>Details (how I decided)</summary>
            <table style={{ width: "100%", marginTop: 8, borderCollapse: "collapse" }}>
              <thead><tr><th style={th}>Option</th><th style={th}>Score</th><th style={th}>Rationale</th></tr></thead>
              <tbody>{decisionRows.map((r, i) => (<tr key={i}><td style={td}>{r.branch}</td><td style={td}>{r.score}</td><td style={td}>{r.rationale}</td></tr>))}</tbody>
            </table>
          </details>
        </section>
      ) : null}

      {/* DEBUG RAW */}
      <details style={{ marginTop: 12 }}>
        <summary>Debug: raw model output</summary>
        <pre style={{ whiteSpace: "pre-wrap", padding: 12, border: "1px solid var(--border, #444)", borderRadius: 8, background: "#0b0b0b", marginTop: 8 }}>
          {rawModel || "— nothing —"}
        </pre>
      </details>
    </main>
  );
} 