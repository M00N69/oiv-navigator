import React, { useMemo, useState } from 'react';
import { BookOpen, Search, ArrowRight } from 'lucide-react';
import { OivDocument } from '../types/oiv';
import { GLOSSARY, GlossaryTerm } from '../data/glossary';
import { PageContainer } from './PageContainer';
import { PageHeader } from './PageHeader';

interface GlossaryViewProps {
  documents: OivDocument[];
  onSelectDoc: (doc: OivDocument) => void;
}

const CATEGORIES: GlossaryTerm['category'][] = [
  'Réglementation',
  'Œnologie',
  'Qualité & sécurité',
  'Organismes & textes',
];

function normalize(s: string): string {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ documents, onSelectDoc }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return GLOSSARY;
    return GLOSSARY.filter(
      (t) => normalize(t.term).includes(q) || normalize(t.definition).includes(q)
    );
  }, [query]);

  const findDoc = (ref: string) =>
    documents.find((d) => d.officialReference === ref || d.officialReference.startsWith(ref + ' ')) ?? null;

  return (
    <PageContainer className="space-y-6">
      <PageHeader
        eyebrow="Aide à la lecture"
        title="Glossaire œnologique & réglementaire"
        description="Définitions des termes clés du corpus OIV et de la réglementation européenne. Chaque terme renvoie, le cas échéant, aux fiches documentaires correspondantes."
      />

      {/* Search */}
      <div className="relative flex items-center max-w-xl">
        <div className="absolute left-4 pointer-events-none text-muted">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un terme (ex. CCP, allergène, COEI...)"
          aria-label="Rechercher un terme du glossaire"
          className="w-full pl-11 pr-4 py-2.5 bg-white border border-line rounded-lg text-sm text-ink placeholder-subtle focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all shadow-xs"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-line rounded-xl p-10 text-center text-muted">
          Aucun terme ne correspond à « {query} ».
        </div>
      ) : (
        CATEGORIES.map((cat) => {
          const terms = filtered.filter((t) => t.category === cat);
          if (terms.length === 0) return null;
          return (
            <section key={cat} className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand font-mono flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                {cat}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {terms.map((t) => (
                  <div key={t.id} className="bg-white border border-line rounded-xl p-5 shadow-xs space-y-2">
                    <h3 className="text-base font-bold font-editorial text-ink">{t.term}</h3>
                    <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">{t.definition}</p>
                    {t.relatedRefs && t.relatedRefs.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {t.relatedRefs.map((ref) => {
                          const doc = findDoc(ref);
                          return doc ? (
                            <button
                              key={ref}
                              onClick={() => onSelectDoc(doc)}
                              className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-mono font-semibold text-brand bg-brand/10 hover:bg-brand hover:text-white border border-brand/30 rounded transition-colors cursor-pointer"
                              title={doc.title}
                            >
                              {ref}
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          ) : (
                            <span
                              key={ref}
                              className="inline-flex items-center px-2 py-1 text-[11px] font-mono text-muted bg-surface-muted border border-line rounded"
                            >
                              {ref}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })
      )}
    </PageContainer>
  );
};
