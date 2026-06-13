import React, { useEffect } from 'react';

const TitleBanner = () => {
  useEffect(() => {
    // Dynamically load supercounters script
    const script = document.createElement('script');
    script.src = "//widget.supercounters.com/ssl/online_i.js";
    script.async = true;
    document.body.appendChild(script);

    // Provide the sc_online_i function call wrapper once loaded
    window.sc_online_i = window.sc_online_i || function(){};
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-[#ffff00] border-b border-black">
        <h1 className="text-black text-3xl sm:text-4xl font-normal text-center font-serif py-1">
          SATTA KING
        </h1>
      </div>
      <div className="w-full bg-[#0072bb] border-[2px] border-[#00ff00] rounded-xl p-2 my-1 text-center shadow-lg">
        <h2 className="text-[#ff99ff] text-base sm:text-lg font-normal mb-1">
          BEST SITE SATTA RESULT
        </h2>
        <a href="/" className="text-white font-normal hover:underline text-xl sm:text-2xl block mb-2 font-serif">
          WWW.SHYAM-SATTA.COM
        </a>
        <div className="flex justify-center mb-1">
          <span className="bg-gradient-to-b from-[#ff4d4d] to-[#cc0000] text-white text-[10px] px-2 py-0.5 rounded shadow border border-white/20">
            1 ONLINE
          </span>
        </div>
        {/* Placeholder for the supercounters injection if it works directly in React */}
        <div className="flex justify-center hidden" dangerouslySetInnerHTML={{ __html: `<script type="text/javascript">sc_online_i(1734544,"ffffff","e61c1c");</script>` }}></div>
      </div>
    </div>
  );
};

export default TitleBanner;
