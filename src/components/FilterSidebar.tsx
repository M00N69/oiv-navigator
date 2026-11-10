import React from 'react';
import { FilterState } from '../types/oiv';
import { RotateCcw, Filter, Check, Calendar, Layers, ShieldCheck } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterState;
  onChangeFilters: (f: FilterState) => void;
  availableDomains: string[];
  totalResultsCount: number;
  totalCorpusCount: number;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onChangeFilters,
  availableDomains,
  totalResultsCount,
  totalCorpusCount
}) => {
  const resetFilters = () => {
    onChangeFilters({
      searchQuery: '',
      family: 'all',
      domain: 'all',
      category: 'all',
      euStatus: 'all',
      yearRange: [2005, 2026],
      status: 'all',
      onlyRecent: false
    });
  };

  const hasActiveFilters = 
    filters.family !== 'all' ||
    filters.domain !== 'all' ||
    filters.category !== 'all' ||
    filters.euStatus !== 'all' ||
    filters.yearRange[0] !== 2005 ||
    filters.yearRange[1] !== 2026 ||
    filters.onlyRecent;

  return (
    <aside className="w-full bg-white border border-[#E7E2DA] rounded-lg p-5 shadow-xs lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E7E2DA]">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#6B1728]" />
          <h2 className="text-sm font-bold tracking-tight text-[#1C1917] uppercase">
            Filtres documentaires
          </h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="text-xs text-[#78716C] hover:text-[#6B1728] flex items-center gap-1 cursor-pointer font-medium"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Réinitialiser</span>
          </button>
        )}
      </div>

      {/* Result count */}
      <div className="text-xs text-[#57534E] mb-5">
        <span className="font-mono font-bold text-[#1C1917]">{totalResultsCount}</span> document(s) trouvé(s) sur <span className="font-mono">{totalCorpusCount}</span>
      </div>

      <div className="space-y-6">
        {/* Switch: Récent uniquement */}
        <div className="pt-1">
          <label className="flex items-center gap-2.5 text-xs font-medium text-[#1C1917] cursor-pointer">
            <input
              type="checkbox"
              checked={filters.onlyRecent}
              onChange={(e) => onChangeFilters({ ...filters, onlyRecent: e.target.checked })}
              className="w-4 h-4 rounded border-[#D6D3D1] text-[#6B1728] focus:ring-[#6B1728] accent-[#6B1728]"
            />
            <span>Nouvelles résolutions uniquement (2024–2026)</span>
          </label>
        </div>

        {/* 1. Famille documentaire */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Famille documentaire OIV</span>
          </label>
          <div className="space-y-1">
            {[
              { id: 'all', label: 'Toutes les familles' },
              { id: 'pratiques', label: 'Code des pratiques œnologiques' },
              { id: 'codex', label: 'Codex œnologique international' },
              { id: 'methodes', label: 'Méthodes d\'analyse' },
              { id: 'etiquetage', label: 'Normes d\'étiquetage' },
            ].map((fam) => (
              <button
                key={fam.id}
                onClick={() => onChangeFilters({ ...filters, family: fam.id as any })}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between cursor-pointer ${
                  filters.family === fam.id
                    ? 'bg-[#6B1728]/10 text-[#6B1728] font-semibold'
                    : 'text-[#44403C] hover:bg-[#F3EFEA]'
                }`}
              >
                <span>{fam.label}</span>
                {filters.family === fam.id && <Check className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Statut Réglementaire UE (2019/934) */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Statut Union Européenne</span>
          </label>
          <div className="space-y-1">
            {[
              { id: 'all', label: 'Tous les statuts UE' },
              { id: 'autorise_ue', label: 'Autorisé UE (Règlement 2019/934)' },
              { id: 'encadre_specifique', label: 'Encadrement spécifique / Restrictions' },
              { id: 'non_admis_ue', label: 'Non autorisé en droit européen' },
              { id: 'non_applicable', label: 'Méthodes & Non soumis' },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => onChangeFilters({ ...filters, euStatus: st.id as any })}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between cursor-pointer ${
                  filters.euStatus === st.id
                    ? 'bg-[#6B1728]/10 text-[#6B1728] font-semibold'
                    : 'text-[#44403C] hover:bg-[#F3EFEA]'
                }`}
              >
                <span>{st.label}</span>
                {filters.euStatus === st.id && <Check className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Catégorie matrice */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
            Matrice / Étape
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {['all', 'Moûts', 'Vins', 'Vins spéciaux', 'Analyses', 'Produits'].map((cat) => (
              <button
                key={cat}
                onClick={() => onChangeFilters({ ...filters, category: cat })}
                className={`px-2 py-1.5 rounded text-xs text-center transition-colors cursor-pointer ${
                  filters.category === cat
                    ? 'bg-[#1C1917] text-white font-medium'
                    : 'bg-[#F9F7F4] hover:bg-[#EBE6DF] text-[#44403C]'
                }`}
              >
                {cat === 'all' ? 'Toutes' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Domaine technique */}
        {availableDomains.length > 0 && (
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C] mb-2">
              Domaine technique
            </label>
            <select
              value={filters.domain}
              onChange={(e) => onChangeFilters({ ...filters, domain: e.target.value })}
              className="w-full text-xs p-2 bg-white border border-[#E7E2DA] rounded text-[#1C1917] focus:outline-none focus:border-[#6B1728]"
            >
              <option value="all">Tous les domaines</option>
              {availableDomains.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* 5. Année d'adoption */}
        <div>
          <div className="flex items-center justify-between text-xs text-[#78716C] mb-1.5">
            <span className="font-semibold uppercase tracking-wider flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              Période
            </span>
            <span className="font-mono tabular-nums text-[#1C1917]">
              {filters.yearRange[0]} — {filters.yearRange[1]}
            </span>
          </div>
          <input
            type="range"
            min={2005}
            max={2026}
            value={filters.yearRange[0]}
            onChange={(e) => onChangeFilters({
              ...filters,
              yearRange: [parseInt(e.target.value), filters.yearRange[1]]
            })}
            className="w-full accent-[#6B1728] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-[#A8A29E] font-mono mt-1">
            <span>2005</span>
            <span>2015</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
