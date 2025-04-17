'use client';

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function extractTableOfContents(html: string): TOCItem[] {
  const toc: TOCItem[] = [];
  
  // Match all heading tags with their content
  const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h[1-6]>/g;
  let match;
  
  while ((match = headingRegex.exec(html)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]*>/g, ''); // Remove any nested HTML tags
    
    // Create an ID from the text
    const id = text
      .toLowerCase()
      .replace(/<[^>]*>/g, '') // Remove any remaining HTML
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-'); // Replace spaces with hyphens
    
    toc.push({
      id,
      text,
      level,
    });
  }
  
  return toc;
} 