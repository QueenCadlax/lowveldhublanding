
import React from 'react';

export const Vision: React.FC = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <div className="mb-8">
          <span className="font-serif text-2xl tracking-[0.4em] text-white">LOWVELD</span>
          <span className="font-serif text-2xl tracking-[0.4em] text-luxury-gold italic ml-2">HUB</span>
        </div>
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-luxury-gold mb-10 font-sans">The Future Defined</h2>
        <h1 className="text-5xl md:text-8xl font-serif font-light leading-tight mb-12">
          The <span className="italic text-gold-gradient">Vision</span>
        </h1>
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto mb-32">
        <div className="space-y-12 text-center">
          <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed text-white/90 italic">
            "LowveldHub connects you to Mpumalanga’s most trusted businesses and premium experiences: creating opportunities, elevating lifestyles, and empowering our community."
          </p>
          
          <p className="text-lg md:text-xl font-sans font-extralight text-white/60 leading-relaxed tracking-wide">
            We are building a curated digital ecosystem where quality and excellence come first. By establishing a new standard of regional trust, we drive local growth and deliver world-class experiences for residents and visitors alike.
          </p>

          <div className="py-12">
            <h3 className="text-3xl md:text-5xl font-serif text-gold-gradient mb-6">This is more than a platform.</h3>
            <p className="text-[12px] uppercase tracking-[0.8em] text-white/40 font-sans">This is a movement shaping the digital future of Mpumalanga.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-24 border-y border-white/5 mb-32">
        {[
          { label: "Integrity", desc: "Every business and service on our platform undergoes a rigorous verification process to ensure absolute trust." },
          { label: "Exclusivity", desc: "Catering to the refined tastes of those who demand nothing but the absolute best in every interaction." },
          { label: "Empowerment", desc: "Rooted in Mpumalanga, for Mpumalanga, driving regional economic transformation and local excellence." }
        ].map((item, i) => (
          <div key={i} className="text-center group">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-8 font-sans group-hover:tracking-[0.6em] transition-all duration-700">{item.label}</h4>
            <p className="text-sm font-sans font-extralight text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center bg-luxury-gold/[0.02] border border-luxury-gold/10 p-16 md:p-24 rounded-sm">
        <h3 className="text-3xl md:text-5xl font-serif mb-8 text-white">Excellence Is a Choice</h3>
        <p className="text-lg font-sans font-extralight text-white/60 mb-12 max-w-2xl mx-auto">
          We are committed to establishing a new regional standard. Join us as we redefine what it means to be a premium digital provider in the Lowveld.
        </p>
        <div className="flex justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-ping"></div>
        </div>
      </div>
    </div>
  );
};
