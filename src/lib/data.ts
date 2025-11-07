
export const milkStandards = {
  toned: { name: "Toned Milk", fat: 3.0, snf: 8.5 },
  double_toned: { name: "Double Toned Milk", fat: 1.5, snf: 9.0 },
  standardized: { name: "Standardized Milk", fat: 4.5, snf: 8.5 },
  full_cream: { name: "Full Cream Milk", fat: 6.0, snf: 9.0 },
  skimmed_milk: { name: "Skimmed Milk", fat: 0.5, snf: 8.7 },
};

export const snfFormulas: Record<string, { name: string; formulaText: string; calc: (clr: number, fat: number, c?: number) => number; inverse: (snf: number, fat: number, c?: number) => number }> = {
    'isi': { name: 'ISI / BIS (Official)', formulaText: 'SNF % = (CLR/4) + (0.25 * Fat) + 0.44', calc: (clr, fat) => (clr / 4) + (0.25 * fat) + 0.44, inverse: (snf, fat) => (snf - (0.25 * fat) - 0.44) * 4 },
    'richmond': { name: 'Richmond’s Formula', formulaText: 'SNF % = (CLR/4) + (0.21 * Fat) + 0.36', calc: (clr, fat) => (clr / 4) + (0.21 * fat) + 0.36, inverse: (snf, fat) => (snf - (0.21 * fat) - 0.36) * 4 },
    'new_formula': { name: 'New Formula', formulaText: 'SNF % = (CLR/4) + (0.21 * Fat) + 0.29', calc: (clr, fat) => (clr / 4) + (0.21 * fat) + 0.29, inverse: (snf, fat) => (snf - (0.21 * fat) - 0.29) * 4 },
    'cooperative': { name: 'Modified ISI / Cooperative', formulaText: 'SNF % = (CLR/4) + (0.25 * Fat) + 0.14', calc: (clr, fat) => (clr / 4) + (0.25 * fat) + 0.14, inverse: (snf, fat) => (snf - (0.25 * fat) - 0.14) * 4 },
    'dairy_union': { name: 'Simplified Dairy Union', formulaText: 'SNF % = (CLR/4) + (Fat/5) + 0.44', calc: (clr, fat) => (clr / 4) + (fat / 5) + 0.44, inverse: (snf, fat) => (snf - (fat/5) - 0.44) * 4 },
    'punjab_haryana': { name: 'Punjab / Haryana Variation', formulaText: 'SNF % = (CLR/4) + (0.22 * Fat) + 0.36', calc: (clr, fat) => (clr / 4) + (0.22 * fat) + 0.36, inverse: (snf, fat) => (snf - (0.22 * fat) - 0.36) * 4 },
    'andhra': { name: 'Andhra Pradesh Practice', formulaText: 'SNF % = (CLR/4) + (0.21 * Fat) + 0.35', calc: (clr, fat) => (clr / 4) + (0.21 * fat) + 0.35, inverse: (snf, fat) => (snf - (0.21 * fat) - 0.35) * 4 },
    'karnataka_tamil': { name: 'Karnataka / Tamil Nadu Practice', formulaText: 'SNF % = (CLR/4) + (0.25 * Fat) + 0.20', calc: (clr, fat) => (clr / 4) + (0.25 * fat) + 0.20, inverse: (snf, fat) => (snf - (0.25 * fat) - 0.20) * 4 },
    'general': { name: 'General Shortcut (Variable C)', formulaText: 'SNF % = (CLR/4) + (0.25 * Fat) + C', calc: (clr, fat, c = 0.72) => (clr / 4) + (0.25 * fat) + c, inverse: (snf, fat, c = 0.72) => (snf - (0.25 * fat) - c) * 4 },
};

export const componentProps = {
  cream: { fat: 40.0, snf: 5.4 },
  skimmed_milk: { fat: 0.05, snf: 8.8, clr: 34 },
  smp: { fat: 1.0, snf: 95.0, ts: 96.0},
  water: { fat: 0.0, snf: 0.0 },
  milkDensity: 1.03,
};

export const chemicals = {
  acids: {
    h2so4: { name: "Sulphuric Acid (H₂SO₄)", molarMass: 98.07, nFactor: 2, type: "liquid", purity: 98, density: 1.84 },
    hcl: { name: "Hydrochloric Acid (HCl)", molarMass: 36.46, nFactor: 1, type: "liquid", purity: 37, density: 1.18 },
    nitric: { name: 'Nitric Acid (HNO₃)', molarMass: 63.01, nFactor: 1, type: 'liquid', purity: 70, density: 1.42 },
    lactic: { name: "Lactic Acid (C₃H₆O₃)", molarMass: 90.08, nFactor: 1, type: "liquid", purity: 88, density: 1.2 },
    acetic: { name: "Acetic Acid (CH₃COOH)", molarMass: 60.05, nFactor: 1, type: "liquid", purity: 99.8, density: 1.05 },
    phosphoric: { name: 'Phosphoric Acid (H₃PO₄)', molarMass: 98.00, nFactor: 3, type: 'liquid', purity: 85, density: 1.69 },
    formic: { name: 'Formic Acid (CH₂O₂)', molarMass: 46.03, nFactor: 1, type: 'liquid', purity: 85, density: 1.18 },
    perchloric: { name: 'Perchloric Acid (HClO₄)', molarMass: 100.46, nFactor: 1, type: 'liquid', purity: 70, density: 1.67 },
    citric: { name: "Citric Acid (C₆H₈O₇)", molarMass: 192.12, nFactor: 3, type: "solid" },
    oxalic: { name: "Oxalic Acid (C₂H₂O₄·2H₂O)", molarMass: 126.07, nFactor: 2, type: "solid" },
    tartaric: { name: 'Tartaric Acid (C₄H₆O₆)', molarMass: 150.09, nFactor: 2, type: 'solid' },
    malic: { name: 'Malic Acid (C₄H₆O₅)', molarMass: 134.09, nFactor: 2, type: 'solid' },
    boric: { name: 'Boric Acid (H₃BO₃)', molarMass: 61.83, nFactor: 1, type: 'solid' },
    sulfamic: { name: 'Sulfamic Acid (H₃NSO₃)', molarMass: 97.09, nFactor: 1, type: 'solid' },
    benzoic: { name: 'Benzoic Acid (C₇H₆O₂)', molarMass: 122.12, nFactor: 1, type: 'solid' },
    succinic: { name: 'Succinic Acid (C₄H₆O₄)', molarMass: 118.09, nFactor: 2, type: 'solid' },
    ascorbic: { name: 'Ascorbic Acid (C₆H₈O₆)', molarMass: 176.12, nFactor: 2, type: 'solid' }, // Note: nFactor can be complex, using 2 for titrations
    potassium_dichromate: { name: 'Potassium Dichromate (K₂Cr₂O₇)', molarMass: 294.18, nFactor: 6, type: 'solid' }, // Used in redox titrations
    potassium_permanganate: { name: 'Potassium Permanganate (KMnO₄)', molarMass: 158.03, nFactor: 5, type: 'solid' }, // Used in redox titrations
  },
  bases: {
    naoh: { name: "Sodium Hydroxide (NaOH)", molarMass: 40.0, nFactor: 1, type: "solid" },
    koh: { name: "Potassium Hydroxide (KOH)", molarMass: 56.11, nFactor: 1, type: "solid" },
    na2co3: { name: "Sodium Carbonate (Na₂CO₃)", molarMass: 105.99, nFactor: 2, type: "solid" },
    caoh2: { name: 'Calcium Hydroxide (Ca(OH)₂)', molarMass: 74.09, nFactor: 2, type: 'solid' },
    nahco3: { name: 'Sodium Bicarbonate (NaHCO₃)', molarMass: 84.01, nFactor: 1, type: 'solid' },
    nh4oh: { name: "Ammonium Hydroxide (NH₄OH)", molarMass: 35.05, nFactor: 1, type: "liquid", purity: 25, density: 0.91 },
    tris: { name: 'Tris(hydroxymethyl)aminomethane', molarMass: 121.14, nFactor: 1, type: 'solid' },
    na_borate: { name: 'Sodium Borate (Borax)', molarMass: 381.37, nFactor: 2, type: 'solid' },
    na_phosphate_di: { name: 'Disodium Phosphate (Na₂HPO₄)', molarMass: 141.96, nFactor: 2, type: 'solid' },
    na_phosphate_tri: { name: 'Trisodium Phosphate (Na₃PO₄)', molarMass: 163.94, nFactor: 3, type: 'solid' },
    lithium_hydroxide: { name: 'Lithium Hydroxide (LiOH)', molarMass: 23.95, nFactor: 1, type: 'solid' },
    barium_hydroxide: { name: 'Barium Hydroxide (Ba(OH)₂)', molarMass: 171.34, nFactor: 2, type: 'solid' },
    sodium_silicate: { name: 'Sodium Silicate (Na₂SiO₃)', molarMass: 122.06, nFactor: 2, type: 'solid' },
    potassium_carbonate: { name: 'Potassium Carbonate (K₂CO₃)', molarMass: 138.21, nFactor: 2, type: 'solid' },
  },
  other_reagents: {
    sodium_thiosulphate: { name: 'Sodium Thiosulphate (Na₂S₂O₃·5H₂O)', molarMass: 248.18, nFactor: 1, type: 'solid' },
    silver_nitrate: { name: 'Silver Nitrate (AgNO₃)', molarMass: 169.87, nFactor: 1, type: 'solid' },
    edta: { name: 'EDTA Disodium Salt', molarMass: 372.24, nFactor: 2, type: 'solid' },
  },
  indicators: {
    phenolphthalein: { name: "Phenolphthalein", type: "w/v", weight: 1, solvent: "95% ethanol", baseVolume: 100, note: 'Weigh 1g, dissolve in 100mL of 95% ethanol.' },
    'methyl-orange': { name: "Methyl Orange", type: "w/v", weight: 0.1, solvent: "water", baseVolume: 100, note: 'Weigh 0.1g, dissolve in 100mL of water.' },
    murexide: { name: 'Murexide', type: 'w/v', weight: 0.2, solvent: 'ethylene glycol', baseVolume: 100, note: 'Weigh 0.2g, dissolve in 100mL of ethylene glycol. Stable for 6 months.' },
    'kjeldahl-mixed': { name: 'Kjeldahl Mixed Indicator', type: 'mixed', solvent: '95% ethanol', note: 'Dissolve 0.1g Bromocresol Green + 0.02g Methyl Red in 100mL of 95% ethanol.'},

    'thymol-blue-acid': { name: 'Thymol Blue (Acid Range)', type: 'complex_liquid', weight: 0.10, naohVolume: 10.75, baseVolume: 250 },
    'bromophenol-blue': { name: 'Bromophenol Blue', type: 'complex_liquid', weight: 0.10, naohVolume: 7.45, baseVolume: 250 },
    'bromocresol-green': { name: 'Bromocresol Green', type: 'complex_liquid', weight: 0.10, naohVolume: 7.15, baseVolume: 250 },
    'methyl-red': { name: 'Methyl Red', type: 'complex_liquid', weight: 0.10, naohVolume: 18.60, baseVolume: 250 },
    'bromocresol-purple': { name: 'Bromocresol Purple', type: 'complex_liquid', weight: 0.10, naohVolume: 9.25, baseVolume: 250 },
    'bromothymol-blue': { name: 'Bromothymol Blue', type: 'complex_liquid', weight: 0.10, naohVolume: 8.00, baseVolume: 250 },
    'phenol-red': { name: 'Phenol Red', type: 'complex_liquid', weight: 0.10, naohVolume: 14.20, baseVolume: 250 },
    'cresol-red': { name: 'Cresol Red', type: 'complex_liquid', weight: 0.10, naohVolume: 13.10, baseVolume: 250 },
    'thymol-blue-alkaline': { name: 'Thymol Blue (Alkaline Range)', type: 'complex_liquid', weight: 0.10, naohVolume: 10.75, baseVolume: 250 },
    'thymolphthalein': { name: 'Thymolphthalein', type: 'w/v', weight: 0.10, solvent: 'rectified spirit', baseVolume: 100, note: 'Dissolve 0.10gm in 100mL of rectified spirit.' },
    'thymol-violet': { name: 'Thymol Violet', type: 'mixed', note: 'Dissolve 0.10gm of tropaeolin O in 100mL of water. Dissolve 0.04gm of thymolphthalein in 50mL of water. Mix one part of tropaeolin O solution with 4 parts of thymolphthalein solution' }
  },
  primaryStandards: {
    khp: { name: "Potassium Hydrogen Phthalate (KHP)", molarMass: 204.22, nFactor: 1 },
    na2co3_std: { name: "Anhydrous Sodium Carbonate (Na₂CO₃)", molarMass: 105.99, nFactor: 2 },
    oxalic_acid_std: { name: "Oxalic Acid (H₂C₂O₄·2H₂O)", molarMass: 126.07, nFactor: 2 },
    k2cr2o7_std: { name: "Potassium Dichromate (K₂Cr₂O₇)", molarMass: 294.18, nFactor: 6 },
  },
  spirits: {
    ethanol: { name: "Ethanol (Ethyl Alcohol)", stockPurity: 95 },
    ipa: { name: "IPA (Isopropyl Alcohol)", stockPurity: 99.9 },
    propanol: { name: 'Propanol', stockPurity: 99.5 },
    methanol: { name: 'Methanol (Methyl Alcohol)', stockPurity: 99.8 }
  },
};

export const funFacts = [
  { q: "Doodh ubalne par upar kyu aata hai? (Why does milk boil over?)", a: "Doodh mein protein (casein aur whey), fat, aur paani hota hai. Jab doodh garam hota hai, to protein aur fat upar ek patli si layer (malai) bana lete hain. Neeche ka paani bhaap (steam) banta hai, lekin ye steam malai ki layer ki vajah se bahar nahi nikal paati. Jab steam ka pressure badhta hai, to woh malai ki layer ko upar utha deta hai, aur doodh ubal kar bahar aa jaata hai." },
  { q: "Paneer banane mein nimbu ya sirka (vinegar) kyu daalte hain? (Why are lemon or vinegar used to make paneer?)", a: "Doodh mein casein naam ka protein hota hai. Nimbu ya sirka (vinegar) acid hote hain. Jab acid doodh mein milaya jaata hai, to yeh doodh ka pH level kam kar deta hai. Isse casein protein aapas mein judkar thos (solid) ho jaata hai, jise hum paneer ya chhena kehte hain. Is process ko 'coagulation' ya 'acid coagulation' kehte hain." },
  { q: "Dahi kaise jamta hai? (How is curd/yogurt formed?)", a: "Dahi jamne ka kaaran bacteria hote hain, jinko 'Lactobacillus' kehte hain. Ye bacteria doodh mein maujood lactose sugar ko khaa kar Lactic Acid banate hain. Ye lactic acid doodh ke casein protein ko jamakar (coagulate) dahi bana deta hai. Is process ko 'fermentation' kehte hain." },
  { q: "Ghee mein vanaspati ki milawat ka test kaise karte hain? (How to test for vanaspati adulteration in ghee?)", a: "Iske liye <strong>Baudouin Test</strong> kiya jaata hai. Ek test tube mein thoda sa pighla hua ghee lein, usme concentrated Hydrochloric Acid (HCl) aur 2% furfural solution (alcohol mein) milayein. Agar 10 minute ke andar gulabi ya laal rang (pink or red color) aata hai, to iska matlab ghee mein vanaspati milaya gaya hai. Shuddh ghee mein koi rang nahi aayega." },
  { q: "Homogenization kya hota hai? (What is Homogenization?)", a: "Homogenization ek mechanical process hai jisme doodh ke bade fat globules (vasa ke kan) ko bahut high pressure par chote-chote tukdo me toda jaata hai. Isse fat doodh me evenly mix ho jaata hai aur upar malai ki layer nahi banti, jisse doodh ka texture smooth ho jaata hai." },
  { q: "Milk pasteurization kya hai aur kyu zaroori hai? (What is milk pasteurization and why is it important?)", a: "Pasteurization ek process hai jisme doodh ko ek specific temperature (jaise 72°C) par 15 second ke liye garam karke turant thanda kar diya jaata hai. Aisa karne se doodh mein maujood hanikarak bacteria (harmful bacteria) mar jaate hain, jisse doodh peene ke liye safe ho jaata hai aur uski shelf life (rakhne ki avadhi) badh jaati hai." },
  { q: "CIP (Cleaning-In-Place) me Kaustic (NaOH) ka kya kaam hai? (What is the role of Caustic in CIP?)", a: "Dairy plant me, CIP ke dauran Sodium Hydroxide (NaOH) ek powerful cleaning agent hai. Yeh equipment ki satah (surface) se chipke hue fat (charbi) aur protein ko saponify aur hydrolyze karke nikal deta hai, jisse machine saaf aur sanitized rehti hai." }
];

export const reagentRecipes = {
    'alcohol_alizarin': {
        name: 'Alcohol Alizarin Reagent (0.2%)',
        testName: 'Alcohol Test',
        type: 'w/v',
        components: [
            { name: 'Alizarin', amount: 0.2, unit: 'g'}
        ],
        instructions: '0.2g Alizarin ko 100ml 68% Ethyl Alcohol mein gholein. Iska istemal COB test mein hota hai.'
    },
     'barium_chloride_5': {
        name: 'Barium Chloride Solution (5% w/v)',
        testName: 'Sulphate Test',
        type: 'w/v',
        components: [
            { name: 'Barium Chloride (BaCl₂·2H₂O)', amount: 5, unit: 'g'}
        ],
        instructions: '5g Barium Chloride ko distilled water mein gholkar 100ml solution banayein.'
    },
    'barfoed': {
        name: 'Barfoed’s Reagent',
        testName: 'Reducing Sugar Test',
        type: 'fixed',
        components: [],
        instructions: 'Ise banane ke liye, 24g cupric acetate ko 450ml ubalte hue distilled water mein gholein. Turant 25ml 8.5% lactic acid garam solution mein milayein. Thanda karke, distilled water se volume 500ml tak poora karein. Is calculator se iski matra scale nahi ki ja sakti.'
    },
    'benedict': {
        name: "Benedict's Reagent",
        testName: 'Reducing Sugar Test',
        type: 'complex',
        components: [
            { name: 'Sodium Citrate', amount: 173, unit: 'g' },
            { name: 'Sodium Carbonate (Anhydrous)', amount: 100, unit: 'g' },
            { name: 'Copper Sulfate (CuSO₄·5H₂O)', amount: 17.3, unit: 'g' }
        ],
        instructions: 'Sodium citrate aur sodium carbonate ko 800ml garam paani mein gholein. Alag se, copper sulfate ko 100ml paani mein gholein. Dheere-dheere copper solution ko carbonate-citrate solution mein milayein aur paani se 1 litre tak poora karein.'
    },
    'bromothymol_blue_02': {
        name: 'Bromothymol Blue Solution (0.2%)',
        testName: 'Indicator',
        type: 'w/v',
        components: [ { name: 'Bromothymol Blue', amount: 0.2, unit: 'g' } ],
        instructions: '0.2g Bromothymol Blue ko 20ml 95% Ethanol mein gholein aur phir distilled water se volume 100ml tak poora karein.'
    },
    'buffer_sol_ph10': {
        name: 'Buffer Solution (pH 10, Hardness)',
        testName: 'Hardness Test',
        type: 'complex',
        components: [
            { name: 'Ammonium Chloride (NH4Cl)', amount: 67.5, unit: 'g'},
            { name: 'Ammonium Hydroxide (NH4OH, sp. gr. 0.88)', amount: 570, unit: 'ml'}
        ],
        instructions: '67.5g Ammonium Chloride ko 570ml Ammonium Hydroxide me gholein, aur phir distilled water se 1 litre tak poora karein.'
    },
    'buffer_carbonate_bicarbonate': {
        name: 'Buffer (Sodium Carbonate/Bicarbonate)',
        testName: 'Phosphatase Test',
        type: 'complex',
        components: [
            { name: 'Sodium Carbonate (anhydrous)', amount: 3.5, unit: 'g'},
            { name: 'Sodium Bicarbonate', amount: 1.5, unit: 'g'}
        ],
        instructions: '3.5g Sodium Carbonate aur 1.5g Sodium Bicarbonate ko distilled water me gholkar 1 litre banayein. pH 9.8 hona chahiye.'
    },
    'buffer_substrate_phos': {
        name: 'Buffer Substrate (Phosphatase Test)',
        testName: 'Phosphatase Test',
        type: 'complex',
        components: [
            { name: 'Carbonate/Bicarbonate Buffer', amount: 1000, unit: 'ml' },
            { name: 'Disodium p-nitrophenyl phosphate', amount: 1.5, unit: 'g' },
        ],
        instructions: 'Pehle Carbonate/Bicarbonate Buffer banayein. Phir 1.5g Disodium p-nitrophenyl phosphate ko us buffer mein gholkar 1 litre banayein. Stable rehta hai agar 4°C par rakha jaaye. Brown hone par discard karein.'
    },
    'chromotropic_acid': {
        name: 'Chromotropic Acid Reagent',
        testName: 'Formalin Test',
        type: 'w/v_in_acid',
        components: [ { name: '1,8-dihydroxynaphthalene-3,6-disulfonic acid', amount: 0.5, unit: 'g' } ],
        instructions: '0.5g (500mg) Chromotropic acid ko 72% Sulfuric Acid mein gholkar final volume 100ml poora karein. Yeh ek saturated solution hai.'
    },
    'color_dev_reagent': {
        name: 'Color Developing Reagent (Veg. Fat)',
        testName: 'Vegetable Fat Test',
        type: 'ratio',
        components: [
            { name: 'Water', ratio: 20 },
            { name: 'Nitric Acid', ratio: 14 },
            { name: 'Sulfuric Acid', ratio: 6 }
        ],
        instructions: 'Diye gaye anupaat (ratio) mein teeno cheezon ko mix karein.'
    },
    'crystal_violet': {
        name: "Gram's Crystal Violet",
        testName: 'Gram Staining',
        type: 'complex',
        components: [
            { name: 'Crystal Violet (90% dye content)', amount: 2, unit: 'g' },
            { name: 'Ethyl Alcohol (95%)', amount: 20, unit: 'ml' },
            { name: 'Ammonium Oxalate', amount: 0.8, unit: 'g' },
            { name: 'Distilled Water (for oxalate)', amount: 80, unit: 'ml' }
        ],
        instructions: 'Crystal violet ko alcohol mein gholein. Ammonium oxalate ko paani mein gholein. Dono solutions ko mix karein.'
    },
    'diphenylamine_2': {
        name: 'Diphenylamine Solution (2% w/v in H₂SO₄)',
        testName: 'Nitrate Test',
        type: 'w/v_in_acid',
        components: [ { name: 'Diphenylamine', amount: 2, unit: 'g' } ],
        instructions: '2g Diphenylamine ko dhyan se 100ml concentrated Sulfuric Acid mein gholein. <strong>Savdhani: Hamesha acid ko paani mein milayein, na ki paani ko acid mein. Suraksha upkaran pehnein.</strong>'
    },
    'dmab': {
        name: 'DMAB Reagent (Urea Test)',
        testName: 'Urea Test',
        type: 'complex',
        components: [
            { name: 'DMAB', amount: 1.6, unit: 'g' },
            { name: 'Ethyl Alcohol', amount: 90, unit: 'ml' },
            { name: 'Concentrated HCl', amount: 10, unit: 'ml' }
        ],
        instructions: '1.6g DMAB ko 90ml ethyl alcohol mein gholein aur phir 10ml concentrated HCl milayein. Zaroorat ho toh ethyl alcohol se final volume poora karein.'
    },
    'enzyme_glucoamylase': {
        name: 'Alpha Glucoamylase Enzyme Solution',
        testName: 'Starch Estimation',
        type: 'w/v',
        components: [ { name: 'Alpha Glucoamylase Enzyme', amount: 0.2, unit: 'g' } ],
        instructions: 'Enzyme ko distilled water mein gholkar final volume poora karein.'
    },
    'erichrome_black_t': {
        name: 'Erichrome Black T Indicator',
        testName: 'Hardness Test',
        type: 'complex',
        components: [
            { name: 'Erichrome Black T', amount: 0.5, unit: 'g'},
            { name: 'Hydroxylamine HCl', amount: 4.5, unit: 'g'},
            { name: 'Ethyl Alcohol (95%)', amount: 100, unit: 'ml'}
        ],
        instructions: '0.5g EBT aur 4.5g Hydroxylamine HCl ko 100ml 95% Ethyl Alcohol mein gholein.'
    },
    'ethanolic_koh_05': {
        name: 'Ethanolic KOH (0.5 N)',
        testName: 'Fat Analysis',
        type: 'w/v',
        components: [ { name: 'Potassium Hydroxide (KOH)', amount: 2.8, unit: 'g' } ],
        instructions: '2.8g KOH ko thode 95% ethanol mein gholein aur phir ethanol se final volume 100ml tak poora karein.'
    },
    'fehlings_a': {
        name: "Fehling's Solution A",
        testName: 'Reducing Sugar Test',
        type: 'w/v',
        components: [{ name: 'Copper(II) sulfate pentahydrate (CuSO₄·5H₂O)', amount: 6.928, unit: 'g' }],
        instructions: '6.928g Copper sulfate ko distilled water mein gholkar 100ml banayein.'
    },
    'fehlings_b': {
        name: "Fehling's Solution B",
        testName: 'Reducing Sugar Test',
        type: 'complex',
        components: [
            { name: 'Potassium sodium tartrate (Rochelle salt)', amount: 34.6, unit: 'g' },
            { name: 'Sodium Hydroxide (NaOH)', amount: 10, unit: 'g' }
        ],
        instructions: 'Dono chemicals ko distilled water mein gholkar 100ml banayein.'
    },
    'ferric_chloride_10': {
        name: 'Ferric Chloride Solution (10% w/v)',
        testName: 'Formalin Test',
        type: 'w/v',
        components: [
            { name: 'Ferric Chloride (FeCl3)', amount: 10, unit: 'g' }
        ],
        instructions: '10g Ferric Chloride ko 100ml distilled water me gholein. Ye reagent Leach Test for Formalin me istemal hota hai.'
    },
    'furfural_2': {
        name: 'Furfural Solution (2% v/v)',
        testName: 'Baudouin Test (Vanaspati)',
        type: 'v/v',
        components: [ { name: 'Furfural', amount: 2, unit: 'ml' } ],
        instructions: '2ml Furfural ko 98ml Ethyl Alcohol mein milakar 100ml solution banayein.'
    },
    'grams_iodine': {
        name: "Gram's Iodine",
        testName: 'Gram Staining',
        type: 'complex',
        components: [
            { name: 'Iodine', amount: 1, unit: 'g' },
            { name: 'Potassium Iodide (KI)', amount: 2, unit: 'g' },
            { name: 'Distilled Water', amount: 300, unit: 'ml' }
        ],
        instructions: 'Iodine aur Potassium Iodide ko paani mein gholein.'
    },
    'hcl_1_3': {
        name: 'Diluted HCl (1:3)',
        testName: 'General Purpose',
        type: 'ratio',
        components: [
            { name: 'Concentrated HCl', ratio: 1 },
            { name: 'Distilled Water', ratio: 3 }
        ],
        instructions: 'Diye gaye anupaat (ratio) mein teeno cheezon ko mix karein.'
    },
    'iodine_maltodextrin': {
        name: 'Iodine Solution (0.05 N)',
        testName: 'Maltodextrin Test',
        type: 'fixed',
        components: [],
        instructions: '0.05 N Iodine solution taiyar karna ek standard lab procedure hai. Iske liye aam taur par Potassium Iodate (KIO3) aur Potassium Iodide (KI) ka istemal hota hai. Iski calculation thodi complex hai, isliye standard lab manual refer karein.'
    },
    'iodine_starch': {
        name: 'Iodine Solution (Starch Test)',
        testName: 'Starch Test',
        type: 'w/v',
        components: [
            { name: 'Potassium Iodide (KI)', amount: 2.5, unit: 'g' },
            { name: 'Iodine Crystal', amount: 1, unit: 'g' }
        ],
        instructions: 'Potassium Iodide aur Iodine ko thode distilled water mein gholein aur phir paani milakar final volume poora karein.'
    },
    'kmno4_01n': {
        name: 'Potassium Permanganate (0.1 N)',
        testName: 'Redox Titration',
        type: 'w/v',
        components: [{ name: 'Potassium Permanganate (KMnO₄)', amount: 3.16, unit: 'g' }],
        instructions: '3.16g Potassium Permanganate ko distilled water mein gholkar 100ml banayein.'
    },
    'lactic_acid_10': {
        name: 'Lactic Acid Solution (10%)',
        testName: 'General Purpose',
        type: 'v/v',
        components: [ { name: 'Concentrated Lactic Acid', amount: 10, unit: 'ml' } ],
        instructions: 'Concentrated Lactic Acid ko volumetric flask mein lein aur distilled water se final volume poora karein.'
    },
    'mbrt_solution': {
        name: 'MBRT Solution',
        testName: 'MBRT',
        type: 'fixed',
        components: [],
        instructions: 'Standard Methylene Blue Thiocyanate tablet (jaise R-58) ko 200ml sterile ubalte hue distilled water mein gholein. Thanda hone ke baad, sterile distilled water se volume 800ml tak poora karein. Solution ko andhere, thande sthan par rakhein.'
    },
    'methylene_blue': {
        name: 'Methylene Blue Solution (Detergent Test)',
        testName: 'Detergent Test',
        type: 'w/v',
        components: [ { name: 'Methylene Blue', amount: 0.0125, unit: 'g' } ],
        instructions: '12.5mg (ya 0.0125g) Methylene Blue ko 100ml distilled water mein gholkar solution banayein.'
    },
     'nesslers_reagent': {
        name: 'Nessler’s Reagent (Ammonium Test)',
        testName: 'Ammonium Test',
        type: 'complex',
        components: [
            { name: 'Mercuric Chloride (8g in 150ml water)', amount: 1, unit: 'part' },
            { name: 'Sodium Hydroxide (60g in 150ml water)', amount: 1, unit: 'part' },
            { name: 'Potassium Iodide (16g in 150ml water)', amount: 1, unit: 'part' }
        ],
        instructions: 'Teen alag solutions banayein. Phir solution A ko B me milayein. Is mixture me solution C milayein. Ant me volume ko 500ml tak distilled water se poora karein aur aaram se upar ka saaf hissa istemal karein.'
    },
    'neutral_ferric_chloride_05': {
        name: 'Neutral Ferric Chloride Solution (0.5% w/v)',
        testName: 'Salicylic Acid Test',
        type: 'w/v',
        components: [
            { name: 'Ferric Chloride (FeCl3)', amount: 0.5, unit: 'g' }
        ],
        instructions: 'Ferric Chloride ko distilled water mein gholkar final volume poora karein.'
    },
    'naoh_10': {
        name: 'Sodium Hydroxide Solution (10% w/v)',
        testName: 'General Purpose',
        type: 'w/v',
        components: [ { name: 'Sodium Hydroxide (NaOH)', amount: 10, unit: 'g' } ],
        instructions: 'NaOH pellets ko dhyan se distilled water mein gholein aur final volume poora karein. Solution garam ho sakta hai.'
    },
    'na_thio_01n': {
        name: 'Sodium Thiosulfate (0.1 N)',
        testName: 'Redox Titration',
        type: 'w/v',
        components: [{ name: 'Sodium Thiosulfate (Na₂S₂O₃·5H₂O)', amount: 24.8, unit: 'g' }],
        instructions: '24.8g Sodium Thiosulfate ko uble hue thande distilled water mein gholkar 100ml banayein. Stability ke liye thoda chloroform ya NaOH daalein.'
    },
    'para_phenylenediamine_2': {
        name: 'Para-phenylenediamine Solution (2% w/v)',
        testName: 'Hydrogen Peroxide Test',
        type: 'w/v',
        components: [
            { name: 'Para-phenylenediamine', amount: 2, unit: 'g' }
        ],
        instructions: 'Para-phenylenediamine ko distilled water mein gholkar final volume poora karein.'
    },
    'phosphomolybdic_acid': {
        name: 'Phosphomolybdic Acid Reagent',
        testName: 'Glucose Test',
        type: 'fixed',
        components: [],
        instructions: 'Yeh ek complex recipe hai. 35g ammonium molybdate aur 5g sodium tungstate ko 400ml 5% (w/v) NaOH solution mein gholein. 20-40 min tak zor se ubaalein. Thanda karke volume 350ml tak karein aur 125ml concentrated (85%) phosphoric acid milayein. Ant mein, distilled water se volume 500ml tak poora karein. Iski taiyari ke liye lab manual follow karein.'
    },
    'potassium_chromate_10': {
        name: 'Potassium Chromate Solution (10% w/v)',
        testName: 'Chloride Test',
        type: 'w/v',
        components: [ { name: 'Potassium Chromate (K₂CrO₄)', amount: 10, unit: 'g'} ],
        instructions: '10g Potassium Chromate ko distilled water mein gholkar 100ml solution banayein. Iska istemal chloride test mein indicator ke roop mein hota hai.'
    },
    'rosolic_acid': {
        name: 'Rosolic Acid Solution (0.1%)',
        testName: 'Neutralizer Test',
        type: 'complex',
        components: [
            { name: 'Rosolic Acid', amount: 0.1, unit: 'g' },
            { name: 'Ethyl Alcohol (95%)', amount: 30, unit: 'ml' }
        ],
        instructions: 'Rosolic acid ko ethyl alcohol mein gholein aur phir distilled water milakar final volume poora karein.'
    },
    'safranin': {
        name: "Gram's Safranin",
        testName: 'Gram Staining',
        type: 'complex',
        components: [
            { name: 'Safranin O (2.5% solution in 95% ethanol)', amount: 10, unit: 'ml' },
            { name: 'Distilled Water', amount: 100, unit: 'ml' }
        ],
        instructions: 'Dono ko mix karein.'
    },
    'seliwanoff': {
        name: 'Seliwanoff’s Reagent',
        testName: 'Sucrose Test',
        type: 'complex',
        components: [
            { name: 'Resorcinol', amount: 0.5, unit: 'g' },
            { name: 'Distilled Water', amount: 40, unit: 'ml' },
            { name: 'Concentrated HCl', amount: 35, unit: 'ml' }
        ],
        instructions: 'Resorcinol ko 40ml distilled water mein gholein, phir 35ml concentrated HCl milayein. Ant mein, distilled water se final volume poora karein.'
    },
    'silver_nitrate_01n': {
        name: 'Silver Nitrate Solution (0.1 N)',
        testName: 'Chloride Test',
        type: 'w/v',
        components: [ { name: 'Silver Nitrate (AgNO₃)', amount: 1.7, unit: 'g'} ],
        instructions: '1.7g Silver Nitrate ko 100ml distilled water mein gholkar 0.1 N solution banayein. Brown bottle mein store karein.'
    },
    'stannous_chloride_0025': {
        name: 'Stannous Chloride Solution (0.025% w/v)',
        testName: 'General Reducing Agent',
        type: 'w/v',
        components: [ { name: 'Stannous Chloride (SnCl2)', amount: 0.025, unit: 'g' } ],
        instructions: 'Stannous Chloride ko distilled water mein gholkar final volume poora karein.'
    },
     'tca_24': {
        name: 'Trichloroacetic Acid (TCA) 24% w/v',
        testName: 'Urea Test',
        type: 'w/v',
        components: [
            { name: 'Trichloroacetic Acid', amount: 24, unit: 'g' }
        ],
        instructions: '24g Trichloroacetic Acid ko distilled water mein gholkar 100ml solution banayein.'
    },
    'urease_2': {
        name: 'Urease Solution (2% w/v)',
        testName: 'Urea Estimation',
        type: 'w/v',
        components: [ { name: 'Urease Enzyme', amount: 2, unit: 'g' } ],
        instructions: 'Urease enzyme ko distilled water mein gholkar final volume poora karein.'
    },
    'zinc_copper_precipitant': {
        name: 'Zinc-Copper Precipitant (Phosphatase)',
        testName: 'Phosphatase Test',
        type: 'complex',
        components: [
            { name: 'Zinc Sulphate (ZnSO4.7H2O)', amount: 25, unit: 'g'},
            { name: 'Copper Sulphate (CuSO4.5H2O)', amount: 6, unit: 'g'}
        ],
        instructions: 'Dono chemicals ko distilled water me gholkar 100ml banayein.'
    },
    'na_stock_1000ppm': {
        name: 'Sodium Stock Standard (1000 ppm)',
        testName: 'Flame Photometry',
        type: 'w/v',
        components: [{ name: 'Sodium Chloride (NaCl, dried)', amount: 0.2542, unit: 'g' }],
        instructions: 'Accurately weigh 0.2542g of dried NaCl and dissolve in distilled water. Make up the volume to 100ml to get a 1000 ppm Sodium (Na) stock solution.'
    },
    'k_stock_1000ppm': {
        name: 'Potassium Stock Standard (1000 ppm)',
        testName: 'Flame Photometry',
        type: 'w/v',
        components: [{ name: 'Potassium Chloride (KCl, dried)', amount: 0.1907, unit: 'g' }],
        instructions: 'Accurately weigh 0.1907g of dried KCl and dissolve in distilled water. Make up the volume to 100ml to get a 1000 ppm Potassium (K) stock solution.'
    },
    'cod_dichromate': {
        name: 'Potassium Dichromate Digestion Soln (0.25N)',
        testName: 'COD Test',
        type: 'w/v',
        components: [
            { name: 'Potassium Dichromate (K₂Cr₂O₇, dried)', amount: 12.259, unit: 'g' },
            { name: 'Mercuric Sulfate (HgSO₄)', amount: 20, unit: 'g' }
        ],
        instructions: '12.259g of dried K₂Cr₂O₇ and 20g of HgSO₄ ko distilled water me gholein aur dhyan se volume 1 litre tak poora karein.'
    },
    'cod_acid_reagent': {
        name: 'Sulfuric Acid Reagent (for COD)',
        testName: 'COD Test',
        type: 'w/v_in_acid',
        components: [{ name: 'Silver Sulfate (Ag₂SO₄)', amount: 10, unit: 'g' }],
        instructions: 'Dhyan se 10g Silver Sulfate (Ag₂SO₄) ko 1 litre concentrated Sulfuric Acid (H₂SO₄) me gholein. 1-2 din tak stir karke poori tarah ghulne dein.'
    },
    'bod_phosphate_buffer': {
        name: 'Phosphate Buffer (for BOD)',
        testName: 'BOD Test',
        type: 'complex',
        components: [
            { name: 'KH₂PO₄', amount: 8.5, unit: 'g' },
            { name: 'K₂HPO₄', amount: 21.75, unit: 'g' },
            { name: 'Na₂HPO₄·7H₂O', amount: 33.4, unit: 'g' },
            { name: 'NH₄Cl', amount: 1.7, unit: 'g' }
        ],
        instructions: 'Sabhi chemicals ko distilled water me gholkar 1 litre banayein. Is solution ka pH 7.2 hona chahiye.'
    },
    'bod_mgso4': {
        name: 'Magnesium Sulfate Solution (for BOD)',
        testName: 'BOD Test',
        type: 'w/v',
        components: [{ name: 'MgSO₄·7H₂O', amount: 22.5, unit: 'g' }],
        instructions: '22.5g Magnesium Sulfate ko distilled water me gholkar 1 litre banayein.'
    },
    'bod_cacl2': {
        name: 'Calcium Chloride Solution (for BOD)',
        testName: 'BOD Test',
        type: 'w/v',
        components: [{ name: 'CaCl₂', amount: 27.5, unit: 'g' }],
        instructions: '27.5g anhydrous Calcium Chloride ko distilled water me gholkar 1 litre banayein.'
    },
    'bod_fecl3': {
        name: 'Ferric Chloride Solution (for BOD)',
        testName: 'BOD Test',
        type: 'w/v',
        components: [{ name: 'FeCl₃·6H₂O', amount: 0.25, unit: 'g' }],
        instructions: '0.25g Ferric Chloride ko distilled water me gholkar 1 litre banayein.'
    },
    'do_manganese_sulfate': {
        name: 'Manganese Sulfate Solution (for DO)',
        testName: 'DO Test',
        type: 'w/v',
        components: [{ name: 'MnSO₄·4H₂O', amount: 48, unit: 'g' }],
        instructions: '48g Manganese Sulfate ko distilled water me gholkar 100ml banayein.'
    },
    'do_alkali_iodide_azide': {
        name: 'Alkali-Iodide-Azide Reagent (for DO)',
        testName: 'DO Test',
        type: 'complex',
        components: [
            { name: 'Sodium Hydroxide (NaOH)', amount: 50, unit: 'g' },
            { name: 'Potassium Iodide (KI)', amount: 15, unit: 'g' },
            { name: 'Sodium Azide (NaN₃)', amount: 1, unit: 'g' }
        ],
        instructions: '50g NaOH aur 15g KI ko distilled water me gholein. Phir 1g Sodium Azide ko 40ml distilled water me alag se gholein. Dono solutions ko mix karke final volume 100ml tak poora karein.'
    },
     'std_na2co3_005n': {
        name: 'Standard Sodium Carbonate (0.05 N)',
        testName: 'Standardization',
        type: 'w/v',
        components: [{ name: 'Anhydrous Sodium Carbonate (Na₂CO₃, dried)', amount: 2.5, unit: 'g' }],
        instructions: '2.5g dried Na₂CO₃ ko distilled water me gholkar 1 litre banayein.'
    },
    'std_h2so4_01n': {
        name: 'Standard Sulphuric Acid (0.1 N)',
        testName: 'Standardization',
        type: 'v/v',
        components: [{ name: 'Concentrated H₂SO₄', amount: 2.8, unit: 'ml' }],
        instructions: '2.8ml Concentrated H₂SO₄ ko distilled water me milakar 1 litre banayein. Ise 0.05N Na₂CO₃ se standardize karein.'
    },
     'cod_fas_025m': {
        name: 'Standard Ferrous Ammonium Sulphate (0.25M for COD)',
        testName: 'COD Test',
        type: 'complex',
        components: [
            { name: 'Ferrous Ammonium Sulphate', amount: 98, unit: 'g' },
            { name: 'Concentrated H₂SO₄', amount: 20, unit: 'ml' },
        ],
        instructions: '98g Ferrous Ammonium Sulphate ko distilled water me gholein, 20ml concentrated H₂SO₄ milayein, thanda karein aur 1 litre tak poora karein.'
    },
    'std_khp_cod': {
        name: 'Potassium Hydrogen Phthalate Standard (for COD)',
        testName: 'COD Test',
        type: 'w/v',
        components: [{ name: 'Potassium Hydrogen Phthalate (KHP, dried)', amount: 0.425, unit: 'g' }],
        instructions: '425mg (0.425g) dried KHP ko distilled water me gholkar 1 litre banayein. Theoretical COD = 500 µgO₂/mL.'
    },
     'std_ag_nitrate_00141n': {
        name: 'Standard Silver Nitrate Titrant (0.0141N)',
        testName: 'Chloride Test',
        type: 'w/v',
        components: [{ name: 'Silver Nitrate (AgNO₃)', amount: 2.395, unit: 'g' }],
        instructions: '2.395g AgNO₃ ko distilled water me gholkar 1 litre banayein.'
    },
     'std_nacl_00141n': {
        name: 'Standard Sodium Chloride (0.0141N)',
        testName: 'Standardization',
        type: 'w/v',
        components: [{ name: 'Sodium Chloride (NaCl, dried)', amount: 0.824, unit: 'g' }],
        instructions: '824mg (0.824g) dried NaCl ko distilled water me gholkar 1 litre banayein.'
    },
    'std_edta_001m': {
        name: 'Standard EDTA Titrant (0.01M)',
        testName: 'Hardness Test',
        type: 'w/v',
        components: [{ name: 'EDTA Disodium Salt Dihydrate', amount: 3.723, unit: 'g' }],
        instructions: '3.723g EDTA disodium salt ko distilled water me gholkar 1 litre banayein.'
    },
     'std_calcium_sol': {
        name: 'Standard Calcium Solution (for Hardness)',
        testName: 'Standardization',
        type: 'w/v',
        components: [{ name: 'Anhydrous Calcium Carbonate (CaCO₃)', amount: 1.000, unit: 'g' }],
        instructions: '1.000g CaCO₃ ko thode 1+1 HCl me gholein, 200ml distilled water milakar ubaalein, thanda karein, aur 1 litre tak poora karein.'
    }
};




