'use client';

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function extractTableOfContents(html: string): TOCItem[] {
  // Create a temporary div to parse the HTML
  const div = document.createElement('div');
  div.innerHTML = html;
  
  // Get all headings
  const headings = div.querySelectorAll('h1, h2, h3, h4, h5, h6');
  
  const toc: TOCItem[] = [];
  
  headings.forEach((heading) => {
    // Get heading level number
    const level = parseInt(heading.tagName.substring(1));
    
    // Get or create id from heading text
    const id = heading.id || heading.textContent
      ?.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-') || '';
      
    // If heading didn't have an id, set it
    if (!heading.id) {
      heading.id = id;
    }
    
    toc.push({
      id,
      text: heading.textContent || '',
      level,
    });
  });
  
  return toc;
} 