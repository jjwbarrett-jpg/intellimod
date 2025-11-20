import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import styles from './page.module.css'; // Import our new styles

function getCardFiles(dir: string): string[] {
  let files: string[] = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getCardFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function getAllCards() {
  const cardsDirectory = path.join(process.cwd(), 'content/adaptive-cards');
  const allCardFilePaths = getCardFiles(cardsDirectory);

  const allCardsData = allCardFilePaths.map((filePath) => {
    const cardId = path.basename(filePath, '.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);
    return {
  id: cardId, // The ID from the filename
  title: matterResult.data.title,
  card_type: matterResult.data.card_type,
};
  });
  return allCardsData;
}

export default async function CardLibraryPage() {
  const allCards = await getAllCards();
  const pCards = allCards.filter(card => card.card_type === 'P-Card').sort((a, b) => a.title.localeCompare(b.title));
  const vCards = allCards.filter(card => card.card_type === 'V-Card').sort((a, b) => a.title.localeCompare(b.title));
  const systemCards = allCards.filter(card => card.card_type === 'System-Card').sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Adaptive Card Library</h1>

      <section className={styles.section}>
        <h2 className={styles.heading}>P-Cards (User Facing)</h2>
        <div className={styles.grid}>
          {pCards.map((card) => (
            <Link key={card.id} href={`/cards/${card.id}`} className={styles.cardLink}>
              {card.title}
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>V-Cards (AI Facing)</h2>
        <div className={styles.grid}>
          {vCards.map((card) => (
            <Link key={card.id} href={`/cards/${card.id}`} className={`${styles.cardLink} ${styles.vCardLink}`}>
              {card.title}
            </Link>
          ))}
        </div>
      </section>
      
    </div>
  );
}