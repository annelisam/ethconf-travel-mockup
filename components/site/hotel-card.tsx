'use client';

import { ArrowUpRight, Check, Clock3, Star, TrainFront } from 'lucide-react';

import { type Hotel, formatWalk } from '@/lib/hotels';

const BOOKING_URL = 'https://ethconf.com/travel';

export function HotelCard({
  hotel,
  isSelected,
  canSelect,
  onToggle,
}: {
  hotel: Hotel;
  isSelected: boolean;
  canSelect: boolean;
  onToggle: (id: string) => void;
}) {
  const disabled = !isSelected && !canSelect;

  return (
    <article className="hotel-card group" data-selected={isSelected}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#deddd8]">
        <img
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
          src={hotel.image}
          alt={`Exterior of ${hotel.name}`}
          loading="lazy"
        />
        {hotel.tag ? (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.075em] shadow-sm">
            {hotel.tag}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-ink-muted">
          <span className="truncate">{hotel.neighborhood}</span>
          <span className="flex shrink-0 items-center gap-1">
            <Star className="size-3 fill-gold text-gold" aria-hidden />
            <span className="sr-only">Rated</span>
            {hotel.stars}.0
          </span>
        </div>

        <h3 className="mt-3 font-display text-2xl leading-[1.05] tracking-[-0.03em]">
          {hotel.name}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="stat-pill">
            <Clock3 className="size-3.5 text-iris" aria-hidden />
            {formatWalk(hotel)}
          </span>
          <span className="stat-pill">
            <TrainFront className="size-3.5 text-iris" aria-hidden />
            {hotel.transit} min transit
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-ink/10 pt-5">
          <div className="min-w-0">
            <p className="truncate text-xs text-ink-muted">{hotel.room}</p>
            <p className="mt-1 text-lg font-bold">
              ${hotel.price}
              <span className="text-xs font-normal text-ink-muted">
                {' '}
                / night
              </span>
            </p>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink text-white transition group-hover:bg-iris"
            aria-label={`View rates for ${hotel.name}`}
          >
            <ArrowUpRight className="size-5" aria-hidden />
          </a>
        </div>
      </div>

      <button
        type="button"
        className="compare-toggle"
        data-selected={isSelected}
        disabled={disabled}
        aria-pressed={isSelected}
        onClick={() => onToggle(hotel.id)}
      >
        {isSelected ? (
          <>
            <Check className="size-4" aria-hidden /> Added to compare
          </>
        ) : disabled ? (
          'Compare list full'
        ) : (
          'Add to compare'
        )}
      </button>
    </article>
  );
}
