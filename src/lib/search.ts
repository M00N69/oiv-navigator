import { OivDocument, FilterState } from '../types/oiv';

const HIGHLIGHT_CLASS = 'bg-amber-100 text-ink px-0.5 rounded font-semibold';

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Escapes user-provided text before it is injected as HTML. */
export function escapeHtml(text: string): string {
  return text.replace(/[&<>"']/g, (character) => HTML_ESCAPES[character] ?? character);
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Builds a permissive pattern so that a normalized query such as
 * "OIVOENO7382025" still highlights "OIV-OENO 738-2025".
 */
function loosePattern(query: string): string | null {
  const compact = query.replace(/[^0-9A-Za-zÀ-ÿ]/g, '');
  if (compact.length < 4) return null;
  return compact
    .split('')
    .map(escapeRegExp)
    .join('[\\s\\-_/.]{0,2}');
}

export function filterAndSearchDocuments(
  documents: OivDocument[],
  filters: FilterState
): { results: OivDocument[]; totalMatches: number } {
  const query = filters.searchQuery.trim().toLowerCase();

  const filtered = documents.filter((doc) => {
    // 1. Text query
    if (query) {
      const normalizedQuery = query.replace(/[\s\-_]/g, '');
      const normalizedRef = doc.officialReference.toLowerCase().replace(/[\s\-_]/g, '');
      const refMatch = normalizedRef.includes(normalizedQuery);

      const titleMatch = doc.title.toLowerCase().includes(query);
      const summaryMatch = doc.summary.toLowerCase().includes(query);
      const domainMatch = doc.domain.toLowerCase().includes(query);
      const substanceMatch = doc.substanceName
        ? doc.substanceName.toLowerCase().includes(query)
        : false;
      const casMatch = doc.casNumber ? doc.casNumber.toLowerCase().includes(query) : false;
      const objectiveMatch = doc.oenologicalObjectives.some((objective) =>
        objective.toLowerCase().includes(query)
      );
      const prescriptionMatch = doc.prescriptions.some((prescription) =>
        prescription.toLowerCase().includes(query)
      );
      const limitsMatch = doc.limitsAndDoses.toLowerCase().includes(query);

      const euReference = doc.euRegulation?.primaryReference ?? '';
      const euConditions = doc.euRegulation?.euLimitsAndConditions ?? '';
      const euMatch =
        euReference.toLowerCase().includes(query) ||
        euConditions.toLowerCase().includes(query);

      // Version contents are part of the documentary record too
      const versionMatch = doc.versions.some(
        (version) =>
          version.extractedText.toLowerCase().includes(query) ||
          version.versionLabel.toLowerCase().includes(query)
      );

      const relatedMatch = doc.relatedDocuments.some(
        (related) =>
          related.officialReference.toLowerCase().includes(query) ||
          related.title.toLowerCase().includes(query)
      );

      // Synonyms (e.g. "fml" -> fermentation malolactique, "so2" -> sulfites)
      let synonymMatch = false;
      if (
        query === 'fml' &&
        (summaryMatch || objectiveMatch || doc.title.toLowerCase().includes('malolactique'))
      ) {
        synonymMatch = true;
      }
      if (
        (query === 'so2' || query === 'sulfite' || query === 'soufre') &&
        (doc.summary.toLowerCase().includes('so2') ||
          doc.summary.toLowerCase().includes('sulfur') ||
          doc.summary.toLowerCase().includes('sulfite') ||
          doc.prescriptions.some((prescription) => prescription.toLowerCase().includes('so2')))
      ) {
        synonymMatch = true;
      }

      if (
        !refMatch &&
        !titleMatch &&
        !summaryMatch &&
        !domainMatch &&
        !substanceMatch &&
        !casMatch &&
        !objectiveMatch &&
        !prescriptionMatch &&
        !limitsMatch &&
        !euMatch &&
        !versionMatch &&
        !relatedMatch &&
        !synonymMatch
      ) {
        return false;
      }
    }

    // 2. Family
    if (filters.family !== 'all' && doc.family !== filters.family) {
      return false;
    }

    // 3. Domain
    if (filters.domain && filters.domain !== 'all' && doc.domain !== filters.domain) {
      return false;
    }

    // 4. Category
    if (filters.category && filters.category !== 'all' && doc.category !== filters.category) {
      return false;
    }

    // 5. EU status
    if (filters.euStatus !== 'all' && doc.euRegulation?.euStatus !== filters.euStatus) {
      return false;
    }

    // 6. Year range
    if (doc.adoptionYear < filters.yearRange[0] || doc.adoptionYear > filters.yearRange[1]) {
      return false;
    }

    // 7. Recent only
    if (filters.onlyRecent && !doc.isRecentPublication) {
      return false;
    }

    return true;
  });

  // Sort: exact reference matches first, then most recent adoption year
  filtered.sort((a, b) => {
    if (query) {
      const aExact = a.officialReference.toLowerCase().includes(query);
      const bExact = b.officialReference.toLowerCase().includes(query);
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;
    }
    return b.adoptionYear - a.adoptionYear;
  });

  return {
    results: filtered,
    totalMatches: filtered.length,
  };
}

/**
 * Returns HTML-safe text with the query occurrences wrapped in a <mark>.
 * Input is escaped first, so the result can be safely injected through
 * `dangerouslySetInnerHTML`.
 */
export function highlightText(text: string, query: string): string {
  const safeText = escapeHtml(text);
  const trimmed = query.trim();
  if (!trimmed) return safeText;

  const escapedQuery = escapeHtml(trimmed);
  const patterns = [escapeRegExp(escapedQuery)];
  const loose = loosePattern(escapedQuery);
  if (loose) patterns.push(loose);

  try {
    const regex = new RegExp(`(${patterns.join('|')})`, 'gi');
    return safeText.replace(regex, `<mark class="${HIGHLIGHT_CLASS}">$1</mark>`);
  } catch {
    return safeText;
  }
}
