import React, { useState } from 'react';
import { Bot, Sparkles, Send, RefreshCw, Copy, Check, ShieldAlert, Cpu } from 'lucide-react';

export default function AICopilot() {
  const [copied, setCopied] = useState(false);
  const [responseText, setResponseText] = useState(
    "Hi Arjun,\n\nI'm really sorry about the delay with your order. I completely understand how frustrating it must be to wait this long.\n\nI'm checking the latest status of your order now and will help get this resolved as quickly as possible.\n\nThank you for your patience."
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(responseText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">AI ENGINE v4.2 • Autonomous Copilot</span>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">AI Customer Copilot</h1>
          <p className="text-xs text-slate-500 mt-0.5">Understand the customer. Generate the right response. Resolve faster.</p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>✦ Analyze with AI</span>
        </button>
      </div>

      {/* 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Ticket Details (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-slate-200/90 shadow-card p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-xs">
                AS
              </div>
              <div>
                <p className="font-bold text-slate-900 text-xs">Arjun Singh</p>
                <p className="text-[10px] text-slate-400">Ticket #84920 • VIP Customer</p>
              </div>
            </div>
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-2">
            <span className="text-[10px] text-slate-400 font-semibold">Today, 10:42 AM</span>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              "I've been waiting five days for my order. Nobody is helping me and I'm extremely frustrated."
            </p>
          </div>

          <div className="p-3 bg-indigo-50/60 border border-indigo-100 rounded-lg flex items-center gap-2 text-xs text-indigo-900 font-medium">
            <Bot className="w-4 h-4 text-indigo-600" />
            <span>Auto-assigned to support queue via routing rule #4</span>
          </div>
        </div>

        {/* Middle Column: AI Real-Time Analysis (3 cols) */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-slate-200/90 shadow-card p-5 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
            <Cpu className="w-4 h-4 text-indigo-600" />
            <h3 className="text-xs font-bold text-slate-900 uppercase">AI Analysis</h3>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded-lg">
              <span className="text-[10px] text-slate-400 font-bold block uppercase">Sentiment</span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                Negative
              </span>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg">
              <span className="text-[10px] text-slate-400 font-bold block uppercase">Intent</span>
              <span className="text-xs font-bold text-slate-800 mt-1 block">Delivery Delay</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg">
              <span className="text-[10px] text-slate-400 font-bold block uppercase">Emotion</span>
              <span className="text-xs font-bold text-amber-700 mt-1 block">Frustrated</span>
            </div>

            <div className="p-3 bg-rose-50 rounded-lg border border-rose-100">
              <span className="text-[10px] text-rose-700 font-bold block uppercase">Priority</span>
              <span className="text-xs font-bold text-rose-700 mt-1 block">High Priority</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg">
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase">Confidence Score</span>
                <span className="font-bold text-indigo-600">94%</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full rounded-full w-[94%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: AI Generated Response & Actions (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/90 shadow-card p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase">Recommended Action</span>
              <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-bold">AI Suggested</span>
            </div>

            <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200/60 leading-relaxed">
              Apologize for the delay, acknowledge the customer's frustration, provide the latest delivery status, and offer an appropriate resolution.
            </p>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">AI Generated Response</span>
                <button className="flex items-center gap-1 text-[11px] text-indigo-600 font-semibold hover:underline">
                  <RefreshCw className="w-3 h-3" />
                  <span>Regenerate</span>
                </button>
              </div>

              <textarea
                rows={6}
                value={responseText}
                onChange={(e) => setResponseText(e.target.value)}
                className="w-full p-3.5 bg-slate-50 border border-indigo-100 rounded-xl text-xs text-slate-800 leading-relaxed focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-sm">
              <Send className="w-3.5 h-3.5" />
              <span>Send Response</span>
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
