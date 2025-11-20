import Link from 'next/link';

export default function StepsIndexPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The MPI Process</h1>
      <p style={{ fontSize: '1.2rem', color: '#A1A1AA' }}>
        The Modular Prompt Intelligence process is broken down into three key stages, from initial planning to final execution. Select a stage below to see the detailed steps.
      </p>
      
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <li>
          <Link href="/steps/steps-0-1" style={{ fontSize: '1.5rem', color: '#E4E4E7', textDecoration: 'none', fontWeight: '600' }}>
            Stage 1: Steps 0 & 1 - Planning & Structuring
          </Link>
        </li>
        <li>
          <Link href="/steps/steps-2-3" style={{ fontSize: '1.5rem', color: '#E4E4E7', textDecoration: 'none', fontWeight: '600' }}>
            Stage 2: Steps 2 & 3 - Drafting & Assembling
          </Link>
        </li>
        <li>
          <Link href="/steps/steps-4-5-6" style={{ fontSize: '1.5rem', color: '#E4E4E7', textDecoration: 'none', fontWeight: '600' }}>
            Stage 3: Steps 4, 5, & 6 - Refinement, Testing & Execution
          </Link>
        </li>
      </ul>
    </div>
  );
}