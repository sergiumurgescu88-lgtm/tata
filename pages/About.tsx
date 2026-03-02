import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-smart-900/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              De la Instalator la <span className="text-smart-400">Arhitect de Sisteme Energetice</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              SMART Renowable Energy SRL s-a născut din nevoia de rigoare inginerească într-o piață dominată de vânzări rapide. Suntem o casă de inginerie care pune datele și fizica înaintea marketingului.
            </p>
          </div>
        </div>
      </div>

      {/* Story & Timeline */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Cine Suntem</h2>
            <div className="prose prose-lg text-slate-600">
              <p>
                Fondată în 2019, SMART Renowable Energy SRL (CUI RO41289942) a început cu o viziune clară: energia regenerabilă nu este doar despre instalarea panourilor, ci despre <strong>integrarea inteligentă a producției, stocării și consumului</strong>.
              </p>
              <p>
                Într-un timp record, am evoluat de la execuție la consultanță strategică de nivel înalt. Astăzi, suntem partenerul tehnic preferat pentru bănci, fonduri de investiții și mari consumatori industriali care caută proiecte "Ready-to-Build" cu riscuri minimizate.
              </p>
              <p>
                Nu suntem generalisți. Suntem specialiști în diagnostic tehnic (TDD), studii de fezabilitate pentru fonduri europene complexe (Fondul de Modernizare, PNRR) și cercetare aplicată (Horizon Europe).
              </p>
            </div>

            <div className="mt-8 border-l-4 border-smart-500 pl-6 py-2 bg-slate-50">
              <p className="text-lg font-medium text-slate-800 italic">
                "Misiunea noastră este să transformăm incertitudinea tehnică în active bancabile, performante pe termen lung."
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Evoluția Noastră</h3>
            <ol className="relative border-l border-slate-300 ml-3 space-y-8">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-smart-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-smart-600 font-bold text-xs">2019</span>
                </span>
                <h4 className="flex items-center mb-1 text-lg font-semibold text-slate-900">Fondarea Companiei</h4>
                <p className="mb-4 text-base font-normal text-slate-500">
                  Debut în piața locală cu focus pe execuție de calitate și sisteme rezidențiale/comerciale mici.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-smart-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-smart-600 font-bold text-xs">2021</span>
                </span>
                <h4 className="mb-1 text-lg font-semibold text-slate-900">Extindere în Consultanță & R&D</h4>
                <p className="text-base font-normal text-slate-500">
                  Lansarea diviziei de consultanță tehnică. Câștigarea primelor proiecte de cercetare (UEFISCDI) și parteneriate cu universități tehnice.
                </p>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-smart-100 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-smart-600 font-bold text-xs">2023</span>
                </span>
                <h4 className="mb-1 text-lg font-semibold text-slate-900">Validare Internațională & Proiecte Majore</h4>
                <p className="text-base font-normal text-slate-500">
                  Intrarea în consorții Horizon Europe. Elaborarea SF pentru parcuri de 100+ MW și sisteme de stocare majore. Parteneriate cu utility-scale players (ENGIE, Electrica).
                </p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-smart-600 rounded-full -left-4 ring-4 ring-white">
                  <span className="text-white font-bold text-xs">2025</span>
                </span>
                <h4 className="mb-1 text-lg font-semibold text-slate-900">Partener Tehnic Integrat</h4>
                <p className="text-base font-normal text-slate-500">
                  Consolidarea poziției ca lider în Technical Due Diligence și proiectare pentru Stocare (BESS).
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Pilonii Activității Noastre</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Nu facem compromisuri la calitate. Abordarea noastră se bazează pe trei valori fundamentale care ghidează fiecare studiu de fezabilitate și fiecare audit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Evidence-Based Engineering",
                desc: "Nu lucrăm cu supoziții. Folosim date meteo calibrate, măsurători în teren (IV, EL, IR) și simulări conservatoare (P90) pentru a fundamenta orice decizie de investiție.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: "Inovație Aplicată (R&D)",
                desc: "Prin proiectele Horizon Europe, avem acces la tehnologii cu 3-5 ani înainte de piață. Aducem această inovație (ex: digital twins, smart grids) în proiectele clienților noștri.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "Integritate Profesională",
                desc: "Suntem independenți de producători de echipamente. Recomandările noastre tehnice vizează exclusiv interesul financiar și tehnic al beneficiarului, fără bias comercial.",
                icon: (
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-smart-600 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-smart-200">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{val.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;