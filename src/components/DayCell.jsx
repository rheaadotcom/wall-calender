import React from 'react';
import { HOLIDAYS } from '../constants/calendarData';

export function DayCell({ day, isToday, isCurrent, isStart, isEnd, isInRange, onClick, index }) {
  const { date } = day;
  const monthDay = date.getDate();
  const holidayKey = `${date.getMonth()}-${monthDay}`;
  const holidayLabel = isCurrent ? HOLIDAYS[holidayKey] : null;
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;

  let classes = 'day-cell day-entrance relative flex flex-col items-center justify-center aspect-square rounded-2xl cursor-pointer transition-all duration-300 ';
  
  if (!isCurrent) {
    classes += 'text-gray-400/20 dark:text-gray-700/30 ';
  } else if (isStart || isEnd) {
    classes += 'bg-brand-500 text-white font-bold shadow-glow scale-110 z-10 ';
  } else if (isInRange) {
    classes += 'range-cell text-brand-600 dark:text-brand-400 ';
  } else if (isToday) {
    classes += 'bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 font-bold ring-2 ring-brand-500/30 ';
  } else {
    classes += (isWeekend ? 'text-gray-400 dark:text-gray-500 ' : 'text-gray-700 dark:text-gray-300 ');
    classes += 'hover:bg-gray-100 dark:hover:bg-gray-800/50 ';
  }

  return (
    <div className={classes} style={{ animationDelay: `${index * 12}ms` }} onClick={() => onClick(date)}>
      <span className="text-sm md:text-base pointer-events-none">{monthDay}</span>
      {holidayLabel && <><div className="holiday-dot"/><span className="holiday-label no-print">{holidayLabel}</span></>}
      {isToday && !isStart && !isEnd && <div className="absolute bottom-2 w-1 h-1 rounded-full bg-brand-500 shadow-[0_0_8px_#3b82f6]" />}
    </div>
  );
}
