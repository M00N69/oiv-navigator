import React, { useState } from 'react';
import { OivDocument, DossierItem, UserNote } from '../types/oiv';
import { FileText, Printer, Trash2 } from 'lucide-react';
import { PageContainer } from './PageContainer';

interface DossierExportViewProps {
  dossierItems: DossierItem[];
  bookmarkedDocIds: string[];
  documents: OivDocument[];
  userNotes: Record<string, UserNote>;
  onRemoveFromDossier: (docId: string) => void;
  onSelectDoc: (doc: OivDocument) => void;
}

export const DossierExportView: React.FC<DossierExportViewProps> = ({
  dossierItems,
  bookmarkedDocIds,
  documents,
  userNotes,
  onRemoveFromDossier,
  onSelectDoc
}) => {
  const [dossierTitle, setDossierTitle] = useState('Dossier Technique & Protocole Œnologique');
  const [wineryName, setWineryName] = useState('Domaine / Laboratoire Œnologique');

  // Find all documents in dossier
  const dossierDocs = documents.filter(d => 
    dossierItems.some(item => item.documentId === d.id) || bookmarkedDocIds.includes(d.id)
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageContainer className="space-y-8">
      {/* Configuration & Action Header */}
      <div className="bg-white border border-line rounded-xl p-6 shadow-xs flex items-center justify-between gap-4 flex-wrap no-print">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-editorial text-ink">
            Dossier Technique & Fiches Récapitulatives
          </h1>
          <p className="text-xs sm:text-sm text-muted">
            Compilez les pratiques applicables pour un protocole de vinification ou un audit de conformité.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            disabled={dossierDocs.length === 0}
            className="px-4 py-2 text-xs font-semibold text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimer / Exporter le Rapport PDF</span>
          </button>
        </div>
      </div>

      {/* Editable Header for Printing */}
      <div className="bg-surface-muted border border-line-warm-soft rounded-xl p-6 space-y-3 no-print">
        <div className="text-xs font-semibold text-muted uppercase tracking-wider">
          Personnalisation de l'en-tête pour le rapport
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-muted mb-1">Titre du protocole / dossier :</label>
            <input
              type="text"
              value={dossierTitle}
              onChange={(e) => setDossierTitle(e.target.value)}
              className="w-full text-xs sm:text-sm p-2 bg-white border border-line rounded text-ink focus:outline-none focus:border-brand"
            />
          </div>
          <div>
            <label className="block text-xs text-muted mb-1">Établissement / Responsable qualité :</label>
            <input
              type="text"
              value={wineryName}
              onChange={(e) => setWineryName(e.target.value)}
              className="w-full text-xs sm:text-sm p-2 bg-white border border-line rounded text-ink focus:outline-none focus:border-brand"
            />
          </div>
        </div>
      </div>

      {/* Printable Output View */}
      <div className="bg-white border border-line rounded-xl p-8 sm:p-10 shadow-xs space-y-8">
        
        {/* Print Header */}
        <div className="border-b-2 border-ink pb-6 space-y-2">
          <div className="flex items-center justify-between text-xs text-muted font-mono">
            <span>OIV NAVIGATOR · AUDIT & VEILLE DOCUMENTAIRE</span>
            <span>Édité le {new Date().toLocaleDateString('fr-FR')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-ink">
            {dossierTitle}
          </h2>
          <div className="text-sm font-medium text-muted">
            {wineryName}
          </div>
        </div>

        {/* Legal Reminder for Audit */}
        <div className="p-4 bg-surface-muted border border-line-warm-soft rounded text-xs text-muted leading-relaxed">
          <strong>Avis réglementaire : </strong>
          Ce document compile les prescriptions officielles de l'Organisation internationale de la vigne et du vin (OIV) et leur statut de conformité au regard du Règlement délégué (UE) 2019/934. Conformément à la publication JOUE C/2025/1829, les dispositions du droit de l'Union européenne prévalent en cas de divergence.
        </div>

        {/* Selected Documents */}
        {dossierDocs.length === 0 ? (
          <div className="py-12 text-center text-muted space-y-2">
            <FileText className="w-10 h-10 text-separator mx-auto" />
            <p className="text-sm font-medium">Aucun document dans votre dossier technique.</p>
            <p className="text-xs">
              Naviguez dans l'onglet Explorer et cliquez sur "Ajouter au dossier" ou "Mettre en favori".
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-base font-bold font-editorial text-ink">
              Pratiques & Références Retenues ({dossierDocs.length})
            </h3>

            <div className="divide-y divide-line border-y border-line">
              {dossierDocs.map((doc) => {
                const note = userNotes[doc.id];
                return (
                  <div key={doc.id} className="py-6 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-muted mb-1">
                          <span className="font-bold text-brand">{doc.officialReference}</span>
                          <span>·</span>
                          <span>{doc.domain}</span>
                          <span>·</span>
                          <span>{doc.category}</span>
                          <span>·</span>
                          <span>Adoption {doc.adoptionYear}</span>
                        </div>
                        <h4 
                          onClick={() => onSelectDoc(doc)}
                          className="text-lg font-bold font-editorial text-ink hover:text-brand cursor-pointer"
                        >
                          {doc.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => onRemoveFromDossier(doc.id)}
                        className="text-subtle hover:text-rose-600 p-1 no-print cursor-pointer"
                        title="Retirer du dossier"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                      {doc.summary}
                    </p>

                    {/* Doses & EU Status */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="p-3 bg-surface-muted border border-line-warm-soft rounded">
                        <strong className="text-ink block mb-1">Doses & Limites prescrites :</strong>
                        <span className="font-mono text-ink tabular-nums">{doc.limitsAndDoses}</span>
                      </div>

                      <div className="p-3 bg-white border border-line rounded">
                        <strong className="text-ink block mb-1">Statut Union Européenne :</strong>
                        <span className="text-muted">{doc.euRegulation.primaryReference}</span>
                      </div>
                    </div>

                    {/* User personal note if any */}
                    {note && note.content && (
                      <div className="p-3 bg-surface-muted rounded text-xs border border-line-warm">
                        <strong className="text-brand block mb-0.5">Note interne d'atelier :</strong>
                        <p className="text-ink italic">{note.content}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </PageContainer>
  );
};
