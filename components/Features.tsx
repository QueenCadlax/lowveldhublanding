
import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Home, Car, Building, Briefcase, Map, Calendar, ShoppingBag } from 'lucide-react';

const ecosystemGroups = [
  {
    category: "Premium Services",
    items: [
      { title: "Verified Business Directory", icon: <ShieldCheck className="w-5 h-5" />, desc: "Connect with trusted local providers, all verified for excellence." },
      { title: "Jobs & Opportunities", icon: <Briefcase className="w-5 h-5" />, desc: "Explore elite career paths for Mpumalanga’s top talent." },
    ]
  },
  {
    category: "Lifestyle & Stays",
    items: [
      { title: "Luxury Stays & Resorts", icon: <Home className="w-5 h-5" />, desc: "Experience the finest accommodations the region has to offer." },
      { title: "Experiences & Tourism", icon: <Map className="w-5 h-5" />, desc: "Unlock Mpumalanga’s hidden gems and unforgettable adventures." },
    ]
  },
  {
    category: "Assets & Acquisitions",
    items: [
      { title: "Premium Vehicles", icon: <Car className="w-5 h-5" />, desc: "Access an exclusive marketplace for luxury and supercars." },
      { title: "Real Estate & Developments", icon: <Building className="w-5 h-5" />, desc: "Browse high-end residential and commercial properties." },
    ]
  },
  {
    category: "Curated Commerce",
    items: [
      { title: "Events & Lifestyle", icon: <Calendar className="w-5 h-5" />, desc: "Attend the region’s most exclusive gatherings." },
      { title: "Marketplace & Local Brands", icon: <ShoppingBag className="w-5 h-5" />, desc: "Shop premium local brands, curated for quality and distinction." },
    ]
  }
];

export const Features: React.FC = () => {
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

  return (
    <section 
      id="ecosystem" 
      ref={sectionRef}
      className={`py-32 bg-luxury-dark relative transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1) ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center md:text-left md:flex md:items-end md:justify-between gap-10">
          <div className="max-w-3xl">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold mb-6 font-sans font-medium">The Ecosystem</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-light mb-4">Discover what LowveldHub offers</h3>
          </div>
          <div className="hidden md:flex flex-col items-end max-w-xs text-right">
            <p className="text-white/60 text-sm font-sans font-light leading-relaxed mb-4 italic">
              Setting a new standard of trust and excellence in Mpumalanga.
            </p>
            <div className="w-24 h-px bg-luxury-gold/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ecosystemGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-sans border-l border-luxury-gold/50 pl-4 font-medium">{group.category}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5 shadow-2xl">
                {group.items.map((item, iIdx) => (
                  <div 
                    key={iIdx} 
                    className="group p-10 bg-luxury-black transition-all duration-700 hover:bg-luxury-gold/[0.03] cursor-default overflow-hidden relative"
                  >
                    <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-luxury-gold/10 transition-colors duration-700">
                      <div className="scale-[2] transform">{item.icon}</div>
                    </div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-10 h-10 flex items-center justify-center border border-luxury-gold/30 rounded-full mb-8 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black transition-all duration-500 shadow-lg">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-serif font-medium mb-4 text-white group-hover:text-luxury-goldLight transition-colors duration-500">{item.title}</h4>
                      <p className="text-sm font-sans font-extralight text-white/50 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
