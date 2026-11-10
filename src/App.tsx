import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { HomeExplorer } from './components/HomeExplorer';
import { DocumentDetail } from './components/DocumentDetail';
import { VersionComparator } from './components/VersionComparator';
import { EuRegulatoryView } from './components/EuRegulatoryView';
import { VeilleUpdatesView } from './components/VeilleUpdatesView';
import { DossierExportView } from './components/DossierExportView';
import { TreatmentSimulator } from './components/TreatmentSimulator';
import { ProblemSolverView } from './components/ProblemSolverView';
import { UserGuideView } from './components/UserGuideView';
import { OivDocument, FilterState, OivFamily, UserNote, DossierItem } from './types/oiv';
import { 
  getAllCorpusDocuments, 
  getStoredBookmarks, 
  toggleStoredBookmark, 
  getStoredNotes, 
  saveStoredNote, 
  getStoredDossier, 
  addToDossier, 
  removeFromDossier, 
  saveCustomDocument 
} from './lib/storage';
import { filterAndSearchDocuments } from './lib/search';

export default function App() {
  // Navigation
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedDoc, setSelectedDoc] = useState<OivDocument | null>(null);
  const [comparatorInitialDoc, setComparatorInitialDoc] = useState<OivDocument | null>(null);

  // Local Storage States
  const [allDocs, setAllDocs] = useState<OivDocument[]>(getAllCorpusDocuments());
  const [bookmarks, setBookmarks] = useState<string[]>(getStoredBookmarks());
  const [dossierItems, setDossierItems] = useState<DossierItem[]>(getStoredDossier());
  const [notes, setNotes] = useState<Record<string, UserNote>>(getStoredNotes());

  // Search & Filter State
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    family: 'all',
    domain: 'all',
    category: 'all',
    euStatus: 'all',
    yearRange: [2005, 2026],
    status: 'all',
    onlyRecent: false
  });

  // Extract unique domains for the filter
  const availableDomains = useMemo(() => {
    const set = new Set<string>();
    allDocs.forEach(d => {
      if (d.domain) set.add(d.domain);
    });
    return Array.from(set).sort();
  }, [allDocs]);

  // Filtered documents
  const { results: filteredDocuments, totalMatches } = useMemo(() => {
    return filterAndSearchDocuments(allDocs, filters);
  }, [allDocs, filters]);

  // Actions
  const handleToggleBookmark = (docId: string) => {
    const updated = toggleStoredBookmark(docId);
    setBookmarks(updated);
  };

  const handleToggleDossier = (docId: string) => {
    if (dossierItems.some(i => i.documentId === docId)) {
      const updated = removeFromDossier(docId);
      setDossierItems(updated);
    } else {
      const updated = addToDossier(docId);
      setDossierItems(updated);
    }
  };

  const handleRemoveFromDossier = (docId: string) => {
    const updated = removeFromDossier(docId);
    setDossierItems(updated);
  };

  const handleSaveNote = (docId: string, content: string) => {
    saveStoredNote(docId, content);
    setNotes(getStoredNotes());
  };

  const handleSelectDoc = (doc: OivDocument) => {
    setSelectedDoc(doc);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectFamily = (fam: OivFamily) => {
    setFilters({ ...filters, family: fam, searchQuery: '' });
    setSelectedDoc(null);
    setCurrentTab('explorer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompareWith = (doc: OivDocument) => {
    setComparatorInitialDoc(doc);
    setSelectedDoc(null);
    setCurrentTab('comparator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleImportCustomDoc = (newDoc: OivDocument) => {
    saveCustomDocument(newDoc);
    setAllDocs(getAllCorpusDocuments());
  };

  const handleTabChange = (tab: string) => {
    setSelectedDoc(null);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1917] flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Header
        currentTab={selectedDoc ? 'detail' : currentTab}
        onSelectTab={handleTabChange}
        bookmarkCount={bookmarks.length}
        dossierCount={dossierItems.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {selectedDoc ? (
          <DocumentDetail
            document={selectedDoc}
            onBack={() => setSelectedDoc(null)}
            isBookmarked={bookmarks.includes(selectedDoc.id)}
            isInDossier={dossierItems.some(i => i.documentId === selectedDoc.id)}
            onToggleBookmark={handleToggleBookmark}
            onToggleDossier={handleToggleDossier}
            onCompareWith={handleCompareWith}
            userNote={notes[selectedDoc.id]}
            onSaveNote={handleSaveNote}
            onSelectDocument={handleSelectDoc}
            allDocuments={allDocs}
          />
        ) : (
          <>
            {(currentTab === 'home' || currentTab === 'explorer') && (
              <HomeExplorer
                documents={allDocs}
                filteredDocuments={filteredDocuments}
                totalMatches={totalMatches}
                filters={filters}
                onChangeFilters={setFilters}
                onSelectDoc={handleSelectDoc}
                onSelectFamily={handleSelectFamily}
                bookmarkedDocIds={bookmarks}
                dossierDocIds={dossierItems.map(i => i.documentId)}
                onToggleBookmark={handleToggleBookmark}
                onToggleDossier={handleToggleDossier}
                onCompareWith={handleCompareWith}
                availableDomains={availableDomains}
                onOpenSimulator={() => handleTabChange('simulator')}
                onOpenSolver={() => handleTabChange('solver')}
              />
            )}

            {currentTab === 'simulator' && (
              <TreatmentSimulator
                documents={allDocs}
                onSelectDoc={handleSelectDoc}
              />
            )}

            {currentTab === 'solver' && (
              <ProblemSolverView
                documents={allDocs}
                onSelectDoc={handleSelectDoc}
                onOpenSimulatorWith={() => {
                  setCurrentTab('simulator');
                  setSelectedDoc(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}

            {currentTab === 'comparator' && (
              <VersionComparator
                documents={allDocs}
                initialDoc={comparatorInitialDoc}
                onSelectDoc={handleSelectDoc}
              />
            )}

            {currentTab === 'regulatory' && (
              <EuRegulatoryView
                documents={allDocs}
                onSelectDoc={handleSelectDoc}
              />
            )}

            {currentTab === 'veille' && (
              <VeilleUpdatesView
                documents={allDocs}
                onSelectDoc={handleSelectDoc}
                onImportCustomDoc={handleImportCustomDoc}
              />
            )}

            {currentTab === 'guide' && (
              <UserGuideView
                onNavigateTab={(tab) => handleTabChange(tab)}
              />
            )}

            {currentTab === 'dossier' && (
              <DossierExportView
                dossierItems={dossierItems}
                bookmarkedDocIds={bookmarks}
                documents={allDocs}
                userNotes={notes}
                onRemoveFromDossier={handleRemoveFromDossier}
                onSelectDoc={handleSelectDoc}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E7E2DA] bg-[#FAF8F5] py-8 text-xs text-[#78716C] no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-semibold text-[#1C1917] font-editorial text-sm">
              OIV Navigator · Système Documentaire & Réglementaire Œnologique
            </div>
            <p>
              Outil public de recherche et d'interrogation du corpus OIV et des règlements européens (UE 2019/934).
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-medium">
            <button
              onClick={() => handleTabChange('home')}
              className="hover:text-[#1C1917] cursor-pointer"
            >
              Corpus
            </button>
            <button
              onClick={() => handleTabChange('simulator')}
              className="hover:text-[#6B1728] font-semibold cursor-pointer"
            >
              Simulateur de Chai
            </button>
            <button
              onClick={() => handleTabChange('solver')}
              className="hover:text-[#6B1728] font-semibold cursor-pointer"
            >
              Guide par Objectif
            </button>
            <button
              onClick={() => handleTabChange('regulatory')}
              className="hover:text-[#1C1917] cursor-pointer"
            >
              Règlements UE
            </button>
            <button
              onClick={() => handleTabChange('guide')}
              className="hover:text-[#6B1728] font-semibold cursor-pointer"
            >
              Guide Explicatif
            </button>
            <button
              onClick={() => handleTabChange('dossier')}
              className="hover:text-[#1C1917] cursor-pointer"
            >
              Registre & Export
            </button>
            <a
              href="https://www.oiv.int"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6B1728] underline"
            >
              Portail Officiel OIV.int
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
