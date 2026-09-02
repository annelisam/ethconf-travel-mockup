'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  MAX_COMPARE,
  type SortKey,
  filterHotels,
  hotels,
  maxPrice as widestPrice,
  maxWalk as widestWalk,
  priceOptions,
  walkOptions,
} from '@/lib/hotels';

type TravelToolInput = {
  maxWalkMinutes: number;
  maxNightlyRate: number;
  sortBy: SortKey;
};

type ModelContext = {
  registerTool: (
    tool: {
      name: string;
      title: string;
      description: string;
      inputSchema: object;
      annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
      execute: (input: TravelToolInput) => unknown;
    },
    options: { signal: AbortSignal },
  ) => void | Promise<void>;
};

const DEFAULT_WALK = 25;
const DEFAULT_PRICE = 400;

/**
 * Owns the hotel browsing state and exposes it to the host model runtime as a
 * `configure_hotel_filters` tool, so an assistant can drive the same controls
 * the visitor sees.
 */
export function useHotelFilters() {
  const [maxWalkMinutes, setMaxWalkMinutes] = useState<number>(DEFAULT_WALK);
  const [maxNightlyRate, setMaxNightlyRate] = useState<number>(DEFAULT_PRICE);
  const [sortBy, setSortBy] = useState<SortKey>('recommended');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    const context = (document as Document & { modelContext?: ModelContext })
      .modelContext;
    if (!context?.registerTool) return;

    const lifecycle = new AbortController();
    const allowedWalks = new Set<number>(walkOptions);
    const allowedPrices = new Set<number>(priceOptions);
    const allowedSorts = new Set<string>(['recommended', 'distance', 'price']);

    void Promise.resolve(
      context.registerTool(
        {
          name: 'configure_hotel_filters',
          title: 'Configure hotel filters',
          description:
            'Update the visible ETHConf hotel results by maximum walking time, maximum nightly rate, and sort order.',
          inputSchema: {
            type: 'object',
            properties: {
              maxWalkMinutes: { type: 'number', enum: [...walkOptions] },
              maxNightlyRate: { type: 'number', enum: [...priceOptions] },
              sortBy: {
                type: 'string',
                enum: ['recommended', 'distance', 'price'],
              },
            },
            required: ['maxWalkMinutes', 'maxNightlyRate', 'sortBy'],
            additionalProperties: false,
          },
          annotations: {
            readOnlyHint: false,
            untrustedContentHint: false,
          },
          execute(input) {
            if (!allowedWalks.has(input.maxWalkMinutes)) {
              throw new Error(
                `maxWalkMinutes must be ${walkOptions.join(', ')}.`,
              );
            }
            if (!allowedPrices.has(input.maxNightlyRate)) {
              throw new Error(
                `maxNightlyRate must be ${priceOptions.join(', ')}.`,
              );
            }
            if (!allowedSorts.has(input.sortBy)) {
              throw new Error(
                'sortBy must be recommended, distance, or price.',
              );
            }

            setMaxWalkMinutes(input.maxWalkMinutes);
            setMaxNightlyRate(input.maxNightlyRate);
            setSortBy(input.sortBy);

            return {
              maxWalkMinutes: input.maxWalkMinutes,
              maxNightlyRate: input.maxNightlyRate,
              sortBy: input.sortBy,
              matchingHotels: filterHotels(
                input.maxWalkMinutes,
                input.maxNightlyRate,
                input.sortBy,
              ).length,
            };
          },
        },
        { signal: lifecycle.signal },
      ),
    ).catch(() => undefined);

    return () => lifecycle.abort();
  }, []);

  const results = useMemo(
    () => filterHotels(maxWalkMinutes, maxNightlyRate, sortBy),
    [maxWalkMinutes, maxNightlyRate, sortBy],
  );

  const shortlist = useMemo(
    () => hotels.filter((hotel) => selectedIds.includes(hotel.id)),
    [selectedIds],
  );

  const toggleShortlist = useCallback((id: string) => {
    setSelectedIds((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= MAX_COMPARE) return current;
      return [...current, id];
    });
  }, []);

  const clearShortlist = useCallback(() => setSelectedIds([]), []);

  const showEveryStay = useCallback(() => {
    setMaxWalkMinutes(widestWalk);
    setMaxNightlyRate(widestPrice);
  }, []);

  const isFiltered =
    maxWalkMinutes !== widestWalk || maxNightlyRate !== widestPrice;

  return {
    maxWalkMinutes,
    maxNightlyRate,
    sortBy,
    setMaxWalkMinutes,
    setMaxNightlyRate,
    setSortBy,
    results,
    shortlist,
    selectedIds,
    toggleShortlist,
    clearShortlist,
    shortlistIsFull: selectedIds.length >= MAX_COMPARE,
    showEveryStay,
    isFiltered,
  };
}
