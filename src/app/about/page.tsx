import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

async function getAboutContent() {
  const contentDirectory = path.join(process.cwd(), 'content');
  const fullPath = path.join(contentDirectory, 'about.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the contentHtml
  return {
    contentHtml,
    ...matterResult.data,
  };
}

export default async function AboutPage() {
  const aboutData = await getAboutContent();
  
  return (
    <main style={{ padding: '4rem', fontFamily: 'sans-serif', backgroundColor: '#111', color: '#eee', minHeight: '100vh' }}>
      <div className="content-container">
  <div dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} />
</div>
    </main>
  );
}
