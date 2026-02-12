
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Vision } from './pages/Vision';
import { Ecosystem } from './pages/Ecosystem';
import { Careers } from './pages/Careers';
import { Partners } from './pages/Partners';
import { EarlyAccess } from './pages/EarlyAccess';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfExcellence } from './pages/TermsOfExcellence';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { SEOSchemaManager } from './components/SEOSchemaManager';
import { LocationPage } from './components/LocationPage';
import { DirectoryPage } from './components/DirectoryPage';
import { mpumalanganCities } from './lib/locationData';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    // Check if currentPage is a location
    const location = mpumalanganCities.find(city => city.slug === currentPage);
    if (location) {
      return <LocationPage location={location} onNavigate={setCurrentPage} />;
    }

    // Check if currentPage is a directory page
    if (currentPage === 'services') {
      return <DirectoryPage type="services" onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'jobs') {
      return <DirectoryPage type="jobs" onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'businesses') {
      return <DirectoryPage type="businesses" onNavigate={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'about': return <About onNavigate={setCurrentPage} />;
      case 'vision': return <Vision />;
      case 'ecosystem': return <Ecosystem />;
      case 'careers': return <Careers />;
      case 'partners': return <Partners />;
      case 'early-access': return <EarlyAccess />;
      case 'privacy': return <PrivacyPolicy />;
      case 'terms': return <TermsOfExcellence />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-luxury-black text-white overflow-x-hidden selection:bg-luxury-gold selection:text-black">
      {/* SEO Schema Markup */}
      <SEOSchemaManager />

      {/* Dynamic Background Accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-luxury-gold/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-luxury-gold/5 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
        <main className="pt-20 flex-grow">
          {renderPage()}
        </main>
        <Footer onNavigate={setCurrentPage} />
        <BackToTop />
      </div>
    </div>
  );
};

export default App;
