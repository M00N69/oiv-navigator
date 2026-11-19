import React, { useMemo, useState } from 'react';
import { Search, X, SlidersHorizontal, History, FlaskConical } from 'lucide-react';
import { OivDocument } from '../types/oiv';

interface SearchBarProps {
  query: string;
  onChangeQuery: (q: string) => void;
  onClear: () => void;
  totalMatches: number;
  onToggleFilters?: () => void;
  showFiltersToggle?: boolean;
  documents?: OivDocument[];
}

const QUICK_SUGGESTIONS = [
  { label: 'OIV-OENO 738-2025', query: 'OIV-OENO 738-2025' },
  { label: 'Acide fumarique', query: 'acide fumarique' },
  { label: 'DMDC / Vins doux', query: 'DMDC' },
  { label: 'Polyaspartate (KPA)', query: 'polyaspartate' },
  { label: 'Gomme de cellulose', query: 'carboxyméthylcellulose' },
  { label: 'UE 2019/934', query: '2019/934' },
];

const HISTORY_KEY = 'oiv-search-history';
const HISTORY_MAX = 8;

function readHistory(): string[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr.filter((x) => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function pushHistory(q: string): string[] {
  const trimmed = q.trim();
  if (!trimmed) return readHistory();
  const next = [trimmed, ...readHistory().filter((x) => x.toLowerCase() !== trimmed.toLowerCase())].slice(0, HISTORY_MAX);
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  } catch {
    /* storage unavailable */
  }
  return next;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onChangeQuery,
  onClear,
  onToggleFilters,
  showFiltersToggle = true,
  documents = []
}) => {
  const [history, setHistory] = useState<string[]>(readHistory);

  const commit = (q: string) => {
    onChangeQuery(q);
    if (q.trim()) setHistory(pushHistory(q));
  };

  // Substance suggestions derived from the corpus (unique, non-empty).
  const substanceSuggestions = useMemo(() => {
    const seen = new Set<string>();
    const out: string[] = [];
    for (const d of documents) {
      if (d.substanceName && !seen.has(d.substanceName.toLowerCase())) {
        seen.add(d.substanceName.toLowerCase());
        out.push(d.substanceName);
      }
      if (out.length >= 6) break;
    }
    return out;
  }, [documents]);

  const showRecent = query.trim() === '' && history.length > 0;

  return (
    <div className="w-full">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-muted">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => onChangeQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commit(query);
          }}
          onBlur={() => {
            if (query.trim()) setHistory(pushHistory(query));
          }}
          placeholder="Rechercher une référence (ex: OIV-OENO 738-2025), une pratique, substance, ou méthode..."
          aria-label="Rechercher dans le corpus"
          className="w-full pl-12 pr-28 py-3.5 bg-white border border-line rounded-lg text-sm sm:text-base text-ink placeholder-subtle focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all shadow-xs"
        />
        <div className="absolute right-3 flex items-center gap-1.5">
          {query && (
            <button
              onClick={onClear}
              className="p-1 text-muted hover:text-ink rounded hover:bg-surface-hover transition-colors"
              title="Effacer la recherche"
              aria-label="Effacer la recherche"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {showFiltersToggle && onToggleFilters && (
            <button
              onClick={onToggleFilters}
              className="md:hidden p-2 text-muted hover:text-ink rounded hover:bg-surface-hover transition-colors border-l border-line pl-2"
              title="Filtres"
              aria-label="Ouvrir les filtres"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Recent searches (when the field is empty) */}
      {showRecent && (
        <div className="mt-2.5 flex items-center gap-2 overflow-x-auto pb-1 text-xs text-muted">
          <span className="shrink-0 font-medium text-muted flex items-center gap-1">
            <History className="w-3.5 h-3.5" />
            Récentes :
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {history.map((h) => (
              <button
                key={h}
                onClick={() => commit(h)}
                className="px-2 py-1 bg-surface-muted hover:bg-surface-hover border border-line rounded text-ink-soft hover:text-brand transition-colors cursor-pointer whitespace-nowrap"
              >
                {h}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Suggestion tags */}
      <div className="mt-2.5 flex items-center gap-2 overflow-x-auto pb-1 text-xs text-muted">
        <span className="shrink-0 font-medium text-muted flex items-center gap-1">
          Suggestions rapides :
        </span>
        <div className="flex items-center gap-1.5 flex-wrap">
          {QUICK_SUGGESTIONS.map((sug) => (
            <button
              key={sug.label}
              onClick={() => commit(sug.query)}
              className="px-2 py-1 bg-white hover:bg-surface-hover border border-line rounded text-ink-soft hover:text-brand transition-colors cursor-pointer whitespace-nowrap"
            >
              {sug.label}
            </button>
          ))}
        </div>
      </div>

      {/* Substance shortcuts from the corpus */}
      {substanceSuggestions.length > 0 && (
        <div className="mt-1.5 flex items-center gap-2 overflow-x-auto pb-1 text-xs text-muted">
          <span className="shrink-0 font-medium text-muted flex items-center gap-1">
            <FlaskConical className="w-3.5 h-3.5" />
            Substances :
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {substanceSuggestions.map((s) => (
              <button
                key={s}
                onClick={() => commit(s)}
                className="px-2 py-1 bg-white hover:bg-surface-hover border border-line rounded text-ink-soft hover:text-brand transition-colors cursor-pointer whitespace-nowrap"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
