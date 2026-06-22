import React from 'react';

const FloatingButtons = () => {
  return (
    <>
      {/* Bottom Left Buttons */}
      <div className="fixed bottom-[20px] left-[10px] z-[99999] flex flex-col gap-4">
        <a 
          href="https://wa.me/917589045547" 
          className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-center no-underline shadow-lg border-[3px] border-white transition-transform active:scale-90 bg-gradient-to-b from-[#ffcc00] to-[#ff9900] text-black"
        >
          <div className="text-[9px] font-extrabold uppercase leading-[1.1]">
            Play<br/>game
          </div>
        </a>
        <a 
          href="https://wa.me/917589045547" 
          className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-center no-underline shadow-lg border-[3px] border-gray-400 bg-[#25D366] text-white transition-transform active:scale-90 text-2xl"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a 
          href="https://wa.me/917589045547" 
          className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-center no-underline shadow-lg border-[3px] border-gray-400 bg-[#0088cc] text-white transition-transform active:scale-90 text-2xl"
        >
          <i className="fab fa-telegram-plane"></i>
        </a>
      </div>

      {/* Bottom Right Button */}
      <div className="fixed bottom-[20px] right-[10px] z-[99999]">
        <button 
          onClick={() => window.location.href = "https://wa.me/917589045547"}
          className="bg-white border-2 border-red-500 shadow-[0_0_0_2px_#ffcc00] px-3 py-1 text-blue-700 italic font-bold tracking-wider hover:opacity-90"
        >
          Refresh
        </button>
      </div>
    </>
  );
};

export default FloatingButtons;
