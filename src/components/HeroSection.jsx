import React, { useState, useEffect } from 'react';
import { MONTH_GALLERY, MONTH_NAMES } from '../constants/calendarData';

export function HeroSection({ month, year, onPrev, onNext, isFlipping }) {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlideIdx(s => (s + 1) % 3), 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => setSlideIdx(0), [month]);

  return (
    <div className={`relative w-full overflow-hidden rounded-t-[2.5rem] transition-all duration-700 ${isFlipping ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`} style={{ aspectRatio: '21/9', minHeight: '220px' }}>
      <div className="absolute inset-0 w-full h-full bg-slate-200 dark:bg-slate-900">
         {MONTH_GALLERY[month].map((img, i) => (
           <img key={img} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === slideIdx ? 'opacity-100' : 'opacity-0'}`} />
         ))}
      </div>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
        <polygon points="550,0 1000,0 1000,400 400,400" fill="#3b82f6" fillOpacity="0.85" />
        <polygon points="570,0 1000,0 1000,400 420,400" fill="#2563eb" fillOpacity="0.6" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-end justify-center pr-12 md:pr-24 z-10 text-white select-none">
        <span className="font-display text-sm md:text-xl font-bold tracking-[0.3em] opacity-80 mb-2">{year}</span>
        <h1 className="font-display text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">{MONTH_NAMES[month]}</h1>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-6 z-20 no-print">
        <button onClick={onPrev} className="p-3 rounded-full bg-black/10 hover:bg-black/20 text-white backdrop-blur-sm transition-transform hover:scale-110 active:scale-95">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button onClick={onNext} className="p-3 rounded-full bg-black/10 hover:bg-black/20 text-white backdrop-blur-sm transition-transform hover:scale-110 active:scale-95">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
}
