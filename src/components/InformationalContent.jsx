import React, { useState } from "react";

export const siteContent = {
  hi: {
    heroTitle: "Matka Satta की जानकारी, रिजल्ट और पुराने चार्ट",
    introParas: [
      "MatkaSatta.guru एक जानकारी आधारित वेबसाइट है, जहां Satta Matka से जुड़े इतिहास, सामान्य शब्दावली, मार्केट की जानकारी, रिजल्ट के प्रारूप, पुराने चार्ट और अन्य संबंधित विषयों के बारे में सामान्य जानकारी दी जाती है।",
      "Satta Matka का भारत में काफी पुराना इतिहास रहा है और समय के साथ इससे जुड़ी अपनी अलग शब्दावली और रिजल्ट फॉर्मेट विकसित हुए हैं। ओपन, क्लोज, जोड़ी, पैनल, चार्ट और मार्केट जैसे शब्द इस विषय से जुड़ी जानकारी में अक्सर देखने को मिलते हैं।",
      "यह वेबसाइट केवल सामान्य जानकारी और शैक्षणिक उद्देश्य के लिए है। MatkaSatta.guru किसी Matka मार्केट को चलाने या आयोजित करने, दांव स्वीकार करने, पैसे जमा करने या किसी प्रकार की जुआ सेवा उपलब्ध कराने का काम नहीं करता।"
    ],
    sections: [
      {
        id: "what-is-satta-matka",
        title: "Satta Matka क्या है?",
        paragraphs: [
          "Satta Matka भारत में विकसित हुआ एक पारंपरिक नंबर आधारित खेल है। इसके शुरुआती इतिहास को अक्सर भारत में, विशेष रूप से मुंबई से जुड़ी गतिविधियों के साथ जोड़ा जाता है।",
          "समय के साथ अलग-अलग मार्केट, नंबर फॉर्मेट और रिजल्ट सिस्टम विकसित हुए। पारंपरिक फॉर्मेट में ओपन नंबर, क्लोज नंबर, जोड़ी और पैनल जैसे शब्दों का इस्तेमाल किया जाता है।",
          "Satta Matka के इतिहास को लेकर अलग-अलग स्रोतों में अलग-अलग विवरण मिल सकते हैं। इसलिए इसके इतिहास से जुड़ी जानकारी को सामान्य ऐतिहासिक संदर्भ के रूप में देखना उचित है।"
        ]
      },
      {
        id: "result-and-market-info",
        title: "Matka Result और Market Information",
        paragraphs: [
          "Matka Result आम तौर पर किसी विशेष मार्केट से जुड़े नंबरों के रूप में प्रस्तुत किया जाता है। अलग-अलग मार्केट में रिजल्ट दिखाने का तरीका और इस्तेमाल होने वाली शब्दावली अलग हो सकती है।",
          "ऐतिहासिक स्रोतों में Kalyan, Milan, Rajdhani, Main Bazar और कई अन्य मार्केट नामों का उल्लेख मिलता है।",
          "MatkaSatta.guru पर इस तरह की जानकारी का उद्देश्य पाठकों को इस विषय की शब्दावली और पारंपरिक रिजल्ट फॉर्मेट समझने में मदद करना है।",
          "किसी पुराने नंबर या रिजल्ट को भविष्य के परिणाम की भविष्यवाणी या गारंटी के रूप में नहीं समझना चाहिए।"
        ]
      },
      {
        id: "open-close-jodi",
        title: "Open, Close और Jodi का मतलब क्या है?",
        lead: "अगर आप Matka से जुड़ी शब्दावली से परिचित नहीं हैं, तो नीचे कुछ सामान्य शब्दों का आसान अर्थ दिया गया है:",
        terms: [
          { term: "Open", desc: "किसी मार्केट से जुड़ा शुरुआती नंबर या रिजल्ट।" },
          { term: "Close", desc: "किसी मार्केट का अंतिम या क्लोजिंग नंबर/रिजल्ट।" },
          { term: "Jodi", desc: "आम तौर पर Open और Close नंबर से बनने वाला दो अंकों का संयोजन।" },
          { term: "Panel", desc: "पारंपरिक रिजल्ट फॉर्मेट में इस्तेमाल होने वाला तीन अंकों का नंबर संयोजन।" },
          { term: "Chart", desc: "पुराने रिजल्ट और नंबरों को रिकॉर्ड करने वाला ऐतिहासिक रिकॉर्ड।" }
        ],
        trailing: "इन शब्दों का उपयोग मुख्य रूप से पुराने रिजल्ट और पारंपरिक Matka फॉर्मेट को समझाने के लिए किया जाता है।"
      },
      {
        id: "kalyan-matka-info",
        title: "Kalyan Matka की जानकारी",
        paragraphs: [
          "Kalyan Satta Matka से जुड़े प्रमुख मार्केट नामों में से एक है। ऐतिहासिक रूप से Kalyan से जुड़े रिजल्ट, चार्ट और समय की जानकारी अलग-अलग ऑनलाइन स्रोतों पर उपलब्ध रही है।",
          "मार्केट की टाइमिंग अलग-अलग स्रोतों में अलग हो सकती है या समय के साथ बदल सकती है। इसलिए किसी ऑनलाइन शेड्यूल को निश्चित या लाइव समय मानने से पहले उसके स्रोत और अपडेट की स्थिति देखना जरूरी है।"
        ]
      },
      {
        id: "charts-and-historical-data",
        title: "Matka Chart और Historical Data",
        lead: "Matka Chart पुराने रिजल्ट को व्यवस्थित तरीके से देखने के लिए इस्तेमाल किया जाने वाला रिकॉर्ड है। किसी चार्ट में निम्न प्रकार की जानकारी दिखाई दे सकती है:",
        bullets: [
          "पुराने Open नंबर",
          "पुराने Close नंबर",
          "Jodi",
          "Panel",
          "तारीख",
          "मार्केट का नाम",
          "पुराने रिजल्ट"
        ],
        trailing: "ऐतिहासिक चार्ट किसी मार्केट के पुराने रिकॉर्ड को समझने में उपयोगी हो सकते हैं। हालांकि, पुराने नंबर इस बात की गारंटी नहीं देते कि भविष्य में भी वही नंबर दोबारा आएगा।"
      },
      {
        id: "read-carefully",
        title: "पुराने रिजल्ट को सावधानी से क्यों देखना चाहिए?",
        paragraphs: [
          "किसी पुराने चार्ट में मौजूद नंबर केवल पिछले परिणामों का रिकॉर्ड होते हैं। उनसे भविष्य के परिणाम को निश्चित रूप से निर्धारित नहीं किया जा सकता।",
          "इंटरनेट पर उपलब्ध जानकारी में कभी-कभी टाइपिंग की गलती, अपडेट में देरी या अलग-अलग स्रोतों के बीच अंतर भी हो सकता है। इसी वजह से MatkaSatta.guru पर उपलब्ध ऐतिहासिक जानकारी को सामान्य संदर्भ सामग्री के रूप में देखना चाहिए।"
        ]
      },
      {
        id: "market-timing",
        title: "Matka Market की Timing",
        paragraphs: [
          "अलग-अलग Matka मार्केट के अलग-अलग समय बताए जाते हैं। उपलब्ध स्रोत सामग्री में कई मार्केट के नाम और उनकी अनुमानित टाइमिंग दी गई है।",
          "ऑनलाइन उपलब्ध टाइमिंग हमेशा एक जैसी नहीं होती और समय के साथ बदल भी सकती है। इसलिए यहां दी गई किसी भी टाइमिंग को निश्चित लाइव शेड्यूल नहीं माना जाना चाहिए।"
        ],
        timingsTable: [
          { market: "Time Bazar", open: "दोपहर (Afternoon)", close: "दोपहर (Afternoon)" },
          { market: "Milan Day", open: "दोपहर (Afternoon)", close: "शाम (Evening)" },
          { market: "Rajdhani Day", open: "दोपहर (Afternoon)", close: "शाम (Evening)" },
          { market: "Kalyan", open: "दोपहर (Afternoon)", close: "शाम (Evening)" },
          { market: "Madhur Day", open: "दोपहर (Afternoon)", close: "दोपहर (Afternoon)" },
          { market: "Supreme Day", open: "दोपहर (Afternoon)", close: "शाम (Evening)" },
          { market: "Main Bazar", open: "रात (Night)", close: "देर रात (Late Night)" },
          { market: "Milan Night", open: "रात (Night)", close: "देर रात (Late Night)" },
          { market: "Rajdhani Night", open: "रात (Night)", close: "देर रात (Late Night)" }
        ],
        tableNote: "नोट: मार्केट शेड्यूल बदल सकते हैं। किसी भी समय पर निर्भर रहने से पहले हमेशा वर्तमान समय सत्यापित करें।"
      },
      {
        id: "common-terms",
        title: "Satta Matka से जुड़े सामान्य शब्द",
        lead: "नीचे कुछ सामान्य शब्द दिए गए हैं जो Matka से जुड़ी जानकारी पढ़ते समय देखने को मिल सकते हैं:",
        bullets: [
          "Matka: भारत में विकसित पारंपरिक नंबर आधारित खेल से जुड़ा नाम।",
          "Market: किसी विशेष Matka रिजल्ट कैटेगरी या मार्केट का नाम।",
          "Open: शुरुआती रिजल्ट।",
          "Close: अंतिम रिजल्ट।",
          "Jodi: दो अंकों का संयोजन।",
          "Panel: तीन अंकों का संयोजन।",
          "Chart: पुराने रिजल्ट का रिकॉर्ड।",
          "Result: किसी मार्केट का प्रकाशित संख्यात्मक परिणाम।",
          "Guessing: पुराने नंबरों या अन्य जानकारी के आधार पर अनुमान लगाने की प्रक्रिया।"
        ],
        trailing: "कुछ वेबसाइट और फोरम guessing से जुड़ी जानकारी भी प्रकाशित करते हैं। ऐसी जानकारी को व्यक्तिगत राय या अनुमान के रूप में देखना चाहिए, न कि भविष्य के परिणाम की विश्वसनीय भविष्यवाणी के रूप में।"
      }
    ],
    faqsTitle: "अक्सर पूछे जाने वाले सवाल (FAQs)",
    faqs: [
      {
        q: "Matka Satta क्या है?",
        a: "Matka Satta भारत में विकसित एक पारंपरिक नंबर आधारित खेल है। इसके साथ अलग-अलग मार्केट, नंबर फॉर्मेट और विशेष शब्दावली जुड़ी हुई है, जैसे Open, Close, Jodi, Panel और Chart।"
      },
      {
        q: "Matka Result का क्या मतलब है?",
        a: "Matka Result किसी विशेष मार्केट से जुड़े प्रकाशित संख्यात्मक परिणाम को कहा जाता है। अलग-अलग मार्केट में रिजल्ट को Open, Close, Jodi या Panel के रूप में दिखाया जा सकता है।"
      },
      {
        q: "Open Result क्या होता है?",
        a: "Open Result किसी Matka मार्केट से जुड़ा शुरुआती नंबर या परिणाम होता है।"
      },
      {
        q: "Close Result क्या होता है?",
        a: "Close Result किसी मार्केट से जुड़ा अंतिम या क्लोजिंग नंबर/परिणाम होता है।"
      },
      {
        q: "Matka में Jodi क्या होती है?",
        a: "Jodi आम तौर पर दो अंकों का संयोजन होता है, जिसे संबंधित Open और Close नंबरों से जोड़ा जाता है।"
      },
      {
        q: "Matka Panel क्या होता है?",
        a: "Panel आम तौर पर तीन अंकों का नंबर संयोजन होता है, जिसका इस्तेमाल पारंपरिक Matka रिजल्ट फॉर्मेट में किया जाता है।"
      },
      {
        q: "Matka Chart क्या होता है?",
        a: "Matka Chart पुराने रिजल्ट को रिकॉर्ड और व्यवस्थित तरीके से दिखाने वाला ऐतिहासिक रिकॉर्ड है। इसमें तारीख, Open, Close, Jodi और Panel जैसी जानकारी शामिल हो सकती है।"
      },
      {
        q: "Kalyan Matka क्या है?",
        a: "Kalyan Satta Matka से जुड़े प्रमुख मार्केट नामों में से एक है। Kalyan से संबंधित रिजल्ट, चार्ट और अन्य ऐतिहासिक जानकारी विभिन्न ऑनलाइन स्रोतों पर उपलब्ध है।"
      },
      {
        q: "Matka Market की Timing क्या होती है?",
        a: "अलग-अलग मार्केट की टाइमिंग अलग हो सकती है। इंटरनेट पर उपलब्ध शेड्यूल अलग-अलग स्रोतों में अलग भी हो सकते हैं और समय के साथ बदल सकते हैं। इसलिए किसी टाइमिंग को निश्चित लाइव टाइम नहीं माना जाना चाहिए।"
      },
      {
        q: "क्या पुराने Matka Chart से भविष्य का Result पता लगाया जा सकता है?",
        a: "पुराने चार्ट से पिछले रिजल्ट को समझा जा सकता है, लेकिन वे भविष्य के परिणाम की गारंटी नहीं देते। पिछले नंबरों के आधार पर भविष्य का परिणाम निश्चित रूप से निर्धारित नहीं किया जा सकता।"
      },
      {
        q: "Matka में 143 का क्या मतलब है?",
        a: "\"143\" शब्द कुछ Matka से जुड़ी guessing और chart चर्चाओं में देखने को मिलता है। इसका संदर्भ अलग-अलग जगहों पर अलग हो सकता है। इसे किसी निश्चित या गारंटीड भविष्यवाणी के तरीके के रूप में प्रस्तुत नहीं किया जाना चाहिए।"
      },
      {
        q: "क्या MatkaSatta.guru Guaranteed Number देता है?",
        a: "नहीं। MatkaSatta.guru एक जानकारी आधारित वेबसाइट है और किसी नंबर, भविष्य के रिजल्ट या prediction की गारंटी नहीं देता।"
      },
      {
        q: "क्या MatkaSatta.guru पर Betting की सुविधा है?",
        a: "नहीं। वेबसाइट का उद्देश्य सामान्य जानकारी और शैक्षणिक सामग्री उपलब्ध कराना है। यह दांव स्वीकार नहीं करती, पैसे जमा नहीं करती और किसी प्रकार की betting या gambling service संचालित नहीं करती।"
      },
      {
        q: "क्या MatkaSatta.guru कोई Matka Market चलाता है?",
        a: "नहीं। वेबसाइट किसी Matka मार्केट को संचालित या आयोजित नहीं करती। इसका उद्देश्य केवल Matka से संबंधित सामान्य जानकारी, इतिहास, शब्दावली और ऐतिहासिक रिकॉर्ड के बारे में जानकारी देना है।"
      },
      {
        q: "क्या वेबसाइट पर दिए गए सभी Result और Chart सही होते हैं?",
        a: "ऑनलाइन उपलब्ध ऐतिहासिक जानकारी में कभी-कभी गलतियां, देरी या अलग-अलग स्रोतों के बीच अंतर हो सकता है। इसलिए वेबसाइट पर दी गई जानकारी को सामान्य संदर्भ सामग्री के रूप में देखना चाहिए।"
      },
      {
        q: "क्या Satta Matka भारत में Legal है?",
        a: "Gambling और इससे संबंधित गतिविधियों के कानून अलग-अलग राज्यों और परिस्थितियों के अनुसार अलग हो सकते हैं। किसी गतिविधि की वैधता के बारे में निर्णय लेने से पहले अपने राज्य या क्षेत्र में लागू कानूनों की जानकारी प्राप्त करना आवश्यक है।"
      },
      {
        q: "Matka के इतने सारे अलग-अलग Market क्यों हैं?",
        a: "समय के साथ Matka से जुड़े कई अलग-अलग मार्केट नाम और रिजल्ट फॉर्मेट विकसित हुए हैं। अलग-अलग मार्केट के अपने नाम, शेड्यूल और ऐतिहासिक चार्ट हो सकते हैं।"
      },
      {
        q: "MatkaSatta.guru पर किस तरह की जानकारी मिलती है?",
        a: "वेबसाइट पर मुख्य रूप से निम्न विषयों से जुड़ी जानकारी उपलब्ध कराई जाती है: Satta Matka का इतिहास, सामान्य शब्दावली, मार्केट जानकारी, रिजल्ट फॉर्मेट्स, ऐतिहासिक चार्ट्स, मार्केट शेड्यूल और FAQs। इस वेबसाइट का उद्देश्य विषय को समझने में मदद करना है, न कि gambling को बढ़ावा देना।"
      }
    ],
    aboutTitle: "MatkaSatta.guru के बारे में",
    aboutParas: [
      "MatkaSatta.guru एक जानकारी आधारित वेबसाइट है, जहां Satta Matka के इतिहास, सामान्य शब्दावली, पुराने रिजल्ट, मार्केट से संबंधित जानकारी और चार्ट जैसे विषयों को आसान भाषा में समझाने का प्रयास किया जाता है।",
      "वेबसाइट किसी Matka मार्केट को नियंत्रित या संचालित करने का दावा नहीं करती और किसी भविष्य के नंबर या परिणाम की गारंटी नहीं देती।",
      "हमारा उद्देश्य उपलब्ध सामान्य और ऐतिहासिक जानकारी को सरल तरीके से प्रस्तुत करना है, ताकि पाठक Open, Close, Jodi, Panel, Chart और अन्य सामान्य शब्दों को बेहतर तरीके से समझ सकें।"
    ],
    disclaimerTitle: "महत्वपूर्ण Disclaimer",
    disclaimerParas: [
      "MatkaSatta.guru केवल जानकारी और शैक्षणिक उद्देश्य के लिए बनाई गई वेबसाइट है।",
      "यह वेबसाइट किसी Matka मार्केट, betting activity या gambling service को संचालित, आयोजित या facilitate नहीं करती। हम किसी प्रकार का दांव, जमा राशि या भुगतान स्वीकार नहीं करते और किसी नंबर, prediction या winning result की गारंटी नहीं देते।",
      "वेबसाइट पर प्रकाशित जानकारी सार्वजनिक रूप से उपलब्ध स्रोतों और ऐतिहासिक सामग्री से ली जा सकती है। जानकारी को सरल और उपयोगी तरीके से प्रस्तुत करने का प्रयास किया जाता है, लेकिन प्रत्येक रिजल्ट, चार्ट, नंबर, टाइमिंग या अन्य जानकारी के पूरी तरह सही, वर्तमान या त्रुटिरहित होने की गारंटी नहीं दी जाती।",
      "Gambling और इससे संबंधित गतिविधियों के कानून अलग-अलग राज्यों और देशों में अलग हो सकते हैं। प्रत्येक व्यक्ति अपने क्षेत्र में लागू कानूनों को समझने और उनका पालन करने के लिए स्वयं जिम्मेदार है।",
      "इस वेबसाइट पर मौजूद किसी भी जानकारी को gambling या किसी गैरकानूनी गतिविधि में भाग लेने के लिए प्रोत्साहन या निमंत्रण के रूप में नहीं समझा जाना चाहिए। वेबसाइट का उपयोग करके आप स्वीकार करते हैं कि यहां उपलब्ध जानकारी की व्याख्या और उपयोग करने की जिम्मेदारी आपकी स्वयं की है।"
    ],
    exploreTitle: "Matka से जुड़ी जानकारी Explore करें",
    exploreLead: "MatkaSatta.guru पर Satta Matka से जुड़े इतिहास, सामान्य शब्दावली, Market information, Result formats, पुराने Charts और FAQs जैसी जानकारी एक ही जगह पर उपलब्ध कराने का प्रयास किया जाता है।",
    exploreClosing: "हमारा उद्देश्य सरल है — बिना gambling को बढ़ावा दिए, Satta Matka से संबंधित सामान्य जानकारी और ऐतिहासिक संदर्भ को आसान भाषा में प्रस्तुत करना।"
  },
  en: {
    heroTitle: "Matka Satta Information, Results & Historical Charts",
    introParas: [
      "Welcome to MatkaSatta.guru, an informational website covering the history, terminology, market schedules, results and historical charts associated with the traditional Matka number game.",
      "The purpose of this website is to make commonly searched Matka-related information easier to understand and find in one place. Whether you are researching the history of Satta Matka, looking for information about terms such as Jodi, Panna, Open and Close, or studying historical result charts, you can use this site as an information resource.",
      "We do not operate or organize any Matka market, accept wagers, process deposits or provide gambling services."
    ],
    sections: [
      {
        id: "what-is-satta-matka",
        title: "What Is Satta Matka?",
        paragraphs: [
          "Satta Matka is a traditional number-based game that developed in India during the twentieth century. Its early history is associated with the trading of cotton rates, before number-based draws became the format commonly associated with the game.",
          "The word Matka refers to the traditional earthen pot that was historically used for drawing numbers.",
          "Over the years, the terminology and format surrounding Matka have developed considerably. Today, people searching online may encounter terms such as Satta Matka, Matka Satta, Matka Result, Kalyan Matka, Jodi, Panna, Panel, Open, Close and other market-specific expressions.",
          "Because different websites and communities may use these terms differently, understanding the terminology is often the first step for anyone researching the subject."
        ]
      },
      {
        id: "result-and-market-info",
        title: "Matka Results and Market Information",
        paragraphs: [
          "Matka-related searches often focus on the result published for a particular market and date.",
          "Different markets have their own names and schedules, and information available online may include opening and closing numbers, Jodi results and historical charts.",
          "On MatkaSatta.guru, the objective is to organize this information in a straightforward format so visitors can understand what a particular result or chart represents."
        ],
        lead: "Some commonly referenced markets include:",
        bullets: [
          "Kalyan",
          "Milan",
          "Rajdhani",
          "Time Bazar",
          "Main Bazar",
          "Madhur",
          "Sridevi",
          "Bombay",
          "Supreme",
          "Other regional markets"
        ],
        trailing: "Schedules can change, and information published by different sources may not always match. Visitors should therefore verify any result or timing against an appropriate current source."
      },
      {
        id: "open-close-jodi",
        title: "Understanding Open, Close and Jodi",
        lead: "If you are new to Matka terminology, some of the words used on result pages can be confusing.",
        terms: [
          { term: "Open", desc: "The Open refers to the first result or number published in a particular market's result cycle." },
          { term: "Close", desc: "The Close refers to the later result associated with that market." },
          { term: "Jodi", desc: "A Jodi is generally a two-digit combination created from the relevant open and close numbers. For example, if the open and close digits are represented by two separate numbers, they may be displayed together as a Jodi on a result chart." },
          { term: "Panna or Panel", desc: "A Panna, also commonly called a Panel, generally refers to a three-digit number used within Matka terminology." }
        ],
        trailing: "Different result websites may display these terms in slightly different formats, so the accompanying chart or result legend should always be checked."
      },
      {
        id: "kalyan-matka-info",
        title: "Kalyan Matka Information",
        paragraphs: [
          "Kalyan is one of the most commonly searched names in the Matka space.",
          "Searches relating to Kalyan can include: Kalyan Matka result, Kalyan open, Kalyan close, Kalyan Jodi, Kalyan Panel, Kalyan chart, and Kalyan historical results.",
          "Rather than treating a chart as a prediction tool, historical results can simply be viewed as a record of previously published numbers. For anyone researching the subject, keeping the terminology and historical information separate from predictions is important."
        ]
      },
      {
        id: "charts-and-historical-data",
        title: "Matka Charts and Historical Data",
        lead: "A Matka chart is essentially a record of previous results arranged in a format that allows visitors to review historical information. Depending on the market, a chart may contain:",
        bullets: [
          "Date",
          "Open result",
          "Close result",
          "Jodi",
          "Panna or Panel",
          "Previous results",
          "Market-specific records"
        ],
        trailing: "Historical charts can be useful for understanding how results have been recorded over time. However, past numbers do not establish what a future result will be. A sequence appearing repeatedly in historical data should not be interpreted as evidence that the same pattern will necessarily occur again."
      },
      {
        id: "read-carefully",
        title: "Why Historical Results Should Be Read Carefully",
        paragraphs: [
          "Number-based results are sometimes presented alongside terms such as 'guessing', 'fix number', 'sure number' or 'expert prediction'. These expressions are commonly found in online Matka communities, but they should not be confused with verified forecasting.",
          "There is no reliable way to guarantee a future number from previous results. For this reason, MatkaSatta.guru focuses on information, terminology and historical records rather than presenting predictions as certain outcomes."
        ]
      },
      {
        id: "market-timing",
        title: "Matka Market Timings",
        paragraphs: [
          "Different markets may have different opening and closing schedules. Commonly listed markets can include daytime and nighttime sessions, with timings varying between markets and potentially changing over time."
        ],
        timingsTable: [
          { market: "Time Bazar", open: "Afternoon", close: "Afternoon" },
          { market: "Milan Day", open: "Afternoon", close: "Evening" },
          { market: "Rajdhani Day", open: "Afternoon", close: "Evening" },
          { market: "Kalyan", open: "Afternoon", close: "Evening" },
          { market: "Madhur Day", open: "Afternoon", close: "Afternoon" },
          { market: "Supreme Day", open: "Afternoon", close: "Evening" },
          { market: "Main Bazar", open: "Night", close: "Late Night" },
          { market: "Milan Night", open: "Night", close: "Late Night" },
          { market: "Rajdhani Night", open: "Night", close: "Late Night" }
        ],
        tableNote: "Note: Market schedules can change. Always verify the current timing before relying on information published online."
      },
      {
        id: "common-terms",
        title: "Satta Matka: Commonly Used Terms",
        lead: "People searching for information about this subject may encounter many different spellings and expressions. Some common terms include:",
        bullets: [
          "Satta Matka / Satta Batta / Matka Satta / Satta Matta Matka",
          "Matka Result / Satta Result",
          "Matka Chart",
          "Jodi",
          "Panna / Panel",
          "Open / Close",
          "Kalyan Matka / Milan Matka / Rajdhani Matka / Bombay Matka / Main Bazar"
        ],
        trailing: "Regional spelling differences are also common, particularly in searches written in Hindi and other Indian languages."
      }
    ],
    faqsTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "What is Satta Matka?",
        a: "Satta Matka is a traditional Indian number-based game with roots going back several decades. The modern form developed from earlier number-drawing practices associated with the historical Matka system."
      },
      {
        q: "What is a Matka chart?",
        a: "A Matka chart is a historical record showing previous results for a particular market. Depending on the market, it may display Open, Close, Jodi and Panel information."
      },
      {
        q: "What does Jodi mean?",
        a: "Jodi generally refers to a two-digit combination associated with the Open and Close results."
      },
      {
        q: "What is a Panna or Panel?",
        a: "Panna, often called Panel, generally refers to a three-digit combination used in Matka terminology."
      },
      {
        q: "What is the difference between Open and Close?",
        a: "Open and Close generally represent the first and later result stages within a market's result cycle."
      },
      {
        q: "Can historical charts predict future results?",
        a: "No. Historical results can show what happened previously, but they cannot reliably establish what a future result will be."
      },
      {
        q: "Are Matka timings the same for every market?",
        a: "No. Different markets can have different schedules, and timings may change. Current information should always be verified."
      },
      {
        q: "Does MatkaSatta.guru operate a Matka market?",
        a: "No. MatkaSatta.guru is intended as an informational website covering terminology, historical information, market-related data and results."
      },
      {
        q: "Does the website guarantee any result or prediction?",
        a: "No. Information published on the website should not be interpreted as a guarantee of any future result."
      },
      {
        q: "About MatkaSatta.guru",
        a: "MatkaSatta.guru is designed as an information resource for people researching Matka-related terminology, historical charts, market information and results. The website aims to keep explanations straightforward rather than using complicated terminology. The information should be treated as educational and informational material rather than financial or gambling advice."
      }
    ],
    aboutTitle: "About MatkaSatta.guru",
    aboutParas: [
      "MatkaSatta.guru is designed as an information resource for people researching Matka-related terminology, historical charts, market information and results.",
      "The website aims to keep explanations straightforward rather than using complicated terminology. Articles and information pages may cover individual markets, historical results, commonly used terms and general background about the Matka system.",
      "The information should be treated as educational and informational material rather than financial or gambling advice."
    ],
    disclaimerTitle: "Important Disclaimer",
    disclaimerParas: [
      "MatkaSatta.guru is an informational and educational website. We do not operate, organize, manage or facilitate any Satta Matka, Matka, betting or gambling activity. We do not accept wagers, deposits or payments and do not guarantee or promote any prediction, number or result.",
      "Information relating to results, market timings, charts and historical data may come from publicly available sources and may contain errors, delays or changes. Visitors should independently verify important information. Historical numbers and patterns cannot guarantee future outcomes.",
      "Gambling and betting laws differ between jurisdictions within India and may change over time. Visitors are responsible for understanding and complying with the laws applicable to them. If gambling is restricted or illegal where you live, do not participate.",
      "The content on this website should not be considered financial advice, gambling advice or an encouragement to participate in any betting activity. Visitors use the information at their own discretion and responsibility."
    ],
    exploreTitle: "Explore Matka Information",
    exploreLead: "Use MatkaSatta.guru to learn more about:",
    exploreBullets: [
      "Matka History — Background and evolution of the traditional Matka system.",
      "Market Information — General information about commonly referenced markets and their schedules.",
      "Today's Results — Information about published results where available.",
      "Historical Charts — Previous result records organized for reference.",
      "Matka Terminology — Simple explanations of Open, Close, Jodi, Panna, Panel and other commonly used terms.",
      "FAQs — Answers to common questions about Matka-related terminology and information."
    ],
    exploreClosing: "MatkaSatta.guru is built around one simple purpose: making Matka-related information easier to understand without presenting gambling as a guaranteed way to make money."
  }
};

export default function InformationalContent({ lang, setLang }) {
  const [openFaq, setOpenFaq] = useState(null);
  const data = siteContent[lang] || siteContent.hi;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="info-section-wrapper" aria-label="Informational Guide & Reference">
      {/* ── HEADER / LANGUAGE SWITCHER BAR ── */}
      <div className="info-top-bar">
        <div className="info-badge">
          <span className="badge-pulse" />
          <span>{lang === "hi" ? "📖 जानकारी और गाइड" : "📖 Information & Guide"}</span>
        </div>

        {/* Language Toggle */}
        <div className="lang-toggle-group" role="group" aria-label="Select Content Language">
          <span className="lang-label">
            🌐 {lang === "hi" ? "भाषा बदलें:" : "Language:"}
          </span>
          <button
            type="button"
            className={`lang-btn ${lang === "hi" ? "active" : ""}`}
            onClick={() => setLang("hi")}
            aria-pressed={lang === "hi"}
          >
            🇮🇳 हिन्दी
          </button>
          <button
            type="button"
            className={`lang-btn ${lang === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            🇬🇧 English
          </button>
        </div>
      </div>

      <div className="info-card">
        {/* Main Title */}
        <h2 className="info-main-title">{data.heroTitle}</h2>

        {/* Intro Paragraphs */}
        <div className="info-intro-box">
          {data.introParas.map((p, idx) => (
            <p key={idx} className="info-paragraph">
              {p}
            </p>
          ))}
        </div>

        {/* Dynamic Sections */}
        <div className="info-sections-grid">
          {data.sections.map((sec) => (
            <article key={sec.id} className="info-block" id={sec.id}>
              <h3 className="info-block-title">{sec.title}</h3>

              {sec.paragraphs &&
                sec.paragraphs.map((p, i) => (
                  <p key={i} className="info-paragraph">
                    {p}
                  </p>
                ))}

              {sec.lead && <p className="info-paragraph info-lead">{sec.lead}</p>}

              {sec.terms && (
                <div className="info-terms-grid">
                  {sec.terms.map((item, i) => (
                    <div key={i} className="term-card">
                      <span className="term-title">{item.term}</span>
                      <span className="term-desc">{item.desc}</span>
                    </div>
                  ))}
                </div>
              )}

              {sec.bullets && (
                <ul className="info-bullet-list">
                  {sec.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}

              {sec.timingsTable && (
                <div className="info-table-wrap">
                  <table className="info-table">
                    <thead>
                      <tr>
                        <th>{lang === "hi" ? "मार्केट" : "Market"}</th>
                        <th>{lang === "hi" ? "ओपनिंग टाइम" : "Opening Time"}</th>
                        <th>{lang === "hi" ? "क्लोजिंग टाइम" : "Closing Time"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sec.timingsTable.map((row, i) => (
                        <tr key={i}>
                          <td className="market-cell">{row.market}</td>
                          <td>{row.open}</td>
                          <td>{row.close}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {sec.tableNote && (
                    <p className="table-note">
                      <em>{sec.tableNote}</em>
                    </p>
                  )}
                </div>
              )}

              {sec.trailing && (
                <p className="info-paragraph info-trailing">{sec.trailing}</p>
              )}
            </article>
          ))}
        </div>

        {/* FAQs Accordion */}
        {data.faqs && (
          <div className="info-faq-section" id="faqs">
            <h3 className="info-block-title faq-heading">
              ❓ {data.faqsTitle}
            </h3>
            <div className="faq-list">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`faq-item ${isOpen ? "open" : ""}`}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className="faq-arrow">{isOpen ? "▲" : "▼"}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* About Section */}
        {data.aboutParas && (
          <article className="info-block about-box">
            <h3 className="info-block-title">ℹ️ {data.aboutTitle}</h3>
            {data.aboutParas.map((p, i) => (
              <p key={i} className="info-paragraph">
                {p}
              </p>
            ))}
          </article>
        )}

        {/* Important Disclaimer */}
        {data.disclaimerParas && (
          <article className="info-block disclaimer-box">
            <div className="disclaimer-header">
              <span className="disclaimer-icon">⚠️</span>
              <h3 className="info-block-title disclaimer-title">{data.disclaimerTitle}</h3>
            </div>
            {data.disclaimerParas.map((p, i) => (
              <p key={i} className="info-paragraph disclaimer-p">
                {p}
              </p>
            ))}
          </article>
        )}

        {/* Explore Matka Information */}
        <article className="info-block explore-box">
          <h3 className="info-block-title">🧭 {data.exploreTitle}</h3>
          {data.exploreLead && <p className="info-paragraph">{data.exploreLead}</p>}
          {data.exploreBullets && (
            <ul className="info-bullet-list">
              {data.exploreBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {data.exploreClosing && (
            <p className="info-paragraph explore-closing">
              <strong>{data.exploreClosing}</strong>
            </p>
          )}
        </article>
      </div>
    </section>
  );
}
