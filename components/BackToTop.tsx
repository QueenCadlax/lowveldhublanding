
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 z-[60] w-12 h-12 rounded-full border border-luxury-gold/30 bg-luxury-black/80 backdrop-blur-xl flex items-center justify-center text-luxury-gold transition-all duration-700 outline-none hover:border-luxury-gold hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-110 active:scale-90 ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
      <div className="absolute inset-0 rounded-full bg-luxury-gold/5 animate-pulse -z-10"></div>
    </button>
  );
};
