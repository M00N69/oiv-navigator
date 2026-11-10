/**
 * Minimal hash router (no dependency).
 *
 * Routes are shareable and survive a reload or a browser back/forward:
 *   #/                 → corpus (home)
 *   #/simulateur       → simulateur de chai
 *   #/objectifs        → guide par objectif
 *   #/comparateur      → comparateur de versions
 *   #/cadre-ue         → cadre réglementaire européen
 *   #/veille           → veille & dépôts légaux
 *   #/guide            → guide explicatif
 *   #/dossier          → dossier technique
 *   #/doc/<id>         → fiche documentaire
 */

export interface HashRoute {
  tab: string;
  docId: string | null;
}

const SLUG_TO_TAB: Record<string, string> = {
  simulateur: 'simulator',
  objectifs: 'solver',
  comparateur: 'comparator',
  'cadre-ue': 'regulatory',
  veille: 'veille',
  guide: 'guide',
  dossier: 'dossier',
};

const TAB_TO_SLUG: Record<string, string> = {
  home: '',
  explorer: '',
  simulator: 'simulateur',
  solver: 'objectifs',
  comparator: 'comparateur',
  regulatory: 'cadre-ue',
  veille: 'veille',
  guide: 'guide',
  dossier: 'dossier',
};

export function parseHash(hash: string): HashRoute {
  const clean = hash.replace(/^#\/?/, '').replace(/\/+$/, '');
  if (!clean) return { tab: 'home', docId: null };

  const [first, second] = clean.split('/');
  if (first === 'doc') {
    return second
      ? { tab: 'home', docId: decodeURIComponent(second) }
      : { tab: 'home', docId: null };
  }

  return { tab: SLUG_TO_TAB[first] ?? 'home', docId: null };
}

export function routeToHash(tab: string, docId?: string | null): string {
  if (docId) return `#/doc/${encodeURIComponent(docId)}`;
  const slug = TAB_TO_SLUG[tab] ?? '';
  return slug ? `#/${slug}` : '#/';
}
