import { useMemo } from 'react';

export function useCalendarDays(year, month) {
  return useMemo(() => {
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    let startDow = first.getDay();
    startDow = startDow === 0 ? 6 : startDow - 1; // Adjust to Monday base

    const days = [];
    const prevMonthLast = new Date(year, month, 0);

    for (let i = startDow - 1; i >= 0; i--) {
      days.push({ date: new Date(year, month - 1, prevMonthLast.getDate() - i), isCurrent: false });
    }
    for (let d = 1; d <= last.getDate(); d++) {
      days.push({ date: new Date(year, month, d), isCurrent: true });
    }
    const remaining = 42 - days.length;
    for (let d = 1; d <= remaining; d++) {
      days.push({ date: new Date(year, month + 1, d), isCurrent: false });
    }
    return days;
  }, [year, month]);
}
