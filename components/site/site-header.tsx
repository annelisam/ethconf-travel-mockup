'use client';

import { ArrowUpRight } from 'lucide-react';

import { Wordmark } from '@/components/site/brand';
import { Button } from '@/components/ui/button';
import { useActiveSection } from '@/hooks/use-active-section';

const navItems = [
  { id: 'stays', label: 'Stays' },
  { id: 'venue', label: 'Venue' },
  { id: 'essentials', label: 'Getting there' },
];

const sectionIds = navItems.map((item) => item.id);

export function SiteHeader() {
  const active = useActiveSection(sectionIds, 'stays');

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
      <div className="shell flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
        <a href="#top" aria-label="ETHConf home" className="shrink-0">
          <Wordmark />
        </a>

        <nav
          aria-label="Page sections"
          className="hidden items-center gap-8 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              className="nav-link"
              href={`#${item.id}`}
              data-active={active === item.id}
              aria-current={active === item.id ? 'true' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="h-10 shrink-0 rounded-full bg-ink px-5 text-white hover:bg-ink-raised">
          Get tickets <ArrowUpRight data-icon="inline-end" />
        </Button>
      </div>

      {/* Compact section jumper for narrow screens. */}
      <nav
        aria-label="Page sections"
        className="flex gap-2 overflow-x-auto border-t border-ink/8 px-5 py-2.5 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-active={active === item.id}
            className="shrink-0 rounded-full border border-ink/12 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-ink-soft transition data-[active=true]:border-ink data-[active=true]:bg-ink data-[active=true]:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
