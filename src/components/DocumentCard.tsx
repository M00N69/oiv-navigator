import React from 'react';
import { OivDocument } from '../types/oiv';
import { ExternalLink, Bookmark, FilePlus, ChevronRight, GitCompare, CheckCircle2, AlertTriangle, ShieldAlert } from 'lucide-react';
import { highlightText } from '../lib/search';

interface DocumentCardProps {
  document: OivDocument;
  searchQuery: string;
  isBookmarked: boolean;
  isInDossier: boolean;
  onSelect: (doc: OivDocument) => void;
  onToggleBookmark: (docId: string) => void;
  onToggleDossier: (docId: string) => void;
  onCompareWith: (doc: OivDocument) => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  document,
  searchQuery,
  isBookmarked,
  isInDossier,
  onSelect,
  onToggleBookmark,
  onToggleDossier,
  onCompareWith
}) => {
  // EU status styling
  const renderEuStatusBadge = () => {
    const status = document.euRegulation.euStatus;
    if (status === 'autorise_ue') {
      return (
        <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Autorisé UE (Règlement 2019/934)</span>
        </div>
      );
    }
    if (status === 'encadre_specifique') {
      return (
        <div className="flex items-center gap-1.5 text-xs text-amber-900 font-medium">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>Encadrement spécifique UE / Restrictions</span>
        </div>
      );
    }
    if (status === 'divergence_oiv_ue' || status === 'non_admis_ue') {
      return (
        <div className="flex items-center gap-1.5 text-xs text-rose-900 font-medium">
          <ShieldAlert className="w-3.5 h-3.5 text-rose-600 shrink-0" />
          <span>Divergence / Non autorisé en droit UE</span>
        </div>
      );
    }
    return (
      <div className="text-xs text-[#78716C]">
        <span>Méthode / Non soumis à autorisation UE</span>
      </div>
    );
  };

  return (
    <div 
      className="bg-white border border-[#E7E2DA] hover:border-[#6B1728]/40 rounded-lg p-5 sm:p-6 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
    >
      <div>
        {/* Unboxed Metadata Header (NO PILLS) */}
        <div className="flex items-center justify-between gap-4 text-xs text-[#78716C] mb-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono font-semibold text-[#6B1728] tracking-tight">
              {document.officialReference}
            </span>
            <span aria-hidden="true" className="text-[#D6D3D1]">·</span>
            <span>{document.domain}</span>
            <span aria-hidden="true" className="text-[#D6D3D1]">·</span>
            <span>{document.category}</span>
            <span aria-hidden="true" className="text-[#D6D3D1]">·</span>
            <span className="font-mono tabular-nums">{document.adoptionYear}</span>
          </div>

          {/* Quick Bookmark & Dossier Buttons */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleBookmark(document.id);
              }}
              className={`p-1.5 rounded transition-colors ${
                isBookmarked 
                  ? 'text-[#6B1728] bg-[#6B1728]/10' 
                  : 'text-[#A8A29E] hover:text-[#1C1917] hover:bg-[#F3EFEA]'
              }`}
              title={isBookmarked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleDossier(document.id);
              }}
              className={`p-1.5 rounded transition-colors ${
                isInDossier 
                  ? 'text-[#6B1728] bg-[#6B1728]/10' 
                  : 'text-[#A8A29E] hover:text-[#1C1917] hover:bg-[#F3EFEA]'
              }`}
              title={isInDossier ? 'Retirer du dossier technique' : 'Ajouter au dossier technique'}
            >
              <FilePlus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 
          onClick={() => onSelect(document)}
          className="text-lg sm:text-xl font-bold font-editorial text-[#1C1917] group-hover:text-[#6B1728] transition-colors cursor-pointer leading-snug mb-2.5"
          dangerouslySetInnerHTML={{ __html: highlightText(document.title, searchQuery) }}
        />

        {/* Summary */}
        <p 
          className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-2 mb-4"
          dangerouslySetInnerHTML={{ __html: highlightText(document.summary, searchQuery) }}
        />

        {/* Limits & Doses strip */}
        {document.limitsAndDoses && (
          <div className="mb-3 py-2 px-3 bg-[#FAF8F5] border border-[#EBE6DF] rounded text-xs text-[#44403C]">
            <span className="font-semibold text-[#1C1917]">Plafond & Conditions : </span>
            <span className="font-mono tabular-nums">{document.limitsAndDoses}</span>
          </div>
        )}

        {/* Direct official links strip */}
        <div className="mb-3 flex items-center gap-3 text-[11px] text-[#78716C] flex-wrap">
          <span className="font-medium text-[#57534E]">Liens directs officiels :</span>
          {document.pdfUrl && (
            <a
              href={document.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-[#6B1728] hover:underline font-semibold bg-[#6B1728]/5 px-2 py-0.5 rounded"
              title="Télécharger directement la version officielle PDF"
            >
              <span>PDF Officiel</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <a
            href={document.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-[#57534E] hover:text-[#1C1917] hover:underline"
            title="Consulter la fiche source sur OIV.int"
          >
            <span>Portail OIV.int</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02019R0934-20241128"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-[#57534E] hover:text-[#1C1917] hover:underline"
            title="Consulter le texte réglementaire consolidé sur EUR-Lex"
          >
            <span>Règlement UE</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Footer Strip: Regulatory Status + Action Buttons */}
      <div className="pt-3.5 border-t border-[#F2EEE9] flex items-center justify-between gap-4 flex-wrap">
        <div>
          {renderEuStatusBadge()}
        </div>

        <div className="flex items-center gap-2">
          {document.versions.length > 1 && (
            <button
              onClick={() => onCompareWith(document)}
              className="text-xs text-[#57534E] hover:text-[#6B1728] font-medium flex items-center gap-1 hover:underline cursor-pointer"
              title="Comparer avec la version antérieure"
            >
              <GitCompare className="w-3.5 h-3.5" />
              <span>Comparer ({document.versions.length} vers.)</span>
            </button>
          )}

          <button
            onClick={() => onSelect(document)}
            className="px-3.5 py-1.5 text-xs font-semibold text-[#6B1728] bg-[#6B1728]/5 hover:bg-[#6B1728] hover:text-white rounded transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Consulter la fiche</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
