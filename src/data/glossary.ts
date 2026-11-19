export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'Réglementation' | 'Œnologie' | 'Qualité & sécurité' | 'Organismes & textes';
  definition: string;
  /** Official references of corpus fiches to link to (matched against officialReference). */
  relatedRefs?: string[];
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    id: 'oiv',
    term: 'OIV',
    category: 'Organismes & textes',
    definition: "Organisation internationale de la vigne et du vin. Organisation intergouvernementale scientifique et technique qui élabore des résolutions et des normes (pratiques œnologiques, étiquetage, méthodes d'analyse) reconnues internationalement.",
  },
  {
    id: 'codex',
    term: 'Codex œnologique international',
    category: 'Organismes & textes',
    definition: "Recueil de monographies de l'OIV définissant l'identité, la pureté, les limites de contaminants et les méthodes d'analyse des produits et auxiliaires technologiques utilisés en œnologie (bentonites, tanins, enzymes, etc.).",
    relatedRefs: ['OIV-OENO 624-2022', 'OIV-OENO 674-2022', 'OIV-OENO 681-2022'],
  },
  {
    id: 'coei',
    term: 'COEI (monographie)',
    category: 'Organismes & textes',
    definition: "Code international des pratiques œnologiques — chaque substance dispose d'une monographie référencée COEI-1-XXX (ex. COEI-1-DMDC, COEI-1-TANINS) fixant pureté, métaux lourds et conditions d'emploi.",
    relatedRefs: ['OIV-OENO 567B4-2022', 'OIV-OENO 707-2022'],
  },
  {
    id: 'code-pratiques',
    term: 'Code international des pratiques œnologiques',
    category: 'Organismes & textes',
    definition: "Document de l'OIV listant les traitements et pratiques autorisés sur les raisins, moûts et vins, avec leurs conditions d'emploi. Les doses d'emploi y sont définies par feuille de pratique.",
  },
  {
    id: 'resolution',
    term: 'Résolution OIV',
    category: 'Organismes & textes',
    definition: "Texte officiel adopté par consensus par l'Assemblée générale des États membres de l'OIV (ex. OIV-OENO 738-2025). Une résolution n'est pas automatiquement contraignante dans l'UE.",
    relatedRefs: ['OIV-OENO 738-2025'],
  },
  {
    id: 'ue-2019-934',
    term: 'Règlement (UE) 2019/934',
    category: 'Réglementation',
    definition: "Règlement délégué de la Commission européenne complétant le règlement (UE) n° 1308/2013. Il fixe les pratiques œnologiques autorisées dans l'UE (annexe I) et les limites (annexe II). En cas de divergence, le droit de l'UE prime sur l'OIV.",
  },
  {
    id: 'aop-igp',
    term: 'AOP / IGP',
    category: 'Réglementation',
    definition: "Appellation d'origine protégée / Indication géographique protégée. Signes de qualité européens dont le cahier des charges peut restreindre ou préciser les pratiques œnologiques et les mentions d'étiquetage.",
  },
  {
    id: 'allergene',
    term: 'Allergène',
    category: 'Qualité & sécurité',
    definition: "Substance provoquant une réaction d'hypersensibilité. Dans le vin, les sulfites (> 10 mg/L), les protéines de lait et d'œuf utilisées au collage doivent être déclarées sur l'étiquette (règlement UE 1169/2011).",
    relatedRefs: ['OIV-OENO 427-2010', 'OIV-OENO-SECSAN 520-2014'],
  },
  {
    id: 'so2',
    term: 'SO₂ / Sulfites',
    category: 'Œnologie',
    definition: "Dioxyde de soufre, antioxydant et antimicrobien. Les limites maximales dans l'UE dépendent du type de vin et de la teneur en sucre (150 à 400 mg/L selon le règlement délégué 2019/934, annexe II).",
  },
  {
    id: 'dmdc',
    term: 'DMDC (dicarbonate de diméthyle)',
    category: 'Œnologie',
    definition: "Agent antimicrobien (Velcorin) utilisé avant mise en bouteille, jusqu'à 200 mg/L. Il s'hydrolyse rapidement en méthanol et CO₂ à l'état de traces. Réservé aux vins contenant des sucres fermentescibles dans l'UE.",
    relatedRefs: ['OIV-OENO 567B4-2022', 'OIV-OENO 684A-2022'],
  },
  {
    id: 'fml',
    term: 'Fermentation malolactique (FML)',
    category: 'Œnologie',
    definition: "Conversion de l'acide malique en acide lactique par des bactéries lactiques, réduisant l'acidité et arrondissant le vin. Peut être déclenchée, inhibée (acide fumarique, lysozyme) ou activée.",
    relatedRefs: ['OIV-OENO 738-2025', 'OIV-OENO 531-2015'],
  },
  {
    id: 'haccp',
    term: 'HACCP',
    category: 'Qualité & sécurité',
    definition: "Hazard Analysis Critical Control Point. Méthode d'analyse des dangers et de maîtrise des points critiques pour la sécurité alimentaire, applicable à la filière vitivinicole.",
  },
  {
    id: 'ccp',
    term: 'CCP (point critique)',
    category: 'Qualité & sécurité',
    definition: "Critical Control Point : étape à laquelle une mesure de maîtrise peut être appliquée pour prévenir ou éliminer un danger pour la sécurité des aliments, ou le ramener à un niveau acceptable.",
  },
  {
    id: 'prpo',
    term: 'PRPo (prérequis opérationnel)',
    category: 'Qualité & sécurité',
    definition: "Programme prérequis opérationnel : mesure de maîtrise essentielle pour la sécurité alimentaire, identifiée par l'analyse des dangers mais ne constituant pas un CCP au sens strict.",
  },
  {
    id: 'collage',
    term: 'Collage',
    category: 'Œnologie',
    definition: "Clarification des vins par ajout d'une substance (colle) qui flocule et entraîne les particules en suspension : bentonite, gélatine, colle de poisson, albumine d'œuf, protéines végétales, chitosane.",
    relatedRefs: ['OIV-OENO 624-2022', 'OIV-OENO 723-2024'],
  },
  {
    id: 'stabilisation-tartrique',
    term: 'Stabilisation tartrique',
    category: 'Œnologie',
    definition: "Prévention de la précipitation des cristaux de bitartrate de potassium dans le vin : froid, électrodialyse, échangeurs de cations, CMC, polyaspartate de potassium, mannoprotéines.",
    relatedRefs: ['OIV-OENO 650-2021', 'OIV-OENO 674-2022'],
  },
  {
    id: 'brett',
    term: 'Brettanomyces / phénols volatils',
    category: 'Qualité & sécurité',
    definition: "Levure d'altération produisant des phénols volatils (4-éthylphénol, 4-éthylgaïacol) responsables d'odeurs de type « écurie ». Traitements : filtration membranaire couplée à l'adsorption, DMDC, SO₂.",
    relatedRefs: ['OIV-OENO 657-2023', 'OIV-OENO 686-2022'],
  },
  {
    id: 'tav',
    term: 'TAV (titre alcoométrique volumique)',
    category: 'Réglementation',
    definition: "Titre alcoométrique volumique : pourcentage d'alcool en volume. Mention obligatoire sur l'étiquetage des vins, avec des tolérances fixées par la réglementation européenne.",
  },
  {
    id: 'cas',
    term: 'N° CAS',
    category: 'Qualité & sécurité',
    definition: "Numéro d'enregistrement du Chemical Abstracts Service : identifiant unique d'une substance chimique (ex. 7783-90-6 pour le chlorure d'argent). Utilisé pour retrouver une substance dans le corpus.",
  },
  {
    id: 'auxiliaire',
    term: 'Auxiliaire technologique',
    category: 'Réglementation',
    definition: "Substance utilisée lors du traitement d'un produit puis éliminée (ou présente à l'état de traces), par opposition à l'additif qui reste dans le produit fini. La distinction est précisée par les résolutions OIV-OENO 567.",
    relatedRefs: ['OIV-OENO 567A-2016', 'OIV-OENO 567B4-2022', 'OIV-OENO 567C1-2022'],
  },
];
