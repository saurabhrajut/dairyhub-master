
export const etpModalContent = {
    hi: {
        title: "Effluent Treatment Plant (ETP)",
        description: "डेयरी उद्योग में अपशिष्ट जल उपचार के लिए एक व्यापक गाइड।",
        tabs: {
            intro: "परिचय",
            processes: "उपचार प्रक्रियाएं",
            benefits: "लाभ",
            factors: "प्रमुख कारक",
            challenges: "चुनौतियां",
            future: "भविष्य का दृष्टिकोण"
        },
        sections: {
            executive_summary: {
                title: "कार्यकारी सारांश",
                content: "<p>डेयरी उद्योग, वैश्विक खाद्य उत्पादन का एक आधार, उच्च जैविक भार, उतार-चढ़ाव वाले पीएच, और वसा, तेल, ग्रीस (FOG) और पोषक तत्वों की महत्वपूर्ण सांद्रता की विशेषता वाले अपशिष्ट जल की पर्याप्त मात्रा उत्पन्न करता है। इस अपशिष्ट जल का प्रभावी प्रबंधन केवल एक नियामक दायित्व नहीं है, बल्कि पर्यावरण संरक्षण, संसाधन प्रबंधन और दीर्घकालिक आर्थिक व्यवहार्यता के लिए एक रणनीतिक अनिवार्यता है। एफ्लुएंट ट्रीटमेंट प्लांट (ETPs) इस औद्योगिक अपशिष्ट जल को शुद्ध करने के लिए सावधानीपूर्वक इंजीनियर किए गए सिस्टम हैं, जो इसके सुरक्षित निर्वहन या लाभकारी पुन: उपयोग को सक्षम करते हैं। यह रिपोर्ट डेयरी क्षेत्र के भीतर ETPs की एक व्यापक परीक्षा प्रदान करती है, जिसमें उनकी मूलभूत अवधारणाओं, इसमें शामिल बहु-चरणीय प्रक्रियाओं, उनके द्वारा प्रदान किए जाने वाले बहुआयामी पर्यावरणीय, आर्थिक और परिचालन लाभों, और उनके डिजाइन, प्रदर्शन और नियामक अनुपालन को प्रभावित करने वाले महत्वपूर्ण कारकों का विवरण है। इसके अलावा, यह उभरती प्रौद्योगिकियों के परिदृश्य और डेयरी उद्योग को अधिक टिकाऊ और चक्रीय भविष्य की ओर ले जाने की उनकी क्षमता की पड़ताल करता है, जो अपशिष्ट को नवीकरणीय ऊर्जा और कृषि उर्वरकों जैसे मूल्यवान संसाधनों में बदल देता है।</p>"
            },
            introduction: {
                title: "डेयरी अपशिष्ट जल उपचार का परिचय",
                content: `<p>एफ्लुएंट ट्रीटमेंट प्लांट (ETP) एक सावधानीपूर्वक डिज़ाइन की गई प्रक्रिया प्रणाली का प्रतिनिधित्व करता है जो औद्योगिक अपशिष्ट जल के उपचार के लिए इंजीनियर की जाती है। इस अनुपचारित औद्योगिक अपशिष्ट जल को अक्सर उपचार प्रणाली में प्रवेश करने पर "इन्फ्लुएंट" के रूप में संदर्भित किया जाता है। ETP का प्राथमिक उद्देश्य इस इन्फ्लुएंट को एक ऐसे मानक तक शुद्ध करना है जो पर्यावरण में सुरक्षित और अनुपालन निर्वहन के लिए या औद्योगिक संचालन के भीतर लाभकारी पुन: उपयोग के लिए उपयुक्त हो, जिससे एक अधिक चक्रीय अर्थव्यवस्था को बढ़ावा मिलता है।</p>`,
                subsections: {
                    characteristics: {
                        title: "डेयरी उद्योग अपशिष्ट जल की विशेषताएं",
                        content: `<p>डेयरी उद्योग का अपशिष्ट जल अपनी विशिष्ट विशेषताओं के कारण उपचार के लिए एक अनूठी और जटिल चुनौती प्रस्तुत करता है। यह आमतौर पर सफेद रंग का होता है, इसमें एक अप्रिय गंध होती है, और इसमें उच्च प्रदूषक भार होता है। इस भार में रासायनिक ऑक्सीजन मांग (COD), जैविक ऑक्सीजन मांग (BOD), और कुल निलंबित ठोस (TSS) की महत्वपूर्ण सांद्रता शामिल है।</p>`,
                        table: {
                            header1: "पैरामीटर (mg/l)",
                            header2: "मक्खन उत्पाद",
                            header3: "क्रीम उत्पाद",
                            header4: "दूध उत्पाद",
                            header5: "पनीर उत्पाद",
                            header6: "पाउडर उत्पाद",
                            rows: [
                                { param: "BOD", butter: "200-2500", cream: "2500", milk: "500-1300", cheese: "500-5000", powdered: "1500" },
                                { param: "TSS", butter: "700-5000", cream: "3000", milk: "100-450", cheese: "-", powdered: "100-3000" },
                                { param: "FOG", butter: "-", cream: "-", milk: "-", cheese: "350-2750", powdered: "-" },
                                { param: "COD", butter: "-", cream: "-", milk: "1000-2500", cheese: "-", powdered: "3000" },
                                { param: "TN", butter: "-", cream: "-", milk: "-", cheese: "-", powdered: "250" },
                                { param: "TP", butter: "-", cream: "-", milk: "-", cheese: "-", powdered: "20" }
                            ]
                        }
                    }
                }
            },
            treatment_processes: {
                title: "डेयरी अपशिष्ट जल उपचार प्रक्रियाओं के चरण",
                content: `<p>डेयरी उद्योग में अपशिष्ट जल उपचार में आम तौर पर अनुक्रमिक चरणों की एक श्रृंखला शामिल होती है, प्रत्येक को विशिष्ट प्रकार के प्रदूषकों को हटाने के लिए डिज़ाइन किया गया है, जो धीरे-धीरे इन्फ्लुएंट को निर्वहन या पुन: उपयोग मानकों को पूरा करने के लिए शुद्ध करता है।</p>`,
                subsections: {
                    preliminary: {
                        title: "प्रारंभिक उपचार",
                        content: `<p>प्रारंभिक उपचार अपशिष्ट जल शुद्धि का प्रारंभिक चरण है, जो मुख्य रूप से बड़े आकार की अशुद्धियों के भौतिक पृथक्करण पर केंद्रित है। इन अशुद्धियों में कपड़े, प्लास्टिक, लकड़ी के लट्ठे और कागज जैसी सामग्री शामिल हो सकती है।</p>`
                    },
                    primary: {
                        title: "प्राथमिक उपचार",
                        content: `<p>प्राथमिक उपचार तैरने वाले और बसने योग्य सामग्रियों को हटाने पर केंद्रित है, जिसमें निलंबित ठोस और जैविक पदार्थ का एक महत्वपूर्ण हिस्सा शामिल है, जो प्रारंभिक उपचार के दौरान नहीं पकड़े गए थे।</p>`
                    },
                    secondary: {
                        title: "माध्यमिक उपचार (जैविक उपचार)",
                        content: `<p>माध्यमिक उपचार अपशिष्ट जल उपचार में कार्बनिक पदार्थों के क्षरण का मूल है। यह चरण मुख्य रूप से जैविक प्रक्रियाओं का उपयोग करता है जहां विभिन्न सूक्ष्मजीव कार्बनिक प्रदूषकों का उपभोग और विघटन करते हैं, जिससे अपशिष्ट जल को प्रभावी ढंग से साफ किया जाता है।</p>`
                    },
                    tertiary: {
                        title: "तृतीयक/उन्नत उपचार",
                        content: `<p>तृतीयक, या उन्नत, उपचार अपशिष्ट जल शुद्धि का अंतिम और सबसे कठोर चरण है, जिसे माध्यमिक उपचार मानकों से परे प्रवाह की गुणवत्ता में और सुधार करने के लिए डिज़ाइन किया गया है। इसका प्राथमिक लक्ष्य शेष अकार्बनिक यौगिकों, हठी पदार्थों (जैसे नाइट्रोजन और फास्फोरस जो पूरी तरह से जैविक रूप से नहीं हटाए गए थे), और हानिकारक सूक्ष्मजीवों (बैक्टीरिया, वायरस और परजीवी) को हटाना है।</p>`
                    }
                }
            },
            benefits: {
                title: "डेयरी अपशिष्ट जल उपचार के लाभ",
                content: `<p>डेयरी उद्योग में प्रभावी अपशिष्ट जल उपचार को लागू करने से कई लाभ मिलते हैं, जो केवल अनुपालन से परे पर्यावरणीय, आर्थिक और परिचालन लाभों को शामिल करते हैं।</p>`,
                subsections: {
                    environmental: {
                        title: "पर्यावरणीय लाभ",
                        content: `<p>डेयरी अपशिष्ट जल का उचित उपचार जलीय पारिस्थितिक तंत्र और सार्वजनिक स्वास्थ्य की सुरक्षा के लिए सर्वोपरि है। अनुपचारित प्रवाह, जो उच्च कार्बनिक पदार्थ भार, रसायनों और अतिरिक्त पोषक तत्वों से लदा होता है, ऑक्सीजन के स्तर को कम करके जलीय जीवन को गंभीर रूप से नुकसान पहुंचा सकता है और इन जल स्रोतों पर निर्भर मानव आबादी के लिए महत्वपूर्ण स्वास्थ्य जोखिम पैदा कर सकता है।</p>`
                    },
                    economic: {
                        title: "आर्थिक लाभ",
                        content: `<p>डेयरी अपशिष्ट जल के उपचार के आर्थिक लाभ आकर्षक हैं और केवल लागत से बचने से परे हैं। ऑन-साइट अपशिष्ट जल उपचार को लागू करने से अपशिष्ट निपटान और ताजे पानी की खरीद से जुड़ी लागत को कम करके पर्याप्त परिचालन बचत हो सकती है।</p>`
                    },
                    operational: {
                        title: "परिचालन लाभ",
                        content: `<p>प्रभावी अपशिष्ट जल उपचार एक बढ़ी हुई ब्रांड प्रतिष्ठा और प्रतिस्पर्धी बढ़त में महत्वपूर्ण योगदान देता है। एक मजबूत ETP एक कंपनी की स्थिरता रणनीति की आधारशिला के रूप में कार्य करता है।</p>`
                    }
                }
            },
            key_factors: {
                title: "ETP डिजाइन, संचालन और प्रभावशीलता को प्रभावित करने वाले प्रमुख कारक",
                content: `<p>डेयरी उद्योग में एक एफ्लुएंट ट्रीटमेंट प्लांट के सफल डिजाइन, संचालन और समग्र प्रभावशीलता को कारकों के एक जटिल अंतर्संबंध से प्रभावित किया जाता है, जो अपशिष्ट जल के आंतरिक गुणों से लेकर बाहरी नियामक और आर्थिक दबावों तक होता है।</p>`,
                subsections: {
                    characteristics: {
                        title: "अपशिष्ट जल की विशेषताएं और परिवर्तनशीलता",
                        content: `<p>डेयरी अपशिष्ट जल की अंतर्निहित विशेषताएं और परिवर्तनशीलता ETP डिजाइन और संचालन पर गहरा प्रभाव डालती है।</p>`
                    },
                    compliance: {
                        title: "नियामक अनुपालन और मानक",
                        content: `<p>कानूनी आवश्यकताएं और नियामक दबाव एक उपचार प्रणाली के चयन और विन्यास को प्रभावित करने वाले सबसे महत्वपूर्ण कारक के रूप में उभरते हैं।</p>`,
                        table: {
                            header1: "पैरामीटर",
                            header2: "मानक सीमा (mg/l, जब तक निर्दिष्ट न हो)",
                            rows: [
                                { param: "pH", limit: "6.5 – 8.5" },
                                { param: "BOD", limit: "100" },
                                { param: "Suspended Solids", limit: "150" },
                                { param: "Oil and Grease", limit: "10" }
                            ]
                        }
                    },
                    technology: {
                        title: "तकनीकी चयन और उपयुक्तता",
                        content: `<p>उपयुक्त तकनीक का चयन एक महत्वपूर्ण कारक है। प्रत्येक उद्योग के अपशिष्ट जल की अनूठी विशेषताओं के कारण सबसे उपयुक्त उपचार तकनीक विकसित करना एक महत्वपूर्ण चुनौती है।</p>`
                    }
                }
            },
            challenges: {
                title: "डेयरी अपशिष्ट जल उपचार में चुनौतियां",
                content: `<p>डेयरी उद्योग को अपने अपशिष्ट जल के कुशल और किफायती उपचार में कई अलग-अलग चुनौतियों का सामना करना पड़ता है, जो मुख्य रूप से इसके प्रवाह की अनूठी संरचना और उतार-चढ़ाव वाली प्रकृति से उत्पन्न होती हैं।</p>`
            },
            future_outlook: {
                title: "उभरती प्रौद्योगिकियां और भविष्य का दृष्टिकोण",
                content: `<p>अपशिष्ट जल उपचार का विकसित परिदृश्य निरंतर नवाचार द्वारा चिह्नित है, जो तेजी से कड़े पर्यावरणीय नियमों और संसाधन वसूली और चक्रीय अर्थव्यवस्था सिद्धांतों पर बढ़ते जोर से प्रेरित है।</p>`,
                subsections: {
                    innovations: {
                        title: "नवाचार",
                        content: `<p>कई उभरती हुई प्रौद्योगिकियां डेयरी अपशिष्ट जल प्रबंधन की स्थिरता को बढ़ाने के लिए महत्वपूर्ण वादा करती हैं।</p>`
                    },
                    conclusion: {
                        title: "निष्कर्ष",
                        content: `<p>डेयरी अपशिष्ट जल उपचार का भविष्य एकीकृत, संसाधन-कुशल प्रणालियों की ओर एक निरंतर बदलाव की विशेषता है।</p>`
                    }
                }
            }
        }
    },
    en: {
        title: "Effluent Treatment Plant (ETP)",
        description: "A comprehensive guide to wastewater treatment in the dairy industry.",
        tabs: {
            intro: "Introduction",
            processes: "Treatment Processes",
            benefits: "Benefits",
            factors: "Key Factors",
            challenges: "Challenges",
            future: "Future Outlook"
        },
        sections: {
            executive_summary: {
                title: "Executive Summary",
                content: "<p>The dairy industry, a cornerstone of global food production, generates substantial volumes of wastewater characterized by high organic loads, fluctuating pH, and significant concentrations of fats, oils, grease (FOG), and nutrients. Effective management of this wastewater is not merely a regulatory obligation but a strategic imperative for environmental protection, resource stewardship, and long-term economic viability. Effluent Treatment Plants (ETPs) are meticulously engineered systems designed to purify this industrial wastewater, enabling its safe discharge or beneficial reuse. This report provides a comprehensive examination of ETPs within the dairy sector, detailing their fundamental concepts, the multi-stage processes involved, the multifaceted environmental, economic, and operational advantages they confer, and the critical factors that influence their design, performance, and regulatory compliance. Furthermore, it explores the landscape of emerging technologies and their potential to drive the dairy industry towards a more sustainable and circular future, transforming waste into valuable resources such as renewable energy and agricultural fertilizers.</p>"
            },
            introduction: {
                title: "Introduction to Dairy Wastewater Treatment",
                content: `<p>An Effluent Treatment Plant (ETP) represents a meticulously designed process system engineered to treat industrial wastewater. This untreated industrial wastewater is often referred to as "influent" upon its entry into the treatment system. The primary objective of an ETP is to purify this influent to a standard suitable for either safe and compliant discharge into the environment or for beneficial reuse within industrial operations, thereby fostering a more circular economy.</p>`,
                subsections: {
                    characteristics: {
                        title: "Characteristics of Dairy Industry Wastewater",
                        content: `<p>Dairy industry wastewater presents a unique and complex challenge for treatment due to its distinct characteristics. It is typically white in color, possesses an unpleasant odor, and carries a high pollutant load. This load includes significant concentrations of Chemical Oxygen Demand (COD), Biological Oxygen Demand (BOD), and Total Suspended Solids (TSS).</p>`,
                        table: {
                            header1: "Parameter (mg/l)",
                            header2: "Butter Products",
                            header3: "Cream Products",
                            header4: "Milk Products",
                            header5: "Cheese Products",
                            header6: "Powdered Products",
                            rows: [
                                { param: "BOD", butter: "200-2500", cream: "2500", milk: "500-1300", cheese: "500-5000", powdered: "1500" },
                                { param: "TSS", butter: "700-5000", cream: "3000", milk: "100-450", cheese: "-", powdered: "100-3000" },
                                { param: "FOG", butter: "-", cream: "-", milk: "-", cheese: "350-2750", powdered: "-" },
                                { param: "COD", butter: "-", cream: "-", milk: "1000-2500", cheese: "-", powdered: "3000" },
                                { param: "TN", butter: "-", cream: "-", milk: "-", cheese: "-", powdered: "250" },
                                { param: "TP", butter: "-", cream: "-", milk: "-", cheese: "-", powdered: "20" }
                            ]
                        }
                    }
                }
            },
            treatment_processes: {
                title: "Stages of Dairy Wastewater Treatment Processes",
                content: `<p>Wastewater treatment in the dairy industry typically involves a series of sequential stages, each designed to remove specific types of pollutants, progressively purifying the influent to meet discharge or reuse standards.</p>`,
                subsections: {
                    preliminary: {
                        title: "Preliminary Treatment",
                        content: `<p>Preliminary treatment constitutes the initial stage of wastewater purification, primarily focused on the physical separation of large-sized impurities. These impurities can include materials such as cloth, plastics, wood logs, and paper.</p>`
                    },
                    primary: {
                        title: "Primary Treatment",
                        content: `<p>Primary treatment focuses on the removal of floating and settleable materials, including suspended solids and a significant portion of organic matter, that were not captured during the preliminary treatment stage.</p>`
                    },
                    secondary: {
                        title: "Secondary Treatment (Biological Treatment)",
                        content: `<p>Secondary treatment forms the core of organic matter degradation in wastewater treatment. This stage primarily utilizes biological processes where various microorganisms consume and break down organic pollutants, effectively cleaning the wastewater.</p>`
                    },
                    tertiary: {
                        title: "Tertiary/Advanced Treatment",
                        content: `<p>Tertiary, or advanced, treatment represents the final and most rigorous stage of wastewater purification, designed to further improve effluent quality beyond secondary treatment standards. Its primary goal is to remove remaining inorganic compounds, recalcitrant substances (such as nitrogen and phosphorus that were not fully removed biologically), and harmful microorganisms (bacteria, viruses, and parasites).</p>`
                    }
                }
            },
            benefits: {
                title: "Benefits of Dairy Wastewater Treatment",
                content: `<p>Implementing effective wastewater treatment in the dairy industry yields a wide array of benefits, extending beyond mere compliance to encompass significant environmental, economic, and operational advantages.</p>`,
                subsections: {
                    environmental: {
                        title: "Environmental Benefits",
                        content: `<p>Proper treatment of dairy wastewater is paramount for the protection of aquatic ecosystems and public health. Untreated effluent, laden with high organic matter loads, chemicals, and excess nutrients, can severely harm aquatic life by depleting oxygen levels and pose significant health risks to human populations relying on these water sources.</p>`
                    },
                    economic: {
                        title: "Economic Benefits",
                        content: `<p>The economic advantages of treating dairy wastewater are compelling and extend beyond merely avoiding costs. Implementing on-site wastewater treatment can lead to substantial operational savings by reducing costs associated with waste disposal and the procurement of fresh water.</p>`
                    },
                    operational: {
                        title: "Operational Benefits",
                        content: `<p>Effective wastewater treatment significantly contributes to an enhanced brand reputation and competitive edge. A robust ETP serves as a cornerstone of a company's sustainability strategy.</p>`
                    }
                }
            },
            key_factors: {
                title: "Key Factors Influencing ETP Design, Operation, and Effectiveness",
                content: `<p>The successful design, operation, and overall effectiveness of an Effluent Treatment Plant in the dairy industry are influenced by a complex interplay of factors, ranging from the intrinsic properties of the wastewater to external regulatory and economic pressures.</p>`,
                subsections: {
                    characteristics: {
                        title: "Wastewater Characteristics and Variability",
                        content: `<p>The inherent characteristics and variability of dairy wastewater exert a profound influence on ETP design and operation.</p>`
                    },
                    compliance: {
                        title: "Regulatory Compliance and Standards",
                        content: `<p>Legal requirements and regulatory pressures emerge as the most critical factors influencing the selection and configuration of a treatment system.</p>`,
                        table: {
                            header1: "Parameter",
                            header2: "Standard Limit (mg/l, unless specified)",
                            rows: [
                                { param: "pH", limit: "6.5 – 8.5" },
                                { param: "BOD", limit: "100" },
                                { param: "Suspended Solids", limit: "150" },
                                { param: "Oil and Grease", limit: "10" }
                            ]
                        }
                    },
                    technology: {
                        title: "Technological Selection and Suitability",
                        content: `<p>The selection of appropriate technology is a pivotal factor. Developing the most appropriate treatment technology is a significant challenge due to the unique characteristics of each industry's wastewater.</p>`
                    }
                }
            },
            challenges: {
                title: "Challenges in Dairy Wastewater Treatment",
                content: `<p>The dairy industry faces several distinct challenges in the efficient and affordable treatment of its wastewater, primarily stemming from the unique composition and fluctuating nature of its effluent.</p>`
            },
            future_outlook: {
                title: "Emerging Technologies and Future Outlook",
                content: `<p>The evolving landscape of wastewater treatment is marked by continuous innovation, driven by increasingly stringent environmental regulations and a growing emphasis on resource recovery and circular economy principles.</p>`,
                subsections: {
                    innovations: {
                        title: "Innovations",
                        content: `<p>Several emerging technologies hold significant promise for enhancing the sustainability of dairy wastewater management.</p>`
                    },
                    conclusion: {
                        title: "Conclusion",
                        content: `<p>The future of dairy wastewater treatment is characterized by a continued shift towards integrated, resource-efficient systems.</p>`
                    }
                }
            }
        }
    }
};

    