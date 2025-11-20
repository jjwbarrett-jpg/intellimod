import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

// --- V-Card Indexer Functions ---

export interface VCardIndexEntry {
  id: string;
  title: string;
}

async function findMarkdownFiles(dir: string): Promise<string[]> {
  let files: string[] = [];
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(await findMarkdownFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

export async function getMasterVCardIndex(): Promise<VCardIndexEntry[]> {
  const vCardsDir = path.join(process.cwd(), 'content/adaptive-cards/v-cards');
  const systemCardsDir = path.join(process.cwd(), 'content/adaptive-cards/system-cards');
  const vCardFiles = await findMarkdownFiles(vCardsDir).catch(() => []); // Handle potential errors if dir doesn't exist
  const systemCardFiles = await findMarkdownFiles(systemCardsDir).catch(() => []); // Handle potential errors
  const allFiles = [...vCardFiles, ...systemCardFiles];
  const index: VCardIndexEntry[] = [];

  for (const filePath of allFiles) {
    try {
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data } = matter(fileContents);
      if (data.id && data.title) {
        index.push({ id: data.id, title: data.title });
      }
    } catch (error) {
      console.error(`Error reading or parsing file: ${filePath}`, error);
    }
  }
  return index.sort((a, b) => a.title.localeCompare(b.title));
}

// --- P-Card Loading Functions ---

export interface PCardData {
  id: string;
  title: string;
  card_type: string;
  category: string;
  purpose: string;
  references?: string[];
  tags?: string[];
  content: string;
}

export async function getAllPCards(): Promise<PCardData[]> {
  const pCardsDir = path.join(process.cwd(), 'content/adaptive-cards/p-cards');
  const pCardFiles = await findMarkdownFiles(pCardsDir).catch(() => []); // Handle potential errors
  const allPCards: PCardData[] = [];

  for (const filePath of pCardFiles) {
    try {
      const cardId = path.basename(filePath, '.md');
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      if (data.title && data.card_type === 'P-Card' && data.purpose) {
        allPCards.push({
          id: cardId,
          title: data.title,
          card_type: data.card_type,
          category: data.category || 'Uncategorized',
          purpose: data.purpose,
          references: data.references || [],
          tags: data.tags || [],
          content: content.trim(),
        });
      }
    } catch (error) {
      console.error(`Error reading or parsing P-Card file: ${filePath}`, error);
    }
  }
  return allPCards;
}

// Function to find the best P-Card based on keywords, with a Fallback
export function findBestPCard(objective: string, allPCards: PCardData[]): PCardData | null {
  if (!objective) return null;
  const objectiveLower = objective.toLowerCase();
  const keywords = objectiveLower.split(/\s+/).filter(kw => kw.length > 2);

  let bestMatch: PCardData | null = null;
  let highestScore = -1;

  for (const card of allPCards) {
    const purposeLower = card.purpose.toLowerCase();
    const tagsLower = (card.tags || []).map(tag => tag.toLowerCase());
    let score = 0;

    // Score based on purpose
    keywords.forEach(kw => {
      if (purposeLower.includes(kw)) score += 2;
    });

    // Score based on tags (higher weight)
    keywords.forEach(kw => {
      tagsLower.forEach(tag => {
        if (tag.includes(kw)) score += 5;
      });
    });

    // Bonus for exact purpose match
    if (purposeLower.includes(objectiveLower)) score += 10;

    if (score > highestScore) {
      highestScore = score;
      bestMatch = card;
    }
  }

  // --- NEW FALLBACK LOGIC ---
  // If no card scored > 0, try to find the General/Default card
  if (highestScore <= 0) {
    console.log("--- Router: No specific match found. Searching for Fallback Card... ---");
    const fallbackCard = allPCards.find(card => 
      card.id === 'PC_GENERAL_001' || 
      card.tags?.includes('default') || 
      card.tags?.includes('general')
    );
    
    if (fallbackCard) {
      console.log(`--- Router: Using Fallback Card: ${fallbackCard.title} ---`);
      return fallbackCard;
    }
  }
  // --------------------------

  return bestMatch;
}
// --- V-Card Loading Functions ---

// Define the structure for full V-Card data
export interface VCardData {
  id: string;
  title: string;
  card_type: string;
  purpose: string;
  tags?: string[];
  content: string; // The main AI prompt content
}

// Helper to find a specific V-Card/System-Card file by ID
async function findVCardFileById(id: string): Promise<string | null> {
    const vCardsDir = path.join(process.cwd(), 'content/adaptive-cards/v-cards');
    const systemCardsDir = path.join(process.cwd(), 'content/adaptive-cards/system-cards');

    // Search in V-Cards folder
    let filePath = await findMarkdownFiles(vCardsDir).then(async files => { // Added async here
        for (const file of files) {
            const fileContent = await fs.readFile(file, 'utf8'); // Corrected to readFile
            if (path.basename(file, '.md') === id || matter(fileContent).data.id === id) {
                return file;
            }
        }
        return undefined;
    }).catch(() => undefined);

    if (filePath) return filePath;

    // If not found, search in System Cards folder
    filePath = await findMarkdownFiles(systemCardsDir).then(async files => { // Added async here
        for (const file of files) {
            const fileContent = await fs.readFile(file, 'utf8'); // Corrected to readFile
            if (path.basename(file, '.md') === id || matter(fileContent).data.id === id) {
                return file;
            }
        }
        return undefined;
    }).catch(() => undefined);

    return filePath || null;
}


// Function to get the full content of multiple V-Cards by their IDs
export async function getVCardsByIds(ids: string[]): Promise<VCardData[]> {
  const vCardsData: VCardData[] = [];

  for (const id of ids) {
    const filePath = await findVCardFileById(id);
    if (filePath) {
      try {
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        if (data.title && (data.card_type === 'V-Card' || data.card_type === 'System-Card') && data.purpose) {
            vCardsData.push({
                id: data.id || id, // Prefer ID from frontmatter if available
                title: data.title,
                card_type: data.card_type,
                purpose: data.purpose,
                tags: data.tags || [],
                content: content.trim(),
            });
        }
      } catch (error) {
        console.error(`Error reading or parsing V-Card file for ID ${id}: ${filePath}`, error);
      }
    } else {
        console.warn(`V-Card with ID ${id} referenced but not found.`);
    }
  }
  return vCardsData;
}
// --- Single P-Card Loading Function ---

// Function to find and load a single P-Card by its ID (filename)
export async function getPCardById(id: string): Promise<PCardData | null> {
    const pCardsDir = path.join(process.cwd(), 'content/adaptive-cards/p-cards');
    // Find the file path using the existing findMarkdownFiles helper
    const allFiles = await findMarkdownFiles(pCardsDir).catch(() => []);
    const filePath = allFiles.find(file => path.basename(file, '.md') === id);

    if (!filePath) {
        console.warn(`P-Card with ID ${id} requested but not found.`);
        return null;
    }

    try {
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        if (data.title && data.card_type === 'P-Card' && data.purpose) {
            return {
                id: id,
                title: data.title,
                card_type: data.card_type,
                category: data.category || 'Uncategorized',
                purpose: data.purpose,
                references: data.references || [],
                tags: data.tags || [],
                content: content.trim(),
            };
        }
    } catch (error) {
        console.error(`Error reading or parsing P-Card file for ID ${id}: ${filePath}`, error);
    }
    return null;
}