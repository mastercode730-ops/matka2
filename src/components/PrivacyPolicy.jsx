import React from 'react';
import { SITE_NAME, SITE_DOMAIN, WHATSAPP_URL, WHATSAPP_NUMBER } from '../constants';

export default function PrivacyPolicy({ onNavigate }) {
  return (
    <div className="wrap legal-page-container">
      <div className="legal-top-bar">
        <button
          onClick={() => onNavigate && onNavigate('/')}
          className="legal-back-btn"
          type="button"
        >
          ← होम पेज (Back to Home)
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa-up"
          style={{ padding: '6px 14px', fontSize: '12px' }}
        >
          💬 WhatsApp
        </a>
      </div>

      <div className="legal-card">
        <div className="legal-header">
          <span className="legal-badge">सुरक्षा और गोपनीयता • Security &amp; Privacy</span>
          <h1 className="legal-title">Privacy Policy (गोपनीयता नीति)</h1>
          <p className="legal-subtitle">
            अंतिम अपडेट: जनवरी 2026 • Official Privacy Guidelines for {SITE_NAME} ({SITE_DOMAIN})
          </p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. प्रस्तावना (Introduction)</h2>
            <p>
              <strong>{SITE_NAME}</strong> ({SITE_DOMAIN}) पर आपका स्वागत है। हम अपने यूज़र्स की गोपनीयता का पूरा सम्मान करते हैं। यह प्राइवेसी पॉलिसी यह स्पष्ट करती है कि जब आप हमारी वेबसाइट पर विज़िट करते हैं या हमारे रिकॉर्ड चार्ट और लाइव रिज़ल्ट देखते हैं, तो हम किस प्रकार की जानकारी एकत्रित करते हैं तथा उसका क्या उपयोग होता है।
            </p>
          </section>

          <section className="legal-section">
            <h2>2. हम कौन सी जानकारी एकत्र करते हैं (Information We Collect)</h2>
            <p>
              हम अपने यूज़र्स से किसी भी प्रकार की संवेदनशील व्यक्तिगत जानकारी जैसे बैंक विवरण, आधार कार्ड या पासवर्ड नहीं मांगते। हमारी वेबसाइट पूरी तरह से नि:शुल्क सूचना पोर्टल के रूप में कार्य करती है।
            </p>
            <ul>
              <li>
                <strong>तकनीकी लॉग (Log Data):</strong> आपके ब्राउज़र का प्रकार (Browser Type), ऑपरेटिंग सिस्टम, विज़िट का समय और देखे गए पेजों की जानकारी केवल साइट की परफॉर्मेंस सुधारने के लिए सर्वर द्वारा दर्ज की जा सकती है।
              </li>
              <li>
                <strong>कुकीज़ (Cookies):</strong> हम यूज़र एक्सपीरियंस को बेहतर बनाने और पेजों को तेज़ी से लोड करने के लिए बेसिक कुकीज़ का उपयोग कर सकते हैं। आप अपने ब्राउज़र सेटिंग से कुकीज़ बंद करने के लिए स्वतंत्र हैं।
              </li>
              <li>
                <strong>स्वेच्छा से साझा की गई जानकारी:</strong> यदि आप सहायता अथवा विज्ञापन पूछताछ हेतु हमारे WhatsApp नंबर ({WHATSAPP_NUMBER}) पर संपर्क करते हैं, तो आपकी चैट WhatsApp की एंड-टू-एंड एन्क्रिप्शन नीति के तहत सुरक्षित रहती है।
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. सूचना का उपयोग (How We Use Information)</h2>
            <p>
              एकत्रित तकनीकी डेटा का उपयोग केवल निम्नलिखित उद्देश्यों हेतु किया जाता है:
            </p>
            <ul>
              <li>वेबसाइट की गति और सर्वर अपटाइम सुनिश्चित करना।</li>
              <li>लाइव रिजल्ट और चार्ट्स को बिना किसी रुकावट के प्रदर्शित करना।</li>
              <li>साइट को साइबर हमलों, स्पैम और अनधिकृत स्क्रैपिंग से सुरक्षित रखना।</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. तृतीय-पक्ष लिंक और विज्ञापन (Third-Party Links &amp; Advertisements)</h2>
            <p>
              हमारी वेबसाइट पर बाहरी थर्ड-पार्टी वेबसाइटों (जैसे गेमिंग/बुकिंग पोर्टल्स या विज्ञापनदाताओं) के लिंक हो सकते हैं। इन बाहरी साइटों की अपनी अलग गोपनीयता नीतियां होती हैं। किसी भी बाहरी लिंक पर क्लिक करने के पश्चात उनके नियमों व शर्तों की जांच करना यूज़र का निजी दायित्व है; हमारा उन पर कोई प्रत्यक्ष नियंत्रण नहीं है।
            </p>
          </section>

          <section className="legal-section">
            <h2>5. बच्चों और 18 वर्ष से कम आयु के लोगों की गोपनीयता (Age Restriction - 18+)</h2>
            <p>
              यह वेबसाइट केवल 18 वर्ष या उससे अधिक आयु के वयस्क उपयोगकर्ताओं के लिए है। हम जानबूझकर 18 वर्ष से कम उम्र के नाबालिगों से कोई डेटा एकत्रित नहीं करते।
            </p>
          </section>

          <section className="legal-section">
            <h2>6. सुरक्षा (Data Security)</h2>
            <p>
              हम डेटा सुरक्षा के लिए उद्योग-मानक SSL एन्क्रिप्शन और सुरक्षित होस्टिंग प्रोटोकॉल का उपयोग करते हैं ताकि सभी यूज़र सुरक्षित वातावरण में जानकारी प्राप्त कर सकें।
            </p>
          </section>

          <section className="legal-section">
            <h2>7. संपर्क सूत्र (Contact Us)</h2>
            <p>
              यदि इस प्राइवेसी पॉलिसी के संबंध में आपका कोई प्रश्न या सुझाव है, तो आप हमारे WhatsApp हेल्पलाइन <strong>{WHATSAPP_NUMBER}</strong> के माध्यम से संपर्क कर सकते हैं।
            </p>
          </section>
        </div>

        <div className="legal-footer-nav">
          <button
            onClick={() => onNavigate && onNavigate('/')}
            className="up-btn"
            type="button"
          >
            ← वापस होम पेज पर जाएं
          </button>
          <div className="legal-links-inline">
            <button type="button" onClick={() => onNavigate && onNavigate('/terms')} className="legal-text-btn">
              Terms &amp; Conditions
            </button>
            <span className="sep">•</span>
            <button type="button" onClick={() => onNavigate && onNavigate('/disclaimer')} className="legal-text-btn">
              Disclaimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
