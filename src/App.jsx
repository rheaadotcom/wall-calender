import React, { useState, useEffect, useCallback } from 'react';
import { HeroSection } from './components/HeroSection';
import { CalendarGrid } from './components/CalendarGrid';
import { NotesSection } from './components/NotesSection';
import { SelectionBar } from './components/SelectionBar';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDateRange } from './hooks/useDateRange';

function App() {
  const [dark, setDark] = useLocalStorage('app-dark-preference', false);
  const [viewMonth, setViewMonth] = useState(new Date().getMonth());
  const [viewYear, setViewYear] = useState(new Date().getFullYear());
  const [isFlipping, setIsFlipping] = useState(false);
  
  const dateRangeControl = useDateRange();
  const [notes, setNotes] = useLocalStorage(`notes-store-${viewYear}-${viewMonth}`, '');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const triggerFlip = (fn) => {
    setIsFlipping(true);
    setTimeout(() => { fn(); setIsFlipping(false); }, 300);
  };

  const handlePrev = useCallback(() => triggerFlip(() => {
    setViewMonth(m => m === 0 ? (setViewYear(viewYear - 1), 11) : m - 1);
  }), [viewYear]);

  const handleNext = useCallback(() => triggerFlip(() => {
    setViewMonth(m => m === 11 ? (setViewYear(viewYear + 1), 0) : m + 1);
  }), [viewYear]);

  const handleToday = useCallback(() => triggerFlip(() => {
    const t = new Date();
    setViewMonth(t.getMonth());
    setViewYear(t.getFullYear());
  }), []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12">
      <button 
        onClick={() => setDark(!dark)} 
        className="fixed top-8 right-8 z-50 p-4 glass rounded-2xl shadow-premium no-print transition-all hover:rotate-12 dark:text-yellow-400"
      >
        {dark ? '🌙' : '☀️'}
      </button>

      <div className="w-full max-w-5xl relative">
        <div className="spiral-binding">
          {Array.from({length:11}).map((_,i) => <div key={i} className="binding-ring" />)}
        </div>
        
        <div className="bg-white dark:bg-[#1e293b] rounded-[2.5rem] shadow-premium overflow-hidden border dark:border-white/5 transition-all">
          <HeroSection month={viewMonth} year={viewYear} onPrev={handlePrev} onNext={handleNext} isFlipping={isFlipping} />
          
          <div className="flex flex-col md:flex-row p-10 lg:p-14 gap-12">
            <NotesSection notes={notes} setNotes={setNotes} dateRange={dateRangeControl} />

            <div className={`flex-1 transition-all duration-300 ${isFlipping ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100'}`}>
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] flex items-center gap-3">
                  Project Timeline
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                </h3>
                <button onClick={handleToday} className="text-[11px] font-bold text-brand-500 hover:scale-105 transition-all uppercase tracking-widest">● Today</button>
              </div>
              
              <CalendarGrid
                year={viewYear}
                month={viewMonth}
                dateRange={dateRangeControl}
                onDateClick={dateRangeControl.handleDateClick}
              />
            </div>
          </div>

          <SelectionBar range={dateRangeControl.range} onClear={dateRangeControl.clearRange} />
        </div>
      </div>
    </div>
  );
}

export default App;
