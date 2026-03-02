import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Research from './pages/Research';
import WhyTrustUs from './pages/WhyTrustUs';
import { Page } from './types';

const App: React.FC = () => {
  // Initialize page from URL query parameter if present
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      // Check if the param matches a valid Page enum value
      if (pageParam && Object.values(Page).includes(pageParam as Page)) {
        return pageParam as Page;
      }
    }
    return Page.HOME;
  });

  // Sync URL with current page state to support browser navigation history
  useEffect(() => {
    const url = new URL(window.location.href);
    if (currentPage === Page.HOME) {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', currentPage);
    }
    window.history.replaceState(null, '', url.toString());
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={setCurrentPage} />;
      case Page.SERVICES:
        return <Services />;
      case Page.PROJECTS:
        return <Projects />;
      case Page.ABOUT:
        return <About />;
      case Page.CONTACT:
        return <Contact />;
      case Page.RESEARCH:
        return <Research />;
      case Page.WHY_TRUST:
        return <WhyTrustUs />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} setPage={setCurrentPage}>
      <div className="animate-fade-in">
        {renderPage()}
      </div>
    </Layout>
  );
};

export default App;