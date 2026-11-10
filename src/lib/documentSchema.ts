import {
  DocStatus,
  DocumentVersion,
  EuRegulationMapping,
  EuStatus,
  OivDocument,
  OivFamily,
  RelatedDocument,
} from '../types/oiv';

/**
 * Defensive parsing of documents coming from the outside world (JSON import,
 * previously persisted localStorage entries). Every field is validated and
 * coerced, so that the rest of the application can rely on `OivDocument`
 * invariants (notably `euRegulation` always being present).
 */

const FAMILIES: readonly OivFamily[] = [
  'pratiques',
  'codex',
  'methodes',
  'spiritueux',
  'etiquetage',
  'resolutions',
  'techniques',
];

const EU_STATUSES: readonly EuStatus[] = [
  'autorise_ue',
  'encadre_specifique',
  'non_admis_ue',
  'divergence_oiv_ue',
  'non_applicable',
];

const DOC_STATUSES: readonly DocStatus[] = [
  'adopte',
  'en_vigueur',
  'modifie',
  'remplace',
  'statut_non_determine',
];

const CATEGORIES = ['Moûts', 'Vins', 'Vins spéciaux', 'Analyses', 'Produits', 'Général'] as const;

const RELATION_TYPES: readonly RelatedDocument['relationType'][] = [
  'modifie',
  'remplace',
  'complete',
  'cite',
  'codex_associe',
  'methode_associee',
  'reprise_dans_ue',
  'divergence_avec',
];

const MAX_TEXT_LENGTH = 8000;
const MAX_ITEMS = 100;

export type NormalizeResult =
  | { ok: true; document: OivDocument }
  | { ok: false; error: string };

function asRecord(value: unknown): Record<string, unknown> | null {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function asString(value: unknown, fallback = '', maxLength = MAX_TEXT_LENGTH): string {
  if (typeof value !== 'string') return fallback;
  const trimmed = value.trim();
  return trimmed.length > maxLength ? trimmed.slice(0, maxLength) : trimmed;
}

function asStringArray(value: unknown, maxLength = MAX_TEXT_LENGTH): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .slice(0, MAX_ITEMS)
    .map((item) => asString(item, '', maxLength))
    .filter((item) => item.length > 0);
}

/** Only http(s) URLs are kept: blocks `javascript:` / `data:` hrefs. */
function asUrl(value: unknown): string | undefined {
  const raw = asString(value, '', 2000);
  if (!raw) return undefined;
  try {
    const url = new URL(raw);
    return url.protocol === 'http:' || url.protocol === 'https:' ? url.href : undefined;
  } catch {
    return undefined;
  }
}

function oneOf<T extends string>(value: unknown, allowed: readonly T[], fallback: T): T {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value)
    ? (value as T)
    : fallback;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80);
}

function inferYear(reference: string, fallbackYear: number): number {
  const match = reference.match(/(19|20)\d{2}/g);
  if (match && match.length > 0) {
    const year = Number.parseInt(match[match.length - 1], 10);
    if (Number.isFinite(year)) return year;
  }
  return fallbackYear;
}

function normalizeEuRegulation(value: unknown): EuRegulationMapping {
  const raw = asRecord(value) ?? {};
  return {
    euStatus: oneOf(raw.euStatus, EU_STATUSES, 'non_applicable'),
    primaryReference: asString(
      raw.primaryReference,
      'Non documenté — vérifier la réglementation en vigueur',
    ),
    amendmentReference: asString(raw.amendmentReference) || undefined,
    officialJournalPublication: asString(raw.officialJournalPublication) || undefined,
    prevalenceRule: asString(
      raw.prevalenceRule,
      "Le droit de l'Union européenne prime sur les recommandations de l'OIV en cas de divergence.",
    ),
    euLimitsAndConditions: asString(raw.euLimitsAndConditions) || undefined,
    divergenceNotes: asString(raw.divergenceNotes) || undefined,
  };
}

function normalizeVersion(value: unknown, index: number, currentYear: number): DocumentVersion | null {
  const raw = asRecord(value);
  if (!raw) return null;

  const versionLabel = asString(raw.versionLabel, `Version ${index + 1}`, 300);
  const adoptionYear = Number.isFinite(Number(raw.adoptionYear))
    ? Number(raw.adoptionYear)
    : inferYear(versionLabel, currentYear);

  return {
    id: asString(raw.id, `${slugify(versionLabel)}-${index}`, 120),
    versionLabel,
    adoptionYear,
    adoptionDate: asString(raw.adoptionDate, '', 40) || undefined,
    sourceFileUrl: asUrl(raw.sourceFileUrl),
    summaryOfChanges: asString(raw.summaryOfChanges) || undefined,
    extractedText: asString(raw.extractedText),
    prescriptions: asStringArray(raw.prescriptions),
    limitsAndDoses: asString(raw.limitsAndDoses),
    isCurrent: raw.isCurrent === true,
  };
}

function normalizeRelatedDocument(value: unknown): RelatedDocument | null {
  const raw = asRecord(value);
  if (!raw) return null;

  const officialReference = asString(raw.officialReference, '', 200);
  const title = asString(raw.title, '', 400);
  if (!officialReference && !title) return null;

  return {
    id: asString(raw.id, slugify(officialReference || title), 120),
    officialReference,
    title,
    relationType: oneOf(raw.relationType, RELATION_TYPES, 'cite'),
    evidence: asString(raw.evidence) || undefined,
  };
}

export function normalizeDocument(input: unknown): NormalizeResult {
  const raw = asRecord(input);
  if (!raw) return { ok: false, error: 'entrée JSON invalide (objet attendu)' };

  const officialReference = asString(raw.officialReference, '', 200);
  const title = asString(raw.title, '', 400);

  if (!officialReference) return { ok: false, error: 'champ « officialReference » manquant' };
  if (!title) return { ok: false, error: `« ${officialReference} » : champ « title » manquant` };

  const now = new Date();
  const currentYear = now.getFullYear();
  const adoptionYear = Number.isFinite(Number(raw.adoptionYear))
    ? Number(raw.adoptionYear)
    : inferYear(officialReference, currentYear);

  const versions = Array.isArray(raw.versions)
    ? raw.versions
        .slice(0, MAX_ITEMS)
        .map((version, index) => normalizeVersion(version, index, adoptionYear))
        .filter((version): version is DocumentVersion => version !== null)
    : [];

  const relatedDocuments = Array.isArray(raw.relatedDocuments)
    ? raw.relatedDocuments
        .slice(0, MAX_ITEMS)
        .map(normalizeRelatedDocument)
        .filter((related): related is RelatedDocument => related !== null)
    : [];

  const document: OivDocument = {
    id: asString(raw.id, slugify(officialReference) || `doc-${Date.now()}`, 120),
    officialReference,
    title,
    family: oneOf(raw.family, FAMILIES, 'techniques'),
    domain: asString(raw.domain, 'Non classé', 200),
    category: oneOf(raw.category, CATEGORIES, 'Général'),
    adoptionDate: asString(raw.adoptionDate, '', 40),
    adoptionYear,
    language: asString(raw.language, 'fr', 10),
    status: oneOf(raw.status, DOC_STATUSES, 'statut_non_determine'),
    officialUrl: asUrl(raw.officialUrl) ?? 'https://www.oiv.int/',
    pdfUrl: asUrl(raw.pdfUrl),
    eurLexUrl: asUrl(raw.eurLexUrl),
    oivLiveSearchUrl: asUrl(raw.oivLiveSearchUrl),
    summary: asString(raw.summary),
    oenologicalObjectives: asStringArray(raw.oenologicalObjectives),
    prescriptions: asStringArray(raw.prescriptions),
    limitsAndDoses: asString(raw.limitsAndDoses),
    substanceName: asString(raw.substanceName, '', 300) || undefined,
    chemicalFormula: asString(raw.chemicalFormula, '', 100) || undefined,
    casNumber: asString(raw.casNumber, '', 40) || undefined,
    euRegulation: normalizeEuRegulation(raw.euRegulation),
    versions,
    relatedDocuments,
    lastCheckedDate: asString(raw.lastCheckedDate, now.toISOString().slice(0, 10), 40),
    isRecentPublication: raw.isRecentPublication === true,
  };

  return { ok: true, document };
}
