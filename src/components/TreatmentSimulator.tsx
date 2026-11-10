import React, { useState, useMemo } from 'react';
import { OivDocument } from '../types/oiv';
import { 
  Calculator, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Printer, 
  ChevronRight
} from 'lucide-react';
import { PageContainer } from './PageContainer';
import { PageHeader } from './PageHeader';

interface SubstanceRule {
  key: string;
  name: string;
  documentRef: string;
  docId: string;
  defaultDoseMgL: number;
  maxDoseMgL: number;
  unit: 'mg/L';
  allowedMatrices: ('Moût' | 'Vin blanc' | 'Vin rouge' | 'Vin rosé' | 'Vin effervescent' | 'Vin doux / moelleux')[];
  forbiddenMatricesNotes?: Record<string, string>;
  euStatus: 'autorise_ue' | 'encadre_specifique' | 'non_admis_ue';
  euNotes: string;
  criticalIncompatibilities?: string[];
  preparationTips: string[];
}

const SUBSTANCE_RULES: SubstanceRule[] = [
  {
    key: 'acide_fumarique',
    name: 'Acide fumarique (contrôle flore lactique / FML)',
    documentRef: 'OIV-OENO 738-2025 / 581A-2021',
    docId: 'oiv-oeno-738-2025',
    defaultDoseMgL: 300,
    maxDoseMgL: 600,
    unit: 'mg/L',
    allowedMatrices: ['Moût', 'Vin blanc', 'Vin rosé', 'Vin rouge', 'Vin effervescent'],
    forbiddenMatricesNotes: {},
    euStatus: 'encadre_specifique',
    euNotes: 'Dans l\'UE (Règlement 2019/934), dose maximale stricte de 600 mg/L. Ne doit pas être employé pour l\'acidification légale.',
    criticalIncompatibilities: [
      'Inhibe fortement les bactéries lactiques : ne pas utiliser si vous prévoyez une fermentation malolactique ultérieure.',
      'Solubilité modérée à froid : dissoudre soigneusement dans une fraction de moût ou vin tiédi avant réincorporation homogène.'
    ],
    preparationTips: [
      'Contrôler le pH au préalable (efficacité accrue sur pH < 3.5).',
      'Sur moûts (résolution 738-2025) : ajout avant ou au départ de la fermentation alcoolique.'
    ]
  },
  {
    key: 'dmdc',
    name: 'Dicarbonate de diméthyle - DMDC (stabilisation levures)',
    documentRef: 'OIV-OENO 684A-2022',
    docId: 'oiv-oeno-684a-2022',
    defaultDoseMgL: 150,
    maxDoseMgL: 200,
    unit: 'mg/L',
    allowedMatrices: ['Vin doux / moelleux', 'Vin blanc', 'Vin rosé', 'Vin rouge'],
    forbiddenMatricesNotes: {
      'Moût': 'Interdit sur moûts : le DMDC est réservé aux vins avant embouteillage.',
      'Vin effervescent': 'Non applicable au stade moût ou prise de mousse.'
    },
    euStatus: 'encadre_specifique',
    euNotes: 'Dans l\'Union européenne, le DMDC est autorisé UNIQUEMENT pour les vins contenant au minimum 5 g/L de sucres fermentescibles.',
    criticalIncompatibilities: [
      'RÈGLE STRICTE UE : Interdit sur vins secs (< 5 g/L de sucres).',
      'Le vin doit être préalablement clarifié et filtré stérile (< 1 NTU conseillé).'
    ],
    preparationTips: [
      'Adjonction obligatoire par un système doseur asservi directement à l\'entrée de la tireuse de mise en bouteille.',
      'Le DMDC se décompose entièrement dans les heures suivantes en méthanol et CO2 à l\'état de traces conformes aux seuils sanitaires.'
    ]
  },
  {
    key: 'kpa',
    name: 'Polyaspartate de potassium - KPA (stabilisation tartrique)',
    documentRef: 'OIV-OENO 650-2021',
    docId: 'oiv-oeno-650-2021',
    defaultDoseMgL: 80,
    maxDoseMgL: 100,
    unit: 'mg/L',
    allowedMatrices: ['Vin blanc', 'Vin rouge', 'Vin rosé', 'Vin effervescent'],
    forbiddenMatricesNotes: {
      'Moût': 'Inutile et interdit sur moûts (réservé au vin fini stable).'
    },
    euStatus: 'autorise_ue',
    euNotes: 'Autorisé dans l\'UE à la dose maximale de 100 mg/L (Code E456 étiquetable dans la liste des ingrédients).',
    criticalIncompatibilities: [
      'INCOMPATIBILITÉ MAJEURE : Ne jamais associer avec du lysozyme (provoque une précipitation colloïdale immédiate).',
      'Le vin doit être parfaitement stable sur le plan protéique avant adjonction.'
    ],
    preparationTips: [
      'Application sur vins limpides quelques jours avant la mise en bouteille.',
      'Efficace aussi bien sur vins blancs que sur vins rouges et rosés.'
    ]
  },
  {
    key: 'cmc',
    name: 'Carboxyméthylcellulose sodique - CMC (gomme de cellulose)',
    documentRef: 'OIV-OENO 366-2009',
    docId: 'oiv-oeno-366-2009',
    defaultDoseMgL: 80,
    maxDoseMgL: 100,
    unit: 'mg/L',
    allowedMatrices: ['Vin blanc', 'Vin effervescent'],
    forbiddenMatricesNotes: {
      'Vin rouge': 'INTERDIT / DÉCONSEILLÉ : Réagit fortement avec les polyphénols et la matière colorante instable en provoquant un trouble et dépôt.',
      'Vin rosé': 'Déconseillé sur rosés colorés ou riches en tanins.',
      'Moût': 'Interdit sur moûts.'
    },
    euStatus: 'encadre_specifique',
    euNotes: 'Dans l\'UE, autorisé uniquement pour les vins blancs et effervescents à 100 mg/L max (Code E466).',
    criticalIncompatibilities: [
      'STRICTEMENT INCOMPATIBLE AVEC LES VINS ROUGES (précipitation polyphénolique).',
      'Stabilité protéique parfaite indispensable (test à la chaleur).'
    ],
    preparationTips: [
      'Incorporer en solution aqueuse à 5 % lentement et sous agitation vive.',
      'Laisser reposer au moins 48 heures avant filtration de sécurité.'
    ]
  },
  {
    key: 'proteines_pois',
    name: 'Protéines végétales de pois et pomme de terre (clarification / collage)',
    documentRef: 'OIV-OENO 494-2017',
    docId: 'oiv-oeno-494-2017',
    defaultDoseMgL: 200, // 20 g/hL = 200 mg/L
    maxDoseMgL: 500,     // 50 g/hL = 500 mg/L
    unit: 'mg/L',
    allowedMatrices: ['Moût', 'Vin blanc', 'Vin rouge', 'Vin rosé', 'Vin effervescent'],
    forbiddenMatricesNotes: {},
    euStatus: 'autorise_ue',
    euNotes: 'Pleinement autorisé dans l\'Union européenne. Sans obligation d\'étiquetage allergène.',
    criticalIncompatibilities: [],
    preparationTips: [
      'Mettre en suspension dans 10 fois son poids d\'eau avant incorporation homogène dans la cuve.',
      'Effectuer un test préalable en éprouvettes pour adapter la dose de débourbage ou d\'affinement.'
    ]
  },
  {
    key: 'levures_glutathion',
    name: 'Levures inactivées à niveau garanti en glutathion GSH (antioxydant)',
    documentRef: 'OIV-OENO 674A-2022',
    docId: 'oiv-oeno-674a-2022',
    defaultDoseMgL: 15, // 15 mg/L de GSH apporté
    maxDoseMgL: 20,     // 20 mg/L de GSH apporté
    unit: 'mg/L',
    allowedMatrices: ['Vin blanc', 'Vin rosé', 'Moût'],
    forbiddenMatricesNotes: {
      'Vin rouge': 'Intérêt limité sur rouges et non ciblé par la résolution pour la protection thiols.'
    },
    euStatus: 'autorise_ue',
    euNotes: 'Autorisé dans l\'UE à la condition que l\'apport effectif de glutathion n\'excède pas 20 mg/L.',
    criticalIncompatibilities: [
      'Interdiction absolue d\'employer du glutathion chimique pur de synthèse (seule la biomasse de levures est licite).'
    ],
    preparationTips: [
      'Ajouter de préférence en fin de fermentation alcoolique ou lors du premier soutirage.',
      'Permet de réduire le besoin en SO2 libre protecteur.'
    ]
  }
];

interface TreatmentSimulatorProps {
  documents: OivDocument[];
  onSelectDoc: (doc: OivDocument) => void;
}

export const TreatmentSimulator: React.FC<TreatmentSimulatorProps> = ({
  documents,
  onSelectDoc
}) => {
  // Input states
  const [selectedSubstanceKey, setSelectedSubstanceKey] = useState<string>('acide_fumarique');
  const [matrix, setMatrix] = useState<'Moût' | 'Vin blanc' | 'Vin rouge' | 'Vin rosé' | 'Vin effervescent' | 'Vin doux / moelleux'>('Moût');
  const [volumeHl, setVolumeHl] = useState<number>(100);
  const [doseMgL, setDoseMgL] = useState<number>(300);
  const [tankNumber, setTankNumber] = useState<string>('Cuve B-12');
  const [lotNumber, setLotNumber] = useState<string>('LOT-2026-08');
  const [operator, setOperator] = useState<string>('Maître de chai');

  const selectedRule = useMemo(() => {
    return SUBSTANCE_RULES.find(r => r.key === selectedSubstanceKey) || SUBSTANCE_RULES[0];
  }, [selectedSubstanceKey]);

  // When changing substance, adjust default dose and matrix if needed
  const handleSelectSubstance = (key: string) => {
    setSelectedSubstanceKey(key);
    const rule = SUBSTANCE_RULES.find(r => r.key === key);
    if (rule) {
      setDoseMgL(rule.defaultDoseMgL);
      if (!rule.allowedMatrices.includes(matrix)) {
        setMatrix(rule.allowedMatrices[0]);
      }
    }
  };

  // Calculations
  // 1 g/hL = 10 mg/L => doseInGPerHl = doseMgL / 10
  const doseInGPerHl = doseMgL / 10;
  // Total mass in grams = volumeHl * doseInGPerHl
  const totalMassGrams = Math.round(volumeHl * doseInGPerHl * 10) / 10;
  const totalMassKg = Math.round((totalMassGrams / 1000) * 1000) / 1000;

  // Compliance checks
  const isDoseExceeded = doseMgL > selectedRule.maxDoseMgL;
  const isMatrixForbidden = !!selectedRule.forbiddenMatricesNotes?.[matrix];
  const isCompliant = !isDoseExceeded && !isMatrixForbidden;

  const associatedDoc = documents.find(d => d.id === selectedRule.docId || d.officialReference.includes(selectedRule.documentRef.split(' ')[0]));

  const handlePrint = () => {
    window.print();
  };

  return (
    <PageContainer className="space-y-8">
      
      {/* Header */}
      <PageHeader
        className="no-print"
        icon={Calculator}
        eyebrow="Outil professionnel de chai"
        title="Simulateur & contrôleur de conformité de traitement"
        description="Calculez les masses exactes à incorporer, vérifiez les plafonds réglementaires OIV et UE (Règlement 2019/934), et détectez les incompatibilités physico-chimiques avant intervention."
        actions={
          <button
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#332F2C] rounded-lg transition-colors flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimer la fiche de traitement</span>
          </button>
        }
      />

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Form Controls (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#E7E2DA] rounded-xl p-6 shadow-xs space-y-6">
          
          <h2 className="text-base font-bold font-editorial text-[#1C1917] border-b border-[#F2EEE9] pb-3">
            Paramètres de l'Intervention Œnologique
          </h2>

          {/* 1. Substance Selection */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C]">
              Substance ou Pratique Œnologique
            </label>
            <select
              value={selectedSubstanceKey}
              onChange={(e) => handleSelectSubstance(e.target.value)}
              className="w-full p-2.5 bg-[#FAF8F5] border border-[#E7E2DA] rounded-lg text-sm text-[#1C1917] font-medium focus:outline-none focus:border-[#6B1728]"
            >
              {SUBSTANCE_RULES.map((sub) => (
                <option key={sub.key} value={sub.key}>
                  {sub.name} (Réf : {sub.documentRef})
                </option>
              ))}
            </select>
          </div>

          {/* 2. Matrice Selection */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C]">
              Matrice / Produit à traiter
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(['Moût', 'Vin blanc', 'Vin rouge', 'Vin rosé', 'Vin effervescent', 'Vin doux / moelleux'] as const).map((m) => {
                const isSelected = matrix === m;
                const isWarning = selectedRule.forbiddenMatricesNotes?.[m];
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMatrix(m)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all text-center cursor-pointer border ${
                      isSelected
                        ? 'bg-[#6B1728] text-white border-[#6B1728] shadow-xs'
                        : isWarning
                        ? 'bg-rose-50/60 text-rose-800 border-rose-200 hover:bg-rose-100/60'
                        : 'bg-[#FAF8F5] text-[#44403C] border-[#E7E2DA] hover:bg-[#F3EFEA]'
                    }`}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
            {selectedRule.forbiddenMatricesNotes?.[matrix] && (
              <div className="p-2.5 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800 flex items-start gap-2 mt-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{selectedRule.forbiddenMatricesNotes[matrix]}</span>
              </div>
            )}
          </div>

          {/* 3. Volume and Dosage Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            
            {/* Volume in hL */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                Volume du lot (en Hectolitres)
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={1}
                  max={5000}
                  value={volumeHl}
                  onChange={(e) => setVolumeHl(Math.max(1, parseFloat(e.target.value) || 0))}
                  className="w-full p-2.5 pr-12 bg-white border border-[#E7E2DA] rounded-lg text-base font-bold font-mono text-[#1C1917] focus:outline-none focus:border-[#6B1728]"
                />
                <span className="absolute right-3 top-3 text-xs font-mono font-semibold text-[#78716C]">
                  hL
                </span>
              </div>
              <div className="flex gap-1.5 pt-1">
                {[25, 50, 100, 250].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVolumeHl(v)}
                    className="px-2 py-0.5 bg-[#FAF8F5] border border-[#E7E2DA] rounded text-[11px] font-mono text-[#57534E] hover:bg-[#F3EFEA]"
                  >
                    {v} hL
                  </button>
                ))}
              </div>
            </div>

            {/* Dose in mg/L */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                  Dose prévue (en mg/L)
                </label>
                <button
                  type="button"
                  onClick={() => setDoseMgL(selectedRule.maxDoseMgL)}
                  className="text-[10px] text-[#6B1728] hover:underline font-semibold"
                >
                  Plafond max ({selectedRule.maxDoseMgL} mg/L)
                </button>
              </div>
              <div className="relative">
                <input
                  type="number"
                  min={1}
                  max={selectedRule.maxDoseMgL * 2}
                  value={doseMgL}
                  onChange={(e) => setDoseMgL(Math.max(0, parseFloat(e.target.value) || 0))}
                  className={`w-full p-2.5 pr-14 bg-white border rounded-lg text-base font-bold font-mono focus:outline-none ${
                    isDoseExceeded 
                      ? 'border-rose-400 text-rose-900 bg-rose-50/20 focus:border-rose-600' 
                      : 'border-[#E7E2DA] text-[#1C1917] focus:border-[#6B1728]'
                  }`}
                />
                <span className="absolute right-3 top-3 text-xs font-mono font-semibold text-[#78716C]">
                  mg/L
                </span>
              </div>
              <div className="text-[11px] text-[#78716C] flex items-center justify-between pt-1">
                <span>Équivalent : <strong className="font-mono text-[#1C1917]">{doseInGPerHl} g/hL</strong></span>
                <span className="font-mono">Max : {selectedRule.maxDoseMgL} mg/L</span>
              </div>
            </div>

          </div>

          {/* 4. Cellar Log Metadata (Cuve, Lot, Opérateur) */}
          <div className="pt-3 border-t border-[#F2EEE9] space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#78716C]">
              Traçabilité de Chai (pour le registre légal)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] text-[#78716C] mb-1">N° de Cuve</label>
                <input
                  type="text"
                  value={tankNumber}
                  onChange={(e) => setTankNumber(e.target.value)}
                  className="w-full p-2 text-xs bg-[#FAF8F5] border border-[#E7E2DA] rounded text-[#1C1917]"
                />
              </div>
              <div>
                <label className="block text-[11px] text-[#78716C] mb-1">N° de Lot / Vin</label>
                <input
                  type="text"
                  value={lotNumber}
                  onChange={(e) => setLotNumber(e.target.value)}
                  className="w-full p-2 text-xs bg-[#FAF8F5] border border-[#E7E2DA] rounded text-[#1C1917]"
                />
              </div>
              <div>
                <label className="block text-[11px] text-[#78716C] mb-1">Opérateur / Responsable</label>
                <input
                  type="text"
                  value={operator}
                  onChange={(e) => setOperator(e.target.value)}
                  className="w-full p-2 text-xs bg-[#FAF8F5] border border-[#E7E2DA] rounded text-[#1C1917]"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Computed Results & Verdict (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Calculation Card */}
          <div className="bg-white border-2 border-[#6B1728]/30 rounded-xl p-6 shadow-xs space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-[#F2EEE9]">
              <span className="text-xs uppercase font-semibold text-[#6B1728] tracking-wider">
                Résultat & Quantités à peser
              </span>
              <span className="font-mono text-xs text-[#78716C]">
                {new Date().toLocaleDateString('fr-FR')}
              </span>
            </div>

            {/* Mass to weigh display */}
            <div className="p-4 bg-[#FAF8F5] border border-[#E8DEC8] rounded-xl text-center space-y-1">
              <span className="text-xs text-[#78716C] block uppercase tracking-wider font-semibold">
                Quantité Totale de Produit Recommandée
              </span>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#1C1917] tracking-tight">
                {totalMassGrams >= 1000 ? `${totalMassKg} kg` : `${totalMassGrams} g`}
              </div>
              <span className="text-xs font-mono text-[#57534E] block">
                ({totalMassGrams} grammes pour {volumeHl} hL à {doseInGPerHl} g/hL)
              </span>
            </div>

            {/* Compliance Verdict Banner */}
            <div className={`p-4 rounded-xl border space-y-1.5 ${
              isCompliant
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                : 'bg-rose-50 border-rose-300 text-rose-950'
            }`}>
              <div className="flex items-center gap-2 font-bold text-sm">
                {isCompliant ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Conforme OIV & Droit Européen (UE 2019/934)</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />
                    <span>Non-Conformité Réglementaire Détectée</span>
                  </>
                )}
              </div>
              
              {isDoseExceeded && (
                <p className="text-xs text-rose-800 leading-relaxed font-medium">
                  Dépassement du plafond légal : votre dose de <strong>{doseMgL} mg/L</strong> excède le plafond de <strong>{selectedRule.maxDoseMgL} mg/L</strong> fixé par l'OIV et l'Union européenne.
                </p>
              )}
              {isMatrixForbidden && (
                <p className="text-xs text-rose-800 leading-relaxed font-medium">
                  {selectedRule.forbiddenMatricesNotes?.[matrix]}
                </p>
              )}
              {isCompliant && (
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Dose conforme au plafond légal ({doseMgL} mg/L $\le$ {selectedRule.maxDoseMgL} mg/L). {selectedRule.euNotes}
                </p>
              )}
            </div>

            {/* Incompatibilities & Critical Warnings */}
            {selectedRule.criticalIncompatibilities && selectedRule.criticalIncompatibilities.length > 0 && (
              <div className="space-y-1.5 pt-2 border-t border-[#F2EEE9]">
                <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  Précautions & Incompatibilités Physico-Chimiques :
                </span>
                <ul className="text-xs text-[#57534E] space-y-1 list-disc list-inside">
                  {selectedRule.criticalIncompatibilities.map((inc, i) => (
                    <li key={i} className="leading-relaxed">{inc}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Protocol Tips */}
            <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#E7E2DA] text-xs space-y-1">
              <strong className="text-[#1C1917] block">Conseil de mise en œuvre de chai :</strong>
              <ul className="space-y-0.5 text-[#57534E]">
                {selectedRule.preparationTips.map((tip, i) => (
                  <li key={i}>· {tip}</li>
                ))}
              </ul>
            </div>

            {/* Link to full document */}
            {associatedDoc && (
              <div className="pt-2 text-right">
                <button
                  type="button"
                  onClick={() => onSelectDoc(associatedDoc)}
                  className="text-xs font-semibold text-[#6B1728] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Consulter la fiche OIV complète ({associatedDoc.officialReference})</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Printable Cellar Treatment Log (visible when printing) */}
      <div className="hidden print:block bg-white p-8 space-y-6 text-black border-2 border-black">
        <div className="border-b-2 border-black pb-4 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold font-serif">ORDRE DE PRÉPARATION & MANIPULATION ŒNOLOGIQUE</h1>
            <p className="text-xs">Registre de cave au titre du Règlement délégué (UE) 2019/934</p>
          </div>
          <div className="text-right text-xs">
            <p>Date : {new Date().toLocaleDateString('fr-FR')}</p>
            <p>Lot : {lotNumber}</p>
            <p>Cuve : {tankNumber}</p>
          </div>
        </div>

        <table className="w-full text-xs border-collapse border border-black">
          <tbody>
            <tr>
              <td className="p-2 border border-black font-bold">Produit / Pratique :</td>
              <td className="p-2 border border-black">{selectedRule.name}</td>
              <td className="p-2 border border-black font-bold">Réf. OIV :</td>
              <td className="p-2 border border-black">{selectedRule.documentRef}</td>
            </tr>
            <tr>
              <td className="p-2 border border-black font-bold">Volume traité :</td>
              <td className="p-2 border border-black">{volumeHl} Hectolitres</td>
              <td className="p-2 border border-black font-bold">Matrice :</td>
              <td className="p-2 border border-black">{matrix}</td>
            </tr>
            <tr>
              <td className="p-2 border border-black font-bold">Dose appliquée :</td>
              <td className="p-2 border border-black">{doseMgL} mg/L ({doseInGPerHl} g/hL)</td>
              <td className="p-2 border border-black font-bold">Plafond légal :</td>
              <td className="p-2 border border-black">{selectedRule.maxDoseMgL} mg/L</td>
            </tr>
            <tr>
              <td className="p-2 border border-black font-bold text-base">MASSE TOTALE À PESER :</td>
              <td className="p-2 border border-black text-base font-bold" colSpan={3}>
                {totalMassGrams >= 1000 ? `${totalMassKg} kg` : `${totalMassGrams} g`}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="border border-black p-3 text-xs space-y-1">
          <p className="font-bold">Attestation de conformité réglementaire :</p>
          <p>L'opération ci-dessus est attestée conforme aux prescriptions du Code international des pratiques œnologiques et au Règlement délégué (UE) 2019/934 de la Commission.</p>
        </div>

        <div className="pt-8 flex justify-between text-xs">
          <div>
            <p>Opérateur : {operator}</p>
            <p className="pt-6">Visa / Signature : ________________________</p>
          </div>
          <div>
            <p>Maître de Chai / Responsable Qualité :</p>
            <p className="pt-6">Visa / Signature : ________________________</p>
          </div>
        </div>
      </div>

    </PageContainer>
  );
};
