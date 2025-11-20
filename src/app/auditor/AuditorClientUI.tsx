'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './auditor.module.css';
import ReactMarkdown from 'react-markdown';
export interface ChecklistItem {
  heading: string;
  items: string[];
}

export default function AuditorClientUI({ checklist }: { checklist: ChecklistItem[] }) {
  const [promptText, setPromptText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');
  
  const searchParams = useSearchParams();

  useEffect(() => {
    const promptFromUrl = searchParams.get('prompt');
    if (promptFromUrl) {
      setPromptText(promptFromUrl);
    }
  }, [searchParams]);

  const handleAudit = async () => {
    if (!promptText.trim()) {
      setAnalysisResult("Please enter a prompt to audit.");
      return;
    }

    setIsLoading(true);
    setAnalysisResult('The AI is analyzing your prompt...');

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ promptText }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      setAnalysisResult(data.analysis);

    } catch (error) {
      console.error("Failed to get audit analysis:", error);
      setAnalysisResult("Sorry, something went wrong. The AI may be busy or an error occurred. Please check the server console.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.auditorLayout}>
      <div className={styles.promptInputArea}>
        <h2>Your Prompt</h2>
        <textarea
          className={styles.textarea}
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          placeholder="Paste your complete prompt here to begin the audit..."
          rows={15}
        />
        <button onClick={handleAudit} className={styles.submitButton} disabled={!promptText || isLoading}>
          {isLoading ? 'Auditing...' : 'Audit Prompt'}
        </button>
      </div>
      <div className={styles.checklistArea}>
  <h2>Automated Analysis</h2>
  <div className={styles.resultsBlock}>
  {isLoading 
    ? "The AI is analyzing your prompt..." 
    : (analysisResult 
        // We wrap the component in a div and apply the className to the div
        ? <div className={styles.markdownContent}>
            <ReactMarkdown>{analysisResult}</ReactMarkdown>
          </div>
        : "The AI's analysis of your prompt will appear here."
      )
  }
</div>
</div>
    </div>
  );
}