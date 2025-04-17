'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TOCItem } from '@/lib/toc';

interface TableOfContentsProps {
  toc: TOCItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    // Observe all section headings
    const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headingElements.forEach((element) => observer.observe(element));

    return () => {
      headingElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="sticky top-20 w-64 max-h-[calc(100vh-5rem)] overflow-auto">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Table of contents</h3>
      </div>
      <nav>
        <ul className="space-y-2">
          {toc.map((item) => (
            <li 
              key={item.id}
              className={`text-sm ${activeId === item.id ? 'font-bold text-primary' : 'text-muted-foreground'}`}
              style={{ paddingLeft: `${(item.level - 2) * 0.75}rem` }}
            >
              <Link 
                href={`#${item.id}`}
                className="hover:text-primary transition-colors"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
} 