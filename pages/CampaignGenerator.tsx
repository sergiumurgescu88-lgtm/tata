import React, { useState } from 'react';
import { BrandProfile } from '../types';
import { generateMarketingCampaign } from '../services/gemini';
import ReactMarkdown from 'react-markdown';

interface CampaignGeneratorProps {
  brand: BrandProfile;
}

const CampaignGenerator: React.FC<CampaignGeneratorProps> = ({ brand }) => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    if (!input) return;
    setIsLoading(true);
    try {
      const content = await generateMarketingCampaign(brand, input);
      setResult(content || "AI-ul nu a returnat conținut.");
    } catch (error) {
      console.error("AI Generation Error:", error);
      setResult("### Eroare la generare\nSistemul nu a putut procesa cererea. Vă rugăm verificați API Key-ul sau conexiunea.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 lg:p-12 max-w-7xl mx-auto min-h-screen bg-energy-dark text-slate-200 animate-fade-in">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Campaign <span className="text-smart-500">Architect</span></h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Orchestrați strategia de conținut pentru active regenerabile bankabile.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-white">
              <span className="w-8 h-8 rounded-lg bg-smart-600 flex items-center justify-center text-xs">01</span>
              Specificații
            </h3>
            
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full h-64 p-5 rounded-2xl bg-slate-800/50 border border-white/5 focus:ring-2 focus:ring-smart-500 focus:border-transparent outline-none resize-none text-slate-200 placeholder-slate-600 transition-all font-mono text-sm"
              placeholder="Ex: Parc PV 50MWp, Mehedinți, stocare 20MWh. Focus pe evaluarea riscului tehnic pentru bănci."
            />
            
            <button
              onClick={handleGenerate}
              disabled={isLoading || !input}
              className={`w-full mt-8 py-4 rounded-2xl font-black text-white transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 ${
                isLoading 
                ? 'bg-slate-700 cursor-not-allowed' 
                : 'bg-gradient-to-r from-smart-600 to-smart-500 hover:shadow-lg hover:shadow-smart-500/20'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Architecting...
                </>
              ) : "Generate Strategy"}
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          {result ? (
            <div className="bg-slate-900/40 p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl animate-fade-in">
              <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-smart-400 prose-li:text-slate-300">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[500px] border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-slate-500 text-center p-12">
               <svg className="w-16 h-16 opacity-10 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               <p className="text-xl font-bold text-slate-400">Motorul AI este Ready</p>
               <p className="mt-2 text-sm max-w-xs text-slate-600">Introduceți detaliile tehnice pentru a genera setul de materiale de marketing bankabile.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampaignGenerator;