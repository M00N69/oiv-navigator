import React, { useState } from 'react';
import { OivDocument, DossierItem, UserNote } from '../types/oiv';
import { FileText, Printer, Trash2 } from 'lucide-react';

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Configuration & Action Header */}
      <div className="bg-white border border-[#E7E2DA] rounded-xl p-6 shadow-xs flex items-center justify-between gap-4 flex-wrap no-print">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold font-editorial text-[#1C1917]">
            Dossier Technique & Fiches Récapitulatives
          </h1>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Compilez les pratiques applicables pour un protocole de vinification ou un audit de conformité.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            disabled={dossierDocs.length === 0}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#6B1728] hover:bg-[#50101C] rounded-lg transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimer / Exporter le Rapport PDF</span>
          </button>
        </div>
      </div>

      {/* Editable Header for Printing */}
      <div className="bg-[#FAF8F5] border border-[#EBE6DF] rounded-xl p-6 space-y-3 no-print">
        <div className="text-xs font-semibold text-[#57534E] uppercase tracking-wider">
          Personnalisation de l'en-tête pour le rapport
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-[#78716C] mb-1">Titre du protocole / dossier :</label>
            <input
              type="text"
              value={dossierTitle}
              onChange={(e) => setDossierTitle(e.target.value)}
              className="w-full text-xs sm:text-sm p-2 bg-white border border-[#E7E2DA] rounded text-[#1C1917] focus:outline-none focus:border-[#6B1728]"
            />
          </div>
          <div>
            <label className="block text-xs text-[#78716C] mb-1">Établissement / Responsable qualité :</label>
            <input
              type="text"
              value={wineryName}
              onChange={(e) => setWineryName(e.target.value)}
              className="w-full text-xs sm:text-sm p-2 bg-white border border-[#E7E2DA] rounded text-[#1C1917] focus:outline-none focus:border-[#6B1728]"
            />
          </div>
        </div>
      </div>

      {/* Printable Output View */}
      <div className="bg-white border border-[#E7E2DA] rounded-xl p-8 sm:p-10 shadow-xs space-y-8">
        
        {/* Print Header */}
        <div className="border-b-2 border-[#1C1917] pb-6 space-y-2">
          <div className="flex items-center justify-between text-xs text-[#78716C] font-mono">
            <span>OIV NAVIGATOR · AUDIT & VEILLE DOCUMENTAIRE</span>
            <span>Édité le {new Date().toLocaleDateString('fr-FR')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-[#1C1917]">
            {dossierTitle}
          </h2>
          <div className="text-sm font-medium text-[#57534E]">
            {wineryName}
          </div>
        </div>

        {/* Legal Reminder for Audit */}
        <div className="p-4 bg-[#FAF8F5] border border-[#EBE6DF] rounded text-xs text-[#57534E] leading-relaxed">
          <strong>Avis réglementaire : </strong>
          Ce document compile les prescriptions officielles de l'Organisation internationale de la vigne et du vin (OIV) et leur statut de conformité au regard du Règlement délégué (UE) 2019/934. Conformément à la publication JOUE C/2025/1829, les dispositions du droit de l'Union européenne prévalent en cas de divergence.
        </div>

        {/* Selected Documents */}
        {dossierDocs.length === 0 ? (
          <div className="py-12 text-center text-[#78716C] space-y-2">
            <FileText className="w-10 h-10 text-[#D6D3D1] mx-auto" />
            <p className="text-sm font-medium">Aucun document dans votre dossier technique.</p>
            <p className="text-xs">
              Naviguez dans l'onglet Explorer et cliquez sur "Ajouter au dossier" ou "Mettre en favori".
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-base font-bold font-editorial text-[#1C1917]">
              Pratiques & Références Retenues ({dossierDocs.length})
            </h3>

            <div className="divide-y divide-[#E7E2DA] border-y border-[#E7E2DA]">
              {dossierDocs.map((doc) => {
                const note = userNotes[doc.id];
                return (
                  <div key={doc.id} className="py-6 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-[#78716C] mb-1">
                          <span className="font-bold text-[#6B1728]">{doc.officialReference}</span>
                          <span>·</span>
                          <span>{doc.domain}</span>
                          <span>·</span>
                          <span>{doc.category}</span>
                          <span>·</span>
                          <span>Adoption {doc.adoptionYear}</span>
                        </div>
                        <h4 
                          onClick={() => onSelectDoc(doc)}
                          className="text-lg font-bold font-editorial text-[#1C1917] hover:text-[#6B1728] cursor-pointer"
                        >
                          {doc.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => onRemoveFromDossier(doc.id)}
                        className="text-[#A8A29E] hover:text-rose-600 p-1 no-print cursor-pointer"
                        title="Retirer du dossier"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                      {doc.summary}
                    </p>

                    {/* Doses & EU Status */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="p-3 bg-[#FAF8F5] border border-[#EBE6DF] rounded">
                        <strong className="text-[#1C1917] block mb-1">Doses & Limites prescrites :</strong>
                        <span className="font-mono text-[#1C1917] tabular-nums">{doc.limitsAndDoses}</span>
                      </div>

                      <div className="p-3 bg-white border border-[#E7E2DA] rounded">
                        <strong className="text-[#1C1917] block mb-1">Statut Union Européenne :</strong>
                        <span className="text-[#57534E]">{doc.euRegulation.primaryReference}</span>
                      </div>
                    </div>

                    {/* User personal note if any */}
                    {note && note.content && (
                      <div className="p-3 bg-[#F5F2EB] rounded text-xs border border-[#E8DEC8]">
                        <strong className="text-[#6B1728] block mb-0.5">Note interne d'atelier :</strong>
                        <p className="text-[#1C1917] italic">{note.content}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
