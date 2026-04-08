import React, { useMemo } from 'react';

export function NotesSection({ notes, setNotes, dateRange }) {
  const rangeLabel = useMemo(() => {
    if (dateRange.range.start && dateRange.range.end) {
      const fmt = (d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      return `${fmt(dateRange.range.start)} - ${fmt(dateRange.range.end)}`;
    }
    return null;
  }, [dateRange.range]);

  return (
    <div className="flex flex-col h-[400px] border-r border-gray-100 dark:border-gray-800 pr-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Personal Notes</h2>
        {rangeLabel && (
          <span className="text-[10px] text-brand-500 font-bold bg-brand-50 dark:bg-brand-900/30 px-2 py-0.5 rounded-full">
            {rangeLabel}
          </span>
        )}
      </div>
      <textarea
        className="flex-1 lined-paper bg-transparent resize-none text-[13px] text-gray-600 dark:text-gray-300 focus:outline-none placeholder:text-gray-300 dark:placeholder:text-gray-600"
        placeholder="Capture your thoughts..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
}
