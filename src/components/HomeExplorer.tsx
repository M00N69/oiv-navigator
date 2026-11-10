import React, { useState } from 'react';
import { OivDocument, FilterState, OivFamily } from '../types/oiv';
import { FAMILIES_META } from '../data/oivCorpus';
import { SearchBar } from './SearchBar';
import { FilterSidebar } from './FilterSidebar';
import { DocumentCard } from './DocumentCard';
import { 
  Scale, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  RefreshCw, 
  CheckCircle2, 
  FileText,
  Calculator
} from 'lucide-react';
import { PageContainer } from './PageContainer';

interface HomeExplorerProps {
  documents: OivDocument[];
  filteredDocuments: OivDocument[];
  totalMatches: number;
  filters: FilterState;
  onChangeFilters: (f: FilterState) => void;
  onSelectDoc: (doc: OivDocument) => void;
  onSelectFamily: (fam: OivFamily) => void;
  bookmarkedDocIds: string[];
  dossierDocIds: string[];
  onToggleBookmark: (docId: string) => void;
  onToggleDossier: (docId: string) => void;
  onCompareWith: (doc: OivDocument) => void;
  availableDomains: string[];
  onOpenSimulator?: () => void;
  onOpenSolver?: () => void;
}

export const HomeExplorer: React.FC<HomeExplorerProps> = ({
  documents,
  filteredDocuments,
  totalMatches,
  filters,
  onChangeFilters,
  onSelectDoc,
  bookmarkedDocIds,
  dossierDocIds,
  onToggleBookmark,
  onToggleDossier,
  onCompareWith,
  availableDomains,
  onOpenSimulator,
  onOpenSolver
}) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [syncTimestamp, setSyncTimestamp] = useState<string>('9 nov. 2026 à 11:00');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefreshSync = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setSyncTimestamp(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
      setIsRefreshing(false);
    }, 450);
  };

  // Featured flagship document (OIV-OENO 738-2025)
  const featuredDoc = documents.find(d => d.id === 'oiv-oeno-738-2025');

  return (
    <PageContainer className="space-y-6">
      
      {/* 1. Header Structure: Title + Freshness Status Strip + Pro Shortcuts */}
      <div className="bg-white border border-[#E7E2DA] rounded-xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs uppercase font-mono font-semibold tracking-wider text-[#6B1728]">
              Répertoire Officiel Œnologique
            </span>
            <span className="text-[#D6D3D1]">·</span>
            <span className="text-xs text-emerald-800 font-medium inline-flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Règlements UE & OIV à jour 2025/2026
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-editorial text-[#1C1917] tracking-tight">
            Base Documentaire OIV & Conformité Européenne
          </h1>
          <p className="text-xs sm:text-sm text-[#57534E] mt-1 max-w-3xl">
            Recherche, prescriptions officielles et vérification de conformité au Règlement (UE) 2019/934 et JOUE C/2025/1829.
          </p>

          {/* Quick Pro Shortcuts */}
          <div className="flex items-center gap-2 pt-3 flex-wrap">
            {onOpenSimulator && (
              <button
                type="button"
                onClick={onOpenSimulator}
                className="px-3 py-1.5 text-xs font-semibold text-[#6B1728] bg-[#6B1728]/10 hover:bg-[#6B1728] hover:text-white rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulateur de Chai & Doses</span>
              </button>
            )}
            {onOpenSolver && (
              <button
                type="button"
                onClick={onOpenSolver}
                className="px-3 py-1.5 text-xs font-semibold text-[#44403C] bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#E7E2DA] rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Guide par Objectif Œnologique</span>
              </button>
            )}
          </div>
        </div>

        {/* Sync & Live Status Pill */}
        <div className="flex items-center gap-2 self-start md:self-center shrink-0 bg-[#FAF8F5] border border-[#E7E2DA] px-3 py-1.5 rounded-lg text-xs text-[#57534E]">
          <span className="font-mono text-[11px] text-[#78716C]">
            Vérifié : {syncTimestamp}
          </span>
          <button
            onClick={handleRefreshSync}
            disabled={isRefreshing}
            className="p-1 text-[#57534E] hover:text-[#6B1728] rounded cursor-pointer transition-colors"
            title="Vérifier la synchronisation avec les dépôts OIV & EUR-Lex"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#6B1728]' : ''}`} />
          </button>
        </div>
      </div>

      {/* 2. Primary Search Box (Immediately Accessible) */}
      <div className="space-y-3">
        <SearchBar
          query={filters.searchQuery}
          onChangeQuery={(q) => onChangeFilters({ ...filters, searchQuery: q })}
          onClear={() => onChangeFilters({ ...filters, searchQuery: '' })}
          totalMatches={totalMatches}
          onToggleFilters={() => setShowMobileFilters(!showMobileFilters)}
          showFiltersToggle={true}
        />

        {/* Segmented Family Filter Tabs Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => onChangeFilters({ ...filters, family: 'all' })}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              filters.family === 'all'
                ? 'bg-[#1C1917] text-white shadow-xs'
                : 'bg-white hover:bg-[#F3EFEA] text-[#57534E] border border-[#E7E2DA]'
            }`}
          >
            <span>Toutes les familles</span>
            <span className="font-mono text-[11px] opacity-75">({documents.length})</span>
          </button>

          {FAMILIES_META.slice(0, 4).map((fam) => (
            <button
              key={fam.id}
              onClick={() => onChangeFilters({ ...filters, family: fam.id as OivFamily })}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                filters.family === fam.id
                  ? 'bg-[#6B1728] text-white shadow-xs'
                  : 'bg-white hover:bg-[#F3EFEA] text-[#57534E] border border-[#E7E2DA]'
              }`}
            >
              <span>{fam.label}</span>
              <span className="font-mono text-[11px] opacity-75">({fam.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Flagship Resolution Banner (OIV-OENO 738-2025) - Compact & Elegant */}
      {featuredDoc && filters.searchQuery === '' && filters.family === 'all' && (
        <div className="bg-[#FAF8F5] border border-[#E8DEC8] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1 max-w-3xl">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-[#6B1728] flex items-center gap-1 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                {featuredDoc.officialReference}
              </span>
              <span className="text-[#D6D3D1]">·</span>
              <span className="text-[#57534E] font-medium">{featuredDoc.title}</span>
              <span className="text-[#D6D3D1]">·</span>
              <span className="text-amber-900 bg-amber-100/70 text-[10px] px-1.5 py-0.2 rounded font-medium">
                Plafond : {featuredDoc.limitsAndDoses}
              </span>
            </div>
            <p className="text-xs text-[#78716C] line-clamp-1">
              Extension officielle aux moûts pour le contrôle microbiologique précoce. Articulation UE : Encadrement spécifique au Règlement (UE) 2019/934.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            {featuredDoc.pdfUrl && (
              <a
                href={featuredDoc.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 text-xs font-medium text-[#57534E] hover:text-[#1C1917] bg-white border border-[#E7E2DA] rounded hover:bg-[#F3EFEA] transition-colors inline-flex items-center gap-1"
                title="Télécharger le PDF officiel"
              >
                <FileText className="w-3 h-3" />
                <span>PDF Officiel</span>
              </a>
            )}
            <button
              onClick={() => onSelectDoc(featuredDoc)}
              className="px-3 py-1 text-xs font-semibold text-white bg-[#6B1728] hover:bg-[#50101C] rounded transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Consulter la fiche</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}

      {/* 4. Structured Workspace: 2 Balanced Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Left Column: Filters & Official Repositories Quick-links */}
        <div className={`space-y-5 lg:block ${showMobileFilters ? 'block' : 'hidden'} lg:col-span-1`}>
          <FilterSidebar
            filters={filters}
            onChangeFilters={onChangeFilters}
            availableDomains={availableDomains}
            totalResultsCount={totalMatches}
            totalCorpusCount={documents.length}
          />

          {/* Compact Official Sources Card in Sidebar */}
          <div className="bg-white border border-[#E7E2DA] rounded-lg p-4 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1C1917] uppercase tracking-wider border-b border-[#F2EEE9] pb-2">
              <Scale className="w-3.5 h-3.5 text-[#6B1728]" />
              <span>Dépôts Légaux Directs</span>
            </div>
            <div className="space-y-2 text-xs">
              <a
                href="https://www.oiv.int/fr/ce-que-nous-faisons/normes?items_per_page=25&search_title_body=&type%5Bresolutions%5D=resolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#57534E] hover:text-[#6B1728] p-1.5 rounded hover:bg-[#FAF8F5] transition-colors"
              >
                <span>OIV — Résolutions (PDFs)</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              <a
                href="https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#57534E] hover:text-[#6B1728] p-1.5 rounded hover:bg-[#FAF8F5] transition-colors"
              >
                <span>OIV — Code des pratiques</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              <a
                href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02019R0934-20241128"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#57534E] hover:text-[#6B1728] p-1.5 rounded hover:bg-[#FAF8F5] transition-colors"
              >
                <span>EUR-Lex — Règlement 2019/934</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              <a
                href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A52025XC01829"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[#57534E] hover:text-[#6B1728] p-1.5 rounded hover:bg-[#FAF8F5] transition-colors"
              >
                <span>JOUE — Publication C/2025/1829</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Search Stream & Document Cards */}
        <div className="lg:col-span-3 space-y-4">
          {/* Stream Bar: Count & active state */}
          <div className="flex items-center justify-between text-xs text-[#78716C] px-1 pb-1">
            <span className="font-semibold text-[#1C1917]">
              {totalMatches} référence(s) affichée(s)
            </span>
            {(filters.searchQuery || filters.family !== 'all' || filters.domain !== 'all' || filters.category !== 'all' || filters.euStatus !== 'all' || filters.onlyRecent) && (
              <button
                onClick={() => onChangeFilters({
                  searchQuery: '',
                  family: 'all',
                  domain: 'all',
                  category: 'all',
                  euStatus: 'all',
                  yearRange: [2005, 2026],
                  status: 'all',
                  onlyRecent: false
                })}
                className="text-[#6B1728] hover:underline font-medium cursor-pointer"
              >
                Effacer tous les filtres
              </button>
            )}
          </div>

          {/* Cards Stream */}
          {filteredDocuments.length === 0 ? (
            <div className="bg-white border border-[#E7E2DA] rounded-xl p-10 text-center text-[#78716C] space-y-3">
              <p className="text-base font-semibold text-[#1C1917]">
                Aucun document ne correspond à cette sélection.
              </p>
              <p className="text-xs max-w-md mx-auto">
                Modifiez vos mots-clés ou sélectionnez une autre famille documentaire ou catégorie de matrice.
              </p>
              <button
                onClick={() => onChangeFilters({
                  searchQuery: '',
                  family: 'all',
                  domain: 'all',
                  category: 'all',
                  euStatus: 'all',
                  yearRange: [2005, 2026],
                  status: 'all',
                  onlyRecent: false
                })}
                className="px-4 py-2 text-xs font-semibold text-[#6B1728] border border-[#6B1728]/30 rounded-lg hover:bg-[#6B1728]/10 cursor-pointer"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredDocuments.map((doc) => (
                <DocumentCard
                  key={doc.id}
                  document={doc}
                  searchQuery={filters.searchQuery}
                  isBookmarked={bookmarkedDocIds.includes(doc.id)}
                  isInDossier={dossierDocIds.includes(doc.id)}
                  onSelect={onSelectDoc}
                  onToggleBookmark={onToggleBookmark}
                  onToggleDossier={onToggleDossier}
                  onCompareWith={onCompareWith}
                />
              ))}
            </div>
          )}
        </div>

      </div>

    </PageContainer>
  );
};
