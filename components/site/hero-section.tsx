'use client';

import { ArrowDown, ExternalLink } from 'lucide-react';

import { EVENT_CITY, EVENT_DATES } from '@/components/site/brand';
import { Button } from '@/components/ui/button';

const DIRECTIONS_URL =
  'https://maps.google.com/?q=Javits+Center+429+11th+Ave+New+York';

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-white"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute -left-24 top-36 size-80 rounded-full bg-iris/30 blur-[90px]" />

      <div className="mx-auto grid w-full max-w-[var(--shell)] lg:min-h-[660px] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative z-10 flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-iris-light">
            <span className="h-px w-8 bg-iris-light" aria-hidden />
            {EVENT_DATES} · {EVENT_CITY}
          </p>

          <h1 id="hero-title" className="display-1 max-w-[650px] text-balance">
            Stay close to what matters.
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-white/70">
            Find your best base for three days at ETHConf — from the right hotel
            to the fastest route into Javits Center.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              className="h-12 rounded-full bg-ember px-6 text-base text-ink hover:bg-ember-light"
              onClick={() =>
                document
                  .querySelector('#stays')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Find a place to stay <ArrowDown data-icon="inline-end" />
            </Button>
            <a
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold transition hover:bg-white/10"
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
            >
              Get directions <ExternalLink className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="grid min-h-[430px] grid-cols-2 grid-rows-[1.35fr_0.85fr] gap-2 p-2 sm:min-h-[560px] lg:min-h-0 lg:grid-cols-[1.25fr_0.75fr] lg:grid-rows-2">
          <figure className="media-figure col-span-2 lg:col-span-1 lg:row-span-2">
            <img
              src="/images/ethconf-71ini.jpg"
              alt="Attendees gathering in the ETHConf 2026 welcome area at the Javits Center"
            />
            <div className="media-scrim" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="rounded-full bg-lime px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-ink">
                From ETHConf 2026
              </span>
              <p className="mt-3 max-w-xs font-display text-2xl leading-tight">
                The Javits welcome hall, ready for round two.
              </p>
            </figcaption>
          </figure>

          <figure className="media-figure">
            <img
              src="/images/javits-main.jpg"
              alt="The Javits Center glass facade illuminated at dusk"
            />
            <div className="media-scrim" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs font-medium leading-snug sm:p-5 sm:text-sm">
              429 11th Ave
              <span className="block text-white/70">Hudson Yards</span>
            </figcaption>
          </figure>

          <figure className="media-figure">
            <img
              src="/images/ethconf-s3623.jpg"
              alt="The ETHConf 2026 main stage during a keynote"
            />
            <div className="media-scrim" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs font-medium leading-snug sm:p-5 sm:text-sm">
              Inside ETHConf 2026
              <span className="block text-white/70">Main Stage</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
