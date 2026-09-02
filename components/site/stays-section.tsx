'use client';

import { CompareBar } from '@/components/site/compare-bar';
import { FilterBar } from '@/components/site/filter-bar';
import { HotelCard } from '@/components/site/hotel-card';
import { SectionIntro } from '@/components/site/section-intro';
import { Button } from '@/components/ui/button';
import { useHotelFilters } from '@/hooks/use-hotel-filters';

export function StaysSection() {
  const filters = useHotelFilters();

  return (
    <>
      <section
        id="stays"
        className="section-pad scroll-mt-28 border-b border-ink/10"
        aria-labelledby="stays-title"
      >
        <div className="shell">
          <SectionIntro
            eyebrow="Where to stay"
            title={<span id="stays-title">Partner rates at 8 hotels.</span>}
          >
            <p className="lede">
              Rates below are negotiated for ETHConf attendees. Filter by walk
              time to Javits and nightly budget, then shortlist up to three to
              compare side by side.
            </p>
          </SectionIntro>

          <div className="mt-12">
            <FilterBar
              maxWalkMinutes={filters.maxWalkMinutes}
              maxNightlyRate={filters.maxNightlyRate}
              sortBy={filters.sortBy}
              resultCount={filters.results.length}
              isFiltered={filters.isFiltered}
              onWalkChange={filters.setMaxWalkMinutes}
              onPriceChange={filters.setMaxNightlyRate}
              onSortChange={filters.setSortBy}
              onReset={filters.showEveryStay}
            />
          </div>

          {filters.results.length ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {filters.results.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  hotel={hotel}
                  isSelected={filters.selectedIds.includes(hotel.id)}
                  canSelect={!filters.shortlistIsFull}
                  onToggle={filters.toggleShortlist}
                />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-dashed border-ink/20 bg-white p-12 text-center">
              <p className="font-display text-3xl">
                No stays match those filters.
              </p>
              <p className="mt-2 text-ink-muted">
                Widen the walk time or raise the nightly cap.
              </p>
              <Button
                className="mt-5 h-11 rounded-full px-5"
                onClick={filters.showEveryStay}
              >
                Show all stays
              </Button>
            </div>
          )}
        </div>
      </section>

      <CompareBar
        shortlist={filters.shortlist}
        onClear={filters.clearShortlist}
      />
    </>
  );
}
