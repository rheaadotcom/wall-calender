import { useState, useCallback } from 'react';

export function useDateRange() {
  const [range, setRange] = useState({ start: null, end: null, clicks: 0 });

  const handleDateClick = useCallback((date) => {
    setRange(prev => {
      if (prev.clicks === 0) return { start: date, end: null, clicks: 1 };
      if (prev.clicks === 1) {
        return date < prev.start 
          ? { start: date, end: prev.start, clicks: 2 } 
          : { start: prev.start, end: date, clicks: 2 };
      }
      return { start: date, end: null, clicks: 1 };
    });
  }, []);

  const isInRange = (d) => range.start && range.end && d > range.start && d < range.end;
  const isStart = (d) => range.start && d.getTime() === range.start.getTime();
  const isEnd = (d) => range.end && d.getTime() === range.end.getTime();

  return { range, handleDateClick, isInRange, isStart, isEnd, clearRange: () => setRange({ start: null, end: null, clicks: 0 }) };
}
