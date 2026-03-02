import React, { useState } from 'react';
import { Page } from '../types';
import ChatWidget from './ChatWidget';
import Logo from './Logo';

interface LayoutProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentPage, setPage, children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Page.HOME, label: 'Acasă' },
    { id: Page.ABOUT, label: 'Despre Noi' },
    { id: Page.SERVICES, label: 'Servicii' },
    { id: Page.WHY_TRUST, label: 'De Ce Noi?' },
    { id: Page.PROJECTS, label: 'Proiecte' },
    { id: Page.RESEARCH, label: 'Cercetare & Inovare' },
    { id: Page.CONTACT, label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* High Fidelity Header - Matching Screenshot */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="cursor-pointer transition-opacity hover:opacity-90" onClick={() => setPage(Page.HOME)}>
              <Logo className="scale-[0.85] origin-left" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  className={`text-[13px] font-semibold tracking-wide transition-all relative py-1 ${
                    currentPage === item.id 
                      ? 'text-smart-600' 
                      : 'text-slate-600 hover:text-smart-600'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-smart-600 rounded-full"></span>
                  )}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl animate-fade-in">
            <nav className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setPage(item.id); setMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-4 text-sm font-bold rounded-xl transition-colors ${
                    currentPage === item.id 
                      ? 'bg-smart-50 text-smart-600' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Corporate Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12">
          <div>
            <Logo onDark={true} className="opacity-80 scale-75 origin-left" />
            <p className="mt-6 text-sm leading-relaxed max-w-xs">
              Partenerul tehnic independent pentru diagnostic, inginerie și studii de bancabilitate în sectorul energiei regenerabile.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Servicii Rapide</h4>
            <div className="grid grid-cols-1 gap-3 text-sm">
              <button onClick={() => setPage(Page.SERVICES)} className="hover:text-white transition-colors text-left w-fit">Due Diligence Tehnic</button>
              <button onClick={() => setPage(Page.SERVICES)} className="hover:text-white transition-colors text-left w-fit">Diagnostic Avansat</button>
              <button onClick={() => setPage(Page.RESEARCH)} className="hover:text-white transition-colors text-left w-fit">Cercetare Horizon</button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Operativ</h4>
            <div className="text-sm space-y-3">
              <p>office@smartrenowable.energy</p>
              <p>România, CUI RO41289942</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-800 mt-8">
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://anpc.ro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img 
                src="https://anpc.ro/wp-content/uploads/2022/12/sal.png" 
                alt="Soluționarea Alternativă a Litigiilor" 
                className="h-14 w-auto rounded-lg bg-white p-1"
                referrerPolicy="no-referrer"
              />
            </a>
            <a 
              href="https://consumer-redress.ec.europa.eu/site-relocation_en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img 
                src="https://anpc.ro/wp-content/uploads/2022/12/sol.png" 
                alt="Soluționarea Online a Litigiilor" 
                className="h-14 w-auto rounded-lg bg-white p-1"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Confidențialitate</a>
              <a href="#" className="hover:text-white">Politica Cookies</a>
            </div>
            <p>© 2025 SMART Renowable Energy SRL</p>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default Layout;