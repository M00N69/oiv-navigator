import React, { useState } from 'react';
import { OivDocument } from '../types/oiv';
import { OFFICIAL_LIVE_SOURCES } from '../data/oivCorpus';
import { normalizeDocument } from '../lib/documentSchema';
import { BookOpen, Download, Upload, CheckCircle2, AlertCircle, ArrowRight, ExternalLink, Scale } from 'lucide-react';
import { PageContainer } from './PageContainer';
import { PageHeader } from './PageHeader';

interface VeilleUpdatesViewProps {
  documents: OivDocument[];
  onSelectDoc: (doc: OivDocument) => void;
  onImportCustomDoc?: (doc: OivDocument) => void;
}

interface ImportStatus {
  type: 'success' | 'error';
  message: string;
}

export const VeilleUpdatesView: React.FC<VeilleUpdatesViewProps> = ({
  documents,
  onSelectDoc,
  onImportCustomDoc
}) => {
  const [importStatus, setImportStatus] = useState<ImportStatus | null>(null);

  // Sort documents by adoption date / year descending
  const sortedDocs = [...documents].sort((a, b) => b.adoptionYear - a.adoptionYear);

  const handleExportCorpus = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(documents, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `oiv_navigator_corpus_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      let parsed: unknown;
      try {
        parsed = JSON.parse(String(e.target?.result ?? ''));
      } catch {
        setImportStatus({ type: 'error', message: 'Fichier JSON illisible : aucune donnée importée.' });
        event.target.value = '';
        return;
      }

      const entries = Array.isArray(parsed) ? parsed : [parsed];
      const errors: string[] = [];
      let imported = 0;

      entries.forEach((entry) => {
        const result = normalizeDocument(entry);
        if (!result.ok) {
          errors.push(result.error);
          return;
        }
        onImportCustomDoc?.(result.document);
        imported += 1;
      });

      if (imported > 0) {
        const suffix = errors.length > 0 ? ` ${errors.length} entrée(s) ignorée(s) : ${errors[0]}` : '';
        setImportStatus({
          type: 'success',
          message: `${imported} fiche(s) importée(s) et enregistrée(s) localement.${suffix}`,
        });
      } else {
        setImportStatus({
          type: 'error',
          message: `Aucune fiche importée. ${errors[0] ?? 'Format JSON invalide.'}`,
        });
      }

      // Allow re-importing the same file
      event.target.value = '';
    };
    reader.readAsText(file);
  };

  return (
    <PageContainer className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={BookOpen}
        eyebrow="Journal de veille & dépôts légaux"
        title="Veille active & téléchargement des dernières versions"
        description="L'application référence les dernières publications officielles de l'OIV et les actes délégués de l'Union européenne. Utilisez les accès directs pour consulter et télécharger les textes originaux à la source."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleExportCorpus}
              className="px-3.5 py-2 text-xs font-semibold text-[#1C1917] bg-[#FAF8F5] border border-[#E7E2DA] hover:bg-[#F3EFEA] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Exporter l'ensemble de la base documentaire en JSON"
            >
              <Download className="w-3.5 h-3.5 text-[#6B1728]" />
              <span>Sauvegarder JSON</span>
            </button>

            <label className="px-3.5 py-2 text-xs font-semibold text-white bg-[#6B1728] hover:bg-[#50101C] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#6B1728]">
              <Upload className="w-3.5 h-3.5" />
              <span>Importer une résolution</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImportFile}
                className="sr-only"
              />
            </label>
          </div>
        }
      />

      {importStatus && (
        <div
          className={`p-3 border rounded-lg text-xs flex items-center gap-2 ${
            importStatus.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
              : 'bg-rose-50 border-rose-200 text-rose-800'
          }`}
          role="status"
        >
          {importStatus.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          )}
          <span>{importStatus.message}</span>
        </div>
      )}

      {/* Official Repositories Hub with Direct Clickable Links */}
      <div className="bg-white border border-[#E7E2DA] rounded-xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap pb-3 border-b border-[#F2EEE9]">
          <div>
            <h2 className="text-base font-bold font-editorial text-[#1C1917] flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#6B1728]" />
              <span>Dépôts Légaux Surveillés (Accès Directs)</span>
            </h2>
            <p className="text-xs text-[#78716C]">
              Cliquez directement sur un dépôt officiel pour récupérer la toute dernière édition en vigueur.
            </p>
          </div>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
            Synchronisation continue
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OFFICIAL_LIVE_SOURCES.map((src) => (
            <div
              key={src.id}
              className="p-4 bg-[#FAF8F5] border border-[#E7E2DA] rounded-lg flex flex-col justify-between hover:border-[#6B1728] transition-all"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#78716C]">
                  <span className="font-semibold text-[#6B1728]">{src.organization}</span>
                  <span>{src.celexOrCode}</span>
                </div>
                <h3 className="text-sm font-bold text-[#1C1917]">
                  {src.name}
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {src.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#EBE6DF] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#78716C]">{src.updateFrequency}</span>
                <a
                  href={src.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#6B1728] hover:underline inline-flex items-center gap-1"
                >
                  <span>Récupérer la version officielle</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chronological Timeline */}
      <div className="space-y-4">
        <h2 className="text-base font-bold font-editorial text-[#1C1917]">
          Chronologie des publications
        </h2>

        <div className="space-y-4">
          {sortedDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-[#E7E2DA] hover:border-[#6B1728]/40 rounded-xl p-5 shadow-xs transition-all flex items-start justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-xs text-[#78716C] flex-wrap">
                  <span className="font-mono font-bold text-[#6B1728]">
                    {doc.officialReference}
                  </span>
                  <span aria-hidden="true" className="text-[#D6D3D1]">·</span>
                  <span>{doc.domain}</span>
                  <span aria-hidden="true" className="text-[#D6D3D1]">·</span>
                  <span className="font-mono tabular-nums">{doc.adoptionDate}</span>
                  {doc.isRecentPublication && (
                    <>
                      <span aria-hidden="true" className="text-[#D6D3D1]">·</span>
                      <span className="text-emerald-700 font-semibold">Dernière session OIV</span>
                    </>
                  )}
                </div>

                <h3 
                  onClick={() => onSelectDoc(doc)}
                  className="text-base font-bold font-editorial text-[#1C1917] hover:text-[#6B1728] transition-colors cursor-pointer"
                >
                  {doc.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed max-w-3xl">
                  {doc.summary}
                </p>

                {doc.limitsAndDoses && (
                  <div className="text-xs text-[#44403C] font-mono">
                    <strong className="font-sans font-semibold">Conditions : </strong>
                    {doc.limitsAndDoses}
                  </div>
                )}
              </div>

              <button
                onClick={() => onSelectDoc(doc)}
                className="px-3 py-1.5 text-xs font-semibold text-[#6B1728] hover:bg-[#6B1728]/10 rounded-lg transition-colors shrink-0 flex items-center gap-1 cursor-pointer self-center"
              >
                <span>Fiche</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};
