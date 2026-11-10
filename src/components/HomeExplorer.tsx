import React, { useState } from 'react';
import { OivDocument, FilterState, OivFamily } from '../types/oiv';
import { CORPUS_META, FAMILIES_META } from '../data/oivCorpus';
import { SearchBar } from './SearchBar';
import { FilterSidebar } from './FilterSidebar';
import { DocumentCard } from './DocumentCard';
import { 
  Scale, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  FileText,
  Calculator
} from 'lucide-react';
import { PageContainer } from './PageContainer';
import { PageHeader } from './PageHeader';

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

  // Featured flagship document (OIV-OENO 738-2025)
  const featuredDoc = documents.find(d => d.id === 'oiv-oeno-738-2025');

  // Counts are derived from the corpus itself: FAMILIES_META only supplies labels.
  const familyTabs = FAMILIES_META.map((family) => ({
    ...family,
    count: documents.filter((doc) => doc.family === family.id).length
  })).filter((family) => family.count > 0);

  return (
    <PageContainer className="space-y-6">
      
      {/* 1. Header: title, corpus provenance, pro shortcuts */}
      <PageHeader
        eyebrow="Répertoire officiel œnologique"
        title="Base documentaire OIV & conformité européenne"
        description={
          <>
            Recherche, prescriptions officielles et vérification de conformité au Règlement (UE)
            2019/934 et JOUE C/2025/1829. Corpus v{CORPUS_META.version} — dernière mise à jour
            le {CORPUS_META.updatedAtLabel}. Source : {CORPUS_META.source}.
          </>
        }
        actions={
          <div className="flex flex-wrap items-center gap-2 sm:justify-end">
            {onOpenSimulator && (
              <button
                type="button"
                onClick={onOpenSimulator}
                className="px-3 py-1.5 text-xs font-semibold text-brand bg-brand/10 hover:bg-brand hover:text-white rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulateur de chai & doses</span>
              </button>
            )}
            {onOpenSolver && (
              <button
                type="button"
                onClick={onOpenSolver}
                className="px-3 py-1.5 text-xs font-semibold text-ink-soft bg-surface-muted hover:bg-surface-hover border border-line rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Guide par objectif œnologique</span>
              </button>
            )}
          </div>
        }
      />

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
                ? 'bg-ink text-white shadow-xs'
                : 'bg-white hover:bg-surface-hover text-muted border border-line'
            }`}
          >
            <span>Toutes les familles</span>
            <span className="font-mono text-[11px] opacity-75">({documents.length})</span>
          </button>

          {familyTabs.map((fam) => (
            <button
              key={fam.id}
              onClick={() => onChangeFilters({ ...filters, family: fam.id as OivFamily })}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                filters.family === fam.id
                  ? 'bg-brand text-white shadow-xs'
                  : 'bg-white hover:bg-surface-hover text-muted border border-line'
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
        <div className="bg-surface-muted border border-line-warm rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1 max-w-3xl">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-brand flex items-center gap-1 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                {featuredDoc.officialReference}
              </span>
              <span className="text-separator">·</span>
              <span className="text-muted font-medium">{featuredDoc.title}</span>
              <span className="text-separator">·</span>
              <span className="text-amber-900 bg-amber-100/70 text-[11px] px-1.5 py-0.2 rounded font-medium">
                Plafond : {featuredDoc.limitsAndDoses}
              </span>
            </div>
            <p className="text-xs text-muted line-clamp-1">
              Extension officielle aux moûts pour le contrôle microbiologique précoce. Articulation UE : Encadrement spécifique au Règlement (UE) 2019/934.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            {featuredDoc.pdfUrl && (
              <a
                href={featuredDoc.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 text-xs font-medium text-muted hover:text-ink bg-white border border-line rounded hover:bg-surface-hover transition-colors inline-flex items-center gap-1"
                title="Télécharger le PDF officiel"
              >
                <FileText className="w-3 h-3" />
                <span>PDF Officiel</span>
              </a>
            )}
            <button
              onClick={() => onSelectDoc(featuredDoc)}
              className="px-3 py-1 text-xs font-semibold text-white bg-brand hover:bg-brand-dark rounded transition-colors inline-flex items-center gap-1 cursor-pointer"
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
          <div className="bg-white border border-line rounded-lg p-4 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-ink uppercase tracking-wider border-b border-line-soft pb-2">
              <Scale className="w-3.5 h-3.5 text-brand" />
              <span>Dépôts Légaux Directs</span>
            </div>
            <div className="space-y-2 text-xs">
              <a
                href="https://www.oiv.int/fr/ce-que-nous-faisons/normes?items_per_page=25&search_title_body=&type%5Bresolutions%5D=resolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-muted hover:text-brand p-1.5 rounded hover:bg-surface-muted transition-colors"
              >
                <span>OIV — Résolutions (PDFs)</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              <a
                href="https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-muted hover:text-brand p-1.5 rounded hover:bg-surface-muted transition-colors"
              >
                <span>OIV — Code des pratiques</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              <a
                href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02019R0934-20241128"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-muted hover:text-brand p-1.5 rounded hover:bg-surface-muted transition-colors"
              >
                <span>EUR-Lex — Règlement 2019/934</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </a>
              <a
                href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A52025XC01829"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-muted hover:text-brand p-1.5 rounded hover:bg-surface-muted transition-colors"
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
          <div className="flex items-center justify-between text-xs text-muted px-1 pb-1">
            <span role="status" aria-live="polite" className="font-semibold text-ink">
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
                className="text-brand hover:underline font-medium cursor-pointer"
              >
                Effacer tous les filtres
              </button>
            )}
          </div>

          {/* Cards Stream */}
          {filteredDocuments.length === 0 ? (
            <div className="bg-white border border-line rounded-xl p-10 text-center text-muted space-y-3">
              <p className="text-base font-semibold text-ink">
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
                className="px-4 py-2 text-xs font-semibold text-brand border border-brand/30 rounded-lg hover:bg-brand/10 cursor-pointer"
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
