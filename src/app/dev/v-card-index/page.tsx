import { getMasterVCardIndex, VCardIndexEntry } from '../../../lib/card';

export default async function VCardIndexPage() {
  const vCardIndex = await getMasterVCardIndex();

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Master V-Card Index</h1>
      <p style={{ color: '#A1A1AA', marginTop: 0, marginBottom: '2rem' }}>
        Found {vCardIndex.length} total V-Cards and System Cards. Use this list to audit your P-Card references.
      </p>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #3F3F46', padding: '0.5rem', textAlign: 'left' }}>ID</th>
            <th style={{ border: '1px solid #3F3F46', padding: '0.5rem', textAlign: 'left' }}>Title</th>
          </tr>
        </thead>
        <tbody>
          {vCardIndex.map((card: VCardIndexEntry) => (
            <tr key={card.id}>
              <td style={{ border: '1px solid #3F3F46', padding: '0.5rem', fontFamily: 'monospace' }}>{card.id}</td>
              <td style={{ border: '1px solid #3F3F46', padding: '0.5rem' }}>{card.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}