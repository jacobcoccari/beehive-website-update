'use client';

interface BlogContentProps {
  html: string;
}

export function BlogContent({ html }: BlogContentProps) {
  return (
    <div 
      className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-a:text-primary"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
} 