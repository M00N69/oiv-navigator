import React from 'react';
import { EU_LEGAL_REFERENCES } from '../data/oivCorpus';
import { OivDocument } from '../types/oiv';
import { Scale, ExternalLink, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { PageContainer } from './PageContainer';
import { PageHeader } from './PageHeader';

interface EuRegulatoryViewProps {
  documents: OivDocument[];
  onSelectDoc: (doc: OivDocument) => void;
}

export const EuRegulatoryView: React.FC<EuRegulatoryViewProps> = ({
  documents,
  onSelectDoc
}) => {
  return (
    <PageContainer className="space-y-8">
      <PageHeader
        icon={Scale}
        eyebrow="Cadre juridique"
        title="Cadre réglementaire européen & primauté juridique"
        description="Comprendre l'articulation entre les résolutions de l'Organisation internationale de la vigne et du vin (OIV) et les règlements d'application de l'Union européenne."
      />

        {/* Golden Rule of Precedence Box */}
        <div className="p-4 sm:p-5 bg-[#FAF8F5] border border-[#E8DEC8] rounded-lg text-xs sm:text-sm text-[#44403C] space-y-2">
          <div className="flex items-center gap-2 font-bold text-[#6B1728] font-editorial text-base">
            <AlertTriangle className="w-4 h-4 text-[#6B1728]" />
            <span>Règle Fondamentale de Primauté Juridique (JOUE C/2025/1829)</span>
          </div>
          <p className="leading-relaxed">
            Une résolution adoptée par l'Assemblée générale de l'OIV constitue une recommandation scientifique internationale. <strong>Elle ne confère en aucun cas une autorisation juridique automatique au sein de l'Union européenne.</strong>
          </p>
          <p className="leading-relaxed text-[#78716C]">
            Seules les pratiques œnologiques expressément reprises dans les annexes du <strong>Règlement délégué (UE) 2019/934</strong> (modifié par le Règlement UE 2024/3085) sont légalement licites dans les États membres. En cas de divergence ou de condition plus restrictive, <strong>le droit de l'Union européenne prévaut systématiquement.</strong>
          </p>
        </div>

      {/* Official EU Legal Sources List */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold font-editorial text-[#1C1917]">
          Textes Européens de Référence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {EU_LEGAL_REFERENCES.map((ref) => (
            <div 
              key={ref.celex}
              className="bg-white border border-[#E7E2DA] rounded-xl p-5 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono text-[#78716C]">
                  CELEX : {ref.celex} · {ref.date}
                </div>
                <h3 className="text-base font-bold font-editorial text-[#1C1917] leading-snug">
                  {ref.title}
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {ref.summary}
                </p>
                <div className="p-2.5 bg-[#FAF8F5] rounded text-xs text-[#6B1728] font-medium border border-[#EBE6DF]">
                  <strong>Principe clé : </strong> {ref.keyPrinciple}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F2EEE9]">
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B1728] hover:underline"
                >
                  <span>Accéder sur EUR-Lex</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mapping Table: OIV vs EU Status */}
      <div className="bg-white border border-[#E7E2DA] rounded-xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-lg font-bold font-editorial text-[#1C1917]">
              Tableau de Concordance Documentaire (Corpus Référencé)
            </h2>
            <p className="text-xs text-[#78716C]">
              Statut de reprise au Règlement (UE) 2019/934 pour chaque référence du corpus.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#FAF8F5] border-b border-[#E7E2DA] text-[#78716C] font-semibold uppercase tracking-wider">
              <tr>
                <th className="py-3 px-3">Référence OIV</th>
                <th className="py-3 px-3">Pratique / Intitulé</th>
                <th className="py-3 px-3">Matrice</th>
                <th className="py-3 px-3">Statut Règlement UE</th>
                <th className="py-3 px-3">Base légale UE</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F2EEE9]">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-[#FAF8F5]/80 transition-colors">
                  <td className="py-3 px-3 font-mono font-semibold text-[#6B1728] whitespace-nowrap">
                    {doc.officialReference}
                  </td>
                  <td className="py-3 px-3 font-medium text-[#1C1917] max-w-xs truncate">
                    {doc.title}
                  </td>
                  <td className="py-3 px-3 text-[#57534E] whitespace-nowrap">
                    {doc.category}
                  </td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    {doc.euRegulation.euStatus === 'autorise_ue' && (
                      <span className="inline-flex items-center gap-1 text-emerald-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Autorisé UE
                      </span>
                    )}
                    {doc.euRegulation.euStatus === 'encadre_specifique' && (
                      <span className="inline-flex items-center gap-1 text-amber-900 font-medium">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        Encadré avec restrictions
                      </span>
                    )}
                    {doc.euRegulation.euStatus === 'non_applicable' && (
                      <span className="text-[#78716C]">Méthode / Non soumis</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-[#57534E] max-w-xs truncate">
                    {doc.euRegulation.primaryReference}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => onSelectDoc(doc)}
                      className="px-2.5 py-1 text-xs font-semibold text-[#6B1728] hover:bg-[#6B1728]/10 rounded cursor-pointer transition-colors"
                    >
                      Détails
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageContainer>
  );
};
