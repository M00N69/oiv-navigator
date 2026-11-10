import React from 'react';

interface PageHeaderProps {
  /** Small uppercase line above the title (section, chapter...). */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  /** Buttons or counters aligned to the right on wide screens. */
  actions?: React.ReactNode;
  className?: string;
}

/**
 * Shared page title block: serif title, readable subtitle (max 70 characters
 * per line) and optional actions on the right.
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  description,
  icon: Icon,
  actions,
  className,
}) => (
  <div
    className={`flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-start sm:justify-between ${
      className ?? ''
    }`}
  >
    <div className="flex min-w-0 items-start gap-3">
      {Icon && (
        <div className="mt-0.5 shrink-0 rounded-xl bg-brand/10 p-2.5">
          <Icon className="h-6 w-6 text-brand" />
        </div>
      )}
      <div className="min-w-0 space-y-1.5">
        {eyebrow && (
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
            {eyebrow}
          </p>
        )}
        <h1 className="font-editorial text-2xl font-bold leading-tight text-ink sm:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-3xl text-sm leading-relaxed text-muted">{description}</p>
        )}
      </div>
    </div>
    {actions && (
      <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>
    )}
  </div>
);
