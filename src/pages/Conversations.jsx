import React, { useState } from 'react';
import { Send, CheckCircle2, UserPlus, Sparkles, Paperclip, Image, Code } from 'lucide-react';

export default function Conversations() {
  const [replyText, setReplyText] = useState('');

  return (
    <div className="space-y-6 pb-12">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800/90 shadow-dark-card">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shadow-md">
            AS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold text-white">Arjun Singh</h1>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">Active</span>
              <span className="px-2 py-0.5 rounded bg-rose-500 text-white text-[10px] font-extrabold uppercase shadow-[0_0_10px_rgba(244,63,94,0.4)]">Priority: High</span>
            </div>
            <p className="text-xs text-slate-400">Enterprise Tier • Acme Corp • Ticket #CX-8492</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold border border-slate-700">
            <UserPlus className="w-3.5 h-3.5" />
            <span>Assign</span>
          </button>
          <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-md">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Resolve Ticket</span>
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Chat Thread (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 shadow-dark-card p-5 space-y-5 min-h-[420px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-center">
                <span className="px-3 py-1 bg-slate-800/80 rounded-full text-[10px] font-semibold text-slate-400 border border-slate-700/60">
                  Today, 10:42 AM
                </span>
              </div>

              {/* Customer Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 font-bold flex items-center justify-center text-xs flex-shrink-0 border border-slate-700">
                  AS
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-white">Arjun Singh</span>
                    <span className="text-[10px] text-slate-400">10:42 AM</span>
                  </div>
                  <div className="bg-slate-800/90 text-slate-200 text-xs p-3.5 rounded-2xl rounded-tl-none max-w-lg leading-relaxed border border-slate-700/60">
                    Hi team, we are experiencing intermittent token timeout errors on our production webhook endpoint since the latest v2 migration. Can someone look into this immediately?
                  </div>
                </div>
              </div>

              {/* Support Agent Message */}
              <div className="flex gap-3 justify-end">
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] text-slate-400">10:45 AM</span>
                    <span className="text-xs font-bold text-white">Priya Mehta (Support)</span>
                  </div>
                  <div className="bg-indigo-600 text-white text-xs p-3.5 rounded-2xl rounded-tr-none max-w-lg leading-relaxed shadow-md">
                    Hello Arjun! I'm checking your webhook gateway logs right now. Give me just 2 minutes to inspect the payload headers.
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-700 text-white font-bold flex items-center justify-center text-xs flex-shrink-0 shadow-md">
                  PM
                </div>
              </div>

              {/* AI Auto-Suggestion Box */}
              <div className="bg-purple-950/20 border border-purple-500/30 rounded-xl p-4 space-y-2 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-purple-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    CXPilot AI Suggestion
                  </span>
                  <span className="text-[10px] text-purple-400/80 font-medium">10:46 AM</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed bg-slate-900/90 p-3 rounded-lg border border-purple-500/20">
                  Automated root-cause analysis identified potential header mismatch:<br />
                  <code className="text-[11px] font-mono text-indigo-400">X-Signature-SHA256 length mismatch on client SDK v2.4.1</code>
                </p>
                <button
                  onClick={() => setReplyText("Hi Arjun, our AI analysis identified a signature header length mismatch on client SDK v2.4.1. Please ensure your secret string matches the v2 specification.")}
                  className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Use AI Response</span>
                </button>
              </div>
            </div>

            {/* Input Reply Textarea */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-slate-400 px-1">
                <Paperclip className="w-4 h-4 cursor-pointer hover:text-slate-200" />
                <Image className="w-4 h-4 cursor-pointer hover:text-slate-200" />
                <Code className="w-4 h-4 cursor-pointer hover:text-slate-200" />
              </div>
              <div className="relative">
                <textarea
                  rows={3}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply or use AI assist..."
                  className="w-full p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                />
                <button className="absolute right-3 bottom-3 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg shadow-md flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Customer Info & Timeline (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 shadow-dark-card p-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Customer Profile</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Company</span>
                <span className="font-semibold text-white">Acme Corp</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Email</span>
                <span className="font-semibold text-indigo-400">arjun@acmecorp.io</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Plan</span>
                <span className="font-semibold text-white">Enterprise ($4,999/mo)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">CSM Assigned</span>
                <span className="font-semibold text-white">Elena Rostova</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 shadow-dark-card p-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">AI Sentiment & Insights</h3>
            <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
              <p className="text-xs font-bold text-amber-300">Frustrated (Improving)</p>
              <p className="text-[11px] text-amber-400/80 mt-0.5">Urgency score: 88/100</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-[11px] font-bold text-slate-500 uppercase">Suggested Macros</p>
              <button className="w-full text-left p-2 rounded bg-slate-800/80 hover:bg-slate-700/80 text-xs font-medium text-slate-200 border border-slate-700/60">
                Webhook Retry Protocol →
              </button>
              <button className="w-full text-left p-2 rounded bg-slate-800/80 hover:bg-slate-700/80 text-xs font-medium text-slate-200 border border-slate-700/60">
                Escalate to Engineering Tier 3 →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
