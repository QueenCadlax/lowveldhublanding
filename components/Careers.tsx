
import React, { useEffect, useRef, useState } from 'react';

interface CareersProps {
  onNavigate?: (page: string) => void;
}

const positions = [
  "Field Agents", "Team Leaders", "Business Development Officers", 
  "Sales & Partnerships Agents", "Content Creators & Social Media Scouts",
  "Community Managers", "Regional Ambassadors"
];

export const Careers: React.FC<CareersProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  return (
    <section 
      id="careers" 
      ref={sectionRef}
      className={`py-40 bg-luxury-black relative overflow-hidden border-t border-white/5 transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1) ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold mb-6 font-sans font-medium">Excellence is a Choice - Join Our Elite Team</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-light mb-8 italic text-white/95">Be Part of Mpumalanga’s Digital Revolution</h3>
          <p className="text-xl font-sans font-extralight text-white/90 mb-8 leading-relaxed italic">
            Collaborate with a team that values excellence, integrity, and local growth.
          </p>
          <p className="text-lg font-sans font-extralight text-white/60 mb-10 leading-relaxed tracking-wide">
            We are building elite regional teams to drive the province’s digital future. Join a movement that celebrates quality and shapes Mpumalanga’s digital landscape for generations to come.
          </p>
          
          <div className="p-8 border-l-2 border-luxury-gold bg-white/[0.02] backdrop-blur-sm shadow-xl">
            <p className="text-xs uppercase tracking-[0.3em] font-sans text-white/40 mb-2">Primary Hub</p>
            <p className="text-xl font-serif text-white tracking-widest">MPUMALANGA, ZA</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {positions.map((pos, i) => (
            <div key={i} className="glass-card p-6 flex items-center justify-between group hover:border-luxury-gold/50 transition-all duration-300 cursor-default">
              <span className="text-sm font-sans font-light tracking-wide text-white/80 group-hover:text-white">{pos}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold/20 group-hover:bg-luxury-gold transition-colors shadow-glow"></div>
            </div>
          ))}
          
          <button 
            onClick={() => onNavigate?.('careers')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="sm:col-span-2 mt-4 p-8 bg-luxury-gold text-black text-center group transition-all duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.45)] hover:scale-[1.03] active:scale-95 relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-white/10 transition-transform duration-500 ${isHovered ? 'translate-y-0' : '-translate-y-full'}`}></div>
            <div className="relative z-10">
              <span className="block text-[10px] uppercase tracking-[0.4em] font-sans font-bold mb-1">Take your seat among the elite</span>
              <span className="text-lg md:text-xl font-serif font-semibold italic">View All Roles & Apply : info@lowveldhub.co.za</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
