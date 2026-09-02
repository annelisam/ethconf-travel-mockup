import { Sparkles } from 'lucide-react';

import { cn } from '@/lib/utils';

export const EVENT_DATES = 'June 14–16, 2027';
export const EVENT_CITY = 'New York City';
export const VENUE = 'Javits Center';

export function Wordmark({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <Sparkles
        className={cn('size-6 fill-iris text-ink', markClassName)}
        strokeWidth={1.8}
        aria-hidden
      />
      <span className="font-display text-[1.8rem] leading-none tracking-[-0.03em]">
        ETHConf
      </span>
    </span>
  );
}
