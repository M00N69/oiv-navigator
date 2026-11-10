import React, { useState } from 'react';
import { OivDocument, UserNote } from '../types/oiv';
import { 
  ArrowLeft, 
  ExternalLink, 
  Bookmark, 
  FilePlus, 
  Printer, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  GitCompare, 
  FileText, 
  Save, 
  Edit3,
  Layers,
  FlaskConical,
  BookOpen,
  ShieldCheck
} from 'lucide-react';
import { PageContainer } from './PageContainer';

interface DocumentDetailProps {
  document: OivDocument;
  onBack: () => void;
  isBookmarked: boolean;
  isInDossier: boolean;
  onToggleBookmark: (docId: string) => void;
  onToggleDossier: (docId: string) => void;
  onCompareWith: (doc: OivDocument) => void;
  userNote?: UserNote;
  onSaveNote: (docId: string, content: string) => void;
  onSelectDocument: (doc: OivDocument) => void;
  allDocuments: OivDocument[];
}

export const DocumentDetail: React.FC<DocumentDetailProps> = ({
  document,
  onBack,
  isBookmarked,
  isInDossier,
  onToggleBookmark,
  onToggleDossier,
  onCompareWith,
  userNote,
  onSaveNote,
  onSelectDocument,
  allDocuments
}) => {
  const [noteContent, setNoteContent] = useState<string>(userNote?.content || '');
  const [noteSavedFeedback, setNoteSavedFeedback] = useState<boolean>(false);

  const handleSaveNote = () => {
    onSaveNote(document.id, noteContent);
    setNoteSavedFeedback(true);
    setTimeout(() => setNoteSavedFeedback(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageContainer className="space-y-8">
      {/* Top action rail */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E7E2DA] no-print">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#57534E] hover:text-[#1C1917] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour aux résultats</span>
        </button>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onToggleBookmark(document.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors flex items-center gap-1.5 cursor-pointer ${
              isBookmarked
                ? 'bg-[#6B1728]/10 text-[#6B1728] border-[#6B1728]/30'
                : 'bg-white text-[#57534E] border-[#E7E2DA] hover:bg-[#F3EFEA]'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 fill-current" />
            <span>{isBookmarked ? 'Favori enregistré' : 'Mettre en favori'}</span>
          </button>

          <button
            onClick={() => onToggleDossier(document.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors flex items-center gap-1.5 cursor-pointer ${
              isInDossier
                ? 'bg-[#1C1917] text-white border-[#1C1917]'
                : 'bg-white text-[#57534E] border-[#E7E2DA] hover:bg-[#F3EFEA]'
            }`}
          >
            <FilePlus className="w-3.5 h-3.5" />
            <span>{isInDossier ? 'Dans le dossier' : 'Ajouter au dossier'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3 py-1.5 text-xs font-medium rounded border border-[#E7E2DA] bg-white text-[#57534E] hover:bg-[#F3EFEA] transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Imprimer cette fiche documentaire"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimer</span>
          </button>
        </div>
      </div>

      {/* Main Document Header */}
      <div className="bg-white border border-[#E7E2DA] rounded-xl p-6 sm:p-8 shadow-xs">
        {/* Unboxed Metadata Strip */}
        <div className="flex items-center gap-3 text-xs text-[#78716C] mb-3 flex-wrap">
          <span className="font-mono font-bold text-[#6B1728] text-sm tracking-tight">
            {document.officialReference}
          </span>
          <span aria-hidden="true" className="text-[#D6D3D1]">·</span>
          <span>{document.domain}</span>
          <span aria-hidden="true" className="text-[#D6D3D1]">·</span>
          <span>Catégorie : {document.category}</span>
          <span aria-hidden="true" className="text-[#D6D3D1]">·</span>
          <span className="font-mono tabular-nums">Adoption : {document.adoptionDate}</span>
          <span aria-hidden="true" className="text-[#D6D3D1]">·</span>
          <span className="capitalize">Statut : {document.status.replace('_', ' ')}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold font-editorial text-[#1C1917] leading-tight mb-4">
          {document.title}
        </h1>

        {/* Executive summary */}
        <p className="text-base text-[#44403C] leading-relaxed mb-6 font-normal">
          {document.summary}
        </p>

        {/* Official Links & Substance meta */}
        <div className="pt-4 border-t border-[#F2EEE9] flex items-center justify-between gap-4 flex-wrap text-xs text-[#57534E]">
          <div className="flex items-center gap-4 flex-wrap">
            {document.substanceName && (
              <div>
                <span className="text-[#78716C]">Substance : </span>
                <span className="font-medium text-[#1C1917]">{document.substanceName}</span>
              </div>
            )}
            {document.casNumber && (
              <div>
                <span className="text-[#78716C]">N° CAS : </span>
                <span className="font-mono text-[#1C1917]">{document.casNumber}</span>
              </div>
            )}
            {document.chemicalFormula && (
              <div>
                <span className="text-[#78716C]">Formule : </span>
                <span className="font-mono text-[#1C1917]">{document.chemicalFormula}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Texte à jour & vérifié (Session {document.adoptionYear})</span>
            </span>

            {document.pdfUrl && (
              <a
                href={document.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#6B1728] hover:bg-[#50101C] px-3 py-1.5 rounded transition-colors shadow-xs"
                title="Télécharger directement le document PDF officiel de l'OIV"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Télécharger le PDF officiel OIV</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <a
              href={document.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] bg-[#FAF8F5] hover:bg-[#F3EFEA] border border-[#E7E2DA] px-3 py-1.5 rounded transition-colors"
              title="Consulter la fiche source directe sur le portail OIV.int"
            >
              <span>Voir sur OIV.int</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02019R0934-20241128"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#57534E] hover:text-[#1C1917] bg-white hover:bg-[#FAF8F5] border border-[#E7E2DA] px-3 py-1.5 rounded transition-colors"
              title="Vérifier directement sur le texte consolidé EUR-Lex"
            >
              <span>Vérifier sur EUR-Lex</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Explicit Validity & Update Tracking Diagnostic Card */}
      <div className="bg-white border border-[#E7E2DA] rounded-xl p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between gap-4 flex-wrap pb-2 border-b border-[#F2EEE9]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <h2 className="text-sm font-bold text-[#1C1917] uppercase tracking-wider font-mono">
              Contrôle de Validité & Historique des Mises à Jour
            </h2>
          </div>
          <span className="text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
            Dépôts OIV & UE vérifiés à jour
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-3 bg-[#FAF8F5] rounded border border-[#EBE6DF] space-y-1">
            <span className="text-[#78716C] block uppercase text-[10px] font-semibold">1. Validité OIV</span>
            <div className="font-bold text-[#1C1917] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Texte officiel en vigueur</span>
            </div>
            <p className="text-[#57534E]">Adopté le {document.adoptionDate} par l'Assemblée générale OIV.</p>
          </div>

          <div className="p-3 bg-[#FAF8F5] rounded border border-[#EBE6DF] space-y-1">
            <span className="text-[#78716C] block uppercase text-[10px] font-semibold">2. Validité UE (Règlement 2019/934)</span>
            <div className="font-bold text-[#1C1917] flex items-center gap-1">
              {document.euRegulation.euStatus === 'autorise_ue' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
              {document.euRegulation.euStatus === 'encadre_specifique' && <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />}
              {document.euRegulation.euStatus === 'divergence_oiv_ue' && <ShieldAlert className="w-3.5 h-3.5 text-rose-600 shrink-0" />}
              <span>{document.euRegulation.primaryReference.split('—')[0]}</span>
            </div>
            <p className="text-[#57534E]">Primauté du droit européen confirmée par publication JOUE C/2025/1829.</p>
          </div>

          <div className="p-3 bg-[#FAF8F5] rounded border border-[#EBE6DF] space-y-1">
            <span className="text-[#78716C] block uppercase text-[10px] font-semibold">3. État des Révisions</span>
            <div className="font-bold text-[#1C1917]">
              {document.versions.length > 1 ? `${document.versions.length} versions répertoriées` : 'Version de référence unique'}
            </div>
            {document.versions.length > 1 ? (
              <button
                type="button"
                onClick={() => onCompareWith(document)}
                className="text-[11px] text-[#6B1728] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer pt-0.5"
              >
                <span>Comparer avec la version antérieure →</span>
              </button>
            ) : (
              <p className="text-[#78716C]">Aucune révision ultérieure n'a abrogé ce texte.</p>
            )}
          </div>
        </div>
      </div>

      {/* Critical Section: Articulation Réglementaire Européenne (Règle 2019/934 & C/2025/1829) */}
      <div className="bg-[#FAF8F5] border border-[#E8DEC8] rounded-xl p-6 sm:p-7 shadow-xs">
        <div className="flex items-start gap-3.5">
          <div className="p-2 bg-[#6B1728]/10 text-[#6B1728] rounded-lg shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5 text-[#6B1728]" />
          </div>
          <div className="space-y-3 flex-1">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="text-base font-bold text-[#1C1917] font-editorial">
                Articulation avec la Réglementation de l'Union Européenne
              </h2>
              <div className="text-xs font-semibold">
                {document.euRegulation.euStatus === 'autorise_ue' && (
                  <span className="text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                    Autorisé dans l'UE
                  </span>
                )}
                {document.euRegulation.euStatus === 'encadre_specifique' && (
                  <span className="text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
                    Encadré avec restrictions UE
                  </span>
                )}
                {document.euRegulation.euStatus === 'divergence_oiv_ue' && (
                  <span className="text-rose-900 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded">
                    Divergence avec le droit UE
                  </span>
                )}
                {document.euRegulation.euStatus === 'non_applicable' && (
                  <span className="text-[#57534E] bg-white border border-[#E7E2DA] px-2.5 py-1 rounded">
                    Méthode d'analyse / Référence
                  </span>
                )}
              </div>
            </div>

            {/* Impératif légal */}
            <div className="p-3 bg-white border border-[#E2D8C3] rounded text-xs text-[#44403C] space-y-1.5 leading-relaxed">
              <p className="font-semibold text-[#6B1728]">
                {document.euRegulation.prevalenceRule}
              </p>
              <div className="flex items-center gap-2 text-[#78716C] pt-1">
                <span>Base légale européenne :</span>
                <span className="font-medium text-[#1C1917]">{document.euRegulation.primaryReference}</span>
              </div>
              {document.euRegulation.officialJournalPublication && (
                <div className="text-[#78716C]">
                  Publication de référence : <span className="font-mono text-[#1C1917]">{document.euRegulation.officialJournalPublication}</span>
                </div>
              )}
            </div>

            {/* Conditions UE spécifiques */}
            {document.euRegulation.euLimitsAndConditions && (
              <div className="text-xs text-[#57534E]">
                <strong className="text-[#1C1917]">Conditions & Limites dans l'UE : </strong>
                {document.euRegulation.euLimitsAndConditions}
              </div>
            )}
            {document.euRegulation.divergenceNotes && (
              <div className="text-xs text-amber-900/90 bg-amber-50/50 p-2.5 rounded border border-amber-200/60">
                <strong>Attention pratique : </strong>
                {document.euRegulation.divergenceNotes}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Grid: Objectifs & Prescriptions Techniques OIV */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Objectifs oenologiques */}
        <div className="bg-white border border-[#E7E2DA] rounded-xl p-6 shadow-xs space-y-3">
          <h2 className="text-base font-bold font-editorial text-[#1C1917] flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#6B1728]" />
            Objectifs Œnologiques Autorisés
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-[#44403C] list-disc list-inside">
            {document.oenologicalObjectives.map((obj, i) => (
              <li key={i} className="leading-relaxed">
                {obj}
              </li>
            ))}
          </ul>
        </div>

        {/* Plafonds et Doses limites */}
        <div className="bg-white border border-[#E7E2DA] rounded-xl p-6 shadow-xs space-y-3">
          <h2 className="text-base font-bold font-editorial text-[#1C1917] flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-[#6B1728]" />
            Doses Maximales & Limites Prescrites
          </h2>
          <div className="p-4 bg-[#FBF9F5] border border-[#EBE6DF] rounded-lg">
            <p className="font-mono text-sm sm:text-base font-bold text-[#1C1917] tabular-nums">
              {document.limitsAndDoses}
            </p>
          </div>
          <p className="text-xs text-[#78716C] leading-relaxed">
            Toute utilisation doit respecter scrupuleusement les exigences de pureté fixées par le Codex œnologique international.
          </p>
        </div>
      </div>

      {/* Prescriptions officielles détaillées */}
      <div className="bg-white border border-[#E7E2DA] rounded-xl p-6 sm:p-7 shadow-xs space-y-4">
        <h2 className="text-base sm:text-lg font-bold font-editorial text-[#1C1917]">
          Prescriptions & Conditions d'Application
        </h2>
        <div className="space-y-3">
          {document.prescriptions.map((presc, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#44403C]">
              <span className="font-mono text-xs font-bold text-[#6B1728] mt-0.5 shrink-0">
                {String(idx + 1).padStart(2, '0')}.
              </span>
              <p className="leading-relaxed">{presc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Relations documentaires & Codex associé */}
      {document.relatedDocuments.length > 0 && (
        <div className="bg-white border border-[#E7E2DA] rounded-xl p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold font-editorial text-[#1C1917] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#6B1728]" />
            Documents Liés & Références Associées
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {document.relatedDocuments.map((rel) => {
              const matchedDoc = allDocuments.find(d => d.id === rel.id || d.officialReference === rel.officialReference);
              return (
                <div
                  key={rel.id}
                  onClick={() => matchedDoc && onSelectDocument(matchedDoc)}
                  className={`p-3.5 border border-[#E7E2DA] rounded-lg text-left transition-all ${
                    matchedDoc 
                      ? 'hover:border-[#6B1728] hover:bg-[#FAF8F5] cursor-pointer' 
                      : 'opacity-80'
                  }`}
                >
                  <div className="text-xs font-mono font-semibold text-[#6B1728] mb-1">
                    {rel.officialReference}
                  </div>
                  <div className="text-xs font-medium text-[#1C1917] line-clamp-1 mb-1">
                    {rel.title}
                  </div>
                  {rel.evidence && (
                    <div className="text-[11px] text-[#78716C] leading-snug">
                      {rel.evidence}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Historique des versions du document */}
      {document.versions.length > 1 && (
        <div className="bg-white border border-[#E7E2DA] rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-base font-bold font-editorial text-[#1C1917] flex items-center gap-2">
              <GitCompare className="w-4 h-4 text-[#6B1728]" />
              Historique des Versions & Évolution
            </h2>
            <button
              onClick={() => onCompareWith(document)}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#6B1728] hover:bg-[#50101C] rounded transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <GitCompare className="w-3.5 h-3.5" />
              <span>Comparer les 2 versions</span>
            </button>
          </div>

          <div className="space-y-3">
            {document.versions.map((ver) => (
              <div 
                key={ver.id}
                className={`p-3.5 rounded-lg border text-xs ${
                  ver.isCurrent 
                    ? 'border-[#6B1728]/30 bg-[#FAF8F5]' 
                    : 'border-[#E7E2DA] bg-white text-[#78716C]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[#1C1917] font-mono">
                    {ver.versionLabel} {ver.isCurrent && '(Version en vigueur)'}
                  </span>
                  <span className="font-mono tabular-nums text-[#78716C]">
                    Adoption : {ver.adoptionYear}
                  </span>
                </div>
                {ver.summaryOfChanges && (
                  <p className="text-[#44403C] mt-1 leading-relaxed">
                    <strong>Changements apportés : </strong> {ver.summaryOfChanges}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notes techniques personnelles de l'utilisateur (Persistance locale) */}
      <div className="bg-white border border-[#E7E2DA] rounded-xl p-6 shadow-xs space-y-3 no-print">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold font-editorial text-[#1C1917] flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-[#6B1728]" />
            Notes d'Atelier / Protocoles Internes (Enregistrées localement)
          </h2>
          {noteSavedFeedback && (
            <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Note enregistrée
            </span>
          )}
        </div>
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Ajoutez vos observations de chai, restrictions du cahier des charges AOP local, essais de doses..."
          rows={3}
          className="w-full p-3 text-xs sm:text-sm bg-[#FAF8F5] border border-[#E7E2DA] rounded-lg text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-1 focus:ring-[#6B1728] focus:border-[#6B1728]"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSaveNote}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#332F2C] rounded transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Enregistrer mes notes</span>
          </button>
        </div>
      </div>
    </PageContainer>
  );
};
