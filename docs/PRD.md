# PRD technique et plan de développement — OIV Navigator

**Version :** 1.0 — 9 novembre 2026  
**Statut :** Spécification fonctionnelle et technique de référence  
**Nom du produit :** OIV Navigator  
**Nature :** Application web publique de veille documentaire, de recherche et d'interrogation du corpus OIV  
**Périmètre :** Corpus documentaire complet de l'OIV  
**Mises à jour :** Manuelles et versionnées  
**Accès :** Public, sans authentification pour les utilisateurs

> **Statut d'implémentation (v1.0).** L'application livrée est **entièrement statique** : aucun serveur, aucune base de données, aucun appel réseau au chargement. Le corpus est un fichier versionné (`src/data/oivCorpus.ts` + `CORPUS_META`), mis à jour **manuellement**, contrôlé par `npm run corpus:check` en CI. Les sections décrivant une collecte, une extraction ou une publication automatiques (F05, section 7 « API », section 10) décrivent une **cible non implémentée** : elles sont conservées comme cahier des charges d'une version serveur future et ne doivent pas être présentées comme des fonctionnalités actives.

---

# 1. Vision du produit

## 1.1 Objectif

OIV Navigator est une application web permettant d'accéder facilement à l'ensemble des documents publiés par l'Organisation internationale de la vigne et du vin (OIV), de retrouver les références pertinentes et de comprendre les prescriptions associées à une pratique, une méthode, un produit ou un sujet technique.

L'application doit transformer un corpus documentaire dispersé en une base de connaissances structurée, actualisée et interrogeable.

L'utilisateur doit pouvoir :

- Rechercher une référence OIV à partir de son numéro, de son intitulé ou d'un sujet.
- Naviguer dans les différents domaines documentaires.
- Identifier les pratiques et méthodes applicables à une situation donnée.
- Interroger les documents en langage naturel.
- Accéder directement à la source officielle et à la page pertinente.
- Identifier les modifications apportées aux documents.
- Comparer deux versions d'une référence.
- Comprendre les relations entre les résolutions OIV et les textes réglementaires européens.
- Être informé des nouvelles publications et des modifications documentaires.

## 1.2 Principes de conception

1. **Source officielle prioritaire** : toute information doit être reliée à son document d'origine.
2. **Traçabilité intégrale** : chaque document et chaque version sont conservés.
3. **Actualisation versionnée et traçable** : chaque mise à jour du corpus est explicite, datée, contrôlée et réversible (mise à jour manuelle en v1.0 ; collecte automatique traitée comme cible non implémentée, voir F05).
4. **Recherche simple** : l'utilisateur ne doit pas avoir besoin de connaître l'organisation du corpus pour trouver une information.
5. **Transparence réglementaire** : distinction explicite entre une référence OIV, une disposition réglementaire européenne et une interprétation documentaire.
6. **Réponses vérifiables** : les réponses générées doivent présenter leurs références et les extraits justificatifs.
7. **Accès public** : les fonctions documentaires sont accessibles sans compte utilisateur.

# 2. Périmètre documentaire

## 2.1 Périmètre complet

Le système doit couvrir les différentes familles documentaires publiées par l'OIV, et pas uniquement le Code international des pratiques œnologiques.

| Famille | Contenu attendu |
|---|---|
| Code international des pratiques œnologiques | Pratiques, traitements, procédés et conditions d'utilisation |
| Codex œnologique international | Produits et substances œnologiques, caractéristiques et spécifications |
| Méthodes internationales d'analyse | Méthodes analytiques relatives aux vins, moûts et autres produits |
| Méthodes d'analyse des boissons spiritueuses | Méthodes et procédures analytiques |
| Méthodes d'analyse des vinaigres | Méthodes et procédures analytiques |
| Norme internationale pour l'étiquetage des vins | Définitions et exigences relatives à l'étiquetage |
| Résolutions de l'OIV | Résolutions adoptées par l'Assemblée générale |
| Documents techniques | Rapports d'experts, études et documents techniques |
| Publications et rapports | Rapports annuels, rapports thématiques et publications institutionnelles |
| Autres documents officiels | Toute nouvelle famille documentaire identifiée sur le portail officiel |

Le référentiel documentaire doit être extensible : une nouvelle catégorie publiée par l'OIV doit pouvoir être intégrée sans modification majeure de l'application.

**Référence de départ :** [OIV — Normes et publications](https://www.oiv.int/fr/ce-que-nous-faisons/normes).

## 2.2 Référentiel réglementaire associé

L'application doit également référencer les textes réglementaires qui encadrent ou reprennent certaines pratiques OIV, notamment :

- Règlement délégué (UE) 2019/934.
- Modifications successives de ce règlement.
- Règlement délégué (UE) 2024/3085.
- Publications au Journal officiel de l'Union européenne.
- Autres textes européens pertinents identifiés au cours de la veille.

Le référentiel réglementaire européen doit rester distinct du référentiel OIV. Les deux corpus peuvent être reliés par des relations documentaires, mais ne doivent jamais être fusionnés.

**Règle impérative :** lorsqu'une disposition européenne prévaut sur une fiche OIV ou en modifie la portée, l'application doit afficher explicitement cette situation. Elle ne doit jamais présenter une résolution OIV comme une autorisation réglementaire européenne automatique.

Exemple documentaire initial : publication C/2025/1829 du 31 mars 2025, relative aux fiches OIV mentionnées dans le cadre du règlement (UE) 2019/934. La publication précise que le règlement européen prévaut en cas de divergence.

## 2.3 Sources officielles prioritaires

| Source | Utilisation |
|---|---|
| [OIV — Normes](https://www.oiv.int/fr/ce-que-nous-faisons/normes) | Point d'entrée du corpus documentaire |
| [OIV — Code international des pratiques œnologiques](https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques) | Recherche et navigation dans les pratiques |
| [OIV — Résolutions](https://www.oiv.int/fr/ce-que-nous-faisons/normes?items_per_page=25&search_title_body=&type%5Bresolutions%5D=resolutions) | Détection des nouvelles résolutions |
| [EUR-Lex — Règlement 2019/934](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32019R0934) | Référentiel réglementaire européen |
| [EUR-Lex — Publication C/2025/1829](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A52025XC01829) | Référence relative aux fiches OIV |

Le système doit enregistrer les URL des sources et leur date de dernière consultation.

# 3. Utilisateurs et cas d'utilisation

## 3.1 Utilisateurs cibles

- Œnologues.
- Responsables qualité et réglementaires.
- Laboratoires d'analyse.
- Techniciens et responsables de production.
- Consultants.
- Organismes professionnels.
- Chercheurs et experts.
- Organismes de contrôle et autorités compétentes.

## 3.2 Parcours utilisateur principaux

**Parcours A — Recherche par référence**

L'utilisateur saisit `OIV-OENO 738-2025`.

Le système affiche :
- L'intitulé officiel.
- La famille documentaire.
- Le domaine concerné.
- Le texte ou document officiel.
- La date d'adoption.
- Le statut documentaire disponible.
- Les éventuelles références associées.
- Les documents réglementaires liés.

**Parcours B — Recherche par sujet**

L'utilisateur saisit « acide fumarique dans les moûts ».

Le système propose les documents correspondants, en distinguant notamment :
- La résolution relative au traitement des moûts.
- Les références relatives à son utilisation dans le vin.
- Les conditions et limites indiquées dans chaque document.
- Les éventuelles dispositions réglementaires européennes associées.

**Parcours C — Interrogation en langage naturel**

L'utilisateur pose une question :

« Quelles sont les conditions d'utilisation de cette pratique et quelles références dois-je consulter ? »

L'application fournit une réponse structurée, accompagnée des références exactes et des extraits sources.

**Parcours D — Veille documentaire**

L'utilisateur consulte les dernières publications, les documents récemment modifiés et les nouvelles références intégrées.

**Parcours E — Comparaison**

L'utilisateur sélectionne deux versions d'un document et obtient :
- Les paragraphes ajoutés.
- Les paragraphes supprimés.
- Les modifications de conditions.
- Les changements de limites ou de valeurs.
- Les changements de statut, lorsqu'ils sont documentés.

# 4. Fonctionnalités attendues

## F01 — Accueil et navigation

L'accueil doit comporter :

- Un moteur de recherche central.
- Un accès aux grandes familles documentaires.
- Un accès aux dernières publications.
- Un accès aux dernières mises à jour.
- Un accès direct à l'interrogation en langage naturel.

La navigation doit être organisée par famille, domaine et sous-catégorie.

## F02 — Recherche documentaire

La recherche doit fonctionner à partir de :

- Référence OIV.
- Intitulé.
- Mot-clé.
- Substance ou produit.
- Pratique ou traitement.
- Méthode analytique.
- Domaine technique.
- Texte réglementaire associé.

Le moteur doit prendre en charge :
- La recherche exacte.
- La recherche partielle.
- Les synonymes.
- Les variantes linguistiques.
- La recherche sémantique.

Les résultats doivent pouvoir être filtrés par famille documentaire, année, langue, domaine et statut.

## F03 — Fiche documentaire

Chaque document dispose d'une page structurée.

Champs obligatoires :

| Champ | Description |
|---|---|
| ID interne | Identifiant unique |
| Référence officielle | Numéro ou code officiel |
| Titre officiel | Intitulé de la publication |
| Famille | Catégorie documentaire |
| Domaine | Domaine technique concerné |
| Date d'adoption | Si disponible |
| Date de publication | Si disponible |
| Date d'entrée en vigueur | Si applicable et documentée |
| Langue | Langue du document |
| Version | Version documentaire |
| Statut | Statut explicitement documenté |
| Source officielle | URL du document ou de la page |
| Fichier source | PDF ou autre fichier original |
| Texte extrait | Contenu indexable |
| Pages | Pagination et repérage des passages |
| Relations | Documents liés |
| Dernière vérification | Date de dernière consultation |

Le système ne doit pas inventer un statut « en vigueur » ou « abrogé » lorsque la source ne permet pas de le confirmer. Il doit alors afficher « statut non déterminé ».

## F04 — Assistant documentaire

L'utilisateur peut poser des questions en langage naturel.

L'assistant doit :
- Rechercher dans le corpus documentaire indexé.
- Sélectionner les documents les plus pertinents.
- Extraire les passages justificatifs.
- Formuler une réponse synthétique.
- Citer les références et les pages.
- Fournir des liens vers les documents originaux.

Chaque réponse doit séparer clairement :

1. Ce que dit le document OIV.
2. Ce que prévoit le texte réglementaire associé.
3. Les éléments de rapprochement entre les deux.
4. Les informations non établies par les sources.

**Règle de sécurité documentaire :** si les sources disponibles ne permettent pas de répondre, l'assistant doit le dire explicitement. Il ne doit pas compléter une prescription manquante par une supposition.

Les réponses doivent être accompagnées d'un avertissement précisant qu'elles constituent une aide documentaire et ne remplacent pas la consultation du texte officiel applicable.

## F05 — Mise à jour versionnée du corpus (v1.0)

**Implémenté en v1.0.** Il n'y a pas de collecte automatique : le corpus est un fichier versionné, mis à jour par un commit dédié.

Procédure réelle :

1. Vérifier la publication sur les sources primaires (OIV.int, EUR-Lex / JOUE).
2. Éditer `src/data/oivCorpus.ts` (fiche, version, mapping UE, `lastCheckedDate`).
3. Mettre à jour `CORPUS_META` (`version` au format `AAAA.N`, `updatedAt`, `updatedAtLabel`, `source`).
4. Lancer `npm run corpus:check` : schéma (`normalizeDocument`), unicité des identifiants et références, cohérence des dates, compteurs de familles, sources `https`.
5. Lancer `npm run lint && npm run build`, puis publier le commit : la version affichée dans l'interface change immédiatement.
6. En cas d'erreur détectée après publication, revenir au commit précédent (rollback par Git).

Garanties : aucune donnée historique n'est écrasée (Git), la version du corpus est affichée à l'utilisateur, et un corpus incohérent ne peut pas être publié puisque `corpus:check` tourne en CI.

> **Cible non implémentée (version serveur future).** Collecte planifiée des sources, extraction OCR, indexation et publication automatique après contrôles, file d'anomalies, journal des opérations, administration. À ne pas présenter comme disponible.

Ancienne spécification conservée comme cahier des charges de cette cible :

1. Interroger les sources officielles.
2. Détecter les nouveaux documents.
3. Détecter les documents modifiés.
4. Télécharger les fichiers disponibles.
5. Extraire les métadonnées.
6. Extraire le contenu textuel.
7. Effectuer une reconnaissance OCR lorsque nécessaire.
8. Identifier les références et les dates.
9. Comparer avec les versions précédemment enregistrées.
10. Indexer le contenu.
11. Publier la nouvelle version.
12. Enregistrer les opérations dans un journal de mise à jour.

Fréquence cible :
- Vérification quotidienne des sources principales.
- Vérification hebdomadaire des sources secondaires.
- Vérification immédiate possible depuis l'administration.

La fréquence réelle devra être adaptée aux conditions d'accès et aux modalités de publication de chaque source.

**Politique de publication automatique :**

- Les documents dont l'extraction et les contrôles automatiques sont satisfaisants sont publiés automatiquement.
- Les documents présentant une extraction incomplète ou une incohérence sont placés dans une file d'anomalies.
- Une version précédente reste consultable tant que la nouvelle version n'a pas passé les contrôles.
- Aucune version historique n'est écrasée.
- Toute modification est journalisée.

Cette politique permet une mise à jour automatique sans publier silencieusement des données manifestement défectueuses.

## F06 — Comparaison des versions

Le système doit conserver les différentes versions d'un document.

La comparaison doit permettre de visualiser :
- Le texte précédent.
- Le nouveau texte.
- Les ajouts.
- Les suppressions.
- Les modifications.
- La date de modification détectée.

Une attention particulière doit être portée aux valeurs numériques, aux unités, aux limites d'utilisation, aux catégories de produits et aux conditions d'application.

## F07 — Relations documentaires et réglementaires

Le système doit établir des relations entre :

- Une résolution et une pratique.
- Une pratique et une méthode analytique.
- Une pratique et une substance œnologique.
- Une substance et sa fiche du Codex œnologique.
- Une référence OIV et un texte européen.
- Une publication et les versions qu'elle remplace ou modifie, lorsque cette relation est explicitement établie.

Chaque relation doit comporter un type et une origine documentaire.

Types de relations prévus :
- Modifie.
- Remplace.
- Complète.
- Cite.
- Est associé à.
- Est repris dans.
- Est encadré par.
- Présente une divergence avec.

Ne pas créer automatiquement une relation juridique de remplacement ou d'autorisation sans preuve documentaire.

## F08 — Administration et supervision

Une interface d'administration privée doit permettre de :

- Consulter les dernières opérations d'import.
- Consulter les erreurs.
- Relancer une synchronisation.
- Consulter les documents en attente de contrôle.
- Corriger les métadonnées erronées.
- Consulter les historiques de versions.
- Désactiver une source défaillante.
- Ajouter une nouvelle source officielle.
- Consulter les statistiques de couverture du corpus.

L'accès à cette interface doit être protégé par authentification.

## F09 — Notifications de veille

Le système doit pouvoir générer automatiquement :
- Une liste des nouveaux documents.
- Une liste des documents modifiés.
- Un résumé des principales modifications détectées.
- Une alerte en cas d'échec d'importation.

Les notifications publiques pourront être présentées sur une page « Actualités documentaires ». Une diffusion par newsletter pourra être ajoutée dans une phase ultérieure.

# 5. Architecture technique cible

## 5.1 Principes

L'architecture doit rester simple, économique et maintenable.

Elle doit séparer :
- L'interface publique.
- La base documentaire.
- Le moteur d'indexation.
- Le processus de mise à jour.
- Le moteur d'interrogation.
- L'administration.

## 5.2 Stack technique recommandée

| Couche | Technologie proposée | Rôle |
|---|---|---|
| Frontend | Next.js / React | Interface publique et administration |
| Hébergement frontend | Vercel | Déploiement et hébergement |
| Base de données | Supabase / PostgreSQL | Documents, métadonnées, versions et relations |
| Recherche textuelle | PostgreSQL Full Text Search | Recherche par mots et expressions |
| Recherche vectorielle | pgvector | Recherche sémantique |
| Stockage documentaire | Supabase Storage | Conservation des fichiers sources |
| Traitement documentaire | Python | Téléchargement, extraction, OCR et comparaison |
| Automatisation | GitHub Actions planifié | Exécution périodique du pipeline |
| Assistant IA | API de modèle de langage | Interrogation du corpus et synthèse |
| Monitoring | Journaux applicatifs et alertes | Surveillance des traitements |

Cette architecture est une proposition de référence. Les composants pourront être ajustés selon les coûts et les contraintes d'exploitation.

## 5.3 Architecture logique

```text
SOURCES OFFICIELLES
    |
    v
COLLECTE AUTOMATIQUE
    |
    v
TÉLÉCHARGEMENT ET ARCHIVAGE
    |
    v
EXTRACTION PDF / HTML / OCR
    |
    v
STRUCTURATION DES MÉTADONNÉES
    |
    v
CONTRÔLES AUTOMATIQUES
    |
    v
COMPARAISON DES VERSIONS
    |
    v
BASE DOCUMENTAIRE POSTGRESQL
    |
    +----------------------+
    |                      |
    v                      v
RECHERCHE TEXTUELLE    INDEX VECTORIEL
    |                      |
    +----------+-----------+
               |
               v
       API DE RECHERCHE
               |
        +------+------+
        |             |
        v             v
   INTERFACE      ASSISTANT IA
    PUBLIQUE      DOCUMENTAIRE
```

## 5.4 Architecture de déploiement

Le frontend est hébergé sur Vercel.

Supabase héberge :
- La base PostgreSQL.
- Les index de recherche.
- Les métadonnées.
- Les relations documentaires.
- Les fichiers sources, selon le volume et les coûts de stockage.

Un traitement Python indépendant est exécuté selon une planification GitHub Actions. Il utilise des clés et secrets stockés dans l'environnement sécurisé du service d'exécution.

Le navigateur ne doit jamais accéder directement aux clés d'administration, aux secrets de collecte ou aux clés des modèles d'IA.

## 5.5 Recherche hybride

Le moteur combine :

1. Recherche exacte sur les références.
2. Recherche textuelle sur les titres et le contenu.
3. Recherche sémantique sur les passages documentaires.

La recherche exacte doit être prioritaire lorsqu'un utilisateur saisit une référence telle que `OIV-OENO 738-2025`.

La recherche sémantique complète les résultats, mais ne doit pas remplacer la vérification du texte officiel.

# 6. Modèle de données

## 6.1 Table `sources`

| Champ | Type |
|---|---|
| id | UUID |
| name | Text |
| source_type | Text |
| base_url | Text |
| language | Text |
| active | Boolean |
| check_frequency | Text |
| last_checked_at | Timestamp |
| last_success_at | Timestamp |

## 6.2 Table `documents`

| Champ | Type |
|---|---|
| id | UUID |
| official_reference | Text |
| title | Text |
| document_family | Text |
| domain | Text |
| document_type | Text |
| adoption_date | Date |
| publication_date | Date |
| language | Text |
| source_id | UUID |
| official_url | Text |
| current_version_id | UUID |
| status | Text |
| created_at | Timestamp |
| updated_at | Timestamp |

## 6.3 Table `document_versions`

| Champ | Type |
|---|---|
| id | UUID |
| document_id | UUID |
| version_label | Text |
| source_file_url | Text |
| file_hash | Text |
| extracted_text | Text |
| extraction_status | Text |
| published_at | Timestamp |
| detected_at | Timestamp |
| is_current | Boolean |

Le hash du fichier permet de détecter les modifications réelles, y compris lorsque l'URL reste identique.

## 6.4 Table `document_chunks`

| Champ | Type |
|---|---|
| id | UUID |
| document_version_id | UUID |
| page_number | Integer |
| section_title | Text |
| content | Text |
| language | Text |
| embedding | Vector |
| metadata | JSONB |

Chaque passage doit conserver son rattachement au document, à sa version et à sa page.

## 6.5 Table `document_relations`

| Champ | Type |
|---|---|
| id | UUID |
| source_document_id | UUID |
| target_document_id | UUID |
| relation_type | Text |
| evidence | Text |
| evidence_page | Integer |
| relation_origin | Text |
| confidence | Numeric |

`relation_origin` permet de distinguer une relation extraite explicitement d'une relation suggérée automatiquement.

## 6.6 Table `update_logs`

| Champ | Type |
|---|---|
| id | UUID |
| source_id | UUID |
| document_id | UUID |
| operation | Text |
| status | Text |
| started_at | Timestamp |
| finished_at | Timestamp |
| error_message | Text |
| details | JSONB |

## 6.7 Table `search_logs`

Cette table peut enregistrer les recherches de manière anonymisée pour améliorer les performances et identifier les besoins documentaires.

Aucune donnée personnelle non nécessaire ne doit être collectée.

# 7. API fonctionnelle

Les routes suivantes constituent une proposition d'interface technique.

| Endpoint | Fonction |
|---|---|
| `GET /api/documents` | Liste des documents |
| `GET /api/documents/:id` | Détail d'un document |
| `GET /api/documents/:id/versions` | Historique des versions |
| `GET /api/documents/:id/relations` | Documents associés |
| `GET /api/search?q=` | Recherche documentaire |
| `POST /api/ask` | Interrogation en langage naturel |
| `GET /api/updates` | Dernières mises à jour publiques — **non implémenté en v1.0** : la version du corpus est exposée par `CORPUS_META` |
| `GET /api/categories` | Familles et domaines |
| `GET /api/health` | État technique du service |

Les routes d'administration doivent être séparées et protégées.

# 8. Exigences de qualité et de sécurité

## 8.1 Fiabilité documentaire

- Chaque document doit disposer d'une source identifiable.
- Chaque version doit être conservée.
- Les dates doivent être distinguées : adoption, publication, entrée en vigueur et détection.
- Les références officielles ne doivent pas être normalisées au point de perdre leur forme d'origine.
- Les valeurs numériques et les unités doivent être conservées exactement.
- Les pages et sections doivent être associées aux extraits.
- Les erreurs d'extraction doivent être détectables.

## 8.2 Fiabilité de l'assistant IA

L'assistant doit :
- Répondre uniquement à partir des documents retrouvés dans le corpus pour les questions documentaires.
- Fournir les références et pages utilisées.
- Signaler les contradictions entre documents.
- Distinguer les faits des interprétations.
- Signaler les informations absentes.
- Ne pas extrapoler une autorisation réglementaire.

Une réponse sans source documentaire suffisante doit être refusée ou explicitement qualifiée d'incomplète.

## 8.3 Sécurité technique

- HTTPS obligatoire.
- Clés API conservées côté serveur.
- Authentification obligatoire pour l'administration.
- Contrôle des permissions sur les opérations d'écriture.
- Protection contre les injections dans les requêtes et les prompts.
- Sauvegarde de la base.
- Journalisation des opérations.
- Protection contre les abus du service public.

## 8.4 Performance cible

| Indicateur | Cible |
|---|---|
| Chargement initial | Moins de 3 secondes dans des conditions normales |
| Recherche simple | Moins de 2 secondes |
| Affichage d'une fiche | Moins de 2 secondes |
| Réponse IA | Cible de 5 à 15 secondes |
| Disponibilité | 99 % cible initiale |
| Conservation des versions | Intégrale |
| Traçabilité des documents | 100 % des documents publiés |

Ces valeurs sont des objectifs de conception, à confirmer lors des tests.

# 9. Interface utilisateur

## 9.1 Pages principales

1. Accueil.
2. Recherche.
3. Résultats.
4. Fiche documentaire.
5. Navigation par famille.
6. Assistant documentaire.
7. Actualités et mises à jour.
8. Comparaison de versions.
9. Administration.

## 9.2 Ergonomie

L'interface doit être :
- Responsive : ordinateur, tablette et mobile.
- Simple et professionnelle.
- Disponible au minimum en français.
- Préparée pour l'anglais et l'espagnol.
- Orientée vers la consultation documentaire plutôt que vers des fonctionnalités secondaires.

## 9.3 Exemple de fiche documentaire

**OIV-OENO 738-2025 — Traitement des moûts par l'acide fumarique pour le contrôle microbiologique**

La fiche devra présenter :
- Le titre officiel.
- La référence.
- Le domaine.
- La date d'adoption.
- Le document source.
- Le contenu extrait.
- Les conditions et valeurs explicitement présentes dans la source.
- Les documents associés.
- Les références réglementaires européennes liées.
- L'historique des versions.
- Un bouton d'accès au document officiel.

Cet exemple sert de cas de test documentaire. Les informations techniques affichées devront être vérifiées dans le document source complet.

# 10. Stratégie de mise à jour automatique

> **Cible non implémentée en v1.0.** Cette section décrit le pipeline serveur envisagé. L'application livrée fonctionne par mise à jour manuelle versionnée du corpus (voir F05) ; aucun composant décrit ci-dessous n'est actif.

## 10.1 Détection

Pour chaque source, le système utilise, dans cet ordre lorsque disponibles :

1. Flux ou API officielle.
2. Catalogue officiel.
3. Sitemap ou index documentaire.
4. Surveillance des pages HTML.
5. Comparaison des fichiers téléchargés.

Il ne faut pas présumer qu'une API existe pour chaque source. Le connecteur doit être adapté à la structure réellement disponible.

## 10.2 Traitement d'un nouveau document

```text
DÉTECTION
   |
   v
DOCUMENT NOUVEAU OU MODIFIÉ ?
   |
   +---- NON ---> FIN
   |
   v
TÉLÉCHARGEMENT
   |
   v
HASH ET ARCHIVAGE
   |
   v
EXTRACTION TEXTE / OCR
   |
   v
VALIDATION DES MÉTADONNÉES
   |
   v
CONTRÔLE DE QUALITÉ
   |
   +---- ÉCHEC ---> FILE D'ANOMALIES
   |
   v
COMPARAISON DES VERSIONS
   |
   v
INDEXATION
   |
   v
PUBLICATION AUTOMATIQUE
   |
   v
JOURNAL ET NOTIFICATION
```

## 10.3 Contrôles automatiques

Le système doit notamment contrôler :
- La présence d'un titre.
- La présence d'une référence lorsque le document en possède une.
- La cohérence des dates.
- La qualité de l'extraction.
- Le nombre de pages.
- La présence de texte exploitable.
- Les éventuelles variations numériques.
- Les doublons.
- La cohérence entre la page source et le fichier téléchargé.

## 10.4 Historique et réversibilité

Toute mise à jour doit être réversible.

Une version précédente doit rester accessible. En cas de détection d'une erreur, l'administration doit pouvoir rétablir la version publiée antérieurement sans perdre les informations relatives à la nouvelle version.

# 11. MVP — Version initiale

Le MVP doit couvrir le parcours documentaire de bout en bout, sans chercher à développer immédiatement toutes les fonctionnalités avancées.

## Fonctionnalités obligatoires

- Corpus OIV complet dans les familles identifiées.
- Référentiel réglementaire européen associé.
- Collecte automatique des sources principales.
- Téléchargement et archivage des documents.
- Extraction PDF et HTML.
- OCR pour les documents scannés.
- Base documentaire structurée.
- Recherche exacte et textuelle.
- Recherche sémantique.
- Fiches documentaires.
- Liens vers les sources officielles.
- Historique des versions.
- Page des dernières mises à jour.
- Assistant documentaire avec citations.
- Interface d'administration.
- Journal des opérations automatiques.

## Fonctionnalités reportées

- Alertes personnalisées par utilisateur.
- Newsletter.
- Comptes utilisateurs publics.
- Export avancé de rapports.
- Comparaison visuelle complexe de plusieurs documents.
- Application mobile native.
- Traduction automatique intégrale des documents.
- Analyse réglementaire automatisée approfondie.

# 12. Critères de recette

Le MVP est considéré comme fonctionnel lorsque les tests suivants sont réussis.

| ID | Test | Résultat attendu |
|---|---|---|
| T01 | Rechercher une référence exacte | Le bon document apparaît en premier |
| T02 | Rechercher un sujet technique | Les documents pertinents sont retrouvés |
| T03 | Ouvrir une fiche | Les métadonnées et la source sont visibles |
| T04 | Consulter un document PDF | Le fichier original est accessible |
| T05 | Poser une question documentaire | Réponse avec références et pages |
| T06 | Poser une question sans réponse dans le corpus | Le système indique l'absence de preuve suffisante |
| T07 | Ajouter une nouvelle version | L'ancienne version est conservée |
| T08 | Modifier un document source | Le changement est détecté |
| T09 | Détecter une extraction défectueuse | Le document est placé en anomalie |
| T10 | Consulter les dernières mises à jour | Les publications récentes sont affichées |
| T11 | Consulter les relations réglementaires | Les relations sont explicites et sourcées |
| T12 | Accéder à l'administration | L'authentification est obligatoire |
| T13 | Consulter l'application sur mobile | Navigation utilisable |
| T14 | Interroger une pratique OIV et sa réglementation européenne | Les deux niveaux sont distingués |

# 13. Plan de développement

Le calendrier ci-dessous constitue une estimation initiale pour un développeur maîtrisant les technologies proposées. Il devra être ajusté après l'inventaire technique des sources OIV.

## Phase 1 — Inventaire et cadrage technique

**Durée estimée : 3 à 5 jours**

Travaux :
- Recenser les familles documentaires.
- Identifier les URL et mécanismes de publication.
- Identifier les formats disponibles.
- Évaluer le volume documentaire.
- Identifier les langues.
- Définir les règles de versionnement.
- Identifier les sources réglementaires européennes.

Livrables :
- Inventaire des sources.
- Cartographie documentaire.
- Modèle de données final.
- Spécification des connecteurs.

**Condition de sortie :** chaque famille documentaire prioritaire possède une source identifiée et une méthode de collecte documentée.

## Phase 2 — Base de données et collecte

**Durée estimée : 5 à 7 jours**

Travaux :
- Créer le projet Supabase.
- Créer les tables.
- Mettre en place le stockage.
- Développer les connecteurs.
- Télécharger les documents.
- Enregistrer les métadonnées.
- Gérer les doublons et les versions.

Livrables :
- Base documentaire opérationnelle.
- Premier corpus importé.
- Journal de collecte.

**Condition de sortie :** les documents collectés sont identifiables, consultables et reliés à leurs sources.

## Phase 3 — Extraction et indexation

**Durée estimée : 4 à 6 jours**

Travaux :
- Extraction PDF et HTML.
- OCR des documents nécessaires.
- Découpage en sections et passages.
- Repérage des pages.
- Indexation textuelle.
- Génération des embeddings.
- Contrôles de qualité.

Livrables :
- Pipeline documentaire.
- Index de recherche.
- Historique des versions.

**Condition de sortie :** les documents sont interrogeables et les extraits renvoient à leur page d'origine.

## Phase 4 — Interface publique

**Durée estimée : 5 à 7 jours**

Travaux :
- Développer l'accueil.
- Développer la navigation par familles.
- Développer le moteur de recherche.
- Développer les fiches documentaires.
- Développer la page des mises à jour.
- Développer l'affichage des relations.

Livrables :
- Application web publique.
- Navigation documentaire.
- Recherche fonctionnelle.

**Condition de sortie :** un utilisateur peut retrouver, ouvrir et consulter une référence sans assistance.

## Phase 5 — Assistant documentaire

**Durée estimée : 4 à 6 jours**

Travaux :
- Développer l'API d'interrogation.
- Mettre en place la recherche hybride.
- Construire les prompts de réponse.
- Intégrer les citations.
- Afficher les pages sources.
- Gérer les réponses insuffisamment documentées.
- Tester les risques d'hallucination.

Livrables :
- Assistant documentaire opérationnel.
- Réponses sourcées.
- Tests de fiabilité.

**Condition de sortie :** chaque affirmation documentaire présentée comme un fait est reliée à une source exploitable.

## Phase 6 — Automatisation et administration

**Durée estimée : 4 à 6 jours**

Travaux :
- Planifier les collectes.
- Développer les contrôles automatiques.
- Développer la détection de modifications.
- Développer les comparaisons.
- Développer les alertes.
- Développer l'interface d'administration.
- Tester la reprise après erreur.

Livrables :
- Pipeline automatique.
- Interface d'administration.
- Journal de supervision.

**Condition de sortie :** une nouvelle publication détectée peut être intégrée et publiée automatiquement si elle passe les contrôles.

## Phase 7 — Recette et mise en production

**Durée estimée : 3 à 5 jours**

Travaux :
- Tester les parcours.
- Contrôler les références.
- Vérifier les liens officiels.
- Tester les performances.
- Vérifier la sécurité.
- Vérifier les sauvegardes.
- Déployer en production.

Livrables :
- Application publique.
- Documentation technique.
- Procédure de maintenance.
- Rapport de recette.

## Synthèse du calendrier

| Phase | Durée |
|---|---:|
| 1. Inventaire et cadrage | 3–5 jours |
| 2. Base et collecte | 5–7 jours |
| 3. Extraction et indexation | 4–6 jours |
| 4. Interface publique | 5–7 jours |
| 5. Assistant documentaire | 4–6 jours |
| 6. Automatisation et administration | 4–6 jours |
| 7. Recette et déploiement | 3–5 jours |
| **Total estimé** | **28–42 jours ouvrés** |

Ce calendrier est une estimation de développement, pas un engagement de livraison. La difficulté principale sera la diversité des formats et des mécanismes de publication des sources documentaires.

# 14. Risques et mesures de maîtrise

| Risque | Conséquence | Mesure de maîtrise |
|---|---|---|
| Modification de la structure du site OIV | Collecte interrompue | Connecteurs indépendants et alertes |
| PDF scannés ou mal structurés | Extraction incomplète | OCR et contrôles de qualité |
| Référence mal identifiée | Mauvais rattachement | Validation des métadonnées |
| Document remplacé sans nouvelle URL | Version non détectée | Comparaison des hashes et contenus |
| Confusion entre résolution OIV et droit européen | Mauvaise interprétation réglementaire | Corpus et statuts séparés |
| Hallucination de l'assistant | Information erronée | Réponses sourcées et abstention |
| Coût excessif des embeddings ou de l'IA | Dépenses d'exploitation | Indexation incrémentale et quotas |
| Indisponibilité d'une source | Retard de mise à jour | Historique et nouvelle tentative automatique |

# 15. Indicateurs de performance

Le système devra suivre :

- Nombre de documents identifiés.
- Nombre de documents téléchargés.
- Nombre de documents indexés.
- Taux de documents avec source officielle.
- Taux de documents avec extraction exploitable.
- Nombre de nouvelles publications détectées.
- Nombre de modifications détectées.
- Nombre d'erreurs de collecte.
- Délai entre publication officielle et intégration.
- Taux de réponses de l'assistant avec références vérifiables.
- Temps moyen de recherche.

Les indicateurs de couverture doivent être calculés par famille documentaire. Un corpus global apparemment complet peut masquer des catégories insuffisamment intégrées.

# 16. Conditions de lancement

Avant la mise en production, les conditions suivantes doivent être remplies :

1. Les principales familles du corpus OIV sont inventoriées.
2. Les sources officielles sont enregistrées.
3. Les documents sont reliés à leurs versions.
4. Les liens vers les sources originales sont fonctionnels.
5. Les règles de distinction OIV / réglementation européenne sont opérationnelles.
6. Le moteur de recherche retourne les références exactes.
7. L'assistant affiche des citations vérifiables.
8. Le processus automatique est testé sur au moins un cas de nouvelle publication et un cas de modification.
9. Les anomalies d'extraction sont détectables.
10. Les sauvegardes et la reprise après incident sont testées.

# 17. Décisions de conception définitives

| Sujet | Décision |
|---|---|
| Nom | OIV Navigator |
| Périmètre | Corpus documentaire complet OIV |
| Référentiel complémentaire | Réglementation européenne pertinente |
| Actualisation | Automatique |
| Publication des mises à jour | Automatique après contrôles |
| Historique | Conservation intégrale |
| Accès utilisateur | Public, sans compte |
| Administration | Privée et authentifiée |
| Langue initiale | Français |
| Évolution linguistique | Anglais et espagnol |
| Frontend | Next.js |
| Hébergement frontend | Vercel |
| Base | Supabase / PostgreSQL |
| Stockage | Supabase Storage |
| Traitement | Python |
| Recherche | Hybride, textuelle et sémantique |
| Assistant | IA avec références et citations |
| Priorité | Exactitude, traçabilité et simplicité |

---

# 18. Première livraison attendue

La première livraison du projet doit comprendre :

- Une application publique navigable.
- Une base documentaire OIV structurée.
- Un référentiel réglementaire européen associé.
- Un moteur de recherche.
- Des fiches documentaires.
- Un assistant de recherche documentaire.
- Un système de mise à jour automatique.
- Un historique des versions.
- Une interface d'administration.

**Définition du succès :** un utilisateur saisit une question ou un sujet œnologique, retrouve les références OIV pertinentes, accède aux documents officiels et peut vérifier les conditions documentaires et réglementaires sans devoir parcourir manuellement plusieurs dizaines de publications.

**OIV Navigator doit être un outil de navigation et de vérification documentaire, et non un moteur qui transforme automatiquement les publications OIV en autorisations réglementaires.**
