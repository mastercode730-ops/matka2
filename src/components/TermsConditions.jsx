import React from 'react';
import { SITE_NAME, SITE_DOMAIN, WHATSAPP_URL, WHATSAPP_NUMBER } from '../constants';

export default function TermsConditions({ onNavigate }) {
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
          <span className="legal-badge">नियम और शर्तें • User Agreement</span>
          <h1 className="legal-title">Terms &amp; Conditions (नियम और शर्तें)</h1>
          <p className="legal-subtitle">
            अंतिम अपडेट: जनवरी 2026 • Terms of Service for {SITE_NAME} ({SITE_DOMAIN})
          </p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. शर्तों की स्वीकृति (Acceptance of Terms)</h2>
            <p>
              <strong>{SITE_NAME}</strong> ({SITE_DOMAIN}) की वेबसाइट को एक्सेस करने अथवा उपयोग करने पर आप इन सभी नियमों और शर्तों (Terms &amp; Conditions) से बाध्य होने की सहमति देते हैं। यदि आप इन शर्तों में से किसी भी बात से असहमत हैं, तो कृपया तत्काल इस पोर्टल का उपयोग बंद कर दें।
            </p>
          </section>

          <section className="legal-section">
            <h2>2. केवल सूचनात्मक एवं ऐतिहासिक उद्देश्य (Informational &amp; Archival Purpose)</h2>
            <p>
              यह वेबसाइट केवल संख्यात्मक परिणाम, सार्वजनिक रिकॉर्ड चार्ट और ऐतिहासिक डेटा प्रदर्शित करने वाला एक सूचना पोर्टल है।
            </p>
            <ul>
              <li>साइट प्रत्यक्ष रूप से किसी भी प्रकार का सट्टा, जुआ, लॉटरी या बेटिंग संचालित नहीं करती है।</li>
              <li>हम किसी भी यूजर से वित्तीय जमा (Deposit), दांव (Betting) या सट्टा राशि स्वीकार नहीं करते।</li>
              <li>प्रदर्शित सभी संख्याएं और चार्ट केवल सार्वजनिक सूचना और अभिलेखीय अध्ययन (Archival Reference) के लिए हैं।</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. कानूनी अधिकार क्षेत्र एवं उपयोगकर्ता का दायित्व (Jurisdictional Compliance)</h2>
            <p>
              सट्टा मटका या जुआ भारत के कई राज्यों में पब्लिक गैंबलिंग एक्ट 1867 और संबंधित राज्य कानूनों के तहत पूर्णतः गैर-कानूनी और दंडनीय अपराध है।
            </p>
            <ul>
              <li>यदि आप ऐसे किसी क्षेत्र या राज्य में रहते हैं जहाँ सट्टा/जुआ प्रतिबंधित है, तो इस वेबसाइट को देखना या इससे जुड़ी किसी भी गतिविधि में संलग्न होना आपके अपने राज्य के कानूनों का उल्लंघन हो सकता है।</li>
              <li>अपने अधिकार क्षेत्र के कानूनों का पालन करना पूर्णतः उपयोगकर्ता (User) की व्यक्तिगत जिम्मेदारी है।</li>
              <li>वेबसाइट प्रबंधन किसी भी कानूनी उल्लंघन, जुर्माने या पुलिस कार्रवाई के लिए उत्तरदायी नहीं होगा।</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. बौद्धिक संपदा और सामग्री का उपयोग (Intellectual Property &amp; Content Use)</h2>
            <p>
              इस वेबसाइट का डिज़ाइन, लेआउट, कोड और सामग्री केवल व्यक्तिगत और गैर-वाणिज्यिक उपयोग के लिए है। किसी भी बॉट, स्क्रैपर या ऑटोमेटेड सॉफ्टवेयर द्वारा साइट को बाधित करना या कंटेंट चुराना प्रतिबंधित है।
            </p>
          </section>

          <section className="legal-section">
            <h2>5. वारंटी का अस्वीकरण और देयता सीमा (Disclaimer of Warranties &amp; Limitation of Liability)</h2>
            <p>
              वेबसाइट पर प्रदर्शित सभी आंकड़े व रिज़ल्ट &quot;जैसी है वैसी&quot; (&quot;AS IS&quot;) स्थिति में उपलब्ध कराए जाते हैं। हम किसी भी डेटा की पूर्ण सटीकता, समयबद्धता या त्रुटिरहित होने की कोई वारंटी नहीं देते। किसी भी व्यक्ति द्वारा वेबसाइट पर उपलब्ध डेटा या दावों पर भरोसा करके किए गए किसी भी वित्तीय नुकसान, लाभ-हानि या विवाद के लिए यह वेबसाइट किसी भी रूप में उत्तरदायी नहीं होगी।
            </p>
          </section>

          <section className="legal-section">
            <h2>6. नियमों में संशोधन (Changes to Terms)</h2>
            <p>
              प्रबंधन बिना किसी पूर्व सूचना के समय-समय पर इन नियमों और शर्तों को संशोधित करने का अधिकार सुरक्षित रखता है। निरंतर वेबसाइट उपयोग को नए नियमों की स्वीकृति माना जाएगा।
            </p>
          </section>

          <section className="legal-section">
            <h2>7. संपर्क सूत्र (Contact Information)</h2>
            <p>
              यदि आपको इन नियमों और शर्तों से संबंधित कोई भी संदेह या प्रश्न है, तो आप हमारी WhatsApp हेल्पलाइन <strong>{WHATSAPP_NUMBER}</strong> पर संपर्क कर सकते हैं।
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
            <button type="button" onClick={() => onNavigate && onNavigate('/disclaimer')} className="legal-text-btn">
              Disclaimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
