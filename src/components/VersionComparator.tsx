import React, { useState } from 'react';
import { OivDocument } from '../types/oiv';
import { GitCompare, Sparkles } from 'lucide-react';

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="bg-white border border-[#E7E2DA] rounded-xl p-6 shadow-xs">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-[#6B1728]/10 text-[#6B1728] rounded-lg">
            <GitCompare className="w-5 h-5 text-[#6B1728]" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-editorial text-[#1C1917]">
              Comparateur d'Évolution & Diff de Versions
            </h1>
            <p className="text-xs sm:text-sm text-[#78716C]">
              Analysez les variations de prescriptions, les modifications de doses limites et les extensions de champ d'application.
            </p>
          </div>
        </div>

        {/* Document Selector */}
        <div className="mt-4 pt-4 border-t border-[#F2EEE9] flex items-center gap-4 flex-wrap">
          <label className="text-xs font-semibold text-[#57534E]">
            Sélectionner une référence OIV à comparer :
          </label>
          <select
            value={selectedDocId}
            onChange={(e) => setSelectedDocId(e.target.value)}
            className="text-xs sm:text-sm p-2 bg-[#FAF8F5] border border-[#E7E2DA] rounded-lg text-[#1C1917] font-medium focus:outline-none focus:border-[#6B1728]"
          >
            {multiVersionDocs.map(doc => (
              <option key={doc.id} value={doc.id}>
                {doc.officialReference} — {doc.title} ({doc.versions.length} versions)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary of changes highlight banner */}
      <div className="p-4 bg-[#FAF8F5] border border-[#E8DEC8] rounded-xl text-xs sm:text-sm text-[#44403C] space-y-1">
        <div className="font-bold text-[#6B1728] font-editorial text-base flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#6B1728]" />
          <span>Synthèse des modifications : {currentDoc.officialReference}</span>
        </div>
        <p className="leading-relaxed">
          {versionA.summaryOfChanges || 'Évolution des dispositions techniques et conditions d\'emploi.'}
        </p>
      </div>

      {/* Side-by-side comparison grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Column 1: Version Actuelle (Version A) */}
        <div className="bg-white border-2 border-[#6B1728]/30 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#F2EEE9]">
            <div>
              <span className="text-[11px] uppercase font-semibold text-[#6B1728] tracking-wider block">
                Version Récente / En Vigueur
              </span>
              <h2 className="text-base sm:text-lg font-bold font-editorial text-[#1C1917]">
                {versionA.versionLabel}
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-[#1C1917] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E7E2DA]">
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
            <span className="text-xs font-semibold text-[#57534E] uppercase tracking-wider block">
              Prescriptions & Règles applicables
            </span>
            <ul className="space-y-1.5 text-xs text-[#44403C]">
              {versionA.prescriptions.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-[#FBF9F5] p-2 rounded">
                  <span className="text-emerald-700 font-bold shrink-0">+</span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Extracted text quote */}
          <div className="pt-2 text-xs text-[#78716C] italic border-t border-[#F2EEE9]">
            « {versionA.extractedText} »
          </div>
        </div>

        {/* Column 2: Version Antérieure (Version B) */}
        <div className="bg-white border border-[#E7E2DA] rounded-xl p-5 sm:p-6 shadow-xs space-y-4 opacity-95">
          <div className="flex items-center justify-between pb-3 border-b border-[#F2EEE9]">
            <div>
              <span className="text-[11px] uppercase font-semibold text-[#78716C] tracking-wider block">
                Version Antérieure
              </span>
              <h2 className="text-base sm:text-lg font-bold font-editorial text-[#1C1917]">
                {versionB.versionLabel}
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-[#78716C] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E7E2DA]">
              {versionB.adoptionYear}
            </span>
          </div>

          {/* Doses et limites antérieures */}
          <div className="p-3 bg-[#FAF8F5] border border-[#E7E2DA] rounded-lg text-xs space-y-1">
            <span className="font-semibold text-[#57534E] block">Plafond antérieur :</span>
            <span className="font-mono text-sm font-bold text-[#57534E] tabular-nums">
              {versionB.limitsAndDoses}
            </span>
          </div>

          {/* Prescriptions antérieures */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#57534E] uppercase tracking-wider block">
              Prescriptions d'origine
            </span>
            <ul className="space-y-1.5 text-xs text-[#57534E]">
              {versionB.prescriptions.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-[#FAF8F5] p-2 rounded">
                  <span className="text-[#A8A29E] font-bold shrink-0">·</span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Extracted text quote */}
          <div className="pt-2 text-xs text-[#A8A29E] italic border-t border-[#F2EEE9]">
            « {versionB.extractedText} »
          </div>
        </div>

      </div>

      {/* Button to open full sheet */}
      <div className="flex justify-end pt-2">
        <button
          onClick={() => onSelectDoc(currentDoc)}
          className="px-4 py-2 text-xs font-semibold text-[#6B1728] bg-white border border-[#6B1728]/30 hover:bg-[#6B1728] hover:text-white rounded-lg transition-colors cursor-pointer"
        >
          Ouvrir la fiche complète de {currentDoc.officialReference}
        </button>
      </div>
    </div>
  );
};
