import { EVENT_DATES, VENUE, Wordmark } from '@/components/site/brand';

const links = [
  { label: 'Home', href: 'https://ethconf.com' },
  { label: 'Tickets', href: 'https://ethconf.com/tickets' },
  { label: 'Contact', href: 'mailto:hello@ethglobal.com' },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink-deep px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[var(--shell)] flex-col justify-between gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center">
        <Wordmark markClassName="size-5 text-white" />
        <p className="text-sm text-white/55">
          {EVENT_DATES} · {VENUE}, NYC
        </p>
        <div className="flex gap-5 text-sm font-semibold">
          {links.map((link) => (
            <a key={link.label} className="hover:text-iris-light" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[var(--shell)] flex-col gap-2 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between">
        <span>© 2027 ETHGlobal</span>
        <span>Travel mockup · Rates subject to availability</span>
      </div>
    </footer>
  );
}
