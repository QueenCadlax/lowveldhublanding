
import React from 'react';
import { Features } from '../components/Features';

export const Ecosystem: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-luxury-gold mb-8 font-sans">A Curated World</h2>
        <h1 className="text-5xl md:text-8xl font-serif font-light leading-tight mb-12 uppercase tracking-tight">
          The <span className="text-white">LOWVELD</span><span className="text-luxury-gold italic">HUB</span> <br/> 
          <span className="italic text-gold-gradient normal-case">Ecosystem</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg font-sans font-extralight text-white/50 leading-relaxed">
          Our platform integrates multiple premium sectors into one powerful, unified interface designed for the discerning individual.
        </p>
      </div>

      <Features />

      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h3 className="text-2xl font-serif italic text-white/80 mb-12">"Setting the standard for digital prestige in Mpumalanga"</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { stat: "Verified", label: "Partners Only" },
            { stat: "Exclusive", label: "Regional Focus" },
            { stat: "Seamless", label: "User Experience" },
            { stat: "Premium", label: "Brand Alignment" }
          ].map((item, i) => (
            <div key={i} className="p-10 border border-white/5 bg-luxury-dark/50">
              <div className="text-3xl font-serif text-luxury-gold mb-2">{item.stat}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-sans text-white/30">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
