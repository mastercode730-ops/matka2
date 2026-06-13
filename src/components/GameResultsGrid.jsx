import React from 'react';

const games = [
  { name: 'JAIPUR DAY', time: '01:30 PM', number: '59', result: '[]' },
  { name: 'PUNJAB MAIL', time: '02:00 PM', number: '73', result: '[]' },
  { name: 'SHREE SAI', time: '02:40 PM', number: '39', result: '[]' },
  { name: 'DELHI BAZAR', time: '03:10 PM', number: '93', result: '[]' },
];

const games2 = [
  { name: 'SIKANDRABAD', time: '05:15 PM', number: '85', result: '[]' },
  { name: 'FARIDABAD', time: '06:00 PM', number: '85', result: '[]' },
  { name: 'GALI DISAWAR MIX', time: '08:15 PM', number: '99', result: '[]' },
  { name: 'GHAZIABAD', time: '08:45 PM', number: '33', result: '[]' },
];

const GridBox = ({ game }) => (
  <div className="bg-[#f0ead6] border-2 border-black flex flex-col items-center justify-center py-4 px-2 w-full h-full text-center">
    <div className="text-red-600 font-bold text-[13px] sm:text-base mb-1">{game.name}</div>
    <div className="text-black text-[9px] sm:text-[11px] font-bold mb-1">({game.time})</div>
    <div className="text-black font-bold text-sm sm:text-lg">
      &#123; {game.number} &#125; <span className="bg-[#4d94ff] text-white px-1 sm:px-2 rounded shadow-sm">➡️</span> [ {game.result.replace('[]', '')} ]
    </div>
  </div>
);

const FullWidthBox = ({ name, time, number, result }) => (
  <div className="w-full bg-[#d2691e] border-2 border-black flex flex-col items-center justify-center py-4 mb-[2px] text-center">
    <div className="text-white font-bold text-[15px] sm:text-lg mb-1">{name}</div>
    <div className="text-yellow-400 text-[10px] sm:text-xs font-bold mb-1">({time})</div>
    <div className="text-white font-bold text-base sm:text-xl">
      &#123; {number} &#125; <span className="bg-[#4d94ff] text-white px-1 sm:px-2 rounded shadow-sm">➡️</span> [ {result} ]
    </div>
  </div>
);

const GameResultsGrid = () => {
  return (
    <div className="w-full flex flex-col items-center pb-2">
      <div className="w-full">
        <FullWidthBox name="DESAWAR" time="05:00 AM" number="65" result="31" />
        
        <div className="grid grid-cols-2 gap-[2px] mb-[2px] w-full">
          {games.map((g, i) => <GridBox key={i} game={g} />)}
        </div>

        <FullWidthBox name="SHREE GANESH" time="04:30 PM" number="48" result="" />

        <div className="grid grid-cols-2 gap-[2px] mb-[2px] w-full">
          {games2.map((g, i) => <GridBox key={i} game={g} />)}
        </div>

        <FullWidthBox name="GALI" time="11:30 PM" number="31" result="" />
      </div>
    </div>
  );
};

export default GameResultsGrid;
