import React from 'react';
import { Page } from '../types';

interface DashboardProps {
  setPage: (page: Page) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setPage }) => {
  const stats = [
    { label: 'Proiecte Active', value: '18', color: 'text-smart-400' },
    { label: 'Active Generate', value: '458', color: 'text-energy-green' },
    { label: 'Voice Sync', value: '98%', color: 'text-smart-300' },
    { label: 'AI Health', value: 'Optimal', color: 'text-emerald-400' },
  ];

  return (
    <div className="p-6 lg:p-12 bg-energy-dark min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 animate-fade-in-up">
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight">Marketing Hub</h1>
            <p className="text-slate-400 mt-2 font-medium">Orchestrați comunicarea tehnică a brandului SMART Energy.</p>
          </div>
          <button 
            onClick={() => setPage(Page.CAMPAIGN_GEN)}
            className="px-8 py-4 bg-gradient-to-r from-smart-600 to-smart-500 text-white font-black rounded-2xl shadow-xl shadow-smart-600/20 hover:shadow-smart-600/40 transition-all flex items-center gap-3 transform hover:scale-[1.02]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
            </svg>
            CAMPANIE NOUĂ
          </button>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="glass p-8 rounded-3xl border border-white/5 shadow-xl hover:border-white/10 transition-all">
              <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-3">{stat.label}</p>
              <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass p-10 rounded-3xl border border-white/5 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-smart-500 rounded-full"></span>
              Campanii Recente
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Industrial PV - Mehedinți', date: 'Acum 2 ore', status: 'Completed', color: 'bg-green-500/20 text-green-400' },
                { name: 'BESS Storage Awareness', date: 'Ieri', status: 'Draft', color: 'bg-amber-500/20 text-amber-400' },
                { name: 'Technical Due Diligence Series', date: '3 zile în urmă', status: 'Completed', color: 'bg-green-500/20 text-green-400' },
              ].map((c, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                  <div>
                    <p className="font-bold text-slate-100 group-hover:text-white transition-colors">{c.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{c.date}</p>
                  </div>
                  <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${c.color}`}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-smart-800 to-energy-dark p-10 rounded-3xl text-white relative overflow-hidden shadow-2xl group border border-white/10">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8 text-smart-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">AI Content Insight</h3>
              <p className="text-smart-100 leading-relaxed mb-10 text-lg font-light">
                Campania pentru "BESS Storage" generează un engagement tehnic cu 24% peste medie. Recomandăm creșterea tonului de "Autoritate Inginerească" pe LinkedIn.
              </p>
              <button className="px-8 py-3 bg-white text-smart-900 font-black rounded-xl hover:bg-slate-100 transition-all shadow-xl">
                Vezi Analiza Completă
              </button>
            </div>
            {/* Background decorative elements */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-smart-400/10 rounded-full blur-[80px] group-hover:bg-smart-400/20 transition-all duration-700"></div>
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;