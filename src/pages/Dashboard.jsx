import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  TrendingDown,
  Heart,
  MessageSquare,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  Zap,
  Bot
} from 'lucide-react';

import PulseWaveform from '../components/PulseWaveform';
import AnimatedCounter from '../components/AnimatedCounter';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

// Mock chart data for 7D, 30D, 90D
const chartDataSets = {
  '7D': [
    { day: 'Mon', positive: 68, neutral: 20, negative: 12 },
    { day: 'Tue', positive: 72, neutral: 18, negative: 10 },
    { day: 'Wed', positive: 65, neutral: 22, negative: 13 },
    { day: 'Thu', positive: 78, neutral: 15, negative: 7 },
    { day: 'Fri', positive: 80, neutral: 14, negative: 6 },
    { day: 'Sat', positive: 84, neutral: 11, negative: 5 },
    { day: 'Sun', positive: 82, neutral: 12, negative: 6 }
  ],
  '30D': [
    { day: 'Week 1', positive: 62, neutral: 24, negative: 14 },
    { day: 'Week 2', positive: 70, neutral: 19, negative: 11 },
    { day: 'Week 3', positive: 76, neutral: 16, negative: 8 },
    { day: 'Week 4', positive: 82, neutral: 12, negative: 6 }
  ],
  '90D': [
    { day: 'Month 1', positive: 58, neutral: 26, negative: 16 },
    { day: 'Month 2', positive: 69, neutral: 20, negative: 11 },
    { day: 'Month 3', positive: 82, neutral: 12, negative: 6 }
  ]
};

// Recent Conversations Data
const recentConversations = [
  {
    id: 'conv-1',
    customer: 'Rahul Sharma',
    avatar: 'RS',
    avatarBg: 'bg-rose-600',
    email: 'rahul.s@acme.com',
    preview: "I've been waiting five days for my order status update...",
    sentiment: 'Negative',
    sentimentColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    priority: 'High',
    priorityColor: 'bg-rose-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.4)]',
    time: '2m ago'
  },
  {
    id: 'conv-2',
    customer: 'Priya Mehta',
    avatar: 'PM',
    avatarBg: 'bg-emerald-600',
    email: 'priya.m@techcorp.io',
    preview: "Thank you for resolving my billing issue so quickly!",
    sentiment: 'Positive',
    sentimentColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    priority: 'Low',
    priorityColor: 'bg-slate-800 text-slate-300 border border-slate-700',
    time: '12m ago'
  },
  {
    id: 'conv-3',
    customer: 'Arjun Singh',
    avatar: 'AS',
    avatarBg: 'bg-amber-600',
    email: 'arjun@vortex.dev',
    preview: "Experiencing intermittent token timeout errors on webhook v2...",
    sentiment: 'Frustrated',
    sentimentColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    priority: 'High',
    priorityColor: 'bg-rose-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.4)]',
    time: '25m ago'
  },
  {
    id: 'conv-4',
    customer: 'Sarah Jenkins',
    avatar: 'SJ',
    avatarBg: 'bg-indigo-600',
    email: 'sarah.j@acme.io',
    preview: "API Rate limit inquiry regarding enterprise webhook throughput...",
    sentiment: 'Positive',
    sentimentColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    priority: 'Medium',
    priorityColor: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    time: '1h ago'
  },
  {
    id: 'conv-5',
    customer: 'Marcus Chen',
    avatar: 'MC',
    avatarBg: 'bg-purple-600',
    email: 'm.chen@stellar.ai',
    preview: "Billing discrepancy #4092 needs immediate manager review...",
    sentiment: 'Frustrated',
    sentimentColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    priority: 'Medium',
    priorityColor: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    time: '2h ago'
  }
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [timeFilter, setTimeFilter] = useState('7D');
  const [selectedSentiment, setSelectedSentiment] = useState('All');

  const filteredConversations = recentConversations.filter(c => {
    if (selectedSentiment === 'All') return true;
    return c.sentiment === selectedSentiment;
  });

  return (
    <div className="space-y-7 pb-12">
      {/* 2. HERO / CX PULSE SECTION */}
      <section className="animate-slide-up delay-100">
        <div className="relative overflow-hidden rounded-2xl bg-[#0f172a] border border-slate-800/90 shadow-2xl p-7 transition-all">
          {/* Subtle Ambient Neon Background Elements */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-600/20 via-emerald-600/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                <span>AI-Powered CX Pulse</span>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Your customers are telling you something.
                </h1>
                <p className="text-sm sm:text-base text-slate-400 font-normal mt-1.5 max-w-xl">
                  Here's what CXPilot discovered across your customer conversations today.
                </p>
              </div>

              {/* Waveform Visualization Component */}
              <div className="pt-2">
                <PulseWaveform />
              </div>
            </div>

            {/* Hero Right: CX Pulse Score Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-xl text-white rounded-xl p-6 shadow-2xl relative overflow-hidden border border-indigo-500/20">
                {/* Subtle AI Grid Background */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="relative z-10 flex flex-col justify-between h-full space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-bold tracking-widest text-indigo-300 uppercase">
                        CX PULSE
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      Healthy
                    </span>
                  </div>

                  {/* Main Score */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                      <AnimatedCounter value={82} duration={1200} />
                    </span>
                    <span className="text-slate-400 text-lg font-medium">/ 100</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    Customer experience is trending positively.
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                      ↑ 6.4% this week
                    </span>
                    <span className="text-slate-400 font-normal">Updated 2m ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KPI CARDS */}
      <section className="animate-slide-up delay-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Customer Sentiment */}
          <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-5 shadow-dark-card dark-card-hover flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Customer Sentiment
              </span>
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
                <Heart className="w-4 h-4 fill-indigo-500/20" />
              </div>
            </div>

            <div className="my-3">
              <div className="text-3xl font-extrabold text-white tracking-tight">
                <AnimatedCounter value={82} suffix="%" duration={1000} />
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Overall positivity index</p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>↑ 6.4%</span>
              <span className="text-slate-500 font-normal ml-0.5">vs last month</span>
            </div>
          </div>

          {/* Card 2: Active Conversations */}
          <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-5 shadow-dark-card dark-card-hover flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Active Conversations
              </span>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
            </div>

            <div className="my-3">
              <div className="text-3xl font-extrabold text-white tracking-tight">
                <AnimatedCounter value={128} duration={1000} />
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Real-time active queue</p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>↑ 12 today</span>
              <span className="text-slate-500 font-normal ml-0.5">inbound volume</span>
            </div>
          </div>

          {/* Card 3: AI Resolutions */}
          <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-5 shadow-dark-card dark-card-hover flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                AI Resolutions
              </span>
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
            </div>

            <div className="my-3">
              <div className="text-3xl font-extrabold text-white tracking-tight">
                <AnimatedCounter value={74} suffix="%" duration={1000} />
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Autonomous handling rate</p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>↑ 8.2%</span>
              <span className="text-slate-500 font-normal ml-0.5">deflection rate</span>
            </div>
          </div>

          {/* Card 4: High Priority */}
          <div className="bg-slate-900/80 rounded-xl border border-slate-800/90 p-5 shadow-dark-card dark-card-hover flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                High Priority
              </span>
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4" />
              </div>
            </div>

            <div className="my-3">
              <div className="text-3xl font-extrabold text-white tracking-tight">
                <AnimatedCounter value={12} duration={1000} />
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Needs immediate attention</p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
              <span>↓ 3 today</span>
              <span className="text-slate-500 font-normal ml-0.5">improving queue</span>
            </div>
          </div>
        </div>
      </section>

      {/* GRID CONTAINER FOR SECTION 4 (CHARTS) & SECTION 5 (AI INSIGHT) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        {/* 4. CUSTOMER SENTIMENT ANALYTICS (8 cols) */}
        <section className="lg:col-span-7 xl:col-span-8 bg-slate-900/80 rounded-xl border border-slate-800/90 p-6 shadow-dark-card flex flex-col justify-between animate-slide-up delay-300">
          <div>
            {/* Header with Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Customer Sentiment
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  How your customers are feeling over time
                </p>
              </div>

              {/* Time Filter Buttons */}
              <div className="flex items-center bg-slate-800/90 p-1 rounded-lg border border-slate-700/60 self-start sm:self-auto">
                {['7D', '30D', '90D'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeFilter(range)}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                      timeFilter === range
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Sentiment Legend */}
            <div className="flex items-center gap-6 mb-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                <span>Positive (72%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
                <span>Neutral (18%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]"></span>
                <span>Negative (10%)</span>
              </div>
            </div>

            {/* Recharts Area Chart */}
            <div className="h-64 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartDataSets[timeFilter]} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPositiveDark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                    </linearGradient>
                    <linearGradient id="colorNeutralDark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.35}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0}/>
                    </linearGradient>
                    <linearGradient id="colorNegativeDark" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.35}/>
                      <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="day" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} unit="%" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#090d16',
                      borderRadius: '12px',
                      border: '1px solid #1e293b',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                      color: '#fff',
                      fontSize: '12px',
                      padding: '12px'
                    }}
                    itemStyle={{ color: '#cbd5e1' }}
                  />
                  <Area type="monotone" dataKey="positive" name="Positive" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill="url(#colorPositiveDark)" />
                  <Area type="monotone" dataKey="neutral" name="Neutral" stroke="#818cf8" strokeWidth={2} fillOpacity={1} fill="url(#colorNeutralDark)" />
                  <Area type="monotone" dataKey="negative" name="Negative" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorNegativeDark)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* 5. AI INSIGHT (4 cols) */}
        <section className="lg:col-span-5 xl:col-span-4 bg-slate-900/80 rounded-xl border border-indigo-500/30 p-6 shadow-ai-glow relative overflow-hidden flex flex-col justify-between animate-slide-up delay-400">
          {/* Ambient Purple/Indigo Neon Backdrop Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider uppercase text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-purple-400 fill-purple-400/20" />
                ✦ AI INSIGHT
              </span>
              <span className="text-[11px] font-medium text-slate-400">Updated 10m ago</span>
            </div>

            {/* Main Insight Title */}
            <h3 className="text-lg font-extrabold text-white leading-snug tracking-tight mb-2">
              Delivery delays are driving negative sentiment.
            </h3>

            {/* Supporting Information */}
            <p className="text-xs text-slate-300 leading-relaxed mb-5 bg-slate-800/60 p-3.5 rounded-lg border border-slate-700/60">
              <strong className="text-white font-bold">42% of negative conversations</strong> this week mention delayed or missing deliveries.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <span className="text-[11px] font-semibold text-slate-400 block">Customer Impact</span>
                <span className="text-lg font-bold text-indigo-300">72%</span>
              </div>
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                <span className="text-[11px] font-semibold text-slate-400 block">Trend</span>
                <span className="text-lg font-bold text-rose-400 inline-flex items-center gap-1">
                  ↑ 13%
                </span>
              </div>
            </div>

            {/* Actionable Recommendation */}
            <div className="space-y-1.5 mb-6">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Recommended Action
              </span>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Consider enabling proactive delivery notifications for delayed shipments.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => navigate('/insights')}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>Explore Insight</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>
      </div>

      {/* 6. RECENT CONVERSATIONS */}
      <section className="bg-slate-900/80 rounded-xl border border-slate-800/90 shadow-dark-card p-6 animate-slide-up delay-500">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Recent Conversations
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Live streaming queue sorted by priority and sentiment
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Filter Pill Tabs */}
            <div className="flex items-center bg-slate-800/90 p-1 rounded-lg border border-slate-700/60 text-xs">
              {['All', 'Negative', 'Positive'].map((sent) => (
                <button
                  key={sent}
                  onClick={() => setSelectedSentiment(sent)}
                  className={`px-2.5 py-1 font-semibold rounded-md transition-all ${
                    selectedSentiment === sent
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sent}
                </button>
              ))}
            </div>

            <button
              onClick={() => navigate('/conversations')}
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 hover:underline px-2 py-1"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Conversation List Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Preview</th>
                <th className="py-3 px-4">Sentiment</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {filteredConversations.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => navigate('/conversations')}
                  className="hover:bg-slate-800/50 transition-colors cursor-pointer group"
                >
                  {/* Customer Info */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${item.avatarBg} text-white font-bold flex items-center justify-center text-xs shadow-md`}>
                        {item.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                          {item.customer}
                        </p>
                        <p className="text-[11px] text-slate-400">{item.email}</p>
                      </div>
                    </div>
                  </td>

                  {/* Message Preview */}
                  <td className="py-3.5 px-4 max-w-md">
                    <p className="text-slate-300 truncate font-normal">
                      "{item.preview}"
                    </p>
                  </td>

                  {/* Sentiment Badge */}
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${item.sentimentColor}`}>
                      {item.sentiment}
                    </span>
                  </td>

                  {/* Priority Badge */}
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${item.priorityColor}`}>
                      {item.priority}
                    </span>
                  </td>

                  {/* Time */}
                  <td className="py-3.5 px-4 text-right text-slate-400 font-medium">
                    {item.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
