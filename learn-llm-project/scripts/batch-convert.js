const fs = require('fs');
const path = require('path');

// Helper to make string safe for TSX and JS identifiers
function toCamelCase(str) {
  // Convert Pinyin or English words, filter non-alphanumeric
  const cleaned = str.replace(/[^\w\u4e00-\u9fa5]+/g, '');
  // Simple pinyin approximation for a few common Chinese characters in titles
  const pinyinMap = {
    '复习': 'Fuxi', '学习': 'Xuexi', '记录': 'Jilu', '错误': 'Cuowu',
    '累积': 'Leiji', '线性': 'Xianxing', '指数': 'Zhishu', '缓存': 'Huancun',
    '技术': 'Jishu', '幻觉': 'Hanjue', '推理': 'Tuili', '计算': 'Jisuan',
    '智能体': 'Zhinengti', '路由器': 'Luyouqi', '思维链': 'Siweilian',
    '构建': 'Goujian', '可信赖': 'Kexinlai', '规划': 'Guihua', '设计': 'Sheji',
    '管理': 'Guanli', '上下文': 'Shangxiawen'
  };
  let result = cleaned;
  for (const [zh, py] of Object.entries(pinyinMap)) {
    result = result.replace(new RegExp(zh, 'g'), py);
  }
  // Convert non-ascii to empty
  result = result.replace(/[^\x00-\x7F]/g, '');
  // Capitalize first letter
  if (result.length > 0) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }
  return result || 'Page';
}

function escapeString(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n').replace(/\r/g, '\\r');
}

function parseMarkdownToHtml(markdownText) {
  const lines = markdownText.split(/\r?\n/);
  const html = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Bold text
    line = line.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Em text
    line = line.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    // Inline code
    line = line.replace(/`([^`]+)`/g, '<code>$1</code>');

    if (line.startsWith('# ')) {
      if (inList) { html.push('</ul>'); inList = false; }
      html.push(`<h1>${line.substring(2)}</h1>`);
    } else if (line.startsWith('## ')) {
      if (inList) { html.push('</ul>'); inList = false; }
      html.push(`<h2>${line.substring(3)}</h2>`);
    } else if (line.startsWith('### ')) {
      if (inList) { html.push('</ul>'); inList = false; }
      html.push(`<h3>${line.substring(4)}</h3>`);
    } else if (line.startsWith('- ')) {
      if (!inList) { html.push('<ul>'); inList = true; }
      html.push(`<li>${line.substring(2)}</li>`);
    } else if (line === '---') {
      if (inList) { html.push('</ul>'); inList = false; }
      html.push('<hr/>');
    } else if (line === '') {
      if (inList) { html.push('</ul>'); inList = false; }
    } else {
      if (inList) { html.push('</ul>'); inList = false; }
      html.push(`<p>${line}</p>`);
    }
  }

  if (inList) { html.push('</ul>'); }
  return html.join('\n');
}

const markdownCss = `
.react-review-page h1 {
  font-size: 32px;
  font-weight: 200;
  color: var(--silver-1);
  margin-top: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(107, 137, 168, 0.15);
  padding-bottom: 10px;
}
.react-review-page h2 {
  font-size: 22px;
  font-weight: 300;
  color: var(--accent);
  margin-top: 30px;
  margin-bottom: 15px;
}
.react-review-page h3 {
  font-size: 16px;
  font-weight: 400;
  color: var(--gold);
  margin-top: 20px;
  margin-bottom: 10px;
}
.react-review-page p {
  font-size: 14px;
  color: var(--silver-3);
  line-height: 1.7;
  margin-bottom: 15px;
}
.react-review-page ul {
  margin-bottom: 20px;
  padding-left: 20px;
  list-style-type: square;
}
.react-review-page li {
  font-size: 14px;
  color: var(--silver-2);
  line-height: 1.7;
  margin-bottom: 8px;
}
.react-review-page code {
  font-family: 'JetBrains Mono', monospace;
  background: var(--slate-3);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 13px;
  color: var(--accent);
}
`;

function processFile(filePath, category) {
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // 1. Extract Date
  let date = '';
  const dateMatch = baseName.match(/^20\d{2}-\d{2}-\d{2}/);
  if (dateMatch) {
    date = dateMatch[0];
  } else {
    // Match like "3-19复习记录"
    const mdMatch = baseName.match(/^(\d+)-(\d+)/);
    if (mdMatch) {
      date = `2026-${mdMatch[1].padStart(2, '0')}-${mdMatch[2].padStart(2, '0')}`;
    } else {
      // Fallback
      date = '2026-03-19';
    }
  }

  // 2. Extract Title and Summary
  let title = '';
  let summary = '';
  let css = '';
  let htmlBody = '';
  const tasks = [];

  if (ext === '.html') {
    // Extract Title
    const titleMatch = fileContent.match(/<title>([\s\S]*?)<\/title>/);
    title = titleMatch ? titleMatch[1].trim() : baseName;
    title = title.replace(/^20\d{2}-\d{2}-\d{2}\s*·\s*/, '').replace(/^REVIEW\s*·\s*20\d{2}\s*·\s*\d{2}\s*·\s*\d{2}\s*·\s*/i, '');

    // Extract Summary / Lead
    const leadMatch = fileContent.match(/<p class="lead">([\s\S]*?)<\/p>/) || fileContent.match(/<p>([\s\S]*?)<\/p>/);
    summary = leadMatch ? leadMatch[1].replace(/<[^>]+>/g, '').trim() : '';

    // Extract CSS
    const styleMatch = fileContent.match(/<style>([\s\S]*?)<\/style>/);
    css = styleMatch ? styleMatch[1] : '';

    // Extract Body
    const bodyMatch = fileContent.match(/<body>([\s\S]*?)<\/body>/) || fileContent.match(/<main>([\s\S]*?)<\/main>/);
    htmlBody = bodyMatch ? bodyMatch[1] : fileContent;
    // Strip script tags
    htmlBody = htmlBody.replace(/<script[\s\S]*?<\/script>/gi, '');

    // Parse tasks from timeline
    const rowRegex = /<div class="row">\s*<div class="ts">([\s\S]*?)<\/div>\s*<div class="desc">([\s\S]*?)<\/div>\s*<\/div>/gi;
    let match;
    while ((match = rowRegex.exec(htmlBody)) !== null) {
      const tsText = match[1].replace(/<[^>]+>/g, '').trim();
      const descText = match[2].trim();

      const tsDateMatch = tsText.match(/(\d+)\/(\d+)/);
      if (tsDateMatch) {
        const year = date.split('-')[0];
        const month = tsDateMatch[1].padStart(2, '0');
        const day = tsDateMatch[2].padStart(2, '0');
        const taskDueDate = `${year}-${month}-${day}`;

        const strongMatch = descText.match(/<strong>([\s\S]*?)<\/strong>/);
        const taskTitle = strongMatch ? strongMatch[1].replace(/<[^>]+>/g, '').trim() : descText.replace(/<[^>]+>/g, '').split('·')[0].trim();

        const stageMatch = tsText.match(/\((D\d+)\)/) || descText.match(/\b(D\d+)\b/);
        const stage = stageMatch ? stageMatch[1] : '复习';

        const estMatch = descText.match(/(\d+)\s*(?:min|分钟)/);
        const estimate = estMatch ? `${estMatch[1]} min` : '15 min';

        let description = descText.replace(/<[^>]+>/g, '').replace(/^[·\s]+/, '').trim();
        if (taskTitle && description.startsWith(taskTitle)) {
          description = description.substring(taskTitle.length).replace(/^[·\s]+/, '').trim();
        }

        let type = 'scheduled';
        if (descText.includes('不安排复习') || descText.includes('整合')) {
          type = 'rest';
        } else if (tsText.includes('D2') || tsText.includes('D7') || tsText.includes('due') || tsText.includes('到期')) {
          type = 'due';
        }

        tasks.push({
          dueDate: taskDueDate,
          title: taskTitle,
          stage,
          type,
          estimate,
          description
        });
      }
    }
  } else if (ext === '.md') {
    // Extract Title (first line starting with #)
    const titleMatch = fileContent.match(/^#\s+(.*)/m);
    title = titleMatch ? titleMatch[1].trim() : baseName;
    title = title.replace(/^\d+-\d+\s*/, '').replace(/^20\d{2}-\d{2}-\d{2}\s*/, '');

    // Extract Summary (first paragraph after title)
    const paragraphs = fileContent.split('\n\n');
    summary = paragraphs.length > 1 ? paragraphs[1].replace(/<[^>]+>/g, '').replace(/[#*_-]/g, '').trim() : '';
    if (summary.startsWith('掌握的内容') || summary.startsWith('##')) {
      summary = title;
    }

    css = markdownCss;
    htmlBody = parseMarkdownToHtml(fileContent);

    // Parse tasks from Markdown
    const nextReviewRegex = /下次复习[\s\S]*?-\s*\*\*(\d+)月(\d+)日\*\*([（(]([^)]+)[)）])?/i;
    const reviewMatch = fileContent.match(nextReviewRegex);
    if (reviewMatch) {
      const year = date.split('-')[0];
      const month = reviewMatch[1].padStart(2, '0');
      const day = reviewMatch[2].padStart(2, '0');
      const taskDueDate = `${year}-${month}-${day}`;
      const stage = reviewMatch[4] || '复习';

      tasks.push({
        dueDate: taskDueDate,
        title: title + ' 复习',
        stage,
        type: 'due',
        estimate: '15 min',
        description: `基于 ${date} 的学习记录进行间隔检索与主动复述。`
      });
    }
  }

  // Generate JS component name
  const pinyinTheme = toCamelCase(title);
  const componentName = `${category === 'learn' ? 'Learn' : 'Review'}${date.replace(/-/g, '')}${pinyinTheme}`;
  const componentFileName = `${componentName}.tsx`;

  return {
    date,
    title,
    summary,
    css,
    htmlBody,
    tasks,
    componentName,
    componentFileName,
    sourceFile: `${category === 'learn' ? 'learn' : '复习'}/${baseName}${ext}`
  };
}

function run() {
  const rootDir = path.resolve(__dirname, '..');
  const projectDir = path.resolve(rootDir, 'learn-llm-project');
  const reviewPagesDir = path.resolve(projectDir, 'src/review-pages');

  // Readdir
  const fuxiDir = path.resolve(rootDir, '复习');
  const learnDir = path.resolve(rootDir, 'learn');

  const files = [];
  if (fs.existsSync(fuxiDir)) {
    fs.readdirSync(fuxiDir).forEach(f => {
      if (f.endsWith('.html') || f.endsWith('.md')) {
        files.push({ path: path.join(fuxiDir, f), category: '复习' });
      }
    });
  }
  if (fs.existsSync(learnDir)) {
    fs.readdirSync(learnDir).forEach(f => {
      // Ignore directories like demos
      if ((f.endsWith('.html') || f.endsWith('.md')) && fs.statSync(path.join(learnDir, f)).isFile()) {
        files.push({ path: path.join(learnDir, f), category: 'learn' });
      }
    });
  }

  console.log(`Found ${files.length} files to convert.`);

  const results = [];
  files.forEach(f => {
    try {
      const res = processFile(f.path, f.category);
      // Skip the two files that are already converted manually, so we don't overwrite them
      if (res.componentName === 'Review20260531CuowuleijiD2TCCD3Xianxingzhishuyaoshihanshi' ||
          res.componentName === 'Review20260604TCCGuibiePlanningDesignD2KexinlaiAgentD2') {
        console.log(`Skipping already manual pages: ${res.componentName}`);
        return;
      }
      results.push(res);
    } catch (e) {
      console.error(`Error processing ${f.path}:`, e);
    }
  });

  // Write TSX Components
  results.forEach(res => {
    const componentContent = `import ReviewPageFrame from '../components/ReviewPageFrame';

const css = \`${res.css.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`;

const htmlContent = \`${res.htmlBody.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`;

export default function ${res.componentName}() {
  return (
    <ReviewPageFrame css={css}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </ReviewPageFrame>
  );
}
`;
    const targetPath = path.join(reviewPagesDir, res.componentFileName);
    fs.writeFileSync(targetPath, componentContent, 'utf-8');
    console.log(`Wrote component: ${res.componentFileName}`);
  });

  // Update reviewPages.ts
  const reviewPagesPath = path.resolve(projectDir, 'src/data/reviewPages.ts');
  let reviewPagesContent = fs.readFileSync(reviewPagesPath, 'utf-8');

  // Insert Imports
  results.forEach(res => {
    const importStr = `import ${res.componentName} from '../review-pages/${res.componentName}';`;
    if (!reviewPagesContent.includes(importStr)) {
      reviewPagesContent = importStr + '\n' + reviewPagesContent;
    }
  });

  // Insert Route Entries
  results.forEach(res => {
    const entryId = `review-${res.date}-${res.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    const searchStr = `id: '${entryId}'`;
    if (!reviewPagesContent.includes(searchStr)) {
      const entry = `  {
    id: '${entryId}',
    date: '${res.date}',
    title: '${res.date} · ${escapeString(res.title)}',
    shortTitle: '${escapeString(res.title)}',
    sourceFile: '${escapeString(res.sourceFile)}',
    Component: ${res.componentName},
  },`;
      // Find the closing array bracket of reviewPages
      const index = reviewPagesContent.indexOf('export const reviewPages: ReviewPage[] = [');
      if (index !== -1) {
        const insertPos = reviewPagesContent.indexOf('[', index) + 1;
        reviewPagesContent = reviewPagesContent.substring(0, insertPos) + '\n' + entry + reviewPagesContent.substring(insertPos);
      }
    }
  });
  fs.writeFileSync(reviewPagesPath, reviewPagesContent, 'utf-8');
  console.log('Updated reviewPages.ts routes.');

  // Update summaries.ts
  const summariesPath = path.resolve(projectDir, 'src/data/summaries.ts');
  let summariesContent = fs.readFileSync(summariesPath, 'utf-8');

  // Append Records
  results.forEach(res => {
    const recordId = `${res.date}-${res.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    const searchStr = `id: '${recordId}'`;
    if (!summariesContent.includes(searchStr)) {
      const record = `  {
    id: '${recordId}',
    date: '${res.date}',
    time: '${res.sourceFile.startsWith('复习') ? '晚间复习' : '学习记录'}',
    title: '${escapeString(res.title)}',
    subtitle: '',
    sourceFile: '${escapeString(res.sourceFile)}',
    summary: '${escapeString(res.summary.substring(0, 150))}',
    detail: {
      lead: '${escapeString(res.summary)}',
      stats: [],
      keyPoints: [],
      map: '',
      sections: [],
      blindspots: [],
      highlights: [],
      report: [],
      tags: []
    }
  },`;
      const index = summariesContent.indexOf('export const reviewRecords: ReviewRecord[] = [');
      if (index !== -1) {
        const insertPos = summariesContent.indexOf('[', index) + 1;
        summariesContent = summariesContent.substring(0, insertPos) + '\n' + record + summariesContent.substring(insertPos);
      }
    }
  });

  // Append Tasks
  results.forEach(res => {
    const recordId = `${res.date}-${res.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    res.tasks.forEach((t, i) => {
      const taskId = `${recordId}-task-${i}`;
      if (!summariesContent.includes(`id: '${taskId}'`)) {
        const task = `  {
    id: '${taskId}',
    dueDate: '${t.dueDate}',
    title: '${escapeString(t.title)}',
    stage: '${escapeString(t.stage)}',
    type: '${t.type}',
    estimate: '${escapeString(t.estimate)}',
    description: '${escapeString(t.description)}',
    relatedRecordId: '${recordId}'
  },`;
        const index = summariesContent.indexOf('export const reviewTasks: ReviewTask[] = [');
        if (index !== -1) {
          const insertPos = summariesContent.indexOf('[', index) + 1;
          summariesContent = summariesContent.substring(0, insertPos) + '\n' + task + summariesContent.substring(insertPos);
        }
      }
    });
  });

  fs.writeFileSync(summariesPath, summariesContent, 'utf-8');
  console.log('Updated summaries.ts records and tasks.');
  console.log('Conversion complete!');
}

run();
