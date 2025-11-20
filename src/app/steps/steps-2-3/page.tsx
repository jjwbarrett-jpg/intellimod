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
  const step2 = await getStepContent('03-intellimod-mpi-step2.md');
  const step3 = await getStepContent('04-intellimod-mpi-step3.md');

  return (
    <div className="content-container">
      <h1>Phase 2: Drafting & Assembling</h1>
      <div dangerouslySetInnerHTML={{ __html: step2 }} />
      <hr style={{ margin: '3rem 0', borderColor: '#333' }} />
      <div dangerouslySetInnerHTML={{ __html: step3 }} />
    </div>
  );
}