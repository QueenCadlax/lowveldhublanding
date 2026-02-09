
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

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
        
        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/60 hover:text-luxury-gold transition-colors outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-luxury-black md:hidden">
          <div className="flex flex-col items-center justify-center space-y-16 px-6 py-32 h-full">
            <button 
              onClick={() => {
                onNavigate('careers');
                setMobileMenuOpen(false);
              }}
              className="text-lg uppercase tracking-[0.15em] font-sans font-medium text-white hover:text-luxury-gold transition-colors duration-300"
            >
              Careers
            </button>
            <button 
              onClick={() => {
                onNavigate('partners');
                setMobileMenuOpen(false);
              }}
              className="px-12 py-4 border-2 border-luxury-gold text-white hover:text-luxury-gold text-lg uppercase tracking-[0.15em] font-sans font-medium transition-all duration-500 hover:bg-luxury-gold/10"
            >
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
