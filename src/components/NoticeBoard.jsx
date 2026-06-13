import React from 'react';

const NoticeBoard = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 my-4">
      {/* Notice 1 */}
      <div className="w-full max-w-[600px] p-[2px] bg-gradient-to-r from-brand-red via-brand-yellow to-brand-red rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
        <div className="bg-[#1a1a1a] p-3 rounded-[10px] text-center text-white">
          <div className="text-[13px] font-bold mb-3 leading-snug text-brand-yellow font-['Arial','Rajdhani',sans-serif]">
            <i className="fa fa-bullhorn text-brand-red mr-1"></i>
            अगर आप खुद का बाजार चलाते है या चालू करना चाहते है और रिजल्ट हमारी साइट पर डलवाने के लिए हमारे टेलीग्राम चैनल को ज्वाइन करे ⤵️
          </div>
          <div className="flex justify-between gap-2">
            <a href="https://telegram.me/+ReOYDGFP8PYxYTkx" target="_blank" rel="noreferrer" className="flex-1 p-2 rounded-lg text-white font-bold text-[10px] uppercase flex items-center justify-center transition-transform active:scale-95 bg-gradient-to-tr from-[#0088cc] to-[#00a2ed] shadow-[0_4px_10px_rgba(0,136,204,0.3)] hover:opacity-90">
              <i className="fab fa-telegram-plane mr-2 text-xs"></i> Telegram Now
            </a>
            <a href="https://wa.me/917589045547" target="_blank" rel="noreferrer" className="flex-1 p-2 rounded-lg text-white font-bold text-[10px] uppercase flex items-center justify-center transition-transform active:scale-95 bg-gradient-to-tr from-[#25d366] to-[#128c7e] shadow-[0_4px_10px_rgba(37,211,102,0.3)] hover:opacity-90">
              <i className="fab fa-whatsapp mr-2 text-xs"></i> WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      {/* Notice 2 Telegram */}
      <div className="w-full max-w-[600px] px-[5px]">
        <a href="https://telegram.me/+UAiZ3YQkggw3N2Zl" target="_blank" rel="noreferrer" className="animate-pulse-blue bg-gradient-to-br from-[#0088cc] to-[#005588] rounded-xl flex flex-col items-center text-center p-3 text-white no-underline shadow-[0_4px_15px_rgba(0,136,204,0.4)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,136,204,0.6)] border border-white/20">
          <div className="mb-2">
            <span className="block font-bold text-base leading-snug font-['Arial',sans-serif]">
              टेलीग्राम का नंबर 1 खाईवाल ग्रुप ज्वाइन करो और बिंदास खेलो भाव 100 का 9500 ⏯️ प्ले बिंदास
            </span>
            <span className="block text-[11px] opacity-80 mt-1">Join for daily updates</span>
          </div>
          <div className="flex items-center justify-center gap-3 w-full">
            <div className="bg-white text-[#0088cc] w-[35px] h-[35px] rounded-full flex items-center justify-center text-xl shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <i className="fab fa-telegram-plane"></i>
            </div>
            <div className="bg-[#ffcc00] text-black px-4 py-1.5 rounded-full font-bold text-[13px] uppercase tracking-wide">
              JOIN
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NoticeBoard;
