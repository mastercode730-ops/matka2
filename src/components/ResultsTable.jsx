import React from 'react';

const table1Headers = ['Date', 'DESAWAR', 'DELHI BAZAR', 'SHREE GANESH', 'FARIDABAD', 'GHAZIABAD', 'GALI'];
const table2Headers = ['Date', 'JAIPUR DAY', 'PUNJAB MAIL', 'SHREE SAI', 'SIKANDRABAD', 'GALI DISAWAR MIX', ''];

const dates = Array.from({ length: 11 }, (_, i) => `${(i + 1).toString().padStart(2, '0')}-06-2026`);

const getRandomNum = () => Math.floor(Math.random() * 90 + 10).toString();

const TableComponent = ({ headers }) => (
  <div className="overflow-x-auto w-full my-4">
    <table className="dashed-table bg-white text-black min-w-max">
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} className={`bg-[#ff6700] text-white text-[9px] sm:text-xs font-bold py-2 border border-black ${i === 0 ? 'w-[12%]' : ''}`}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dates.map((date, idx) => (
          <tr key={idx}>
            <td className="bg-[#CEC4EB] h-[29px] border border-black">
              <span className="text-[9px] sm:text-xs text-red-600 font-bold">{date}</span>
            </td>
            {headers.slice(1).map((h, i) => (
              <td key={i} className="bg-white text-black text-xs sm:text-sm font-bold border border-black">
                {h ? getRandomNum() : ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ResultsTable = () => {
  return (
    <div className="w-full">
      <TableComponent headers={table1Headers} />
      <TableComponent headers={table2Headers} />
    </div>
  );
};

export default ResultsTable;
