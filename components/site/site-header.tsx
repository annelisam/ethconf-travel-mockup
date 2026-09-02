import { Logo } from '@/components/site/brand';

export function SiteHeader() {
  return (
    <nav className="pointer-events-auto absolute inset-x-0 top-0 z-20 bg-transparent text-white">
      <div className="mx-auto flex w-full max-w-[var(--shell)] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <a aria-label="ETHConf home" className="shrink-0" href="https://ethconf.com">
          <Logo className="h-10 w-auto md:h-14" />
        </a>
      </div>
    </nav>
  );
}
