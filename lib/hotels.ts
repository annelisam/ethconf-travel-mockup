export type Hotel = {
  id: string;
  name: string;
  neighborhood: string;
  stars: number;
  /** Walking minutes to the Javits Center. */
  walk: number;
  /** Door-to-door minutes by subway or bus. */
  transit: number;
  /** Nightly rate in USD, before tax. */
  price: number;
  image: string;
  room: string;
  tag?: string;
  note?: string;
};

export const hotels: Hotel[] = [
  {
    id: 'hgi',
    name: 'Hilton Garden Inn Manhattan–Chelsea',
    neighborhood: 'Chelsea',
    stars: 3,
    walk: 12,
    transit: 8,
    price: 299,
    image: '/images/hotel-hgi.jpg',
    room: 'Single / Double',
    tag: 'Best value nearby',
  },
  {
    id: 'arlo',
    name: 'Arlo Midtown',
    neighborhood: 'Midtown West',
    stars: 4,
    walk: 12,
    transit: 7,
    price: 359,
    image: '/images/hotel-arlo.jpg',
    room: 'Run of House',
    tag: 'Closest',
  },
  {
    id: 'pod-times',
    name: 'Pod Times Square',
    neighborhood: 'Hell’s Kitchen',
    stars: 3,
    walk: 15,
    transit: 9,
    price: 239,
    image: '/images/hotel-pod.jpg',
    room: 'Bunk / Full / Queen Pod',
    tag: 'Lowest price',
  },
  {
    id: 'distrikt',
    name: 'Distrikt Hotel New York City',
    neighborhood: 'Garment District',
    stars: 4,
    walk: 12,
    transit: 8,
    price: 428,
    image: '/images/hotel-distrikt.jpg',
    room: 'King Bed',
    tag: 'Book by May 5',
  },
  {
    id: 'doubletree',
    name: 'DoubleTree by Hilton Chelsea',
    neighborhood: 'Chelsea',
    stars: 4,
    walk: 29,
    transit: 13,
    price: 339,
    image: '/images/hotel-doubletree.jpg',
    room: 'King Room',
  },
  {
    id: 'martinique',
    name: 'Martinique New York on Broadway',
    neighborhood: 'NoMad',
    stars: 3,
    walk: 28,
    transit: 14,
    price: 399,
    image: '/images/hotel-martinique.jpg',
    room: 'Run of House',
  },
  {
    id: 'motto',
    name: 'Motto by Hilton NYC Chelsea',
    neighborhood: 'Chelsea',
    stars: 4,
    walk: 35,
    transit: 16,
    price: 519,
    image: '/images/hotel-motto.jpg',
    room: 'King · City View',
  },
  {
    id: 'sheraton',
    name: 'Sheraton Brooklyn New York Hotel',
    neighborhood: 'Downtown Brooklyn',
    stars: 4,
    walk: 40,
    transit: 35,
    price: 339,
    image: '/images/hotel-sheraton.jpg',
    room: 'Run of House',
    tag: 'Book by May 8',
    note: 'Best reached by subway',
  },
];

export const walkOptions = [15, 25, 40] as const;
export const priceOptions = [300, 400, 550] as const;

export type SortKey = 'recommended' | 'distance' | 'price';

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'distance', label: 'Closest first' },
  { value: 'price', label: 'Lowest price' },
];

/** Widest walk / highest rate — used as the "show everything" reset. */
export const maxWalk = walkOptions[walkOptions.length - 1];
export const maxPrice = priceOptions[priceOptions.length - 1];

export const MAX_COMPARE = 3;

export function filterHotels(
  maxWalkMinutes: number,
  maxNightlyRate: number,
  sortBy: SortKey,
): Hotel[] {
  return hotels
    .filter(
      (hotel) => hotel.walk <= maxWalkMinutes && hotel.price <= maxNightlyRate,
    )
    .sort((a, b) => {
      if (sortBy === 'distance') return a.walk - b.walk || a.price - b.price;
      if (sortBy === 'price') return a.price - b.price || a.walk - b.walk;
      // Recommended: featured stays first, then closest, then cheapest.
      return (
        Number(Boolean(b.tag)) - Number(Boolean(a.tag)) ||
        a.walk - b.walk ||
        a.price - b.price
      );
    });
}

export function formatWalk(hotel: Hotel): string {
  return hotel.note ?? `${hotel.walk} min walk to Javits`;
}
