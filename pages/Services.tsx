import React from 'react';
import { servicesData } from '../data/content';
import TTSButton from '../components/TTSButton';

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-smart-600 font-semibold tracking-wide uppercase">Servicii Tehnice</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Inginerie Aplicată pentru Investiții Sigure
          </p>
          <p className="mt-4 text-xl text-slate-500">
            Fiecare serviciu este livrat conform standardelor internaționale (IEC, ISO, RICS) pentru a asigura acceptanța bancară.
          </p>
        </div>

        <div className="space-y-16">
          {servicesData.map((service, index) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden lg:grid lg:grid-cols-3 lg:gap-8">
              
              <div className="p-8 lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center">
                     <div className="w-12 h-12 bg-smart-100 rounded-xl flex items-center justify-center mr-4 text-smart-600">
                       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                       </svg>
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                   </div>
                   <TTSButton text={`${service.title}. ${service.shortDesc}. ${service.fullDesc}`} />
                </div>
                
                <div className="prose prose-slate max-w-none text-slate-600 mb-8">
                  <p className="whitespace-pre-line leading-relaxed text-lg">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Beneficii Cheie</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-energy-green mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Standarde Aplicate</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.standards.map((std, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-300">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar / CTA area for service */}
              <div className="bg-slate-50 p-8 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-center">
                <h4 className="text-lg font-bold text-slate-900 mb-4">De ce este critic acest serviciu?</h4>
                <p className="text-sm text-slate-600 mb-8 italic">
                  "Lipsa unei {service.title.toLowerCase()} corespunzătoare este principala cauză pentru care proiectele eșuează în faza de due diligence bancar."
                </p>
                <button className="w-full bg-white border border-smart-600 text-smart-600 font-semibold py-3 px-4 rounded-lg hover:bg-smart-50 transition-colors">
                  Solicită Ofertă Tehnică
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
