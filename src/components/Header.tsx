import React, { useEffect, useRef, useState } from 'react';
import {
  Menu,
  X,
  Search,
  GitCompare,
  Scale,
  BookOpen,
  Calculator,
  Sparkles,
  HelpCircle,
  FileText,
  Bookmark,
} from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  bookmarkCount: number;
  dossierCount: number;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

/** Short labels keep the inline nav breathable between 1280 and 1440 px. */
const NAV_ITEMS: NavItem[] = [
  { id: 'explorer', label: 'Corpus', icon: Search },
  { id: 'simulator', label: 'Simulateur', icon: Calculator },
  { id: 'solver', label: 'Objectifs', icon: Sparkles },
  { id: 'regulatory', label: 'Cadre UE', icon: Scale },
  { id: 'comparator', label: 'Comparateur', icon: GitCompare },
  { id: 'veille', label: 'Veille', icon: BookOpen },
  { id: 'guide', label: 'Guide', icon: HelpCircle },
];

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  bookmarkCount,
  dossierCount,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const isActive = (id: string) =>
    currentTab === id || (id === 'explorer' && currentTab === 'home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleSelect = (tab: string) => {
    onSelectTab(tab);
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b border-[#E7E2DA] bg-[#FBF9F5]/95 backdrop-blur-md no-print ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => handleSelect('home')}
            className="flex min-w-0 items-center rounded-lg px-1 py-1 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B1728]"
            title="OIV Navigator — Retour à l'accueil"
            aria-label="OIV Navigator — Accueil"
          >
            <Logo size={40} withWordmark />
          </button>

          <nav
            aria-label="Navigation principale"
            className="hidden min-w-0 items-center gap-1 text-sm font-medium text-[#57534E] xl:flex"
          >
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleSelect(id)}
                aria-current={isActive(id) ? 'page' : undefined}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 py-1.5 transition-colors hover:text-[#1C1917] ${
                  isActive(id)
                    ? 'border-b-2 border-[#6B1728] font-semibold text-[#6B1728]'
                    : 'border-b-2 border-transparent'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => handleSelect('dossier')}
              aria-current={currentTab === 'dossier' ? 'page' : undefined}
              className={`flex items-center gap-2 rounded px-2.5 py-1.5 text-xs font-semibold transition-colors sm:px-3.5 ${
                currentTab === 'dossier'
                  ? 'bg-[#6B1728] text-white shadow-sm'
                  : 'border border-[#E7E2DA] bg-white text-[#1C1917] hover:bg-[#F3EFEA]'
              }`}
              title="Dossier technique"
            >
              <FileText className="h-3.5 w-3.5 shrink-0 text-[#6B1728]" />
              <span className="hidden sm:inline">Dossier technique</span>
              <span className="sr-only sm:hidden">Dossier technique</span>
              {dossierCount > 0 && (
                <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#6B1728] px-1 text-[10px] font-bold text-white">
                  {dossierCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => handleSelect('dossier')}
              className="relative hidden rounded px-2 py-1.5 text-[#57534E] transition-colors hover:text-[#6B1728] sm:flex"
              aria-label={`Favoris enregistrés : ${bookmarkCount}`}
              title={`${bookmarkCount} favori(s)`}
            >
              <Bookmark className="h-4 w-4" />
              {bookmarkCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#6B1728] px-1 text-[10px] font-bold text-white">
                  {bookmarkCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="rounded p-2 text-[#1C1917] transition-colors hover:bg-[#F3EFEA] xl:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="border-t border-[#E7E2DA] bg-[#FBF9F5] xl:hidden"
        >
          <nav aria-label="Navigation principale (mobile)" className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(id)}
                    aria-current={isActive(id) ? 'page' : undefined}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      isActive(id)
                        ? 'bg-[#6B1728]/10 font-semibold text-[#6B1728]'
                        : 'text-[#57534E] hover:bg-[#F3EFEA] hover:text-[#1C1917]'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
