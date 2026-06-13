import React from 'react';

const years = [2026, 2025, 2024, 2023, 2022, 2021];
const games = [
  'DELHI BAZAR', 'DESAWAR', 'FARIDABAD', 'GALI', 'GALI DISAWAR MIX', 
  'GHAZIABAD', 'JAIPUR DAY', 'PUNJAB MAIL', 'SHREE GANESH', 
  'SHREE SAI', 'SIKANDRABAD'
];

const ChartSection = ({ year }) => (
  <div className="w-full flex flex-col mb-1">
    <div className="w-full bg-[#0072bb] border-[2px] border-black text-center py-1">
      <h2 className="text-white text-sm sm:text-base font-bold uppercase tracking-wide">
        SATTA KING RECORD CHART {year}
      </h2>
    </div>
    <div className="flex flex-col gap-[2px] mt-[2px] px-[2px]">
      {games.map(game => (
        <a key={game} href="#" className="bg-white border border-black rounded-full text-center py-1.5 text-black hover:bg-gray-100 uppercase text-[10px] sm:text-xs font-bold font-serif shadow-sm block w-full">
          {game} RECORD CHART {year}
        </a>
      ))}
    </div>
  </div>
);

const RecordChartsList = () => {
  return (
    <div className="w-full py-2">
      {years.map(year => (
        <ChartSection key={year} year={year} />
      ))}
      
      <div className="w-full flex flex-col mb-1 mt-4">
        <div className="w-full bg-[#0072bb] border-[2px] border-black text-center py-1">
          <h2 className="text-white text-sm sm:text-base font-bold uppercase tracking-wide">
            MONTHLY SATTA RECORD CHART
          </h2>
        </div>
        <div className="flex flex-col gap-[2px] mt-[2px] px-[2px]">
          <a href="#" className="bg-white border border-black rounded-full text-center py-1.5 text-black hover:bg-gray-100 uppercase text-[10px] sm:text-xs font-bold font-serif shadow-sm block w-full">
            ALL GAME MIX RECORD CHART
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecordChartsList;
