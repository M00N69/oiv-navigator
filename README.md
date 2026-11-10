# OIV Navigator

> Explorateur du corpus documentaire de l'Organisation internationale de la vigne et du vin (OIV) et de son articulation avec la réglementation européenne.

OIV Navigator est une application web autonome (100 % frontend, sans backend ni base de données distante) destinée aux œnologues, responsables qualité et réglementaire, maîtres de chai et laboratoires. Elle rassemble les fiches des résolutions OIV, les pratiques œnologiques autorisées et leur statut vis-à-vis du droit de l'Union européenne (règlement délégué (UE) 2019/934 et ses actualisations), avec un moteur de recherche local, un simulateur de chai et un registre exportable.

[![CI](../../actions/workflows/ci.yml/badge.svg)](../../actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Démarrage rapide](#démarrage-rapide)
- [Scripts](#scripts)
- [Structure du projet](#structure-du-projet)
- [Données et corpus](#données-et-corpus)
- [Déploiement](#déploiement)
- [Limites connues et avertissement juridique](#limites-connues-et-avertissement-juridique)
- [Contribution](#contribution)
- [Licence](#licence)

## Fonctionnalités

| Vue | Description |
| --- | --- |
| **Explorateur** | Recherche instantanée par référence officielle (`OIV-OENO 738-2025`), substance, CAS ou mot-clé, avec surlignage des résultats et facettes (famille documentaire, domaine, catégorie, statut UE, année). |
| **Fiche documentaire** | Résumé, objectifs œnologiques, prescriptions, plafonds et doses, article réglementaire UE correspondant, liens vers les textes officiels, notes personnelles. |
| **Simulateur de chai** | Calcul de la dose appliquée (mg/L, g/hL) selon la substance, la matrice (moût, blanc, rouge, rosé, effervescent, doux) et le volume de la cuve, avec contrôle du plafond réglementaire. |
| **Guide par objectif** | Six problèmes œnologiques courants (microbiologie, tartrique, clarification, oxydation/SO₂, acidité) et les fiches à mobiliser pour les traiter. |
| **Comparateur de versions** | Comparaison côte à côte de deux versions d'une même résolution (prescriptions, doses, évolutions). |
| **Règlements UE** | Vue transversale du statut européen des pratiques et des textes de référence. |
| **Veille** | Chronologie des publications, accès direct aux dépôts officiels, import/export JSON du corpus. |
| **Registre & export** | Compilation des fiches retenues, notes et contexte, export imprimable / PDF. |

Persistance locale via `localStorage` : favoris, notes, dossier technique et fiches importées restent sur le poste de l'utilisateur. Aucun compte, aucun serveur, aucune donnée envoyée à un tiers.

## Stack technique

- **React 19** + **TypeScript 7**
- **Vite 8** (build, dev server)
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **lucide-react** pour l'iconographie
- Aucun runtime backend, aucune dépendance à une API externe

## Démarrage rapide

Prérequis : **Node.js ≥ 20** (voir `.nvmrc`, Node 24 recommandé).

```bash
git clone https://github.com/M00N69/oiv-navigator.git
cd oiv-navigator
npm ci          # ou npm install
npm run dev     # http://localhost:3000
```
Aucune variable d'environnement n'est nécessaire.

## Scripts

| Commande | Effet |
| --- | --- |
| `npm run dev` | Serveur de développement Vite (port 3000, accessible sur le réseau local). |
| `npm run build` | Build de production dans `dist/`. |
| `npm run preview` | Sert le build local pour vérification. |
| `npm run lint` | Vérification TypeScript stricte (`tsc --noEmit`). |

## Structure du projet

```
.
├── docs/
│   └── PRD.md                  # Spécification fonctionnelle et technique de référence
├── public/
│   └── _redirects              # Fallback SPA (Netlify / Cloudflare Pages)
├── src/
│   ├── App.tsx                 # Shell applicatif et navigation
│   ├── components/             # Une vue par fichier (explorateur, fiche, simulateur, …)
│   ├── data/
│   │   ├── oivCorpus.ts        # Corpus documentaire embarqué
│   │   └── oenologicalProblems.ts
│   ├── lib/
│   │   ├── documentSchema.ts   # Validation / normalisation des documents importés
│   │   ├── search.ts           # Moteur de recherche, facettes, surlignage
│   │   └── storage.ts          # Persistance localStorage
│   ├── types/oiv.ts            # Modèle de données
│   ├── index.css
│   └── main.tsx
├── netlify.toml
├── index.html
└── vite.config.ts
```

## Données et corpus

Le corpus est embarqué dans `src/data/oivCorpus.ts` sous forme d'un tableau typé `OivDocument` (référence officielle, famille, domaine, dates, prescriptions, doses, mapping UE, versions, documents liés).

Pour ajouter ou mettre à jour une fiche :

1. Ajouter un objet au tableau `OIV_CORPUS` en respectant `src/types/oiv.ts`.
2. Renseigner `euRegulation` avec la référence précise (annexe, partie, tableau) et, le cas échéant, les divergences OIV / UE.
3. Vérifier le rendu avec `npm run dev` puis `npm run lint && npm run build`.

Des fiches peuvent aussi être importées à l'exécution (onglet **Veille** → « Importer une résolution »). Chaque entrée est validée et normalisée par `src/lib/documentSchema.ts` : une entrée invalide est ignorée avec un message explicite, jamais persistée en l'état.

## Déploiement

L'application est entièrement statique : n'importe quel hébergeur de fichiers statiques convient.

### Netlify

Le fichier `netlify.toml` est déjà configuré (build `npm run build`, publication de `dist`, fallback SPA, en-têtes de sécurité).

1. Connecter le dépôt GitHub dans Netlify.
2. Laisser les réglages détectés, puis déployer.

### Cloudflare Pages

1. **Create a project** → connecter le dépôt `oiv-navigator`.
2. Framework preset : *Vite* — Build command : `npm run build` — Output directory : `dist`.
3. Déployer. `public/_redirects` assure le fallback SPA.

### Vercel / GitHub Pages

- **Vercel** : import du dépôt, preset Vite, aucune configuration supplémentaire.
- **GitHub Pages** : ajouter `base: '/oiv-navigator/'` dans `vite.config.ts` et publier `dist/` (le fallback SPA doit être géré côté hébergeur).

## Limites connues et avertissement juridique

- **Outil d'aide à la décision, non un texte officiel.** Les fiches sont une synthèse documentaire : en cas de divergence, seuls les textes publiés par l'OIV et au Journal officiel de l'Union européenne font foi. Le droit de l'Union européenne prime sur les recommandations de l'OIV.
- **Corpus de démonstration.** Le corpus embarqué couvre un échantillon de pratiques, méthodes et normes ; plusieurs familles documentaires (Codex, résolutions annuelles, spiritueux) sont encore vides et doivent être alimentées avant un usage professionnel généralisé.
- **Vérification éditoriale requise.** Les statuts UE (annexes du règlement 2019/934, actualisations) doivent être revérifiés contre les versions en vigueur avant toute diffusion à des tiers.
- **Indicateur de synchronisation décoratif.** L'horodatage affiché dans l'explorateur est cosmétique : l'application n'effectue aucun appel réseau.
- **Données locales.** Favoris, notes et fiches importées sont stockés dans le navigateur ; vider les données du site les efface définitivement (utiliser l'export JSON pour les sauvegarder).

## Contribution

1. Créer une branche (`git checkout -b feat/ma-contribution`).
2. Vérifier `npm run lint` et `npm run build` avant de committer.
3. Ouvrir une pull request en décrivant les fiches ajoutées ou les sources utilisées.

Pour toute correction de contenu réglementaire, merci de citer la référence officielle exacte (OIV et/ou JOUE) dans la description de la pull request.

## Licence

Distribué sous licence MIT — voir [LICENSE](LICENSE).
