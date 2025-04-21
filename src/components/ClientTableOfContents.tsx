'use client';

import { useMemo } from 'react';
import { extractTableOfContents } from '@/lib/toc';
import { TableOfContents } from './TableOfContents';

interface ClientTableOfContentsProps {
  html: string;
}

export function ClientTableOfContents({ html }: ClientTableOfContentsProps) {
  const toc = useMemo(() => extractTableOfContents(html), [html]);
  
  return <TableOfContents toc={toc} />;
} 