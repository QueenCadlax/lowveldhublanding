import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToEcosystem = () => {
    const ecosystemSection = document.getElementById('ecosystem');
    if (ecosystemSection) {
      ecosystemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`pt-20 pb-40 bg-luxury-black relative overflow-hidden transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1) ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="flex justify-center mb-8">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-luxury-gold/20 bg-luxury-gold/5 animate-soft-pulse">
                <Sparkles className="w-5 h-5 text-luxury-gold" />
            </div>
        </div>
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold mb-16 font-sans font-medium">The Vision</h2>
        
        <div className="space-y-12">
          <h3 className="text-3xl md:text-5xl font-serif font-light leading-snug italic text-white/95">
            "LowveldHub connects you to Mpumalanga’s most trusted businesses and premium experiences: creating opportunities, elevating lifestyles, and empowering our community."
          </h3>
          
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent mx-auto"></div>
          
          <p className="text-lg md:text-xl font-sans font-extralight text-white/60 leading-relaxed tracking-wide max-w-3xl mx-auto">
            We are building a curated digital ecosystem where quality and excellence come first. By setting a new standard of regional trust, we drive local growth and deliver world-class experiences for residents and visitors alike.
          </p>

          <div className="pt-12">
            <button 
              onClick={scrollToEcosystem}
              className="inline-flex items-center space-x-4 text-[10px] uppercase tracking-[0.4em] font-sans text-luxury-gold hover:text-white transition-all duration-500 group"
            >
              <span>Discover More</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[25rem] font-serif flex items-center leading-none">
          <span className="text-white">L</span>
          <span className="text-luxury-gold">H</span>
        </span>
      </div>
    </section>
  );
};