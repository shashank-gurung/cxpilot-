import React, { useState } from 'react';
import { Search, Bell, HelpCircle, Calendar, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function TopNav({ onAnalyzeClick }) {
  const [timeRange, setTimeRange] = useState('30d');

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Search / Command palette */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search conversations, sentiment, intents... (⌘K)"
            className="w-full pl-9 pr-12 py-1.5 bg-slate-100/70 border border-slate-200/80 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
          <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 bg-white border border-slate-200 rounded shadow-2xs">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Actions & Filters */}
      <div className="flex items-center gap-3">
        {/* Time Selector Dropdown */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/80 rounded-lg text-xs font-medium text-slate-600 shadow-2xs hover:bg-slate-50 cursor-pointer transition-colors">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>Last 30 Days</span>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={onAnalyzeClick}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-xs font-semibold shadow-sm shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
          <span>+ Analyze Conversation</span>
        </button>

        <div className="h-4 w-px bg-slate-200 mx-1"></div>

        {/* Notification Bell */}
        <button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 relative transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
        </button>

        {/* Help Center */}
        <button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
