import React from 'react';
import { Sparkles, Truck, PackageX, Clock, ArrowRight, Zap, Lightbulb, TrendingUp } from 'lucide-react';

export default function AIInsights() {
  const insightsList = [
    {
      id: 1,
      title: 'Delivery Delays',
      stat: '42%',
      tag: 'Critical Churn Driver',
      tagBg: 'bg-rose-50 text-rose-700 border-rose-200',
      summary: '"Delivery delays are the most common source of customer frustration."',
      action: 'Improve proactive delivery notifications and real-time tracking integration.',
      conversations: '1,420'
    },
    {
      id: 2,
      title: 'Product Quality & Defect Tracking',
      stat: '28%',
      tag: 'Negative Sentiment',
      tagBg: 'bg-amber-50 text-amber-700 border-amber-200',
      summary: '"Customers frequently mention product quality concerns post-v2 release."',
      action: 'Review recent product feedback with engineering and identify recurring issues.',
      conversations: '945'
    },
    {
      id: 3,
      title: 'Response Latency Peak',
      stat: '4m 32s',
      tag: 'Target < 3m 00s',
      tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
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
          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">INTELLIGENCE ENGINE v4.2 • Updated 12 mins ago</span>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">AI Insights</h1>
          <p className="text-xs text-slate-500 mt-0.5">Turn customer conversations into actionable decisions.</p>
        </div>

        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>✦ Run Deep Analysis</span>
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-card">
          <span className="text-xs font-semibold text-slate-400 uppercase">Processed Conversations</span>
          <div className="text-2xl font-extrabold text-slate-900 mt-2">24,892</div>
          <span className="text-xs text-emerald-600 font-semibold">~ +14.2% across all channels</span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-card">
          <span className="text-xs font-semibold text-slate-400 uppercase">Sentiment Health Score</span>
          <div className="text-2xl font-extrabold text-slate-900 mt-2">88.4%</div>
          <span className="text-xs text-emerald-600 font-semibold">~ +3.1% NLP emotional polarity</span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-card">
          <span className="text-xs font-semibold text-slate-400 uppercase">Actionable Directives</span>
          <div className="text-2xl font-extrabold text-slate-900 mt-2">12 Active <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-100 text-rose-700">3 High Priority</span></div>
          <span className="text-xs text-slate-500">Recommended workflow updates</span>
        </div>
      </div>

      {/* Grid of Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insightsList.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-card flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border mt-1 ${item.tagBg}`}>
                    {item.tag}
                  </span>
                </div>
                <span className="text-2xl font-extrabold text-slate-900">{item.stat}</span>
              </div>

              <div className="my-4 p-3 bg-slate-50 rounded-lg text-xs italic text-slate-600 border border-slate-100">
                {item.summary}
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">AI RECOMMENDED ACTION</span>
                <p className="text-xs text-slate-700 font-medium bg-indigo-50/50 p-3 rounded-lg border border-indigo-100">
                  {item.action}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-indigo-600 font-bold hover:underline cursor-pointer flex items-center gap-1">
                View {item.conversations} conversations <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
