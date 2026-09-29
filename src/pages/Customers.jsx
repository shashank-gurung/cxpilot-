import React, { useState } from 'react';
import { Users, AlertTriangle, CheckCircle, Smile, Download, Plus, Search, Filter } from 'lucide-react';

export default function Customers() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const customers = [
    { id: 1, name: 'Sarah Jenkins', company: 'Acme Corp • Enterprise', email: 'sarah.j@acmecorp.io', status: 'Active', lastInteraction: 'Today, 2:45 PM', topic: 'API Rate Limit Inquiry', sentiment: 'Positive', initial: 'SJ', color: 'bg-emerald-500' },
    { id: 2, name: 'Marcus Chen', company: 'Stellar AI • Growth', email: 'm.chen@stellar.ai', status: 'At Risk', lastInteraction: 'Yesterday, 4:12 PM', topic: 'Billing Discrepancy #4092', sentiment: 'Frustrated', initial: 'MC', color: 'bg-rose-500' },
    { id: 3, name: 'Elena Rostova', company: 'Nexus Global • Scale', email: 'elena@nexusglobal.com', status: 'Resolved', lastInteraction: '3 days ago', topic: 'SSO Configuration Help', sentiment: 'Neutral', initial: 'ER', color: 'bg-indigo-500' },
    { id: 4, name: 'David Kim', company: 'Vortex Systems • Enterprise', email: 'd.kim@vortexsys.io', status: 'Active', lastInteraction: 'Today, 11:30 AM', topic: 'Custom Webhook Integration', sentiment: 'Positive', initial: 'DK', color: 'bg-blue-500' },
  ];

  const filteredCustomers = customers.filter(c => {
    const matchesFilter = filter === 'All' || c.status === filter;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">DIRECTORY • Updated 2m ago</span>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Customers</h1>
          <p className="text-xs text-slate-500 mt-0.5">Understand your customers and their recent interactions across all channels.</p>
        </div>

        <div className="flex items-center gap-2.5">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs">
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>Export List</span>
          </button>
          <button className="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            <span>+ Add Customer</span>
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-card">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 uppercase">Total Customers</span>
            <Users className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="mt-2 text-2xl font-extrabold text-slate-900">2,845</div>
          <span className="text-xs font-semibold text-emerald-600">↑ 12.4% vs last month</span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-card">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 uppercase">At Risk</span>
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="mt-2 text-2xl font-extrabold text-slate-900">142</div>
          <span className="text-xs font-semibold text-rose-600">Requires immediate attention</span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-card">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 uppercase">Resolved Rate</span>
            <CheckCircle className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="mt-2 text-2xl font-extrabold text-slate-900">94.8%</div>
          <span className="text-xs font-semibold text-emerald-600">Avg resolution: 1.4h</span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-card">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 uppercase">CSAT Score</span>
            <Smile className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="mt-2 text-2xl font-extrabold text-slate-900">4.89 <span className="text-xs text-slate-400 font-normal">/ 5.0</span></div>
          <span className="text-xs text-slate-500">Based on 1,120 ratings</span>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-xl border border-slate-200/90 shadow-card p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center bg-slate-100 p-1 rounded-lg text-xs font-semibold">
            {['All', 'Active', 'At Risk', 'Resolved'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1 rounded-md transition-all ${filter === tab ? 'bg-white text-indigo-600 shadow-2xs' : 'text-slate-500'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left divide-y divide-slate-100 text-xs">
            <thead>
              <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-3">Customer</th>
                <th className="py-3 px-3">Contact</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3">Last Interaction</th>
                <th className="py-3 px-3">Sentiment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCustomers.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${c.color} text-white font-bold flex items-center justify-center text-xs`}>
                        {c.initial}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{c.name}</p>
                        <p className="text-[11px] text-slate-400">{c.company}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-slate-600">{c.email}</td>
                  <td className="py-3 px-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      c.status === 'Active' ? 'bg-emerald-50 text-emerald-700' :
                      c.status === 'At Risk' ? 'bg-rose-50 text-rose-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      • {c.status}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <p className="font-medium text-slate-800">{c.lastInteraction}</p>
                    <p className="text-[11px] text-slate-400">{c.topic}</p>
                  </td>
                  <td className="py-3 px-3">
                    <span className={`font-semibold ${c.sentiment === 'Positive' ? 'text-emerald-600' : c.sentiment === 'Frustrated' ? 'text-rose-600' : 'text-slate-500'}`}>
                      {c.sentiment}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
