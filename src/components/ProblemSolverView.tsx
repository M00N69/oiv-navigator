import React, { useState } from 'react';
import { OENOLOGICAL_PROBLEMS } from '../data/oenologicalProblems';
import { OivDocument } from '../types/oiv';
import { 
  Sparkles, 
  AlertTriangle, 
  Calculator, 
  ChevronRight
} from 'lucide-react';
import { PageContainer } from './PageContainer';
import { PageHeader } from './PageHeader';

interface ProblemSolverViewProps {
  documents: OivDocument[];
  onSelectDoc: (doc: OivDocument) => void;
  onOpenSimulatorWith: (substanceKey: string) => void;
}

export const ProblemSolverView: React.FC<ProblemSolverViewProps> = ({
  documents,
  onSelectDoc,
  onOpenSimulatorWith
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Microbiologie', 'Tartrique', 'Acidité', 'Clarification', 'Oxydation & SO2'];

  const filteredProblems = selectedCategory === 'all'
    ? OENOLOGICAL_PROBLEMS
    : OENOLOGICAL_PROBLEMS.filter(p => p.category === selectedCategory);

  const getSubstanceKeyForProblem = (problemId: string): string => {
    switch (problemId) {
      case 'inhibition-fml': return 'acide_fumarique';
      case 'stabilisation-tartrique-ecologique': return 'kpa';
      case 'arret-refermentation-vins-doux': return 'dmdc';
      case 'correction-ph-surmaturite': return 'acide_fumarique';
      case 'collage-zero-allergene': return 'proteines_pois';
      case 'protection-aromes-thiols': return 'levures_glutathion';
      default: return 'acide_fumarique';
    }
  };

  return (
    <PageContainer className="space-y-8">
      {/* Header */}
      <PageHeader
        icon={Sparkles}
        eyebrow="Guide par objectif"
        title="Problématique & objectif œnologique"
        description="Trouvez immédiatement les pratiques OIV autorisées et leurs conditions d'emploi selon votre objectif de vinification, sans avoir besoin de connaître à l'avance les numéros de résolutions."
      />

      {/* Category Pills Bar */}
      <div className="flex flex-wrap items-center gap-1.5 text-xs">
        {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-brand text-white shadow-xs'
                  : 'bg-surface-muted hover:bg-surface-hover text-muted border border-line'
              }`}
            >
              {cat === 'all' ? 'Toutes les problématiques' : cat}
            </button>
          ))}
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProblems.map((prob) => {
          const substanceKey = getSubstanceKeyForProblem(prob.id);
          const relatedDocs = documents.filter(d => prob.recommendedDocIds.includes(d.id));

          return (
            <div
              key={prob.id}
              className="bg-white border border-line hover:border-brand/50 rounded-xl p-6 shadow-xs transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                {/* Category & Badge */}
                <div className="flex items-center justify-between text-xs text-muted">
                  <span className="font-mono font-semibold uppercase tracking-wider text-brand">
                    {prob.category}
                  </span>
                  <span className="text-[11px] bg-surface-muted px-2 py-0.5 rounded border border-line">
                    {prob.recommendedDocIds.length} fiche(s) OIV liée(s)
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold font-editorial text-ink group-hover:text-brand transition-colors leading-snug">
                  {prob.title}
                </h2>

                {/* Problem Summary */}
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {prob.problemSummary}
                </p>

                {/* Key Technical Advice */}
                <div className="p-3 bg-surface-muted border border-line-warm-soft rounded-lg text-xs text-ink-soft space-y-1">
                  <strong className="text-ink block">Solution & Pratique OIV :</strong>
                  <p className="leading-relaxed">{prob.keyAdvice}</p>
                </div>

                {/* EU Warning Alert */}
                {prob.euAlert && (
                  <div className="p-3 bg-amber-50/60 border border-amber-200/80 rounded-lg text-xs text-amber-950 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{prob.euAlert}</span>
                  </div>
                )}

                {/* Recommended OIV documents links */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted block">
                    Fiches officielles correspondantes :
                  </span>
                  <div className="space-y-1">
                    {relatedDocs.map((doc) => (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => onSelectDoc(doc)}
                        className="w-full text-left p-2 rounded bg-white hover:bg-surface-muted border border-line hover:border-brand text-xs flex items-center justify-between transition-colors cursor-pointer"
                      >
                        <div className="truncate pr-2">
                          <span className="font-mono font-bold text-brand mr-2">
                            {doc.officialReference}
                          </span>
                          <span className="text-ink">{doc.title}</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-muted shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action: Open in Simulator */}
              <div className="pt-3 border-t border-line-soft flex items-center justify-between">
                <span className="text-xs text-muted">
                  Calculer pour ma cuve :
                </span>
                <button
                  type="button"
                  onClick={() => onOpenSimulatorWith(substanceKey)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-brand bg-brand/10 hover:bg-brand hover:text-white rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Simuler le traitement</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </PageContainer>
  );
};
