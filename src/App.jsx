import React from 'react';
import Header from './components/Header';
import TitleBanner from './components/TitleBanner';
import LiveResult from './components/LiveResult';
import NoticeBoard from './components/NoticeBoard';
import GameResultsGrid from './components/GameResultsGrid';
import ResultsTable from './components/ResultsTable';
import RecordChartsList from './components/RecordChartsList';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center font-['Arial',sans-serif]">
      <div className="w-full bg-white relative">
        <Header />
        <TitleBanner />
        <LiveResult />
      </div>
      <div className="w-full bg-black">
        <NoticeBoard />
        <GameResultsGrid />
        <ResultsTable />
        <RecordChartsList />
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
