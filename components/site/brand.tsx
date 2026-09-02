import { cn } from '@/lib/utils';

export const EVENT_DATES = 'June 14–16, 2027';
export const EVENT_CITY = 'New York City';
export const VENUE = 'Javits Center';

/**
 * The official ETHConf logo (white), pulled from ethconf.com.
 * Only place it on dark surfaces.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/ethconf-logo.svg"
      alt="ETHConf"
      draggable={false}
      className={cn('h-10 w-auto', className)}
    />
  );
}
