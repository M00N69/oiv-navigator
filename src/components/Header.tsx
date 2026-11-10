import React from 'react';
import { BookOpen, Search, GitCompare, Scale, FileText, Calculator, Sparkles, HelpCircle } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  bookmarkCount: number;
  dossierCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  dossierCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E7E2DA] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          
          {/* Zone 1: Distinctive Brand Emblem & Wordmark (UX-optimized) */}
          <button 
            onClick={() => onSelectTab('home')}
            className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B1728] focus-visible:ring-offset-2 rounded-lg py-1 px-1 -ml-1 transition-all"
            title="OIV Navigator — Retour à l'accueil"
            aria-label="OIV Navigator — Accueil"
          >
            <div className="flex items-center gap-3">
              {/* Custom Wine & Compass Emblem */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#6B1728] via-[#52101D] to-[#380913] text-white flex items-center justify-center shadow-md shadow-[#6B1728]/15 border border-[#8B263E]/40 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#6B1728]/25 transition-all duration-200 shrink-0">
                {/* SVG Grape + Compass Navigator Insignia */}
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-[#FBF9F5]"
                >
                  {/* Subtle navigation compass ring */}
                  <circle
                    cx="16"
                    cy="16"
                    r="13.5"
                    stroke="#D4AF37"
                    strokeWidth="0.8"
                    strokeDasharray="2 2"
                    className="opacity-60"
                  />
                  {/* Compass cardinal points */}
                  <path
                    d="M16 2.5V5M16 27V29.5M2.5 16H5M27 16H29.5"
                    stroke="#D4AF37"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    className="opacity-75"
                  />
                  {/* Stylized Grape Droplet cluster & Vine Leaf */}
                  <circle cx="16" cy="11.5" r="2.2" fill="currentColor" />
                  <circle cx="13" cy="15.5" r="2.2" fill="currentColor" />
                  <circle cx="19" cy="15.5" r="2.2" fill="currentColor" />
                  <circle cx="14.5" cy="19.5" r="2" fill="currentColor" />
                  <circle cx="17.5" cy="19.5" r="2" fill="currentColor" />
                  <circle cx="16" cy="23" r="1.6" fill="#D4AF37" />
                  {/* Delicate vine tendril */}
                  <path
                    d="M16 8.5C16 6.5 17.5 5.5 19 6"
                    stroke="#D4AF37"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Refined Brand Wordmark */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-xl font-bold font-editorial text-[#1C1917] tracking-tight group-hover:text-[#6B1728] transition-colors whitespace-nowrap">
                    OIV
                  </span>
                  <span className="text-xl font-light font-editorial text-[#6B1728] tracking-tight whitespace-nowrap">
                    Navigator
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-[#78716C] group-hover:text-[#57534E] transition-colors">
                    Veille & Pratiques Œnologiques
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600/80" title="Système de veille actif" />
                </div>
              </div>
            </div>
          </button>

          {/* Zone 2: Clean single-line nav links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-[#57534E]">
            <button
              onClick={() => onSelectTab('explorer')}
              className={`hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer pb-1 ${
                currentTab === 'explorer' || currentTab === 'home' ? 'text-[#6B1728] font-semibold border-b-2 border-[#6B1728]' : ''
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Corpus & Recherche</span>
            </button>

            <button
              onClick={() => onSelectTab('simulator')}
              className={`hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer pb-1 ${
                currentTab === 'simulator' ? 'text-[#6B1728] font-semibold border-b-2 border-[#6B1728]' : ''
              }`}
            >
              <Calculator className="w-4 h-4 text-[#6B1728]" />
              <span>Simulateur de Chai</span>
            </button>

            <button
              onClick={() => onSelectTab('solver')}
              className={`hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer pb-1 ${
                currentTab === 'solver' ? 'text-[#6B1728] font-semibold border-b-2 border-[#6B1728]' : ''
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Guide par Objectif</span>
            </button>

            <button
              onClick={() => onSelectTab('regulatory')}
              className={`hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer pb-1 ${
                currentTab === 'regulatory' ? 'text-[#6B1728] font-semibold border-b-2 border-[#6B1728]' : ''
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Cadre UE</span>
            </button>

            <button
              onClick={() => onSelectTab('comparator')}
              className={`hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer pb-1 ${
                currentTab === 'comparator' ? 'text-[#6B1728] font-semibold border-b-2 border-[#6B1728]' : ''
              }`}
            >
              <GitCompare className="w-4 h-4" />
              <span>Comparateur</span>
            </button>

            <button
              onClick={() => onSelectTab('veille')}
              className={`hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer pb-1 ${
                currentTab === 'veille' ? 'text-[#6B1728] font-semibold border-b-2 border-[#6B1728]' : ''
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Veille</span>
              <span className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-1 py-0.2 rounded font-mono font-medium">
                À jour
              </span>
            </button>

            <button
              onClick={() => onSelectTab('guide')}
              className={`hover:text-[#1C1917] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer pb-1 ${
                currentTab === 'guide' ? 'text-[#6B1728] font-semibold border-b-2 border-[#6B1728]' : ''
              }`}
            >
              <HelpCircle className="w-4 h-4 text-[#6B1728]" />
              <span>Guide Explicatif</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('dossier')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
                currentTab === 'dossier'
                  ? 'bg-[#6B1728] text-white shadow-sm'
                  : 'bg-white hover:bg-[#F3EFEA] text-[#1C1917] border border-[#E7E2DA]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#6B1728]" />
              <span>Dossier Technique</span>
              {dossierCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#6B1728] text-white text-[10px] flex items-center justify-center font-bold">
                  {dossierCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
