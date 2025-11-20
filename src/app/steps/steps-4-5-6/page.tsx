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
  const step4 = await getStepContent('05-intellimod-mpi-step4.md');
  const step5 = await getStepContent('06-intellimod-mpi-step5.md');
  const step6 = await getStepContent('07-intellimod-mpi-step6.md');

  return (
    <div className="content-container">
      <h1>Phase 3: Refinement & Execution</h1>
      <div dangerouslySetInnerHTML={{ __html: step4 }} />
      <hr style={{ margin: '3rem 0', borderColor: '#333' }} />
      <div dangerouslySetInnerHTML={{ __html: step5 }} />
      <hr style={{ margin: '3rem 0', borderColor: '#333' }} />
      <div dangerouslySetInnerHTML={{ __html: step6 }} />
    </div>
  );
}