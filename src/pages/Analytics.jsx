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
  BarChart,
  Bar,
  CartesianGrid
} from 'recharts';
import { BarChart3, TrendingUp, Clock, Bot, Smile } from 'lucide-react';

const csatData = [
  { day: 'May 1', score: 4.45 },
  { day: 'May 10', score: 4.62 },
  { day: 'May 20', score: 4.75 },
  { day: 'May 30', score: 4.89 }
];

const sentimentPieData = [
  { name: 'Positive', value: 34992, color: '#4f46e5' },
  { name: 'Neutral', value: 9720, color: '#93c5fd' },
  { name: 'Negative', value: 3888, color: '#fca5a5' }
];

const issueBreakdown = [
  { issue: 'Billing & Subscription Management', pct: 34.2, count: '16.6k' },
  { issue: 'Single Sign-On (SSO) Integration', pct: 22.8, count: '11.1k' },
  { issue: 'API Rate Limits & Webhooks', pct: 15.5, count: '7.5k' },
  { issue: 'Order Delivery & Shipping', pct: 14.1, count: '6.8k' },
];

export default function Analytics() {
  const [timeFilter, setTimeFilter] = useState('30D');

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">PERFORMANCE REPORT • Q3 Overview</span>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Analytics & Intelligence</h1>
          <p className="text-xs text-slate-500 mt-0.5">Comprehensive tracking of CSAT, response latency, and deflection trends.</p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200/60 text-xs font-bold">
          {['30 Days', '90 Days'].map((t) => (
            <button
              key={t}
              onClick={() => setTimeFilter(t)}
              className={`px-3 py-1.5 rounded-md ${timeFilter === t ? 'bg-white text-indigo-600 shadow-2xs' : 'text-slate-500'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-card">
          <span className="text-[11px] font-bold text-slate-400 uppercase">CSAT SCORE</span>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">4.89</div>
          <span className="text-xs font-semibold text-emerald-600">+12.4% Target: 4.80 by end of Q3</span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-card">
          <span className="text-[11px] font-bold text-slate-400 uppercase">AI RESOLUTION RATE</span>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">84.2%</div>
          <span className="text-xs font-semibold text-emerald-600">+4.1% (14,230 autonomous resolutions)</span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-card">
          <span className="text-[11px] font-bold text-slate-400 uppercase">AVG RESPONSE TIME</span>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">14s</div>
          <span className="text-xs font-semibold text-emerald-600">-2.3s Instant copilot assist active</span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-card">
          <span className="text-[11px] font-bold text-slate-400 uppercase">TOTAL CONVERSATIONS</span>
          <div className="text-3xl font-extrabold text-slate-900 mt-2">48.6k</div>
          <span className="text-xs font-semibold text-emerald-600">+18.9% Across 4 integrated channels</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* CSAT Line Chart (8 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200/90 p-6 shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">Customer Satisfaction Trend</h2>
              <p className="text-xs text-slate-500">Daily CSAT score averages over the past 30 days</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={csatData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} axisLine={false} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={11} domain={[4.0, 5.0]} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0f172a',
                    borderRadius: '8px',
                    border: 'none',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                />
                <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={3} dot={{ r: 5, fill: '#4f46e5' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sentiment Pie Donut (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/90 p-6 shadow-card space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-900">Sentiment Analysis</h2>
            <p className="text-xs text-slate-500">Real-time NLP breakdown</p>
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
              <span className="text-2xl font-extrabold text-slate-900 block">72%</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase">Positive</span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center py-1 border-b border-slate-100">
              <span className="flex items-center gap-2 text-slate-600 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span> Positive
              </span>
              <span className="font-bold text-slate-900">34,992 (72%)</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-100">
              <span className="flex items-center gap-2 text-slate-600 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-300"></span> Neutral
              </span>
              <span className="font-bold text-slate-900">9,720 (20%)</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="flex items-center gap-2 text-slate-600 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-300"></span> Negative
              </span>
              <span className="font-bold text-slate-900">3,888 (8%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
