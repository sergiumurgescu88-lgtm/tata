import React from 'react';
import { Page } from '../types';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Matching Screenshot Identity */}
      <section className="relative min-h-[660px] flex items-center pt-24 pb-28 overflow-hidden hero-gradient">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Technical Architecture" 
            className="w-full h-full object-cover filter grayscale"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Status Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full border border-smart-500/30 bg-smart-500/10 text-smart-400 text-[10px] font-black uppercase tracking-[0.2em] mb-12">
              Partener Tehnic pentru Proiecte Bancabile
            </div>

            <h1 className="text-5xl md:text-[82px] font-bold text-white tracking-tight leading-[0.98] mb-10">
              Transformăm Riscurile <br/>
              Tehnice în <span className="text-smart-400">Siguranță <br/> Financiară</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-14 leading-relaxed max-w-2xl font-normal opacity-85">
              SMART Renowable Energy SRL furnizează Due Diligence Tehnic, studii de fezabilitate și diagnostic avansat pentru investitori instituționali, bănci și dezvoltatori. Nu ghicim performanța activelor, o garantăm prin inginerie.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => setPage(Page.CONTACT)}
                className="px-10 py-5 bg-smart-600 hover:bg-smart-500 text-white font-bold rounded-lg transition-all shadow-2xl shadow-smart-600/30 text-center text-lg"
              >
                Solicită Consultanță
              </button>
              <button 
                onClick={() => setPage(Page.SERVICES)}
                className="px-10 py-5 border border-slate-600 text-white font-bold rounded-lg hover:bg-white/10 transition-all text-center text-lg"
              >
                Explorează Serviciile
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - High Contrast White Background */}
      <section className="bg-white py-24 border-b border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
            <div className="space-y-3">
              <div className="text-4xl md:text-6xl font-black text-smart-800 tracking-tighter">185 MWp</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight opacity-70">Cel Mai Mare Proiect Evaluat</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl md:text-6xl font-black text-smart-800 tracking-tighter">100 MWh</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight opacity-70">Proiecte de Stocare (BESS)</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl md:text-6xl font-black text-smart-800 tracking-tighter">€50M+</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight opacity-70">Finanțări PNRR & POIM Asistate</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl md:text-6xl font-black text-smart-800 tracking-tighter">10+</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight opacity-70">Proiecte Cercetare Horizon <br/> Europe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Expertiză Validată Prin Inginerie</h2>
          <div className="h-1.5 w-12 bg-smart-500 mx-auto mt-6"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Due Diligence Tehnic", 
              desc: "Evaluări independente de risc pentru M&A și finanțare. Identificăm riscurile tehnice înainte de semnarea tranzacției.",
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
            },
            { 
              title: "Diagnostic Avansat", 
              desc: "Electroluminescență (EL) și termografie IR cu drone. Vedem defectele celulare invizibile care subminează randamentul.",
              icon: "M13 10V3L4 14h7v7l9-11h-7z" 
            },
            { 
              title: "Bankability SF / DALI", 
              desc: "Studii de fezabilitate structurate pentru Fondul de Modernizare și PNRR. Rata de succes garantată prin rigoare.",
              icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-smart-50 rounded-xl flex items-center justify-center text-smart-600 mb-8 group-hover:bg-smart-600 group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;