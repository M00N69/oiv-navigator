/**
 * Corpus integrity check — run with `npm run corpus:check`.
 *
 * There is no automatic synchronisation: the corpus is a versioned data file
 * edited by hand. This script is the safety net that keeps it honest:
 *   1. every document survives the application schema (`normalizeDocument`);
 *   2. identifiers and official references are unique;
 *   3. dates are real, not in the future, and consistent with CORPUS_META;
 *   4. declared family counts and related-document links resolve.
 *
 * Exit code 1 on error, 0 on success (warnings do not fail the build).
 */
import {
  CORPUS_META,
  FAMILIES_META,
  OIV_CORPUS,
  OFFICIAL_LIVE_SOURCES,
} from '../src/data/oivCorpus';
import { normalizeDocument } from '../src/lib/documentSchema';

type Level = 'error' | 'warning';
const issues: { level: Level; message: string }[] = [];
const fail = (message: string) => issues.push({ level: 'error', message });
const warn = (message: string) => issues.push({ level: 'warning', message });

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const today = new Date();
today.setHours(23, 59, 59, 999);
const currentYear = today.getFullYear();

const parseIsoDate = (value: string): Date | null => {
  if (!ISO_DATE.test(value)) return null;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? null : date;
};

/* 1. Schema round-trip ---------------------------------------------------- */
for (const doc of OIV_CORPUS) {
  const label = doc.id || doc.officialReference || '(document sans identifiant)';
  const result = normalizeDocument(doc);

  if (!result.ok) {
    fail(`[schéma] ${label} : ${result.error}`);
    continue;
  }

  const normalized = result.document;
  if (normalized.id !== doc.id) {
    fail(`[schéma] ${label} : identifiant normalisé « ${normalized.id} » différent de « ${doc.id} »`);
  }
  if (normalized.officialReference !== doc.officialReference) {
    fail(`[schéma] ${label} : référence officielle modifiée à la normalisation`);
  }
  if (normalized.versions.length !== doc.versions.length) {
    fail(
      `[schéma] ${label} : ${doc.versions.length} version(s) déclarée(s), ${normalized.versions.length} conservée(s)`,
    );
  }
  if (normalized.euRegulation.euStatus !== doc.euRegulation.euStatus) {
    fail(
      `[schéma] ${label} : statut UE « ${doc.euRegulation.euStatus} » non reconnu par le schéma`,
    );
  }
  if (normalized.prescriptions.length !== doc.prescriptions.length) {
    fail(`[schéma] ${label} : prescriptions perdues à la normalisation`);
  }
  if (normalized.relatedDocuments.length !== doc.relatedDocuments.length) {
    warn(`[schéma] ${label} : relations documentaires partiellement normalisées`);
  }
}

/* 2. Uniqueness ---------------------------------------------------------- */
const ids = new Map<string, number>();
const references = new Map<string, number>();

OIV_CORPUS.forEach((doc, index) => {
  ids.set(doc.id, (ids.get(doc.id) ?? 0) + 1);
  references.set(doc.officialReference, (references.get(doc.officialReference) ?? 0) + 1);

  if (!doc.id) fail(`[unicité] document #${index + 1} : identifiant vide`);
  if (!doc.officialReference) fail(`[unicité] document #${index + 1} : référence officielle vide`);
});

for (const [id, count] of ids) {
  if (count > 1) fail(`[unicité] identifiant « ${id} » présent ${count} fois`);
}
for (const [reference, count] of references) {
  if (count > 1) fail(`[unicité] référence « ${reference} » présente ${count} fois`);
}

/* 3. Dates --------------------------------------------------------------- */
const metaDate = parseIsoDate(CORPUS_META.updatedAt);
if (!metaDate) {
  fail(`[métadonnées] CORPUS_META.updatedAt « ${CORPUS_META.updatedAt} » n'est pas une date ISO (AAAA-MM-JJ)`);
} else if (metaDate > today) {
  fail(`[métadonnées] CORPUS_META.updatedAt est dans le futur (${CORPUS_META.updatedAt})`);
}
if (!/^\d{4}\.\d+$/.test(CORPUS_META.version)) {
  warn(`[métadonnées] version « ${CORPUS_META.version} » : format attendu AAAA.N`);
}
if (!CORPUS_META.source.trim()) {
  fail('[métadonnées] CORPUS_META.source est vide');
}

for (const doc of OIV_CORPUS) {
  const label = doc.id;

  if (!Number.isInteger(doc.adoptionYear) || doc.adoptionYear < 1900 || doc.adoptionYear > currentYear + 1) {
    fail(`[dates] ${label} : année d'adoption invalide (${doc.adoptionYear})`);
  }

  const checked = parseIsoDate(doc.lastCheckedDate);
  if (!checked) {
    fail(`[dates] ${label} : lastCheckedDate « ${doc.lastCheckedDate} » n'est pas une date ISO`);
  } else if (checked > today) {
    fail(`[dates] ${label} : lastCheckedDate est dans le futur (${doc.lastCheckedDate})`);
  } else if (metaDate && checked > metaDate) {
    fail(
      `[dates] ${label} : vérifié le ${doc.lastCheckedDate}, postérieur à la version du corpus (${CORPUS_META.updatedAt})`,
    );
  }

  for (const version of doc.versions) {
    if (!Number.isInteger(version.adoptionYear) || version.adoptionYear < 1900 || version.adoptionYear > currentYear + 1) {
      fail(`[dates] ${label} : version « ${version.versionLabel} » avec année invalide`);
    }
  }

  if (doc.versions.filter((version) => version.isCurrent).length > 1) {
    fail(`[dates] ${label} : plusieurs versions marquées « en vigueur »`);
  }
}

/* 4. Families and relations --------------------------------------------- */
const actualPerFamily = new Map<string, number>();
for (const doc of OIV_CORPUS) {
  actualPerFamily.set(doc.family, (actualPerFamily.get(doc.family) ?? 0) + 1);
}

for (const family of FAMILIES_META) {
  const actual = actualPerFamily.get(family.id) ?? 0;
  if (family.count !== actual) {
    warn(`[familles] « ${family.id} » annonce ${family.count} document(s), le corpus en contient ${actual}`);
  }
}

const knownIds = new Set(OIV_CORPUS.map((doc) => doc.id));
const knownReferences = new Set(OIV_CORPUS.map((doc) => doc.officialReference));
const danglingRelations: string[] = [];

for (const doc of OIV_CORPUS) {
  for (const related of doc.relatedDocuments) {
    const resolves =
      knownIds.has(related.id) ||
      knownReferences.has(related.officialReference) ||
      related.relationType === 'cite' ||
      related.relationType === 'reprise_dans_ue';
    if (!resolves) {
      danglingRelations.push(`${doc.id} → ${related.officialReference || related.title}`);
    }
  }
}
if (danglingRelations.length > 0) {
  warn(`[relations] ${danglingRelations.length} relation(s) sans cible interne : ${danglingRelations.slice(0, 3).join(', ')}`);
}

for (const source of OFFICIAL_LIVE_SOURCES) {
  if (!/^https:\/\//.test(source.directUrl)) {
    fail(`[sources] ${source.id} : l'URL directe doit être en https (${source.directUrl})`);
  }
}

/* Report ----------------------------------------------------------------- */
const errors = issues.filter((issue) => issue.level === 'error');
const warnings = issues.filter((issue) => issue.level === 'warning');

console.log(`Corpus v${CORPUS_META.version} — ${OIV_CORPUS.length} document(s), mis à jour le ${CORPUS_META.updatedAt}`);
console.log(`Schéma, unicité, dates, familles et sources vérifiés.\n`);

for (const issue of [...errors, ...warnings]) {
  console.log(`${issue.level === 'error' ? '✗' : '!'} ${issue.message}`);
}

if (errors.length > 0) {
  console.error(`\n${errors.length} erreur(s), ${warnings.length} avertissement(s).`);
  process.exit(1);
}

console.log(`\n✓ Aucune erreur (${warnings.length} avertissement(s)).`);
