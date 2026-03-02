import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Solicitare Oferta: ${formData.company}`;
    const body = `Companie: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMesaj:%0D%0A${formData.message}`;
    window.location.href = `mailto:office@smartrenowable.energy?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Contactați Departamentul Tehnic</h2>
          <p className="text-lg text-slate-600 mb-8">
            Discutați direct cu echipa <strong>SMART Renowable Energy SRL</strong> pentru solicitări de oferte, due diligence sau parteneriate în proiecte de cercetare. Răspundem cu prioritate solicitărilor din partea persoanelor juridice și instituționale.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-smart-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-3 text-base text-slate-600">
                <p className="font-medium text-slate-900">Email</p>
                <a href="mailto:office@smartrenowable.energy" className="hover:text-smart-600">office@smartrenowable.energy</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-smart-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="ml-3 text-base text-slate-600">
                <p className="font-medium text-slate-900">Sediu Social</p>
                <p className="font-bold text-slate-800">SMART RENOWABLE ENERGY SRL</p>
                <p>România, CUI RO41289942</p>
                <p>J3/1720/2019</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700">Nume Companie / Instituție</label>
              <input 
                type="text" 
                id="company" 
                required
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-smart-500 focus:ring-smart-500 sm:text-sm p-3 border" 
                placeholder="Ex: Energy Invest SA" 
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Oficial</label>
              <input 
                type="email" 
                id="email" 
                required
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-smart-500 focus:ring-smart-500 sm:text-sm p-3 border" 
                placeholder="nume@companie.ro" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Detalii Solicitare</label>
              <textarea 
                id="message" 
                rows={4} 
                required
                className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-smart-500 focus:ring-smart-500 sm:text-sm p-3 border" 
                placeholder="Descrieți pe scurt proiectul (ex: parc PV 5MW, locație, stadiu autorizare)..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-smart-600 hover:bg-smart-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-smart-500 transition-colors">
              Deschide Email (Solicită Ofertă)
            </button>
            <p className="text-xs text-center text-slate-500 mt-2">
              Se va deschide clientul dumneavoastră de email implicit.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;