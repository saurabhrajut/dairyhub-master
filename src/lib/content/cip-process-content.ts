
export const cipProcessContent = {
    hi: {
    "main_title": "Dairy Instruments ki Dhulai aur Safai",
    "main_description": "Alag-alag dairy instruments ko saaf aur sanitize karne ke liye ek detailed guide.",
    "intro": {
      "title": "Introduction: CIP aur Milk Stone",
      "htmlContent": `
              <p>Dairy instruments aur containers ki surface par bacha hua doodh microbial growth ke liye ek excellent medium pradan karta hai. Isliye, dairy instruments ko theek se saaf aur sanitize karna zaroori hai. Cleaning aur sanitization complementary processes hain aur akele koi bhi final result prapt nahi karta hai. Cleaning ka matlab doodh ke residue (Soil) ko hatana aur surface ko is mitti aur viable organism se free karna hai.</p>
              <h4 class="font-bold mt-4">CIP/CAC Kya Hai?</h4>
              <p><strong>CIP (Cleaning-In-Place):</strong> Yeh ek automated method hai jismein pipelines, tanks, aur doosre instruments ko bina khole (disassemble) saaf kiya jaata hai. Ismein cleaning aur sanitizing solution ko ek certain sequence mein pipes aur instruments ke through pump kiya jaata hai. High velocity flow mechanical scrubbing effect paida karta hai jo deposits ko hatata hai.</p>
              <p><strong>CAC (Cleaning-Out-of-Place):</strong> Is method mein, chhote parts ya instruments ko alag kiya jaata hai aur unhein cleaning ke liye ek dedicated area mein le jaaya jaata hai, jahan unhein tanks mein dubokar ya manually saaf kiya jaata hai.</p>

              <h4 class="font-bold mt-4">CIP System ke Types</h4>
              <p><strong>Single Pass Systems:</strong> Har cleaning cycle ke liye naya cleaning solution introduce kiya jaata hai aur phir drain mein dispose kar diya jaata hai. Yeh zyada tar mamlon mein ek pre-rinse se shuru hoga taaki jitna possible ho utna soil hataya ja sake, iske baad detergent cleaning aur final rinse hoga.</p>
              <p><strong>Recirculation Systems:</strong> Cleaning solution ko external tanks mein milaya jaata hai aur saaf kiye jaane wale plant mein introduce kiya jaata hai. Unhein phir se recirculate kiya jaata hai aur zaroorat ke anusaar top-up kiya jaata hai jab tak ki cleaning cycle poora na ho jaaye. Detergent rinse ke baad final rinse karna normal hai. Recirculation systems ko zyada initial investment ki zaroorat hoti hai, lekin kam paani aur cleaning detergent ka use karte hain.</p>

              <h4 class="font-bold mt-4">Milk Stone:</h4>
              <p>Yeh garam paani aur detergent solutions se sookhe doodh ke solids aur salts ka accumulation hai. Ismein insoluble calcium salts, calcium phosphate aur milk protein (coagulated aur precipitated) hote hain.</p>
              <p><strong>Composition:</strong> Ismein 2.6-8.7% moisture; 3.6-17.6% fat; 4.4-43.8% protein aur 42-67% ash hoti hai.</p>
            `
    },
    "cip_cycle": {
      "title": "Standard CIP Cleaning Cycle",
      "intro": "Ek typical CIP cycle mein neeche diye gaye steps hote hain:",
      "steps": [
        {
          "title": "Product Residues ki Recovery",
          "details": "<p>Drainage dwara product ke residues ko recover karna.</p>"
        },
        {
          "title": "Residues ka Expulsion",
          "details": "<p>Paani ya compressed air ke saath non-recoverable residues ka expulsion.</p>"
        },
        {
          "title": "Pre-rinse (Initial Wash)",
          "details": "<p><strong>Purpose:</strong> Zyada tar loose dirt aur doodh ke residues ko hatana.<br/><strong>Process:</strong> System ko gungune paani (50-60°C) se 10 minute tak dhoya jaata hai.</p>"
        },
        {
          "title": "Alkali Wash",
          "details": "<p><strong>Purpose:</strong> Fat aur protein ko hatana.<br/><strong>Process:</strong> 0.5-1.5% caustic soda (NaOH) ke solution ko 75°C par 30 minute ke liye circulate kiya jaata hai.</p>"
        },
        {
          "title": "Intermediate Rinse",
          "details": "<p><strong>Purpose:</strong> Alkaline detergent ke residues ko hatana.<br/><strong>Process:</strong> System ko phir se garam paani (50°C) se 5-8 minute ke liye dhoya jaata hai.</p>"
        },
        {
          "title": "Acid Wash",
          "details": "<p><strong>Purpose:</strong> Mineral deposits jaise milk stone ko hatana.<br/><strong>Process:</strong> 0.5-1.0% nitric acid (HNO₃) ke solution ko 75°C par 20 minute ke liye circulate kiya jaata hai.</p>"
        },
        {
          "title": "Final Rinse",
          "details": "<p><strong>Purpose:</strong> Acid ke residues ko hatana.<br/><strong>Process:</strong> System ko garam paani (50°C) se 5-8 minute ke liye dhoya jaata hai.</p>"
        },
        {
          "title": "Disinfection",
          "details": "<p><strong>Purpose:</strong> Bache hue microorganisms ko maarna.<br/><strong>Process:</strong> Thermal disinfection (90-95°C par 10 minute) aur thanda karna, ya ek suitable sanitizer ke saath chemical disinfection.</p>"
        }
      ]
    },
    "chemicals": {
      "title": "CIP mein Use Hone Wale Chemicals",
      "intro": "CIP process mein alag-alag tarah ke chemicals ka use kiya jaata hai, har ek ka ek specific purpose hota hai:",
      "types": [
        {
          "title": "Alkaline Detergents",
          "details": "<p><strong>Example:</strong> Caustic soda (NaOH), sodium carbonate, sodium metasilicate.<br/><strong>Purpose:</strong> Yeh fat ko saponify karte hain aur protein ko todte hain. Yeh bahut effective cleaning agents hain.</p>"
        },
        {
          "title": "Acid Detergents",
          "details": "<p><strong>Example:</strong> Nitric acid (HNO₃), phosphoric acid (H₃PO₄).<br/><strong>Purpose:</strong> Yeh milk stone jaise mineral deposits ko dissolve karte hain.</p>"
        },
        {
          "title": "Sanitizers",
          "details": "<p><strong>Example:</strong> Chlorine compounds (sodium hypochlorite), peracetic acid (PAA), garam paani (>85°C).<br/><strong>Purpose:</strong> Final wash ke baad bache hue microorganisms ko maarna.</p>"
        }
      ]
    },
    "cleaning_procedures": {
      "title": "Specific Instruments ki Cleaning Procedures",
      "sections": [
        {
          "title": "Doodh ke Cans ki Safai",
          "content": `
                    <p>Dairy reception dock par aluminium cans mein receive hue raw milk ko manual aur/ya mechanical washing dono ka use karke saaf aur sanitize kiya ja sakta hai, jo daily receive hone wale cans ke number par depend karta hai.</p>
                    <h5 class="font-bold mt-2">Manual Washing:</h5>
                    <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Cans khaali karne ke turant baad, unhein pehle tap water se dhoya jaata hai aur loose dirt ko brush se andar se hata diya jaata hai.</li>
                        <li>Cans ko pehle se taiyaar 50°C par detergent solution (1% sodium hexametaphosphate, trisodium phosphate, sodium carbonate, teepol) mein bhigoyein.</li>
                        <li>Garam detergent solution se cans ke andar ke hisse ko acchi tarah se brush karein.</li>
                        <li>Cans ko garam paani se dhoyein.</li>
                        <li>Lid ke saath cans ko steam karein aur draining rack par store karein.</li>
                    </ol>
                    <h5 class="font-bold mt-2">Mechanical Washing (Rotary ya Tunnel Type Washer):</h5>
                     <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Detergent tank ko 0.5% alkalinity wale detergent solution se charge karein.</li>
                        <li>Mechanical washer ke paani aur steam valve kholein aur motor aur pump start karein.</li>
                        <li>Cans aur lids ko unke respective carrier paths mein load karein.</li>
                        <li>Jet pressure ko 15 psi par aur pre-rinsing (40°C), detergent wash (75°C), garam paani wash (85°C) ka temperature maintain rakhein.</li>
                        <li>Steaming aur garam paani blast pressure ko respectively 20 psi aur temperature 120°C aur 125°C par maintain rakha jaata hai.</li>
                        <li>Outlet par cans aur lids utaarein aur rack par store karein.</li>
                        <li>Har operation ke start aur end mein qualitative ya quantitative tests ka use karke detergent solution ki strength check karein.</li>
                    </ol>
                  `
        },
        {
          "title": "Cream Separator/Clarifier ki Safai",
          "content": `
                       <ol class="list-decimal list-inside space-y-1 mt-2">
                          <li>Din ke operation ke baad, main machine se bowl hata dein.</li>
                          <li>Bowl ko dismantle karein aur discs hata dein.</li>
                          <li>Bowl ke periphery se separator slime hata dein.</li>
                          <li>Brush ki madad se har ek disc ko garam detergent solution se saaf karein.</li>
                          <li>Sabhi parts ko gungune paani se dhoyein aur sookhne ke liye rakh dein.</li>
                       </ol>
                  `
        },
        {
          "title": "Plate Heat Exchangers (PHE) ki Safai",
          "content": `
                    <h5 class="font-bold mt-2">Daily Cleaning:</h5>
                     <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Film hatane ke liye gungune paani se dhoyein.</li>
                        <li>70°C par 20 minute ke liye 1% acid detergent solution circulate karke dhoyein.</li>
                        <li>Garam paani se dhoyein.</li>
                        <li>70°C par 20-30 minute ke liye 1% alkali solution circulate karein.</li>
                        <li>40-50°C par garam paani se dhoyein, phir 10 minute ke liye tap water se aur sookhne dein.</li>
                        <li>Use se pehle sanitizer solution circulate karein.</li>
                    </ol>
                    <h5 class="font-bold mt-2">Periodic Cleaning:</h5>
                     <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Plate heat exchanger ko dhyan se kholein aur dismantle karein.</li>
                        <li>Rubber gaskets check karein aur agar kharab ho toh badlein.</li>
                        <li>Har ek plate ko check karein aur detergent solution ka use karke soft brush se scrub karke scale hata dein.</li>
                        <li>Plates par koi scratch ya dent banane se bachein.</li>
                        <li>Detergent ke nishan hatane ke liye plates ko tap water se acchi tarah dhoyein.</li>
                        <li>Manufacturer ke instructions follow karte hue plates ko reassemble karein.</li>
                    </ol>
                  `
        },
        {
          "title": "Doodh Storage Tank ki Safai",
          "content": `
                       <ol class="list-decimal list-inside space-y-1 mt-2">
                          <li>Tank khaali hone ke baad, drain valve kholein.</li>
                          <li>Pressurized spray head ka use karke tank ko garam paani se dhoyein.</li>
                          <li>Valve band karein aur pressure nozzle ka use karke detergent solution se dhoyein.</li>
                          <li>Valve kholein aur detergent solution ko nikalne dein.</li>
                          <li>Detergent solution ke nishan hatane ke liye garam paani ke baad thande peene yogya paani se dhoyein.</li>
                          <li>Paani nikalein aur sookhne dein.</li>
                          <li>Steam ya chlorinated water (150-200 ppm chlorine) ka use karke sanitize karein.</li>
                       </ol>
                  `
        }
      ]
    },
    "teepol_detergent": {
      "title": "Liquid Detergent Banana aur Check Karna",
      "htmlContent": `
              <p>Dairy aur food industry mein, haath se bartano aur chhote instruments ki safai ke liye neutral liquid detergent (jaise Teepol) kaafi use kiya jaata hai.</p>
              <h4 class="font-bold mt-4">1. General Purpose Liquid Detergent Kaise Banayein (1000 Litre Batch):</h4>
              <p>Yeh ek general formulation hai. Industrial production zyada complex ho sakta hai.</p>
              <div class="overflow-x-auto my-4"><table class="w-full"><thead><tr class="bg-muted"><th class="p-2 text-left">Ingredient</th><th class="p-2 text-left">Quantity (Kg)</th><th class="p-2 text-left">%</th><th class="p-2 text-left">Purpose</th></tr></thead><tbody>
              <tr><td class="p-2 border-b">Paani (Water)</td><td class="p-2 border-b">820 - 840 Kg</td><td class="p-2 border-b">82-84%</td><td class="p-2 border-b">Main Solvent</td></tr>
              <tr><td class="p-2 border-b">Acid Slurry (LABSA 90%)</td><td class="p-2 border-b">100 Kg</td><td class="p-2 border-b">10%</td><td class="p-2 border-b">Main Cleaning Agent (Anionic Surfactant)</td></tr>
              <tr><td class="p-2 border-b">Caustic Soda (NaOH)</td><td class="p-2 border-b">~15 Kg</td><td class="p-2 border-b">~1.5%</td><td class="p-2 border-b">Slurry ko neutralize karne ke liye (pH 7 tak)</td></tr>
              <tr><td class="p-2 border-b">Urea ya Namak (Salt)</td><td class="p-2 border-b">20 - 40 Kg</td><td class="p-2 border-b">2-4%</td><td class="p-2 border-b">Viscosity Enhancer</td></tr>
              <tr><td class="p-2 border-b">Rang aur Khushboo (Color & Perfume)</td><td class="p-2 border-b">Zaroorat anusaar</td><td class="p-2 border-b">-</td><td class="p-2 border-b">Aesthetics ke liye</td></tr>
              <tr class="bg-muted"><td class="p-2 font-bold">Total</td><td class="p-2 font-bold">1000 Kg</td><td class="p-2 font-bold">100%</td><td class="p-2 font-bold"></td></tr>
              </tbody></table></div>
              <p class="font-semibold">Process:</p>
              <ol class="list-decimal list-inside space-y-1 mt-2">
                  <li>Ek bade tank mein paani lein. Dheere-dheere Acid Slurry daalein aur lagataar hilate rahein.</li>
                  <li>Alag se, Caustic Soda ko thode paani mein gholein (savdhani bartein, yeh garam hota hai).</li>
                  <li>Caustic soda ke solution ko dheere-dheere slurry wale mixture mein daalein jab tak ki mixture ka pH 7 (neutral) na ho jaaye.</li>
                  <li>Gaadhapan badhane ke liye Urea ya namak daalein aur acchi tarah milayein. Aakhir mein, rang aur khushboo milayein.</li>
              </ol>

              <h4 class="font-bold mt-6">2. Acidic Cleaner Kaise Banayein (1000 Litre Batch):</h4>
              <p>Yeh ek strong acid-based cleaner hai jo milk stone aur doosre mineral deposits ko hatane ke liye use kiya jaata hai. <strong>Warning: Strong acids khatarnak hote hain, hamesha aavashyak suraksha upkaran (PPE) pehnein.</strong></p>
               <div class="overflow-x-auto my-4"><table class="w-full"><thead><tr class="bg-muted"><th class="p-2 text-left">Ingredient</th><th class="p-2 text-left">Quantity (Kg)</th><th class="p-2 text-left">%</th><th class="p-2 text-left">Purpose</th></tr></thead><tbody>
              <tr><td class="p-2 border-b">Paani (Water)</td><td class="p-2 border-b">880 Kg</td><td class="p-2 border-b">88%</td><td class="p-2 border-b">Solvent</td></tr>
              <tr><td class="p-2 border-b">Hydrochloric Acid (HCl - 33%)</td><td class="p-2 border-b">100 Kg</td><td class="p-2 border-b">10%</td><td class="p-2 border-b">Main Cleaning Agent (Descaling)</td></tr>
              <tr><td class="p-2 border-b">Non-ionic Surfactant</td><td class="p-2 border-b">20 Kg</td><td class="p-2 border-b">2%</td><td class="p-2 border-b">Surface ko geela karne aur gandagi hatane mein madad karta hai</td></tr>
              </tbody></table></div>
              <p class="font-semibold">Process:</p>
              <ol class="list-decimal list-inside space-y-1 mt-2">
                  <li>Ek acid-resistant tank mein paani lein.</li>
                  <li><strong>Hamesha acid ko paani mein dheere-dheere daalein, kabhi bhi paani ko acid mein na daalein.</strong> Hydrochloric Acid ko paani mein daalein aur milayein.</li>
                  <li>Aakhir mein, non-ionic surfactant daalein aur acchi tarah milayein.</li>
              </ol>
              
              <h4 class="font-bold mt-6">Liquid Detergent ki Strength Kaise Check Karein (Active Matter %):</h4>
              <p>Detergent ki strength ko usmein maujood "Active Matter" (surfactant ki matra) se maapa jaata hai. Iski jaanch ke liye ek standard method two-phase titration hai, jo ek complex lab procedure hai aur iske liye specific chemicals aur expertise ki zaroorat hoti hai.</p>
            `
    },
    "sip": {
      "title": "SIP (Sterilization-In-Place)",
      "intro": "Sterilization-in-place (SIP) ek continuous commercial scale ka operation hai, jahan zaroori units ko sterilize kiya ja sakta hai. Yeh design, installation aur operation ke maamle mein bahut sophisticated hote hain aur inhein highly qualified manpower ki zaroorat hoti hai.",
      "process": `
              <h5 class="font-bold mt-2">SIP Process:</h5>
              <ol class="list-decimal list-inside space-y-1 mt-2">
                 <li>Pressure mein steam ko poore installation se guzara jaata hai.</li>
                 <li>Hawa ko piping ya equipment par lage vents ke through bahar nikala jaata hai. Vents bacterial filters dwara protected hote hain.</li>
                 <li>Ek suitable time ke baad vents band ho jaate hain taaki steam ka pressure ek pehle se nirdharit level tak badh sake.</li>
                 <li>Pressure ko zaroori samay tak maintain kiya jaata hai, jiske baad steam ko ek condenser ke through chhoda jaata hai.</li>
                 <li>Record kiya gaya pressure sabhi contaminants ke destruction ke liye zaroori time-temperature combination ko prapt karne ke liye paryapt hona chahiye.</li>
              </ol>
            `
    },
    "advantages": {
      "title": "CIP ke Fayde",
      "list": [
        "Guaranteed aur repeatable quality assurance.",
        "Quality assurance requirements ke liye poora data logging ka provision.",
        "Cleaning solutions ko recycle karke cleaning cost mein kami.",
        "Equipment par na pahunchne wale areas ko saaf karne ki sambhavna.",
        "Operators ke liye behtar suraksha kyunki khatarnak cleaning materials ko handle nahi kiya jaata hai.",
        "Do production runs ke beech ke samay mein kami.",
        "Labour requirements mein kami.",
        "Cleaning materials ka zyada prabhavi upyog aur control.",
        "Paani ki khapat mein kami."
      ]
    },
    "solution_strength": {
      "title": "CIP Solution ki Strength ka Test",
      "intro": "Kushal safai aur germicidal prabhav ke liye detergent solution ki sahi strength banaye rakhna mahatvapurna hai. Strength aamtaur par % concentration ya ppm (chlorine ke liye) mein maapi jaati hai.",
      "alkalinity_test": {
        "title": "Washing Solution ki Strength ka Pata Lagana (Alkalinity Test)",
        "content": `
                  <p>Washing solution ki strength ko aamtaur par NaOH ke terms mein vyakt kiya jaata hai kyunki yeh aksar akele ya disodium phosphate aur sodium metasilicate aadi ke saath combination mein use kiya jaata hai. Glass bottles ke liye aamtaur par 1.5% NaOH ke barabar alkali aur can washing ke liye 0.5% ka use kiya jaata hai. Automatic machines mein washing solution ka baar-baar use karne se yeh aamtaur par patla ho jaata hai. Kushal safai aur germicidal prabhav ke liye detergent solution ki sahi alkalinity banaye rakhna mahatvapurna hai.</p>
                  <h5 class="font-bold mt-4">Requirements:</h5>
                  <p>Conical flask, pipettes, burette, volumetric flask, 2.5 N sulphuric acid, hydrochloric acid (0.1N), phenolphthalein indicator (0.5%)</p>

                  <h5 class="font-bold mt-4">Qualitative Test:</h5>
                  <ol class="list-decimal list-inside space-y-1 mt-2">
                      <li>Ek conical flask mein 10 ml detergent solution lein.</li>
                      <li>12.5 ml N/10 HCl aur 5 boondein 0.5% phenolphthalein indicator daalein.</li>
                      <li>Agar mixture laal ho jaata hai, toh yeh 0.5% se zyada caustic soda ke roop mein alkalinity ko indicate karta hai, jo paryapt hai.</li>
                  </ol>

                  <h5 class="font-bold mt-4">Quantitative Test - Direct Reading Method:</h5>
                   <ol class="list-decimal list-inside space-y-1 mt-2">
                      <li>100 ml conical flask mein 10 ml sample maapein.</li>
                      <li>5 boondein phenolphthalein indicator daalein.</li>
                      <li>2.5 N sulphuric acid ke saath tab tak titrate karein jab tak solution rangheen na ho jaaye.</li>
                      <li>Use kiye gaye acid ke ml ko note karein.</li>
                      <li>Use kiya gaya acid NaOH ke roop mein percent alkali ka direct indicator hai.</li>
                  </ol>

                   <h5 class="font-bold mt-4">Laboratory Method:</h5>
                   <ol class="list-decimal list-inside space-y-1 mt-2">
                      <li>250 ml volumetric flask mein 5 ml washing solution lein.</li>
                      <li>Distilled water se volume poora karein aur acchi tarah milayein.</li>
                      <li>Is solution ke 50 ml ko 100 ml conical flask mein transfer karein.</li>
                      <li>Kuch boondein phenolphthalein indicator daalein.</li>
                      <li>0.1 N sulphuric acid ke saath solution ko rangheen hone tak titrate karein. Use kiye gaye acid ke ml ko "A" ke roop mein record karein.</li>
                      <li>Kuch boondein methyl orange indicator daalein.</li>
                      <li>Halka gulabi rang aane tak titration jaari rakhein. Use kiye gaye acid ke ml ko "B" ke roop mein note karein.</li>
                  </ol>
                  <p class="mt-2"><strong>Calculation:</strong><br/>% Free Caustic = (A - B) × 0.4<br/>% Total Alkali = (A + B) × 0.4</p>
                `
      },
      "calculators": {
        "error_title": "Error",
        "success_title": "Successfully Calculate Kiya Gaya",
        "error_invalid_titre": "Kripya ek valid titre value enter karein.",
        "naoh": {
          "title": "NaOH (%)",
          "description": "10ml CIP solution ke sample ko 0.1 N acid (jaise HCl) ke saath phenolphthalein indicator ka use karke titrate karein.",
          "label": "0.1 N Acid ka Use (ml)",
          "button": "NaOH % Calculate Karein",
          "result_prefix": "Caustic Soda (NaOH):"
        },
        "hno3": {
          "title": "HNO₃ (%)",
          "description": "10ml CIP solution ke sample ko 0.1 N base (jaise NaOH) ke saath phenolphthalein indicator ka use karke titrate karein.",
          "label": "0.1 N Base ka Use (ml)",
          "button": "HNO₃ % Calculate Karein",
          "result_prefix": "Nitric Acid (HNO₃):"
        },
        "h3po4": {
          "title": "H₃PO₄ (%)",
          "description": "10ml CIP solution ke sample ko 0.1 N base (jaise NaOH) ke saath phenolphthalein indicator ka use karke titrate karein.",
          "label": "0.1 N Base ka Use (ml)",
          "button": "H₃PO₄ % Calculate Karein",
          "result_prefix": "Phosphoric Acid (H₃PO₄):"
        },
        "chlorine": {
          "title": "Chlorine (ppm)",
          "description": "100ml CIP solution ke sample ko 0.01 N sodium thiosulphate ke saath iodometric titration method ka use karke titrate karein.",
          "label": "0.01 N Sodium Thiosulphate ka Use (ml)",
          "button": "Chlorine (ppm) Calculate Karein",
          "result_prefix": "Available Chlorine:"
        }
      }
    }
  },
    en: {
        main_title: "Washing and Cleaning of Dairy Equipments",
        main_description: "A detailed guide to clean and sanitize different dairy equipments.",
        intro: {
            title: "Introduction: CIP and Milk Stone",
            htmlContent: `
                <p>Milk remaining on the surface of dairy equipment and containers provides an excellent medium for microbial growth. It is therefore, necessary to clean and sanitize dairy equipment properly. Cleaning and sanitization are complementary processes and alone none achieve the end result. Cleaning means removal of milk residue (Soil) and making the surface free of this soil and viable organism.</p>
                <h4 class="font-bold mt-4">What is CIP/CAC?</h4>
                <p><strong>CIP (Cleaning-In-Place):</strong> This is an automated method for cleaning pipelines, tanks, and other equipment without disassembling them. It involves pumping cleaning and sanitizing solutions through the pipes and equipment in a specific sequence. The high velocity flow generates mechanical scrubbing effect that dislodges deposits.</p>
                <p><strong>CAC (Cleaning-Out-of-Place):</strong> In this method, smaller parts or equipment are disassembled and taken to a dedicated area for cleaning, where they are soaked in tanks or cleaned manually.</p>

                <h4 class="font-bold mt-4">Types of CIP Systems</h4>
                <p><strong>Single Pass Systems:</strong> New cleaning solution is introduced to the plant to be cleaned for each cleaning cycle and then disposed to drain. It would start, in most cases, with a pre-rinse to remove as much soil as possible, followed by the detergent cleaning and a final rinse.</p>
                <p><strong>Recirculation Systems:</strong> The cleaning solutions are mixed in external tanks and introduced into the plant to be cleaned. They are recirculated and topped up as required until the cleaning cycle is complete. It is normal to carry out a final rinse after the detergent rinse. Recirculation systems need more initial investment, but use less water and cleaning detergents.</p>

                <h4 class="font-bold mt-4">Milk Stone:</h4>
                <p>This is an accumulation of dried milk solids and salts from hot water and detergent solutions. It consists of insoluble calcium salts, calcium phosphate, and milk proteins (coagulated & precipitated).</p>
                <p><strong>Composition:</strong> It contains 2.6-8.7% moisture; 3.6-17.6% fat; 4.4-43.8% proteins and 42-67% ash.</p>
            `
        },
        cip_cycle: {
            title: "Standard CIP Cleaning Cycle",
            intro: "A typical CIP cycle consists of the following steps:",
            steps: [
                {
                    title: "Recovery of Product Residues",
                    details: "<p>Recovering product residues by drainage.</p>"
                },
                {
                    title: "Expulsion of Residues",
                    details: "<p>Expulsion of non-retrievable residue with water or compressed air.</p>"
                },
                {
                    title: "Pre-rinse",
                    details: "<p><strong>Purpose:</strong> To remove most of the loose dirt and milk residues.<br/><strong>Process:</strong> The system is rinsed with lukewarm water (50-60°C) for 10 minutes.</p>"
                },
                {
                    title: "Alkali Wash",
                    details: "<p><strong>Purpose:</strong> To remove fat and protein.<br/><strong>Process:</strong> A 0.5-1.5% caustic soda (NaOH) solution is circulated at 75°C for 30 minutes.</p>"
                },
                {
                    title: "Intermediate Rinse",
                    details: "<p><strong>Purpose:</strong> To remove residues of the alkaline detergent.<br/><strong>Process:</strong> The system is rinsed again with warm water (50°C) for 5-8 minutes.</p>"
                },
                {
                    title: "Acid Wash",
                    details: "<p><strong>Purpose:</strong> To remove mineral deposits like milk stone.<br/><strong>Process:</strong> A 0.5-1.0% solution of nitric acid (HNO₃) is circulated at 75°C for 20 minutes.</p>"
                },
                 {
                    title: "Final Rinse",
                    details: "<p><strong>Purpose:</strong> To remove acid residues.<br/><strong>Process:</strong> The system is rinsed with warm water (50°C) for 5-8 minutes.</p>"
                },
                {
                    title: "Disinfection",
                    details: "<p><strong>Purpose:</strong> To kill any remaining microorganisms.<br/><strong>Process:</strong> Thermal disinfection (90-95°C for 10 min) and cooling, or chemical disinfection with a suitable sanitizer.</p>"
                }
            ]
        },
        chemicals: {
            title: "Chemicals Used in CIP",
            intro: "Various types of chemicals are used in the CIP process, each with a specific purpose:",
            types: [
                {
                    title: "Alkaline Detergents",
                    details: "<p><strong>Examples:</strong> Caustic soda (NaOH), sodium carbonate, sodium metasilicate.<br/><strong>Purpose:</strong> They saponify fats and break down proteins. They are very effective cleaning agents.</p>"
                },
                {
                    title: "Acid Detergents",
                    details: "<p><strong>Examples:</strong> Nitric acid (HNO₃), phosphoric acid (H₃PO₄).<br/><strong>Purpose:</strong> They dissolve mineral deposits like milk stone.</p>"
                },
                {
                    title: "Sanitizers",
                    details: "<p><strong>Examples:</strong> Chlorine compounds (sodium hypochlorite), peracetic acid (PAA), hot water (>85°C).<br/><strong>Purpose:</strong> To kill any remaining microorganisms after the final rinse.</p>"
                }
            ]
        },
        cleaning_procedures: {
            title: "Cleaning Procedures for Specific Equipments",
            sections: [
                {
                    title: "Cleaning of milk cans",
                    content: `
                        <p>Raw milk received in aluminium cans at the dairy reception dock may be cleaned and sanitized using both manual and or mechanical washing depending upon number of cans received daily.</p>
                        <h5 class="font-bold mt-2">Manual washing:</h5>
                        <ol class="list-decimal list-inside space-y-1 mt-2">
                           <li>Immediately after empting the cans are first rinsed with tap water and loosely held soil is removed, from inside the can, with brush.</li>
                           <li>Soak the can in previously prepared detergent solution at 50° C. (1 %) sodium hexametaphosphate, trisodium phosphate, sodium carbonate, teepol).</li>
                           <li>Brush the interior of the can thoroughly with hot detergent solution.</li>
                           <li>Rinse the cans with hot water.</li>
                           <li>Steam the cans with the lid and store on draining rack.</li>
                        </ol>
                        <h5 class="font-bold mt-2">Mechanical washing (Rotary or tunnel type washer):</h5>
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                           <li>Charge the detergent tank to have 0.5% alkalinity of the detergent solution.</li>
                           <li>Open the water and steam valves of mechanical washer. And start the motors and pumps.</li>
                           <li>Load the cans and lids into their respective carriageways.</li>
                           <li>Maintain jet pressure at 15 psi and temperature of pre-rinsing (40° C), detergent wash (75° C), hot water wash (85° C).</li>
                           <li>Steaming and hot water blast pressure is maintained at 20 psi and temperatures at 120° and 125° C respectively.</li>
                           <li>Unload the cans and lids at the outlet and store on rack.</li>
                           <li>Check the strength of detergent solution at starting and end of each operation using qualitative or quantitative tests.</li>
                        </ol>
                    `
                },
                {
                    title: "Cleaning of Cream Separators/ Clarifiers",
                    content: `
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                           <li>After the days operation remove the bowl from main machine.</li>
                           <li>Dismantle the bowl and remove the discs.</li>
                           <li>Remove separator slime from the periphery of the bowl.</li>
                           <li>With the help of brush clean each disc with warm detergent solution.</li>
                           <li>Wash all parts with luke-warm water and place for draining.</li>
                        </ol>
                    `
                },
                {
                    title: "Cleaning of plate heat exchangers (PHE)",
                    content: `
                        <h5 class="font-bold mt-2">Daily cleaning:</h5>
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                           <li>Rinse with luke-warm water to remove film.</li>
                           <li>Wash by circulating 1% acid detergent solution at 70° C for 20 minutes.</li>
                           <li>Rinse with warm water.</li>
                           <li>Circulate 1% alkali solution at 70° C for 20 - 30 minutes.</li>
                           <li>Rinse with hot water at 40 - 50° C followed by tap water for 10 minutes and allow drying.</li>
                           <li>Circulate sanitizer solution before use.</li>
                        </ol>
                        <h5 class="font-bold mt-2">Periodic cleaning:</h5>
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                           <li>Open and dismantle the plate heat exchanger carefully.</li>
                           <li>Check rubber gaskets and replace if defective.</li>
                           <li>Check each plate and remove scale by scrubbing with soft brush using detergent solution.</li>
                           <li>Avoid making any scratch or dents on plates.</li>
                           <li>Rinse the plates thoroughly with tap water to remove traces of detergent.</li>
                           <li>Reassemble plates following manufacturers instructions.</li>
                        </ol>
                    `
                },
                {
                    title: "Cleaning milk storage tanks",
                    content: `
                         <ol class="list-decimal list-inside space-y-1 mt-2">
                           <li>After the tank has been emptied, open the drain valve.</li>
                           <li>Rinse the tank with warm water using pressurized spray heads.</li>
                           <li>Close the valve and wash with detergent solution using pressure nozzles.</li>
                           <li>Open the valve and allow detergent solution to drain.</li>
                           <li>Rinse with warm water followed by cold portable water to remove traces of detergent solution.</li>
                           <li>Drain water and allow drying.</li>
                           <li>Sanitize using steam or chlorinated water (150-200 ppm chlorine).</li>
                        </ol>
                    `
                }
            ]
        },
        teepol_detergent: {
            title: "Making and Testing Liquid Detergent",
            htmlContent: `
                <p>Neutral liquid detergents (like Teepol) are widely used in the dairy and food industry for manual cleaning of utensils and small equipment.</p>
                <h4 class="font-bold mt-4">1. How to Make a General Purpose Liquid Detergent (1000 Litre Batch):</h4>
                <p>This is a general formulation. Industrial production can be more complex.</p>
                <div class="overflow-x-auto my-4"><table class="w-full"><thead><tr class="bg-muted"><th class="p-2 text-left">Ingredient</th><th class="p-2 text-left">Quantity (Kg)</th><th class="p-2 text-left">%</th><th class="p-2 text-left">Purpose</th></tr></thead><tbody>
                <tr><td class="p-2 border-b">Water</td><td class="p-2 border-b">820 - 840 Kg</td><td class="p-2 border-b">82-84%</td><td class="p-2 border-b">Main Solvent</td></tr>
                <tr><td class="p-2 border-b">Acid Slurry (LABSA 90%)</td><td class="p-2 border-b">100 Kg</td><td class="p-2 border-b">10%</td><td class="p-2 border-b">Main Cleaning Agent (Anionic Surfactant)</td></tr>
                <tr><td class="p-2 border-b">Caustic Soda (NaOH)</td><td class="p-2 border-b">~15 Kg</td><td class="p-2 border-b">~1.5%</td><td class="p-2 border-b">To neutralize the slurry (to pH 7)</td></tr>
                <tr><td class="p-2 border-b">Urea or Salt</td><td class="p-2 border-b">20 - 40 Kg</td><td class="p-2 border-b">2-4%</td><td class="p-2 border-b">Viscosity Enhancer</td></tr>
                <tr><td class="p-2 border-b">Color & Perfume</td><td class="p-2 border-b">As required</td><td class="p-2 border-b">-</td><td class="p-2 border-b">For aesthetics</td></tr>
                <tr class="bg-muted"><td class="p-2 font-bold">Total</td><td class="p-2 font-bold">1000 Kg</td><td class="p-2 font-bold">100%</td><td class="p-2 font-bold"></td></tr>
                </tbody></table></div>
                <p class="font-semibold">Process:</p>
                <ol class="list-decimal list-inside space-y-1 mt-2">
                    <li>Take water in a large tank. Slowly add Acid Slurry while stirring continuously.</li>
                    <li>Separately, dissolve Caustic Soda in a small amount of water (be careful, it gets hot).</li>
                    <li>Slowly add the caustic solution to the slurry mixture until the pH of the mixture becomes 7 (neutral).</li>
                    <li>Add urea or salt to increase viscosity and mix well. Finally, add color and perfume.</li>
                </ol>

                <h4 class="font-bold mt-6">2. How to Make an Acidic Cleaner (1000 Litre Batch):</h4>
                <p>This is a strong acid-based cleaner used for descaling milk stone and other mineral deposits. <strong>Warning: Strong acids are dangerous, always wear appropriate Personal Protective Equipment (PPE).</strong></p>
                 <div class="overflow-x-auto my-4"><table class="w-full"><thead><tr class="bg-muted"><th class="p-2 text-left">Ingredient</th><th class="p-2 text-left">Quantity (Kg)</th><th class="p-2 text-left">%</th><th class="p-2 text-left">Purpose</th></tr></thead><tbody>
                <tr><td class="p-2 border-b">Water</td><td class="p-2 border-b">880 Kg</td><td class="p-2 border-b">88%</td><td class="p-2 border-b">Solvent</td></tr>
                <tr><td class="p-2 border-b">Hydrochloric Acid (HCl - 33%)</td><td class="p-2 border-b">100 Kg</td><td class="p-2 border-b">10%</td><td class="p-2 border-b">Main Cleaning Agent (Descaling)</td></tr>
                <tr><td class="p-2 border-b">Non-ionic Surfactant</td><td class="p-2 border-b">20 Kg</td><td class="p-2 border-b">2%</td><td class="p-2 border-b">Aids in wetting and soil removal</td></tr>
                </tbody></table></div>
                <p class="font-semibold">Process:</p>
                <ol class="list-decimal list-inside space-y-1 mt-2">
                    <li>Take water in an acid-resistant tank.</li>
                    <li><strong>Always add acid slowly to water, never water to acid.</strong> Add Hydrochloric Acid to the water and mix.</li>
                    <li>Finally, add the non-ionic surfactant and mix well.</li>
                </ol>
                
                <h4 class="font-bold mt-6">How to Check the Strength of Liquid Detergent (Active Matter %):</h4>
                <p>The strength of a detergent is measured by its "Active Matter" (the amount of surfactant). A standard method for checking this is the two-phase titration, which is a complex lab procedure and requires specific chemicals and expertise.</p>
            `
        },
         sip: {
            title: "SIP (Sterilization-In-Place)",
            intro: "Sterilization-in-place (SIP) refers to a continuous commercial scale operation, where essential units can be sterilized. They are very sophisticated in terms of design, installation and operation and needs highly qualified manpower.",
            process: `
                <h5 class="font-bold mt-2">SIP Process:</h5>
                <ol class="list-decimal list-inside space-y-1 mt-2">
                   <li>Steam under pressure is passed through the entire installation.</li>
                   <li>Air is vented out through vents in the piping or on the equipment. The vents are protected by bacterial filters.</li>
                   <li>The vents are closed after a suitable period of steaming to allow the steam pressure to build up to a predetermined level.</li>
                   <li>Pressure is maintained for the length of the required period, after which the steam is released through a condenser.</li>
                   <li>The recorded pressure is enough to and must result in achieving the desired time-temperature combination for destruction of all contaminants.</li>
                </ol>
            `
        },
        advantages: {
            title: "Advantages of CIP",
            list: [
                "Guaranteed and repeatable quality assurance.",
                "Provision of full data logging for quality assurance requirements.",
                "Reduction in cleaning costs by recycling cleaning solutions.",
                "Possibility to clean inaccessible areas on equipment.",
                "Better safety to operators because hazardous cleaning materials are not handled.",
                "Reduction in time between two production runs.",
                "Reduction in labour requirements.",
                "More effective use and control of cleaning materials.",
                "Reduction in water consumption."
            ]
        },
        solution_strength: {
            title: "Testing of CIP Solution Strength",
            intro: "It is important to maintain the proper strength of the detergent solution for efficient cleaning and germicidal effects. Strength is usually measured in % concentration or ppm (for chlorine).",
            alkalinity_test: {
                title: "Determining strength of washing solution (Alkalinity test)",
                content: `
                    <p>The strength of washing solution is generally expressed in terms of NaOH as it is often used as such or in combination with disodium phosphate and sodium metasilicate etc. An alkali equivalent to 1.5% NaOH is generally used for glass bottles and 0.5% for can washing. Repeated usage of washing solutions in automatic machines generally gets diluted. It is important to maintain the proper alkalinity of detergent solution for efficient cleaning and germicidal effects.</p>
                    <h5 class="font-bold mt-4">Requirements:</h5>
                    <p>Conical flask, pipettes, burette, volumetric flask, 2.5 N sulphuric acid, hydrochloric acid (0.1N), phenolphthalein indicator (0.5 %).</p>

                    <h5 class="font-bold mt-4">Qualitative test:</h5>
                    <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Take 10 ml of detergent solution in conical flask.</li>
                        <li>Add 12.5 ml of N/10 HCL and 5 drops of 0.5% phenolphthalein indicator.</li>
                        <li>If the mixture turns red it indicates alkalinity greater than 0.5 % as caustic soda, which is sufficient.</li>
                    </ol>

                    <h5 class="font-bold mt-4">Quantitative test (Direct reading method):</h5>
                     <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Measure 10 ml of sample in 100 ml conical flask.</li>
                        <li>Add 5 drops of phenolphthalein indicator.</li>
                        <li>Titrate with 2.5 N sulphuric acid until solution becomes colourless.</li>
                        <li>Note millilitres of acid used for titration.</li>
                        <li>The acid used is the direct indicator of percent alkali as NaOH.</li>
                    </ol>

                     <h5 class="font-bold mt-4">Laboratory method:</h5>
                     <ol class="list-decimal list-inside space-y-1 mt-2">
                        <li>Take 5 ml of washing solution in 250 ml volumetric flask.</li>
                        <li>Makeup the volume with distilled water and mix well.</li>
                        <li>Transfer 50 ml of this solution in 100 ml conical flask.</li>
                        <li>Add few drops of phenolphthalein indicator.</li>
                        <li>Titrate the contents with 0.1 N sulphuric acid to colourless solution. Record ml of acid used as "A".</li>
                        <li>Add few drops of methyl orange indicator.</li>
                        <li>Continue titration until slight pink colour appears. Note ml of acid used as "B".</li>
                    </ol>
                    <p class="mt-2"><strong>Calculation:</strong><br/>% free caustic = (A - B) × 0.4<br/>% total alkali = (A + B) × 0.4</p>
                `
            },
            calculators: {
                error_title: "Error",
                success_title: "Calculated Successfully",
                error_invalid_titre: "Please enter a valid titre value.",
                naoh: {
                    title: "NaOH (%)",
                    description: "Titrate a 10ml sample of the CIP solution with 0.1 N acid (e.g., HCl) using phenolphthalein indicator.",
                    label: "0.1 N Acid Used (ml)",
                    button: "Calculate NaOH %",
                    result_prefix: "Caustic Soda (NaOH):"
                },
                hno3: {
                    title: "HNO₃ (%)",
                    description: "Titrate a 10ml sample of the CIP solution with 0.1 N base (e.g., NaOH) using phenolphthalein indicator.",
                    label: "0.1 N Base Used (ml)",
                    button: "Calculate HNO₃ %",
                    result_prefix: "Nitric Acid (HNO₃):"
                },
                h3po4: {
                    title: "H₃PO₄ (%)",
                    description: "Titrate a 10ml sample of the CIP solution with 0.1 N base (e.g., NaOH) using phenolphthalein indicator.",
                    label: "0.1 N Base Used (ml)",
                    button: "Calculate H₃PO₄ %",
                    result_prefix: "Phosphoric Acid (H₃PO₄):"
                },
                 chlorine: {
                    title: "Chlorine (ppm)",
                    description: "Titrate a 100ml sample of the CIP solution using the iodometric titration method with 0.01 N Sodium Thiosulphate.",
                    label: "0.01 N Sodium Thiosulphate Used (ml)",
                    button: "Calculate Chlorine (ppm)",
                    result_prefix: "Available Chlorine:"
                }
            }
        }
    }
}

    
