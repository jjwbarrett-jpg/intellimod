import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

async function getStepContent(filename: string) {
  const contentDirectory = path.join(process.cwd(), 'content', 'system-reference');
  const fullPath = path.join(contentDirectory, filename);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    return processedContent.toString();
  } catch (error) {
    return `<p><em>Content for ${filename} not found.</em></p>`;
  }
}

export default async function StepsPage() {
  const step0 = await getStepContent('01-intellimod-mpi-step0.md');
  const step1 = await getStepContent('02-intellimod-mpi-step1.md');

  return (
    <div className="content-container">
      <h1>Phase 1: Planning & Structuring</h1>
      <div dangerouslySetInnerHTML={{ __html: step0 }} />
      <hr style={{ margin: '3rem 0', borderColor: '#333' }} />
      <div dangerouslySetInnerHTML={{ __html: step1 }} />
    </div>
  );
}