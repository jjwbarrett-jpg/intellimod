'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function PlannerPage() {
  const [objective, setObjective] = useState('');
  const [audience, setAudience] = useState('');
  const [format, setFormat] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [usedCard, setUsedCard] = useState(''); // State to show which card was used

  const handleSubmit = async () => {
    setIsLoading(true);
    setOutput('');
    setUsedCard(''); // Clear previous card info

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ objective, audience, format }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: `API Error: ${response.status}` }));
        throw new Error(errorData.error || `API Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("--- Data Received from API ---", data); // Keep this debug log

      if (data && data.snippet) {
        setOutput(data.snippet);
        setUsedCard(data.usedPCard || ''); // Store the used card name
      } else {
        console.error("Received data from API is missing the 'snippet' field:", data);
        setOutput("Error: Received invalid data from the server.");
      }

    } catch (error) {
      console.error("Error generating snippet:", error);
      setOutput(`An error occurred: ${error}`); // Show error in output box
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>MPI Planner Tool</h1>

      <div className={styles.formGroup}>
        <label htmlFor="objective" className={styles.label}>What is your primary goal?</label>
        <input id="objective" type="text" className={styles.input} value={objective} onChange={(e) => setObjective(e.target.value)} placeholder="e.g., Generate a marketing email"/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="audience" className={styles.label}>Audience (Optional)</label>
        <input id="audience" type="text" className={styles.input} value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="e.g., Potential new customers"/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="format" className={styles.label}>Format (Optional)</label>
        <textarea id="format" className={styles.textarea} value={format} onChange={(e) => setFormat(e.target.value)} placeholder="e.g., A friendly, concise email with a clear call-to-action" rows={4}/>
      </div>

      <button onClick={handleSubmit} className={styles.submitButton} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Snippet'}
      </button>

      <div className={styles.outputSection}>
        <h2 className={styles.outputTitle}>Generated Prompt Snippet</h2>
        {usedCard && <p style={{ fontSize: '0.9rem', color: '#71717A', marginTop: '-0.5rem', marginBottom: '1rem' }}>(Generated using P-Card: {usedCard})</p>}
        <pre className={styles.outputBlock}>{output}</pre>
      </div>

      {output && !output.startsWith('Error:') && ( // Only show audit button on success
        <div className={styles.nextStepContainer}>
          <p>Ready for the next step?</p>
          <Link href={`/auditor?prompt=${encodeURIComponent(output)}`} className={styles.button}>
            Audit This Snippet →
          </Link>
        </div>
      )}
    </div>
  );
}