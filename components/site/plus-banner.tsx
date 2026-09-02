import { ArrowUpRight } from 'lucide-react';

export function PlusBanner() {
  return (
    <section className="bg-iris px-5 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[var(--shell)] flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">
            ETHGlobal Plus
          </p>
          <h2 className="display-2 mt-3 max-w-4xl text-balance">
            Airport lounges, eSIM data, and Uber credit.
          </h2>
        </div>
        <a
          className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 font-bold text-ink transition hover:bg-lime"
          href="https://ethglobal.com/plus"
          target="_blank"
          rel="noreferrer"
        >
          See what’s included <ArrowUpRight className="size-5" aria-hidden />
        </a>
      </div>
    </section>
  );
}
