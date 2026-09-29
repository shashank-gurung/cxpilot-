import React from 'react';
import { Search, Bell, HelpCircle, Calendar, Sparkles } from 'lucide-react';

export default function TopNav({ onAnalyzeClick }) {
  return (
    <header className="h-16 bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Search / Command palette */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search conversations, sentiment, intents... (⌘K)"
            className="w-full pl-9 pr-12 py-1.5 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all"
          />
          <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 bg-slate-800 border border-slate-700 rounded shadow-xs">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Actions & Filters */}
      <div className="flex items-center gap-3">
        {/* Time Selector Dropdown */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium text-slate-300 shadow-xs hover:bg-slate-800/80 cursor-pointer transition-colors">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>Last 30 Days</span>
        </div>

        {/* Primary Action Button */}
        <button
          onClick={onAnalyzeClick}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
          <span>+ Analyze Conversation</span>
        </button>

        <div className="h-4 w-px bg-slate-800 mx-1"></div>

        {/* Notification Bell */}
        <button className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 relative transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-[#0b0f19]"></span>
        </button>

        {/* Help Center */}
        <button className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 transition-colors">
          <HelpCircle className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
