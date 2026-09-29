import React, { useState } from 'react';
import { Send, CheckCircle2, UserPlus, Sparkles, AlertCircle, Clock, Paperclip, Image, Code } from 'lucide-react';

export default function Conversations() {
  const [replyText, setReplyText] = useState('');

  return (
    <div className="space-y-6 pb-12">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200/90 shadow-card">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs">
            AS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold text-slate-900">Arjun Singh</h1>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">Active</span>
              <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-700 text-[10px] font-extrabold uppercase">Priority: High</span>
            </div>
            <p className="text-xs text-slate-500">Enterprise Tier • Acme Corp • Ticket #CX-8492</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold">
            <UserPlus className="w-3.5 h-3.5" />
            <span>Assign</span>
          </button>
          <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Resolve Ticket</span>
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Chat Thread (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-card p-5 space-y-5 min-h-[420px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-center">
                <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-semibold text-slate-500">
                  Today, 10:42 AM
                </span>
              </div>

              {/* Customer Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs flex-shrink-0">
                  AS
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-900">Arjun Singh</span>
                    <span className="text-[10px] text-slate-400">10:42 AM</span>
                  </div>
                  <div className="bg-slate-100 text-slate-800 text-xs p-3.5 rounded-2xl rounded-tl-none max-w-lg leading-relaxed">
                    Hi team, we are experiencing intermittent token timeout errors on our production webhook endpoint since the latest v2 migration. Can someone look into this immediately?
                  </div>
                </div>
              </div>

              {/* Support Agent Message */}
              <div className="flex gap-3 justify-end">
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] text-slate-400">10:45 AM</span>
                    <span className="text-xs font-bold text-slate-900">Priya Mehta (Support)</span>
                  </div>
                  <div className="bg-indigo-600 text-white text-xs p-3.5 rounded-2xl rounded-tr-none max-w-lg leading-relaxed shadow-sm">
                    Hello Arjun! I'm checking your webhook gateway logs right now. Give me just 2 minutes to inspect the payload headers.
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-700 text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
                  PM
                </div>
              </div>

              {/* AI Auto-Suggestion Box */}
              <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-indigo-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    CXPilot AI Suggestion
                  </span>
                  <span className="text-[10px] text-indigo-500 font-medium">10:46 AM</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-indigo-100">
                  Automated root-cause analysis identified potential header mismatch:<br />
                  <code className="text-[11px] font-mono text-indigo-600">X-Signature-SHA256 length mismatch on client SDK v2.4.1</code>
                </p>
                <button
                  onClick={() => setReplyText("Hi Arjun, our AI analysis identified a signature header length mismatch on client SDK v2.4.1. Please ensure your secret string matches the v2 specification.")}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-2xs flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Use AI Response</span>
                </button>
              </div>
            </div>

            {/* Input Reply Textarea */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <div className="flex items-center gap-2 text-slate-400 px-1">
                <Paperclip className="w-4 h-4 cursor-pointer hover:text-slate-600" />
                <Image className="w-4 h-4 cursor-pointer hover:text-slate-600" />
                <Code className="w-4 h-4 cursor-pointer hover:text-slate-600" />
              </div>
              <div className="relative">
                <textarea
                  rows={3}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply or use AI assist..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
                <button className="absolute right-3 bottom-3 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5">
                  <Send className="w-3.5 h-3.5" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Customer Info & Timeline (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-card p-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Customer Profile</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Company</span>
                <span className="font-semibold text-slate-900">Acme Corp</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Email</span>
                <span className="font-semibold text-indigo-600">arjun@acmecorp.io</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Plan</span>
                <span className="font-semibold text-slate-900">Enterprise ($4,999/mo)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">CSM Assigned</span>
                <span className="font-semibold text-slate-900">Elena Rostova</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200/90 shadow-card p-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI Sentiment & Insights</h3>
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
              <p className="text-xs font-bold text-amber-900">Frustrated (Improving)</p>
              <p className="text-[11px] text-amber-700 mt-0.5">Urgency score: 88/100</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-[11px] font-bold text-slate-400 uppercase">Suggested Macros</p>
              <button className="w-full text-left p-2 rounded bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200/60">
                Webhook Retry Protocol →
              </button>
              <button className="w-full text-left p-2 rounded bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200/60">
                Escalate to Engineering Tier 3 →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
