import { OivDocument } from '../types/oiv';

export const OIV_CORPUS: OivDocument[] = [
  {
    id: 'oiv-oeno-738-2025',
    officialReference: 'OIV-OENO 738-2025',
    title: 'Traitement des moûts par l\'acide fumarique pour le contrôle microbiologique',
    family: 'pratiques',
    domain: 'Contrôle microbiologique',
    category: 'Moûts',
    adoptionDate: '11/07/2025',
    adoptionYear: 2025,
    language: 'fr',
    status: 'adopte',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    pdfUrl: 'https://www.oiv.int/public/medias/resolutions/OIV-OENO-738-2025.pdf',
    summary: 'Autorisation et encadrement du traitement des moûts de raisins par adjonction d\'acide fumarique en vue d\'inhiber ou de retarder le développement précoce des bactéries lactiques et prévenir les altérations fermentaires.',
    oenologicalObjectives: [
      'Contrôler et inhiber la flore bactérienne lactique indigène dans les moûts.',
      'Retarder le déclenchement non désiré de la fermentation malolactique lors des vinifications en blanc ou en rosé.',
      'Limiter les doses d\'anhydride sulfureux (SO2) nécessaires lors de l\'encuvage.'
    ],
    prescriptions: [
      'L\'acide fumarique utilisé doit être conforme aux spécifications du Codex œnologique international (monographie COEI-1-ACIFUM).',
      'Le traitement doit être réalisé exclusivement sur moûts avant ou au début de la fermentation alcoolique.',
      'L\'acide fumarique ne doit pas être utilisé pour masquer un défaut organoleptique ou une contamination microbienne consécutive à un défaut d\'hygiène.',
      'Une analyse préalable de la teneur en acide malique et du pH est recommandée pour adapter la dose.'
    ],
    limitsAndDoses: 'Dose maximale d\'emploi dans les moûts : 600 mg/L (soit 60 g/hL).',
    substanceName: 'Acide fumarique (acide trans-butènedioïque)',
    chemicalFormula: 'C4H4O4',
    casNumber: '110-17-8',
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: 'Règlement délégué (UE) 2019/934 — Annexe I, Partie A, Tableau 1 (Ligne acide fumarique)',
      amendmentReference: 'Règlement délégué (UE) 2024/3085 & Publication JOUE C/2025/1829',
      officialJournalPublication: 'Publication JOUE C/2025/1829 du 31 mars 2025',
      prevalenceRule: 'RÈGLE IMPÉRATIVE : En cas de divergence entre la fiche OIV et les dispositions de l\'Union européenne, le Règlement (UE) 2019/934 prévaut. L\'extension aux moûts fait l\'objet d\'un encadrement spécifique dans l\'UE où l\'usage initialement réservé aux vins a été adapté.',
      euLimitsAndConditions: 'Dans l\'UE, l\'usage est autorisé dans la limite stricte de 600 mg/L. L\'acide fumarique ne doit pas être utilisé pour l\'acidification artificielle des vins.',
      divergenceNotes: 'L\'OIV a formalisé la résolution 738-2025 spécifiquement pour les moûts. Au niveau européen, la vérification du cahier des charges AOP/IGP local demeure obligatoire.'
    },
    versions: [
      {
        id: 'v2025-738',
        versionLabel: 'Résolution 738-2025 (Actuelle)',
        adoptionYear: 2025,
        adoptionDate: '11/07/2025',
        summaryOfChanges: 'Extension officielle du traitement à la phase moûts (jusqu\'alors limité aux vins finis dans la résolution 581A-2021).',
        extractedText: 'L\'Assemblée générale de l\'OIV, sur proposition de la Commission Œnologie, décide d\'introduire dans le Code international des pratiques œnologiques la pratique du traitement des moûts par l\'acide fumarique pour le contrôle de la croissance des bactéries lactiques, jusqu\'à concurrence de 600 mg/L.',
        prescriptions: [
          'Emploi autorisé sur moûts frais et moûts en début de fermentation.',
          'Respect scrupuleux du Codex œnologique international.',
          'Plafond fixé à 600 mg/L.'
        ],
        limitsAndDoses: '600 mg/L max.',
        isCurrent: true
      },
      {
        id: 'v2021-581a',
        versionLabel: 'Résolution 581A-2021 (Antérieure)',
        adoptionYear: 2021,
        adoptionDate: '12/07/2021',
        summaryOfChanges: 'Pratique limitée aux vins finis (pour l\'inhibition de la FML).',
        extractedText: 'Traitement des vins par l\'acide fumarique pour inhiber la fermentation malolactique. Dose maximale autorisée dans les vins : de 300 à 600 mg/L selon les profils et le pH.',
        prescriptions: [
          'Usage limité aux vins après achèvement de la fermentation alcoolique.',
          'Interdiction d\'usage en cours de fermentation malolactique active sans sulfitage associé.'
        ],
        limitsAndDoses: '300 à 600 mg/L dans les vins.',
        isCurrent: false
      }
    ],
    relatedDocuments: [
      {
        id: 'oiv-oeno-581a-2021',
        officialReference: 'OIV-OENO 581A-2021',
        title: 'Traitement des vins par l\'acide fumarique pour inhiber la fermentation malolactique',
        relationType: 'complete',
        evidence: 'La résolution 738-2025 étend aux moûts ce qui avait été adopté pour les vins en 2021.'
      },
      {
        id: 'coei-1-acifum',
        officialReference: 'COEI-1-ACIFUM',
        title: 'Codex œnologique international : Monographie Acide Fumarique',
        relationType: 'codex_associe',
        evidence: 'Exigences de pureté chimique minimale de 99,5 % et limites en métaux lourds.'
      },
      {
        id: 'oiv-ma-as323-04',
        officialReference: 'OIV-MA-AS323-04',
        title: 'Dosage de l\'acide fumarique dans les vins par HPLC',
        relationType: 'methode_associee',
        evidence: 'Méthode officielle d\'analyse de référence recommandée par l\'OIV pour le dosage.'
      }
    ],
    lastCheckedDate: '2026-11-01',
    isRecentPublication: true
  },
  {
    id: 'oiv-oeno-581a-2021',
    officialReference: 'OIV-OENO 581A-2021',
    title: 'Traitement des vins par l\'acide fumarique pour inhiber la fermentation malolactique',
    family: 'pratiques',
    domain: 'Contrôle microbiologique',
    category: 'Vins',
    adoptionDate: '12/07/2021',
    adoptionYear: 2021,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    pdfUrl: 'https://www.oiv.int/public/medias/resolutions/OIV-OENO-581A-2021.pdf',
    summary: 'Prescriptions pour l\'addition d\'acide fumarique dans les vins afin d\'inhiber ou d\'arrêter la fermentation malolactique et de stabiliser les vins sur le plan microbiologique.',
    oenologicalObjectives: [
      'Inhiber la fermentation malolactique lorsque la conservation de l\'acide malique est recherchée (vins blancs vifs, rosés, vins de base effervescents).',
      'Réduire l\'usage des sulfites libres comme seul agent antibactérien.'
    ],
    prescriptions: [
      'Utiliser uniquement de l\'acide fumarique de qualité Codex œnologique.',
      'S\'assurer de la dissolution complète compte tenu de la solubilité modérée de l\'acide fumarique dans le vin.',
      'Tenir compte du pH : l\'efficacité inhibitrice est accrue à des pH faibles (< 3.5).'
    ],
    limitsAndDoses: 'Dose maximale d\'emploi dans les vins : 600 mg/L.',
    substanceName: 'Acide fumarique',
    chemicalFormula: 'C4H4O4',
    casNumber: '110-17-8',
    euRegulation: {
      euStatus: 'autorise_ue',
      primaryReference: 'Règlement délégué (UE) 2019/934 — Annexe I, Partie A, Tableau 1',
      amendmentReference: 'Règlement (UE) 2021/2117',
      officialJournalPublication: 'JO L 435 du 6.12.2021',
      prevalenceRule: 'Autorisé dans l\'UE pour le contrôle de la fermentation malolactique. Dose maximale autorisée dans l\'UE : 600 mg/L.',
      euLimitsAndConditions: '600 mg/L max. L\'acide fumarique ne peut être additionné au titre de l\'acidification légale.'
    },
    versions: [
      {
        id: 'v2021-orig',
        versionLabel: 'Version originale 2021',
        adoptionYear: 2021,
        extractedText: 'Inhibition de la fermentation malolactique par apport d\'acide fumarique jusqu\'à 600 mg/L dans les vins.',
        prescriptions: ['Application exclusive aux vins.'],
        limitsAndDoses: '600 mg/L',
        isCurrent: true
      }
    ],
    relatedDocuments: [
      {
        id: 'oiv-oeno-738-2025',
        officialReference: 'OIV-OENO 738-2025',
        title: 'Traitement des moûts par l\'acide fumarique',
        relationType: 'complete',
        evidence: 'Extension des principes de la résolution 581A-2021 aux moûts.'
      },
      {
        id: 'coei-1-acifum',
        officialReference: 'COEI-1-ACIFUM',
        title: 'Codex : Monographie Acide Fumarique',
        relationType: 'codex_associe'
      }
    ],
    lastCheckedDate: '2026-10-15'
  },
  {
    id: 'oiv-oeno-684a-2022',
    officialReference: 'OIV-OENO 684A-2022',
    title: 'Utilisation du dicarbonate de diméthyle (DMDC) dans les vins spéciaux',
    family: 'pratiques',
    domain: 'Stabilisation microbiologique',
    category: 'Vins spéciaux',
    adoptionDate: '04/11/2022',
    adoptionYear: 2022,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    pdfUrl: 'https://www.oiv.int/public/medias/resolutions/OIV-OENO-684A-2022.pdf',
    summary: 'Encadrement de l\'addition de dicarbonate de diméthyle (DMDC / Velcorin) pour la stabilisation microbiologique à froid des vins spéciaux contenant des sucres résiduels.',
    oenologicalObjectives: [
      'Inactiver les levures résiduelles (notamment Brettanomyces et Saccharomyces) avant conditionnement.',
      'Prévenir la refermentation en bouteille des vins contenant des sucres fermentescibles.',
      'Réduire les teneurs en SO2 total des vins moelleux et liquoreux.'
    ],
    prescriptions: [
      'Addition obligatoire à l\'aide d\'un système de dosage de précision proportionnel immédiatement avant la mise en bouteille.',
      'Le vin doit être limpide et préalablement filtré (< 1 NTU conseillé).',
      'Le DMDC se décompose entièrement dans les heures suivant l\'adjonction en méthanol et dioxyde de carbone à l\'état de traces conformes aux seuils sanitaires.'
    ],
    limitsAndDoses: 'Dose maximale d\'incorporation : 200 mg/L. Aucune trace résiduelle de DMDC détectable dans le vin mis en marché.',
    substanceName: 'Dicarbonate de diméthyle (DMDC)',
    chemicalFormula: 'C4H6O5',
    casNumber: '4525-33-1',
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: 'Règlement (UE) 2019/934 — Annexe I, Partie A, Tableau 1',
      amendmentReference: 'Règlement (UE) 2022/68',
      prevalenceRule: 'Autorisé dans l\'UE uniquement pour les vins titrant au minimum 5 g/L de sucres fermentescibles. Interdit dans les vins secs de table sans sucres résiduels.',
      euLimitsAndConditions: 'Dose max : 200 mg/L. Nécessite une installation technique homologuée et déclaration de mise en œuvre selon les États membres.'
    },
    versions: [
      {
        id: 'v2022-684',
        versionLabel: 'Version 2022 (Vins spéciaux)',
        adoptionYear: 2022,
        extractedText: 'Extension du DMDC aux catégories de vins spéciaux avec sucres fermentescibles.',
        prescriptions: ['Système doseur asservi requis.'],
        limitsAndDoses: '200 mg/L max.',
        isCurrent: true
      }
    ],
    relatedDocuments: [
      {
        id: 'coei-1-dmdc',
        officialReference: 'COEI-1-DMDC',
        title: 'Monographie Codex du dicarbonate de diméthyle',
        relationType: 'codex_associe'
      },
      {
        id: 'oiv-ma-as323-08',
        officialReference: 'OIV-MA-AS323-08',
        title: 'Recherche et dosage du DMDC dans les vins par CPG',
        relationType: 'methode_associee'
      }
    ],
    lastCheckedDate: '2026-10-20'
  },
  {
    id: 'oiv-oeno-650-2021',
    officialReference: 'OIV-OENO 650-2021',
    title: 'Utilisation du polyaspartate de potassium pour la stabilisation tartrique des vins',
    family: 'pratiques',
    domain: 'Stabilisation tartrique',
    category: 'Vins',
    adoptionDate: '12/07/2021',
    adoptionYear: 2021,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    pdfUrl: 'https://www.oiv.int/public/medias/resolutions/OIV-OENO-650-2021.pdf',
    summary: 'Emploi du polyaspartate de potassium (A-5D K / KPA) comme colloïde protecteur inhibiteur de la cristallisation du bitartrate de potassium.',
    oenologicalObjectives: [
      'Empêcher les précipitations de tartrate dans les vins blancs, rosés et rouges.',
      'Assurer une stabilité tartrique durable à température ambiante sans dépense énergétique frigorifique.'
    ],
    prescriptions: [
      'Le vin doit être protéiquement et colloïdalement stable avant l\'addition.',
      'Ne pas employer conjointement avec du lysozyme pour éviter toute formation de trouble colloïdal.',
      'Respecter les spécifications de pureté du Codex (poids moléculaire moyen et degré de substitution).'
    ],
    limitsAndDoses: 'Dose maximale recommandée : 100 mg/L (soit 10 g/hL).',
    substanceName: 'Polyaspartate de potassium (KPA)',
    casNumber: '64723-18-8',
    euRegulation: {
      euStatus: 'autorise_ue',
      primaryReference: 'Règlement (UE) 2019/934 — Annexe I, Partie A, Tableau 1 (Code E456)',
      prevalenceRule: 'Pleinement autorisé dans l\'UE jusqu\'à 100 mg/L pour les vins calmes.',
      euLimitsAndConditions: '100 mg/L max. Mention E456 dans la liste des ingrédients des vins mis en marché.'
    },
    versions: [
      {
        id: 'v2021-kpa',
        versionLabel: 'Version OIV 2021',
        adoptionYear: 2021,
        extractedText: 'Stabilisation tartrique préventive par adjonction de polyaspartate de potassium à concurrence de 100 mg/L.',
        prescriptions: ['Stabilisation colloïdale préalable requise.'],
        limitsAndDoses: '100 mg/L',
        isCurrent: true
      }
    ],
    relatedDocuments: [
      {
        id: 'coei-1-kpa',
        officialReference: 'COEI-1-KPA',
        title: 'Codex : Monographie Polyaspartate de potassium',
        relationType: 'codex_associe'
      }
    ],
    lastCheckedDate: '2026-10-18'
  },
  {
    id: 'oiv-oeno-366-2009',
    officialReference: 'OIV-OENO 366-2009',
    title: 'Traitement des vins par la carboxyméthylcellulose (gomme de cellulose)',
    family: 'pratiques',
    domain: 'Stabilisation tartrique',
    category: 'Vins',
    adoptionDate: '03/07/2009',
    adoptionYear: 2009,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    pdfUrl: 'https://www.oiv.int/public/medias/resolutions/OIV-OENO-366-2009.pdf',
    summary: 'Utilisation de la carboxyméthylcellulose sodique (CMC / E466) pour inhiber la nucléation et la croissance des cristaux de bitartrate de potassium dans les vins blancs et effervescents.',
    oenologicalObjectives: [
      'Inhiber la précipitation tartrique à froid sans passage par la stabilisation par le froid classique.',
      'Maintenir la limpidité des vins embouteillés.'
    ],
    prescriptions: [
      'Utilisation réservée aux vins blancs et effervescents.',
      'Dans les vins rouges et rosés, risque majeur d\'interaction avec les matières colorantes instables (polyphénols), provoquant des précipitations et turbidité.',
      'Le vin doit présenter une stabilité protéique parfaite avant adjonction (test à la chaleur).'
    ],
    limitsAndDoses: 'Dose maximale admissible : 100 mg/L (10 g/hL).',
    substanceName: 'Carboxyméthylcellulose sodique (CMC)',
    casNumber: '9004-32-4',
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: 'Règlement (UE) 2019/934 — Annexe I, Partie A, Tableau 1 (Code E466)',
      prevalenceRule: 'Autorisé dans l\'UE à la dose maximale de 100 mg/L pour les vins blancs et effervescents. Strictement déconseillé et non applicable aux vins rouges.',
      euLimitsAndConditions: '100 mg/L max. Ingrédient additif étiquetable E466.'
    },
    versions: [
      {
        id: 'v2009-cmc',
        versionLabel: 'Version originale 2009',
        adoptionYear: 2009,
        extractedText: 'Inhibition tartrique par carboxyméthylcellulose à dose maximale de 100 mg/L pour les vins blancs.',
        prescriptions: ['Stabilité protéique obligatoire.'],
        limitsAndDoses: '100 mg/L',
        isCurrent: true
      }
    ],
    relatedDocuments: [
      {
        id: 'coei-1-cmc',
        officialReference: 'COEI-1-CMC',
        title: 'Codex : Carboxyméthylcellulose sodique',
        relationType: 'codex_associe'
      }
    ],
    lastCheckedDate: '2026-09-12'
  },
  {
    id: 'oiv-oeno-583-2017',
    officialReference: 'OIV-OENO 583-2017',
    title: 'Traitement des moûts et des vins par résines échangeuses de cations',
    family: 'pratiques',
    domain: 'Gestion de l\'acidité & du pH',
    category: 'Vins',
    adoptionDate: '02/06/2017',
    adoptionYear: 2017,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    pdfUrl: 'https://www.oiv.int/public/medias/resolutions/OIV-OENO-583-2017.pdf',
    summary: 'Remplacement des ions potassium (K+) et calcium (Ca2+) par des protons (H+) via passage sur résines sulfoniques cationiques en vue de corriger le pH ou de stabiliser les vins.',
    oenologicalObjectives: [
      'Abaisser le pH des moûts et vins issus de vendanges surmûries ou en déficit d\'acidité naturelle.',
      'Améliorer la stabilité microbiologique et l\'efficacité du SO2 libre.',
      'Éviter l\'ajout d\'acides minéraux ou organiques exogènes.'
    ],
    prescriptions: [
      'Les résines doivent respecter le Codex œnologique international et la réglementation relative aux matériaux au contact des denrées alimentaires.',
      'Le traitement doit être surveillé en continu par conductimétrie et pH-métrie.',
      'La baisse maximale de pH autorisée est encadrée par la réglementation.'
    ],
    limitsAndDoses: 'Abaissement maximal de pH autorisé : 0,3 unité de pH dans le vin traité après assemblage.',
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: 'Règlement (UE) 2019/934 — Annexe I, Partie A, Tableau 1 (Ligne Résines échangeuses de cations)',
      prevalenceRule: 'Autorisé dans l\'UE avec limitation géographique stricte selon les zones viticoles européennes. L\'acidification et l\'enrichissement s\'excluent mutuellement sur un même lot.',
      euLimitsAndConditions: 'Baisse de pH limitée à 0,3 unité de pH. Interdit dans les zones viticoles A et B sauf dérogation climatique exceptionnelle accordée par les autorités nationales.'
    },
    versions: [
      {
        id: 'v2017-resines',
        versionLabel: 'Version 2017',
        adoptionYear: 2017,
        extractedText: 'Passage sur résines cationiques fortes en cycle acide pour substitution K+ -> H+.',
        prescriptions: ['Contrôle strict des résidus de régénération.'],
        limitsAndDoses: 'Variation max 0.3 unité pH',
        isCurrent: true
      }
    ],
    relatedDocuments: [
      {
        id: 'oiv-oeno-622-2019',
        officialReference: 'OIV-OENO 622-2019',
        title: 'Acidification par traitement électromembranaire',
        relationType: 'complete',
        evidence: 'Autre méthode physique de régulation acide par voie membranaire bipolaire.'
      }
    ],
    lastCheckedDate: '2026-10-05'
  },
  {
    id: 'oiv-oeno-494-2017',
    officialReference: 'OIV-OENO 494-2017',
    title: 'Clarification des vins par les protéines végétales issues de pois et de pomme de terre',
    family: 'pratiques',
    domain: 'Clarification & Collage',
    category: 'Vins',
    adoptionDate: '02/06/2017',
    adoptionYear: 2017,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    pdfUrl: 'https://www.oiv.int/public/medias/resolutions/OIV-OENO-494-2017.pdf',
    summary: 'Adjonction d\'isolats de protéines végétales (Pisum sativum et Solanum tuberosum) pour la clarification, l\'élimination des composés phénoliques oxydés et la débourbage.',
    oenologicalObjectives: [
      'Clarification rapide des moûts et des vins.',
      'Alternative exempte d\'allergènes aux colles animales traditionnelles (caséine, albumine d\'œuf, gélatine, ichtyocolle).',
      'Affinement tannique et diminution de l\'astringence des vins rouges.'
    ],
    prescriptions: [
      'Les protéines végétales doivent provenir exclusivement d\'espèces non OGM.',
      'Conformité obligatoire avec les monographies correspondantes du Codex œnologique.',
      'Dosage adapté après essais préalables au laboratoire (tests en éprouvettes).'
    ],
    limitsAndDoses: 'Dose d\'emploi usuelle : 10 à 30 g/hL (dose maximale technique : 50 g/hL).',
    substanceName: 'Protéines de pois et de pomme de terre',
    euRegulation: {
      euStatus: 'autorise_ue',
      primaryReference: 'Règlement (UE) 2019/934 — Annexe I, Partie A, Tableau 1',
      prevalenceRule: 'Pleinement autorisé dans l\'UE. Ne nécessite pas d\'étiquetage d\'allergène obligatoire au sens du Règlement (UE) 1169/2011.',
      euLimitsAndConditions: 'Dose conforme aux bonnes pratiques œnologiques.'
    },
    versions: [
      {
        id: 'v2017-prot',
        versionLabel: 'Version 2017',
        adoptionYear: 2017,
        extractedText: 'Collage œnologique des moûts et des vins par dérivés protéiques végétaux.',
        prescriptions: ['Sans allergène.'],
        limitsAndDoses: '50 g/hL max',
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-08-30'
  },
  {
    id: 'coei-1-acifum',
    officialReference: 'COEI-1-ACIFUM',
    title: 'Codex œnologique international : Monographie Acide Fumarique',
    family: 'codex',
    domain: 'Spécifications de pureté chimique',
    category: 'Produits',
    adoptionDate: '12/07/2021',
    adoptionYear: 2021,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/codex-oenologique-international',
    summary: 'Monographie établissant les critères d\'identité, de pureté, de solubilité et de teneur maximale en impuretés pour l\'acide fumarique à usage œnologique.',
    oenologicalObjectives: [
      'Garantir l\'innocuité toxicologique du produit commercialisé.',
      'Fixer les seuils limites en acide maléique, métaux lourds (Pb, As, Hg) et résidus de synthèse.'
    ],
    prescriptions: [
      'Teneur minimale en acide fumarique : 99,5 % sur produit anhydre.',
      'Acide maléique : inférieur à 0,05 % (500 mg/kg).',
      'Plomb (Pb) : < 2 mg/kg.',
      'Arsenic (As) : < 3 mg/kg.',
      'Mercure (Hg) : < 1 mg/kg.',
      'Cendres sulfuriques : < 0,1 %.'
    ],
    limitsAndDoses: 'Pureté minimale : 99,5 %. Métaux lourds totaux < 10 mg/kg.',
    substanceName: 'Acide fumarique de grade œnologique',
    chemicalFormula: 'C4H4O4',
    casNumber: '110-17-8',
    euRegulation: {
      euStatus: 'autorise_ue',
      primaryReference: 'Règlement (UE) 2019/934 — Annexe I, Partie A & Règlement (UE) 231/2012 (E297)',
      prevalenceRule: 'Le produit employé dans l\'Union européenne doit satisfaire simultanément aux critères de la monographie OIV et aux spécifications du Règlement additifs (UE) n° 231/2012.',
      euLimitsAndConditions: 'Grade additif alimentaire E297.'
    },
    versions: [
      {
        id: 'v2021-codex-acifum',
        versionLabel: 'Monographie 2021',
        adoptionYear: 2021,
        extractedText: 'Description organoleptique : cristaux blancs ou poudre cristalline inodore. Solubilité dans l\'eau : environ 4,9 g/L à 20°C et 9,8 g/L à 30°C.',
        prescriptions: ['Teneur >= 99.5 %.'],
        limitsAndDoses: 'Pureté >= 99.5 %',
        isCurrent: true
      }
    ],
    relatedDocuments: [
      {
        id: 'oiv-oeno-738-2025',
        officialReference: 'OIV-OENO 738-2025',
        title: 'Traitement des moûts par l\'acide fumarique',
        relationType: 'cite'
      },
      {
        id: 'oiv-oeno-581a-2021',
        officialReference: 'OIV-OENO 581A-2021',
        title: 'Traitement des vins par l\'acide fumarique',
        relationType: 'cite'
      }
    ],
    lastCheckedDate: '2026-10-12'
  },
  {
    id: 'oiv-ma-as323-04',
    officialReference: 'OIV-MA-AS323-04',
    title: 'Dosage de l\'acide fumarique dans les vins par chromatographie liquide haute performance (HPLC)',
    family: 'methodes',
    domain: 'Méthodes d\'analyse physico-chimique',
    category: 'Analyses',
    adoptionDate: '15/06/2018',
    adoptionYear: 2018,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/recueil-des-methodes-internationales-danalyse-des-vins-et-des-mouts',
    summary: 'Méthode d\'analyse de référence de Type IV pour la séparation et la quantification de l\'acide fumarique dans les moûts et les vins par HPLC avec détection spectrophotométrique UV à 210 nm.',
    oenologicalObjectives: [
      'Contrôler le respect du plafond de 600 mg/L imposé par le Code des pratiques œnologiques.',
      'Vérifier l\'absence d\'acide fumarique dans les vins d\'AOP/IGP interdisant cette pratique.',
      'Détecter d\'éventuelles additions frauduleuses.'
    ],
    prescriptions: [
      'Colonne d\'échange d\'ions ou colonne C18 à phase inverse adaptée aux acides organiques faibles.',
      'Limite de détection (LOD) de la méthode : 5 mg/L.',
      'Limite de quantification (LOQ) : 15 mg/L.',
      'Filtration de l\'échantillon sur membrane 0,45 µm obligatoire avant injection.'
    ],
    limitsAndDoses: 'Plage de dosage validée : 20 mg/L à 1000 mg/L.',
    euRegulation: {
      euStatus: 'non_applicable',
      primaryReference: 'Règlement (UE) 2019/934 — Article 3 (Méthodes d\'analyse applicables)',
      prevalenceRule: 'En vertu de l\'article 3 du Règlement (UE) 2019/934, en l\'absence de méthode d\'analyse fixée par les règlements européens, les méthodes du Recueil de l\'OIV sont juridiquement applicables par les laboratoires officiels de contrôle.',
      euLimitsAndConditions: 'Méthode reconnue pour le contrôle officiel par les services de répression des fraudes (DGCCRF, etc.).'
    },
    versions: [
      {
        id: 'v2018-methode',
        versionLabel: 'Méthode OIV 2018',
        adoptionYear: 2018,
        extractedText: 'Dosage chromatographique HPLC-UV à 210 nm après dilution éventuelle.',
        prescriptions: ['Validation inter-laboratoires selon ISO 5725.'],
        limitsAndDoses: 'LOQ: 15 mg/L',
        isCurrent: true
      }
    ],
    relatedDocuments: [
      {
        id: 'oiv-oeno-738-2025',
        officialReference: 'OIV-OENO 738-2025',
        title: 'Traitement des moûts par l\'acide fumarique',
        relationType: 'methode_associee'
      }
    ],
    lastCheckedDate: '2026-09-01'
  },
  {
    id: 'oiv-eco-687-2023',
    officialReference: 'OIV-ECO 687-2023',
    title: 'Mise à jour de la norme internationale pour l\'étiquetage des vins : communication dématérialisée (e-labels)',
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '09/06/2023',
    adoptionYear: 2023,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins',
    summary: 'Règles et recommandations pour la transmission des informations nutritionnelles et de la liste des ingrédients des vins via des moyens électroniques (QR code / e-labels).',
    oenologicalObjectives: [
      'Harmoniser les mentions obligatoires et facultatives à l\'échelle mondiale.',
      'Garantir l\'absence de collecte de données de suivi commercial ou de traçage publicitaire sur les plateformes d\'e-labels.'
    ],
    prescriptions: [
      'Le QR code ou support numérique doit renvoyer exclusivement à une page neutre dédiée aux informations légales.',
      'Aucun message publicitaire ni lien vers une boutique marchande ne doit figurer sur cette page.',
      'La valeur énergétique (kJ et kcal pour 100 ml) doit demeurer imprimée en clair sur l\'étiquette physique dans les juridictions qui le requièrent.'
    ],
    limitsAndDoses: 'Tolérance sur la valeur énergétique : +/- 20% par rapport à l\'analyse réelle.',
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: 'Règlement (UE) 2021/2117 modifiant le Règlement (UE) n° 1308/2013 (OCM)',
      amendmentReference: 'Lignes directrices UE de la Commission C/2023/1190',
      prevalenceRule: 'Le droit de l\'UE rend obligatoire depuis le 8 décembre 2023 l\'indication de la valeur énergétique et des ingrédients pour tout vin produit après cette date. L\'e-label est strictement subordonné au respect des critères de non-traçage de l\'article 119.',
      euLimitsAndConditions: 'Le symbole "E" doit accompagner la valeur énergétique sur l\'étiquette physique si la liste complète est dématérialisée.'
    },
    versions: [
      {
        id: 'v2023-eco',
        versionLabel: 'Version OIV 2023',
        adoptionYear: 2023,
        extractedText: 'Norme d\'étiquetage électronique et principes d\'accessibilité consommateur.',
        prescriptions: ['Neutre et sans tracking.'],
        limitsAndDoses: 'Valeur énergétique au format standardisé.',
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-10-25'
  },
  {
    id: 'oiv-oeno-674a-2022',
    officialReference: 'OIV-OENO 674A-2022',
    title: 'Utilisation de levures inactivées à niveau garanti de glutathion pour la conservation des vins',
    family: 'pratiques',
    domain: 'Protection antioxydante & Arômes',
    category: 'Vins',
    adoptionDate: '04/11/2022',
    adoptionYear: 2022,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    pdfUrl: 'https://www.oiv.int/public/medias/resolutions/OIV-OENO-674A-2022.pdf',
    summary: 'Adjonction de levures inactivées enrichies naturellement en glutathion réduit (GSH) pour protéger les arômes variétaux sensibles (thiols volatils, terpènes) contre l\'oxydation prématurée.',
    oenologicalObjectives: [
      'Protéger les arômes des vins blancs et rosés lors de l\'élevage et du stockage.',
      'Piéger les quinones et dérivés quinoniques issus de l\'oxydation des polyphénols.',
      'Permettre une réduction des teneurs en SO2 libre en fin de vinification.'
    ],
    prescriptions: [
      'Le glutathion doit provenir exclusivement de la biomasse de levures et ne peut être apporté sous forme d\'acide aminé pur de synthèse.',
      'Conformité stricte à la monographie correspondante du Codex œnologique.',
      'Dose calculée pour ne pas dépasser le plafond fixé pour le glutathion total apporté.'
    ],
    limitsAndDoses: 'Dose maximale de produit apportant au plus 20 mg/L de glutathion dans le vin.',
    substanceName: 'Levures inactivées à niveau garanti en glutathion',
    euRegulation: {
      euStatus: 'autorise_ue',
      primaryReference: 'Règlement (UE) 2019/934 — Annexe I, Partie A, Tableau 1',
      prevalenceRule: 'Autorisé dans l\'Union européenne pour la conservation des vins sous réserve du respect du plafond de 20 mg/L de glutathion apporté.',
      euLimitsAndConditions: 'Apport de glutathion strictement limité à 20 mg/L.'
    },
    versions: [
      {
        id: 'v2022-gsh',
        versionLabel: 'Version 2022',
        adoptionYear: 2022,
        extractedText: 'Addition de levures inactivées avec teneur minimale garantie en glutathion réduit.',
        prescriptions: ['Interdiction du glutathion chimique pur.'],
        limitsAndDoses: '20 mg/L de GSH apporté max.',
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-09-18'
  }
];

/**
 * Metadata of the corpus shipped with the application.
 *
 * There is NO automatic synchronisation: the corpus is updated by hand, one
 * version at a time. Bump `version` and `updatedAt` in the same commit as the
 * data change, then run `npm run corpus:check`.
 */
export const CORPUS_META = {
  version: '2026.1',
  updatedAt: '2026-11-10',
  updatedAtLabel: new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date('2026-11-10')),
  source: 'OIV (oiv.int) et EUR-Lex — Règlement délégué (UE) 2019/934'
} as const;

export const FAMILIES_META: { id: string; label: string; count: number; desc: string }[] = [
  {
    id: 'pratiques',
    label: 'Code des pratiques œnologiques',
    count: 8,
    desc: 'Traitements, procédés de vinification, autorisations pour moûts et vins.'
  },
  {
    id: 'codex',
    label: 'Codex œnologique international',
    count: 1,
    desc: 'Spécifications de pureté chimique, métaux lourds et caractéristiques des additifs.'
  },
  {
    id: 'methodes',
    label: 'Méthodes internationales d\'analyse',
    count: 1,
    desc: 'Protocoles normalisés d\'analyses physico-chimiques et microbiologiques (HPLC, CPG, etc.).'
  },
  {
    id: 'etiquetage',
    label: 'Norme d\'étiquetage des vins',
    count: 1,
    desc: 'Mentions obligatoires, valeurs nutritionnelles et normes e-labels.'
  },
  {
    id: 'resolutions',
    label: 'Résolutions Assemblée Générale',
    count: 0,
    desc: 'Actes officiels adoptés annuellement par les États membres de l\'OIV.'
  },
  {
    id: 'techniques',
    label: 'Documents & Rapports techniques',
    count: 0,
    desc: 'Guides d\'experts, bilans annuels et synthèses de commissions scientifiques.'
  }
];

export const EU_LEGAL_REFERENCES = [
  {
    title: 'Règlement délégué (UE) 2019/934 de la Commission',
    date: '12 mars 2019 (mis à jour en 2024)',
    celex: '32019R0934',
    url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02019R0934-20241128',
    summary: 'Règlement de base fixant les pratiques œnologiques autorisées dans l\'Union européenne, les catégories de produits de la vigne et les restrictions applicables.',
    keyPrinciple: 'L\'autorisation OIV ne vaut pas autorisation UE automatique. Seules les pratiques expressément inscrites aux Annexes du règlement 2019/934 sont licites dans l\'UE.'
  },
  {
    title: 'Publication C/2025/1829 au Journal officiel de l\'UE',
    date: '31 mars 2025',
    celex: '52025XC01829',
    url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A52025XC01829',
    summary: 'Publication officielle relative aux fiches du Code des pratiques œnologiques de l\'OIV mentionnées dans le cadre du règlement (UE) 2019/934.',
    keyPrinciple: 'Confirme solennellement que les dispositions de l\'Union européenne prévalent toujours sur les fiches de l\'OIV en cas de divergence ou de condition plus restrictive.'
  },
  {
    title: 'Règlement délégué (UE) 2024/3085',
    date: '28 novembre 2024',
    celex: '32024R3085',
    url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32024R3085',
    summary: 'Dernière modification substantielle du règlement 2019/934 actualisant les pratiques œnologiques et les procédés physiques autorisés.',
    keyPrinciple: 'Intégration échelonnée des dernières résolutions OIV validées par la Commission européenne.'
  }
];

export const OFFICIAL_LIVE_SOURCES: import('../types/oiv').OfficialSourceRepo[] = [
  {
    id: 'oiv-resolutions-live',
    name: 'OIV — Résolutions récentes & Normes officielles',
    organization: 'OIV',
    description: 'Répertoire officiel de toutes les résolutions votées par l\'Assemblée générale de l\'OIV, avec téléchargement direct des PDF intégraux.',
    directUrl: 'https://www.oiv.int/fr/ce-que-nous-faisons/normes?items_per_page=25&search_title_body=&type%5Bresolutions%5D=resolutions',
    updateFrequency: 'Mise à jour en continu / Sessions annuelles OIV',
    lastVerifiedDate: 'Novembre 2026',
    isLiveMonitoring: true,
    celexOrCode: 'OIV-RESOLUTIONS'
  },
  {
    id: 'oiv-code-pratiques',
    name: 'OIV — Code international des pratiques œnologiques',
    organization: 'OIV',
    description: 'Portail officiel du Code électronique des pratiques œnologiques avec recherche par mot-clé, fiche technique et chapitre.',
    directUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    updateFrequency: 'Mise à jour immédiate après chaque Assemblée',
    lastVerifiedDate: 'Novembre 2026',
    isLiveMonitoring: true,
    celexOrCode: 'OIV-CODE-OENO'
  },
  {
    id: 'oiv-codex',
    name: 'OIV — Codex œnologique international',
    organization: 'OIV',
    description: 'Monographies de pureté des produits et additifs, spécifications physico-chimiques et limites de contaminants.',
    directUrl: 'https://www.oiv.int/fr/standards/codex-oenologique-international',
    updateFrequency: 'Actualisation continue',
    lastVerifiedDate: 'Novembre 2026',
    isLiveMonitoring: true,
    celexOrCode: 'OIV-CODEX'
  },
  {
    id: 'oiv-methodes-analyse',
    name: 'OIV — Recueil des méthodes internationales d\'analyse',
    organization: 'OIV',
    description: 'Méthodes de référence officielles de Type I à IV pour les laboratoires d\'analyse accrédités (HPLC, CPG, spectrophotométrie).',
    directUrl: 'https://www.oiv.int/fr/standards/recueil-des-methodes-internationales-danalyse-des-vins-et-des-mouts',
    updateFrequency: 'Actualisation annuelle',
    lastVerifiedDate: 'Novembre 2026',
    isLiveMonitoring: true,
    celexOrCode: 'OIV-MA'
  },
  {
    id: 'eurlex-2019-934-consolidated',
    name: 'EUR-Lex — Règlement (UE) 2019/934 (Version consolidée en vigueur)',
    organization: 'Union Européenne (EUR-Lex)',
    description: 'Texte consolidé officiel reprenant toutes les modifications successives des pratiques œnologiques autorisées dans l\'UE.',
    directUrl: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02019R0934-20241128',
    updateFrequency: 'Dernière consolidation officielle : 28 nov. 2024',
    lastVerifiedDate: 'Novembre 2026',
    isLiveMonitoring: true,
    celexOrCode: '02019R0934-20241128'
  },
  {
    id: 'eurlex-2024-3085',
    name: 'EUR-Lex — Règlement délégué (UE) 2024/3085',
    organization: 'Union Européenne (EUR-Lex)',
    description: 'Dernière modification substantielle du règlement (UE) 2019/934 portant sur les pratiques et traitements œnologiques.',
    directUrl: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32024R3085',
    updateFrequency: 'Publié au JOUE L série',
    lastVerifiedDate: 'Novembre 2026',
    isLiveMonitoring: true,
    celexOrCode: '32024R3085'
  },
  {
    id: 'joue-c-2025-1829',
    name: 'JOUE — Publication C/2025/1829 du 31 mars 2025',
    organization: 'Journal Officiel (JOUE)',
    description: 'Publication officielle des fiches du Code OIV visées par le règlement UE et consacrant solennellement la primauté du droit européen.',
    directUrl: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A52025XC01829',
    updateFrequency: 'Référence officielle JOUE C 2025/1829',
    lastVerifiedDate: 'Novembre 2026',
    isLiveMonitoring: true,
    celexOrCode: '52025XC01829'
  },
  {
    id: 'eurlex-live-query',
    name: 'EUR-Lex — Recherche en direct : Nouveaux actes législatifs viticoles',
    organization: 'Union Européenne (EUR-Lex)',
    description: 'Requête EUR-Lex pré-remplie pour retrouver les règlements délégués et d\'exécution relatifs aux pratiques œnologiques.',
    directUrl: 'https://eur-lex.europa.eu/search.html?scope=EURLEX&text=pratiques+oenologiques&lang=fr&type=quick',
    updateFrequency: 'Actualisation au fil de l\'eau sur EUR-Lex',
    lastVerifiedDate: 'Novembre 2026',
    isLiveMonitoring: true,
    celexOrCode: 'EURLEX-LIVE'
  }
];

