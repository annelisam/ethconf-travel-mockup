'use client';

import { ChevronDown, MapPin, RotateCcw, Wallet } from 'lucide-react';

import {
  type SortKey,
  maxPrice as widestPrice,
  maxWalk as widestWalk,
  priceOptions,
  sortOptions,
  walkOptions,
} from '@/lib/hotels';

type FilterBarProps = {
  maxWalkMinutes: number;
  maxNightlyRate: number;
  sortBy: SortKey;
  resultCount: number;
  isFiltered: boolean;
  onWalkChange: (value: number) => void;
  onPriceChange: (value: number) => void;
  onSortChange: (value: SortKey) => void;
  onReset: () => void;
};

export function FilterBar({
  maxWalkMinutes,
  maxNightlyRate,
  sortBy,
  resultCount,
  isFiltered,
  onWalkChange,
  onPriceChange,
  onSortChange,
  onReset,
}: FilterBarProps) {
  return (
    <div className="rounded-3xl border border-ink/12 bg-white p-4 shadow-[var(--shadow-panel)] sm:p-6">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap gap-3">
          <div className="filter-group" role="group" aria-label="Walk to Javits">
            <span className="filter-label">
              <MapPin className="size-4" aria-hidden /> Walk to Javits
            </span>
            {walkOptions.map((minutes) => (
              <button
                key={minutes}
                type="button"
                className="filter-chip"
                aria-pressed={maxWalkMinutes === minutes}
                onClick={() => onWalkChange(minutes)}
              >
                {minutes === widestWalk ? 'Any' : `≤ ${minutes} min`}
              </button>
            ))}
          </div>

          <div className="filter-group" role="group" aria-label="Nightly rate">
            <span className="filter-label">
              <Wallet className="size-4" aria-hidden /> Nightly rate
            </span>
            {priceOptions.map((price) => (
              <button
                key={price}
                type="button"
                className="filter-chip"
                aria-pressed={maxNightlyRate === price}
                onClick={() => onPriceChange(price)}
              >
                {price === widestPrice ? 'Any' : `≤ $${price}`}
              </button>
            ))}
          </div>
        </div>

        <label className="flex h-11 shrink-0 items-center gap-2 rounded-full border border-ink/12 bg-paper px-4 text-sm font-semibold">
          Sort
          <span className="relative flex items-center">
            <select
              className="appearance-none bg-transparent pr-6 outline-none"
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value as SortKey)}
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-0 size-4"
              aria-hidden
            />
          </span>
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-5 text-sm">
        <p aria-live="polite">
          <span className="font-bold">{resultCount}</span>{' '}
          {resultCount === 1 ? 'partner stay matches' : 'partner stays match'}
          {isFiltered ? (
            <button
              type="button"
              onClick={onReset}
              className="ml-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.08em] text-iris-deep underline-offset-4 hover:underline"
            >
              <RotateCcw className="size-3.5" aria-hidden /> Reset filters
            </button>
          ) : null}
        </p>
        <p className="hidden text-ink-muted sm:block">
          Rates shown per night · Taxes may apply
        </p>
      </div>
    </div>
  );
}
