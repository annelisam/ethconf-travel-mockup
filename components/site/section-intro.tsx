import { cn } from '@/lib/utils';

/**
 * Shared two-column section opener: eyebrow + display headline on the left,
 * supporting copy right-aligned on wide screens.
 */
export function SectionIntro({
  eyebrow,
  title,
  children,
  tone = 'light',
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end',
        className,
      )}
    >
      <div>
        <p className={cn('eyebrow', tone === 'dark' && 'text-iris-light')}>
          {eyebrow}
        </p>
        <h2 className="display-2 mt-4 max-w-2xl text-balance">{title}</h2>
      </div>
      {children ? (
        <div
          className={cn(
            'max-w-xl lg:justify-self-end',
            tone === 'dark' && 'text-white/70',
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
