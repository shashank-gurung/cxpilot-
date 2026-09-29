import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Bot,
  Sparkles,
  BarChart3,
  Settings,
  Cpu,
  Zap,
  ChevronRight
} from 'lucide-react';

export default function Sidebar() {
  const navSections = [
    {
      title: 'OVERVIEW',
      items: [
        { name: 'Dashboard', path: '/', icon: LayoutDashboard }
      ]
    },
    {
      title: 'CUSTOMER EXPERIENCE',
      items: [
        { name: 'Customers', path: '/customers', icon: Users },
        { name: 'Conversations', path: '/conversations', icon: MessageSquare, badge: '12' }
      ]
    },
    {
      title: 'AI INTELLIGENCE',
      items: [
        { name: 'AI Copilot', path: '/copilot', icon: Bot, isAi: true },
        { name: 'AI Insights', path: '/insights', icon: Sparkles, isAi: true },
        { name: 'Analytics', path: '/analytics', icon: BarChart3 }
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { name: 'Settings', path: '/settings', icon: Settings }
      ]
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col h-screen sticky top-0 z-30 select-none shadow-[1px_0_10px_rgba(0,0,0,0.02)]">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-100 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl ai-gradient-bg flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            <Zap className="w-5 h-5 fill-white/20" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                CXPilot
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-600 border border-indigo-100 uppercase tracking-wider">
                v2.4
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium leading-none">CX Intelligence</p>
          </div>
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-3.5 py-4 space-y-6">
        {navSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="px-3 text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-2">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 group ${
                          isActive
                            ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-2.5">
                            <Icon
                              className={`w-4 h-4 transition-colors ${
                                isActive
                                  ? 'text-white'
                                  : item.isAi
                                  ? 'text-indigo-500 group-hover:text-indigo-600'
                                  : 'text-slate-400 group-hover:text-slate-600'
                              }`}
                            />
                            <span className="truncate">{item.name}</span>
                          </div>

                          {item.badge && (
                            <span
                              className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                                isActive
                                  ? 'bg-white/20 text-white'
                                  : 'bg-rose-50 text-rose-600 border border-rose-100'
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}

                          {item.isAi && !isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-60"></span>
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Section: AI Status Indicator & User Info */}
      <div className="p-3 border-t border-slate-100 bg-slate-50/50 space-y-2">
        {/* Status Indicator */}
        <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white border border-slate-200/70 shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div className="leading-none">
              <p className="text-xs font-semibold text-slate-800">AI Engine Online</p>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">Latency 14ms • CX-v4</p>
            </div>
          </div>
          <Cpu className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
        </div>

        {/* User Card */}
        <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors cursor-pointer border border-transparent hover:border-slate-200/60">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 text-white font-bold flex items-center justify-center text-xs shadow-xs">
            AM
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-800 truncate">Alex Morgan</p>
            <p className="text-[11px] text-slate-400 truncate">alex@cxpilot.ai</p>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </div>
      </div>
    </aside>
  );
}
