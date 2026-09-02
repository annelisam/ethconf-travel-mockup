'use client';

import { X } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MAX_COMPARE, type Hotel } from '@/lib/hotels';

export function CompareBar({
  shortlist,
  onClear,
}: {
  shortlist: Hotel[];
  onClear: () => void;
}) {
  if (!shortlist.length) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-[min(94%,760px)] items-center justify-between gap-4 rounded-2xl border border-white/10 bg-ink/95 px-4 py-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-5">
      <div className="flex min-w-0 items-center gap-3">
        <div className="hidden -space-x-2 sm:flex">
          {shortlist.map((hotel) => (
            <img
              key={hotel.id}
              className="size-9 rounded-full border-2 border-ink object-cover"
              src={hotel.image}
              alt=""
            />
          ))}
        </div>
        <p className="truncate text-sm">
          <span className="font-bold">{shortlist.length} selected</span>
          <span className="hidden text-white/55 sm:inline">
            {' '}
            · Pick up to {MAX_COMPARE} stays
          </span>
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-full text-white/55 transition hover:bg-white/10 hover:text-white"
          onClick={onClear}
          aria-label="Clear hotel comparison"
        >
          <X className="size-4" aria-hidden />
        </button>
        <Dialog>
          <DialogTrigger className="h-10 rounded-full bg-lime px-5 text-sm font-bold text-ink transition hover:bg-white">
            Compare stays
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] max-w-[min(94vw,900px)] overflow-y-auto bg-paper p-5 sm:max-w-[min(94vw,900px)] sm:p-7">
            <DialogHeader>
              <DialogTitle className="font-display text-3xl tracking-[-0.03em]">
                Your shortlist
              </DialogTitle>
              <DialogDescription>
                Compare what matters most: time to Javits and nightly price.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {shortlist.map((hotel) => (
                <article
                  key={hotel.id}
                  className="overflow-hidden rounded-2xl border border-ink/10 bg-white"
                >
                  <img
                    className="aspect-[16/10] w-full object-cover"
                    src={hotel.image}
                    alt=""
                  />
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.08em] text-ink-muted">
                      {hotel.neighborhood}
                    </p>
                    <h3 className="mt-2 min-h-[2.6rem] font-display text-xl leading-tight">
                      {hotel.name}
                    </h3>
                    <dl className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between gap-2">
                        <dt className="text-ink-muted">Walk</dt>
                        <dd className="font-bold">{hotel.walk} min</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-ink-muted">Transit</dt>
                        <dd className="font-bold">{hotel.transit} min</dd>
                      </div>
                      <div className="flex justify-between gap-2 border-t border-ink/10 pt-2">
                        <dt className="text-ink-muted">From</dt>
                        <dd className="font-bold">${hotel.price}/night</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
