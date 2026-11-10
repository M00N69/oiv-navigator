export type OivFamily = 
  | 'pratiques'    // Code international des pratiques œnologiques
  | 'codex'        // Codex œnologique international
  | 'methodes'     // Méthodes internationales d'analyse
  | 'spiritueux'   // Méthodes d'analyse des boissons spiritueuses
  | 'etiquetage'   // Norme internationale pour l'étiquetage des vins
  | 'resolutions'  // Résolutions de l'Assemblée générale OIV
  | 'techniques';  // Documents techniques & rapports d'experts

export type EuStatus = 
  | 'autorise_ue'        // Pleinement repris dans le Règlement (UE) 2019/934
  | 'encadre_specifique'  // Autorisé avec restrictions/conditions UE plus strictes
  | 'non_admis_ue'       // Pratique OIV non autorisée dans l'UE
  | 'divergence_oiv_ue'  // Divergence identifiée entre OIV et règlementation UE
  | 'non_applicable';    // Méthode analytique ou document indicatif sans statut légal direct

export type DocStatus = 
  | 'adopte'
  | 'en_vigueur'
  | 'modifie'
  | 'remplace'
  | 'statut_non_determine';

export interface DocumentVersion {
  id: string;
  versionLabel: string;
  adoptionYear: number;
  adoptionDate?: string;
  sourceFileUrl?: string;
  summaryOfChanges?: string;
  extractedText: string;
  prescriptions: string[];
  limitsAndDoses: string;
  isCurrent: boolean;
}

export interface RelatedDocument {
  id: string;
  officialReference: string;
  title: string;
  relationType: 
    | 'modifie'
    | 'remplace'
    | 'complete'
    | 'cite'
    | 'codex_associe'
    | 'methode_associee'
    | 'reprise_dans_ue'
    | 'divergence_avec';
  evidence?: string;
}

export interface EuRegulationMapping {
  euStatus: EuStatus;
  primaryReference: string; // ex: "Règlement délégué (UE) 2019/934 - Annexe I, Partie A, Tableau 1"
  amendmentReference?: string; // ex: "Règlement (UE) 2024/3085"
  officialJournalPublication?: string; // ex: "JOUE C/2025/1829 du 31.03.2025"
  prevalenceRule: string; // Explication stricte de la prévalence UE en cas de divergence
  euLimitsAndConditions?: string;
  divergenceNotes?: string;
}

export interface OivDocument {
  id: string;
  officialReference: string; // ex: "OIV-OENO 738-2025"
  title: string;
  family: OivFamily;
  domain: string; // ex: "Contrôle microbiologique", "Stabilisation tartrique", "Acidification", etc.
  category: 'Moûts' | 'Vins' | 'Vins spéciaux' | 'Analyses' | 'Produits' | 'Général';
  adoptionDate: string;
  adoptionYear: number;
  language: string;
  status: DocStatus;
  officialUrl: string;
  pdfUrl?: string;
  eurLexUrl?: string;
  oivLiveSearchUrl?: string;
  
  // Contenu documentaire
  summary: string;
  oenologicalObjectives: string[];
  prescriptions: string[];
  limitsAndDoses: string;
  substanceName?: string;
  chemicalFormula?: string;
  casNumber?: string;
  
  // Articulation réglementaire UE
  euRegulation: EuRegulationMapping;
  
  // Versions et relations
  versions: DocumentVersion[];
  relatedDocuments: RelatedDocument[];
  
  // Métadonnées de consultation
  lastCheckedDate: string;
  isRecentPublication?: boolean;
}

export interface OfficialSourceRepo {
  id: string;
  name: string;
  organization: 'OIV' | 'Union Européenne (EUR-Lex)' | 'Journal Officiel (JOUE)';
  description: string;
  directUrl: string;
  directPdfUrl?: string;
  updateFrequency: string;
  lastVerifiedDate: string;
  isLiveMonitoring: boolean;
  celexOrCode?: string;
}

export interface UserNote {
  documentId: string;
  content: string;
  updatedAt: string;
}

export interface DossierItem {
  documentId: string;
  addedAt: string;
  clientContext?: string;
  priority?: 'standard' | 'haute' | 'critique';
}

export interface FilterState {
  searchQuery: string;
  family: OivFamily | 'all';
  domain: string;
  category: string;
  euStatus: EuStatus | 'all';
  yearRange: [number, number];
  status: DocStatus | 'all';
  onlyRecent: boolean;
}

export interface TreatmentSimulation {
  substanceKey: string;
  substanceName: string;
  matrix: 'Moût' | 'Vin blanc' | 'Vin rouge' | 'Vin rosé' | 'Vin effervescent' | 'Vin doux / moelleux';
  volumeHl: number;
  doseMgPerL: number;
  tankNumber?: string;
  lotNumber?: string;
  operator?: string;
  treatmentDate?: string;
}

export interface OenologicalProblem {
  id: string;
  title: string;
  problemSummary: string;
  iconName: string;
  category: 'Microbiologie' | 'Tartrique' | 'Clarification' | 'Oxydation & SO2' | 'Acidité';
  recommendedDocIds: string[];
  keyAdvice: string;
  euAlert?: string;
}
