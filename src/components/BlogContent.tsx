'use client';

import { useEffect, useState } from 'react';
import { TOCItem, extractTableOfContents } from '@/lib/toc';
import { TableOfContents } from '@/components/TableOfContents';

interface BlogContentProps {
  html: string;
}

export function BlogContent({ html }: BlogContentProps) {
  const [toc, setToc] = useState<TOCItem[]>([]);

  useEffect(() => {
    const tocItems = extractTableOfContents(html);
    setToc(tocItems);
  }, [html]);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* TOC sidebar (hidden on mobile, visible on desktop) */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <TableOfContents toc={toc} />
      </div>
      
      {/* Blog content */}
      <div 
        className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-a:text-primary"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
} 