import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Scale, 
  HelpCircle, 
  FileText, 
  Search, 
  GitCompare, 
  Calculator,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PageContainer } from './PageContainer';
import { PageHeader } from './PageHeader';

interface UserGuideViewProps {
  onNavigateTab: (tab: string) => void;
}

export const UserGuideView: React.FC<UserGuideViewProps> = ({ onNavigateTab }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: "Comment être certain qu'une pratique OIV est toujours valable et n'a pas été modifiée ?",
      a: "Dans OIV Navigator, chaque document dispose d'un badge de statut documenté ('En vigueur' ou 'Adopté') et d'un volet 'Historique des versions'. Si une résolution a fait l'objet d'une actualisation (par exemple l'acide fumarique étendu aux moûts par la résolution 738-2025 par rapport à la 581A-2021), la fiche affiche l'alerte de modification avec un bouton 'Comparer avec la version antérieure'. De plus, un lien direct vers la source officielle 'oiv.int' permet de vérifier en un clic la dernière édition électronique du Code."
    },
    {
      q: "Une résolution votée par l'OIV est-elle immédiatement autorisée dans mon chai en France ou en Europe ?",
      a: "NON. C'est la règle d'or juridique : l'OIV formule des normes scientifiques internationales, mais elle ne légifère pas directement dans l'Union européenne. Une pratique œnologique n'est légale dans l'UE que si elle est inscrite aux Annexes du Règlement délégué (UE) 2019/934. La publication officielle JOUE C/2025/1829 du 31 mars 2025 rappelle formellement que le droit européen prévaut toujours sur les fiches de l'OIV."
    },
    {
      q: "Que faire en cas de divergence de dose entre la fiche OIV et le texte européen ?",
      a: "La règle de prévalence européenne s'applique impérativement. Si l'OIV autorise jusqu'à 600 mg/L mais que le règlement européen fixe 300 mg/L (ou vice-versa), c'est la condition fixée par le Règlement (UE) 2019/934 qui s'impose aux producteurs européens. En outre, si le cahier des charges de votre AOP/IGP locale interdit la pratique, c'est la règle locale la plus restrictive qui prévaut."
    },
    {
      q: "Comment utiliser l'application pour préparer un audit ou justifier d'un contrôle ?",
      a: "Utilisez le 'Simulateur de Chai' pour calculer la conformité de votre traitement, puis cliquez sur 'Imprimer la Fiche de Traitement'. Vous pouvez également ajouter les fiches concernées à votre 'Dossier Technique' et imprimer un rapport d'audit complet citant les références CELEX EUR-Lex et les monographies Codex applicables."
    }
  ];

  return (
    <PageContainer className="space-y-10">
      
      <PageHeader
        icon={BookOpen}
        eyebrow="Documentation & pédagogie réglementaire"
        title="Guide explicatif : méthodologie de veille & validité juridique"
        description="Comprendre le cycle de vie d'une résolution OIV, vérifier si un texte est toujours en vigueur et maîtriser l'articulation obligatoire avec les règlements de l'Union européenne."
        actions={
          <span className="rounded-full border border-line bg-surface-muted px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
            Guide de référence 2026
          </span>
        }
      />

      {/* Section 1 : La Méthode de Contrôle de Validité en 3 Étapes */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold font-editorial text-ink flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-700" />
          <span>Comment s'assurer qu'un texte est toujours valable et à jour ?</span>
        </h2>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          Pour garantir une sécurité juridique totale lors d'un traitement de vinification ou d'un audit de cave, suivez ce protocole en trois niveaux de vérification :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          
          {/* Step 1 */}
          <div className="bg-white border border-line rounded-xl p-5 shadow-xs space-y-3 relative">
            <div className="w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center font-bold text-xs font-mono">
              1
            </div>
            <h3 className="text-base font-bold font-editorial text-ink">
              Niveau 1 : Validité OIV
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Vérifiez la <strong>version de la résolution</strong> dans OIV Navigator. Consultez l'onglet « Versions » pour voir si la fiche a été révisée, complétée (ex: extension moûts 738-2025) ou remplacée.
            </p>
            <div className="pt-2 text-[11px] text-muted border-t border-line-soft">
              Lien direct vers la page officielle sur <em>oiv.int</em> disponible sur chaque fiche.
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-line rounded-xl p-5 shadow-xs space-y-3 relative">
            <div className="w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center font-bold text-xs font-mono">
              2
            </div>
            <h3 className="text-base font-bold font-editorial text-ink">
              Niveau 2 : Inscription UE
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Vérifiez le <strong>statut UE</strong> indiqué sur la fiche. Seules les pratiques mentionnées à l'Annexe I du <strong>Règlement (UE) 2019/934</strong> (modifié 2024/3085) sont autorisées en cave européenne.
            </p>
            <div className="pt-2 text-[11px] text-muted border-t border-line-soft">
              Consultez le texte consolidé EUR-Lex en 1 clic via le bouton dédié.
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-line rounded-xl p-5 shadow-xs space-y-3 relative">
            <div className="w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center font-bold text-xs font-mono">
              3
            </div>
            <h3 className="text-base font-bold font-editorial text-ink">
              Niveau 3 : Règle Locale AOP
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Consultez le <strong>cahier des charges de votre appellation</strong>. Une pratique autorisée par l'OIV et l'UE peut rester interdite ou restreinte par votre décret d'AOP ou IGP local.
            </p>
            <div className="pt-2 text-[11px] text-muted border-t border-line-soft">
              Règle du droit le plus strict : le cahier des charges prime toujours.
            </div>
          </div>

        </div>
      </div>

      {/* Section 2 : Schéma d'Articulation Juridique */}
      <div className="bg-surface-muted border border-line-warm rounded-xl p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-base font-bold font-editorial text-ink">
          <Scale className="w-5 h-5 text-brand" />
          <span>La Règle d'Or de la Primauté Juridique (JOUE C/2025/1829)</span>
        </div>
        
        <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
          Le 31 mars 2025, la Commission européenne a publié au Journal officiel la communication <strong>C/2025/1829</strong> relative aux fiches du Code international des pratiques œnologiques de l'OIV mentionnées dans le cadre du règlement (UE) 2019/934. Cette publication consacre solennellement le principe suivant :
        </p>

        <div className="p-4 bg-white border border-line-warm rounded-lg text-xs sm:text-sm text-ink space-y-2">
          <p className="font-semibold text-brand">
            « En cas de divergence entre une fiche de l'OIV et les dispositions du droit de l'Union européenne, le Règlement (UE) 2019/934 prévaut impérativement. »
          </p>
          <ul className="text-xs text-muted space-y-1 list-disc list-inside pt-1">
            <li>L'OIV est un organisme intergouvernemental scientifique : ses résolutions sont des recommandations.</li>
            <li>L'Union européenne intègre progressivement ces résolutions par des règlements délégués (ex: Règlement 2024/3085).</li>
            <li>Une résolution adoptée à l'OIV en 2025 ne devient légale dans les chais européens qu'après transposition dans le règlement UE.</li>
          </ul>
        </div>
      </div>

      {/* Section 3 : Guide d'Utilisation des Outils d'OIV Navigator */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold font-editorial text-ink">
          Mode d'emploi des outils professionnels d'OIV Navigator
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Card A: Moteur & Filtres */}
          <div className="bg-white border border-line rounded-xl p-5 shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-bold text-ink">
              <Search className="w-4 h-4 text-brand" />
              <span>1. Recherche & Consultation</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Saisissez un numéro exact (ex: <code>OIV-OENO 738-2025</code>), une substance (ex: <em>acide fumarique</em>), ou une problématique (ex: <em>FML</em>, <em>SO2</em>). Filtrez par matrice (Moûts, Vins) et statut UE.
            </p>
            <button
              onClick={() => onNavigateTab('explorer')}
              className="text-xs font-semibold text-brand hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
            >
              <span>Accéder à la recherche</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card B: Simulateur de Chai */}
          <div className="bg-white border border-line rounded-xl p-5 shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-bold text-ink">
              <Calculator className="w-4 h-4 text-brand" />
              <span>2. Simulateur de Chai & Doses</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Indiquez le volume de votre cuve (en hL) et la dose souhaitée. Le simulateur calcule la masse exacte en grammes/kg, valide le plafond légal et génère un bon d'intervention imprimable pour le registre de cave.
            </p>
            <button
              onClick={() => onNavigateTab('simulator')}
              className="text-xs font-semibold text-brand hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
            >
              <span>Ouvrir le simulateur</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card C: Comparateur de versions */}
          <div className="bg-white border border-line rounded-xl p-5 shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-bold text-ink">
              <GitCompare className="w-4 h-4 text-brand" />
              <span>3. Comparateur de Versions (Diff)</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Comparez deux révisions d'une même pratique (ex: résolution 2021 vs révision 2025). Visualisez côte-à-côte les extensions de champ d'application, les modifications de doses et les nouvelles prescriptions.
            </p>
            <button
              onClick={() => onNavigateTab('comparator')}
              className="text-xs font-semibold text-brand hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
            >
              <span>Lancer le comparateur</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card D: Dossier & Export Audit */}
          <div className="bg-white border border-line rounded-xl p-5 shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-bold text-ink">
              <FileText className="w-4 h-4 text-brand" />
              <span>4. Dossier Technique & Export d'Audit</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              Mettez des fiches en favori, ajoutez vos annotations de chai personnelles, et exportez un rapport PDF complet compilant les pratiques applicables pour un protocole de vinification ou un contrôle douanier.
            </p>
            <button
              onClick={() => onNavigateTab('dossier')}
              className="text-xs font-semibold text-brand hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
            >
              <span>Consulter mon dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

      {/* Section 4 : FAQ Réglementaire Déroulante */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold font-editorial text-ink flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-brand" />
          <span>Foire Aux Questions Réglementaires (FAQ)</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-line rounded-xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-surface-muted"
                >
                  <span className="font-bold text-sm sm:text-base font-editorial text-ink">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-brand shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-muted leading-relaxed border-t border-line-soft pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </PageContainer>
  );
};
