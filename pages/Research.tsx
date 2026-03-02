import React from 'react';

const Research: React.FC = () => {
  const researchProjects = [
    {
      acronym: "D-HYDROFLEX",
      program: "Horizon Europe",
      period: "în derulare până în 2026",
      desc: "Soluții digitale pentru îmbunătățirea performanței durabile și a flexibilității centralelor hidroelectrice."
    },
    {
      acronym: "DigBUILD",
      program: "Horizon Europe",
      period: "în derulare până în 2025",
      desc: "Servicii de date de înaltă calitate pentru un mediu construit digitalizat, către un fond de clădiri neutru climatic."
    },
    {
      acronym: "RESPONSE",
      program: "H2020",
      period: "finalizat 2025",
      desc: "Soluții integrate pentru orașe cu energie pozitivă și reziliente (comunități energetice sustenabile)."
    },
    {
      acronym: "IMAGINER",
      program: "Național (UEFISCDI)",
      period: "în derulare",
      desc: "Algoritmi de îmbunătățire a imaginii pentru monitorizarea panourilor fotovoltaice (software de diagnostic)."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900">Cercetare & Inovare (R&D)</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Suntem una dintre puținele companii de profil din România active în consorții internaționale de cercetare. 
            Aducem tehnologia viitorului (Smart Grids, Digital Twins) în proiectele comerciale de astăzi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchProjects.map((proj, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-smart-700">{proj.acronym}</h3>
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded">
                  {proj.program}
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-2 italic">{proj.period}</p>
              <p className="text-slate-700 leading-relaxed">
                {proj.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Sinergia R&D - Consultanță</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Participarea în aceste proiecte nu este doar o activitate academică. Ea ne oferă acces la:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li><strong>Prototipuri și metodologii</strong> de ultimă oră înainte de a deveni standarde comerciale.</li>
            <li><strong>Parteneriate</strong> cu lideri tehnologici europeni.</li>
            <li><strong>Validare tehnică</strong> superioară ("Future-Proofing") pentru proiectele clienților noștri.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Research;