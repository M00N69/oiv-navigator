import React, { useState } from 'react';
import { OivDocument } from '../types/oiv';
import { GitCompare, Sparkles } from 'lucide-react';
import { PageContainer } from './PageContainer';
import { PageHeader } from './PageHeader';

interface VersionComparatorProps {
  documents: OivDocument[];
  initialDoc?: OivDocument | null;
  onSelectDoc: (doc: OivDocument) => void;
}

export const VersionComparator: React.FC<VersionComparatorProps> = ({
  documents,
  initialDoc,
  onSelectDoc
}) => {
  // Filter documents that have version history
  const multiVersionDocs = documents.filter(d => d.versions && d.versions.length > 1);

  const [selectedDocId, setSelectedDocId] = useState<string>(
    initialDoc?.id || multiVersionDocs[0]?.id || documents[0]?.id || ''
  );

  const currentDoc = documents.find(d => d.id === selectedDocId) || documents[0];

  const versionA = currentDoc.versions[0]; // Current/Newer
  const versionB = currentDoc.versions[1] || currentDoc.versions[0]; // Older

  return (
    <PageContainer className="space-y-6">
      <PageHeader
        icon={GitCompare}
        eyebrow="Analyse de versions"
        title="Comparateur d'évolution & diff de versions"
        description="Analysez les variations de prescriptions, les modifications de doses limites et les extensions de champ d'application."
      />

        {/* Document Selector */}
        <div className="flex flex-wrap items-center gap-4 border-b border-line pb-4">
          <label htmlFor="comparator-doc" className="text-xs font-semibold text-muted">
            Sélectionner une référence OIV à comparer :
          </label>
          <select
            id="comparator-doc"
            value={selectedDocId}
            onChange={(e) => setSelectedDocId(e.target.value)}
            className="rounded-lg border border-line bg-surface-muted p-2 text-xs font-medium text-ink focus:border-brand focus:outline-none sm:text-sm"
          >
            {multiVersionDocs.map(doc => (
              <option key={doc.id} value={doc.id}>
                {doc.officialReference} — {doc.title} ({doc.versions.length} versions)
              </option>
            ))}
          </select>
        </div>

      {/* Summary of changes highlight banner */}
      <div className="p-4 bg-surface-muted border border-line-warm rounded-xl text-xs sm:text-sm text-ink-soft space-y-1">
        <div className="font-bold text-brand font-editorial text-base flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-brand" />
          <span>Synthèse des modifications : {currentDoc.officialReference}</span>
        </div>
        <p className="leading-relaxed">
          {versionA.summaryOfChanges || 'Évolution des dispositions techniques et conditions d\'emploi.'}
        </p>
      </div>

      {/* Side-by-side comparison grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Column 1: Version Actuelle (Version A) */}
        <div className="bg-white border-2 border-brand/30 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-line-soft">
            <div>
              <span className="text-[11px] uppercase font-semibold text-brand tracking-wider block">
                Version Récente / En Vigueur
              </span>
              <h2 className="text-base sm:text-lg font-bold font-editorial text-ink">
                {versionA.versionLabel}
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-ink bg-surface-muted px-2.5 py-1 rounded border border-line">
              {versionA.adoptionYear}
            </span>
          </div>

          {/* Doses et limites */}
          <div className="p-3 bg-emerald-50/60 border border-emerald-200/60 rounded-lg text-xs space-y-1">
            <span className="font-semibold text-emerald-950 block">Plafond et conditions fixées :</span>
            <span className="font-mono text-sm font-bold text-emerald-800 tabular-nums">
              {versionA.limitsAndDoses}
            </span>
          </div>

          {/* Prescriptions */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
              Prescriptions & Règles applicables
            </span>
            <ul className="space-y-1.5 text-xs text-ink-soft">
              {versionA.prescriptions.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-surface p-2 rounded">
                  <span className="text-emerald-700 font-bold shrink-0">+</span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Extracted text quote */}
          <div className="pt-2 text-xs text-muted italic border-t border-line-soft">
            « {versionA.extractedText} »
          </div>
        </div>

        {/* Column 2: Version Antérieure (Version B) */}
        <div className="bg-white border border-line rounded-xl p-5 sm:p-6 shadow-xs space-y-4 opacity-95">
          <div className="flex items-center justify-between pb-3 border-b border-line-soft">
            <div>
              <span className="text-[11px] uppercase font-semibold text-muted tracking-wider block">
                Version Antérieure
              </span>
              <h2 className="text-base sm:text-lg font-bold font-editorial text-ink">
                {versionB.versionLabel}
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-muted bg-surface-muted px-2.5 py-1 rounded border border-line">
              {versionB.adoptionYear}
            </span>
          </div>

          {/* Doses et limites antérieures */}
          <div className="p-3 bg-surface-muted border border-line rounded-lg text-xs space-y-1">
            <span className="font-semibold text-muted block">Plafond antérieur :</span>
            <span className="font-mono text-sm font-bold text-muted tabular-nums">
              {versionB.limitsAndDoses}
            </span>
          </div>

          {/* Prescriptions antérieures */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider block">
              Prescriptions d'origine
            </span>
            <ul className="space-y-1.5 text-xs text-muted">
              {versionB.prescriptions.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-surface-muted p-2 rounded">
                  <span className="text-subtle font-bold shrink-0">·</span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Extracted text quote */}
          <div className="pt-2 text-xs text-subtle italic border-t border-line-soft">
            « {versionB.extractedText} »
          </div>
        </div>

      </div>

      {/* Button to open full sheet */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => onSelectDoc(currentDoc)}
          className="px-4 py-2 text-xs font-semibold text-brand bg-white border border-brand/30 hover:bg-brand hover:text-white rounded-lg transition-colors cursor-pointer"
        >
          Ouvrir la fiche complète de {currentDoc.officialReference}
        </button>
      </div>
    </PageContainer>
  );
};
