import React from 'react';
import { DayCell } from './DayCell';
import { useCalendarDays } from '../hooks/useCalendarDays';
import { DAYS_OF_WEEK } from '../constants/calendarData';

export function CalendarGrid({ year, month, dateRange, onDateClick }) {
  const days = useCalendarDays(year, month);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="animate-fade-slide">
      <div className="grid grid-cols-7 gap-x-2 text-center text-[10px] font-black text-gray-400 mb-6 tracking-widest border-b pb-2 dark:border-gray-800">
        {DAYS_OF_WEEK.map(h => <div key={h}>{h}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-x-2 gap-y-2">
        {days.map((day, idx) => (
          <DayCell
            key={idx}
            index={idx}
            day={day}
            isToday={day.isCurrent && day.date.getTime() === today.getTime()}
            isCurrent={day.isCurrent}
            isStart={dateRange.isStart(day.date)}
            isEnd={dateRange.isEnd(day.date)}
            isInRange={dateRange.isInRange(day.date)}
            onClick={onDateClick}
          />
        ))}
      </div>
    </div>
  );
}
