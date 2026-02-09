
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-[72px]">
        <button 
          onClick={() => {
            if (currentPage === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
            else onNavigate('home');
          }} 
          className="flex items-center space-x-2 group outline-none"
        >
          <Logo variant="full" size="sm" />
        </button>
        
        <div className="hidden md:flex items-center space-x-8 text-[12px] uppercase tracking-[0.08em] font-sans font-medium">
          <button 
            onClick={() => onNavigate('careers')}
            className="relative py-2 transition-all duration-500 outline-none text-white/60 hover:text-luxury-gold hover:text-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          >
            Careers
            <span className="absolute bottom-0 left-0 h-px bg-luxury-gold transition-all duration-500 w-0 opacity-0 hover:w-full hover:opacity-60"></span>
          </button>
          <button 
            onClick={() => onNavigate('partners')}
            className="px-6 py-2.5 border border-luxury-gold/30 hover:border-luxury-gold hover:bg-luxury-gold/10 text-white/60 hover:text-white transition-all duration-500 hover:scale-[1.03] active:scale-95 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </nav>
  );
};
