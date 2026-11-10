import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';

interface SearchBarProps {
  query: string;
  onChangeQuery: (q: string) => void;
  onClear: () => void;
  totalMatches: number;
  onToggleFilters?: () => void;
  showFiltersToggle?: boolean;
}

const QUICK_SUGGESTIONS = [
  { label: 'OIV-OENO 738-2025', query: 'OIV-OENO 738-2025' },
  { label: 'Acide fumarique', query: 'acide fumarique' },
  { label: 'DMDC / Vins doux', query: 'DMDC' },
  { label: 'Polyaspartate (KPA)', query: 'polyaspartate' },
  { label: 'Gomme de cellulose', query: 'carboxyméthylcellulose' },
  { label: 'UE 2019/934', query: '2019/934' },
];

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onChangeQuery,
  onClear,
  onToggleFilters,
  showFiltersToggle = true
}) => {
  return (
    <div className="w-full">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-[#78716C]">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => onChangeQuery(e.target.value)}
          placeholder="Rechercher une référence (ex: OIV-OENO 738-2025), une pratique, substance, ou méthode..."
          className="w-full pl-12 pr-28 py-3.5 bg-white border border-[#E7E2DA] rounded-lg text-sm sm:text-base text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#6B1728]/20 focus:border-[#6B1728] transition-all shadow-xs"
        />
        <div className="absolute right-3 flex items-center gap-1.5">
          {query && (
            <button
              onClick={onClear}
              className="p-1 text-[#78716C] hover:text-[#1C1917] rounded hover:bg-[#F3EFEA] transition-colors"
              title="Effacer la recherche"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {showFiltersToggle && onToggleFilters && (
            <button
              onClick={onToggleFilters}
              className="md:hidden p-2 text-[#57534E] hover:text-[#1C1917] rounded hover:bg-[#F3EFEA] transition-colors border-l border-[#E7E2DA] pl-2"
              title="Filtres"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Suggestion tags */}
      <div className="mt-2.5 flex items-center gap-2 overflow-x-auto pb-1 text-xs text-[#78716C]">
        <span className="shrink-0 font-medium text-[#57534E] flex items-center gap-1">
          Suggestions rapides :
        </span>
        <div className="flex items-center gap-1.5 flex-wrap">
          {QUICK_SUGGESTIONS.map((sug) => (
            <button
              key={sug.label}
              onClick={() => onChangeQuery(sug.query)}
              className="px-2 py-1 bg-white hover:bg-[#F3EFEA] border border-[#E7E2DA] rounded text-[#44403C] hover:text-[#6B1728] transition-colors cursor-pointer whitespace-nowrap"
            >
              {sug.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
