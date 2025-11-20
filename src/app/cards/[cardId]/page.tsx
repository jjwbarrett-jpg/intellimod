import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Helper function to find a file by its name in any subdirectory
async function findCardFile(dir: string, fileId: string): Promise<string | null> {
  const items = await fs.readdir(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      const result = await findCardFile(fullPath, fileId);
      if (result) return result; // Found in subdirectory
    } else if (path.basename(item.name, '.md') === fileId) {
      return fullPath; // Found the file
    }
  }
  return null;
}

// Function to get the data for a single card by its ID
async function getCardData(cardId: string) {
  const cardsDirectory = path.join(process.cwd(), 'content/adaptive-cards');
  const fullPath = await findCardFile(cardsDirectory, cardId);

  if (!fullPath) {
    return null; // Handle case where card is not found
  }

  const fileContents = await fs.readFile(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id: cardId,
    contentHtml,
    ...(matterResult.data as { title: string; card_type: string }),
  };
}

// The main page component with the corrected structure
export default async function CardPage({ params }: { params: { cardId: string } }) {
  const cardData = await getCardData(params.cardId);

  if (!cardData) {
    return <div>Card not found.</div>;
  }

  return (
    <div>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{cardData.title}</h1>
      <p style={{ fontSize: '1.2rem', color: '#A1A1AA', marginTop: 0, marginBottom: '2.5rem', borderBottom: '1px solid #3F3F46', paddingBottom: '1rem' }}>
        Card Type: {cardData.card_type}
      </p>
      <div
        className="content-container" // Use the global styles we already created
        dangerouslySetInnerHTML={{ __html: cardData.contentHtml }}
      />
    </div>
  );
}