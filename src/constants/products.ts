export interface Product {
    id: string;
    name: string;
    composition: string;
    category: ProductCategory;
    indication: string;
}

export type ProductCategory = 
    | 'General & Pain Management'
    | 'Anti-Infectives'
    | 'Gastrointestinal & Neurology'
    | 'Cardiology'
    | 'Supplements & Critical Care';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
    'General & Pain Management',
    'Anti-Infectives',
    'Gastrointestinal & Neurology',
    'Cardiology',
    'Supplements & Critical Care'
];

export const PRODUCTS: Product[] = [
    // General & Pain Management
    {
        id: 'p1',
        name: 'RHINO COLD Tablets',
        composition: 'Paracetamol + Phenylephrine HCl + Chlorpheniramine Maleate + Caffeine',
        category: 'General & Pain Management',
        indication: 'Relief from common cold symptoms, nasal congestion, and mild pain.'
    },
    {
        id: 'p2',
        name: 'FREMOL 500mg',
        composition: 'Paracetamol',
        category: 'General & Pain Management',
        indication: 'Effective for fever and mild to moderate pain relief.'
    },
    {
        id: 'p3',
        name: 'FREMOL Extra',
        composition: 'Paracetamol + Caffeine',
        category: 'General & Pain Management',
        indication: 'Enhanced pain relief for headaches and migraine.'
    },
    {
        id: 'p4',
        name: 'Etocox 90mg',
        composition: 'Etoricoxib',
        category: 'General & Pain Management',
        indication: 'Anti-inflammatory for osteoarthritis, rheumatoid arthritis, and gout.'
    },
    {
        id: 'p5',
        name: 'ZIMAGRA ODS 50',
        composition: 'Sildenafil Oral Strip',
        category: 'General & Pain Management',
        indication: 'Management of erectile dysfunction.'
    },

    // Anti-Infectives
    {
        id: 'p6',
        name: 'Swazi 250mg / 500mg',
        composition: 'Azithromycin',
        category: 'Anti-Infectives',
        indication: 'Broad-spectrum antibiotic for respiratory and skin infections.'
    },
    {
        id: 'p7',
        name: 'CEFRAZ 200',
        composition: 'Cefixime',
        category: 'Anti-Infectives',
        indication: 'Third-generation cephalosporin for bacterial infections.'
    },
    {
        id: 'p8',
        name: 'CLARZIM 500',
        composition: 'Clarithromycin',
        category: 'Anti-Infectives',
        indication: 'Macrolide antibiotic for respiratory tract and skin infections.'
    },
    {
        id: 'p9',
        name: 'Zimlox 500 / LIVOTA 750',
        composition: 'Levofloxacin',
        category: 'Anti-Infectives',
        indication: 'Fluoroquinolone antibiotic for serious bacterial infections.'
    },
    {
        id: 'p10',
        name: 'Metrogyl 200',
        composition: 'Metronidazole',
        category: 'Anti-Infectives',
        indication: 'Treatment of anaerobic bacterial and protozoal infections.'
    },
    {
        id: 'p11',
        name: 'Netazox 200 DT / 500',
        composition: 'Nitazoxanide',
        category: 'Anti-Infectives',
        indication: 'Antiprotozoal and antiviral medication for various infections.'
    },
    {
        id: 'p12',
        name: 'Z-OFLOX 200',
        composition: 'Ofloxacin',
        category: 'Anti-Infectives',
        indication: 'Quinolone antibiotic for urinary tract and respiratory infections.'
    },
    {
        id: 'p13',
        name: 'LASOFLOX-O',
        composition: 'Ofloxacin + Ornidazole',
        category: 'Anti-Infectives',
        indication: 'Combination antibiotic for mixed bacterial and protozoal infections.'
    },

    // Gastrointestinal & Neurology
    {
        id: 'p14',
        name: 'LAXAFRED 5mg',
        composition: 'Bisacodyl',
        category: 'Gastrointestinal & Neurology',
        indication: 'Stimulant laxative for the relief of constipation.'
    },
    {
        id: 'p15',
        name: 'EZO 20 / 40',
        composition: 'Esomeprazole',
        category: 'Gastrointestinal & Neurology',
        indication: 'Proton pump inhibitor for GERD and peptic ulcers.'
    },
    {
        id: 'p16',
        name: 'DOMIPAN SR',
        composition: 'Pantoprazole + Domperidone',
        category: 'Gastrointestinal & Neurology',
        indication: 'Relief from acidity, heartburn, and associated nausea/vomiting.'
    },
    {
        id: 'p17',
        name: 'Neurozim',
        composition: 'Pregabalin',
        category: 'Gastrointestinal & Neurology',
        indication: 'Management of neuropathic pain and fibromyalgia.'
    },

    // Cardiology
    {
        id: 'p18',
        name: 'Tensimin 50 / 100',
        composition: 'Atenolol',
        category: 'Cardiology',
        indication: 'Beta-blocker for hypertension and angina pectoris.'
    },
    {
        id: 'p19',
        name: 'LIPIZAR 20',
        composition: 'Atorvastatin',
        category: 'Cardiology',
        indication: 'Statin for lowering cholesterol and preventing cardiovascular disease.'
    },
    {
        id: 'p20',
        name: 'Cilacar 10',
        composition: 'Cilnidipine',
        category: 'Cardiology',
        indication: 'Calcium channel blocker for hypertension management.'
    },
    {
        id: 'p21',
        name: 'Envas 5 / 10',
        composition: 'Enalapril',
        category: 'Cardiology',
        indication: 'ACE inhibitor for high blood pressure and heart failure.'
    },
    {
        id: 'p22',
        name: 'Nicardia Retard 20',
        composition: 'Nifedipine',
        category: 'Cardiology',
        indication: 'Sustained-release calcium channel blocker for angina and hypertension.'
    },
    {
        id: 'p23',
        name: 'Rosuna 10',
        composition: 'Rosuvastatin',
        category: 'Cardiology',
        indication: 'High-potency statin for management of dyslipidemia.'
    },
    {
        id: 'p24',
        name: 'Telecard 40H / 80H',
        composition: 'Telmisartan + Hydrochlorothiazide',
        category: 'Cardiology',
        indication: 'Combination therapy for resistant hypertension.'
    },

    // Supplements & Critical Care
    {
        id: 'p25',
        name: 'Pedivit',
        composition: 'Multivitamins & Minerals',
        category: 'Supplements & Critical Care',
        indication: 'Daily nutritional supplement for general health and immunity.'
    },
    {
        id: 'p26',
        name: 'TRENDCAL / TRENDCAL PLUS',
        composition: 'Calcium + Vitamins',
        category: 'Supplements & Critical Care',
        indication: 'Bone health supplement to prevent osteoporosis.'
    },
    {
        id: 'p27',
        name: 'Mobimax JT Forte',
        composition: 'Joint support formula',
        category: 'Supplements & Critical Care',
        indication: 'Support for joint mobility and cartilage maintenance.'
    },
    {
        id: 'p28',
        name: 'FOUR SR',
        composition: 'Ferrous Sulphate + Folic Acid',
        category: 'Supplements & Critical Care',
        indication: 'Iron supplement for anemia and pregnancy support.'
    },
    {
        id: 'p29',
        name: 'OSTEOMAX-D',
        composition: 'Bone support',
        category: 'Supplements & Critical Care',
        indication: 'Specialized formula for bone density and strength.'
    },
    {
        id: 'p30',
        name: 'ONTADEX 50mg',
        composition: 'Tramadol',
        category: 'Supplements & Critical Care',
        indication: 'Strong analgesic for moderate to severe pain management.'
    }
];
