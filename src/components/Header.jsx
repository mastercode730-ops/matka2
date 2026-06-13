import React from 'react';

const Header = () => {
  return (
    <nav className="w-full flex">
      <a href="/" className="flex-1 border border-black bg-[#ff6700] text-white font-bold py-2 text-center text-xs sm:text-sm hover:bg-orange-600 uppercase tracking-wide">
        HOME
      </a>
      <a href="/current-month-record-chart.php" className="flex-1 border border-black bg-[#ff6700] text-white font-bold py-2 text-center text-xs sm:text-sm hover:bg-orange-600 uppercase tracking-wide">
        CHART
      </a>
      <a href="/" className="flex-1 border border-black bg-[#ff6700] text-white font-bold py-2 text-center text-xs sm:text-sm hover:bg-orange-600 uppercase tracking-wide">
        SATTA
      </a>
      <a href="/login.php" className="flex-1 border border-black bg-[#ff6700] text-white font-bold py-2 text-center text-xs sm:text-sm hover:bg-orange-600 uppercase tracking-wide">
        MATKA
      </a>
    </nav>
  );
};

export default Header;
