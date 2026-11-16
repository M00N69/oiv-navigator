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
  },
  {
    id: 'oiv-oeno-427-2010',
    officialReference: 'OIV-OENO 427-2010 (mis à jour par OIV-SECSAN 709-2022)',
    title: "Étiquetage des allergènes dans les vins : sulfites, protéines de lait et d'œuf, gélatine de poisson",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '01/01/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins',
    summary: "Encadre la déclaration obligatoire des substances allergènes présentes dans les vins, notamment les sulfites, les protéines de lait et d'œuf et la gélatine de poisson, conformément au droit de l'Union européenne.",
    oenologicalObjectives: [
      "Garantir l'information du consommateur sur les allergènes présents dans le vin.",
      "Harmoniser les mentions allergènes avec le Règlement (UE) n° 1169/2011."
    ],
    prescriptions: [
      "Tout vin contenant des sulfites à une concentration supérieure à 10 mg/L (exprimés en SO2 total) doit porter la mention « contient des sulfites » ou « contient du dioxyde de soufre ».",
      "Les protéines de lait (caséine) et d'œuf (ovalbumine, lysozyme) utilisées comme auxiliaires technologiques doivent être déclarées sur l'étiquette, sauf si leur absence dans le produit fini est démontrée.",
      "La gélatine de poisson et la colle de poisson (ichtyocolle) doivent être déclarées comme allergène lorsqu'elles sont utilisées.",
      "Les mentions allergènes doivent figurer dans la même police et le même champ visuel que les autres mentions obligatoires."
    ],
    limitsAndDoses: "Seuil de déclaration des sulfites : 10 mg/L (SO2 total).",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1169/2011, annexe II (substances allergènes)",
      amendmentReference: "Règlement (UE) 2019/934, annexe II",
      prevalenceRule: "Le droit de l'Union européenne prime : les mentions allergènes sont obligatoires dans l'UE même si l'OIV les présente comme recommandations.",
      euLimitsAndConditions: "L'absence d'allergène dans le produit fini doit être justifiée par une analyse ou une démonstration technique documentée."
    },
    versions: [
      {
        id: 'v2024-allergenes',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Norme d'étiquetage et déclaration des allergènes dans les vins.",
        prescriptions: ["Déclaration obligatoire des sulfites > 10 mg/L.", "Déclaration des protéines de lait et d'œuf utilisées."],
        limitsAndDoses: "Seuil sulfites : 10 mg/L.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-sulfites-vins-2024',
    officialReference: "OIV — Pratiques œnologiques : dioxyde de soufre (SO2)",
    title: "Sulfites dans les vins : limites maximales et conditions d'emploi",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '01/01/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    summary: "Fixe les teneurs maximales en dioxyde de soufre total dans les vins selon leur type, en cohérence avec le Règlement délégué (UE) 2019/934.",
    oenologicalObjectives: [
      "Limiter la teneur en sulfites pour la sécurité du consommateur.",
      "Encadrer l'emploi du SO2 comme agent antimicrobien et antioxydant."
    ],
    prescriptions: [
      "Le SO2 total ne doit pas dépasser les limites fixées selon le type de vin et sa teneur en sucres.",
      "La déclaration « contient des sulfites » est obligatoire au-delà de 10 mg/L (SO2 total).",
      "L'ajout de SO2 doit être justifié par le besoin de protection microbiologique et antioxydante."
    ],
    limitsAndDoses: "Limites UE (Règlement délégué (UE) 2019/934, annexe II, partie B) : vins rouges 150 mg/L ; vins blancs et rosés 200 mg/L ; vins à teneur en sucres ≥ 5 g/L + 50 mg/L ; vins liquoreux jusqu'à 400 mg/L ; vins mousseux 235 mg/L (290 pour demi-sec/doux).",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/934, annexe II, partie B",
      prevalenceRule: "Les limites de l'UE prévalent sur les recommandations de l'OIV en cas de divergence.",
      euLimitsAndConditions: "Les limites sont modulées selon le type de vin et la teneur en sucres résiduels (voir tableau de l'annexe II)."
    },
    versions: [
      {
        id: 'v2024-sulfites',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Limites maximales de SO2 total selon le type de vin.",
        prescriptions: ["SO2 total dans les limites fixées.", "Déclaration au-delà de 10 mg/L."],
        limitsAndDoses: "150 (rouge) / 200 (blanc-rosé) / +50 si sucres ≥ 5 g/L / jusqu'à 400 (liquoreux) mg/L.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-oeno-secsan-520-2014',
    officialReference: 'OIV-OENO-SECSAN 520-2014 (mis à jour par OIV-SECSAN 710-2022)',
    title: "Protéines de lait et d'œuf comme auxiliaires technologiques (collage) — conditions et déclaration",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '01/01/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    summary: "Encadre l'emploi des protéines de lait (caséine) et d'œuf (ovalbumine, lysozyme) comme agents de collage/clarification et leur déclaration comme allergènes.",
    oenologicalObjectives: [
      "Clarifier et stabiliser les vins par collage protéique.",
      "Garantir la sécurité des consommateurs allergiques."
    ],
    prescriptions: [
      "L'emploi de caséine, d'ovalbumine et de lysozyme est autorisé comme auxiliaire technologique dans les conditions fixées par le code des pratiques œnologiques.",
      "La déclaration allergène est obligatoire si la protéine est présente dans le produit fini à un niveau détectable.",
      "L'absence de résidus dans le vin fini doit pouvoir être démontrée par une analyse ou une justification technique.",
      "L'emploi doit être compatible avec le statut UE (annexe II du Règlement 2019/934)."
    ],
    limitsAndDoses: "Doses selon le code des pratiques œnologiques et les conditions d'emploi précisées par l'OIV.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1169/2011, annexe II ; Règlement délégué (UE) 2019/934",
      prevalenceRule: "Le droit de l'UE prime : toute protéine de lait ou d'œuf présente dans le produit fini doit être déclarée.",
      euLimitsAndConditions: "La démonstration d'absence de résidus dispense de la déclaration dans certains cas, sous réserve de justificatif."
    },
    versions: [
      {
        id: 'v2024-proteines',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Conditions d'emploi des protéines de lait et d'œuf et déclaration allergène.",
        prescriptions: ["Autorisé comme auxiliaire.", "Déclaration si résidus détectables."],
        limitsAndDoses: "Selon code des pratiques.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-geatine-poisson-2024',
    officialReference: "OIV — Pratiques œnologiques : gélatine de poisson",
    title: "Gélatine de poisson et colle de poisson (ichtyocolle) : usage comme auxiliaire technologique et allergène",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '01/01/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    summary: "Encadre l'emploi de la gélatine de poisson et de la colle de poisson pour la clarification des vins et leur déclaration comme allergène.",
    oenologicalObjectives: [
      "Clarifier les vins par collage à la gélatine de poisson.",
      "Garantir l'information des consommateurs allergiques au poisson."
    ],
    prescriptions: [
      "L'emploi de la gélatine de poisson et de la colle de poisson est autorisé comme auxiliaire technologique dans les conditions fixées par le code des pratiques œnologiques.",
      "La déclaration « poisson » comme allergène est obligatoire si des résidus sont présents dans le produit fini.",
      "L'absence de résidus doit être démontrée par une analyse ou une justification technique.",
      "L'emploi doit être compatible avec le statut UE."
    ],
    limitsAndDoses: "Doses selon le code des pratiques œnologiques.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1169/2011, annexe II ; Règlement délégué (UE) 2019/934",
      prevalenceRule: "Le droit de l'UE prime : la présence de poisson dans le produit fini doit être déclarée.",
      euLimitsAndConditions: "La démonstration d'absence de résidus dispense de la déclaration, sous réserve de justificatif."
    },
    versions: [
      {
        id: 'v2024-geatine',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Conditions d'emploi de la gélatine de poisson et déclaration allergène.",
        prescriptions: ["Autorisé comme auxiliaire.", "Déclaration si résidus détectables."],
        limitsAndDoses: "Selon code des pratiques.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-oeno-581b-2024',
    officialReference: 'OIV-OENO 581B-2024',
    title: "Traitement des vins à l'acide fumarique pour l'acidification",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '19/07/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/node/3807/download/pdf',
    summary: "Encadre l'acidification des moûts et des vins pour corriger l'acidité naturelle, par voies chimique, microbiologique ou physique, dans les conditions fixées par le code des pratiques œnologiques.",
    oenologicalObjectives: [
      "Corriger l'acidité insuffisante des moûts et des vins.",
      "Améliorer l'équilibre et la stabilité microbiologique."
    ],
    prescriptions: [
      "L'acidification est autorisée dans les conditions fixées par le code des pratiques œnologiques (acides tartrique, malique, citrique, lactique selon les cas).",
      "Les doses et les modes d'emploi doivent respecter les limites fixées par l'OIV et, le cas échéant, par le droit de l'Union européenne.",
      "L'acidification doit être justifiée par l'acidité naturelle du moût ou du vin et tracée dans le registre de chai.",
      "Les pratiques d'acidification sont soumises à la primauté du droit de l'UE."
    ],
    limitsAndDoses: "Acides autorisés et doses selon le code des pratiques œnologiques et l'annexe II du Règlement (UE) 2019/934.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/934, annexe II",
      prevalenceRule: "Le droit de l'UE prime : seules les pratiques et doses expressément autorisées sont licites.",
      euLimitsAndConditions: "Les limites et conditions sont celles de l'annexe II du Règlement 2019/934."
    },
    versions: [
      {
        id: 'v2024-acidification',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Acidification des moûts et des vins selon le code des pratiques œnologiques.",
        prescriptions: ["Acidification autorisée dans les conditions fixées.", "Traçabilité obligatoire."],
        limitsAndDoses: "Selon code des pratiques et annexe II UE.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-stabilisation-tartrique-2024',
    officialReference: "OIV — Pratiques œnologiques : stabilisation tartrique",
    title: "Stabilisation tartrique des vins : électrodialyse, échangeurs cationiques, traitement au froid",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '01/01/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    summary: "Encadre la stabilisation tartrique des vins par électrodialyse, échangeurs cationiques, traitement au froid, acide métatartrique et autres auxiliaires, afin d'éviter la précipitation du bitartrate de potassium.",
    oenologicalObjectives: [
      "Éviter la précipitation du tartre dans le vin en bouteille.",
      "Garantir la stabilité physico-chimique du vin."
    ],
    prescriptions: [
      "La stabilisation tartrique est autorisée selon les méthodes reconnues par le code des pratiques œnologiques (électrodialyse, échangeurs cationiques, traitement au froid, acide métatartrique, gomme arabique, polyaspartate de potassium).",
      "Chaque traitement doit être tracé et compatible avec le statut UE.",
      "L'emploi d'auxiliaires technologiques doit respecter les conditions fixées par l'OIV."
    ],
    limitsAndDoses: "Doses et conditions selon le code des pratiques œnologiques et l'annexe II du Règlement (UE) 2019/934.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/934, annexe II",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les auxiliaires et doses autorisés sont ceux de l'annexe II du Règlement 2019/934."
    },
    versions: [
      {
        id: 'v2024-tartrate',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Stabilisation tartrique par électrodialyse, échangeurs cationiques et traitement au froid.",
        prescriptions: ["Stabilisation autorisée selon les méthodes reconnues.", "Traçabilité obligatoire."],
        limitsAndDoses: "Selon code des pratiques et annexe II UE.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-tracabilite-vins-2024',
    officialReference: "OIV — Traçabilité et registres vitivinicoles",
    title: "Traçabilité dans la filière vitivinicole : registres et identification des lots",
    family: 'etiquetage',
    domain: 'Traçabilité & Contrôle',
    category: 'Général',
    adoptionDate: '01/01/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins',
    summary: "Encadre la traçabilité des produits vitivinicoles, de la vigne à la mise en marché, au moyen de registres et d'identifiants de lot, pour garantir l'authenticité et la sécurité.",
    oenologicalObjectives: [
      "Garantir l'authenticité et la traçabilité des vins.",
      "Permettre le retrait ciblé en cas d'incident."
    ],
    prescriptions: [
      "Les opérateurs doivent tenir des registres permettant d'identifier l'origine, les mouvements et les traitements des produits.",
      "Les lots doivent être identifiables par un numéro de lot reporté sur l'étiquette ou le document commercial.",
      "Les auxiliaires technologiques et traitements appliqués doivent être consignés.",
      "La traçabilité doit être compatible avec les exigences du droit de l'UE (Règlement (CE) 178/2002)."
    ],
    limitsAndDoses: "Registres tenus selon les modalités nationales et les normes OIV.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (CE) n° 178/2002 (traçabilité alimentaire)",
      prevalenceRule: "Le droit de l'UE prime en matière de traçabilité alimentaire.",
      euLimitsAndConditions: "Obligation de traçabilité « un pas en avant, un pas en arrière » pour tous les opérateurs."
    },
    versions: [
      {
        id: 'v2024-tracabilite',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Traçabilité et registres vitivinicoles.",
        prescriptions: ["Registres obligatoires.", "Identification des lots."],
        limitsAndDoses: "Selon modalités nationales.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-haccp-vitivinicole-2024',
    officialReference: "OIV — Bonnes pratiques et HACCP dans la filière vitivinicole",
    title: "Sécurité sanitaire et HACCP dans les caves et chais vitivinicoles",
    family: 'techniques',
    domain: 'Sécurité sanitaire & Qualité',
    category: 'Général',
    adoptionDate: '01/01/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    summary: "Présente les principes HACCP et les bonnes pratiques d'hygiène applicables dans la filière vitivinicole, en complément du Règlement (CE) 852/2004.",
    oenologicalObjectives: [
      "Garantir la sécurité sanitaire des vins.",
      "Structurer la démarche HACCP dans les caves."
    ],
    prescriptions: [
      "Les opérateurs doivent mettre en place un système HACCP adapté à leur activité.",
      "Les dangers microbiologiques, chimiques et physiques doivent être identifiés et maîtrisés.",
      "Les points critiques de contrôle (CCP) doivent être surveillés et documentés.",
      "Le système doit être compatible avec le Règlement (CE) 852/2004 et les guides de bonnes pratiques."
    ],
    limitsAndDoses: "Selon le plan HACCP de l'établissement et la réglementation nationale.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (CE) n° 852/2004 (hygiène des denrées alimentaires)",
      prevalenceRule: "Le droit de l'UE prime en matière d'hygiène alimentaire.",
      euLimitsAndConditions: "Obligation de mise en place d'une procédure fondée sur les principes HACCP."
    },
    versions: [
      {
        id: 'v2024-haccp',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Principes HACCP et bonnes pratiques d'hygiène vitivinicoles.",
        prescriptions: ["Système HACCP obligatoire.", "Documentation des CCP."],
        limitsAndDoses: "Selon plan HACCP.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-eco-676-2024',
    officialReference: 'OIV-ECO 676-2024',
    title: "Mise à jour de la Norme internationale pour l'étiquetage des vins — e-label, déclaration des éléments nutritifs et indication des ingrédients",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '19/07/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/node/3814/download/pdf',
    summary: "Encadre l'indication de la valeur énergétique et de la liste des ingrédients sur l'étiquette des vins, en cohérence avec le Règlement (UE) 2021/2117.",
    oenologicalObjectives: [
      "Informer le consommateur sur la valeur énergétique et la composition du vin.",
      "Harmoniser l'étiquetage au niveau international."
    ],
    prescriptions: [
      "La valeur énergétique (kJ et kcal pour 100 ml) doit être indiquée sur l'étiquette physique.",
      "La liste des ingrédients peut être dématérialisée via un e-label (QR code) dans les conditions fixées par l'OIV et l'UE.",
      "Les mentions doivent être lisibles, indélébiles et visibles.",
      "La page d'e-label doit être neutre, sans publicité ni traçage."
    ],
    limitsAndDoses: "Valeur énergétique avec tolérance de +/- 20 %.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) 2021/2117 modifiant le Règlement (UE) n° 1308/2013",
      prevalenceRule: "Le droit de l'UE rend obligatoire l'indication depuis le 8 décembre 2023.",
      euLimitsAndConditions: "Le symbole « E » accompagne la valeur énergétique si la liste complète est dématérialisée."
    },
    versions: [
      {
        id: 'v2024-nutrition',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Étiquetage nutritionnel et e-labels.",
        prescriptions: ["Valeur énergétique obligatoire.", "E-label neutre."],
        limitsAndDoses: "Tolérance +/- 20 %.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-mentions-geographiques-2024',
    officialReference: "OIV — Mentions géographiques et indications géographiques",
    title: "Mentions géographiques et indications géographiques (IG/AOP) sur les vins",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '01/01/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/ce-que-nous-faisons/giao-database-report',
    summary: "Encadre l'usage des mentions géographiques et des indications géographiques (IG/AOP) sur les vins, en cohérence avec le système de l'Union européenne.",
    oenologicalObjectives: [
      "Protéger l'origine géographique des vins.",
      "Garantir l'information du consommateur sur la provenance."
    ],
    prescriptions: [
      "Les mentions géographiques doivent correspondre à une aire de production définie et à un cahier des charges.",
      "L'usage d'une indication géographique est réservé aux produits répondant aux conditions fixées.",
      "Les mentions doivent être conformes au droit de l'UE (Règlement (UE) 1308/2013)."
    ],
    limitsAndDoses: "Selon le cahier des charges de l'IG/AOP.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013 (OCM vitivinicole)",
      prevalenceRule: "Le droit de l'UE prime en matière d'indications géographiques.",
      euLimitsAndConditions: "Enregistrement et contrôle selon le Règlement (UE) 1308/2013."
    },
    versions: [
      {
        id: 'v2024-mentions-geo',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Mentions géographiques et indications géographiques.",
        prescriptions: ["Mentions conformes au cahier des charges.", "Respect du droit UE."],
        limitsAndDoses: "Selon cahier des charges.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-deacidification-vins-2024',
    officialReference: "OIV — Pratiques œnologiques : désacidification des moûts et des vins",
    title: "Désacidification des moûts et des vins : ajustement de l'acidité à la baisse",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '01/01/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    summary: "Encadre la désacidification des moûts et des vins par voies physique, chimique ou microbiologique, dans les conditions fixées par le code des pratiques œnologiques.",
    oenologicalObjectives: [
      "Réduire l'acidité excessive des moûts et des vins.",
      "Améliorer l'équilibre sensoriel."
    ],
    prescriptions: [
      "La désacidification est autorisée par voies physique (électrodialyse, échangeurs), chimique (carbonate de potassium, bicarbonate) ou microbiologique (bactéries lactiques).",
      "Les traitements doivent être tracés et compatibles avec le droit de l'UE.",
      "Les doses et conditions sont celles fixées par le code des pratiques œnologiques et l'annexe II du Règlement (UE) 2019/934."
    ],
    limitsAndDoses: "Selon le code des pratiques œnologiques et l'annexe II du Règlement (UE) 2019/934.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/934, annexe II",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Seules les pratiques et doses expressément autorisées par l'UE sont licites."
    },
    versions: [
      {
        id: 'v2024-deacidification',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Désacidification des moûts et des vins.",
        prescriptions: ["Désacidification autorisée selon les voies reconnues.", "Traçabilité obligatoire."],
        limitsAndDoses: "Selon code des pratiques et annexe II UE.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-enzymes-clarification-2024',
    officialReference: "OIV — Pratiques œnologiques : enzymes",
    title: "Emploi des enzymes en œnologie : clarification, filtration, libération d'arômes",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '01/01/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    summary: "Encadre l'emploi des enzymes (pectinases, glucanases, protéases, etc.) pour la clarification, l'amélioration de la filtrabilité et la libération de composés aromatiques.",
    oenologicalObjectives: [
      "Clarifier les vins et améliorer leur filtrabilité.",
      "Libérer des composés aromatiques glycosylés."
    ],
    prescriptions: [
      "Les enzymes utilisées doivent être d'origine fongique ou microbienne et conformes au Codex œnologique international.",
      "L'emploi doit être justifié par un objectif technique (clarification, filtration, libération d'arômes).",
      "Les doses et conditions sont celles fixées par le code des pratiques œnologiques.",
      "L'emploi doit être compatible avec le statut UE."
    ],
    limitsAndDoses: "Doses selon le code des pratiques œnologiques et l'annexe II du Règlement (UE) 2019/934.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/934, annexe II",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Seules les enzymes expressément autorisées par l'UE sont licites."
    },
    versions: [
      {
        id: 'v2024-enzymes',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Emploi des enzymes en œnologie.",
        prescriptions: ["Enzymes conformes au Codex.", "Doses selon code des pratiques."],
        limitsAndDoses: "Selon code des pratiques et annexe II UE.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-collage-chitosane-2024',
    officialReference: "OIV — Pratiques œnologiques : collage au chitosane",
    title: "Collage au chitosane : clarification des moûts et des vins",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '01/01/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    summary: "Encadre le collage des moûts et des vins au chitosane d'origine fongique pour la clarification et le traitement anti-protéique, à une dose recommandée ≤ 100 g/hl.",
    oenologicalObjectives: [
      "Clarifier les moûts et les vins.",
      "Traiter les troubles protéiques."
    ],
    prescriptions: [
      "Le chitosane doit être d'origine fongique et conforme au Codex œnologique international.",
      "Les doses à utiliser sont déterminées après essais préliminaires ; la dose recommandée est ≤ 100 g/hl.",
      "Le chitosane est classé comme auxiliaire technologique (processing aid).",
      "L'emploi doit être compatible avec le statut UE."
    ],
    limitsAndDoses: "Dose recommandée ≤ 100 g/hl.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/934, annexe II",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Seul le chitosane d'origine fongique expressément autorisé est licite."
    },
    versions: [
      {
        id: 'v2024-chitosane',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Collage au chitosane (dose ≤ 100 g/hl).",
        prescriptions: ["Chitosane d'origine fongique.", "Dose ≤ 100 g/hl."],
        limitsAndDoses: "≤ 100 g/hl.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-stabilisation-microbiologique-2024',
    officialReference: "OIV — Pratiques œnologiques : stabilisation microbiologique",
    title: "Stabilisation microbiologique des vins : lysozyme, sorbate, DMDC, pasteurisation",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '01/01/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/code-international-des-pratiques-oenologiques',
    summary: "Encadre la stabilisation microbiologique des vins par lysozyme, sorbate de potassium, DMDC, pasteurisation et autres auxiliaires, pour prévenir les refermentations.",
    oenologicalObjectives: [
      "Prévenir les refermentations et les altérations microbiennes.",
      "Garantir la stabilité du vin en bouteille."
    ],
    prescriptions: [
      "La stabilisation microbiologique est autorisée par les méthodes reconnues par le code des pratiques œnologiques (lysozyme, sorbate de potassium, DMDC, pasteurisation, filtration stérilisante).",
      "Chaque traitement doit être tracé et compatible avec le statut UE.",
      "Les auxiliaires doivent être conformes au Codex œnologique international."
    ],
    limitsAndDoses: "Doses selon le code des pratiques œnologiques et l'annexe II du Règlement (UE) 2019/934.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/934, annexe II",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Seules les pratiques et doses expressément autorisées par l'UE sont licites."
    },
    versions: [
      {
        id: 'v2024-stab-micro',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Stabilisation microbiologique des vins.",
        prescriptions: ["Stabilisation autorisée selon les méthodes reconnues.", "Traçabilité obligatoire."],
        limitsAndDoses: "Selon code des pratiques et annexe II UE.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-oeno-723-2024',
    officialReference: 'OIV-OENO 723-2024',
    title: "Mise à jour de la monographie et du Code sur les matières protéiques d'origine végétale (suppression du blé)",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '19/07/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/node/3810/download/pdf',
    summary: "Met à jour la monographie et le Code sur les matières protéiques d'origine végétale en supprimant le blé, ce qui a un impact sur la déclaration des allergènes (gluten) dans les vins traités avec des protéines de blé.",
    oenologicalObjectives: [
      "Encadrer l'emploi des protéines végétales (pois, pomme de terre) comme auxiliaires technologiques.",
      "Clarifier le statut allergène du blé dans les vins."
    ],
    prescriptions: [
      "Le blé est retiré des matières protéiques d'origine végétale autorisées comme auxiliaires technologiques.",
      "Les protéines de pois et de pomme de terre restent autorisées dans les conditions fixées.",
      "La déclaration allergène (gluten) est liée à la présence de résidus détectables dans le produit fini."
    ],
    limitsAndDoses: "Doses selon le code des pratiques œnologiques et l'annexe II du Règlement (UE) 2019/934.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1169/2011, annexe II (gluten) ; Règlement délégué (UE) 2019/934",
      prevalenceRule: "Le droit de l'UE prime : la présence de gluten dans le produit fini doit être déclarée.",
      euLimitsAndConditions: "La démonstration d'absence de résidus dispense de la déclaration, sous réserve de justificatif."
    },
    versions: [
      {
        id: 'v2024-proteines-veg',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Mise à jour de la monographie sur les matières protéiques d'origine végétale (suppression du blé).",
        prescriptions: ["Blé retiré des auxiliaires autorisés.", "Pois et pomme de terre conservés."],
        limitsAndDoses: "Selon code des pratiques.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-oeno-732-2025',
    officialReference: 'OIV-OENO 732-2025',
    title: "Déshydratation partielle des moûts et concentration : base pour la déalcoolisation",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '21/11/2025',
    adoptionYear: 2025,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/node/4088/download/pdf',
    summary: "Cadre pour la déalcoolisation et la modification du degré alcoolique des vins, en cohérence avec le code des pratiques œnologiques et le droit de l'Union européenne (Règlement (UE) 2021/2117).",
    oenologicalObjectives: [
      "Permettre la production de vins à teneur réduite en alcool.",
      "Garantir la conformité avec la réglementation européenne."
    ],
    prescriptions: [
      "La déalcoolisation est autorisée par des techniques physiques (évaporation sous vide, osmose inverse, distillation sous vide, colonnes à cône tournant) dans les conditions fixées par le code des pratiques œnologiques.",
      "Le degré alcoolique ne peut être réduit en dessous des seuils fixés par la réglementation (vin à 0,5 % vol minimum pour être qualifié de vin).",
      "La déalcoolisation doit être tracée et compatible avec le statut UE.",
      "Les vins désalcoolisés doivent respecter les mentions d'étiquetage spécifiques (Règlement (UE) 2021/2117)."
    ],
    limitsAndDoses: "Degré alcoolique minimum : 0,5 % vol pour les vins partiellement désalcoolisés ; 0 % pour les boissons désalcoolisées (hors catégorie vin).",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) 2021/2117 modifiant le Règlement (UE) n° 1308/2013",
      prevalenceRule: "Le droit de l'UE prime : les conditions de déalcoolisation sont celles du Règlement (UE) 2021/2117.",
      euLimitsAndConditions: "Les techniques autorisées et les seuils sont ceux du Règlement (UE) 2021/2117."
    },
    versions: [
      {
        id: 'v2025-dealcoholisation',
        versionLabel: 'Version OIV 2025',
        adoptionYear: 2025,
        extractedText: "Déalcoolisation et modification du degré alcoolique des vins.",
        prescriptions: ["Techniques physiques autorisées.", "Traçabilité obligatoire."],
        limitsAndDoses: "Degré minimum 0,5 % vol.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-oeno-672b-2024',
    officialReference: 'OIV-OENO 672B-2024',
    title: "Traitement à la silice mésoporeuse fonctionnalisée (SMF) pour la stabilisation protéique des vins",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '19/07/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/node/3809/download/pdf',
    summary: "Autorise le traitement à la silice mésoporeuse fonctionnalisée (SMF) pour la stabilisation protéique des vins, en complément des auxiliaires technologiques existants.",
    oenologicalObjectives: [
      "Stabiliser les vins contre le trouble protéique.",
      "Réduire l'emploi de bentonite."
    ],
    prescriptions: [
      "Le traitement à la SMF est autorisé comme auxiliaire technologique dans les conditions fixées par le code des pratiques œnologiques.",
      "La SMF doit être conforme au Codex œnologique international.",
      "Le traitement doit être tracé et compatible avec le statut UE."
    ],
    limitsAndDoses: "Doses selon le code des pratiques œnologiques et l'annexe II du Règlement (UE) 2019/934.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/934, annexe II",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Seule la SMF expressément autorisée par l'UE est licite."
    },
    versions: [
      {
        id: 'v2024-smf',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Traitement à la silice mésoporeuse fonctionnalisée pour la stabilisation protéique.",
        prescriptions: ["SMF autorisée comme auxiliaire.", "Conformité au Codex."],
        limitsAndDoses: "Selon code des pratiques.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-oeno-740-2024',
    officialReference: 'OIV-OENO 740-2024',
    title: "Mise à jour des monographies sur les produits et sous-produits de levures non-Saccharomyces",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '19/07/2024',
    adoptionYear: 2024,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/node/3811/download/pdf',
    summary: "Met à jour les monographies sur les produits et sous-produits de levures non-Saccharomyces utilisés en œnologie, en complément des auxiliaires technologiques autorisés.",
    oenologicalObjectives: [
      "Encadrer l'emploi des levures non-Saccharomyces et de leurs sous-produits.",
      "Garantir la sécurité et la traçabilité."
    ],
    prescriptions: [
      "Les produits et sous-produits de levures non-Saccharomyces doivent être conformes au Codex œnologique international.",
      "L'emploi doit être justifié par un objectif technique (fermentation, stabilisation, clarification).",
      "Les doses et conditions sont celles fixées par le code des pratiques œnologiques."
    ],
    limitsAndDoses: "Doses selon le code des pratiques œnologiques et l'annexe II du Règlement (UE) 2019/934.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/934, annexe II",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Seuls les produits expressément autorisés par l'UE sont licites."
    },
    versions: [
      {
        id: 'v2024-levures-nonsacch',
        versionLabel: 'Version OIV 2024',
        adoptionYear: 2024,
        extractedText: "Mise à jour des monographies sur les produits et sous-produits de levures non-Saccharomyces.",
        prescriptions: ["Conformité au Codex.", "Doses selon code des pratiques."],
        limitsAndDoses: "Selon code des pratiques.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-oeno-602-2022',
    officialReference: 'OIV-OENO 602-2022',
    title: "Principes généraux à prendre en compte dans l'évaluation des pratiques œnologiques et des substances composant des produits œnologiques",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Général',
    adoptionDate: '21/10/2022',
    adoptionYear: 2022,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/node/2878/download/pdf',
    summary: "Définit les principes généraux à prendre en compte dans l'évaluation des pratiques œnologiques et des substances composant des produits œnologiques.",
    oenologicalObjectives: [
      "Harmoniser l'évaluation des pratiques œnologiques au niveau international.",
      "Garantir la sécurité du consommateur."
    ],
    prescriptions: [
      "Les pratiques œnologiques doivent être évaluées selon les principes fixés par l'OIV.",
      "Les substances composant des produits œnologiques doivent répondre aux critères de sécurité.",
      "L'évaluation doit prendre en compte les données toxicologiques et technologiques."
    ],
    limitsAndDoses: "Selon les principes d'évaluation de l'OIV.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/934, annexe II",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Seules les pratiques et substances expressément autorisées par l'UE sont licites."
    },
    versions: [
      {
        id: 'v2022-principes',
        versionLabel: 'Version OIV 2022',
        adoptionYear: 2022,
        extractedText: "Principes généraux d'évaluation des pratiques œnologiques.",
        prescriptions: ["Évaluation selon les principes OIV.", "Sécurité du consommateur."],
        limitsAndDoses: "Selon principes OIV.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-oeno-686-2022',
    officialReference: 'OIV-OENO 686-2022',
    title: "Révision du Code des bonnes pratiques vitivinicoles destinées à prévenir ou à limiter la contamination par Brettanomyces",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '21/10/2022',
    adoptionYear: 2022,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/node/2875/download/pdf',
    summary: "Révise le Code des bonnes pratiques vitivinicoles pour prévenir ou limiter la contamination par Brettanomyces (Brett), responsable de défauts organoleptiques.",
    oenologicalObjectives: [
      "Prévenir la contamination par Brettanomyces dans les vins.",
      "Limiter les défauts organoleptiques (phénols volatils)."
    ],
    prescriptions: [
      "Les bonnes pratiques de cave doivent être appliquées pour prévenir la contamination par Brettanomyces.",
      "Les traitements curatifs (filtration, SO2, chitosane, etc.) sont encadrés.",
      "La traçabilité et le contrôle microbiologique sont recommandés."
    ],
    limitsAndDoses: "Selon les bonnes pratiques vitivinicoles et le code des pratiques œnologiques.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/934, annexe II",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Seules les pratiques et doses expressément autorisées par l'UE sont licites."
    },
    versions: [
      {
        id: 'v2022-brettanomyces',
        versionLabel: 'Version OIV 2022',
        adoptionYear: 2022,
        extractedText: "Code des bonnes pratiques pour prévenir la contamination par Brettanomyces.",
        prescriptions: ["Bonnes pratiques de cave.", "Contrôle microbiologique."],
        limitsAndDoses: "Selon bonnes pratiques.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-secsan-701-2022',
    officialReference: 'OIV-SECSAN 701-2022',
    title: "Révision de la limite maximale d'arsenic dans le vin",
    family: 'pratiques',
    domain: 'Sécurité sanitaire & Qualité',
    category: 'Vins',
    adoptionDate: '21/10/2022',
    adoptionYear: 2022,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/node/2923/download/pdf',
    summary: "Révise la limite maximale d'arsenic dans le vin pour la sécurité du consommateur.",
    oenologicalObjectives: [
      "Protéger le consommateur contre l'exposition à l'arsenic.",
      "Harmoniser les limites avec les normes internationales."
    ],
    prescriptions: [
      "La teneur en arsenic dans le vin ne doit pas dépasser la limite maximale fixée par l'OIV.",
      "Le contrôle de l'arsenic est recommandé dans le cadre du plan HACCP.",
      "Les résultats doivent être consignés dans le registre de contrôle."
    ],
    limitsAndDoses: "Limite maximale d'arsenic dans le vin selon l'OIV (à vérifier dans la résolution).",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (CE) n° 1881/2006 (contaminants dans les denrées alimentaires)",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les limites de contaminants sont celles du Règlement (CE) 1881/2006."
    },
    versions: [
      {
        id: 'v2022-arsenic',
        versionLabel: 'Version OIV 2022',
        adoptionYear: 2022,
        extractedText: "Révision de la limite maximale d'arsenic dans le vin.",
        prescriptions: ["Limite maximale d'arsenic.", "Contrôle dans le plan HACCP."],
        limitsAndDoses: "Selon résolution OIV.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-secsan-721-2025',
    officialReference: 'OIV-SECSAN 721-2025',
    title: "Mise à jour de la limite de cadmium dans le vin",
    family: 'pratiques',
    domain: 'Sécurité sanitaire & Qualité',
    category: 'Vins',
    adoptionDate: '21/11/2025',
    adoptionYear: 2025,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/node/4097/download/pdf',
    summary: "Met à jour la limite maximale de cadmium dans le vin pour la sécurité du consommateur.",
    oenologicalObjectives: [
      "Protéger le consommateur contre l'exposition au cadmium.",
      "Harmoniser les limites avec les normes internationales."
    ],
    prescriptions: [
      "La teneur en cadmium dans le vin ne doit pas dépasser la limite maximale fixée par l'OIV.",
      "Le contrôle du cadmium est recommandé dans le cadre du plan HACCP.",
      "Les résultats doivent être consignés dans le registre de contrôle."
    ],
    limitsAndDoses: "Limite maximale de cadmium dans le vin selon l'OIV (à vérifier dans la résolution).",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (CE) n° 1881/2006 (contaminants dans les denrées alimentaires)",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les limites de contaminants sont celles du Règlement (CE) 1881/2006."
    },
    versions: [
      {
        id: 'v2025-cadmium',
        versionLabel: 'Version OIV 2025',
        adoptionYear: 2025,
        extractedText: "Mise à jour de la limite maximale de cadmium dans le vin.",
        prescriptions: ["Limite maximale de cadmium.", "Contrôle dans le plan HACCP."],
        limitsAndDoses: "Selon résolution OIV.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-oeno-689-2022',
    officialReference: 'OIV-OENO 689-2022',
    title: "Limite OIV gomme arabique — Mise à jour",
    family: 'pratiques',
    domain: 'Pratiques œnologiques',
    category: 'Vins',
    adoptionDate: '21/10/2022',
    adoptionYear: 2022,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/node/2865/download/pdf',
    summary: "Met à jour la limite d'emploi de la gomme arabique dans les vins pour la stabilisation colloïdale.",
    oenologicalObjectives: [
      "Stabiliser les vins contre les troubles colloïdaux.",
      "Encadrer l'emploi de la gomme arabique."
    ],
    prescriptions: [
      "La gomme arabique est autorisée comme auxiliaire technologique dans les conditions fixées par le code des pratiques œnologiques.",
      "La limite d'emploi est celle fixée par la résolution OIV-OENO 689-2022.",
      "L'emploi doit être tracé et compatible avec le statut UE."
    ],
    limitsAndDoses: "Limite selon la résolution OIV-OENO 689-2022.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/934, annexe II",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Seule la gomme arabique expressément autorisée par l'UE est licite."
    },
    versions: [
      {
        id: 'v2022-gomme-arabique',
        versionLabel: 'Version OIV 2022',
        adoptionYear: 2022,
        extractedText: "Mise à jour de la limite d'emploi de la gomme arabique.",
        prescriptions: ["Gomme arabique autorisée.", "Limite selon résolution."],
        limitsAndDoses: "Selon résolution OIV.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'oiv-secsan-679-2022',
    officialReference: 'OIV-SECSAN 679-2022',
    title: "Recommandations pour la diffusion de l'information en matière de consommation de vin",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '21/10/2022',
    adoptionYear: 2022,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/node/2935/download/pdf',
    summary: "Établit des recommandations pour la diffusion de l'information en matière de consommation de vin, notamment pour limiter les usages à risque.",
    oenologicalObjectives: [
      "Informer le consommateur sur la consommation responsable de vin.",
      "Limiter les usages à risque."
    ],
    prescriptions: [
      "Les informations sur la consommation de vin doivent être diffusées de manière responsable.",
      "Les messages doivent éviter toute incitation à la consommation excessive.",
      "Les avertissements santé doivent être visibles et lisibles."
    ],
    limitsAndDoses: "Selon les recommandations de l'OIV.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1169/2011",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les mentions obligatoires sont celles du Règlement (UE) 1169/2011."
    },
    versions: [
      {
        id: 'v2022-info-consommation',
        versionLabel: 'Version OIV 2022',
        adoptionYear: 2022,
        extractedText: "Recommandations pour la diffusion de l'information sur la consommation de vin.",
        prescriptions: ["Information responsable.", "Pas d'incitation excessive."],
        limitsAndDoses: "Selon recommandations OIV.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'etiquetage-vins-grands-principes-2026',
    officialReference: "— Étiquetage des Vins : Grands Principes (fiche A93/20)",
    title: "Étiquetage des vins : grands principes — mentions obligatoires, facultatives et libres",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '17/02/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8091',
    summary: "Synthèse professionnelle des règles d'étiquetage des vins tranquilles et mousseux selon le droit de l'Union européenne (Règlements 1308/2013, 2019/33, 1169/2011) et les pratiques françaises (DGCCRF).",
    oenologicalObjectives: [
      "Garantir l'information du consommateur sur les vins.",
      "Harmoniser l'étiquetage au niveau européen."
    ],
    prescriptions: [
      "Les mentions obligatoires doivent figurer dans un même champ visuel, en caractères indélébiles et lisibles (taille minimale 1,2 mm, ou 0,9 mm si la face la plus grande < 80 cm²).",
      "Mentions obligatoires : dénomination de la catégorie de produit, AOP/IGP (si applicable), titre alcoométrique volumique acquis, provenance, identité de l'embouteilleur, liste des ingrédients, déclaration nutritionnelle, date de durabilité minimale (vins désalcoolisés/partiellement désalcoolisés).",
      "Les allergènes (sulfites > 10 mg/L, protéines de lait et d'œuf, poisson) doivent être déclarés ; le SO2 peut être complété par un pictogramme.",
      "Les mentions facultatives définies (millésime, cépage, teneur en sucre, marque commerciale, etc.) sont limitativement énumérées à l'article 120 du Règlement 1308/2013.",
      "Les mentions libres sont autorisées sous réserve de vérifiabilité et d'absence de confusion.",
      "L'étiquetage doit être conforme aux règles européennes y compris en cas d'exportation vers les pays tiers.",
      "Les vins désalcoolisés et partiellement désalcoolisés doivent porter la date de durabilité minimale."
    ],
    limitsAndDoses: "Taille de caractère minimale : 1,2 mm (0,9 mm si surface < 80 cm²). Seuil allergène sulfites : 10 mg/L.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013 (OCM vitivinicole), art. 119-121",
      amendmentReference: "Règlement délégué (UE) 2019/33 ; Règlement (UE) 2021/2117 ; Règlement (UE) 2026/471",
      prevalenceRule: "Le droit de l'Union européenne prime sur les recommandations de l'OIV en cas de divergence.",
      euLimitsAndConditions: "Les mentions obligatoires doivent figurer dans un même champ visuel, en caractères indélébiles et lisibles."
    },
    versions: [
      {
        id: 'v2026-etiquetage',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Grands principes de l'étiquetage des vins selon le droit de l'UE.",
        prescriptions: ["Mentions obligatoires dans un même champ visuel.", "Allergènes déclarés.", "Date de durabilité pour vins désalcoolisés."],
        limitsAndDoses: "Taille min. 1,2 mm.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-25-denomination-vente-2026',
    officialReference: "A93/25 — Étiquetage : dénomination de vente",
    title: "Étiquetage des vins : dénomination de vente (AOP, IGP, catégorie)",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '21/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8080',
    summary: "Synthèse professionnelle des règles de dénomination de vente des vins (AOP, IGP, catégorie de produit) selon le droit de l'Union européenne.",
    oenologicalObjectives: [
      "Garantir la dénomination correcte des vins sur l'étiquette.",
      "Distinguer les mentions obligatoires des mentions facultatives."
    ],
    prescriptions: [
      "Pour les vins AOC/AOP : l'étiquette doit comporter le nom de l'appellation ET les termes « Appellation d'Origine Protégée » (sauf mention traditionnelle « Appellation d'Origine Contrôlée »).",
      "Pour les vins à IGP : l'étiquette doit comporter le nom du vin IGP et les termes « Indication Géographique Protégée ».",
      "La dénomination de vente doit figurer en caractères indélébiles, dans le même champ visuel que les autres mentions obligatoires.",
      "La taille des caractères est libre mais doit respecter la lisibilité (≥ 1,2 mm pour les mentions obligatoires)."
    ],
    limitsAndDoses: "Taille minimale des caractères : 1,2 mm (0,9 mm si surface < 80 cm²).",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 119-120",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les mentions obligatoires doivent figurer dans un même champ visuel."
    },
    versions: [
      {
        id: 'v2026-denomination',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Dénomination de vente des vins selon le droit de l'UE.",
        prescriptions: ["Dénomination AOP/IGP obligatoire.", "Champ visuel unique."],
        limitsAndDoses: "Taille min. 1,2 mm.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-26-provenance-2026',
    officialReference: "A93/26 — Étiquetage : indication de provenance",
    title: "Étiquetage des vins : indication de provenance",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '21/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=21861',
    summary: "Synthèse professionnelle des règles d'indication de provenance sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: [
      "Garantir l'information du consommateur sur l'origine des raisins et du vin.",
      "Distinguer les vins de l'UE des vins de pays tiers."
    ],
    prescriptions: [
      "Pour les vins de l'UE : indication de l'État membre ou du pays tiers où les raisins ont été récoltés et vinifiés, précédée des termes « vin de... », « produit de... », « produit en... ».",
      "Pour les vins résultant d'un mélange de plusieurs États membres : « vin de l'Union européenne » ou « mélange de vins de différents pays de l'Union européenne ».",
      "Pour les vins de pays tiers : « mélange de... » complété par les noms des pays concernés.",
      "Il est interdit de produire du vin dans l'UE à partir de raisins, moûts ou vins originaires de pays tiers.",
      "L'indication de provenance doit figurer dans le même champ visuel que les autres mentions obligatoires."
    ],
    limitsAndDoses: "Mentions dans le même champ visuel que les autres mentions obligatoires.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 45 et annexe VIII, partie II, point B",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les mentions obligatoires doivent figurer dans un même champ visuel."
    },
    versions: [
      {
        id: 'v2026-provenance',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Indication de provenance des vins selon le droit de l'UE.",
        prescriptions: ["Provenance obligatoire.", "UE vs pays tiers."],
        limitsAndDoses: "Champ visuel unique.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-30-nutrition-2026',
    officialReference: "A93/30 — Étiquetage : déclaration nutritionnelle",
    title: "Étiquetage des vins : déclaration nutritionnelle",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '30/03/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=41544',
    summary: "Synthèse professionnelle des règles de déclaration nutritionnelle des vins selon le droit de l'Union européenne (obligatoire depuis le 8 décembre 2023).",
    oenologicalObjectives: [
      "Informer le consommateur sur la valeur énergétique et la composition du vin.",
      "Harmoniser l'étiquetage au niveau européen."
    ],
    prescriptions: [
      "La déclaration nutritionnelle devient obligatoire pour toutes les catégories de vin (tranquilles, mousseux, pétillants, de liqueur, désalcoolisés) mis sur le marché de l'UE depuis le 8 décembre 2023.",
      "La déclaration peut être fournie sur l'emballage physique ou de façon dématérialisée (e-label via QR code).",
      "Lorsque la déclaration est dématérialisée, la valeur énergétique doit en plus figurer sur l'emballage physique (E = XX kJ / YY kcal pour 100 ml).",
      "La page d'e-label doit être neutre, sans publicité ni traçage.",
      "La valeur énergétique doit être exprimée en kJ et kcal pour 100 ml de produit."
    ],
    limitsAndDoses: "Valeur énergétique avec tolérance de +/- 20 %.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) 2021/2117 modifiant le Règlement (UE) n° 1308/2013",
      prevalenceRule: "Le droit de l'UE rend obligatoire l'indication depuis le 8 décembre 2023.",
      euLimitsAndConditions: "Le symbole « E » accompagne la valeur énergétique si la liste complète est dématérialisée."
    },
    versions: [
      {
        id: 'v2026-nutrition',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Déclaration nutritionnelle des vins selon le droit de l'UE.",
        prescriptions: ["Valeur énergétique obligatoire.", "E-label neutre."],
        limitsAndDoses: "Tolérance +/- 20 %.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-31-ingredients-2026',
    officialReference: "A93/31 — Étiquetage : liste des ingrédients",
    title: "Étiquetage des vins : liste des ingrédients",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '30/03/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=41543',
    summary: "Synthèse professionnelle des règles de la liste des ingrédients des vins selon le droit de l'Union européenne (obligatoire depuis le 8 décembre 2023).",
    oenologicalObjectives: [
      "Informer le consommateur sur la composition du vin.",
      "Distinguer les ingrédients des auxiliaires technologiques."
    ],
    prescriptions: [
      "La liste des ingrédients devient obligatoire pour toutes les catégories de vin mis sur le marché de l'UE depuis le 8 décembre 2023.",
      "La liste peut être fournie sur l'emballage physique ou de façon dématérialisée (e-label via QR code).",
      "Un ingrédient est toute substance utilisée durant la fabrication et encore présente dans le produit fini (les résidus ne sont pas des ingrédients).",
      "Les additifs et auxiliaires technologiques sont définis selon le Règlement délégué (UE) 2019/934, annexe I, partie A, tableau 2.",
      "Les auxiliaires technologiques ne figurent dans la liste des ingrédients que s'ils sont présents dans le produit fini."
    ],
    limitsAndDoses: "Liste des ingrédients selon le Règlement (UE) 1169/2011 et 2019/934.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) 2021/2117 ; Règlement (UE) n° 1169/2011",
      prevalenceRule: "Le droit de l'UE rend obligatoire l'indication depuis le 8 décembre 2023.",
      euLimitsAndConditions: "Les ingrédients doivent être listés par ordre décroissant de leur importance."
    },
    versions: [
      {
        id: 'v2026-ingredients',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Liste des ingrédients des vins selon le droit de l'UE.",
        prescriptions: ["Liste des ingrédients obligatoire.", "E-label autorisé."],
        limitsAndDoses: "Selon Règlement 1169/2011.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-35-titre-alcoometrique-2026',
    officialReference: "A93/35 — Étiquetage : titre alcoométrique acquis",
    title: "Étiquetage des vins : titre alcoométrique volumique acquis",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '02/03/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8075',
    summary: "Synthèse professionnelle des règles d'indication du titre alcoométrique volumique acquis sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: [
      "Informer le consommateur sur la teneur en alcool du vin.",
      "Garantir la précision de l'indication."
    ],
    prescriptions: [
      "L'indication du titre alcoométrique volumique acquis est obligatoire pour tous les vins.",
      "L'indication se fait par unité ou demi-unité de % en volume, obligatoirement suivie du symbole « % vol ».",
      "Les dixièmes de degré ne correspondant pas au demi-degré sont interdits (ex. 14,3 % vol. est interdit).",
      "La tolérance est de +/- 0,5 % vol par rapport au titre déterminé par l'analyse.",
      "Pour les moûts partiellement fermentés et les vins nouveaux en fermentation, le titre alcoométrique total peut être mentionné."
    ],
    limitsAndDoses: "Tolérance : +/- 0,5 % vol par rapport à l'analyse.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, annexe II, partie IV, §13-15",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "L'indication par unité ou demi-unité de % vol, suivie de « % vol »."
    },
    versions: [
      {
        id: 'v2026-tav',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Titre alcoométrique volumique acquis des vins.",
        prescriptions: ["Indication par unité ou demi-unité.", "Tolérance +/- 0,5 % vol."],
        limitsAndDoses: "Tolérance +/- 0,5 % vol.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-37-volume-nominal-2026',
    officialReference: "A93/37 — Étiquetage : volume nominal",
    title: "Étiquetage des vins : volume nominal",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '02/03/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8076',
    summary: "Synthèse professionnelle des règles d'indication du volume nominal sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: [
      "Informer le consommateur sur le volume du produit.",
      "Garantir la lisibilité de la mention."
    ],
    prescriptions: [
      "L'indication du volume nominal est obligatoire pour tous les vins.",
      "L'indication se fait en litres, centilitres ou millilitres, accompagnée de l'unité de mesure ou de son symbole.",
      "La taille minimale des caractères dépend du volume : ≤ 5 cl → 2 mm ; 5-20 cl → 3 mm ; 20-100 cl → 4 mm ; > 100 cl → 6 mm.",
      "La mention doit être apposée dans le même champ visuel que la dénomination du produit et le titre alcoométrique volumique acquis.",
      "Les mentions doivent être indélébiles et clairement lisibles."
    ],
    limitsAndDoses: "Taille minimale : 2 mm (≤5 cl), 3 mm (5-20 cl), 4 mm (20-100 cl), 6 mm (>100 cl).",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1169/2011, art. 13§5 et 23 ; Règlement (UE) 2019/33, art. 40.1",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "L'indication dans le même champ visuel que les autres mentions obligatoires."
    },
    versions: [
      {
        id: 'v2026-volume',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Volume nominal des vins.",
        prescriptions: ["Volume nominal obligatoire.", "Taille minimale selon le volume."],
        limitsAndDoses: "2/3/4/6 mm selon le volume.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-42-numero-lot-2026',
    officialReference: "A93/42 — Étiquetage : numéro de lot",
    title: "Étiquetage des vins : numéro de lot",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '02/03/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8077',
    summary: "Synthèse professionnelle des règles d'indication du numéro de lot sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: [
      "Permettre l'identification et la traçabilité des lots de vin.",
      "Faciliter le retrait en cas d'incident."
    ],
    prescriptions: [
      "Un produit ne peut être commercialisé que s'il est accompagné d'une mention permettant d'identifier le lot auquel il appartient.",
      "Le lot est l'ensemble d'unités de vente d'un même vin, produites, fabriquées ou conditionnées dans des circonstances pratiquement identiques.",
      "La mention doit être visible et lisible, en caractères d'au moins 1,2 mm.",
      "Le numéro de lot peut figurer en dehors du même champ visuel que les autres mentions obligatoires.",
      "Le marquage du lot est obligatoire depuis le 1er janvier 1992 (Directive 89/396)."
    ],
    limitsAndDoses: "Caractères ≥ 1,2 mm. Mention visible et lisible.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Directive 89/396/CEE ; Règlement (UE) 2019/33, art. 40.2",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Le numéro de lot peut figurer en dehors du champ visuel des autres mentions obligatoires."
    },
    versions: [
      {
        id: 'v2026-lot',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Numéro de lot des vins.",
        prescriptions: ["Numéro de lot obligatoire.", "Traçabilité."],
        limitsAndDoses: "Caractères ≥ 1,2 mm.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-52-millesime-2026',
    officialReference: "A93/52 — Étiquetage : millésime",
    title: "Étiquetage des vins : millésime",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '09/03/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8081',
    summary: "Synthèse professionnelle des règles d'indication du millésime sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: [
      "Informer le consommateur sur l'année de récolte.",
      "Encadrer l'usage du millésime."
    ],
    prescriptions: [
      "Le millésime est une mention facultative pour les vins.",
      "L'indication du millésime est obligatoire pour les vins primeurs ou nouveaux (AOC/AOP dont la commercialisation est fixée au 3e jeudi de novembre ; IGP au 3e jeudi d'octobre).",
      "Pour les vins primeurs, la mention du millésime doit se faire en caractères d'une taille au moins équivalente à celle des mentions « primeur » ou « nouveau ».",
      "Les cahiers des charges des AOC/AOP ou IGP peuvent rendre obligatoire, interdire ou préciser la mention du millésime.",
      "La taille et l'emplacement sont libres, sauf disposition contraire dans le cahier des charges."
    ],
    limitsAndDoses: "Taille au moins équivalente aux mentions « primeur »/« nouveau » pour les vins primeurs.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 120",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Le millésime est une mention facultative, sauf pour les vins primeurs."
    },
    versions: [
      {
        id: 'v2026-millesime',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Millésime des vins.",
        prescriptions: ["Facultatif sauf vins primeurs.", "Taille adaptée pour les vins primeurs."],
        limitsAndDoses: "Selon règlementation.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-55-cepage-2026',
    officialReference: "A93/55 — Étiquetage : cépage",
    title: "Étiquetage des vins : cépage",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '13/02/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8082',
    summary: "Synthèse professionnelle des règles d'indication du cépage sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: [
      "Informer le consommateur sur la variété de vigne utilisée.",
      "Encadrer l'usage du cépage dans l'étiquetage."
    ],
    prescriptions: [
      "Le cépage est une mention facultative pour les vins.",
      "Le cépage doit figurer dans le classement des variétés établi par l'État membre de production (Règlement 1308/2013, art. 81).",
      "Les cahiers des charges des AOC/AOP ou IGP peuvent rendre obligatoire, interdire ou préciser la mention du cépage.",
      "Pour la mention de plusieurs cépages, ils doivent être indiqués par ordre décroissant de leur importance.",
      "La taille et l'emplacement sont libres, sauf disposition contraire dans le cahier des charges."
    ],
    limitsAndDoses: "Taille et emplacement libres, sauf disposition contraire.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 81 et 120",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Le cépage doit figurer dans le classement des variétés de l'État membre de production."
    },
    versions: [
      {
        id: 'v2026-cepage',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Cépage des vins.",
        prescriptions: ["Facultatif.", "Cépage du classement officiel."],
        limitsAndDoses: "Selon règlementation.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-60-mentions-traditionnelles-2026',
    officialReference: "A93/60 — Étiquetage : mentions traditionnelles",
    title: "Étiquetage des vins : mentions traditionnelles",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '08/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8083',
    summary: "Synthèse professionnelle des règles d'usage des mentions traditionnelles sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: [
      "Encadrer l'usage des mentions traditionnelles sur les vins.",
      "Distinguer les mentions traditionnelles des mentions libres."
    ],
    prescriptions: [
      "Les mentions traditionnelles sont des mentions facultatives définies (art. 120 du Règlement 1308/2013).",
      "Elles doivent être utilisées dans la langue pour laquelle la protection s'applique.",
      "Les cahiers des charges des AOC/AOP peuvent rendre obligatoire, interdire ou préciser l'usage de certaines mentions traditionnelles.",
      "Les mentions traditionnelles doivent être conformes à la réglementation européenne."
    ],
    limitsAndDoses: "Selon le cahier des charges de l'AOP/IGP.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 120",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les mentions traditionnelles sont limitativement énumérées."
    },
    versions: [
      {
        id: 'v2026-traditionnelles',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Mentions traditionnelles des vins.",
        prescriptions: ["Mentions facultatives définies.", "Langue de protection."],
        limitsAndDoses: "Selon cahier des charges.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-87-vin-biologique-2026',
    officialReference: "A93/87 — Étiquetage : vin biologique",
    title: "Étiquetage des vins : vin biologique",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '21/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8087',
    summary: "Synthèse professionnelle des règles d'étiquetage des vins biologiques selon le droit de l'Union européenne.",
    oenologicalObjectives: [
      "Encadrer l'usage de la mention « vin biologique ».",
      "Garantir la conformité avec la réglementation européenne."
    ],
    prescriptions: [
      "La mention « vin biologique » ne peut être utilisée que pour les produits répondant aux conditions de production, de transformation et de commercialisation fixées par le règlement européen sur l'agriculture biologique.",
      "Les vins biologiques doivent être certifiés par un organisme de contrôle agréé.",
      "L'étiquetage doit respecter les règles d'étiquetage des vins et les mentions spécifiques à l'agriculture biologique.",
      "Les traitements œnologiques autorisés pour les vins biologiques sont limités à ceux prévus par le règlement européen."
    ],
    limitsAndDoses: "Selon le règlement européen sur l'agriculture biologique.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) 2018/848 (agriculture biologique)",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les traitements œnologiques autorisés sont limités à ceux prévus par le règlement."
    },
    versions: [
      {
        id: 'v2026-bio',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Vin biologique.",
        prescriptions: ["Certification bio obligatoire.", "Traitements limités."],
        limitsAndDoses: "Selon règlement bio.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-92-distinctions-2026',
    officialReference: "A93/92 — Étiquetage : distinctions, médailles, concours",
    title: "Étiquetage des vins : distinctions, médailles, concours",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '21/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8088',
    summary: "Synthèse professionnelle des règles d'usage des distinctions et médailles sur l'étiquetage des vins selon le droit de l'Union européenne.",
    oenologicalObjectives: [
      "Encadrer l'usage des distinctions et médailles sur les vins.",
      "Garantir la véracité des mentions."
    ],
    prescriptions: [
      "Les distinctions et médailles sont des mentions libres, sous réserve de vérifiabilité.",
      "Les concours organisés par des organismes établis en France doivent être inscrits sur une liste établie par la DGCCRF.",
      "Seuls les lots primés peuvent mentionner la distinction sur leur étiquetage.",
      "Les mentions ne doivent pas être de nature à induire le consommateur en erreur."
    ],
    limitsAndDoses: "Selon la DGCCRF et le règlement européen.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 120",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les mentions doivent être vérifiables et non trompeuses."
    },
    versions: [
      {
        id: 'v2026-distinctions',
        versionLabel: 'Version 2026',
        adoptionYear: 2026,
        extractedText: "Distinctions, médailles, concours.",
        prescriptions: ["Mentions libres vérifiables.", "Concours agréés DGCCRF."],
        limitsAndDoses: "Selon réglementation.",
        isCurrent: true
      }
    ],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-27-embouteilleur-2026',
    officialReference: "A93/27 — Étiquetage : nom et adresse de l'embouteilleur/importateur",
    title: "Étiquetage des vins : nom et adresse de l'embouteilleur et de l'importateur",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '08/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8069',
    summary: "Synthèse professionnelle des règles d'indication de l'identité de l'embouteilleur et de l'importateur sur les vins.",
    oenologicalObjectives: ["Identifier l'embouteilleur ou l'importateur.", "Garantir la traçabilité."],
    prescriptions: [
      "L'identité de l'embouteilleur doit figurer sur l'étiquette (nom et adresse).",
      "Pour les vins importés, l'identité de l'importateur doit également figurer.",
      "L'embouteilleur est la personne qui procède ou fait procéder à l'embouteillage.",
      "Les mentions doivent être dans le même champ visuel que les autres mentions obligatoires."
    ],
    limitsAndDoses: "Mentions dans le même champ visuel que les autres mentions obligatoires.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 119 ; Règlement délégué (UE) 2019/33, art. 46",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "L'identité de l'embouteilleur doit figurer dans le même champ visuel."
    },
    versions: [{ id: 'v2026-embouteilleur', versionLabel: 'Version 2026', adoptionYear: 2026, extractedText: "Embouteilleur/importateur.", prescriptions: ["Identité obligatoire.", "Champ visuel unique."], limitsAndDoses: "Selon règlementation.", isCurrent: true }],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-29-symbole-communautaire-2026',
    officialReference: "A93/29 — Étiquetage : symbole communautaire",
    title: "Étiquetage des vins : symbole communautaire (AOP/IGP)",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '02/03/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=21862',
    summary: "Synthèse professionnelle des règles d'usage du symbole communautaire sur les vins AOP/IGP selon le droit de l'Union européenne.",
    oenologicalObjectives: ["Identifier les vins AOP/IGP par le symbole communautaire.", "Encadrer l'usage du symbole."],
    prescriptions: [
      "Le symbole communautaire est facultatif (art. 120.1.E du Règlement 1308/2013).",
      "Les cahiers des charges des AOC/AOP ou IGP peuvent rendre obligatoire, interdire ou préciser l'apposition du symbole.",
      "Les symboles sont définis à l'Annexe XVII du Règlement d'exécution (UE) 2025-26.",
      "Le symbole peut accompagner la dénomination géographique correspondante."
    ],
    limitsAndDoses: "Selon le cahier des charges de l'AOP/IGP.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 120.1.E ; Règlement d'exécution (UE) 2025-26, annexe XVII",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les cahiers des charges peuvent rendre le symbole obligatoire, l'interdire ou le préciser."
    },
    versions: [{ id: 'v2026-symbole', versionLabel: 'Version 2026', adoptionYear: 2026, extractedText: "Symbole communautaire.", prescriptions: ["Facultatif.", "Selon cahier des charges."], limitsAndDoses: "Selon réglementation.", isCurrent: true }],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-57-unite-geographique-2026',
    officialReference: "A93/57 — Étiquetage : unité géographique",
    title: "Étiquetage des vins : unité géographique plus grande ou plus petite que l'IG",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '08/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8089',
    summary: "Synthèse professionnelle des règles d'usage des unités géographiques plus grandes ou plus petites que l'IG sur les vins.",
    oenologicalObjectives: ["Encadrer l'usage des unités géographiques complémentaires.", "Garantir la conformité avec le cahier des charges."],
    prescriptions: [
      "Les cahiers des charges des AOC/AOP ou IGP peuvent rendre obligatoire, interdire ou préciser l'usage du nom d'une unité géographique plus grande ou plus petite.",
      "L'unité géographique peut être une localité, une zone administrative, une sous-région viticole, etc.",
      "Les dénominations géographiques complémentaires (GDC) sont un type d'unité géographique plus petite."
    ],
    limitsAndDoses: "Selon le cahier des charges de l'AOP/IGP.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 120 ; Règlement délégué (UE) 2019/33, art. 58",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les cahiers des charges peuvent rendre l'unité géographique obligatoire, l'interdire ou la préciser."
    },
    versions: [{ id: 'v2026-unite-geo', versionLabel: 'Version 2026', adoptionYear: 2026, extractedText: "Unité géographique.", prescriptions: ["Selon cahier des charges."], limitsAndDoses: "Selon réglementation.", isCurrent: true }],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-62-participants-commercialisation-2026',
    officialReference: "A93/62 — Étiquetage : participants à la commercialisation",
    title: "Étiquetage des vins : participants à la commercialisation",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '08/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8071',
    summary: "Synthèse professionnelle des règles d'indication des participants à la commercialisation sur les vins.",
    oenologicalObjectives: ["Identifier les participants à la commercialisation.", "Garantir la traçabilité."],
    prescriptions: [
      "L'identité de l'embouteilleur, du producteur, de l'importateur et du vendeur peut figurer sur l'étiquette.",
      "Pour les vins mousseux, l'identité du producteur/élaborateur et du vendeur doit figurer.",
      "Les mentions doivent être conformes au Règlement (UE) 1308/2013 et au Règlement délégué 2019/33."
    ],
    limitsAndDoses: "Selon le Règlement (UE) 1308/2013.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 119",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les mentions doivent être conformes au Règlement 1308/2013."
    },
    versions: [{ id: 'v2026-participants', versionLabel: 'Version 2026', adoptionYear: 2026, extractedText: "Participants à la commercialisation.", prescriptions: ["Identité des participants.", "Conformité UE."], limitsAndDoses: "Selon réglementation.", isCurrent: true }],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-65-nom-exploitation-2026',
    officialReference: "A93/65 — Étiquetage : nom d'exploitation viticole",
    title: "Étiquetage des vins : nom d'exploitation viticole",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '14/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8072',
    summary: "Synthèse professionnelle des règles d'usage du nom d'exploitation viticole sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: ["Encadrer l'usage du nom d'exploitation viticole.", "Garantir la conformité avec le cahier des charges."],
    prescriptions: [
      "Certains noms sont réservés pour désigner des vins AOP/IGP issus d'une exploitation où ces vins sont élaborés exclusivement à partir des raisins récoltés dans les vignobles cultivés par cette exploitation.",
      "Les expressions « château », « clos », « cru » et « hospices » sont réservées aux vins à AOP/AOC.",
      "La vinification doit être entièrement effectuée dans l'exploitation."
    ],
    limitsAndDoses: "Selon le décret n° 2012-655 et le Règlement délégué 2019/33.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/33, art. 54 et annexe VI",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "L'exploitation doit être une entité déterminée avec cuverie individualisée."
    },
    versions: [{ id: 'v2026-exploitation', versionLabel: 'Version 2026', adoptionYear: 2026, extractedText: "Nom d'exploitation viticole.", prescriptions: ["Expressions réservées.", "Vinification dans l'exploitation."], limitsAndDoses: "Selon décret 2012-655.", isCurrent: true }],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-67-mise-en-bouteille-propriete-2026',
    officialReference: "A93/67 — Étiquetage : mise en bouteille à la propriété",
    title: "Étiquetage des vins : mise en bouteille à la propriété, au château ou dans la région",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '11/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8073',
    summary: "Synthèse professionnelle des règles de la mention « mise en bouteille à la propriété » sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: ["Encadrer l'usage de la mention « mise en bouteille à la propriété ».", "Garantir la véracité de la mention."],
    prescriptions: [
      "La mention « mise en bouteille à la propriété » (ou au château, dans la région) est une mention libre, sous réserve de vérifiabilité.",
      "Le metteur en marché doit être en mesure de justifier la mention par une traçabilité adéquate.",
      "Les mentions doivent être conformes au Règlement (UE) 1308/2013."
    ],
    limitsAndDoses: "Mention libre vérifiable.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 120",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "La mention doit être vérifiable et non trompeuse."
    },
    versions: [{ id: 'v2026-mise-bouteille', versionLabel: 'Version 2026', adoptionYear: 2026, extractedText: "Mise en bouteille à la propriété.", prescriptions: ["Mention libre vérifiable.", "Traçabilité."], limitsAndDoses: "Selon réglementation.", isCurrent: true }],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-70-methode-production-2026',
    officialReference: "A93/70 — Étiquetage : méthode de production",
    title: "Étiquetage des vins : méthode de production",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '14/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8084',
    summary: "Synthèse professionnelle des règles d'indication de la méthode de production sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: ["Encadrer l'usage des mentions de méthode de production.", "Garantir la conformité."],
    prescriptions: [
      "Pour les vins tranquilles, seules les indications relatives au vieillissement sous bois ou l'utilisation des copeaux sont mentionnées (art. 53, point 2, R. 2019/33).",
      "Pour les vins mousseux, les indications relatives au vieillissement sous bois, à l'utilisation des copeaux, à la « fermentation en bouteille », à la « méthode traditionnelle » et au « Crémant » sont mentionnées (art. 53, points 3-5, R. 2019/33).",
      "Les mentions doivent être conformes au Règlement (UE) 1308/2013."
    ],
    limitsAndDoses: "Selon le Règlement (UE) 2019/33, art. 53.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement délégué (UE) 2019/33, art. 53",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Seules les méthodes expressément mentionnées sont autorisées."
    },
    versions: [{ id: 'v2026-methode', versionLabel: 'Version 2026', adoptionYear: 2026, extractedText: "Méthode de production.", prescriptions: ["Vieillissement sous bois.", "Copeaux."], limitsAndDoses: "Selon R. 2019/33.", isCurrent: true }],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-72-couleur-2026',
    officialReference: "A93/72 — Étiquetage : couleur",
    title: "Étiquetage des vins : couleur",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '21/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8085',
    summary: "Synthèse professionnelle des règles d'usage des mentions de couleur sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: ["Encadrer l'usage des mentions de couleur.", "Garantir la conformité."],
    prescriptions: [
      "Les expressions « rouge », « rosé » et « blanc » sont libres d'emploi.",
      "L'usage de ces expressions doit être porté sur les documents d'accompagnement et dans les registres.",
      "Des couleurs particulières peuvent être utilisées dans des conditions déterminées.",
      "Les mentions doivent être conformes au Règlement (UE) 1308/2013."
    ],
    limitsAndDoses: "Mentions libres pour rouge, rosé, blanc.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 120",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les mentions doivent être conformes au Règlement 1308/2013."
    },
    versions: [{ id: 'v2026-couleur', versionLabel: 'Version 2026', adoptionYear: 2026, extractedText: "Couleur des vins.", prescriptions: ["Rouge, rosé, blanc libres.", "Conformité UE."], limitsAndDoses: "Selon réglementation.", isCurrent: true }],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-77-teneur-sucre-2026',
    officialReference: "A93/77 — Étiquetage : teneur en sucre",
    title: "Étiquetage des vins : teneur en sucre",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '21/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8086',
    summary: "Synthèse professionnelle des règles d'indication de la teneur en sucre sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: ["Encadrer l'indication de la teneur en sucre.", "Garantir la conformité."],
    prescriptions: [
      "La teneur en sucre est une mention facultative pour les vins tranquilles.",
      "Pour les vins mousseux, la teneur en sucre est obligatoire.",
      "Les cahiers des charges des AOC/AOP ou IGP peuvent rendre obligatoire, interdire ou préciser certaines mentions de teneur en sucre.",
      "Les mentions doivent être conformes au Règlement (UE) 1308/2013."
    ],
    limitsAndDoses: "Selon le Règlement (UE) 1308/2013 et le cahier des charges.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1308/2013, art. 120",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "La teneur en sucre est obligatoire pour les vins mousseux."
    },
    versions: [{ id: 'v2026-sucre', versionLabel: 'Version 2026', adoptionYear: 2026, extractedText: "Teneur en sucre.", prescriptions: ["Facultatif pour VT.", "Obligatoire pour Mx."], limitsAndDoses: "Selon réglementation.", isCurrent: true }],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-80-logo-point-vert-2026',
    officialReference: "A93/80 — Étiquetage : logo point vert-Adelphe",
    title: "Étiquetage des vins : logo point vert (Adelphe)",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '21/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8078',
    summary: "Synthèse professionnelle des règles d'usage du logo point vert (Adelphe) sur les vins selon le droit de l'Union européenne.",
    oenologicalObjectives: ["Encadrer l'usage du logo point vert.", "Garantir la conformité avec la réglementation sur les emballages."],
    prescriptions: [
      "Le logo point vert identifie les entreprises remplissant leurs obligations d'élimination des emballages ménagers.",
      "Adelphe est un organisme agréé créé par les professionnels des vins et spiritueux.",
      "L'usage du logo est facultatif et soumis à l'adhésion à Adelphe."
    ],
    limitsAndDoses: "Selon les conditions d'adhésion à Adelphe.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Directive 94/62/CE (emballages et déchets d'emballages)",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "Les conditions sont celles de la Directive 94/62/CE."
    },
    versions: [{ id: 'v2026-point-vert', versionLabel: 'Version 2026', adoptionYear: 2026, extractedText: "Logo point vert-Adelphe.", prescriptions: ["Logo facultatif.", "Adhésion Adelphe."], limitsAndDoses: "Selon Adelphe.", isCurrent: true }],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
  {
    id: 'a93-95-nom-imprimeur-2026',
    officialReference: "A93/95 — Étiquetage : nom de l'imprimeur",
    title: "Étiquetage des vins : nom de l'imprimeur",
    family: 'etiquetage',
    domain: 'Étiquetage & Information du consommateur',
    category: 'Général',
    adoptionDate: '22/04/2026',
    adoptionYear: 2026,
    language: 'fr',
    status: 'en_vigueur',
    officialUrl: 'https://www.oiv.int/fr/standards/norme-internationale-pour-letiquetage-des-vins?ref=8074',
    summary: "Synthèse professionnelle des règles d'usage du nom de l'imprimeur sur les étiquettes de vins.",
    oenologicalObjectives: ["Clarifier le statut du nom de l'imprimeur.", "Garantir la conformité."],
    prescriptions: [
      "Le Règlement (UE) 1169/2011 ne prévoit pas la mention du nom de l'imprimeur ni à titre obligatoire ni à titre facultatif.",
      "Le droit de la presse ne s'applique pas aux étiquettes.",
      "Les entreprises sont fondées à refuser cette mention."
    ],
    limitsAndDoses: "Mention non prévue par le Règlement (UE) 1169/2011.",
    euRegulation: {
      euStatus: 'encadre_specifique',
      primaryReference: "Règlement (UE) n° 1169/2011",
      prevalenceRule: "Le droit de l'UE prime sur les recommandations de l'OIV.",
      euLimitsAndConditions: "La mention du nom de l'imprimeur n'est pas prévue par le Règlement 1169/2011."
    },
    versions: [{ id: 'v2026-imprimeur', versionLabel: 'Version 2026', adoptionYear: 2026, extractedText: "Nom de l'imprimeur.", prescriptions: ["Mention non prévue.", "Refus possible."], limitsAndDoses: "Selon R. 1169/2011.", isCurrent: true }],
    relatedDocuments: [],
    lastCheckedDate: '2026-11-16'
  },
];

/**
 * Metadata of the corpus shipped with the application.
 *
 * There is NO automatic synchronisation: the corpus is updated by hand, one
 * version at a time. Bump `version` and `updatedAt` in the same commit as the
 * data change, then run `npm run corpus:check`.
 */
export const CORPUS_META = {
  version: '2026.9',
  updatedAt: '2026-11-16',
  updatedAtLabel: new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date('2026-11-16')),
  source: 'OIV (oiv.int) et EUR-Lex — Règlement délégué (UE) 2019/934'
} as const;

export const FAMILIES_META: { id: string; label: string; count: number; desc: string }[] = [
  {
    id: 'pratiques',
    label: 'Code des pratiques œnologiques',
    count: 26,
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
    count: 30,
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
    count: 1,
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

