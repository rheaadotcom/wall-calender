import React from 'react';

export function SelectionBar({ range, onClear }) {
  if (!range.start) return null;

  return (
    <div className="px-10 py-5 bg-gray-50/50 dark:bg-black/20 border-t border-gray-100 dark:border-white/5 flex justify-between items-center no-print">
      <div className="flex items-center gap-4 text-xs font-bold text-gray-500 dark:text-gray-400">
        <span className="text-brand-500">{range.start.toDateString()}</span>
        {range.end && (
          <>
            <span>→</span>
            <span className="text-brand-500">{range.end.toDateString()}</span>
            <span className="opacity-50 font-medium tracking-tight">
              ({Math.round((range.end - range.start) / 86400000) + 1} days)
            </span>
          </>
        )}
      </div>
      <button
        onClick={onClear}
        className="text-[10px] font-black uppercase text-brand-500 tracking-widest hover:text-brand-700 transition-all"
      >
        Clear Selection
      </button>
    </div>
  );
}
