import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function AIInsights() {
  const insightsList = [
    {
      id: 1,
      title: 'Delivery Delays',
      stat: '42%',
      tag: 'Critical Churn Driver',
      tagBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
      summary: '"Delivery delays are the most common source of customer frustration."',
      action: 'Improve proactive delivery notifications and real-time tracking integration.',
      conversations: '1,420'
    },
    {
      id: 2,
      title: 'Product Quality & Defect Tracking',
      stat: '28%',
      tag: 'Negative Sentiment',
      tagBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      summary: '"Customers frequently mention product quality concerns post-v2 release."',
      action: 'Review recent product feedback with engineering and identify recurring issues.',
      conversations: '945'
    },
    {
      id: 3,
      title: 'Response Latency Peak',
      stat: '4m 32s',
      tag: 'Target < 3m 00s',
      tagBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      summary: '"First-response latency peaks between 2:00 PM and 5:00 PM EST daily."',
      action: 'Reducing first-response time below 3 minutes may improve resolution efficiency.',
      conversations: 'Configure routing'
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">INTELLIGENCE ENGINE v4.2 • Updated 12 mins ago</span>
          <h1 className="text-2xl font-bold text-white tracking-tight">AI Insights</h1>
          <p className="text-xs text-slate-400 mt-0.5">Turn customer conversations into actionable decisions.</p>
        </div>

        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg text-xs font-semibold shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>✦ Run Deep Analysis</span>
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-5 shadow-dark-card">
          <span className="text-xs font-semibold text-slate-400 uppercase">Processed Conversations</span>
          <div className="text-2xl font-extrabold text-white mt-2">24,892</div>
          <span className="text-xs text-emerald-400 font-semibold">~ +14.2% across all channels</span>
        </div>

        <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-5 shadow-dark-card">
          <span className="text-xs font-semibold text-slate-400 uppercase">Sentiment Health Score</span>
          <div className="text-2xl font-extrabold text-white mt-2">88.4%</div>
          <span className="text-xs text-emerald-400 font-semibold">~ +3.1% NLP emotional polarity</span>
        </div>

        <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-5 shadow-dark-card">
          <span className="text-xs font-semibold text-slate-400 uppercase">Actionable Directives</span>
          <div className="text-2xl font-extrabold text-white mt-2">12 Active <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">3 High Priority</span></div>
          <span className="text-xs text-slate-400">Recommended workflow updates</span>
        </div>
      </div>

      {/* Grid of Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insightsList.map((item) => (
          <div key={item.id} className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-6 shadow-dark-card flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border mt-1 ${item.tagBg}`}>
                    {item.tag}
                  </span>
                </div>
                <span className="text-2xl font-extrabold text-white">{item.stat}</span>
              </div>

              <div className="my-4 p-3 bg-slate-950 rounded-lg text-xs italic text-slate-300 border border-slate-800/60">
                {item.summary}
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">AI RECOMMENDED ACTION</span>
                <p className="text-xs text-slate-300 font-medium bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20">
                  {item.action}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-indigo-400 font-bold hover:underline cursor-pointer flex items-center gap-1">
                View {item.conversations} conversations <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
