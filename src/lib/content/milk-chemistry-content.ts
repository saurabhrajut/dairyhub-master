export const milkChemistryContent = {
  hi: {
    "mainTitle": "Milk ki Chemistry",
    "description": "Milk ke science mein ek deep dive.",
    "backToTopics": "Topics par wapas jaayein",
    "composition": {
      "title": "Milk ka Composition",
      "whatIsMilk": {
        "title": "Milk Kya Hai?",
        "fssaiDef": "<strong>FSSAI Definition:</strong> “Milk ek healthy milk dene wale animal se complete milking se milne wala normal mammary secretion hai. Yeh colostrum se free hona chahiye.”",
        "codexDef": "<strong>Codex Alimentarius Definition:</strong> \"Milk ek ya ek se zyada milk dene wale animals ka normal mammary secretion hai, jismein kuch bhi add ya extract nahi kiya gaya hai, jiska purpose liquid milk ke form mein consumption ya aage ki processing ke liye hai.\"",
        "usaDef": "<strong>USA ki Federal Definition:</strong> \"Milk ek ya ek se zyada healthy cows, jinhein a ache se feed aur rakha gaya ho, ke complete milking se milne wala fresh, clean lacteal secretion hai, jismein delivery se 15 din pehle aur 10 din baad milne wala milk shamil nahi hai aur jismein 8.5 percent se kam solids-not-fat aur 3.25 percent se kam milk fat nahi hai.\"",
        "p1": "Milk ek complex biological fluid hai jise teen alag-alag phases mein dekha ja sakta hai:",
        "phases": [
          "Emulsion: Fat globules (fat ke particles) paani mein bikhre hue hain.",
          "Colloidal Suspension: Casein protein micelles paani mein suspended hain.",
          "True Solution: Lactose, whey proteins, minerals aur vitamins poori tarah se paani mein ghul jaate hain."
        ]
      },
      "generalComposition": {
        "title": "Milk ki General Composition",
        "headers": ["Component", "%", "Component", "%"],
        "rows": [
          { "c1": "Water", "v1": "87.54", "c2": "Casein", "v2": "2.63" },
          { "c1": "Fat", "v1": "3.71", "c2": "Whey Protein", "v2": "0.42" },
          { "c1": "Protein", "v1": "3.18", "c2": "Protease-peptone", "v2": "0.13" },
          { "c1": "Lactose", "v1": "4.70", "c2": "Other Nitrogenous Substances", "v2": "0.11" },
          { "c1": "Ash", "v1": "0.76", "c2": "Total", "v2": "100.0" }
        ]
      },
      "speciesDifferences": {
        "title": "Species ke karan Milk ki Composition mein Difference",
        "headers": ["Species", "Water (%)", "Fat (%)", "Sugar (%)", "Protein (%)", "Ash (%)"],
        "rows": [
          { "species": "Cow", "water": "87.54", "fat": "3.71", "sugar": "4.70", "protein": "3.31", "ash": "0.76" },
          { "species": "Goat", "water": "85.58", "fat": "4.93", "sugar": "4.78", "protein": "4.11", "ash": "0.89" },
          { "species": "Buffalo", "water": "82.90", "fat": "7.50", "sugar": "4.70", "protein": "4.10", "ash": "0.80" },
          { "species": "Human", "water": "88.50", "fat": "3.30", "sugar": "6.80", "protein": "1.30", "ash": "0.20" }
        ]
      },
      "factorsAffectingComposition": {
        "title": "Milk ki Composition ko Affect Karne Wale Factors",
        "intro": "Milk ki composition constant nahi hoti hai; yeh kai factors ke aadhar par badalti rehti hai:",
        "factors": [
          { "name": "Nasal (Breed)", "desc": "Alag-alag breeds (jaise Jersey, Holstein Friesian) ke milk mein fat aur protein ki quantity alag-alag hoti hai. Jersey cows mein aamtaur par HF cows ke comparison mein zyada fat hota hai." },
          { "name": "Aahar (Feed)", "desc": "Animal ko diya jaane wala feed milk ke fat content aur fatty acid profile ko directly affect karta hai. Green fodder fat mein Conjugated Linoleic Acid (CLA) jaise beneficial fatty acids ko badha sakta hai." },
          { "name": "Dugdh-sravan ki Avastha (Stage of Lactation)", "desc": "Delivery ke theek baad milk (colostrum) mein protein aur antibodies bahut zyada hote hain. Jaise-jaise lactation aage badhta hai, composition badalti hai, aur aakhir mein fat aur protein ka level badh jaata hai." },
          { "name": "Mausam (Season)", "desc": "Garmiyon mein aamtaur par fat aur SNF (Solids-Not-Fat) kam ho jaate hain, jabki sardiyon mein yeh badh jaate hain." },
          { "name": "Pashu ka Swasthya (Animal Health)", "desc": "Mastitis jaisi diseases milk ki composition ko badal sakti hain, jisse somatic cell count (SCC) aur salt badh jaate hain jabki lactose kam ho jaata hai." }
        ]
      },
      "water": {
        "title": "Milk mein Water",
        "p1": "Water sabse abundant component hai, jo ek suspending, dispersing aur dissolving medium ke roop mein kaam karta hai. Yeh teen forms mein maujood hai:",
        "forms": [
          { "name": "Free Water", "desc": "Sabse bada hissa, yeh ek solvent ke roop mein kaam karta hai aur microbial growth ko support karta hai." },
          { "name": "Bound Water", "desc": "Protein aur anya components se hydrogen bonds ke through bandha hua. Yeh 0°C par nahi jamta hai, solvent ke roop mein kaam nahi karta hai, aur microbial growth ko support nahi kar sakta hai." },
          { "name": "Crystallized Water", "desc": "Lactose hydrate (C₁₂H₂₂O₁₁·H₂O) jaise components ki chemical structure ke andar maujood paani. Ise hatana sabse mushkil hai." }
        ]
      }
    },
    "mammaryGland": {
        "title": "Mammary Gland aur Milk Secretion",
        "structure": {
            "title": "Mammary Gland ka Structure",
            "p1": "Mammary gland secretory aur connective tissue se bani hoti hai. Basic secretory units chhoti, angoor jaisi cheezein hoti hain jinhein \"alveoli\" kaha jaata hai. 150-220 alveoli ka ek group ek lobule banata hai, aur kai lobules ek lobe banate hain. Cow ke than mein 4 alag-alag quarters hote hain, har ek mein ek nipple cistern aur gland cistern hota hai, jisse kai ducts alveoli tak branch out hoti hain.",
            "p2": "Har alveolus mein ek central cavity (lumen) ke chaaron ore epithelial cells ki ek hi layer hoti hai aur yeh myoepithelial cells se ghira hota hai jo milk ejection ke liye responsible hote hain."
        },
        "physiology": {
            "title": "Milk Secretion ki Physiology",
            "p1": "Milk, alveolus ke epithelial cells mein complex hormonal control (estrogen, progesterone, prolactin, aadi) ke under synthesize hota hai. Milk synthesis ke liye precursors blood se liye jaate hain. Protein aur lipid endoplasmic reticulum mein synthesize hote hain; lactose synthesis aur casein micelle ki assembly Golgi apparatus mein hoti hai. Har litre milk secretion ke liye, lagbhag 400-500 litre blood ko than se hokar circulate hona chahiye.",
            "ejectionTitle": "Milk Ejection (Let-down)",
            "ejectionText": "Yeh ek reflex action hai jo hormone oxytocin dwara control hota hai, jo myoepithelial cells ko contract karne aur alveoli se milk ko ducts mein nichodne ka karan banta hai. Yeh reflex lagbhag 10 minute tak rehta hai."
        },
        "precursors": {
            "title": "Milk Precursors",
            "caption": "Blood Plasma aur Milk Composition ka Comparison",
            "headers": ["Component", "Blood Plasma (%)", "Milk (%)"],
            "rows": [
              { "constituent": "Water", "plasma": "91.0", "milk": "87.0" },
              { "constituent": "Glucose", "plasma": "0.05", "milk": "Lactose: 4.8" },
              { "constituent": "Serum Albumin", "plasma": "3.20", "milk": "Lactalbumin: 0.52" },
              { "constituent": "Serum Globulin", "plasma": "4.40", "milk": "Globulin: 0.05" },
              { "constituent": "Amino Acids", "plasma": "0.003", "milk": "Casein: 2.9" },
              { "constituent": "Neutral Fat", "plasma": "0.09", "milk": "3.8" },
              { "constituent": "Calcium", "plasma": "0.009", "milk": "0.12" }
            ]
        }
    },
    "proteins": {
      "title": "Milk Proteins",
      "overview": {
        "title": "Milk Proteins ka Overview",
        "p1": "Protein milk ke sabse essential nutrients mein se ek hai, jo lagbhag 3.5% par maujood hai. Ismein sabhi essential amino acids hote hain. Milk mein protein ko do main groups mein divide kiya gaya hai: <strong>Casein (~80%)</strong> aur <strong>Whey Protein (~20%)</strong>."
      },
      "casein": {
        "title": "Casein (~80% Milk Protein)",
        "p1": "Casein phosphoproteins ka ek class hai jo milk mein complex particles ke roop mein maujood hota hai jinhein <strong>micelles</strong> kaha jaata hai. Yeh micelles hi milk ko white aur opaque banate hain. Biologically, casein calcium aur phosphate ke carrier ke roop mein kaam karta hai. Sabhi casein 4.6 (unke isoelectric point) ke pH par precipitate hote hain.",
        "micelleStructure": {
            "title": "Casein Micelle ka Deep Structure",
            "p1": "Casein micelle ka structure ek amazing engineering ka example hai. Yeh chhote protein groups (sub-micelles) se bana hai jo 'colloidal calcium phosphate' (CCP) ke nano-clusters dwara ek saath jude hote hain. Micelle ki surface par κ-casein ki ek 'hairy layer' hoti hai. Yeh layer micelles ko ek doosre se door rakhti hai (steric repulsion), jisse ve aapas mein chipakte nahi hain aur milk ek stable liquid bana rehta hai."
        },
        "fractionsTitle": "Casein Fractions",
        "fractionsText": "Casein char main fractions se bana hai: αs1-casein, αs2-casein, β-casein, aur κ-casein. κ-casein micelle ki surface par hota hai aur iski stability ke liye responsible hota hai.",
        "coagulationTitle": "Casein Coagulation (Dahi Banana)",
        "coagulationText": "Casein ki coagulation ki ability cheese aur yogurt jaise products banane ke liye fundamental hai. Yeh kai tarikon se hota hai:",
        "coagulationTypes": [
          { "name": "Acid Coagulation", "desc": "Jab milk ka pH 4.6 tak gir jaata hai (jaise, nimbu/sirka milane ya bacterial fermentation ke through), casein micelles apna negative charge kho dete hain aur CCP ghul jaata hai, jisse ve ek gel banane ke liye ikatthe hote hain. Yeh paneer aur dahi ke peeche ka principle hai." },
          { "name": "Enzymatic Coagulation", "desc": "Enzyme rennet (ya chymosin) specifically κ-casein ki 'hairy layer' ko kaat deta hai, micelles ko unstable karta hai aur unhein calcium ki presence mein ek saath guchchhe banane ka karan banta hai. Yeh adhikansh cheesemaking ka basis hai." },
          { "name": "Alcohol Precipitation", "desc": "Alcohol micelles ki protective layer ko dehydrate karta hai. Yadi milk pehle se hi acidic (unstable) hai, to protein coagulate ho jayega. Yeh milk ki freshness ke liye ek quick test hai." },
          { "name": "Heat Precipitation", "desc": "Jabki pure casein heat-stable hai, bahut high temperature par lambe samay tak garam karne (jaise, pressure mein 120°C) se coagulation ho sakti hai." }
        ]
      },
      "whey": {
        "title": "Whey Protein (~20% Milk Protein)",
        "p1": "Casein precipitation ke baad liquid whey mein bache hue protein ko whey protein kaha jaata hai. Yeh globular protein casein ki tulna mein zyada water-soluble hote hain aur heat se denature ho jaate hain.",
        "functionalProperties": {
            "title": "Whey Proteins ki Functional Properties",
            "p1": "Whey proteins ka use food industry mein unki special properties ke karan kiya jaata hai:",
            "properties": [
              { "name": "Gelling:", "desc": "Garam karne par, whey proteins denature hokar ek gel network bana sakte hain, jo products ko structure deta hai." },
              { "name": "Foaming:", "desc": "Yeh hawa ke bubbles ke chaaron ore ek film banakar stable foam bana sakte hain." },
              { "name": "Emulsification:", "desc": "Whey proteins tel aur paani ko alag hone se rokne mein madad karte hain, jisse stable emulsion banta hai." }
            ]
        },
        "fractionsTitle": "Whey Protein Fractions",
        "fractions": [
          { "name": "Beta-lactoglobulin (β-Lg)", "desc": "Total whey protein ka lagbhag aadha hissa hota hai. Yeh heat se coagulate hota hai aur essential amino acids ka ek excellent source hai." },
          { "name": "Alpha-lactalbumin (α-La)", "desc": "Human milk mein ek main protein, yeh tryptophan ka ek accha source hai aur lactose synthesis mein shamil hai." },
          { "name": "Immunoglobulins (Ig)", "desc": "Yeh antibodies hain jo passive immunity provide karte hain aur colostrum mein bahut high concentration mein paaye jaate hain." },
          { "name": "Bovine Serum Albumin (BSA)", "desc": "Acche fat-binding properties wala ek bada protein." }
        ]
      }
    },
    "fat": {
        "title": "Milk Fat (Lipids)",
        "characteristics": {
            "title": "Milk Fat ki Characteristics",
            "p1": "Fat milk ka sabse commercially important aur variable component hai. Lagbhag 98% milk fat triglycerides ka mixture hai. Yeh Milk Fat Globule Membrane (MFGM) naam ki ek protective membrane se ghire chhote globules (0.1-15 micron diameter) ke roop mein maujood hota hai.",
            "p2": "Milk fat apni short-chain fatty acids (jaise butyric acid, C4:0) ke high proportion ke karan unique hai, jo iske special taste mein contribute karta hai. Yeh wide variety fatty acid bhi milk fat ko ek broad melting range (lagbhag -30°C se +40°C) deti hai, jisse yeh refrigeration temperature par solid aur body temperature par liquid ho jaata hai.",
            "mfgmComposition": {
                "title": "Milk Fat Globule Membrane (MFGM) ka Structure",
                "p1": "MFGM sirf ek simple membrane nahi hai. Yeh phospholipids, glycolipids, proteins, aur enzymes ka ek complex three-layered structure hai jo na sirf fat globules ko stabilize karta hai balki iske apne nutritional benefits bhi hain, jaise ki shishuon mein cognitive development."
            },
            "fattyAcidProfile": {
                "title": "Fatty Acid Profile",
                "p1": "Milk fat mein lagbhag 70% Saturated (SFA), 25% Monounsaturated (MUFA), aur 5% Polyunsaturated (PUFA) fatty acids hote hain. Ismein Conjugated Linoleic Acid (CLA) bhi hota hai, jiske kai health benefits maane jaate hain."
            }
        },
        "stability": {
            "title": "Fat Globules aur Emulsion Stability",
            "p1": "Milk ek oil-in-water ka emulsion hai. MFGM fat globules ko stabilize karta hai, unhein ek saath guchchhe banane (coalescence) se rokta hai.",
            "creamingTitle": "Creaming",
            "creamingText": "Unke kam density ke karan, fat globules upar uthte hain, is process ko creaming kaha jaata hai. Homogenization globule size ko kam karke ise rokta hai.",
            "lipolysisTitle": "Lipolysis",
            "lipolysisText": "Enzyme lipoprotein lipase fat (lipolysis) ko tod sakta hai, free fatty acids release kar sakta hai jo ek soapy ya baasi off-flavour ka karan banta hai. Yeh aamtaur par ek intact MFGM dwara roka jaata hai lekin globules ko mechanical damage (jaise atyadhik pumping) se shuru kiya ja sakta hai."
        },
        "autoxidation": {
            "title": "Autoxidation aur Crystallization",
            "autoxidationTitle": "Autoxidation",
            "autoxidationText": "Unsaturated fatty acids mein double bonds oxidize kar sakte hain, jisse off-flavours (tallowy, fishy, metallic) ho sakta hai. Yeh process heat, light aur metal ions (vishesh roop se copper) dwara tez hoti hai.",
            "crystallizationTitle": "Crystallization",
            "crystallizationText": "Milk fat mein alag-alag melting points ke saath triglycerides ka mixture hota hai. Jab milk ko thanda kiya jaata hai, to high melting point wale triglycerides crystallize ho jaate hain. Yeh process complex hai aur vibhinn polymorphic forms (α, β', β) mein ho sakti hai, jo butter aur cream jaise products ki texture aur stability ko affect karti hai."
        }
    },
    "lactose": {
      "title": "Lactose (Milk Sugar)",
      "properties": {
        "title": "Lactose ki Properties",
        "p1": "Lactose milk mein main carbohydrate (4.8-5.2%) hai, jo true solution mein maujood hai. Yeh glucose aur galactose se bana ek disaccharide hai. Lactose sucrose (table sugar) se lagbhag 1/6 guna meetha hota hai.",
        "p2": "Yeh microorganisms dwara ferment hokar lactic acid banata hai, jo dahi aur cheese jaise cultured products ke liye essential hai. Garam karne par, lactose protein amino groups ke saath Maillard reaction se guzar sakta hai, jisse browning aur ek paka hua taste hota hai, visheshkar sterilized milk mein.",
        "lactoseIntolerance": {
            "title": "Lactose Intolerance Kya Hai?",
            "p1": "Yeh ek aisi condition hai jismein body 'lactase' naamak enzyme ka sufficient production nahi kar pata. Lactase, lactose ko glucose aur galactose mein todne ke liye zaroori hai taki vah aanton mein absorb ho sake. Iske bina, lactose aant mein ferment ho jaata hai, jisse gas, bloating, aur anya digestive issues hoti hain."
        },
        "crystallizationTitle": "Crystallization aur Mutarotation",
        "crystallizationText1": "Lactose do forms mein crystallize ho sakta hai, α-hydrate aur β-anhydrous. Jab paani mein ghola jaata hai, to yeh forms ek equilibrium tak pahunchne tak interconvert hote hain, is process ko <strong>mutarotation</strong> kaha jaata hai. α-lactose hydrate kam soluble hota hai aur kathor, kirakira crystal bana sakta hai, jisse ice cream aur meetha condensed milk jaise products mein \"sandiness\" defect ho sakta hai yadi theek se control nahi kiya jaata hai.",
        "crystallizationText2": "Mutarotation ki rate temperature aur pH se affect hoti hai. Yeh dairy powder aur condensed products ke production mein ek smooth texture ensure karne ke liye ek important factor hai."
      }
    },
    "minerals": {
      "title": "Minerals aur Salts",
      "composition": {
        "title": "Mineral Composition aur Distribution",
        "p1": "Milk dietary calcium, magnesium, phosphorus aur potassium ka ek excellent source hai. Milk mein salts ek soluble phase aur casein micelles se jude ek colloidal phase ke beech ek complex equilibrium mein maujood hote hain.",
        "p2": "Lagbhag do-tihai calcium aur aadha phosphate casein micelles ke andar \"colloidal calcium phosphate\" (CCP) ke roop mein bandhe hote hain. Yeh CCP casein micelles ki structure aur stability ko banaye rakhne ke liye important hai. Milk serum mein ghule hue salts protein stability, heat stability aur osmotic pressure sahit vibhinn properties ko affect karte hain. Yeh 'salt balance', vishesh roop se divalent cations (Ca²⁺, Mg²⁺) ka monovalent cations (Na⁺, K⁺) aur anions (phosphate, citrate) se ratio, determine karta hai ki milk UHT jaise heat treatment ke dauran stable rahega ya nahi. Is balance mein gadbadi se milk garam karne par fat sakta hai."
      },
      "trace": {
        "title": "Trace Elements",
        "p1": "Milk mein zinc, copper aur iron jaise kai trace elements hote hain. Inmein se kuch nutritional hote hain, jabki anya contaminants ho sakte hain. Example ke liye, copper (Cu) fat oxidation ke liye ek catalyst ke roop mein kaam kar sakta hai, jisse bahut kam concentration mein bhi off-flavour ho sakta hai. Isliye, copper alloys se bane instruments se contamination se bachna important hai."
      }
    },
    "vitaminsEnzymes": {
        "title": "Vitamins aur Enzymes",
        "vitamins": {
            "title": "Milk mein Vitamins",
            "p1": "Milk kai vitaminon ka ek accha source hai. Fat-soluble vitamins (A, D, E, K) milk fat mein paaye jaate hain, jabki water-soluble vitamins (B-complex aur Vitamin C) aqueous phase mein hote hain. Pasteurization kuch zyada heat-sensitive vitamin jaise Vitamin C aur folate ko nasht kar sakta hai."
        },
        "enzymes": {
            "title": "Milk mein Enzymes",
            "p1": "Milk mein kai native enzymes hote hain. Kuch important enzymes mein shamil hain:",
            "list": [
              { "name": "Lipoprotein Lipase", "desc": "Yadi fat globules damage ho jaate hain to hydrolytic rancidity (soapy taste) paida kar sakta hai. Yeh jyadatar pasteurization dwara inactivate kar diya jaata hai." },
              { "name": "Alkaline Phosphatase (ALP)", "desc": "Proper pasteurization ke liye ek indicator ke roop mein use kiya jaata hai, kyunki yeh pasteurization ke temperature par destroy ho jaata hai. Ek positive ALP test inadequate pasteurization ya kachche doodh ke contamination ko indicate karta hai." },
              { "name": "Plasmin", "desc": "Ek heat-resistant protease jo lambe samay tak storage ke dauran UHT milk mein protein ko tod sakta hai aur age gelation ya kadwahat paida kar sakta hai." },
              { "name": "Lactoperoxidase (LP)", "desc": "Kachche doodh mein ek natural antimicrobial system (LP system) ka hissa. Yeh ALP ki tulna mein adhik heat-resistant hai aur iski absence doodh ke over-heating ka sanket de sakti hai." },
              { "name": "Xanthine Oxidase", "desc": "Fat globule membrane se juda hua hai. Iski activity kabhi-kabhi oxidative processes se judi hoti hai." }
            ]
        }
    },
    "properties": {
        "title": "Physical Properties",
        "overview": {
            "title": "Physical Properties ka Overview",
            "p1": "Milk ke physical properties iski complex composition dwara determine hote hain aur processing aur quality control ke liye important hain."
        },
        "headers": ["Property", "Value", "Significance"],
        "rows": [
          { "property": "Color aur Optical Properties", "value": "White se Yellow Opaque", "details": "Opacity (apardarshita) fat globules aur casein micelles dwara light scattering ke karan hoti hai. Yellow color chare se carotene (ek Vitamin A precursor) ke karan hota hai." },
          { "property": "Taste (Flavour)", "value": "Pleasant, Thoda Meetha", "details": "Components ka combined effect. Chare, bacterial growth, ya oxidation se off-flavours develop ho sakte hain." },
          { "property": "Refractive Index (20°C par)", "value": "1.3440 - 1.3485", "details": "Total Solids ke quick estimation aur paani ki adulteration ka pata lagane ke liye use kiya jaata hai." },
          { "property": "Density (20°C par)", "value": "Cow: 1.028-1.032 g/mL, Buffalo: 1.030-1.034 g/mL", "details": "Milk apne solid content (SNF) ke karan paani se denser hota hai. Iska use volume ko mass mein badalne aur adulteration ki jaanch ke liye lactometer reading mein kiya jaata hai." },
          { "property": "Viscosity (25°C par)", "value": "~2.0 cP", "details": "Paani se lagbhag doguna viscous. Temperature aur composition (fat, protein) par depend karta hai. Yeh pumping, filtration aur heat transfer jaisi processes ko affect karta hai. Homogenization viscosity badhata hai." },
          { "property": "Surface Tension (20°C par)", "value": "50 dyne/cm", "details": "Protein aur free fatty acids jaise surfactants ke karan paani (72 dyne/cm) se kam. Yeh milk ke foaming properties ko affect karta hai." },
          { "property": "Freezing Point", "value": "-0.512 se -0.575 °C", "details": "Milavati paani ka pata lagane ke liye sabse reliable indicator. Ghule hue solids (lactose, minerals) ke karan paani se neeche jamta hai. Paani milane par yeh 0°C ke kareeb aa jaata hai." },
          { "property": "Boiling Point", "value": "100.17 °C", "details": "Ghule hue solids ke karan paani se thoda adhik." },
          { "property": "Acidity (Titratable)", "value": "Cow: 0.14-0.16% LA, Buffalo: 0.17-0.18% LA", "details": "Natural acidity casein, phosphates, citrates aadi ke karan hoti hai. Taze doodh mein lactic acid nahi hota. Iski vrddhi bacterial activity ka sanket hai." },
          { "property": "pH", "value": "6.5 - 6.7", "details": "Thoda acidic. Kam pH bacterial action (khattapan) ka suggestion deta hai." },
          { "property": "Heat Stability", "value": "Vary karta hai, salt balance par depend karta hai", "details": "Coagulation ke bina high temperature ka samna karne ki ability. Sterilized milk products ke liye important." },
          { "property": "Redox Potential (Eh)", "value": "+0.2 se +0.3 Volt", "details": "Oxidation aur reducing agents ke beech balance ko indicate karta hai. Ubalne ya microbial growth ke karan ghatata hai." }
        ]
    },
    "processingEffects": {
        "title": "Processing ka Milk ke Components par Effect",
        "intro": "Dairy processing milk ko safe aur stable banati hai, lekin yeh iske chemical aur physical properties ko bhi change kar deti hai:",
        "sections": [
            {
                "name": "Heat Treatment (Pasteurization / Sterilization)",
                "desc": "Heat treatment mukhya roop se whey proteins ko denature karta hai, jisse ve kam soluble ho jaate hain. Vitamin C aur B-complex jaise kuch vitamin nasht ho jaate hain. High temperature par (UHT/sterilization), Maillard reaction (lactose + protein) hota hai, jisse halka bhura rang aur 'paka hua' taste aata hai."
            },
            {
                "name": "Homogenization",
                "desc": "Yeh ek mechanical process hai jo milk ko high pressure par ek chhote se orifice se gujar kar fat ke globules ko todti hai. Isse milk adhik white dikhta hai, cream ki layer nahi jamti, aur texture behtar hota hai. Halanki, nayi bani fat ki surface lipase enzyme ke attack ke liye adhik susceptible ho jaati hai, isliye homogenization se pehle pasteurization zaroori hai."
            },
            {
                "name": "Fermentation",
                "desc": "Yogurt jaise products mein, starter culture ke bacteria lactose ko lactic acid mein badal dete hain. Isse pH kam hota hai, jo casein micelle ko unke isoelectric point (pH 4.6) par coagulate kar deta hai, jisse ek stable gel (dahi) banta hai. Is dauran, acetaldehyde jaise flavor compounds bhi bante hain."
            }
        ]
    },
    "other": {
      "title": "Anya Components aur Contaminants",
      "minor": {
        "title": "Chhote Natural Components",
        "list": [
          { "name": "Organic Acids", "desc": "Milk mein citric acid aur doosron ki trace amounts hoti hai. Bacterial action lactic acid ko badha sakti hai." },
          { "name": "Non-Protein Nitrogen (NPN) Compounds", "desc": "Total nitrogen ka lagbhag 5% non-protein nitrogen hota hai, jismein urea, creatinine aur free amino acids shamil hain. Iski matra milk mein milavat (jaise urea milana) ka pata lagane mein madad karti hai." },
          { "name": "Gases", "desc": "Taze nikale gaye milk mein ghuli hui gasen hoti hain, mukhya roop se carbon dioxide. Hawa ke sampark mein aane par, CO₂ kho jaati hai aur O₂/N₂ prapt hoti hai. Ghuli hui oxygen oxidation mein yogdan kar sakti hai." }
        ]
      },
      "contaminants": {
        "title": "Contaminants",
        "p1": "Ve substances jo anjane mein milk mein enter kar sakte hain:",
        "list": [
          { "name": "Cow se", "desc": "Yadi cow ko mastitis hai, to blood ke components aur somatic cells milk mein enter kar sakte hain. Treatment ke liye use ki jaane wali dawaiyan (antibiotics) bhi milk mein ja sakti hain." },
          { "name": "Feed se", "desc": "Pesticides, mycotoxins (feed par molds se), aur heavy metals milk mein transfer ho sakte hain." },
          { "name": "Handling se", "desc": "Cleaning agents, sanitizers, aur metal ions (jaise instruments se copper) milk ko contaminate kar sakte hain." },
          { "name": "Radionuclides", "desc": "Radioactive isotopes (jaise Strontium-90, Iodine-131) yadi cow contaminated feed ya paani ka sevan karti hai to milk mein enter kar sakte hain." }
        ]
      }
    }
  },
  en: {
    "mainTitle": "Chemistry of Milk",
    "description": "A deep dive into the science of milk.",
    "backToTopics": "Back to Topics",
    "composition": {
      "title": "Composition of Milk",
      "whatIsMilk": {
        "title": "What is Milk?",
        "fssaiDef": "<strong>FSSAI Definition:</strong> “Milk is the normal mammary secretion derived from complete milking of a healthy milch animal without either addition thereto or extraction therefrom, unless otherwise provided. It shall be free from colostrum.”",
        "codexDef": "<strong>Codex Alimentarius Definition:</strong> \"Milk is the normal mammary secretion of milking animals obtained from one or more milkings without either addition to it or extraction from it, intended for consumption as liquid milk or for further processing.\"",
        "usaDef": "<strong>Federal Definition of U.S.A.:</strong> \"Milk is the fresh, clean lacteal secretion obtained by the complete milking of one or more healthy cows, properly fed and kept, excluding that obtained within 15 days before and 10 days after calving and containing not less than 8.5 percent solids-not-fat and not less than 3.25 percent milk fat.\"",
        "p1": "Milk is a complex biological fluid that can be seen in three different phases:",
        "phases": [
          "Emulsion: Fat globules are dispersed in water.",
          "Colloidal Suspension: Casein protein micelles are suspended in water.",
          "True Solution: Lactose, whey proteins, minerals, and vitamins are completely dissolved in water."
        ]
      },
      "generalComposition": {
        "title": "General Composition of Milk",
        "headers": ["Constituents", "%", "Constituents", "%"],
        "rows": [
            { "c1": "Water", "v1": "87.54", "c2": "Casein", "v2": "2.63" },
            { "c1": "Fat", "v1": "3.71", "c2": "Whey protein", "v2": "0.42" },
            { "c1": "Protein", "v1": "3.18", "c2": "Protease-peptone", "v2": "0.13" },
            { "c1": "Lactose", "v1": "4.70", "c2": "Other nitrogenous substances", "v2": "0.11" },
            { "c1": "Ash", "v1": "0.76", "c2": "Total", "v2": "100.0" }
        ]
      },
      "speciesDifferences": {
        "title": "Differences in Milk Composition due to Species",
        "headers": ["Species", "Water (%)", "Fat (%)", "Sugar (%)", "Protein (%)", "Ash (%)"],
        "rows": [
          { "species": "Cow", "water": "87.54", "fat": "3.71", "sugar": "4.70", "protein": "3.31", "ash": "0.76" },
          { "species": "Goat", "water": "85.58", "fat": "4.93", "sugar": "4.78", "protein": "4.11", "ash": "0.89" },
          { "species": "Buffalo", "water": "82.90", "fat": "7.50", "sugar": "4.70", "protein": "4.10", "ash": "0.80" },
          { "species": "Human", "water": "88.50", "fat": "3.30", "sugar": "6.80", "protein": "1.30", "ash": "0.20" }
        ]
      },
      "factorsAffectingComposition": {
        "title": "Factors Affecting Milk Composition",
        "intro": "The composition of milk is not constant; it varies based on several factors:",
        "factors": [
          { "name": "Breed", "desc": "Different breeds (e.g., Jersey, Holstein Friesian) have varying amounts of fat and protein. Jersey cows typically have higher fat content than HF cows." },
          { "name": "Feed", "desc": "The feed given to the animal directly impacts the fat content and fatty acid profile of the milk. Green fodder can increase beneficial fatty acids like Conjugated Linoleic Acid (CLA) in the fat." },
          { "name": "Stage of Lactation", "desc": "Milk right after calving (colostrum) is very high in proteins and antibodies. As lactation progresses, the composition changes, with fat and protein levels typically increasing towards the end." },
          { "name": "Season", "desc": "Fat and SNF (Solids-Not-Fat) levels generally decrease in the summer, while they tend to be higher in the winter." },
          { "name": "Animal Health", "desc": "Diseases like mastitis can alter milk composition, leading to an increase in somatic cell count (SCC) and salts, while lactose decreases." }
        ]
      },
      "water": {
        "title": "Water in Milk",
        "p1": "Water is the most abundant component, acting as a suspending, dispersing, and dissolving medium. It exists in three forms:",
        "forms": [
          { "name": "Free Water", "desc": "The largest portion, it acts as a solvent and supports microbial growth." },
          { "name": "Bound Water", "desc": "Bound to proteins and other components via hydrogen bonds. It does not freeze at 0°C, does not act as a solvent, and cannot support microbial growth." },
          { "name": "Crystallized Water", "desc": "Water present within the chemical structure of components like lactose hydrate (C₁₂H₂₂O₁₁·H₂O). It is the hardest to remove." }
        ]
      }
    },
    "mammaryGland": {
        "title": "The Mammary Gland and Milk Secretion",
        "structure": {
            "title": "The Mammary Gland Structure",
            "p1": "The mammary gland is made up of secretary and connective tissue. The basic secretory units are small, grape-like objects called \"alveoli\". A group of 150-220 alveoli form a lobule, and a number of lobules form a lobe. The cow’s udder consists of 4 separate quarters, each with a teat cistern and gland cistern, from which numerous ducts branch out to the alveoli.",
            "p2": "Each alveolus consists of a single layer of epithelial cells surrounding a central cavity (lumen) and is surrounded by myoepithelial cells responsible for milk ejection."
        },
        "physiology": {
            "title": "Physiology of Milk Secretion",
            "p1": "Milk is synthesized in the epithelial cells of the alveolus under complex hormonal control (estrogen, progesterone, prolactin, etc.). Precursors for milk synthesis are taken from the blood. Protein and lipid are synthesized in the endoplasmic reticulum; lactose synthesis and assembly of casein micelles occur in the Golgi apparatus. For every liter of milk secreted, about 400-500 litres of blood must circulate through the udder.",
            "ejectionTitle": "Milk Ejection (Let-down)",
            "ejectionText": "This is a reflex action controlled by the hormone oxytocin, which causes the myoepithelial cells to contract and squeeze milk from the alveoli into the ducts. This reflex lasts for about 10 minutes."
        },
        "precursors": {
            "title": "Milk Precursors",
            "caption": "Comparison of Blood Plasma and Milk Composition",
            "headers": ["Constituent", "Blood Plasma (%)", "Milk (%)"],
            "rows": [
              { "constituent": "Water", "plasma": "91.0", "milk": "87.0" },
              { "constituent": "Glucose", "plasma": "0.05", "milk": "Lactose: 4.8" },
              { "constituent": "Serum Albumin", "plasma": "3.20", "milk": "Lactalbumin: 0.52" },
              { "constituent": "Serum Globulin", "plasma": "4.40", "milk": "Globulin: 0.05" },
              { "constituent": "Amino Acids", "plasma": "0.003", "milk": "Casein: 2.9" },
              { "constituent": "Neutral Fats", "plasma": "0.09", "milk": "3.8" },
              { "constituent": "Calcium", "plasma": "0.009", "milk": "0.12" }
            ]
        }
    },
    "proteins": {
      "title": "Milk Proteins",
      "overview": {
        "title": "Overview of Milk Proteins",
        "p1": "Protein is one of the most essential nutrients of milk, present at about 3.5%. It contains all essential amino acids. The proteins in milk are divided into two main groups: <strong>Casein (~80%)</strong> and <strong>Whey Proteins (~20%)</strong>."
      },
      "casein": {
        "title": "Casein (~80% of Milk Protein)",
        "p1": "Casein is a class of phosphoproteins existing in milk as complex particles called <strong>micelles</strong>. These micelles are what make milk white and opaque. Biologically, casein serves as a carrier for calcium and phosphate. All caseins precipitate at a pH of 4.6 (their isoelectric point).",
        "micelleStructure": {
            "title": "In-depth Structure of the Casein Micelle",
            "p1": "The casein micelle is a marvel of bio-engineering. It's composed of smaller protein aggregates (sub-micelles) held together by nano-clusters of 'colloidal calcium phosphate' (CCP). The surface of the micelle is covered by a 'hairy layer' of κ-casein. This layer keeps the micelles apart from each other (steric repulsion), preventing them from sticking together and ensuring milk remains a stable liquid."
        },
        "fractionsTitle": "Casein Fractions",
        "fractionsText": "Casein is composed of four main fractions: αs1-casein, αs2-casein, β-casein, and κ-casein. κ-casein is located on the surface of the micelle and is responsible for its stability.",
        "coagulationTitle": "Casein Coagulation (Curd Formation)",
        "coagulationText": "The ability of casein to coagulate is fundamental to making products like cheese and yogurt. This happens in several ways:",
        "coagulationTypes": [
          { "name": "Acid Coagulation", "desc": "When the pH of milk drops to 4.6 (e.g., by adding lemon/vinegar or through bacterial fermentation), casein micelles lose their negative charge and the CCP dissolves, causing them to aggregate and form a gel. This is the principle behind Paneer and Dahi." },
          { "name": "Enzymatic Coagulation", "desc": "The enzyme rennet (or chymosin) specifically cleaves the 'hairy layer' of κ-casein, destabilizing the micelles and causing them to clump together in the presence of calcium to form a curd. This is the basis of most cheesemaking." },
          { "name": "Alcohol Precipitation", "desc": "Alcohol dehydrates the protective layer of the micelle. If the milk is already acidic (unstable), the proteins will coagulate. This is a quick test for milk freshness." },
          { "name": "Heat Precipitation", "desc": "While pure casein is heat-stable, prolonged heating at very high temperatures (e.g., 120°C under pressure) can cause coagulation." }
        ]
      },
      "whey": {
        "title": "Whey Proteins (~20% of Milk Protein)",
        "p1": "The proteins remaining in the liquid whey after casein precipitation are called whey proteins. These globular proteins are more water-soluble than caseins and are denatured by heat.",
        "functionalProperties": {
            "title": "Functional Properties of Whey Proteins",
            "p1": "Whey proteins are widely used in the food industry for their unique properties:",
            "properties": [
              { "name": "Gelling:", "desc": "Upon heating, whey proteins can denature and form a gel network, providing structure to products." },
              { "name": "Foaming:", "desc": "They can form a film around air bubbles to create stable foams." },
              { "name": "Emulsification:", "desc": "Whey proteins help prevent oil and water from separating, creating stable emulsions." }
            ]
        },
        "fractionsTitle": "Whey Protein Fractions",
        "fractions": [
          { "name": "Beta–lactoglobulin (β-Lg)", "desc": "Comprises about half of the total whey proteins. It is coagulated by heat and is an excellent source of essential amino acids." },
          { "name": "Alpha–lactalbumin (α-La)", "desc": "A key protein in human milk, it is a good source of tryptophan and is involved in lactose synthesis." },
          { "name": "Immunoglobulins (Ig)", "desc": "These are antibodies that provide passive immunity and are found in very high concentrations in colostrum." },
          { "name": "Bovine Serum Albumin (BSA)", "desc": "A large protein with good fat-binding properties." }
        ]
      }
    },
    "fat": {
        "title": "Milk Fat (Lipids)",
        "characteristics": {
            "title": "Milk Fat Characteristics",
            "p1": "Fat is the most commercially significant and variable constituent of milk. About 98% of milk fat is a mixture of triglycerides. It exists as small globules (0.1-15 µm diameter) surrounded by a protective membrane called the Milk Fat Globule Membrane (MFGM).",
            "p2": "Milk fat is unique due to its high proportion of short-chain fatty acids (like butyric acid, C4:0), which contribute to its characteristic flavor. This wide variety of fatty acids also gives milk fat a broad melting range (approx. -30°C to +40°C), making it solid at refrigeration temperatures and liquid at body temperature.",
            "mfgmComposition": {
                "title": "Composition of the Milk Fat Globule Membrane (MFGM)",
                "p1": "The MFGM is not just a simple membrane. It is a complex three-layered structure of phospholipids, glycolipids, proteins, and enzymes that not only stabilizes the fat globule but also has nutritional benefits, such as supporting cognitive development in infants."
            },
            "fattyAcidProfile": {
                "title": "Fatty Acid Profile",
                "p1": "Milk fat contains about 70% Saturated (SFA), 25% Monounsaturated (MUFA), and 5% Polyunsaturated (PUFA) fatty acids. It also contains Conjugated Linoleic Acid (CLA), which is believed to have several health benefits."
            }
        },
        "stability": {
            "title": "Fat Globules and Emulsion Stability",
            "p1": "Milk is an oil-in-water emulsion. The MFGM stabilizes the fat globules, preventing them from clumping together (coalescence).",
            "creamingTitle": "Creaming",
            "creamingText": "Due to their lower density, fat globules rise to the top, a process called creaming. Homogenization prevents this by reducing globule size.",
            "lipolysisTitle": "Lipolysis",
            "lipolysisText": "The enzyme lipoprotein lipase can break down fat (lipolysis), releasing free fatty acids that cause a soapy or rancid off-flavor. This is usually prevented by an intact MFGM but can be triggered by mechanical damage to the globules (e.g., excessive pumping)."
        },
        "autoxidation": {
            "title": "Autoxidation and Crystallization",
            "autoxidationTitle": "Autoxidation",
            "autoxidationText": "Double bonds in unsaturated fatty acids can oxidize, leading to off-flavors (tallowy, fishy, metallic). This process is accelerated by heat, light, and metal ions (especially copper).",
            "crystallizationTitle": "Crystallization",
            "crystallizationText": "Milk fat consists of a mix of triglycerides with different melting points. When milk is cooled, the higher melting point triglycerides crystallize. This process is complex and can occur in different polymorphic forms (α, β', β), which affects the texture and stability of products like butter and cream."
        }
    },
    "lactose": {
      "title": "Lactose (Milk Sugar)",
      "properties": {
        "title": "Lactose Properties",
        "p1": "Lactose is the main carbohydrate in milk (4.8-5.2%), present in true solution. It is a disaccharide made of glucose and galactose. Lactose is only about 1/6th as sweet as sucrose (table sugar).",
        "p2": "It is fermented by microorganisms to produce lactic acid, which is essential for cultured products like yogurt and cheese. When heated, lactose can undergo the Maillard reaction with protein amino groups, leading to browning and a cooked flavor, especially in sterilized milk.",
        "lactoseIntolerance": {
            "title": "What is Lactose Intolerance?",
            "p1": "This is a condition where the body does not produce enough of an enzyme called 'lactase'. Lactase is necessary to break down lactose into glucose and galactose for absorption in the intestines. Without it, lactose gets fermented in the gut, causing gas, bloating, and other digestive issues."
        },
        "crystallizationTitle": "Crystallization and Mutarotation",
        "crystallizationText1": "Lactose can crystallize in two forms, α-hydrate and β-anhydrous. When dissolved in water, these forms interconvert until an equilibrium is reached, a process called <strong>mutarotation</strong>. The α-lactose hydrate is less soluble and can form hard, gritty crystals, causing a \"sandiness\" defect in products like ice cream and sweetened condensed milk if not controlled properly.",
        "crystallizationText2": "The rate of mutarotation is affected by temperature and pH. This is a critical factor in the production of dairy powders and condensed products to ensure a smooth texture."
      }
    },
    "minerals": {
      "title": "Minerals and Salts",
      "composition": {
        "title": "Mineral Composition and Distribution",
        "p1": "Milk is an excellent source of dietary calcium, magnesium, phosphorus, and potassium. The salts in milk exist in a complex equilibrium between a dissolved (soluble) phase and a colloidal phase associated with the casein micelles.",
        "p2": "About two-thirds of the calcium and half of the phosphate are bound within the casein micelle as \"colloidal calcium phosphate\" (CCP). This CCP is crucial for maintaining the structure and stability of the casein micelles. The dissolved salts in the milk serum affect various properties, including protein stability and heat stability. This 'salt balance', especially the ratio of divalent cations (Ca²⁺, Mg²⁺) to monovalent cations (Na⁺, K⁺) and anions (phosphate, citrate), determines whether milk will remain stable during heat treatments like UHT. An imbalance can cause milk to coagulate upon heating."
      },
      "trace": {
        "title": "Trace Elements",
        "p1": "Milk contains numerous trace elements like Zinc, Copper, and Iron. Some of these are nutritional, while others can be contaminants. For example, Copper (Cu) can act as a catalyst for fat oxidation, leading to off-flavors, even at very low concentrations. Therefore, avoiding contamination from equipment made of copper alloys is important."
      }
    },
    "vitaminsEnzymes": {
        "title": "Vitamins & Enzymes",
        "vitamins": {
            "title": "Vitamins in Milk",
            "p1": "Milk is a good source of many vitamins. Fat-soluble vitamins (A, D, E, K) are found in the milk fat, while water-soluble vitamins (B-complex and Vitamin C) are in the aqueous phase. Pasteurization can destroy some of the more heat-sensitive vitamins like Vitamin C and folate."
        },
        "enzymes": {
            "title": "Enzymes in Milk",
            "p1": "Milk contains several native enzymes. Some important ones include:",
            "list": [
              { "name": "Lipoprotein Lipase", "desc": "Can cause hydrolytic rancidity (soapy flavor) if fat globules are damaged. It is mostly inactivated by pasteurization." },
              { "name": "Alkaline Phosphatase (ALP)", "desc": "Used as an indicator for proper pasteurization, as it is destroyed at pasteurization temperatures. A positive ALP test indicates inadequate pasteurization or raw milk contamination." },
              { "name": "Plasmin", "desc": "A heat-resistant protease that can break down protein and cause age gelation or bitterness in UHT milk during long storage." },
              { "name": "Lactoperoxidase (LP)", "desc": "Part of a natural antimicrobial system (the LP system) in raw milk. It is more heat-resistant than ALP and its absence can indicate overheating of milk." },
              { "name": "Xanthine Oxidase", "desc": "Associated with the fat globule membrane. Its activity is sometimes linked to oxidative processes." }
            ]
        }
    },
    "properties": {
        "title": "Physical Properties",
        "overview": {
            "title": "Overview of Physical Properties",
            "p1": "The physical properties of milk are determined by its complex composition and are crucial for processing and quality control."
        },
        "headers": ["Property", "Value", "Significance"],
        "rows": [
          { "property": "Colour and optical properties", "value": "White to yellow opaque", "details": "Opacity is due to light scattering by fat globules and casein micelles. The yellow color is due to carotene (a Vitamin A precursor) from feed." },
          { "property": "Flavour", "value": "Pleasant, slightly sweet", "details": "Combined effect of components. Off-flavors can develop from feed, bacterial growth, or oxidation." },
          { "property": "Refractive Index (at 20°C)", "value": "1.3440 - 1.3485", "details": "Used for quick estimation of total solids and to detect water adulteration." },
          { "property": "Density (at 20°C)", "value": "Cow: 1.028-1.032 g/mL, Buffalo: 1.030-1.034 g/mL", "details": "Milk is denser than water due to its solid content (SNF). Used in lactometer readings to check for adulteration and to convert volume to mass." },
          { "property": "Viscosity (at 25°C)", "value": "~2.0 cP", "details": "About twice as viscous as water. Depends on temperature and composition. It affects processes like pumping, filtration, and heat transfer. Homogenization increases viscosity." },
          { "property": "Surface Tension (at 20°C)", "value": "50 dyne/cm", "details": "Lower than water (72 dyne/cm) due to surfactants like proteins and free fatty acids. This affects the foaming properties of milk." },
          { "property": "Freezing Point", "value": "-0.512 to -0.575 °C", "details": "The most reliable indicator for detecting added water. Milk freezes below 0°C due to dissolved solids (lactose, minerals). Adding water brings the freezing point closer to 0°C." },
          { "property": "Boiling Point", "value": "100.17 °C", "details": "Slightly higher than water due to dissolved solids." },
          { "property": "Acidity (Titratable)", "value": "Cow: 0.14-0.16% LA, Buffalo: 0.17-0.18% LA", "details": "Natural acidity is due to casein, phosphates, citrates, etc. Fresh milk has no lactic acid. An increase indicates bacterial activity." },
          { "property": "pH", "value": "6.5 - 6.7", "details": "Slightly acidic. Lower pH suggests bacterial action (souring)." },
          { "property": "Heat Stability", "value": "Varies, depends on salt balance", "details": "Ability to withstand high temperatures without coagulation. Crucial for sterilized milk products." },
          { "property": "Redox Potential (Eh)", "value": "+0.2 to +0.3 volts", "details": "Indicates the balance between oxidizing and reducing agents. Decreases upon boiling or due to microbial growth." }
        ]
    },
    "processingEffects": {
        "title": "Effect of Processing on Milk Components",
        "intro": "Dairy processing makes milk safe and stable, but it also alters its chemical and physical properties:",
        "sections": [
            {
                "name": "Heat Treatment (Pasteurization / Sterilization)",
                "desc": "Heat treatment primarily denatures whey proteins, making them less soluble. Some vitamins, like Vitamin C and B-complex, are destroyed. At high temperatures (UHT/sterilization), the Maillard reaction (lactose + protein) occurs, leading to a slight browning and a 'cooked' flavor."
            },
            {
                "name": "Homogenization",
                "desc": "This is a mechanical process that breaks down fat globules by forcing milk through a small orifice at high pressure. It results in whiter milk, prevents cream layer formation, and improves texture. However, the newly formed fat surface is more susceptible to attack by the lipase enzyme, which is why pasteurization is essential before homogenization."
            },
            {
                "name": "Fermentation",
                "desc": "In products like yogurt, bacteria from a starter culture convert lactose into lactic acid. This lowers the pH, causing the casein micelles to coagulate at their isoelectric point (pH 4.6), forming a stable gel (curd). Flavor compounds like acetaldehyde are also produced during this process."
            }
        ]
    },
    "other": {
      "title": "Other Components & Contaminants",
      "minor": {
        "title": "Minor Natural Components",
        "list": [
          { "name": "Organic Acids", "desc": "Milk contains citric acid and trace amounts of others. Bacterial action can increase lactic acid." },
          { "name": "Non-Protein Nitrogen (NPN) Compounds", "desc": "About 5% of total nitrogen is non-protein nitrogen, including urea, creatinine, and free amino acids. Its level helps in detecting adulteration like the addition of urea." },
          { "name": "Gases", "desc": "Freshly drawn milk contains dissolved gases, mainly carbon dioxide. On exposure to air, CO₂ is lost and O₂/N₂ are gained. Dissolved oxygen can contribute to oxidation." }
        ]
      },
      "contaminants": {
        "title": "Contaminants",
        "p1": "Substances that can enter milk unintentionally:",
        "list": [
          { "name": "From the Cow", "desc": "If a cow has mastitis, blood components and somatic cells can enter the milk. Drugs (antibiotics) used for treatment can also pass into the milk." },
          { "name": "From Feed", "desc": "Pesticides, mycotoxins (from molds on feed), and heavy metals can be transferred to milk." },
          { "name": "From Handling", "desc": "Cleaning agents, sanitizers, and metal ions (like copper from equipment) can contaminate milk." },
          { "name": "Radionuclides", "desc": "Radioactive isotopes (like Strontium-90, Iodine-131) can enter milk if the cow ingests contaminated feed or water." }
        ]
      }
    }
  }
}
