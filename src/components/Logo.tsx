import React from 'react';

interface LogoProps {
  /** Pixel size of the emblem (square). Minimum 24 for legibility. */
  size?: number;
  /** Renders the "OIV Navigator" wordmark next to the emblem. */
  withWordmark?: boolean;
  className?: string;
}

/**
 * Single source of truth for the brand emblem: bordeaux tile, five solid
 * berries (r >= 2.7 on a 32 viewBox) and a gold must drop.
 * No dashed ring, no cardinal points: every shape stays legible at 24 px.
 */
export const Logo: React.FC<LogoProps> = ({ size = 36, withWordmark = false, className }) => {
  const emblem = (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <rect width="32" height="32" rx="7" fill="#6B1728" />
      <circle cx="10.8" cy="8" r="2.7" fill="#FBF9F5" />
      <circle cx="21.2" cy="8" r="2.7" fill="#FBF9F5" />
      <circle cx="16" cy="14.5" r="2.7" fill="#FBF9F5" />
      <circle cx="10.8" cy="21" r="2.7" fill="#FBF9F5" />
      <circle cx="21.2" cy="21" r="2.7" fill="#FBF9F5" />
      <path
        d="M16 23.8c1.9 2.1 2.7 3.5 2.7 4.7a2.7 2.7 0 1 1-5.4 0c0-1.2.8-2.6 2.7-4.7Z"
        fill="#D4AF37"
      />
    </svg>
  );

  if (!withWordmark) {
    return className ? <span className={className}>{emblem}</span> : emblem;
  }

  return (
    <span className={`flex items-center gap-3 ${className ?? ''}`}>
      {emblem}
      <span className="flex flex-col leading-none text-left">
        <span className="font-editorial tracking-tight">
          <span className="text-xl font-bold text-ink">OIV</span>{' '}
          <span className="text-xl font-light text-brand">Navigator</span>
        </span>
        <span className="mt-1 text-[11px] font-medium tracking-wide text-muted">
          Veille &amp; pratiques œnologiques
        </span>
      </span>
    </span>
  );
};
