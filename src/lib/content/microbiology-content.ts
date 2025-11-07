
export const microbiologyContent = {
    hi: {
        title: "Doodh Microbiology aur Parikshan",
        description: "Dairy products mein paaye jaane wale main microorganisms aur unke tests ke baare mein jaankari.",
        sections: [
            {
                id: "intro",
                title: "Milk Microbiology ka Introduction",
                content: `
                    <p>Doodh mein desirable chemical structure honi chahiye aur satisfactory hygienic quality honi chahiye. Yeh public health, doodh se bane products ki quality aur processing ke liye doodh ki suitability ke sandarbh mein zaroori hai. Jo components doodh ke liye foreign hain, lekin doodh mein udder mein ya doodh nikalne ke dauran ya baad mein enter karte hain, saath hi doodh mein hone wale koi bhi changes aksar iski quality ke liye harmful hote hain. Ye maamle milk hygiene ke subject hain. Microbial, chemical aur physical hygiene ko distinguish kiya ja sakta hai. Udaharan ke liye, microorganisms jo health ke liye khatra paida kar sakte hain (food infection ya food poisoning) ya jo doodh ko kharab kar dete hain, jaise, kyunki ve storage ke dauran ise khatta kar dete hain. Light-induced off-flavors, fat oxidation, aur fat hydrolysis chemical ya enzymatic changes se utpann hote hain. Iske alawa, jo compounds consumer ke liye potentially harmful ho sakte hain, jaise ki antibiotics, disinfectants, pesticides aur heavy metals, doodh mein enter kar sakte hain.</p>
                    <h4 class="font-bold mt-4">General Aspects</h4>
                    <p>Doodh na keval mammals ke liye balki kai microorganisms ke liye nutrients aur food energy ka ek achha source hai, jo is prakar doodh mein develop ho sakte hain. Yeh mukhya roop se bacteria se related hai, lekin kuch mold aur yeast bhi doodh mein develop ho sakte hain.</p>
                    <h4 class="font-bold mt-4">Growth</h4>
                    <p>Bacteria division dwara multiply karte hain. Har cell division se do naye bacterial cells utpann hote hain. Multiplication ek geometrical progression hai. Bacteria ki growth ke various phases ko distinguish kiya ja sakta hai. Lag phase ke dauran bacteria multiply nahi karte hain, mukhya roop se kyunki unke enzyme system ko adaptation ki avashyakta hoti hai. Exponential phase ke dauran, growth maximum rate par hota hai jab tak ki stationary phase tak nahi pahunch jata. Baad ke phase mein, kuch growth abhi bhi hota hai, saath hi marna bhi hota hai. Growth rate mein kami aamtaur par bacteria dwara swayam banaye gaye inhibitors ki kriya aur/ya available nutrients ki kami ke karan hoti hai. Antatah, stationary phase dying-off phase mein badal jata hai, jiske dauran ginti kam ho jati hai.</p>
                    <p>Temperature ka bacterial growth par bada prabhav padta hai. Temperature kam karne se cell mein lagbhag sabhi processes ki dar mand ho jati hai, jisse growth dhima ho jata hai aur fermentation rate (jaise, acid production) kam ho jati hai.</p>
                    <h4 class="font-bold mt-4">Doodh ek Substrate ke roop mein</h4>
                    <p>Doodh mein nutrients ki itni vistrit range hoti hai, jismein sabhi vitamin shamil hain, ki kai species ke bacteria fermentation aur growth ke liye paryapt raw material paate hain. Doodh mein natural inhibitors hote hain. Inhibitors ka ek mahatvapurna varg immunoglobulin hai, jo vishisht antigen, aksar bacteria ke khilaf antibody hote hain. Doodh ka sabse mahatvapurna gair-specific inhibitor peroxidase–thiocyanate–H2O2 system hai.</p>
                    <p>Doodh ka treatment iski suitability ko bacteria ke liye ek substrate ke roop mein gehra badal sakta hai. Sabse mahatvapurna heat treatment hai, jo bacteria ko marta hai aur beej ko sakriya kar sakta hai lekin doodh ko bhi badalta hai. Inhibitor nishkriya ho jate hain. Natijatan, pasteurization bacteria ke vikas ko kafi had tak uttejit kar sakta hai (jo baad mein doodh mein pravesh kar chuke hain).</p>
                `
            },
            {
                id: "thermophilic_thermoduric",
                title: "Thermophilic aur Thermoduric Bacteria",
                content: `
                    <h4 class="font-bold mt-4">Thermophilic Bacteria</h4>
                    <p>Ye bacteria high temperature (45°C se upar) par panapte hain. Ve dairy processing mein ek chinta ka vishay hain kyunki ve pasteurization se bach sakte hain yadi temperature apyapt roop se niyantrit nahi kiya jata hai aur high temperature wale upkaranon mein badh sakta hai. Udaharanon mein Bacillus aur Clostridium ki prajatiyan shamil hain.</p>
                    <h4 class="font-bold mt-4">Thermoduric Bacteria</h4>
                    <p>Ye jeev pasteurization temperature se bach sakte hain lekin jaroori nahi ki ve uchch taapman par badhen. Ve kharab saaf kiye gaye upkaranon se utpann ho sakte hain aur pasteurized doodh ki shelf life aur quality ko prabhavit kar sakte hain. Udaharanon mein Micrococcus, Microbacterium, aur kuch Bacillus beej shamil hain.</p>
                `
            },
            {
                id: "psychrotrophic",
                title: "Psychrotrophic Bacteria",
                content: `
                    <p>Psychrotrophic bacteria refrigerator ke temperature (7°C se neeche) par badh sakte hain, jisse ve refrigerated kachche aur pasteurized doodh ke liye ek badi chinta ka vishay ban jate hain. Ve garmi-sthir protease aur lipase ka utpadan kar sakte hain jo pasteurization se bach jate hain aur storage ke dauran kadwahat aur basipan jaise off-flavors ka karan bante hain. Pseudomonas genus ek samanya culprit hai.</p>
                `
            },
            {
                id: "lactic_acid_bacteria",
                title: "Lactic Acid Bacteria (LAB)",
                content: `
                    <p>Lactic Acid Bacteria (LAB) fermented dairy products jaise dahi, paneer aur chach ke production ke liye avashyak hain. Ve lactose ko lactic acid mein ferment karte hain, jo in products ke preservation aur vishisht banavat aur swad ke liye responsible hai. Samanya genera mein Lactococcus, Lactobacillus, Streptococcus, aur Leuconostoc shamil hain. Jabki fermented products mein faydemand hai, kachche doodh mein unka aniyantrit vikas souring aur spoilage ka karan banta hai.</p>
                `
            },
            {
                id: "spoilage_pathogenic",
                title: "Spoilage aur Pathogenic Organisms",
                content: `
                    <h4 class="font-bold mt-4">Spoilage Organisms</h4>
                    <p>Ye microorganisms rog ka karan nahi bante hain lekin doodh aur doodh products ke swad, gandh aur banavat ko neecha dikhate hain, jisse ve consumption ke liye anupyukt ho jate hain. Udaharanon mein Pseudomonas, kuch Bacillus prajatiyan aur khamir aur mold shamil hain.</p>
                    <h4 class="font-bold mt-4">Pathogenic Organisms</h4>
                    <p>Ye microorganisms manushyon mein bimari paida karne mein saksham hain. Doodh Salmonella, Listeria monocytogenes, Campylobacter jejuni aur E. coli O157:H7 jaise pathogens ke liye ek vehicle ho sakta hai. Pasteurization in pathogens ko prabhavi dhang se nasht karne ke liye design kiya gaya hai, jisse doodh ka sevan surakshit ho jata hai.</p>
                `
            },
            {
                id: "enterobacteriaceae",
                title: "Enterobacteriaceae",
                content: `
                    <p>Yeh bacteria ka ek bada parivar hai jismein Coliforms, E. coli, aur Salmonella jaise kai genera shamil hain. Ve aksar environment aur janwaron ki aanton mein paaye jaate hain. Dairy products mein unki upasthiti aamtaur par kharab swachhata ya aparyapt processing ka sanket deti hai, aur isliye unhein hygiene indicator ke roop mein upyog kiya jaata hai.</p>
                `
            },
            {
                id: "cronobacter",
                title: "Cronobacter",
                content: `
                    <p>Cronobacter (poorv mein Enterobacter sakazakii) ek pathogenic bacteria hai jo shishuon, vishesh roop se navjaton mein, meningitis aur necrotizing enterocolitis jaise gambhir infections ka karan ban sakta hai. Yeh powdered infant formula (PIF) mein ek vishesh chinta ka vishay hai kyunki yah sukhe environment mein jeevit rah sakta hai. Nirman ke dauran kathor swachhata niyantran ise rokne ke liye mahatvapurna hain.</p>
                `
            },
            {
                id: 'sources_of_contamination',
                title: 'Contamination ke Sources',
                content: `
                    <h4 class="font-bold mt-4">Udder mein maujood microorganisms</h4>
                    <p>Swasth gayon mein, doodh secretory tissue mein sterile hota hai, lekin nipple canal mein bacteria maujood ho sakte hain. Aswasth gayon, vishesh roop se mastitis wali, ke doodh mein pathogenic jeevon sahit high bacterial count ho sakti hai.</p>
                    <h4 class="font-bold mt-4">Doodh duhne ke dauran aur baad mein contamination</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                        <li><strong>Gaay:</strong> Gobar, mitti ya dhool se dushit nipple ki twacha se microorganisms doodh mein enter kar sakte hain.</li>
                        <li><strong>Mitti, Gobar, Dhool:</strong> Ye contaminants hawa ke madhyam se ya seedhe sampark se doodh tak pahunch sakte hain, jisse bacteria, yeast aur mold ke spores aa sakte hain.</li>
                        <li><strong>Chara:</strong> Chare mein badi sankhya mein microorganisms ho sakte hain, jinmein spore-forming bacteria bhi shamil hain jo digestive tract se gujar sakte hain aur gobar ke madhyam se doodh ko dushit kar sakte hain.</li>
                        <li><strong>Doodh duhne ki unit:</strong> Kharab saaf aur non-sanitized doodh duhne ke upkaran contamination ka ek pramukh srot hain.</li>
                        <li><strong>Pani:</strong> Safai aur dhone ke liye istemal kiya jane wala dushit pani psychrotrophic bacteria aur anya pathogens ko pesh kar sakta hai.</li>
                        <li><strong>Doodh wala:</strong> Doodh wala apne hathon ya kapdon se seedhe doodh ko dushit kar sakta hai, khaskar yadi ve kisi infection se pidit hon.</li>
                    </ul>
                `
            },
            {
                id: 'hygienic_measures',
                title: 'Hygienic Measures',
                content: `
                    <h4 class="font-bold mt-4">Consumer ko pathogenic microorganisms se bachana</h4>
                    <p>Kachche doodh mein pathogens dwara contamination ko kabhi bhi rule out nahi kiya ja sakta hai. Isliye liquid consumption ya milk products mein conversion ke liye niyat doodh ko aksar kanoon dwara itni garmi tak garam karne ki avashyakta hoti hai ki aam pathogens mare jayein; iska matlab kam se kam low pasteurization hai. Kachche doodh ka sevan karne ki salah nahi di jati hai.</p>
                    <h4 class="font-bold mt-4">Spoilage organisms ke khilaf upay</h4>
                    <p>Microorganisms dwara kam contamination pahla lakshya hai. Ise prapt karne ke liye, contamination ke sroton ko janna chahiye. Doodh duhne ke upkaranon ki safai aur disinfection avashyak hai.</p>
                    <p>Doodh mein bacteria ke vikas ko dhima karne ka mukhya sadhan cooling hai. Khet par refrigerated doodh tankon ka ek satisfactory sanchalan avashyak hai. Halanki, doodh ko thanda karne se koi bacteria nahi marta hai aur yah unsatisfactory hygiene ka samadhan nahi kar sakta hai.</p>
                `
            }
        ],
        testMethods: {
          title: "Common Microbiological Test Methods",
          intro: "Dairy products ki safety aur quality sunishchit karne ke liye kai standard microbiological tests kiye jaate hain. Yahan kuch pramukh test methods ka overview diya gaya hai:",
          tests: [
            {
              id: 'tpc',
              title: 'Aerobic Mesophilic Plate Count (Total Plate Count)',
              principle: 'Yeh test ek sample mein viable (jeevit) bacteria aur fungi ki kul sankhya ko mapta hai jo oxygen ki upasthiti mein moderate (mesophilic) temperature par badh sakte hain. Ise Standard Plate Count (SPC) ya Total Viable Count (TVC) ke roop mein bhi jana jata hai.',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Sample Taiyar Karna:</strong> 90 ml sterile diluent (jaise, peptone water) ke saath 10 gram ya 10 ml sample milakar 1:10 ka dilution banayein.</li>
                  <li><strong>Serial Dilutions:</strong> Isse aage serial dilutions (1:100, 1:1000, etc.) taiyar karein.</li>
                  <li><strong>Plating:</strong> Har dilution se 1 ml ko do sterile Petri plates mein transfer karein (Pour Plate method).</li>
                  <li><strong>Media:</strong> Platon mein 15-20 ml pighla hua Plate Count Agar (PCA), 45°C tak thanda, dalein. Mix karne ke liye dhire se ghumayein.</li>
                  <li><strong>Incubation:</strong> Platon ko 35-37°C par 24-48 ghante ke liye ulta karke incubate karein.</li>
                  <li><strong>Ginti:</strong> 25 aur 250 colonies ke beech wali plates select karein. Ek colony counter ka upyog karke colonies ki ginti karein.</li>
                </ol>`,
              calculation: '<code>CFU/g (ya ml) = (Colonies ki average sankhya × Dilution factor) / Plate kiye gaye sample ka volume (ml)</code>'
            },
            {
              id: 'coliforms',
              title: 'Coliform, Faecal Coliform aur E. coli ka Pata Lagana',
              principle: 'Coliforms lactose ko ferment karke acid aur gas ka utpadan karte hain. Unhein Violet Red Bile Agar (VRBA) par gina jata hai. E. coli ek faecal coliform hai jiski confirmation specific biochemical tests dwara ki jati hai.',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Sample aur Dilutions:</strong> TPC method ke anusaar serial dilutions taiyar karein.</li>
                  <li><strong>Plating:</strong> Har dilution se 1 ml ko sterile Petri plates mein pipette karein.</li>
                  <li><strong>Media:</strong> 15-20 ml pighla hua VRBA dalein aur mix karein. Jamne ke baad, upar ek aur VRBA ki layer dalein (overlay).</li>
                  <li><strong>Incubation:</strong> Platon ko 35-37°C par 18-24 ghante ke liye incubate karein.</li>
                  <li><strong>Ginti:</strong> Lal-baingani colonies (0.5 mm ya usse adhik vyas) ko coliform ke roop mein ginen.</li>
                  <li><strong>Confirmation (E. coli):</strong> Sandigdh colonies ko Brilliant Green Lactose Bile (BGLB) broth mein inoculate karein aur 44.5°C par incubate karein. Gas production E. coli ki presence ko indicate karta hai. Aage ki confirmation IMViC tests dwara ki jati hai.</li>
                </ol>`,
              calculation: '<code>Coliforms/g (ya ml) = Characteristic colonies ki average sankhya × Dilution factor</code>'
            },
            {
              id: 'yeast_mould',
              title: 'Yeast aur Mould Count',
              principle: 'Yeast aur mould acidic environment mein badh sakte hain, isliye unki ginti ke liye ek acidic medium (jaise Potato Dextrose Agar, PDA) ka upyog kiya jata hai.',
              procedure: `
                 <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Sample aur Dilutions:</strong> TPC method ke anusaar serial dilutions taiyar karein.</li>
                  <li><strong>Plating:</strong> Har dilution se 1 ml ko sterile Petri plates par transfer karein (Spread Plate method behtar hai).</li>
                  <li><strong>Media:</strong> Plates mein pehle se dala hua Potato Dextrose Agar (PDA) hona chahiye, jiska pH ~3.5 (tartaric acid ke saath) par adjust kiya gaya ho taki bacterial growth ko roka ja sake.</li>
                  <li><strong>Incubation:</strong> Platon ko 22-25°C par 5 dinon ke liye incubate karein.</li>
                  <li><strong>Ginti:</strong> Yeast (aamtaur par chamakdar, gol) aur mould (kapas jaisi, phailne wali) ki colonies ko alag-alag ginen.</li>
                </ol>`,
              calculation: '<code>Yeast/Mould Count/g (ya ml) = Colonies ki average sankhya × Dilution factor</code>'
            }
          ]
        }
    },
    en: {
        title: "Milk Microbiology & Testing",
        description: "A guide to the main microorganisms found in dairy products and their testing.",
        sections: [
            {
                id: "intro",
                title: "Introduction to Milk Microbiology",
                content: `
                    <p>Milk must have a desirable chemical composition and must be of satisfactory hygienic quality. This is essential in terms of public health, the quality of the products made from milk, and the suitability of milk for processing. Components that are foreign to milk, but enter the milk in the udder or during or after milking, as well as any changes occurring in the milk are often detrimental to its quality. These matters are the subject of milk hygiene. Microbial, chemical, and physical hygiene may be distinguished. Examples are microorganisms that may produce a health hazard (food infection or food poisoning) or that spoil the milk, e.g., because they turn it sour during storage. Light-induced off-flavors, fat oxidation, and fat hydrolysis result from chemical or enzymic transformations. Furthermore, compounds that are potentially harmful to the consumer, such as antibiotics, disinfectants, pesticides, and heavy metals, can enter the milk.</p>
                    <h4 class="font-bold mt-4">General Aspects</h4>
                    <p>Milk is a good source of nutrients and edible energy, not only for mammals but for numerous microorganisms, which thus can grow in milk. It primarily concerns bacteria, but some molds and yeasts can also grow in milk.</p>
                    <h4 class="font-bold mt-4">Growth</h4>
                    <p>Bacteria multiply by division. Every cell division yields two new bacterial cells. The multiplication is a geometrical progression. The various growth phases that can be distinguished are lag phase, exponential phase, stationary phase, and dying-off phase. During the lag phase the bacteria do not multiply, primarily because their enzyme system needs adaptation. During the exponential phase, the growth is at a maximum rate until the stationary phase is reached. In the latter phase, some growth still occurs, together with dying off. The decrease of the growth rate is usually caused by action of inhibitors formed by the bacteria themselves and/or by a lack of available nutrients. Eventually, the stationary phase turns into the dying-off phase, during which the count decreases.</p>
                    <p>Temperature has a large effect on bacterial growth. Lowering of the temperature retards the rate of nearly all processes in the cell, thereby slowing down growth and decreasing fermentation rate (e.g., acid production).</p>
                    <h4 class="font-bold mt-4">Milk as a Substrate</h4>
                    <p>Milk contains such a wide range of nutrients, including all of the vitamins, that numerous species of bacteria find sufficient raw material for fermentation and growth. Milk contains natural inhibitors. An important class of inhibitors is the immunoglobulins, which are antibodies against specific antigens, often bacteria. The most important nonspecific inhibitor of milk is the peroxidase–thiocyanate–H2O2 system.</p>
                    <p>Treatment of milk may profoundly alter its suitability as a substrate for bacteria. The most important is heat treatment, which kills bacteria and may activate sporulation but also alters the milk. Inhibitors are inactivated. Consequently, pasteurization may considerably stimulate growth of bacteria (which have entered the milk afterward).</p>
                `
            },
            {
                id: "thermophilic_thermoduric",
                title: "Thermophilic and Thermoduric Bacteria",
                content: `
                    <h4 class="font-bold mt-4">Thermophilic Bacteria</h4>
                    <p>These bacteria thrive at high temperatures (above 45°C). They are a concern in dairy processing as they can survive pasteurization if temperatures are not adequately controlled and can grow in high-temperature equipment. Examples include species of Bacillus and Clostridium.</p>
                    <h4 class="font-bold mt-4">Thermoduric Bacteria</h4>
                    <p>These organisms can survive pasteurization temperatures but do not necessarily grow at high temperatures. They can originate from poorly cleaned equipment and can affect the shelf life and quality of pasteurized milk. Examples include Micrococcus, Microbacterium, and some Bacillus spores.</p>
                `
            },
            {
                id: "psychrotrophic",
                title: "Psychrotrophic Bacteria",
                content: `
                    <p>Psychrotrophic bacteria can grow at refrigeration temperatures (below 7°C), making them a major concern for refrigerated raw and pasteurized milk. They can produce heat-stable proteases and lipases that survive pasteurization and cause off-flavors like bitterness and rancidity during storage. The genus Pseudomonas is a common culprit.</p>
                `
            },
            {
                id: "lactic_acid_bacteria",
                title: "Lactic Acid Bacteria (LAB)",
                content: `
                    <p>Lactic Acid Bacteria (LAB) are essential for the production of fermented dairy products like yogurt, cheese, and buttermilk. They ferment lactose into lactic acid, which is responsible for the preservation and characteristic texture and flavor of these products. Common genera include Lactococcus, Lactobacillus, Streptococcus, and Leuconostoc. While beneficial in fermented products, their uncontrolled growth in raw milk leads to souring and spoilage.</p>
                `
            },
            {
                id: "spoilage_pathogenic",
                title: "Spoilage and Pathogenic Organisms",
                content: `
                    <h4 class="font-bold mt-4">Spoilage Organisms</h4>
                    <p>These microorganisms do not cause disease but degrade the flavor, odor, and texture of milk and milk products, making them unsuitable for consumption. Examples include Pseudomonas, certain Bacillus species, and yeasts and molds.</p>
                    <h4 class="font-bold mt-4">Pathogenic Organisms</h4>
                    <p>These are microorganisms capable of causing illness in humans. Milk can be a vehicle for pathogens like Salmonella, Listeria monocytogenes, Campylobacter jejuni, and E. coli O157:H7. Pasteurization is designed to effectively destroy these pathogens, making milk safe to consume.</p>
                `
            },
            {
                id: "enterobacteriaceae",
                title: "Enterobacteriaceae",
                content: `
                    <p>This is a large family of bacteria that includes many genera such as Coliforms, E. coli, and Salmonella. They are often found in the environment and the intestinal tracts of animals. Their presence in dairy products generally indicates poor sanitation or inadequate processing, and they are therefore used as hygiene indicators.</p>
                `
            },
            {
                id: "cronobacter",
                title: "Cronobacter",
                content: `
                    <p>Cronobacter (formerly Enterobacter sakazakii) is a pathogenic bacterium that can cause severe infections in infants, especially neonates, such as meningitis and necrotizing enterocolitis. It is a particular concern in powdered infant formula (PIF) as it can survive in dry environments. Strict hygiene controls during manufacturing are critical to prevent it.</p>
                `
            },
            {
                id: 'sources_of_contamination',
                title: 'Sources of Contamination',
                content: `
                    <h4 class="font-bold mt-4">Microorganisms Present in the Udder</h4>
                    <p>In healthy cows, the milk in the secretory tissue is sterile, but bacteria can be present in the teat canal. Unhealthy cows, especially those with mastitis, can have high bacterial counts in their milk, including pathogenic organisms.</p>
                    <h4 class="font-bold mt-4">Contamination During and After Milking</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
                        <li><strong>The Cow:</strong> Microorganisms from the skin of the teats, contaminated by dung, soil, or dust, can enter the milk.</li>
                        <li><strong>Soil, Dung, Dust:</strong> These contaminants can reach the milk through the air or by direct contact, introducing spores of bacteria, yeasts, and molds.</li>
                        <li><strong>The Feed:</strong> Feed can contain large numbers of microorganisms, including spore-forming bacteria that can survive passage through the digestive tract and contaminate milk via dung.</li>
                        <li><strong>Milking Unit:</strong> Poorly cleaned and disinfected milking equipment is a major source of contamination.</li>
                        <li><strong>Water:</strong> Contaminated water used for cleaning and rinsing can introduce psychrotrophic bacteria and other pathogens.</li>
                        <li><strong>The Milker:</strong> The milker can directly contaminate the milk from his hands or clothes, especially if suffering from an infection.</li>
                    </ul>
                `
            },
            {
                id: 'hygienic_measures',
                title: 'Hygienic Measures',
                content: `
                    <h4 class="font-bold mt-4">Protection of the Consumer Against Pathogenic Microorganisms</h4>
                    <p>Contamination of raw milk by pathogens can never be ruled out. Milk intended for liquid consumption or for transformation into milk products is therefore often required by law to be heated to such an extent that the common pathogens are killed; this implies at least low pasteurization. The drinking of raw milk is highly inadvisable.</p>
                    <h4 class="font-bold mt-4">Measures Against Spoilage Organisms</h4>
                    <p>A low contamination by microorganisms is the first aim. To achieve this, the sources of contamination should be known. Cleaning and disinfection of the milking equipment is essential.</p>
                    <p>Cooling is the main means of slowing down the growth of bacteria in milk. A satisfactory operation of refrigerated milk tanks on the farm is essential. However, cooling of milk kills no bacteria and it cannot remedy unsatisfactory hygiene.</p>
                `
            }
        ],
        testMethods: {
          title: "Common Microbiological Test Methods",
          intro: "Several standard microbiological tests are performed to ensure the safety and quality of dairy products. Here is an overview of some key test methods:",
          tests: [
            {
              id: 'tpc',
              title: 'Aerobic Mesophilic Plate Count (Total Plate Count)',
              principle: 'This test measures the total number of viable (living) bacteria and fungi in a sample that can grow in the presence of oxygen at moderate (mesophilic) temperatures. It is also known as Standard Plate Count (SPC) or Total Viable Count (TVC).',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Sample Preparation:</strong> Create a 1:10 dilution by mixing 10g or 10ml of the sample with 90ml of sterile diluent (e.g., peptone water).</li>
                  <li><strong>Serial Dilutions:</strong> Prepare further serial dilutions from this (1:100, 1:1000, etc.).</li>
                  <li><strong>Plating:</strong> Transfer 1ml of each dilution into two sterile Petri plates (Pour Plate Method).</li>
                  <li><strong>Media:</strong> Pour 15-20ml of melted Plate Count Agar (PCA), cooled to 45°C, into the plates. Gently swirl to mix.</li>
                  <li><strong>Incubation:</strong> Incubate the plates inverted at 35-37°C for 24-48 hours.</li>
                  <li><strong>Counting:</strong> Select plates with between 25 and 250 colonies. Count the colonies using a colony counter.</li>
                </ol>`,
              calculation: '<code>CFU/g (or ml) = (Average no. of colonies × Dilution factor) / Volume of sample plated (ml)</code>'
            },
            {
              id: 'coliforms',
              title: 'Detection of Coliforms, Faecal Coliforms & E.coli',
              principle: 'Coliforms ferment lactose to produce acid and gas. They are enumerated on Violet Red Bile Agar (VRBA). E. coli is a faecal coliform confirmed by specific biochemical tests.',
              procedure: `
                <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Sample & Dilutions:</strong> Prepare serial dilutions as in the TPC method.</li>
                  <li><strong>Plating:</strong> Pipette 1ml from each dilution into sterile Petri plates.</li>
                  <li><strong>Media:</strong> Pour 15-20ml of melted VRBA and mix. After solidification, add another layer of VRBA on top (overlay).</li>
                  <li><strong>Incubation:</strong> Incubate the plates at 35-37°C for 18-24 hours.</li>
                  <li><strong>Counting:</strong> Count red-purple colonies (0.5mm or more in diameter) as coliforms.</li>
                  <li><strong>Confirmation (E.coli):</strong> Inoculate suspected colonies into Brilliant Green Lactose Bile (BGLB) broth and incubate at 44.5°C. Gas production indicates the presence of E. coli. Further confirmation is done by IMViC tests.</li>
                </ol>`,
              calculation: '<code>Coliforms/g (or ml) = Average no. of characteristic colonies × Dilution factor</code>'
            },
            {
              id: 'yeast_mould',
              title: 'Yeast and Mould Count',
              principle: 'Yeasts and moulds can grow in acidic environments, so an acidic medium (like Potato Dextrose Agar, PDA) is used for their enumeration.',
              procedure: `
                 <ol class='list-decimal list-inside space-y-2 mt-2'>
                  <li><strong>Sample & Dilutions:</strong> Prepare serial dilutions as in the TPC method.</li>
                  <li><strong>Plating:</strong> Transfer 1ml of each dilution to sterile Petri plates (Spread Plate method is better).</li>
                  <li><strong>Media:</strong> Plates should contain pre-poured Potato Dextrose Agar (PDA), with pH adjusted to ~3.5 (with tartaric acid) to inhibit bacterial growth.</li>
                  <li><strong>Incubation:</strong> Incubate plates at 22-25°C for 5 days.</li>
                  <li><strong>Counting:</strong> Count colonies of yeasts (typically shiny, round) and moulds (cotton-like, spreading) separately.</li>
                </ol>`,
              calculation: '<code>Yeast/Mould Count/g (or ml) = Average no. of colonies × Dilution factor</code>'
            }
          ]
        }
    }
}

    
