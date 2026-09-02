import { Images } from 'lucide-react';

import { SectionIntro } from '@/components/site/section-intro';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const venueFacts = ['Level 1', 'Halls C–E', 'Accessible venue'];

export function VenueSection() {
  return (
    <section
      id="venue"
      className="section-pad scroll-mt-28 overflow-hidden bg-ink text-white"
      aria-labelledby="venue-title"
    >
      <div className="shell">
        <SectionIntro
          eyebrow="The venue"
          tone="dark"
          title={<span id="venue-title">You’ve been here before.</span>}
        >
          <p className="text-lg leading-8 text-white/70">
            ETHConf returns to Javits Center, a glass-and-steel landmark in
            Hudson Yards. Here’s how the space came to life in 2026 — and the
            layout that kept it moving.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-white/70">
            {venueFacts.map((fact) => (
              <span key={fact} className="pill-outline">
                {fact}
              </span>
            ))}
          </div>
        </SectionIntro>

        <div className="mt-12 grid auto-rows-[220px] gap-3 sm:grid-cols-2 lg:auto-rows-[270px] lg:grid-cols-4">
          <figure className="media-figure sm:col-span-2 lg:row-span-2">
            <img
              src="/images/ethconf-7a3rb.jpg"
              alt="An ETHConf attendee holding a conference badge in the Javits Center atrium"
              loading="lazy"
            />
            <div className="media-scrim" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-lime">
                Arrive
              </p>
              <p className="mt-2 font-display text-3xl leading-tight">
                Bright, open, unmistakably ETHConf.
              </p>
            </figcaption>
          </figure>

          <figure className="media-figure lg:col-span-2">
            <img
              src="/images/ethconf-8wan8.jpg"
              alt="The ETHConf 2026 sponsor and expo area at the Javits Center"
              loading="lazy"
            />
            <div className="media-scrim" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-semibold">
              Meet across the expo floor
            </figcaption>
          </figure>

          <figure className="media-figure">
            <img
              src="/images/ethconf-v2pxj.jpg"
              alt="Overhead wayfinding signage inside the Javits Center"
              loading="lazy"
            />
            <div className="media-scrim" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-semibold">
              Easy wayfinding
            </figcaption>
          </figure>

          <Dialog>
            <DialogTrigger className="media-figure group bg-iris-deep text-left">
              <img
                className="opacity-50 transition duration-700 group-hover:opacity-65"
                src="/images/ethconf-2026-venue-map.jpg"
                alt=""
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/35" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="mb-3 flex size-10 items-center justify-center rounded-full bg-white text-ink">
                  <Images className="size-5" aria-hidden />
                </span>
                <p className="font-display text-2xl leading-tight text-white">
                  Open the 2026 venue map
                </p>
              </div>
            </DialogTrigger>
            <DialogContent className="max-h-[92vh] max-w-[min(96vw,1100px)] overflow-y-auto bg-ink p-3 text-white ring-white/20 sm:max-w-[min(96vw,1100px)]">
              <DialogHeader className="px-3 pt-2">
                <DialogTitle className="font-display text-2xl">
                  ETHConf 2026 venue map
                </DialogTitle>
                <DialogDescription className="text-white/60">
                  A preview of how Halls C, D, and E were organized last year.
                </DialogDescription>
              </DialogHeader>
              <img
                className="mt-1 h-auto w-full"
                src="/images/ethconf-2026-venue-map.jpg"
                alt="Detailed ETHConf 2026 venue map showing the layout of Halls C, D, and E"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
