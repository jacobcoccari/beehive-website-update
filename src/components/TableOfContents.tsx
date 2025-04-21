'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TOCItem } from '@/lib/toc';

interface TableOfContentsProps {
  toc: TOCItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  // Initialize with the first item's ID if available
  const [activeId, setActiveId] = useState<string>(toc[0]?.id || '');

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
    <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-auto">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Table of contents</h3>
      </div>
      <nav className="relative border-l border-gray-200/60">
        <ul className="space-y-3">
          {toc.map((item) => (
            <li 
              key={item.id}
              className={`
                relative text-sm pl-6
                ${item.level <= 2 ? 'font-bold' : 'font-normal'}
                ${activeId === item.id 
                  ? 'before:absolute before:left-[-1px] before:top-0 before:h-full before:w-[2px] before:bg-blue-500' 
                  : 'text-muted-foreground'
                }
              `}
              style={{ 
                marginLeft: `${(item.level - 2) * 0.75}rem`,
              }}
            >
              <Link 
                href={`#${item.id}`}
                className={`
                  block transition-colors
                  hover:text-blue-500
                  ${activeId === item.id 
                    ? 'text-blue-500'
                    : ''
                  }
                `}
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