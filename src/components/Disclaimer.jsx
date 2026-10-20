import React from 'react';
import { SITE_NAME, SITE_DOMAIN, WHATSAPP_URL, WHATSAPP_NUMBER } from '../constants';

export default function Disclaimer({ onNavigate }) {
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
          <span className="legal-badge" style={{ borderColor: 'var(--red)', color: '#f87171' }}>
            ⚠️ महत्वपूर्ण वैधानिक चेतावनी • Legal Warning
          </span>
          <h1 className="legal-title">Disclaimer (अस्वीकरण एवं कानूनी चेतावनी)</h1>
          <p className="legal-subtitle">
            Strictly For Informational &amp; Research Purposes • {SITE_NAME} ({SITE_DOMAIN})
          </p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <div className="disclaimer-alert-box">
              <h3 style={{ color: '#fca5a5', marginBottom: 8, fontSize: '16px', fontWeight: 800 }}>
                🚨 सख्त चेतावनी: भारत में सट्टा / जुआ गैर-कानूनी है
              </h3>
              <p style={{ margin: 0, color: '#fecaca', fontSize: '14px', lineHeight: 1.6 }}>
                सट्टा मटका, जुआ या लॉटरी खेलना भारत के सार्वजनिक जुआ अधिनियम (Public Gambling Act 1867) तथा अधिकांश राज्यों के कानूनों के अधीन एक दंडनीय अपराध है। हम किसी भी रूप में सट्टा खेलने, सट्टेबाजी को बढ़ावा देने या पैसे लगाने का समर्थन नहीं करते हैं।
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>1. केवल सूचनात्मक एवं अभिलेखीय उद्देश्य (100% Informational Only)</h2>
            <p>
              <strong>{SITE_NAME}</strong> एक स्वतंत्र, सूचना-आधारित प्लेटफ़ॉर्म है। यहाँ प्रदर्शित समस्त डेटा, चार्ट, परिणाम और संख्याएं केवल सार्वजनिक स्रोतों से संकलित ऐतिहासिक अभिलेख (Historical Records) हैं।
            </p>
            <ul>
              <li>हम किसी भी यूजर से कोई सट्टा दांव (Betting Money) या बुकिंग नहीं लेते हैं।</li>
              <li>हमारी वेबसाइट किसी भी सट्टा मटका कंपनी, खाईवाल या जुआ सिंडिकेट से प्रत्यक्ष या अप्रत्यक्ष रूप से संबद्ध नहीं है।</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. वित्तीय जोखिम और कोई देयता नहीं (No Financial Liability)</h2>
            <p>
              सट्टा मटका अथवा किसी भी प्रकार के जुए में अत्यधिक वित्तीय जोखिम और आर्थिक नुकसान की भारी संभावना होती है।
            </p>
            <ul>
              <li>किसी भी व्यक्ति द्वारा वेबसाइट पर प्रदर्शित नंबरों, टिप्स या अनुमानित अंकों के आधार पर किए गए किसी भी वित्तीय लेन-देन, लाभ अथवा हानि का उत्तरदायित्व पूरी तरह से उस व्यक्ति का स्वयं होगा।</li>
              <li>{SITE_NAME} और इसके संचालक किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक या परिणामी वित्तीय नुकसान के लिए कतई ज़िम्मेदार नहीं होंगे।</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. परिणाम सटीकता अस्वीकरण (Results Accuracy Disclaimer)</h2>
            <p>
              यद्यपि हम सार्वजनिक स्रोतों से प्राप्त अंकों को यथासंभव त्वरित और सटीक रूप से प्रस्तुत करने का प्रयास करते हैं, फिर भी तकनीकी कारणों, सर्वर विलंब या मानवीय त्रुटि के कारण डेटा में भिन्नता हो सकती है। किसी भी निर्णय से पहले आधिकारिक स्रोतों से मिलान करना उपयोगकर्ता की अपनी जिम्मेदारी है।
            </p>
          </section>

          <section className="legal-section">
            <h2>4. आयु प्रतिबंध (Strict 18+ Restriction)</h2>
            <p>
              यह वेबसाइट विशेष रूप से 18 वर्ष या उससे अधिक आयु के वयस्कों के लिए है। 18 वर्ष से कम आयु के नाबालिगों का इस वेबसाइट पर आना अथवा किसी भी सट्टेबाजी से संबंधित सामग्री को देखना सख्त वर्जित है।
            </p>
          </section>

          <section className="legal-section">
            <h2>5. सहायता एवं हेल्पलाइन (Contact &amp; Assistance)</h2>
            <p>
              यदि आपके पास इस अस्वीकरण से संबंधित कोई भी कानूनी प्रश्न या आपत्ति है, तो आप हमारी WhatsApp हेल्पलाइन <strong>{WHATSAPP_NUMBER}</strong> पर संपर्क कर सकते हैं।
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
            <button type="button" onClick={() => onNavigate && onNavigate('/privacy')} className="legal-text-btn">
              Privacy Policy
            </button>
            <span className="sep">•</span>
            <button type="button" onClick={() => onNavigate && onNavigate('/terms')} className="legal-text-btn">
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
