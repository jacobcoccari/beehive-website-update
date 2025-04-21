'use client';

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function extractTableOfContents(html: string): TOCItem[] {
  const toc: TOCItem[] = [];
  
  // Use regex to find all headings
  const headingRegex = /<h([1-6])[^>]*?id="([^"]*?)"[^>]*?>([^<]*?)<\/h[1-6]>/g;
  const headingRegexNoId = /<h([1-6])[^>]*?>([^<]*?)<\/h[1-6]>/g;
  
  // First pass: collect headings with IDs
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    const [, level, id, text] = match;
    toc.push({
      id,
      text: text.trim(),
      level: parseInt(level),
    });
  }
  
  // Second pass: collect headings without IDs
  headingRegexNoId.lastIndex = 0; // Reset regex index
  while ((match = headingRegexNoId.exec(html)) !== null) {
    const [, level, text] = match;
    // Skip if this heading was already processed (had an ID)
    if (html.slice(match.index).includes('id="')) continue;
    
    const id = text
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
      
    toc.push({
      id,
      text: text.trim(),
      level: parseInt(level),
    });
  }
  
  return toc;
} 