import { ClientBlogContent } from '@/components/ClientBlogContent';

interface BlogContentProps {
  html: string;
}

export function BlogContent({ html }: BlogContentProps) {
  return <ClientBlogContent html={html} />;
} 