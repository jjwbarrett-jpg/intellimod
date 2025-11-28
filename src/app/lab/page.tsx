"use client";

import { useState } from 'react';

export default function LabPage() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const runTest = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            objective: input,
            audience: 'Testing',
            format: 'Analysis'
        }),
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto bg-gray-900 min-h-screen text-white font-mono">
      <h1 className="text-2xl mb-4 text-blue-400 font-bold">🧪 Intellimod Logic Lab</h1>
      
      <div className="flex gap-4 mb-8">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a prompt (e.g., 'Write a sad story about a robot')"
          className="flex-1 p-4 bg-gray-800 border border-gray-700 rounded"
        />
        <button 
          onClick={runTest}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-500 px-8 rounded font-bold"
        >
          {loading ? 'Analyzing...' : 'Run X-Ray'}
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-2 gap-8">
          
          {/* LEFT COLUMN: The Result */}
          <div className="bg-gray-800 p-6 rounded border border-green-500/30">
            <h2 className="text-green-400 font-bold mb-2">✅ AI Output</h2>
            <div className="mb-4 text-sm text-gray-400">
              <span className="block">P-Card: <span className="text-white">{result.usedPCard}</span></span>
              <span className="block">Triggers: <span className="text-white">{result.triggeredCards?.join(', ') || 'None'}</span></span>
            </div>
            <div className="whitespace-pre-wrap">{result.snippet}</div>
          </div>

          {/* RIGHT COLUMN: The "Under the Hood" */}
          <div className="bg-gray-800 p-6 rounded border border-yellow-500/30">
            <h2 className="text-yellow-400 font-bold mb-2">⚙️ What Intellimod Sent (The Layer Cake)</h2>
            <p className="text-xs text-gray-400 mb-4">This is the actual prompt your system constructed:</p>
            <div className="whitespace-pre-wrap text-xs text-gray-300 h-96 overflow-y-auto bg-gray-900 p-4 rounded">
              {result.debugLog}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}