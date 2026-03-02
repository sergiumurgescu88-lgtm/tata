import React from 'react';
import { Page } from '../types';

const WhyTrustUs: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-smart-900 text-white pt-24 pb-32 rounded-b-[4rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            De ce SMART Renowable Energy SRL?
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light">
            Pentru că transformăm incertitudinea în <span className="text-smart-400 font-semibold">Active Bancabile</span>.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        
        {/* Main Argument Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-smart-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <svg className="w-8 h-8 mr-3 text-smart-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Filozofia "Bankability First"
            </h3>
            <p className="text-slate-600 mb-4 text-lg">
              Înțelegem limbajul băncilor. Documentațiile noastre (SF, DALI, TDD) sunt structurate specific pentru a trece de comitetele de risc.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Analiză de risc P90 (scenariu conservator) vs P50.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Validare CAPEX reală, bazată pe oferte actualizate, nu pe standarde de cost învechite.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> Conformitate cu cerințele PNRR (DNSH) și Fondul de Modernizare.
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-energy-green">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
              <svg className="w-8 h-8 mr-3 text-energy-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Laborator Mobil de Diagnostic
            </h3>
            <p className="text-slate-600 mb-4 text-lg">
              Nu ne bazăm pe "ochiometrie". Deținem echipamente proprii pentru a vedea defectele invizibile care afectează randamentul pe 20 de ani.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> <strong>Electroluminescență (EL):</strong> Detectăm microfisuri în celule.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> <strong>Termografie IR:</strong> Identificăm hotspot-uri active cu drona.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span> <strong>Trasoare Curbe I-V:</strong> Măsurăm degradarea reală a string-urilor.
              </li>
            </ul>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Diferența SMART Renowable Energy SRL</h2>
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-slate-500 uppercase tracking-wider w-1/3">Criteriu</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-slate-500 uppercase tracking-wider w-1/3">Consultanță Standard</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-smart-600 uppercase tracking-wider bg-smart-50 w-1/3">Abordarea SMART</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Analiză Producție</td>
                  <td className="px-6 py-4 text-sm text-slate-500">Date satelitare generice (PVGIS)</td>
                  <td className="px-6 py-4 text-sm text-slate-900 bg-smart-50 font-medium">Date calibrate + Scenarii P90/P75/P50 + Analiză umbrire 3D</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Validare Tehnică</td>
                  <td className="px-6 py-4 text-sm text-slate-500">Inspecție vizuală sumară</td>
                  <td className="px-6 py-4 text-sm text-slate-900 bg-smart-50 font-medium">Teste instrumentale (EL, IR, I-V Curve)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Expertiză Stocare</td>
                  <td className="px-6 py-4 text-sm text-slate-500">Dimensionare teoretică simplă</td>
                  <td className="px-6 py-4 text-sm text-slate-900 bg-smart-50 font-medium">Modelare cicluri încărcare/descărcare, degradare baterii, arbitraj</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Risc & Finanțare</td>
                  <td className="px-6 py-4 text-sm text-slate-500">Focus pe obținerea avizelor (ATR)</td>
                  <td className="px-6 py-4 text-sm text-slate-900 bg-smart-50 font-medium">Focus pe LCOE, DSCR și eligibilitate bancară reală</td>
                </tr>
                 <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">Inovație</td>
                  <td className="px-6 py-4 text-sm text-slate-500">Soluții standard de piață</td>
                  <td className="px-6 py-4 text-sm text-slate-900 bg-smart-50 font-medium">Soluții validate în proiecte R&D Horizon Europe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-10 md:p-16 text-center shadow-2xl mb-16 relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="text-3xl font-bold text-white mb-4">Aveți nevoie de certitudini, nu de promisiuni.</h2>
             <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
               Discutați cu echipa noastră pentru a evalua corect riscurile și oportunitățile proiectului dumneavoastră.
             </p>
             <button className="bg-smart-500 hover:bg-smart-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-smart-500/30">
               Solicită o Discuție Tehnică
             </button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default WhyTrustUs;