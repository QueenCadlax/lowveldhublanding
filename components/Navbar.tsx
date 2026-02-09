
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy Logic for 1-page landing sections
  useEffect(() => {
    if (currentPage !== 'home') {
      setActiveSection(null);
      return;
    }

    const sections = ['about', 'ecosystem', 'careers', 'early-access'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let id = entry.target.id;
          if (id === 'about') id = 'vision';
          if (id === 'early-access') id = 'reservation';
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleBottomScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection('reservation');
      } else if (window.scrollY < 100) {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleBottomScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleBottomScroll);
    };
  }, [currentPage]);

  const handleNavClick = (page: string, sectionId?: string) => {
    if (currentPage === 'home' && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        return;
      }
    }
    onNavigate(page);
  };

  const isLinkActive = (page: string) => {
    if (currentPage === page) return true;
    if (currentPage === 'home' && activeSection === page) return true;
    return false;
  };

  const navLinkClass = (page: string) => `
    relative py-2 transition-all duration-500 outline-none
    ${isLinkActive(page)
      ? 'text-luxury-gold [text-shadow:0_0_20px_rgba(212,175,55,0.6)] font-semibold' 
      : 'text-white/50 hover:text-luxury-gold hover:[text-shadow:0_0_15px_rgba(212,175,55,0.4)]'}
  `;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'py-4 bg-luxury-black/95 backdrop-blur-xl border-b border-luxury-gold/15' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => {
            if (currentPage === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
            else onNavigate('home');
          }} 
          className="flex items-center space-x-2 group outline-none"
        >
          <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white transition-all duration-500 group-hover:tracking-[0.25em]">
            LOWVELD<span className="text-luxury-gold">HUB</span>
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shadow-[0_0_10px_rgba(212,175,55,0.9)] group-hover:scale-150 transition-transform duration-500"></div>
        </button>
        
        <div className="hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.3em] font-sans font-light">
          <button onClick={() => handleNavClick('vision', 'about')} className={navLinkClass('vision')}>
            Vision
            <span className={`absolute bottom-0 left-0 h-px bg-luxury-gold transition-all duration-500 ${isLinkActive('vision') ? 'w-full opacity-60' : 'w-0 opacity-0'}`}></span>
          </button>
          <button onClick={() => handleNavClick('ecosystem', 'ecosystem')} className={navLinkClass('ecosystem')}>
            Ecosystem
            <span className={`absolute bottom-0 left-0 h-px bg-luxury-gold transition-all duration-500 ${isLinkActive('ecosystem') ? 'w-full opacity-60' : 'w-0 opacity-0'}`}></span>
          </button>
          <button onClick={() => handleNavClick('careers', 'careers')} className={navLinkClass('careers')}>
            Careers
            <span className={`absolute bottom-0 left-0 h-px bg-luxury-gold transition-all duration-500 ${isLinkActive('careers') ? 'w-full opacity-60' : 'w-0 opacity-0'}`}></span>
          </button>
          <button 
            onClick={() => handleNavClick('early-access', 'early-access')} 
            className={`px-6 py-2.5 border transition-all duration-500 hover:scale-[1.03] active:scale-95 ${currentPage === 'early-access' || activeSection === 'reservation'
              ? 'border-luxury-gold bg-luxury-gold text-black shadow-[0_0_25px_rgba(212,175,55,0.5)] font-semibold' 
              : 'border-luxury-gold/30 hover:border-luxury-gold hover:bg-luxury-gold/10 hover:text-white hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]'}`}
          >
            Reservation List
          </button>
        </div>
      </div>
    </nav>
  );
};
