

export const waterTestingContent = {
    hi: {
        title: "जल परीक्षण गाइड",
        description: "जल की गुणवत्ता की जांच के लिए सामान्य मापदंडों, उनकी सरलीकृत प्रक्रियाओं और गणना विधियों के लिए एक गाइड।",
        backToTopics: "विषयों पर वापस जाएं",
        important_note: {
            title: "महत्वपूर्ण नोट:",
            text: "हमेशा सुरक्षा नियमों का पालन करें और लैब में काम करते समय उचित सुरक्षात्मक उपकरण (PPE) पहनें। सटीक परिणामों के लिए, प्रमाणित प्रयोगशालाओं और मानक विधियों का पालन करना बेहतर है।"
        },
        tests: [
            {
                id: 'alkalinity_p',
                title: 'Alkalinity, Phenolphthalein (pH 8.3)',
                intro: 'यह परीक्षण पानी में हाइड्रॉक्साइड और कार्बोनेट क्षारीयता को मापता है।',
                apparatus: '<p>Standard laboratory glassware such as burettes, volumetric flasks, conical flasks and beakers.</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard sodium carbonate, approximately 0.05 N:</strong> 3 से 5 ग्राम सोडियम कार्बोनेट (Na₂CO₃) को 250°C पर 4 घंटे सुखाएं और डेसिकेटर में ठंडा करें। 2.5±0.2 ग्राम सटीक रूप से तौलें, आसुत जल में घोलें और 1 लीटर तक करें।</li>
                        <li><strong>Standard H₂SO₄, approximately 0.1N:</strong> 2.8 मिलीलीटर सांद्र सल्फ्यूरिक एसिड को 1 लीटर तक पतला करें। इसे 40.00 मिलीलीटर 0.05N Na₂CO₃ के विरुद्ध मानकीकृत करें।</li>
                        <li><strong>Standard sulphuric acid, 0.02 N:</strong> उपरोक्त 0.1N घोल से गणना करके तैयार करें।</li>
                        <li><strong>Phenolphthalein indicator solution, alcoholic, pH 8.3:</strong> 5 ग्राम फेनोल्फथेलिन को 500 मिलीलीटर 95% एथिल अल्कोहल में घोलें। 500 मिलीलीटर आसुत जल डालें।</li>
                    </ul>
                `,
                procedure: [
                    'एक शंक्वाकार फ्लास्क में 25 से 50 मिलीलीटर नमूना लें।',
                    '2 से 3 बूंदें फेनोल्फथेलिन संकेतक डालें।',
                    'यदि यह गुलाबी हो जाता है (pH > 8.3), तो रंग गायब होने तक 0.02 N H₂SO₄ से अनुमापन करें।',
                    'उपयोग किए गए अनुमापक का आयतन नोट करें।',
                ],
                calculation: `Phenolphthalein Alkalinity (mg/L CaCO₃ के रूप में) = (A &times; अम्ल की नॉर्मलता &times; 50000) / नमूने का आयतन (एमएल)<br/><p class="text-xs mt-2">जहाँ A = फेनोल्फथेलिन समापन बिंदु तक उपयोग किया गया अनुमापक का एमएल।</p>`
            },
            {
                id: 'alkalinity_t',
                title: 'Alkalinity, Total (pH 4.5)',
                intro: 'यह परीक्षण पानी की कुल क्षारीयता को मापता है।',
                 apparatus: '<p>Standard laboratory glassware such as burettes, volumetric flasks and beakers.</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                     <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard sulphuric acid, 0.02 N:</strong> जैसा कि फेनोल्फथेलिन क्षारीयता के लिए तैयार किया गया है।</li>
                        <li><strong>Bromcresol green indicator, pH 4.5:</strong> 100 मिलीग्राम ब्रोमोक्रेसोल ग्रीन सोडियम नमक को 100 मिलीलीटर आसुत जल में घोलें।</li>
                    </ul>
                `,
                procedure: [
                    '2 से 3 बूंदें ब्रोमोक्रेसोल ग्रीन संकेतक डालें।',
                    'रंग में परिवर्तन (नीले से पीला, pH 4.9 से 4.3) होने तक अनुमापन करें।',
                    'उपयोग किए गए अनुमापक का कुल आयतन नोट करें।',
                ],
                calculation: `Total Alkalinity (mg/L CaCO₃ के रूप में) = (B &times; अम्ल की नॉर्मलता &times; 50000) / नमूने का आयतन (एमएल)<br/><p class="text-xs mt-2">जहाँ B = ब्रोमोक्रेसोल ग्रीन समापन बिंदु तक उपयोग किया गया अनुमापक का कुल एमएल।</p>`
            },
            {
                id: 'aluminum',
                title: 'Aluminum (एल्यूमीनियम)',
                intro: 'Eriochrome Cyanine R विधि का उपयोग करके एल्यूमीनियम का स्पेक्ट्रोफोटोमेट्रिक निर्धारण।',
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Spectrophotometer:</strong> 535 nm पर उपयोग के लिए, 1 सेमी या उससे अधिक के प्रकाश पथ के साथ।</li>
                        <li><strong>Glassware:</strong> सभी कांच के बर्तनों को 1+1 गर्म HCl से उपचारित करें और एल्यूमीनियम मुक्त आसुत जल से धोएं।</li>
                    </ul>
                `,
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock aluminum solution:</strong> 8.791 ग्राम एल्यूमीनियम पोटेशियम सल्फेट, AlK(SO₄)₂·12H₂O को पानी में घोलें और 1 लीटर तक करें।</li>
                        <li><strong>Standard aluminum solution:</strong> 10 मिलीलीटर स्टॉक घोल को 1000 मिलीलीटर तक पतला करें; 1.00 मिलीलीटर = 5.00 µg Al। दैनिक तैयार करें।</li>
                        <li><strong>Sulphuric acid, H₂SO₄, 0.02 N and 6 N.</strong></li>
                        <li><strong>Ascorbic acid solution:</strong> 0.1 ग्राम एस्कॉर्बिक एसिड को पानी में घोलें और 100 मिलीलीटर तक करें। दैनिक तैयार करें।</li>
                        <li><strong>Buffer reagent:</strong> 136 ग्राम सोडियम एसीटेट, NaC₂H₃O₂·3H₂O को पानी में घोलें, 40 मिलीलीटर 1N एसिटिक एसिड डालें और 1 लीटर तक करें।</li>
                        <li><strong>Working dye solution (Eriochrome Cyanine R):</strong> 10.0 मिलीलीटर स्टॉक डाई घोल को 100 मिलीलीटर तक पतला करें।</li>
                    </ul>
                `,
                procedure: [
                    '0 से 7 µg एल्यूमीनियम वाले मानकों की एक श्रृंखला तैयार करें।',
                    'प्रत्येक मानक और नमूने में 1 एमएल 0.02N H₂SO₄, 1 एमएल एस्कॉर्बिक एसिड, 10 एमएल बफर, और 5 एमएल वर्किंग डाई अभिकर्मक डालें।',
                    'कुल आयतन 50 एमएल करें और 5-15 मिनट के भीतर 535 nm पर अवशोषण पढ़ें।',
                    'कैलिब्रेशन वक्र से नमूना सांद्रता निर्धारित करें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से एल्यूमीनियम सांद्रता (mg/L) पढ़ें।'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'यह परीक्षण 27°C पर 3 दिनों के लिए बोतल ऊष्मायन विधि पर आधारित है।',
                apparatus: `<ul class="list-disc list-outside pl-5 space-y-1">
                    <li>300 mL की BOD बोतलें, संकीर्ण मुंह, भड़कीला होंठ, टेंपर्ड और नुकीले ग्राउंड ग्लास स्टॉपर्स के साथ।</li>
                    <li>27 ± 1 °C पर थर्मोस्टेटिक रूप से नियंत्रित एयर इनक्यूबेटर या वॉटर बाथ। प्रकाश संश्लेषण ऑक्सीजन उत्पादन से बचने के लिए प्रकाश प्रवेश को रोका जाना चाहिए।</li>
                    <li>सहायक उपकरण: प्लास्टिक ट्यूब, स्क्रू-पिन और एक 5-10 L पानी का कंटेनर।</li>
                    </ul>`,
                reagents: `<h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Phosphate buffer solution:</strong> 8.5 g KH₂PO₄, 21.75 g K₂HPO₄, 33.4 g Na₂HPO₄·7H₂O और 1.7 g NH₄Cl को 1 लीटर आसुत जल में घोलें।</li>
                        <li><strong>Magnesium sulphate solution:</strong> 22.5 g MgSO₄·7H₂O को 1 लीटर आसुत जल में घोलें।</li>
                        <li><strong>Calcium chloride solution:</strong> 27.5 g CaCl₂ को 1 लीटर आसुत जल में घोलें।</li>
                        <li><strong>Ferric chloride solution:</strong> 0.25 g FeCl₃·6H₂O को 1 लीटर आसुत जल में घोलें।</li>
                        <li><strong>Acid and alkali solution:</strong> 1N NaOH और 1N H₂SO₄। नमूनों को उदासीन करने के लिए उपयोग करें।</li>
                        <li><strong>Glucose-glutamic acid solution (ताजा तैयार करें):</strong> 150 मिलीग्राम सूखे अभिकर्मक ग्रेड ग्लूकोज और 150 मिलीग्राम सूखे अभिकर्मक ग्रेड ग्लूटामिक एसिड को 1 लीटर आसुत जल में घोलें।</li>
                        <li><strong>Sample dilution water:</strong> 1 लीटर आसुत जल में 1 mL प्रत्येक फॉस्फेट बफर, MgSO₄, CaCl₂, और FeCl₃ घोल डालें।</li>
                    </ul>`,
                procedure: [
                    'प्रति नमूना प्रति तनुकरण 1000 से 1200 mL की दर से आवश्यक मात्रा में तनुकरण जल तैयार करें। तनुकरण जल का तापमान 27°C पर लाएं। आंशिक रूप से भरे हुए बोतल में हिलाकर, कार्बनिक मुक्त फ़िल्टर्ड हवा के साथ बुलबुला बनाकर या कपास-प्लग वाली बोतलों में एक दिन के लिए संग्रहीत करके हवा से संतृप्त करें।',
                    'कुछ नमूनों में पर्याप्त माइक्रोबियल आबादी नहीं होती है (उदाहरण के लिए, कुछ औद्योगिक अपशिष्ट, उच्च तापमान वाले अपशिष्ट, या अत्यधिक पीएच मान वाले अपशिष्ट)। ऐसे अपशिष्टों के लिए, तनुकरण जल को अपशिष्ट का प्रसंस्करण करने वाली एक जैविक उपचार प्रणाली से निकलने वाले प्रवाह का उपयोग करके बीजारोपण किया जाता है। जहां यह उपलब्ध नहीं है, कम से कम 1 घंटे लेकिन 36 घंटे से अधिक नहीं बसने के बाद घरेलू अपशिष्ट जल के सतह पर तैरनेवाला का उपयोग करें। अपशिष्ट प्राप्त करने वाले सतह के जल निकाय से बीज भी उपयुक्त हो सकता है। पर्याप्त बीज मात्रा डालें ताकि बीजारोपित तनुकरण जल का डीओ उठाव 0.6 और 1.0 mg/L के बीच हो। घरेलू अपशिष्ट जल बीज के लिए, आमतौर पर 4 से 6 mL बीज/L तनुकरण जल की आवश्यकता होती है। सतह के पानी के नमूनों को आमतौर पर बीजारोपण की आवश्यकता नहीं होती है।',
                    `नमूने का तनुकरण करें। तनुकरण के परिणामस्वरूप एक नमूना होना चाहिए जिसमें 3 दिनों के ऊष्मायन के बाद कम से कम 1 mg/L की अवशिष्ट DO और कम से कम 2 mg/L की DO खपत हो। तालिका और विशेष नमूना स्रोत के अनुभव का उपयोग करके कई तनुकरण करें। प्रदूषित सतह के पानी में 5 से 25 mg/L BOD हो सकता है।<br/><table class="w-full text-left border-collapse mt-2"><thead><tr><th class="border p-2" colspan="2">प्रतिशत मिश्रण का उपयोग करके</th><th class="border p-2" colspan="2">300mL बोतलों में सीधे पिपेटिंग द्वारा</th></tr><tr><th class="border p-2">BOD की सीमा</th><th class="border p-2">% मिश्रण</th><th class="border p-2">BOD की सीमा</th><th class="border p-2">नमूना एमएल</th></tr></thead><tbody><tr><td class="border p-2">1,000 - 3,500</td><td class="border p-2">0.2</td><td class="border p-2">1,200 - 4,200</td><td class="border p-2">0.5</td></tr><tr><td class="border p-2">400 - 1,400</td><td class="border p-2">0.5</td><td class="border p-2">600 - 2,100</td><td class="border p-2">1.0</td></tr><tr><td class="border p-2">200 - 700</td><td class="border p-2">1.0</td><td class="border p-2">300 - 1,050</td><td class="border p-2">2.0</td></tr><tr><td class="border p-2">100 - 350</td><td class="border p-2">2.0</td><td class="border p-2">120 - 420</td><td class="border p-2">5.0</td></tr><tr><td class="border p-2">40 - 140</td><td class="border p-2">5.0</td><td class="border p-2">60 - 210</td><td class="border p-2">10.0</td></tr><tr><td class="border p-2">20 - 70</td><td class="border p-2">10.0</td><td class="border p-2">30 - 105</td><td class="border p-2">20.0</td></tr><tr><td class="border p-2">10 - 35</td><td class="border p-2">20.0</td><td class="border p-2">12 - 42</td><td class="border p-2">50.0</td></tr><tr><td class="border p-2">4 - 14</td><td class="border p-2">50.0</td><td class="border p-2">6 - 21</td><td class="border p-2">100.0</td></tr><tr><td class="border p-2">0 - 7</td><td class="border p-2">100.0</td><td class="border p-2">0 - 7</td><td class="border p-2">300.0</td></tr></tbody></table><br/>स्नातकित सिलेंडर में तनुकरण तैयार करने के लिए, तनुकरण जल को, यदि आवश्यक हो तो बीजारोपित, एक 1 से 2 लीटर क्षमता वाले सिलेंडर में साइफन करें। साइफनिंग हमेशा धीरे-धीरे बिना बुलबुले के की जानी चाहिए, प्रवाह को नियंत्रित करने के लिए ट्यूब पर एक स्क्रू-पिन का उपयोग करें। ट्यूब की नोक को पानी की सतह के ठीक नीचे रखें जैसे ही यह ऊपर उठता है। सिलेंडर को आधा भरें, नमूने की वांछित मात्रा डालें और उचित स्तर तक पतला करें, प्लंजर प्रकार के मिश्रण रॉड के साथ मिलाएं। मिश्रित पतला नमूना तीन BOD बोतलों में साइफन करें, बिना किसी हवा के प्रवेश के स्टॉपर लगाएं। एक बोतल पर प्रारंभिक DO (विधि 1.9) निर्धारित करें और अन्य दो को 27°C पर ऊष्मायन करें। 3 दिनों के बाद डुप्लिकेट में अंतिम DO (विधि 1.9) निर्धारित करें।<br/>सीधे पिपेटिंग के लिए, वांछित नमूना मात्रा को अलग-अलग बोतलों में साइफन करें और पर्याप्त तनुकरण जल से भरें। पहले मामले की तरह परीक्षण पूरा करें।`,
                    'तनुकरण जल रिक्त (dilution water blank) का DO खपत निर्धारित करें। यह 0.2 mg/L से अधिक नहीं होना चाहिए।',
                    'बीज नियंत्रण (seed control) द्वारा DO उठाव निर्धारित करें।',
                ],
                calculation: `
                  <p><strong>जब तनुकरण जल बीजारोपित नहीं किया गया हो:</strong></p>
                  <code>BOD₃,₂₇ (mg/L) = (D₀ - D₃) / P</code>
                  <p class="mt-4"><strong>जब तनुकरण जल बीजारोपित किया गया हो:</strong></p>
                  <code>BOD₃,₂₇ (mg/L) = [ (D₀ - D₃) - f &times; (B₀ - B₃) ] / P</code>
                  <p class="text-xs mt-2">जहाँ: D₀=प्रारंभिक DO, D₃=3 दिन बाद DO, P=नमूने का दशमलव भिन्न, B₀=बीज नियंत्रण का प्रारंभिक DO, B₃=बीज नियंत्रण का अंतिम DO, f=बीज का अनुपात।</p>
                  <p class="mt-4"><strong>नोट्स:</strong></p>
                  <ul class="list-disc list-outside pl-5 space-y-1 text-xs">
                    <li>यदि दोनों तनुकरण सही हैं तो डुप्लिकेट के औसत परिणाम की रिपोर्ट करें।</li>
                    <li>सूत्र तनुकरण जल के BOD के लिए सही नहीं है जो केवल मानदंडों को पूरा करने वाले तनुकरण जल के लिए मान्य है। तनुकरण जल का BOD 0.2 mg/L से अधिक नहीं होना चाहिए, अधिमानतः 0.1 mg/L से कम।</li>
                    <li>मानक ग्लूकोज-ग्लूटामिक एसिड का BOD 198 ± 37 mg/L होना चाहिए (BIS3025 (भाग 44): 1993)। अन्यथा प्रक्रिया की जांच करें।</li>
                    <li>BOD मान जो 0.5mg/L से कम हैं या मापे गए तनुकरण जल के BOD के 2 गुना से कम हैं (जो भी कम हो) को पता लगाने की सीमा से कम के रूप में रिपोर्ट करें।</li>
                  </ul>
                `
            },
            {
                id: 'boron',
                title: 'Boron (बोरॉन)',
                intro: 'Curcumin विधि का उपयोग करके बोरॉन का स्पेक्ट्रोफोटोमेट्रिक निर्धारण।',
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Spectrophotometer:</strong> 540 nm पर उपयोग के लिए।</li>
                        <li><strong>Evaporating dishes:</strong> High-silica glass or porcelain.</li>
                        <li><strong>Water-bath:</strong> 55°C पर सेट।</li>
                    </ul>
                `,
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock boron solution:</strong> 571.6 mg निर्जल बोरिक एसिड को आसुत जल में घोलें और 1 लीटर तक करें।</li>
                        <li><strong>Curcumin reagent:</strong> 40 mg curcumin और 5 g ऑक्सालिक एसिड को 80 mL 95% एथिल अल्कोहल में घोलें, 4.2 mL सांद्र HCl डालें, 100 mL तक करें।</li>
                        <li><strong>Ethyl alcohol, 95%.</strong></li>
                    </ul>
                `,
                procedure: [
                    'मानकों और नमूनों की वाष्पीकरण डिश में 4 एमएल Curcumin अभिकर्मक डालें।',
                    '55°C पर 80 मिनट के लिए वॉटर बाथ पर गरम करें जब तक कि यह सूख न जाए।',
                    'ठंडा करें, 10 एमएल एथिल अल्कोहल में अवशेष घोलें।',
                    '540 nm पर अवशोषण पढ़ें और कैलिब्रेशन वक्र का उपयोग करके सांद्रता निर्धारित करें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से बोरॉन सांद्रता (mg/L) पढ़ें।'
            },
            {
                id: 'calcium',
                title: 'Calcium (कैल्शियम)',
                intro: 'EDTA अनुमापन विधि का उपयोग करके कैल्शियम का निर्धारण।',
                 apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Sodium hydroxide, NaOH, 1N.</strong></li>
                        <li><strong>Murexide (ammonium purpurate) indicator:</strong> 0.2 ग्राम डाई को 100 ग्राम ठोस NaCl के साथ मिलाएं।</li>
                        <li><strong>Standard EDTA titrant, 0.01M:</strong> 3.723 ग्राम EDTA डाइसोडियम नमक को आसुत जल में घोलें और 1000 मिलीलीटर तक करें।</li>
                        <li><strong>Standard calcium solution:</strong> 1.000 ग्राम निर्जल CaCO₃ को 1+1 HCl में घोलें और 1000 मिलीलीटर तक करें।</li>
                    </ul>
                `,
                procedure: [
                    '50 mL नमूना लें, pH को 12-13 पर समायोजित करने के लिए 2 mL NaOH डालें।',
                    '0.1-0.2 ग्राम Murexide इंडिकेटर डालें।',
                    'EDTA घोल से तब तक अनुमापन करें जब तक कि रंग गुलाबी से बैंगनी न हो जाए।',
                ],
                calculation: 'कैल्शियम (mg/L) = (A &times; B &times; 400.8) / नमूने का आयतन (एमएल)<br/> <p class="text-xs mt-2">जहाँ A = नमूने के लिए अनुमापक का एमएल, B = 1 एमएल EDTA के बराबर CaCO₃ का मिलीग्राम।</p>'
            },
             {
                id: 'cod',
                title: 'Chemical Oxygen Demand (COD)',
                intro: 'COD कार्बनिक और अकार्बनिक दोनों प्रदूषकों को एक मजबूत रासायनिक ऑक्सीकारक (पोटेशियम डाइक्रोमेट) से ऑक्सीकृत करने के लिए आवश्यक ऑक्सीजन की कुल मात्रा को मापता है।',
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Reflux flasks:</strong> 250 mL क्षमता, 24/29 ग्राउंड ग्लास नेक के साथ।</li>
                        <li><strong>Condensers:</strong> Leibig या समकक्ष।</li>
                        <li><strong>Hot plate or gas burner.</strong></li>
                    </ul>
                `,
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard potassium dichromate solution, 0.0417M (0.25N):</strong> 12.259 g K₂Cr₂O₇ (प्राथमिक मानक ग्रेड, 103°C पर 2 घंटे सुखाया गया) को आसुत जल में घोलकर 1 लीटर बनाएं।</li>
                        <li><strong>Sulphuric acid reagent:</strong> 5.5 g Ag₂SO₄ को प्रति किलो सांद्र H₂SO₄ में मिलाएं। घुलने के लिए एक या दो दिन रखें।</li>
                        <li><strong>Ferroin indicator solution:</strong> 1.485 g 1,10-phenanthroline monohydrate और 695 mg FeSO₄·7H₂O को आसुत जल में घोलकर 100 mL बनाएं।</li>
                        <li><strong>Standard ferrous ammonium sulphate (FAS), titrant, 0.25M:</strong> 98 g Fe(NH₄)₂(SO₄)₂·6H₂O को आसुत जल में घोलें, 20 mL सांद्र H₂SO₄ डालें, ठंडा करें और 1 लीटर तक पतला करें। प्रतिदिन मानकीकृत करें।</li>
                        <li><strong>Mercuric Sulphate, HgSO₄, powder.</strong></li>
                        <li><strong>Potassium hydrogen phthalate (KHP) standard:</strong> 425 mg KHP को 1 लीटर आसुत जल में घोलें। इसका सैद्धांतिक COD 500 µgO₂/mL है।</li>
                    </ul>
                `,
                procedure: [
                    '500 mL रिफ्लक्सिंग फ्लास्क में 50 mL नमूना या 50 mL तक पतला किया गया एक भाग लें। 1g HgSO₄, कुछ कांच के मोती, और 5 mL सल्फ्यूरिक एसिड अभिकर्मक डालें, मिलाएं, ठंडा करें। 25 mL 0.0417M K₂Cr₂O₇ घोल डालें, मिलाएं।',
                    'फ्लास्क को कंडेनसर से कनेक्ट करें और कूलिंग वॉटर चालू करें। कंडेनसर के खुले सिरे से अतिरिक्त 70 mL सल्फ्यूरिक एसिड अभिकर्मक डालें, हिलाते और मिलाते हुए।',
                    '2 घंटे के लिए रिफ्लक्स करें; ठंडा करें, कंडेनसर को आसुत जल से धोएं ताकि सामग्री का आयतन दोगुना हो जाए, ठंडा करें।',
                    '2 बूंद फेरोइन संकेतक डालें, शेष पोटेशियम डाइक्रोमेट को FAS से तब तक अनुमापित करें जब तक कि रंग नीला-हरा से लाल-भूरा न हो जाए। अभिकर्मकों के साथ एक आसुत जल रिक्त (blank) को भी रिफ्लक्स और अनुमापित करें।',
                    'बहुत कम COD वाले नमूनों का विश्लेषण करते समय मानक 0.00417M K₂Cr₂O₇, और 0.025M FAS का उपयोग करें।',
                    'पोटेशियम हाइड्रोजन थैलेट घोल पर परीक्षण करके तकनीक और अभिकर्मकों का मूल्यांकन करें।',
                ],
                calculation: 'COD (mg/L) = [ (A - B) &times; M &times; 8000 ] / नमूने का आयतन (एमएल)<br/><p class="text-xs mt-2">जहाँ A = रिक्त के लिए FAS का एमएल, B = नमूने के लिए FAS का एमएल, M = FAS की मोलरता।</p><p class="text-sm mt-2"><b>Note:</b> छोटे नमूना संस्करणों के लिए रसायनों की मात्रा को आनुपातिक रूप से कम करें।</p><table class="w-full text-left border-collapse mt-2"><thead><tr><th class="border p-2">नमूना आकार (mL)</th><th class="border p-2">K₂Cr₂O₇ (mL)</th><th class="border p-2">H₂SO₄ (mL)</th><th class="border p-2">HgSO₄ (g)</th><th class="border p-2">FAS (mole/L)</th><th class="border p-2">अंतिम आयतन (mL)</th></tr></thead><tbody><tr><td class="border p-2">10.0</td><td class="border p-2">5.0</td><td class="border p-2">15</td><td class="border p-2">0.2</td><td class="border p-2">0.05</td><td class="border p-2">70</td></tr><tr><td class="border p-2">20.0</td><td class="border p-2">10.0</td><td class="border p-2">30</td><td class="border p-2">0.4</td><td class="border p-2">0.10</td><td class="border p-2">140</td></tr><tr><td class="border p-2">30.0</td><td class="border p-2">15.0</td><td class="border p-2">45</td><td class="border p-2">0.6</td><td class="border p-2">0.15</td><td class="border p-2">210</td></tr><tr><td class="border p-2">40.0</td><td class="border p-2">20.0</td><td class="border p-2">60</td><td class="border p-2">0.8</td><td class="border p-2">0.20</td><td class="border p-2">280</td></tr><tr><td class="border p-2">50.0</td><td class="border p-2">25.0</td><td class="border p-2">75</td><td class="border p-2">1.0</td><td class="border p-2">0.25</td><td class="border p-2">350</td></tr></tbody></table>'
            },
            {
                id: 'chloride',
                title: 'Chloride (क्लोराइड)',
                intro: 'क्लोराइड आयन पानी में स्वाभाविक रूप से मौजूद होते हैं लेकिन उच्च सांद्रता औद्योगिक कचरे या सीवेज से प्रदूषण का संकेत दे सकती है। इसका परीक्षण मोहर की विधि से किया जाता है।',
                apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Potassium chromate indicator solution.</strong></li>
                        <li><strong>Standard silver nitrate titrant, 0.0141N:</strong> 2.395 g AgNO₃ को 1 लीटर तक घोलें।</li>
                        <li><strong>Standard sodium chloride, 0.0141N:</strong> 824.0 mg NaCl को 1 लीटर तक घोलें।</li>
                    </ul>
                `,
                procedure: [
                    'एक 100 एमएल नमूना या 100 एमएल तक पतला किया गया एक उपयुक्त भाग उपयोग करें।',
                    '1 एमएल K₂CrO₄ संकेतक डालें, AgNO₃ अनुमापक से गुलाबी-पीले समापन बिंदु तक अनुमापन करें।',
                    'एक रिक्त अनुमापन भी करें।',
                ],
                calculation: 'क्लोराइड (mg/L) = [ (A - B) &times; N &times; 35450 ] / नमूने का आयतन (एमएल)<br/><p class="text-xs mt-2">जहाँ A = नमूने के लिए एमएल अनुमापन, B = रिक्त के लिए एमएल अनुमापन, N = AgNO₃ की नॉर्मलता।</p>'
            },
            {
                id: 'hardness',
                title: 'Total Hardness (कुल कठोरता)',
                intro: 'पानी की कठोरता मुख्य रूप से कैल्शियम और मैग्नीशियम आयनों के कारण होती है। इसका परीक्षण EDTA अनुमापन विधि से किया जाता है।',
                apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `<h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solution:</strong> 16.9 g NH₄Cl को 143 mL सांद्र NH₄OH में घोलें। 1.25 g मैग्नीशियम EDTA नमक डालें और 250 mL तक पतला करें।</li>
                        <li><strong>Indicator:</strong> Eriochrome Black T सोडियम नमक। 0.5 ग्राम डाई को 100 ग्राम NaCl के साथ पीसें।</li>
                        <li><strong>Standard EDTA titrant, 0.01M:</strong> 3.723 g EDTA डाइसोडियम नमक को आसुत जल में घोलें और 1000 मिलीलीटर तक करें।</li>
                        <li><strong>Standard Calcium Solution:</strong> 1.000 g CaCO₃ को HCl में घोलें और 1000 मिलीलीटर तक करें।</li>
                    </ul>
                    <p class="text-xs mt-2"><strong>Note:</strong> यदि मैग्नीशियम EDTA नमक उपलब्ध नहीं है, तो 1.179 ग्राम डाइसोडियम EDTA, 780 मिलीग्राम MgSO₄·7H₂O, 16.9 ग्राम NH₄Cl और 143 मिलीलीटर सांद्र NH₄OH को मिलाकर बफर तैयार करें।</p>`,
                procedure: [
                    '25 एमएल नमूने को 50 एमएल तक पतला करें।',
                    '1 से 2 एमएल बफर घोल डालें ताकि पीएच 10.0 से 10.1 हो जाए।',
                    '1 से 2 बूंदें संकेतक घोल डालें और EDTA अनुमापक से लाल रंग से नीले रंग में बदलने तक अनुमापन करें।',
                    'अनुमापन को बफर डालने के 5 मिनट के भीतर पूरा करें।',
                    'मानक कैल्शियम घोल का उपयोग करके EDTA अनुमापक को मानकीकृत करें।',
                ],
                calculation: 'कुल कठोरता (mg/L CaCO₃ के रूप में) = (A &times; B &times; 1000) / नमूने का आयतन (एमएल)<br/><p class="text-xs mt-2">जहाँ A = नमूने के लिए एमएल अनुमापन, B = 1.00 एमएल EDTA अनुमापक के बराबर CaCO₃ का मिलीग्राम।</p>'
            },
            {
                id: 'do',
                title: 'Dissolved Oxygen (DO)',
                intro: 'घुलित ऑक्सीजन जलीय जीवन के लिए आवश्यक है और पानी की गुणवत्ता का एक प्रमुख संकेतक है। इसका परीक्षण विंकलर विधि से किया जाता है।',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>DO sampler.</li><li>BOD bottles, 300 mL.</li></ul>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Manganous sulphate solution:</strong> 480 g MnSO₄·4H₂O को 1 लीटर तक घोलें।</li>
                        <li><strong>Alkali-iodide-azide reagent:</strong> 500 g NaOH, 135 g NaI, और 10 g NaN₃ को 1 लीटर तक घोलें।</li>
                        <li><strong>Sulphuric acid, conc.</strong></li>
                        <li><strong>Starch indicator.</strong></li>
                        <li><strong>Standard sodium thiosulphate titrant, 0.025N:</strong> 6.205 g Na₂S₂O₃·5H₂O को 1 लीटर तक घोलें।</li>
                    </ul>
                `,
                procedure: [
                    'एक 300 एमएल BOD बोतल को ध्यान से पानी से भरें, हवा के बुलबुले न आने दें।',
                    '2 एमएल <strong>मैंगनीज सल्फेट घोल</strong>, फिर 2 एमएल <strong>क्षार-आयोडाइड-एजाइड अभिकर्मक</strong> डालें। बोतल बंद करके मिलाएं।',
                    'बने हुए अवक्षेप को व्यवस्थित होने दें।',
                    '2 एमएल <strong>सांद्र सल्फ्यूरिक एसिड</strong> डालें और पूरी तरह घुलने तक मिलाएं।',
                    'एक निश्चित आयतन (जैसे 201 एमएल) को मानक <strong>सोडियम थायोसल्फेट (0.025N)</strong> से तब तक अनुमापित करें जब तक कि हल्का पुआल रंग न रह जाए।',
                    '1-2 एमएल <strong>स्टार्च इंडिकेटर</strong> डालें (घोल नीला हो जाएगा)।',
                    'अनुमापन जारी रखें जब तक कि नीला रंग पूरी तरह गायब न हो जाए। आयतन नोट करें।',
                ],
                calculation: 'DO (mg/L) = (अनुमापक का V &times; अनुमापक की Molarity &times; 8000) / 200'
            },
            {
                id: 'ph',
                title: 'pH',
                intro: 'पोटेंशियोमेट्रिक विधि।',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>pH meter with temperature compensation.</li><li>Reference and Glass electrodes.</li></ul>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solutions:</strong> pH 4.00, 6.86, और 9.18 के लिए व्यावसायिक रूप से उपलब्ध या तैयार किए गए।</li>
                    </ul>
                `,
                procedure: [
                  'निर्माता के निर्देशों के अनुसार पीएच मीटर को दो बफर घोलों (आमतौर पर पीएच 4 और 7) का उपयोग करके कैलिब्रेट करें।',
                  'इलेक्ट्रोड को आसुत जल से धोएं, सुखाएं और नमूने में डुबोएं।',
                  'संतुलन स्थापित होने के बाद पीएच पढ़ें।',
                ],
                calculation: 'सीधे मीटर से पढ़ें।'
            },
             {
                id: 'tds',
                title: 'Total Dissolved Solids (TDS)',
                intro: 'TDS पानी में सभी घुले हुए कार्बनिक और अकार्बनिक ठोस पदार्थों की कुल मात्रा है। इसका परीक्षण ग्रेविमेट्रिक विधि से किया जाता है।',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>Evaporating dishes.</li><li>Drying oven, 180±2°C.</li><li>Desiccator.</li><li>Analytical balance.</li></ul>',
                reagents: '<p>आवश्यक नहीं।</p>',
                procedure: [
                    'एक साफ, सूखी, पहले से तौली हुई बीकर (W₁) लें।',
                    'बीकर में एक ज्ञात आयतन (जैसे 100 एमएल) छाना हुआ पानी डालें।',
                    'बीकर को हॉट प्लेट या वॉटर बाथ पर पूरी तरह से वाष्पित करें।',
                    'बीकर को 180°C पर एक घंटे के लिए हॉट एयर ओवन में सुखाएं।',
                    'बीकर को डेसिकेटर में ठंडा करें और फिर से तौलें (W₂)।',
                ],
                calculation: 'TDS (mg/L) = [ (W₂ - W₁) मिलीग्राम में &times; 1000 ] / नमूने का आयतन (एमएल)'
            },
             {
                id: 'tss',
                title: 'Total Suspended Solids (TSS)',
                intro: 'TSS उन ठोस कणों का माप है जो फिल्टर पेपर पर रह जाते हैं।',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>Glass-fibre filter disk.</li><li>Filtration apparatus.</li><li>Drying oven, 103–105°C.</li><li>Analytical balance.</li></ul>',
                reagents: '<p>आवश्यक नहीं।</p>',
                procedure: [
                    'एक ज्ञात आयतन पानी को एक पहले से तौले हुए ग्लास फाइबर फिल्टर पेपर (W₁) से छानें।',
                    'रोके गए ठोस पदार्थों के साथ फिल्टर पेपर को 103-105°C पर एक घंटे के लिए हॉट एयर ओवन में सुखाएं।',
                    'डेसिकेटर में ठंडा करें और फिर से तौलें (W₂)।',
                ],
                calculation: 'TSS (mg/L) = [ (W₂ - W₁) मिलीग्राम में &times; 1000 ] / नमूने का आयतन (एमएल)'
            },
            {
                id: 'fluoride',
                title: 'Fluoride (फ्लोराइड)',
                intro: 'SPADNS स्पेक्ट्रोफोटोमेट्रिक विधि या आयन सेलेक्टिव इलेक्ट्रोड विधि का उपयोग करके फ्लोराइड का निर्धारण।',
                apparatus: '<p>Spectrophotometer (570 nm) or Ion Selective Electrode setup.</p>',
                reagents: `
                    <h4>SPADNS विधि के लिए अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard fluoride solution.</strong></li>
                        <li><strong>SPADNS solution.</strong></li>
                        <li><strong>Zirconyl-acid reagent.</strong></li>
                    </ul>
                `,
                procedure: [
                    'यदि आवश्यक हो तो नमूने का आसवन (distillation) करें।',
                    'नमूने में SPADNS और जिरकोनिल-एसिड अभिकर्मक डालें।',
                    '570 nm पर अवशोषण पढ़ें और कैलिब्रेशन वक्र से सांद्रता की गणना करें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से फ्लोराइड सांद्रता (mg/L) पढ़ें।'
            },
            {
                id: 'iron',
                title: 'Iron (आयरन)',
                intro: 'Phenanthroline विधि का उपयोग करके आयरन का स्पेक्ट्रोफोटोमेट्रिक निर्धारण।',
                 apparatus: '<p>Spectrophotometer (510 nm).</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Hydroxylamine solution.</strong></li>
                        <li><strong>Phenanthroline solution.</strong></li>
                        <li><strong>Standard iron solution.</strong></li>
                    </ul>
                `,
                procedure: [
                    'नमूने में हाइड्रोक्लोरिक एसिड और हाइड्रॉक्सिलमाइन घोल डालें।',
                    'बफर और फेनेंथ्रोलाइन घोल डालें।',
                    '510 nm पर अवशोषण पढ़ें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से आयरन सांद्रता (mg/L) पढ़ें।'
            },
            {
                id: 'magnesium',
                title: 'Magnesium (मैग्नीशियम)',
                intro: 'कुल कठोरता और कैल्शियम कठोरता से गणना।',
                apparatus: '<p>आवश्यक नहीं।</p>',
                reagents: '<p>आवश्यक नहीं।</p>',
                procedure: [
                    'कुल कठोरता (Total Hardness) निर्धारित करें।',
                    'कैल्शियम कठोरता (Calcium Hardness) निर्धारित करें।',
                ],
                calculation: 'Mg (mg/L) = [कुल कठोरता (mg/L CaCO₃) - कैल्शियम कठोरता (mg/L CaCO₃)] x 0.243'
            },
            {
                id: 'manganese',
                title: 'Manganese (मैंगनीज)',
                intro: 'Persulphate विधि का उपयोग करके मैंगनीज का स्पेक्ट्रोफोटोमेट्रिक निर्धारण।',
                apparatus: '<p>Spectrophotometer (525 nm).</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Special reagent (HgSO₄, HNO₃, H₃PO₄, AgNO₃).</strong></li>
                        <li><strong>Ammonium persulphate.</strong></li>
                        <li><strong>Standard manganese solution.</strong></li>
                    </ul>
                `,
                procedure: [
                    'नमूने में विशेष अभिकर्मक डालें और उबालें।',
                    'अमोनियम पर्सल्फेट डालें और उबालें।',
                    '525 nm पर अवशोषण पढ़ें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से मैंगनीज सांद्रता (mg/L) पढ़ें।'
            },
            {
                id: 'ammonia',
                title: 'Nitrogen, Ammonia (अमोनिया)',
                intro: 'आसवन और अनुमापन, फेनेट, या आयन सेलेक्टिव इलेक्ट्रोड विधियों द्वारा अमोनिया का निर्धारण।',
                 apparatus: '<p>Distillation apparatus, Spectrophotometer (640 nm), or Ion Selective Electrode setup.</p>',
                reagents: `
                    <h4>अनुमापन विधि के लिए अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Borate buffer.</strong></li>
                        <li><strong>Indicating boric acid solution.</strong></li>
                        <li><strong>Standard sulphuric acid, 0.02N.</strong></li>
                    </ul>
                `,
                procedure: [
                    'नमूने को बफर करें और अमोनिया का आसवन करें।',
                    'बोरिक एसिड में आसुत को इकट्ठा करें।',
                    'मानक सल्फ्यूरिक एसिड से अनुमापन करें।',
                ],
                calculation: 'NH₃-N (mg/L) = [ (A - B) &times; 280 ] / नमूने का आयतन (एमएल)'
            },
            {
                id: 'nitrate',
                title: 'Nitrogen, Nitrate (नाइट्रेट)',
                intro: 'TON और NO₂-N से गणना, या आयन सेलेक्टिव इलेक्ट्रोड या यूवी स्पेक्ट्रोफोटोमेट्रिक विधियों द्वारा निर्धारण।',
                apparatus: '<p>Spectrophotometer or Ion Selective Electrode setup.</p>',
                reagents: `
                    <h4>UV विधि के लिए अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard Nitrate solution.</strong></li>
                        <li><strong>Hydrochloric acid solution, 1N.</strong></li>
                    </ul>
                `,
                procedure: [
                    'नमूने में HCl डालें।',
                    '220 nm (नाइट्रेट के लिए) और 275 nm (कार्बनिक हस्तक्षेप के लिए) पर अवशोषण पढ़ें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से नाइट्रेट सांद्रता (mg N/L) पढ़ें।'
            },
             {
                id: 'nitrite',
                title: 'Nitrogen, Nitrite (नाइट्राइट)',
                intro: 'सल्फानिलामाइड विधि का उपयोग करके नाइट्राइट का स्पेक्ट्रोफोटोमेट्रिक निर्धारण।',
                apparatus: '<p>Spectrophotometer (543 nm).</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Colour reagent.</strong></li>
                        <li><strong>Standard nitrite solution.</strong></li>
                    </ul>
                `,
                procedure: [
                    'नमूने में रंग अभिकर्मक डालें।',
                    '10 मिनट से 2 घंटे के बीच 543 nm पर अवशोषण पढ़ें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से नाइट्राइट सांद्रता (mg N/L) पढ़ें।'
            },
             {
                id: 'organic_nitrogen',
                title: 'Nitrogen, Organic (जैविक नाइट्रोजन)',
                intro: 'Kjeldahl विधि द्वारा जैविक नाइट्रोजन का निर्धारण।',
                apparatus: '<p>Digestion and Distillation apparatus.</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Digestion reagent (K₂SO₄, CuSO₄, H₂SO₄).</strong></li>
                        <li><strong>Sodium hydroxide thiosulphate reagent.</strong></li>
                        <li><strong>Indicating boric acid solution.</strong></li>
                    </ul>
                `,
                procedure: [
                    'नमूने से अमोनिया निकालें।',
                    'पाचन अभिकर्मक के साथ शेष नमूने को पचाएं।',
                    'अमोनिया का आसवन करें और मानक एसिड से अनुमापन करें।',
                ],
                calculation: 'जैविक N (mg/L) = [ (A - B) &times; 280 ] / नमूने का आयतन (एमएल)'
            },
             {
                id: 'ton',
                title: 'Nitrogen, Total Oxidised (NO₂ + NO₃)',
                intro: 'कैडमियम रिडक्शन और स्पेक्ट्रोफोटोमेट्रिक विधि द्वारा कुल ऑक्सीकृत नाइट्रोजन का निर्धारण।',
                 apparatus: '<p>Reduction column, Spectrophotometer (543 nm).</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Copper-cadmium granules.</strong></li>
                        <li><strong>Ammonium chloride-EDTA solution.</strong></li>
                        <li><strong>Colour reagent.</strong></li>
                    </ul>
                `,
                procedure: [
                    'कैडमियम रिडक्शन कॉलम के माध्यम से नमूना पास करें ताकि नाइट्रेट नाइट्राइट में बदल जाए।',
                    'नाइट्राइट के लिए स्पेक्ट्रोफोटोमेट्रिक विधि का पालन करें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से TON सांद्रता (mg N/L) पढ़ें।'
            },
            {
                id: 'odour',
                title: 'Odour (गंध)',
                intro: 'गुणात्मक मानव रिसेप्टर विधि।',
                apparatus: '<p>Odourless glass bottle.</p>',
                reagents: '<p>आवश्यक नहीं।</p>',
                procedure: [
                    'एक साफ गंधहीन बोतल को नमूने से आधा भरें, स्टॉपर लगाएं, 2 से 3 सेकंड के लिए जोर से हिलाएं और फिर जल्दी से गंध का निरीक्षण करें।',
                ],
                calculation: 'गंध को गंध मुक्त, सड़े अंडे, जली हुई चीनी, साबुन, मछली, सेप्टिक, सुगंधित, क्लोरीनयुक्त, मादक गंध या किसी अन्य विशिष्ट गंध के रूप में रिपोर्ट करें।'
            },
             {
                id: 'orthophosphate',
                title: 'Phosphorus, Ortho Phosphate',
                intro: 'एस्कॉर्बिक एसिड विधि का उपयोग करके ऑर्थोफॉस्फेट का स्पेक्ट्रोफोटोमेट्रिक निर्धारण।',
                 apparatus: '<p>Spectrophotometer (880 nm).</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Sulphuric acid, 5N.</strong></li>
                        <li><strong>Potassium antimonyl tartrate solution.</strong></li>
                        <li><strong>Ammonium molybdate solution.</strong></li>
                        <li><strong>Ascorbic acid, 0.1M.</strong></li>
                        <li><strong>Combined reagent (सभी चार अभिकर्मकों का मिश्रण)।</strong></li>
                    </ul>
                `,
                procedure: [
                    'नमूने में संयुक्त अभिकर्मक डालें।',
                    '10 से 30 मिनट तक प्रतीक्षा करें और 880 nm पर अवशोषण पढ़ें।',
                ],
                calculation: 'o-PO₄ (mg P/L) = [कैलिब्रेशन वक्र से mg P &times; 1000] / नमूने का आयतन (एमएल)'
            },
             {
                id: 'total_phosphorus',
                title: 'Phosphorus, Total',
                intro: 'पाचन और एस्कॉर्बिक एसिड स्पेक्ट्रोफोटोमेट्रिक विधि द्वारा कुल फास्फोरस का निर्धारण।',
                apparatus: '<p>Hot plate, Spectrophotometer (880 nm).</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Persulphate.</strong></li>
                        <li><strong>Sulphuric acid, 10N.</strong></li>
                        <li><strong>Combined reagent (जैसा कि ऑर्थोफॉस्फेट के लिए है)।</strong></li>
                    </ul>
                `,
                procedure: [
                    'नमूने को पर्सल्फेट और सल्फ्यूरिक एसिड के साथ पचाएं।',
                    'उदासीन करें और ऑर्थोफॉस्फेट के लिए प्रक्रिया का पालन करें।',
                ],
                calculation: 'कुल P (mg/L) = [कैलिब्रेशन वक्र से mg P &times; 1000] / नमूने का आयतन (एमएल)'
            },
            {
                id: 'potassium',
                title: 'Potassium (पोटेशियम)',
                intro: 'ज्वाला उत्सर्जन फोटोमेट्रिक विधि द्वारा पोटेशियम का निर्धारण।',
                 apparatus: '<p>Flame photometer.</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock potassium solution (1000 mg K/L).</strong></li>
                    </ul>
                `,
                procedure: [
                    '766.5 nm पर उपकरण सेट करें।',
                    'मानकों का उपयोग करके एक कैलिब्रेशन वक्र तैयार करें।',
                    'नमूने में उत्सर्जन तीव्रता को मापें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से पोटेशियम सांद्रता (mg/L) पढ़ें।'
            },
            {
                id: 'silicate',
                title: 'Silicate (सिलिकेट)',
                intro: 'अमोनियम मोलिब्डेट विधि द्वारा सिलिकेट का स्पेक्ट्रोफोटोमेट्रिक निर्धारण।',
                apparatus: '<p>Spectrophotometer (815 nm).</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Ammonium molybdate reagent.</strong></li>
                        <li><strong>Oxalic acid solution.</strong></li>
                        <li><strong>Reducing agent.</strong></li>
                    </ul>
                `,
                procedure: [
                    'नमूने में HCl और अमोनियम मोलिब्डेट डालें, फिर ऑक्सालिक एसिड और कम करने वाले एजेंट डालें।',
                    '815 nm पर अवशोषण पढ़ें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से सिलिकेट सांद्रता (mg SiO₂/L) पढ़ें।'
            },
            {
                id: 'sodium',
                title: 'Sodium (सोडियम)',
                intro: 'ज्वाला उत्सर्जन फोटोमेट्रिक विधि द्वारा सोडियम का निर्धारण।',
                apparatus: '<p>Flame photometer.</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock sodium solution (1000 mg Na/L).</strong></li>
                    </ul>
                `,
                procedure: [
                    '589 nm पर उपकरण सेट करें।',
                    'मानकों का उपयोग करके एक कैलिब्रेशन वक्र तैयार करें।',
                    'नमूने में उत्सर्जन तीव्रता को मापें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से सोडियम सांद्रता (mg/L) पढ़ें।'
            },
            {
                id: 'sulphate',
                title: 'Sulphate (सल्फेट)',
                intro: 'नेफेलोमेट्रिक विधि द्वारा सल्फेट का निर्धारण।',
                 apparatus: '<p>Nephelometric turbidity meter or spectrophotometer (420 nm).</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solution.</strong></li>
                        <li><strong>Barium chloride crystals.</strong></li>
                    </ul>
                `,
                procedure: [
                    'नमूने में बफर घोल डालें।',
                    'बेरियम क्लोराइड क्रिस्टल डालें और 60 सेकंड तक हिलाएं।',
                    '5 मिनट के बाद मैलापन (turbidity) को मापें।',
                ],
                calculation: 'कैलिब्रेशन वक्र से सल्फेट सांद्रता (mg/L) पढ़ें।'
            },
             {
                id: 'temperature',
                title: 'Temperature (तापमान)',
                intro: 'पारा थर्मामीटर विधि।',
                apparatus: '<p>Mercury thermometer.</p>',
                reagents: '<p>आवश्यक नहीं।</p>',
                procedure: [
                    'थर्मामीटर को नमूने में निर्माता द्वारा निर्दिष्ट निशान तक डुबोएं और संतुलन के बाद तापमान पढ़ें।',
                ],
                calculation: 'सीधे थर्मामीटर से पढ़ें।'
            },
            {
                id: 'turbidity',
                title: 'Turbidity (मैलापन)',
                intro: 'नेफेलोमेट्रिक विधि।',
                apparatus: '<p>Nephelometric turbidity meter.</p>',
                reagents: `
                    <h4>अभिकर्मक</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Formazin polymer suspension (4000 NTU stock).</strong></li>
                    </ul>
                `,
                procedure: [
                    'निर्माता के निर्देशों के अनुसार नेफेलोमीटर को कैलिब्रेट करें।',
                    'नमूने को धीरे से हिलाएं, हवा के बुलबुले गायब होने तक प्रतीक्षा करें और मैलापन पढ़ें।',
                ],
                calculation: 'सीधे उपकरण प्रदर्शन से पढ़ें।'
            }
        ]
    },
    en: {
        title: "Water Testing Guide",
        description: "A guide to common parameters for checking water quality, their simplified procedures, and calculation methods.",
        backToTopics: "Back to Topics",
        important_note: {
            title: "Important Note:",
            text: "Always follow safety rules and wear appropriate protective gear (PPE) when working in the lab. For accurate results, it is better to follow certified labs and standard methods."
        },
        tests: [
            {
                id: 'alkalinity_p',
                title: 'Alkalinity, Phenolphthalein (pH 8.3)',
                intro: 'This test measures hydroxide and carbonate alkalinity in water.',
                apparatus: '<p>Standard laboratory glassware such as burettes, volumetric flasks, conical flasks and beakers.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard sodium carbonate, approximately 0.05 N:</strong> Dry 3 to 5 g sodium carbonate, Na₂CO₃, at 250°C for 4h and cool in a desiccator. Accurately weigh 2.5±0.2 g to the nearest mg, dissolve in distilled water and make to 1 L.</li>
                        <li><strong>Standard H₂SO₄, approximately 0.1N:</strong> Dilute 2.8 mL conc. sulphuric acid to 1 L. Standardise against 40.00 mL 0.05N Na₂CO₃.</li>
                        <li><strong>Standard sulphuric acid, 0.02 N:</strong> Prepare by calculation from the above 0.1N solution.</li>
                        <li><strong>Phenolphthalein indicator solution, alcoholic, pH 8.3:</strong> Dissolve 5 g phenolphthalein in 500 mL 95% ethyl alcohol. Add 500 mL distilled water.</li>
                    </ul>
                `,
                procedure: [
                    'Take 25 to 50 mL sample in a conical flask.',
                    'Add 2 to 3 drops of phenolphthalein indicator.',
                    'If it turns pink (pH > 8.3), titrate with 0.02 N H₂SO₄ to disappearance of the colour.',
                    'Record mL titrant used.',
                ],
                calculation: `Phenolphthalein Alkalinity (as mg/L CaCO₃) = (A &times; Normality of Acid &times; 50000) / mL of sample<br/><p class="text-xs mt-2">where A = mL titrant used to phenolphthalein end point.</p>`
            },
            {
                id: 'alkalinity_t',
                title: 'Alkalinity, Total (pH 4.5)',
                intro: 'This test measures the total alkalinity of water.',
                 apparatus: '<p>Standard laboratory glassware such as burettes, volumetric flasks and beakers.</p>',
                reagents: `
                    <h4>Reagents</h4>
                     <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard sulphuric acid, 0.02 N:</strong> As prepared for phenolphthalein alkalinity.</li>
                        <li><strong>Bromcresol green indicator, pH 4.5:</strong> Dissolve 100mg bromcresol green sodium salt in 100 mL distilled water.</li>
                    </ul>
                `,
                procedure: [
                    'Add 2 to 3 drops of bromcresol green indicator.',
                    'Titrate until change in colour (blue to yellow, pH 4.9 to 4.3) is observed.',
                    'Record total mL titrant used.',
                ],
                calculation: `Total Alkalinity (as mg/L CaCO₃) = (B &times; Normality of Acid &times; 50000) / mL of sample<br/><p class="text-xs mt-2">where B = total mL of titrant used to bromcresol green end point.</p>`
            },
            {
                id: 'aluminum',
                title: 'Aluminum',
                intro: 'Spectrophotometric determination of aluminum using Eriochrome Cyanine R method.',
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Spectrophotometer:</strong> For use at 535 nm with light path of 1 cm or longer.</li>
                        <li><strong>Glassware:</strong> Treat all glassware with 1 + 1 warm HCl and rinse with aluminium free distilled water.</li>
                    </ul>
                `,
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock aluminum solution:</strong> Dissolve 8.791 g aluminum potassium sulphate, AlK(SO₄)₂.12H₂O, in water and dilute to 1 L.</li>
                        <li><strong>Standard aluminum solution:</strong> Dilute 10 mL stock aluminum solution to 1000 mL with distilled water; 1.00 mL = 5.00 µg Al. Prepare daily.</li>
                        <li><strong>Sulphuric acid, H₂SO₄, 0.02 N and 6 N.</strong></li>
                        <li><strong>Ascorbic acid solution:</strong> Dissolve 0.1 g ascorbic acid in water and make up to 100 mL in a volumetric flask. Prepare fresh daily.</li>
                        <li><strong>Buffer reagent:</strong> Dissolve 136 g sodium acetate, NaC₂H₃O₂.3H₂O, in water, add 40 mL 1N acetic acid and dilute to 1 L.</li>
                        <li><strong>Working dye solution (Eriochrome Cyanine R):</strong> Dilute 10.0 mL of stock dye solution to 100 mL in a volumetric flask with water.</li>
                    </ul>
                `,
                procedure: [
                    'Prepare a series of standards containing 0 to 7 µg aluminum.',
                    'To each standard and sample, add 1 mL 0.02N H₂SO₄, 1 mL ascorbic acid, 10 mL buffer, and 5 mL working dye reagent.',
                    'Make up the total volume to 50 mL and read absorbance at 535 nm within 5-15 minutes.',
                    'Determine sample concentration from the calibration curve.',
                ],
                calculation: 'Read aluminum concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'bod',
                title: 'Biochemical Oxygen Demand (BOD)',
                intro: 'This test is based on the bottle incubation method for 3 days at 27°C.',
                apparatus: `<ul class="list-disc list-outside pl-5 space-y-1">
                    <li>300 mL BOD bottles, narrow mouth, flared lip, with tapered and pointed ground glass stoppers.</li>
                    <li>Air incubator or water bath, thermostatically controlled at 27 ± 1 °C. Light entry must be prevented in order to avoid photosynthetic oxygen production.</li>
                    <li>Accessories: plastic tube, screw-pin and a 5-10 L water container.</li>
                    </ul>`,
                reagents: `<h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Phosphate buffer solution:</strong> Dissolve 8.5 g KH₂PO₄, 21.75 g K₂HPO₄, 33.4 g Na₂HPO₄·7H₂O and 1.7 g NH₄Cl in 1 L distilled water.</li>
                        <li><strong>Magnesium sulphate solution:</strong> Dissolve 22.5 g MgSO₄·7H₂O in 1 L distilled water.</li>
                        <li><strong>Calcium chloride solution:</strong> Dissolve 27.5 g CaCl₂ in 1 L distilled water.</li>
                        <li><strong>Ferric chloride solution:</strong> Dissolve 0.25 g FeCl₃·6H₂O in 1 L distilled water.</li>
                        <li><strong>Acid and alkali solution:</strong> 1N NaOH and 1N H₂SO₄. Use for neutralising samples.</li>
                        <li><strong>Glucose-glutamic acid solution (prepare fresh):</strong> Dissolve 150 mg dry reagent grade glucose and 150 mg dry reagent grade glutamic acid in 1 L distilled water.</li>
                        <li><strong>Sample dilution water:</strong> Add 1 mL each of phosphate buffer, MgSO₄, CaCl₂, and FeCl₃ solutions per litre distilled water.</li>
                    </ul>`,
                procedure: [
                    'Prepare required amount of dilution water at the rate of 1000 to 1200 mL per sample per dilution. Bring the diluted water temperature to 27 °C. Saturate with air by shaking in a partially filled bottle, by bubbling with organic free filtered air or by storing in cotton-plugged bottles for a day.',
                    'Some samples do not contain sufficient microbial population (for example, some industrial wastes, high temperature wastes, or wastes with extreme pH values). For such wastes, the dilution water is seeded using effluent from a biological treatment system processing the waste. Where this is not available, use supernatant from domestic wastewater after settling for at least 1 h but not more than 36 h. Seed from a surface water body receiving the waste may also be suitable. Add enough seed volume such that the DO uptake of the seeded dilution water is between 0.6 and 1.0 mg/L. For domestic wastewater seed, usually 4 to 6 mL seed / L of dilution water is required. Surface water samples usually do not require seeding.',
                    `Dilution of sample. Dilutions must result in a sample with a residual DO (after 3 days of incubation) of at least 1 mg/L and a DO uptake of at least 2 mg/L. Make several dilutions using the Table and experience with the particular sample source. Polluted surface waters may have 5 to 25 mg/L BOD.<br/><table class="w-full text-left border-collapse mt-2"><thead><tr><th class="border p-2" colspan="2">Using percent mixture</th><th class="border p-2" colspan="2">By direct pipetting into 300mL bottles</th></tr><tr><th class="border p-2">Range of BOD</th><th class="border p-2">% mixture</th><th class="border p-2">Range of BOD</th><th class="border p-2">mL Sample</th></tr></thead><tbody><tr><td class="border p-2">1,000 - 3,500</td><td class="border p-2">0.2</td><td class="border p-2">1,200 - 4,200</td><td class="border p-2">0.5</td></tr><tr><td class="border p-2">400 - 1,400</td><td class="border p-2">0.5</td><td class="border p-2">600 - 2,100</td><td class="border p-2">1.0</td></tr><tr><td class="border p-2">200 - 700</td><td class="border p-2">1.0</td><td class="border p-2">300 - 1,050</td><td class="border p-2">2.0</td></tr><tr><td class="border p-2">100 - 350</td><td class="border p-2">2.0</td><td class="border p-2">120 - 420</td><td class="border p-2">5.0</td></tr><tr><td class="border p-2">40 - 140</td><td class="border p-2">5.0</td><td class="border p-2">60 - 210</td><td class="border p-2">10.0</td></tr><tr><td class="border p-2">20 - 70</td><td class="border p-2">10.0</td><td class="border p-2">30 - 105</td><td class="border p-2">20.0</td></tr><tr><td class="border p-2">10 - 35</td><td class="border p-2">20.0</td><td class="border p-2">12 - 42</td><td class="border p-2">50.0</td></tr><tr><td class="border p-2">4 - 14</td><td class="border p-2">50.0</td><td class="border p-2">6 - 21</td><td class="border p-2">100.0</td></tr><tr><td class="border p-2">0 - 7</td><td class="border p-2">100.0</td><td class="border p-2">0 - 7</td><td class="border p-2">300.0</td></tr></tbody></table><br/>For preparing dilution in graduated cylinders, siphon dilution water, seeded if necessary, into a 1 to 2 L capacity cylinder. Siphoning should always be done slowly without bubbling, use a screw-pin on the tube to regulate the flow. Keep the tip of the tube just below the water surface as it rises. Fill cylinder half full, add desired quantity of sample and dilute to appropriate level, mix with plunger type mixing rod. Siphon mixed diluted sample in three BOD bottles, stopper without entraining any air. Determine initial DO (method 1.9) on one bottle and incubate the other two at 27 °C. Determine final DO (method 1.9) in duplicate after 3 days.<br/>For direct pipetting, siphon the desired sample volume to individual bottles and fill with enough dilution water. Complete the test as in the earlier case.`,
                    'Dilution water blank. Find the DO consumption of unseeded dilution water by determining initial and final DO as in c above. It should not be more than 0.2 mg/L.',
                    'Seed control. Determine the DO uptake by seeding material according to the procedure in c above.',
                ],
                calculation: `
                  <p><strong>When dilution water is not seeded:</strong></p>
                  <code>BOD₃,₂₇ (mg/L) = (D₀ - D₃) / P</code>
                  <p class="mt-4"><strong>When dilution water is seeded:</strong></p>
                  <code>BOD₃,₂₇ (mg/L) = [ (D₀ - D₃) - f &times; (B₀ - B₃) ] / P</code>
                  <p class="text-xs mt-2">where: D₀=initial DO, D₃=DO after 3 days, P=decimal volumetric fraction of sample, B₀=initial DO of seed, B₃=final DO of seed, f=ratio of seed.</p>
                  <p class="mt-4"><strong>Notes:</strong></p>
                  <ul class="list-disc list-outside pl-5 space-y-1 text-xs">
                    <li>Report average results of duplicates if both dilutions are correct.</li>
                    <li>Formula does not correct for BOD of dilution water which is only valid for dilution water meeting the criteria. BOD of dilution water should not be more than 0.2 mg/L, preferably lower than 0.1 mg/L.</li>
                    <li>The standard glucose-glutamic acid should have BOD of 198 ± 37 mg/L (BIS3025 (part 44): 1993). Check procedure otherwise.</li>
                    <li>Report BOD values lower than 0.5mg/L or 2 times the measured BOD of the dilution water (whichever is lower) as lower than detection limit.</li>
                  </ul>
                `
            },
            {
                id: 'boron',
                title: 'Boron',
                intro: 'Spectrophotometric determination of boron using Curcumin method.',
                 apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Spectrophotometer:</strong> For use at 540 nm.</li>
                        <li><strong>Evaporating dishes:</strong> High-silica glass or porcelain.</li>
                        <li><strong>Water-bath:</strong> Set at 55°C.</li>
                    </ul>
                `,
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock boron solution:</strong> Dissolve 571.6 mg anhydrous boric acid in distilled water and dilute to 1 L.</li>
                        <li><strong>Curcumin reagent:</strong> Dissolve 40 mg curcumin and 5 g oxalic acid in 80 mL 95% ethyl alcohol, add 4.2 mL conc. HCl, make to 100 mL.</li>
                        <li><strong>Ethyl alcohol, 95%.</strong></li>
                    </ul>
                `,
                procedure: [
                    'To standards and samples in evaporating dishes, add 4 mL of Curcumin reagent.',
                    'Heat on water bath at 55°C for 80 min until dry.',
                    'Cool, dissolve residue in 10 mL ethyl alcohol.',
                    'Read absorbance at 540 nm and determine concentration using calibration curve.',
                ],
                calculation: 'Read boron concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'calcium',
                title: 'Calcium',
                intro: 'Determination of calcium using the EDTA titrimetric method.',
                 apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Sodium hydroxide, NaOH, 1N.</strong></li>
                        <li><strong>Murexide (ammonium purpurate) indicator:</strong> Mix 0.2 g of dye with 100 g of solid NaCl.</li>
                        <li><strong>Standard EDTA titrant, 0.01M:</strong> Dissolve 3.723 g of disodium salt of EDTA in distilled water and dilute to 1000 mL.</li>
                        <li><strong>Standard calcium solution:</strong> Dissolve 1.000 g of anhydrous CaCO₃ in 1+1 HCl and dilute to 1000 mL.</li>
                    </ul>
                `,
                procedure: [
                    'Take 50 mL sample, add 2 mL NaOH to produce pH of 12 to 13.',
                    'Add 0.1 to 0.2 g Murexide indicator.',
                    'Titrate with EDTA solution until the colour changes from pink to purple.',
                ],
                calculation: 'Calcium (mg/L) = (A &times; B &times; 400.8) / mL of sample<br/> <p class="text-xs mt-2">where A = mL of titrant for sample, B = mg CaCO₃ equivalent to 1 mL EDTA.</p>'
            },
             {
                id: 'cod',
                title: 'Chemical Oxygen Demand (COD)',
                intro: 'COD measures the total amount of oxygen required to oxidize both organic and inorganic pollutants using a strong chemical oxidant (potassium dichromate).',
                apparatus: `
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Reflux flasks:</strong> 250 mL capacity, with 24/29 ground glass neck.</li>
                        <li><strong>Condensers:</strong> Leibig or equivalent.</li>
                        <li><strong>Hot plate or gas burner.</strong></li>
                    </ul>
                `,
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard potassium dichromate solution, 0.0417M (0.25N):</strong> Dissolve 12.259 g K₂Cr₂O₇ (primary standard grade, previously dried at 103 °C for 2 hours) in distilled water and dilute to 1 L.</li>
                        <li><strong>Sulphuric acid reagent:</strong> Add 5.5 g Ag₂SO₄ per kg of conc. H₂SO₄. Let it stand for a day or two to dissolve.</li>
                        <li><strong>Ferroin indicator solution:</strong> Dissolve 1.485 g 1, 10-phenanthroline monohydrate and 695 mg FeSO₄·7H₂O in distilled water and dilute to 100 mL.</li>
                        <li><strong>Standard ferrous ammonium sulphate (FAS), titrant, 0.25M:</strong> Dissolve 98 g Fe(NH₄)₂(SO₄)₂·6H₂O in distilled water, add 20 mL conc. H₂SO₄, cool and dilute to 1 L. Standardise daily.</li>
                        <li><strong>Mercuric Sulphate, HgSO₄, powder.</strong></li>
                        <li><strong>Potassium hydrogen phthalate (KHP) standard:</strong> Weigh 425 mg KHP in distilled water and dilute to 1 L. This solution has a theoretical COD of 500 µgO₂/mL.</li>
                    </ul>
                `,
                procedure: [
                    'Add 50 mL of sample or an aliquot diluted to 50 mL with distilled water in a 500 mL refluxing flask. Add 1g HgSO₄, few glass beads, and 5 mL sulphuric acid reagent, mix, cool. Add 25 mL of 0.0417M K₂Cr₂O₇ solution, mix.',
                    'Connect the flask to the condenser and turn on cooling water, add additional 70 mL of sulphuric acid reagent through open end of condenser, with swirling and mixing.',
                    'Reflux for 2 hours; cool, wash down condenser with distilled water to double the volume of contents, cool.',
                    'Add 2 drops of Ferroin indicator, titrate with FAS the remaining potassium dichromate, until a colour change from bluish green to reddish brown. Also reflux and titrate a distilled water blank with reagents.',
                    'Use standard 0.00417M K₂Cr₂O₇, and 0.025M FAS, when analysing very low COD samples.',
                    'Evaluate the technique and reagents by conducting the test on potassium hydrogen phthalate solution.',
                ],
                calculation: 'COD (mg/L) = [ (A - B) &times; M &times; 8000 ] / mL of sample<br/><p class="text-xs mt-2">where: A = mL of FAS for blank, B = mL of FAS for sample, M = Molarity of FAS.</p><p class="text-sm mt-2"><b>Note:</b> Use smaller sample volumes and proportionally reduce quantities of chemicals as given in the following table.</p><table class="w-full text-left border-collapse mt-2"><thead><tr><th class="border p-2">Sample size (mL)</th><th class="border p-2">K₂Cr₂O₇ (mL)</th><th class="border p-2">H₂SO₄ (mL)</th><th class="border p-2">HgSO₄ (g)</th><th class="border p-2">FAS (mole/L)</th><th class="border p-2">Final volume (mL)</th></tr></thead><tbody><tr><td class="border p-2">10.0</td><td class="border p-2">5.0</td><td class="border p-2">15</td><td class="border p-2">0.2</td><td class="border p-2">0.05</td><td class="border p-2">70</td></tr><tr><td class="border p-2">20.0</td><td class="border p-2">10.0</td><td class="border p-2">30</td><td class="border p-2">0.4</td><td class="border p-2">0.10</td><td class="border p-2">140</td></tr><tr><td class="border p-2">30.0</td><td class="border p-2">15.0</td><td class="border p-2">45</td><td class="border p-2">0.6</td><td class="border p-2">0.15</td><td class="border p-2">210</td></tr><tr><td class="border p-2">40.0</td><td class="border p-2">20.0</td><td class="border p-2">60</td><td class="border p-2">0.8</td><td class="border p-2">0.20</td><td class="border p-2">280</td></tr><tr><td class="border p-2">50.0</td><td class="border p-2">25.0</td><td class="border p-2">75</td><td class="border p-2">1.0</td><td class="border p-2">0.25</td><td class="border p-2">350</td></tr></tbody></table>'
            },
            {
                id: 'chloride',
                title: 'Chloride',
                intro: 'Chloride ions are naturally present in water but high concentrations can indicate pollution from industrial wastes or sewage. The test is performed using Mohr\'s method.',
                apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Potassium chromate indicator solution.</strong></li>
                        <li><strong>Standard silver nitrate titrant, 0.0141N:</strong> Dissolve 2.395 g AgNO₃ to 1 L.</li>
                        <li><strong>Standard sodium chloride, 0.0141N:</strong> Dissolve 824.0 mg NaCl to 1 L.</li>
                    </ul>
                `,
                procedure: [
                    'Use a 100 mL sample or a suitable portion diluted to 100 mL.',
                    'Add 1 mL K₂CrO₄ indicator, titrate with AgNO₃ titrant to a pinkish yellow end point.',
                    'Also perform a blank titration.',
                ],
                calculation: 'Chloride (mg/L) = [ (A - B) &times; N &times; 35450 ] / mL of sample<br/><p class="text-xs mt-2">where A = mL titration for sample, B = mL titration for blank, N = normality of AgNO₃.</p>'
            },
            {
                id: 'hardness',
                title: 'Total Hardness',
                intro: 'Water hardness is mainly due to calcium and magnesium ions. It is tested using the EDTA titration method.',
                apparatus: '<p>Standard laboratory glassware.</p>',
                reagents: `<h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solution:</strong> Dissolve 16.9 g NH₄Cl in 143 mL conc. NH₄OH. Add 1.25 g magnesium salt of EDTA and dilute to 250 mL with distilled water.</li>
                        <li><strong>Indicator:</strong> Eriochrome Black T sodium salt. Grind 0.5 g dye with 100 g NaCl.</li>
                        <li><strong>Standard EDTA titrant, 0.01M:</strong> Dissolve 3.723 g of disodium salt of EDTA in distilled water and dilute to 1000 mL.</li>
                        <li><strong>Standard Calcium Solution:</strong> Dissolve 1.000 g CaCO₃ in HCl and dilute to 1000 mL.</li>
                    </ul>
                    <p class="text-xs mt-2"><strong>Note:</strong> If the Mg salt of EDTA is unavailable, prepare buffer by mixing 1.179g disodium EDTA, 780mg MgSO₄·7H₂O, 16.9g NH₄Cl, and 143ml conc. NH₄OH.</p>`,
                procedure: [
                    'Dilute 25 mL sample to 50 mL with distilled water.',
                    'Add 1 to 2 mL buffer solution to give a pH of 10.0 to 10.1.',
                    'Add 1 to 2 drops of indicator solution and titrate with EDTA titrant to change in colour from reddish tinge to blue.',
                    'Complete titration within 5 min after buffer addition.',
                    'Standardise the EDTA titrant against standard calcium solution.',
                ],
                calculation: 'Total Hardness (as mg/L CaCO₃) = (A &times; B &times; 1000) / mL of sample<br/><p class="text-xs mt-2">where A = mL EDTA titrated for sample, B = mg CaCO₃ equivalent to 1.00 mL EDTA titrant.</p>'
            },
            {
                id: 'do',
                title: 'Dissolved Oxygen (DO)',
                intro: 'Dissolved oxygen is essential for aquatic life and is a key indicator of water quality. It is tested using the Winkler method.',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>DO sampler.</li><li>BOD bottles, 300 mL.</li></ul>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Manganous sulphate solution:</strong> Dissolve 480 g MnSO₄·4H₂O to 1 L.</li>
                        <li><strong>Alkali-iodide-azide reagent:</strong> Dissolve 500 g NaOH, 135 g NaI, and 10 g NaN₃ to 1 L.</li>
                        <li><strong>Sulphuric acid, conc.</strong></li>
                        <li><strong>Starch indicator.</strong></li>
                        <li><strong>Standard sodium thiosulphate titrant, 0.025N:</strong> Dissolve 6.205 g Na₂S₂O₃·5H₂O to 1 L.</li>
                    </ul>
                `,
                procedure: [
                    'Carefully fill a 300 mL BOD bottle with water, avoiding air bubbles.',
                    'Add 2 mL of <strong>manganese sulfate solution</strong>, then 2 mL of <strong>alkali-iodide-azide reagent</strong>. Stopper and mix.',
                    'Allow the precipitate to settle.',
                    'Add 2 mL of <strong>concentrated sulfuric acid</strong> and mix until completely dissolved.',
                    'Titrate a specific volume (e.g., 201 mL) with standard <strong>sodium thiosulfate (0.025N)</strong> until a pale straw color remains.',
                    'Add 1-2 mL of <strong>starch indicator</strong> (the solution will turn blue).',
                    'Continue titrating until the blue color disappears completely. Note the volume.',
                ],
                calculation: 'DO (mg/L) = (V of Titrant &times; Molarity of Titrant &times; 8000) / 200'
            },
            {
                id: 'ph',
                title: 'pH',
                intro: 'Potentiometric method.',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>pH meter with temperature compensation.</li><li>Reference and Glass electrodes.</li></ul>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solutions:</strong> Commercially available or prepared for pH 4.00, 6.86, and 9.18.</li>
                    </ul>
                `,
                procedure: [
                  'Calibrate pH meter using two buffer solutions (typically pH 4 and 7) according to manufacturer’s instructions.',
                  'Rinse electrodes with distilled water, blot dry, and immerse in the sample.',
                  'Read the pH after equilibrium is established.',
                ],
                calculation: 'Read directly from the meter.'
            },
             {
                id: 'tds',
                title: 'Total Dissolved Solids (TDS)',
                intro: 'TDS is the total amount of all dissolved organic and inorganic solids in water. It is tested using the gravimetric method.',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>Evaporating dishes.</li><li>Drying oven, 180±2°C.</li><li>Desiccator.</li><li>Analytical balance.</li></ul>',
                reagents: '<p>Not required.</p>',
                procedure: [
                    'Take a clean, dry, pre-weighed beaker (W₁).',
                    'Place a known volume (e.g., 100 mL) of filtered water into the beaker.',
                    'Evaporate the water completely on a hot plate or water bath.',
                    'Dry the beaker in a hot air oven at 180°C for one hour.',
                    'Cool the beaker in a desiccator and weigh it again (W₂).',
                ],
                calculation: 'TDS (mg/L) = [ (W₂ - W₁) in mg &times; 1000 ] / Volume of Sample (mL)'
            },
             {
                id: 'tss',
                title: 'Total Suspended Solids (TSS)',
                intro: 'TSS is a measure of solid particles that remain on a filter paper.',
                apparatus: '<ul class="list-disc list-outside pl-5 space-y-1"><li>Glass-fibre filter disk.</li><li>Filtration apparatus.</li><li>Drying oven, 103–105°C.</li><li>Analytical balance.</li></ul>',
                reagents: '<p>Not required.</p>',
                procedure: [
                    'Filter a known volume of water through a pre-weighed glass fiber filter paper (W₁).',
                    'Dry the filter paper with the retained solids in a hot air oven at 103-105°C for one hour.',
                    'Cool in a desiccator and weigh again (W₂).',
                ],
                calculation: 'TSS (mg/L) = [ (W₂ - W₁) in mg &times; 1000 ] / Volume of Sample (mL)'
            },
            {
                id: 'fluoride',
                title: 'Fluoride',
                intro: 'Determination of fluoride using SPADNS spectrophotometric method or Ion Selective Electrode method.',
                apparatus: '<p>Spectrophotometer (570 nm) or Ion Selective Electrode setup.</p>',
                reagents: `
                    <h4>Reagents for SPADNS Method</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard fluoride solution.</strong></li>
                        <li><strong>SPADNS solution.</strong></li>
                        <li><strong>Zirconyl-acid reagent.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Distill sample if necessary.',
                    'Add SPADNS and Zirconyl-acid reagent to the sample.',
                    'Read absorbance at 570 nm and calculate concentration from calibration curve.',
                ],
                calculation: 'Read fluoride concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'iron',
                title: 'Iron',
                intro: 'Spectrophotometric determination of iron using the Phenanthroline method.',
                 apparatus: '<p>Spectrophotometer (510 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Hydroxylamine solution.</strong></li>
                        <li><strong>Phenanthroline solution.</strong></li>
                        <li><strong>Standard iron solution.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add hydrochloric acid and hydroxylamine solution to the sample.',
                    'Add buffer and phenanthroline solution.',
                    'Read absorbance at 510 nm.',
                ],
                calculation: 'Read iron concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'magnesium',
                title: 'Magnesium',
                intro: 'Calculation from total hardness and calcium hardness.',
                apparatus: '<p>Not required.</p>',
                reagents: '<p>Not required.</p>',
                procedure: [
                    'Determine Total Hardness.',
                    'Determine Calcium Hardness.',
                ],
                calculation: 'Mg (mg/L) = [Total Hardness (mg/L as CaCO₃) - Calcium Hardness (mg/L as CaCO₃)] x 0.243'
            },
            {
                id: 'manganese',
                title: 'Manganese',
                intro: 'Spectrophotometric determination of manganese using the Persulphate method.',
                apparatus: '<p>Spectrophotometer (525 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Special reagent (HgSO₄, HNO₃, H₃PO₄, AgNO₃).</strong></li>
                        <li><strong>Ammonium persulphate.</strong></li>
                        <li><strong>Standard manganese solution.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add special reagent to the sample and boil.',
                    'Add ammonium persulphate and boil.',
                    'Read absorbance at 525 nm.',
                ],
                calculation: 'Read manganese concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'ammonia',
                title: 'Nitrogen, Ammonia',
                intro: 'Determination of ammonia by distillation and titration, phenate, or ion selective electrode methods.',
                 apparatus: '<p>Distillation apparatus, Spectrophotometer (640 nm), or Ion Selective Electrode setup.</p>',
                reagents: `
                    <h4>Reagents for Titrimetric Method</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Borate buffer.</strong></li>
                        <li><strong>Indicating boric acid solution.</strong></li>
                        <li><strong>Standard sulphuric acid, 0.02N.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Buffer the sample and distill the ammonia.',
                    'Collect the distillate in boric acid.',
                    'Titrate with standard sulfuric acid.',
                ],
                calculation: 'NH₃-N (mg/L) = [ (A - B) &times; 280 ] / mL of sample'
            },
            {
                id: 'nitrate',
                title: 'Nitrogen, Nitrate',
                intro: 'Determination by calculation from TON and NO₂-N, or by ion selective electrode, or UV spectrophotometric methods.',
                apparatus: '<p>Spectrophotometer or Ion Selective Electrode setup.</p>',
                reagents: `
                    <h4>Reagents for UV Method</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Standard Nitrate solution.</strong></li>
                        <li><strong>Hydrochloric acid solution, 1N.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add HCl to the sample.',
                    'Read absorbance at 220 nm (for nitrate) and 275 nm (for organic interference).',
                ],
                calculation: 'Read nitrate concentration (mg N/L) from the calibration curve.'
            },
             {
                id: 'nitrite',
                title: 'Nitrogen, Nitrite',
                intro: 'Spectrophotometric determination of nitrite using the Sulphanilamide method.',
                apparatus: '<p>Spectrophotometer (543 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Colour reagent.</strong></li>
                        <li><strong>Standard nitrite solution.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add colour reagent to the sample.',
                    'Read absorbance at 543 nm between 10 min and 2 h.',
                ],
                calculation: 'Read nitrite concentration (mg N/L) from the calibration curve.'
            },
             {
                id: 'organic_nitrogen',
                title: 'Nitrogen, Organic',
                intro: 'Determination of organic nitrogen by the Kjeldahl method.',
                apparatus: '<p>Digestion and Distillation apparatus.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Digestion reagent (K₂SO₄, CuSO₄, H₂SO₄).</strong></li>
                        <li><strong>Sodium hydroxide thiosulphate reagent.</strong></li>
                        <li><strong>Indicating boric acid solution.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Remove ammonia from the sample.',
                    'Digest the remaining sample with digestion reagent.',
                    'Distill the ammonia and titrate with standard acid.',
                ],
                calculation: 'Organic N (mg/L) = [ (A - B) &times; 280 ] / mL of sample'
            },
             {
                id: 'ton',
                title: 'Nitrogen, Total Oxidised (NO₂ + NO₃)',
                intro: 'Determination of total oxidized nitrogen by cadmium reduction and spectrophotometric method.',
                 apparatus: '<p>Reduction column, Spectrophotometer (543 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Copper-cadmium granules.</strong></li>
                        <li><strong>Ammonium chloride-EDTA solution.</strong></li>
                        <li><strong>Colour reagent.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Pass sample through a cadmium reduction column to convert nitrate to nitrite.',
                    'Follow the spectrophotometric method for nitrite.',
                ],
                calculation: 'Read TON concentration (mg N/L) from the calibration curve.'
            },
            {
                id: 'odour',
                title: 'Odour',
                intro: 'Qualitative human receptor method.',
                apparatus: '<p>Odourless glass bottle.</p>',
                reagents: '<p>Not required.</p>',
                procedure: [
                    'Fill a cleaned odourless bottle half - full of sample, insert stopper, shake vigorously for 2 to 3 seconds and then quickly observe the odour.',
                ],
                calculation: 'Report the odour as: odour free, rotten egg, burnt sugar, soapy, fishy, septic, aromatic, chlorinous, alcoholic odour or any other specific odour.'
            },
             {
                id: 'orthophosphate',
                title: 'Phosphorus, Ortho Phosphate',
                intro: 'Spectrophotometric determination of orthophosphate using the Ascorbic Acid method.',
                 apparatus: '<p>Spectrophotometer (880 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Sulphuric acid, 5N.</strong></li>
                        <li><strong>Potassium antimonyl tartrate solution.</strong></li>
                        <li><strong>Ammonium molybdate solution.</strong></li>
                        <li><strong>Ascorbic acid, 0.1M.</strong></li>
                        <li><strong>Combined reagent (mixture of all four reagents).</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add combined reagent to the sample.',
                    'Wait for 10 to 30 minutes and read absorbance at 880 nm.',
                ],
                calculation: 'o-PO₄ (mg P/L) = [mg P from calibration curve &times; 1000] / mL of sample'
            },
             {
                id: 'total_phosphorus',
                title: 'Phosphorus, Total',
                intro: 'Determination of total phosphorus by digestion and ascorbic acid spectrophotometric method.',
                apparatus: '<p>Hot plate, Spectrophotometer (880 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Persulphate.</strong></li>
                        <li><strong>Sulphuric acid, 10N.</strong></li>
                        <li><strong>Combined reagent (as for orthophosphate).</strong></li>
                    </ul>
                `,
                procedure: [
                    'Digest the sample with persulphate and sulfuric acid.',
                    'Neutralize and follow the procedure for orthophosphate.',
                ],
                calculation: 'Total P (mg/L) = [mg P from calibration curve &times; 1000] / mL of sample'
            },
            {
                id: 'potassium',
                title: 'Potassium',
                intro: 'Determination of potassium by flame emission photometric method.',
                 apparatus: '<p>Flame photometer.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock potassium solution (1000 mg K/L).</strong></li>
                    </ul>
                `,
                procedure: [
                    'Set instrument at 766.5 nm.',
                    'Prepare a calibration curve using standards.',
                    'Measure emission intensity in the sample.',
                ],
                calculation: 'Read potassium concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'silicate',
                title: 'Silicate',
                intro: 'Spectrophotometric determination of silicate by the ammonium molybdate method.',
                apparatus: '<p>Spectrophotometer (815 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Ammonium molybdate reagent.</strong></li>
                        <li><strong>Oxalic acid solution.</strong></li>
                        <li><strong>Reducing agent.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add HCl and ammonium molybdate to sample, followed by oxalic acid and reducing agent.',
                    'Read absorbance at 815 nm.',
                ],
                calculation: 'Read silicate concentration (mg SiO₂/L) from the calibration curve.'
            },
            {
                id: 'sodium',
                title: 'Sodium',
                intro: 'Determination of sodium by flame emission photometric method.',
                apparatus: '<p>Flame photometer.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Stock sodium solution (1000 mg Na/L).</strong></li>
                    </ul>
                `,
                procedure: [
                    'Set instrument at 589 nm.',
                    'Prepare a calibration curve using standards.',
                    'Measure emission intensity in the sample.',
                ],
                calculation: 'Read sodium concentration (mg/L) from the calibration curve.'
            },
            {
                id: 'sulphate',
                title: 'Sulphate',
                intro: 'Determination of sulphate by the nephelometric method.',
                 apparatus: '<p>Nephelometric turbidity meter or spectrophotometer (420 nm).</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Buffer solution.</strong></li>
                        <li><strong>Barium chloride crystals.</strong></li>
                    </ul>
                `,
                procedure: [
                    'Add buffer solution to the sample.',
                    'Add barium chloride crystals and stir for 60 seconds.',
                    'Measure turbidity after 5 minutes.',
                ],
                calculation: 'Read sulphate concentration (mg/L) from the calibration curve.'
            },
             {
                id: 'temperature',
                title: 'Temperature',
                intro: 'Mercury thermometer method.',
                apparatus: '<p>Mercury thermometer.</p>',
                reagents: '<p>Not required.</p>',
                procedure: [
                    'Immerse thermometer in the sample up to the mark specified by the manufacturer and read temperature after equilibration.',
                ],
                calculation: 'Read directly from the thermometer.'
            },
            {
                id: 'turbidity',
                title: 'Turbidity',
                intro: 'Nephelometric method.',
                apparatus: '<p>Nephelometric turbidity meter.</p>',
                reagents: `
                    <h4>Reagents</h4>
                    <ul class="list-disc list-outside pl-5 space-y-1">
                        <li><strong>Formazin polymer suspension (4000 NTU stock).</strong></li>
                    </ul>
                `,
                procedure: [
                    'Calibrate nephelometer according to manufacturer’s operating instructions.',
                    'Gently agitate sample. Wait until air bubbles disappear and pour sample into cell. Read turbidity directly from instrument display.',
                ],
                calculation: 'Read directly from the instrument display.'
            }
        ]
    }
}

