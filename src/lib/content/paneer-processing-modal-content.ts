
export const paneerProcessingContent = {
    hi: {
        mainTitle: "Industrial Paneer Production",
        description: "Process, Yield aur Quality Control 🧀",
        backToTopics: "Topics par wapas jayein",
        tabs: {
            process: "Process",
            quality_control: "Quality Control",
            coagulants: "Coagulants",
            yield_texture: "Yield aur Texture"
        },
        topics: {
            process: {
                title: "Step-by-Step Production Process",
                description: "Neeche di gayi table industrial scale par paneer manufacturing ke liye standardized procedure outline karti hai.",
                table: {
                    headers: ["Step No.", "Process Stage", "Key Parameters aur Procedure"],
                    rows: [
                        { step: 1, stage: "Milk Standardization", params: "Milk ko specific Fat-to-SNF ratio mein standardize kiya jata hai, typically fat content ko <strong>5.8-6.0%</strong> par adjust karke taki consistent product quality ensure ho sake." },
                        { step: 2, stage: "Heating", params: "Standardized milk ko <strong>85-90°C</strong> tak heat kiya jata hai aur 5-10 minutes ke liye hold kiya jata hai. Ye step pathogenic bacteria ko kill karta hai aur whey proteins denature karta hai, jo final yield increase karta hai." },
                        { step: 3, stage: "Coagulation", params: "Milk ko <strong>70-75°C</strong> ke coagulation temperature tak cool kiya jata hai. Ek coagulant (typically 1-2% hot citric acid solution ya sour whey) ko slowly add kiya jata hai jabki gently stir karte hain jab tak clear whey separate na ho jaye." },
                        { step: 4, stage: "Whey Drain karna", params: "Coagulated mass (curd) ko 5-10 minutes ke liye settle hone diya jata hai. Uske baad, liquid whey ko carefully drain kar diya jata hai, jisse solid paneer curd peeche reh jata hai." },
                        { step: 5, stage: "Hooping aur Pressing", params: "Hot curd ko muslin cloth se lined stainless steel hoops (molds) mein transfer kiya jata hai. Phir curd ko mechanical ya pneumatic presses use karke <strong>2-3 kg/cm² pressure par 15-20 minutes</strong> ke liye press kiya jata hai." },
                        { step: 6, stage: "Chilling", params: "Pressing ke baad, paneer ke solid block ko hoops se remove kar diya jata hai aur 2-3 hours ke liye chilled water (<strong>4-6°C</strong>) mein immerse kar diya jata hai. Ye texture firm karta hai aur shelf life improve karta hai." },
                        { step: 7, stage: "Cutting aur Packaging", params: "Chilled paneer block ko desired sizes aur shapes mein cut kiya jata hai. Phir ise vacuum-pack ya brine ke saath pouches mein pack kiya jata hai taki freshness maintain rahe aur microbial growth prevent ho. Final product ko refrigeration temperatures (<5°C) par store kiya jata hai." },
                    ]
                }
            },
            quality_control: {
                title: "Raw Material aur Quality Control",
                description: "Paneer ki quality directly incoming milk ki quality par depend karti hai. Dairy industry setting mein, milk ko processing ke liye accept karne se pehle critical parameters ke liye test kiya jata hai.",
                table: {
                    headers: ["Parameter", "Ideal Range (Buffalo Milk)", "Ideal Range (Cow Milk)", "Importance"],
                    rows: [
                        { param: "Fat Content", buffalo: "5.5% - 6.5%", cow: "3.5% - 4.5%", importance: "Paneer ki final yield aur texture ko directly impact karta hai." },
                        { param: "SNF (Solids-Not-Fat)", buffalo: "~9.0%", cow: "~8.5%", importance: "Structure aur firmness mein contribute karta hai." },
                        { param: "Acidity (% Lactic Acid)", buffalo: "0.14 - 0.16%", cow: "0.13 - 0.14%", importance: "Fresh milk required hai. High acidity poor texture aur low yield ki taraf le jati hai." },
                    ]
                }
            },
            coagulants: {
                title: "Coagulants: Types aur Usage",
                description: "Coagulant ka choice paneer ki texture, flavor aur yield ko affect karta hai.",
                types: [
                    { name: "Citric Acid", details: "<strong>Preparation:</strong> 1-2% solution (10-20g citric acid powder ko 1 litre hot water mein 70°C par).<br/><strong>Usage:</strong> Sabse common industrial coagulant. Clean, acidic flavor aur consistent results provide karta hai. Hot milk (70-75°C) mein slowly add karein gentle stirring ke saath jab tak clear whey separate na ho jaye. Over-addition paneer ko sour bana sakta hai." },
                    { name: "Acetic Acid (Vinegar)", details: "<strong>Preparation:</strong> 1-2% solution (10-20ml food-grade white vinegar ko 1 litre hot water mein).<br/><strong>Usage:</strong> Widely available aur effective coagulant. Ye kabhi-kabhi slight pungent ya vinegar-like flavor de sakta hai, isliye citric acid ko more neutral taste profile ke liye prefer kiya jata hai. Citric acid solution ki tarah hi use karein." },
                    { name: "Sour Whey", details: "<strong>Preparation:</strong> Previous batch se whey use karein, jise natural acidity (0.8-0.9% lactic acid) develop hone di gayi hai.<br/><strong>Usage:</strong> Traditional aur economical method. Aksar softer, more traditional-flavored paneer result deta hai. Citric acid se less consistent ho sakta hai." },
                    { name: "Calcium Chloride", details: "<strong>Preparation:</strong> Aksar acid coagulant se *pehle* milk mein add kiya jata hai.<br/><strong>Usage:</strong> Primary coagulant nahi hai, lekin milk (especially cow milk ya pasteurized milk) mein coagulation properties aur curd ki firmness improve karne ke liye add kiya jata hai, jo moisture retention improve karke yield slightly increase kar sakta hai." }
                ]
            },
            yield_texture: {
                title: "Yield aur Texture",
                yield: {
                    title: "Paneer Yield Kaise Increase Karein",
                    description: "Yield maximize karna profitability ki key hai. Yahan sabse effective methods hain:",
                    methods: [
                        "<strong>Optimal Heating:</strong> Milk ko 85-90°C tak heat karne se whey proteins (jaise β-lactoglobulin aur α-lactalbumin) denature ho jate hain. Ye proteins phir coagulation ke dauran casein curd mein trapped ho jate hain, jisse total solid recovery increase hoti hai aur thus yield badhti hai.",
                        "<strong>Correct Coagulation pH:</strong> Paneer coagulation ke liye ideal pH lagbhag 5.2 hai. Coagulant ko correctly add karke is pH tak pahunchne se maximum protein precipitation ensure hoti hai bina paneer ko too acidic banaye, jo isse moisture aur yield lose karane ki wajah banti hai.",
                        "<strong>Gentle Stirring:</strong> Coagulation ke dauran too vigorously stir karne se curd fine particles mein break ho jata hai, jo phir whey mein lost ho jate hain. Gentle, slow stirring firm, consolidated curd mass form karne mein help karti hai.",
                        "<strong>Controlled Pressing:</strong> Correct pressure (2-3 kg/cm²) ko right amount of time (15-20 mins) ke liye apply karna crucial hai. Over-pressing se too much moisture aur fat squeeze out ho jata hai, yield reduce hoti hai aur hard paneer banta hai. Under-pressing se too much moisture wala product result hota hai, jiska shorter shelf life hota hai."
                    ]
                },
                safeIncreasers: {
                    title: "Consumption ke liye Safe Yield Increasers",
                    description: "Kuch additives ka use paneer ki yield safely increase karne aur texture improve karne ke liye kiya ja sakta hai.",
                    wpc_info: "<strong>Whey Protein Concentrate (WPC):</strong> Heating se pehle milk mein WPC powder add karna protein content boost karne ki ek modern technique hai. Ye directly coagulation ke liye available solids ki amount increase karta hai, jisse higher yield aur softer, more nutritious paneer banta hai. Ye industry mein ek common aur safe practice hai."
                },
                texture: {
                    title: "Paneer Texture Explained: Hard, Soft aur Fluffy",
                    description: "Paneer ki final texture production process ke throughout kai factors ka result hai.",
                    table: {
                        headers: ["Texture", "Primary Causes", "Result"],
                        rows: [
                            { texture: "Hard / Rubbery", colorClass: "text-red-600", causes: "Milk mein low fat content, over-pressing, high coagulation temperature, excessive cooking.", result: "Chewy, dry, aur flavors ko well absorb nahi karta. Low moisture content." },
                            { texture: "Soft / Spongy (Ideal)", colorClass: "text-green-600", causes: "Standardized milk (6% fat), correct coagulation temp (70-75°C), controlled pressing, proper chilling.", result: "Apna shape hold karta hai, smooth bite hota hai, aur gravies absorb karta hai. Ye high-quality paneer ke liye desired texture hai." },
                            { texture: "Fluffy / Crumbly", colorClass: "text-yellow-600", causes: "Milk mein high acidity, too low temperature par coagulation, insufficient pressing.", result: "Easily break apart hota hai, cubes mein cut karna difficult hota hai, overly acidic taste ho sakta hai." }
                        ]
                    }
                }
            }
        }
    },
    en: {
        mainTitle: "Industrial Paneer Production",
        description: "Process, Yield & Quality Control 🧀",
        backToTopics: "Back to Topics",
        tabs: {
            process: "Process",
            quality_control: "Quality Control",
            coagulants: "Coagulants",
            yield_texture: "Yield & Texture"
        },
        topics: {
            process: {
                title: "Step-by-Step Production Process",
                description: "The following table outlines the standardized procedure for manufacturing paneer at an industrial scale.",
                table: {
                    headers: ["Step No.", "Process Stage", "Key Parameters & Procedure"],
                    rows: [
                        { step: 1, stage: "Milk Standardization", params: "Milk is standardized to a specific Fat-to-SNF ratio, typically by adjusting the fat content to <strong>5.8-6.0%</strong> for consistent product quality." },
                        { step: 2, stage: "Heating", params: "The standardized milk is heated to <strong>85-90°C</strong> and held for 5-10 minutes. This step kills pathogenic bacteria and denatures whey proteins, which increases the final yield." },
                        { step: 3, stage: "Coagulation", params: "The milk is cooled to the coagulation temperature of <strong>70-75°C</strong>. A coagulant (typically 1-2% hot citric acid solution or sour whey) is slowly added while gently stirring until clear whey separates." },
                        { step: 4, stage: "Draining the Whey", params: "The coagulated mass (curd) is allowed to settle for 5-10 minutes. Afterwards, the liquid whey is carefully drained off, leaving the solid paneer curd behind." },
                        { step: 5, stage: "Hooping & Pressing", params: "The hot curd is transferred into stainless steel hoops (molds) lined with muslin cloth. The curd is then pressed using mechanical or pneumatic presses at a pressure of <strong>2-3 kg/cm² for 15-20 minutes</strong>." },
                        { step: 6, stage: "Chilling", params: "After pressing, the solid block of paneer is removed from the hoops and immersed in chilled water (<strong>4-6°C</strong>) for 2-3 hours. This firms up the texture and improves shelf life." },
                        { step: 7, stage: "Cutting & Packaging", params: "The chilled paneer block is cut into desired sizes and shapes. It is then vacuum-packed or packed in pouches with brine to maintain freshness and prevent microbial growth. The final product is stored at refrigeration temperatures (< 5°C)." },
                    ]
                }
            },
            quality_control: {
                title: "Raw Material & Quality Control",
                description: "The quality of paneer is directly dependent on the quality of the incoming milk. In a dairy industry setting, milk is first tested for critical parameters before being accepted for processing.",
                table: {
                    headers: ["Parameter", "Ideal Range (Buffalo Milk)", "Ideal Range (Cow Milk)", "Importance"],
                    rows: [
                        { param: "Fat Content", buffalo: "5.5% - 6.5%", cow: "3.5% - 4.5%", importance: "Directly impacts the final yield and texture of the paneer." },
                        { param: "SNF (Solids-Not-Fat)", buffalo: "~9.0%", cow: "~8.5%", importance: "Contributes to the structure and firmness." },
                        { param: "Acidity (% Lactic Acid)", buffalo: "0.14 - 0.16%", cow: "0.13 - 0.14%", importance: "Fresh milk is required. High acidity leads to poor texture and low yield." },
                    ]
                }
            },
            coagulants: {
                title: "Coagulants: Types and Usage",
                description: "The choice of coagulant affects the texture, flavor, and yield of the paneer.",
                types: [
                    { name: "Citric Acid", details: "<strong>Preparation:</strong> 1-2% solution (10-20g of citric acid powder in 1 litre of hot water at 70°C).<br/><strong>Usage:</strong> Most common industrial coagulant. Provides a clean, acidic flavor and consistent results. Add slowly to hot milk (70-75°C) with gentle stirring until clear whey separates. Over-addition can make paneer sour." },
                    { name: "Acetic Acid (Vinegar)", details: "<strong>Preparation:</strong> 1-2% solution (10-20ml of food-grade white vinegar in 1 litre of hot water).<br/><strong>Usage:</strong> A widely available and effective coagulant. It can sometimes impart a slight pungent or vinegar-like flavor, which is why citric acid is often preferred for a more neutral taste profile. Use in the same manner as citric acid solution." },
                    { name: "Sour Whey", details: "<strong>Preparation:</strong> Use whey from a previous batch, allowed to develop natural acidity (0.8-0.9% lactic acid).<br/><strong>Usage:</strong> A traditional and economical method. Often results in a softer, more traditional-flavored paneer. Can be less consistent than citric acid." },
                    { name: "Calcium Chloride", details: "<strong>Preparation:</strong> Often added to milk *before* the acid coagulant.<br/><strong>Usage:</strong> Not a primary coagulant, but added to milk (especially cow milk or pasteurized milk) to improve the coagulation properties and firmness of the curd, which can slightly increase yield by improving moisture retention." }
                ]
            },
            yield_texture: {
                title: "Yield & Texture",
                yield: {
                    title: "How to Increase Paneer Yield",
                    description: "Maximizing yield is key to profitability. Here are the most effective methods:",
                    methods: [
                        "<strong>Optimal Heating:</strong> Heating milk to 85-90°C denatures whey proteins (like β-lactoglobulin and α-lactalbumin). These proteins then get trapped in the casein curd during coagulation, increasing the total solid recovery and thus the yield.",
                        "<strong>Correct Coagulation pH:</strong> The ideal pH for paneer coagulation is around 5.2. Adding the coagulant correctly to reach this pH ensures maximum protein precipitation without making the paneer too acidic, which would cause it to lose moisture and yield.",
                        "<strong>Gentle Stirring:</strong> Stirring too vigorously during coagulation breaks the curd into fine particles, which are then lost in the whey. Gentle, slow stirring helps form a firm, consolidated curd mass.",
                        "<strong>Controlled Pressing:</strong> Applying the correct pressure (2-3 kg/cm²) for the right amount of time (15-20 mins) is crucial. Over-pressing squeezes out too much moisture and fat, reducing yield and creating a hard paneer. Under-pressing results in a product with too much moisture, which has a shorter shelf life."
                    ]
                },
                safeIncreasers: {
                    title: "Safe Yield Increasers for Consumption",
                    description: "Certain additives can be used to safely increase the yield and improve the texture of paneer.",
                    wpc_info: "<strong>Whey Protein Concentrate (WPC):</strong> Adding WPC powder to milk before heating is a modern technique to boost the protein content. This directly increases the amount of solids available for coagulation, leading to a higher yield and a softer, more nutritious paneer. This is a common and safe practice in the industry."
                },
                texture: {
                    title: "Paneer Texture Explained: Hard, Soft, and Fluffy",
                    description: "The final texture of paneer is a result of several factors throughout the production process.",
                    table: {
                        headers: ["Texture", "Primary Causes", "Result"],
                        rows: [
                            { texture: "Hard / Rubbery", colorClass: "text-red-600", causes: "Low fat content in milk, over-pressing, high coagulation temperature, excessive cooking.", result: "Chewy, dry, and does not absorb flavors well. Low moisture content." },
                            { texture: "Soft / Spongy (Ideal)", colorClass: "text-green-600", causes: "Standardized milk (6% fat), correct coagulation temp (70-75°C), controlled pressing, proper chilling.", result: "Holds its shape, has a smooth bite, and absorbs gravies. This is the desired texture for high-quality paneer." },
                            { texture: "Fluffy / Crumbly", colorClass: "text-yellow-600", causes: "High acidity in milk, coagulation at too low a temperature, insufficient pressing.", result: "Breaks apart easily, difficult to cut into cubes, may taste overly acidic." }
                        ]
                    }
                }
            }
        }
    }
};
