import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  /** Extra layout classes (spacing between sections, etc.). */
  className?: string;
  /** Constrains the content to a readable column (prose views). */
  narrow?: boolean;
}

/**
 * Single horizontal rhythm for the whole app: one max width, one padding
 * scale, one vertical spacing. Every view must use it so switching tabs never
 * moves the content left or right.
 */
export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
  narrow = false,
}) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <div
      className={`py-8 lg:py-10 ${narrow ? 'mx-auto max-w-3xl' : ''} ${className ?? ''}`}
    >
      {children}
    </div>
  </div>
);
