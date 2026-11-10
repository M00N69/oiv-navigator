import { OenologicalProblem } from '../types/oiv';

export const OENOLOGICAL_PROBLEMS: OenologicalProblem[] = [
  {
    id: 'inhibition-fml',
    title: 'Inhiber ou retarder la fermentation malolactique',
    category: 'Microbiologie',
    iconName: 'ShieldAlert',
    problemSummary: 'Conserver la fraîcheur et l\'acidité malique des vins blancs, rosés ou de base effervescents sans surdosage de sulfites (SO2).',
    recommendedDocIds: ['oiv-oeno-738-2025', 'oiv-oeno-581a-2021', 'coei-1-acifum'],
    keyAdvice: 'Utilisez l\'acide fumarique dès l\'encuvage des moûts (jusqu\'à 600 mg/L, résolution 738-2025) ou sur vins finis (résolution 581A-2021). Efficacité maximale sur pH bas (< 3.5).',
    euAlert: 'Encadré dans l\'UE à 600 mg/L max. L\'acide fumarique ne peut servir à l\'acidification légale.'
  },
  {
    id: 'stabilisation-tartrique-ecologique',
    title: 'Stabilisation tartrique sans dépense énergétique frigorifique',
    category: 'Tartrique',
    iconName: 'FlaskConical',
    problemSummary: 'Empêcher la précipitation des cristaux de bitartrate de potassium en bouteille sans passage prolongé au froid (0°C).',
    recommendedDocIds: ['oiv-oeno-650-2021', 'oiv-oeno-366-2009', 'coei-1-kpa', 'coei-1-cmc'],
    keyAdvice: 'Le Polyaspartate de potassium (KPA - 100 mg/L) fonctionne sur blancs, rosés et rouges stables colloïdalement. La CMC (100 mg/L) est réservée strictement aux blancs et effervescents.',
    euAlert: 'RÈGLE CRITIQUE : Ne jamais utiliser la CMC sur vin rouge (précipitations polyphénoliques). Ne jamais associer le KPA avec du lysozyme (turbidité immédiate).'
  },
  {
    id: 'arret-refermentation-vins-doux',
    title: 'Sécuriser les vins avec sucres résiduels contre la refermentation',
    category: 'Microbiologie',
    iconName: 'AlertTriangle',
    problemSummary: 'Conditionner des vins moelleux, liquoreux ou doux sans risque de reprise fermentaire par des levures viables en bouteille.',
    recommendedDocIds: ['oiv-oeno-684a-2022', 'coei-1-dmdc', 'oiv-ma-as323-08'],
    keyAdvice: 'Le dicarbonate de diméthyle (DMDC / Velcorin) jusqu\'à 200 mg/L hydrolyse rapidement sans résidu. Le vin doit être préalablement limpide et filtré (< 1 NTU).',
    euAlert: 'Dans l\'Union européenne, le DMDC est autorisé uniquement pour les vins titrant au minimum 5 g/L de sucres fermentescibles. Système doseur asservi obligatoire.'
  },
  {
    id: 'correction-ph-surmaturite',
    title: 'Corriger un pH trop élevé sans apport d\'acide tartrique exogène',
    category: 'Acidité',
    iconName: 'Scale',
    problemSummary: 'Rétablir l\'équilibre acide et l\'efficacité du SO2 libre sur des moûts ou vins issus de vendanges surmûries ou chaudes.',
    recommendedDocIds: ['oiv-oeno-583-2017', 'oiv-oeno-622-2019'],
    keyAdvice: 'Passage d\'une fraction du volume sur résines cationiques en cycle acide pour substituer les cations K+ par des protons H+ avant réassemblage.',
    euAlert: 'Plafond réglementaire strict : baisse de pH limitée à 0,3 unité au maximum. L\'acidification et l\'enrichissement s\'excluent mutuellement sur un même lot dans l\'UE.'
  },
  {
    id: 'collage-zero-allergene',
    title: 'Clarification et débourbage rapide sans colles animales ni allergènes',
    category: 'Clarification',
    iconName: 'Sparkles',
    problemSummary: 'Clarifier les moûts et affiner les tanins des vins sans utiliser d\'albumine d\'œuf, de caséine ou de colle de poisson nécessitant un étiquetage allergène.',
    recommendedDocIds: ['oiv-oeno-494-2017'],
    keyAdvice: 'Isolats de protéines de pois ou de pomme de terre (10 à 30 g/hL). Efficacité comparable aux colles animales traditionnelles avec floculation rapide.',
    euAlert: 'Pleinement autorisé dans l\'UE sans obligation d\'étiquetage allergène au titre du règlement (UE) 1169/2011.'
  },
  {
    id: 'protection-aromes-thiols',
    title: 'Protéger les arômes variétaux sensibles contre le vieillissement prématuré',
    category: 'Oxydation & SO2',
    iconName: 'BookOpen',
    problemSummary: 'Limiter l\'oxydation des thiols volatils (pamplemousse, buis, fruit de la passion) des vins blancs et rosés lors de l\'élevage.',
    recommendedDocIds: ['oiv-oeno-674a-2022'],
    keyAdvice: 'Adjonction de levures inactivées à niveau garanti en glutathion réduit (GSH). Les dérivés piègent les ortho-quinones avant la dégradation des arômes.',
    euAlert: 'Apport de glutathion strictement limité à 20 mg/L dans le vin. Interdiction formelle du glutathion chimique pur de synthèse.'
  }
];
