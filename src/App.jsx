import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';

import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Conversations from './pages/Conversations';
import AICopilot from './pages/AICopilot';
import AIInsights from './pages/AIInsights';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function Layout() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#f7f9fc]">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <TopNav onAnalyzeClick={() => navigate('/copilot')} />

        {/* Page Container */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/conversations" element={<Conversations />} />
            <Route path="/copilot" element={<AICopilot />} />
            <Route path="/insights" element={<AIInsights />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
