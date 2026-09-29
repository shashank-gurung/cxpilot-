import React from 'react';
import { Save, Key, Sliders } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">SYSTEM CONFIGURATION</span>
          <h1 className="text-2xl font-bold text-white tracking-tight">Settings</h1>
          <p className="text-xs text-slate-400 mt-0.5">Manage AI model parameters, team roles, and system integrations.</p>
        </div>

        <button className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-md">
          <Save className="w-3.5 h-3.5" />
          <span>Save Changes</span>
        </button>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-slate-900/80 rounded-xl border border-slate-800/90 shadow-dark-card p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-400" />
              AI Copilot & Model Config
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-300 block mb-1">Primary LLM Model</label>
                <select className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 font-medium focus:ring-2 focus:ring-indigo-500/30">
                  <option>CX-Neural-v4 (Recommended for Support)</option>
                  <option>Claude-3.5-Sonnet (Deep Reasoning)</option>
                  <option>GPT-4o (Fast Deflection)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-300 block mb-1">Confidence Deflection Threshold (90%)</label>
                <input type="range" min="50" max="99" defaultValue="90" className="w-full accent-indigo-500 bg-slate-800" />
                <span className="text-[11px] text-slate-500">Only auto-resolve tickets with sentiment confidence above threshold.</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Key className="w-4 h-4 text-indigo-400" />
              API Access Keys
            </h2>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-between text-xs">
              <div>
                <p className="font-mono font-bold text-slate-200">cx_live_9f8371a...9283</p>
                <p className="text-[10px] text-slate-500">Created 3 months ago • Production Key</p>
              </div>
              <button className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded font-semibold text-xs hover:bg-slate-700">
                Revoke
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 shadow-dark-card p-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">System Status</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">API Gateway</span>
                <span className="font-semibold text-emerald-400">Operational</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Vector Embeddings</span>
                <span className="font-semibold text-emerald-400">Active</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Webhook Streaming</span>
                <span className="font-semibold text-emerald-400">99.98% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
