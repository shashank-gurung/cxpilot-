import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  CartesianGrid
} from 'recharts';

const csatData = [
  { day: 'May 1', score: 4.45 },
  { day: 'May 10', score: 4.62 },
  { day: 'May 20', score: 4.75 },
  { day: 'May 30', score: 4.89 }
];

const sentimentPieData = [
  { name: 'Positive', value: 34992, color: '#6366f1' },
  { name: 'Neutral', value: 9720, color: '#38bdf8' },
  { name: 'Negative', value: 3888, color: '#f43f5e' }
];

export default function Analytics() {
  const [timeFilter, setTimeFilter] = useState('30 Days');

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">PERFORMANCE REPORT • Q3 Overview</span>
          <h1 className="text-2xl font-bold text-white tracking-tight">Analytics & Intelligence</h1>
          <p className="text-xs text-slate-400 mt-0.5">Comprehensive tracking of CSAT, response latency, and deflection trends.</p>
        </div>

        <div className="flex items-center gap-2 bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-xs font-bold">
          {['30 Days', '90 Days'].map((t) => (
            <button
              key={t}
              onClick={() => setTimeFilter(t)}
              className={`px-3 py-1.5 rounded-md ${timeFilter === t ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-slate-200'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-5 shadow-dark-card">
          <span className="text-[11px] font-bold text-slate-400 uppercase">CSAT SCORE</span>
          <div className="text-3xl font-extrabold text-white mt-2">4.89</div>
          <span className="text-xs font-semibold text-emerald-400">+12.4% Target: 4.80 by end of Q3</span>
        </div>

        <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-5 shadow-dark-card">
          <span className="text-[11px] font-bold text-slate-400 uppercase">AI RESOLUTION RATE</span>
          <div className="text-3xl font-extrabold text-white mt-2">84.2%</div>
          <span className="text-xs font-semibold text-emerald-400">+4.1% (14,230 autonomous resolutions)</span>
        </div>

        <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-5 shadow-dark-card">
          <span className="text-[11px] font-bold text-slate-400 uppercase">AVG RESPONSE TIME</span>
          <div className="text-3xl font-extrabold text-white mt-2">14s</div>
          <span className="text-xs font-semibold text-emerald-400">-2.3s Instant copilot assist active</span>
        </div>

        <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-5 shadow-dark-card">
          <span className="text-[11px] font-bold text-slate-400 uppercase">TOTAL CONVERSATIONS</span>
          <div className="text-3xl font-extrabold text-white mt-2">48.6k</div>
          <span className="text-xs font-semibold text-emerald-400">+18.9% Across 4 integrated channels</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* CSAT Line Chart (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/80 rounded-xl border border-slate-800/90 p-6 shadow-dark-card space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">Customer Satisfaction Trend</h2>
              <p className="text-xs text-slate-400">Daily CSAT score averages over the past 30 days</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={csatData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="day" stroke="#64748b" fontSize={11} axisLine={false} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={11} domain={[4.0, 5.0]} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#090d16',
                    borderRadius: '8px',
                    border: '1px solid #1e293b',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Line type="monotone" dataKey="score" stroke="#818cf8" strokeWidth={3} dot={{ r: 5, fill: '#818cf8' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sentiment Pie Donut (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/80 rounded-xl border border-slate-800/90 p-6 shadow-dark-card space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Sentiment Analysis</h2>
            <p className="text-xs text-slate-400">Real-time NLP breakdown</p>
          </div>

          <div className="h-48 flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sentimentPieData} innerRadius={55} outerRadius={80} dataKey="value">
                  {sentimentPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center">
              <span className="text-2xl font-extrabold text-white block">72%</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Positive</span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center py-1 border-b border-slate-800">
              <span className="flex items-center gap-2 text-slate-300 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> Positive
              </span>
              <span className="font-bold text-white">34,992 (72%)</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-800">
              <span className="flex items-center gap-2 text-slate-300 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span> Neutral
              </span>
              <span className="font-bold text-white">9,720 (20%)</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="flex items-center gap-2 text-slate-300 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Negative
              </span>
              <span className="font-bold text-white">3,888 (8%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
