
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        {/* Strong Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover scale-110 blur-[5px] opacity-70 animate-[pulse_15s_ease-in-out_infinite]"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl py-20">
        <div className="inline-block mb-6 md:mb-8 px-4 md:px-5 py-2 border border-luxury-gold/30 rounded-full bg-luxury-gold/10 backdrop-blur-md">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-sans text-luxury-goldLight font-medium">RESERVATIONS OPEN | 2026</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-6 md:mb-8 tracking-tight leading-tight text-white">
          Mpumalanga's <span className="text-luxury-gold">Premium</span> Digital Ecosystem
        </h1>
        
        <p className="text-base md:text-lg lg:text-xl font-sans font-extralight text-white/80 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed tracking-wide">
          Verified businesses. Luxury stays. Exclusive vehicles. <span className="block mt-2 md:mt-0 md:inline">Real estate. Experiences.</span> <span className="text-white">One powerful platform.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-16 md:mb-20">
          <button 
            className="w-full sm:w-auto group relative px-10 md:px-12 py-4 md:py-5 bg-luxury-gold text-black font-sans font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all duration-700 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:scale-[1.03] active:scale-100"
          >
            Get Early Access
          </button>
          <button 
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 border border-white/20 hover:border-luxury-goldLight text-white/90 hover:text-white font-sans font-light text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all duration-1000 backdrop-blur-md hover:bg-white/5 hover:shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:scale-[1.03] active:scale-100 hover:brightness-125"
          >
            Partner With Us
          </button>
        </div>

        <div className="relative pt-8 md:pt-12">
          <div className="flex items-center justify-center mb-8">
            <p className="text-lg sm:text-2xl md:text-3xl font-serif italic text-gold-gradient tracking-[0.3em] md:tracking-[0.45em] animate-soft-pulse drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]">
              Launching May 2026
            </p>
          </div>
          <div className="w-px h-12 md:h-16 bg-gradient-to-b from-luxury-gold to-transparent mx-auto opacity-30"></div>
        </div>
      </div>
      
      {/* Decorative vertical elements */}
      <div className="absolute bottom-12 left-12 hidden lg:block overflow-hidden">
        <p className="text-[10px] uppercase tracking-[0.5em] font-sans text-white/20 vertical-rl transform rotate-180">Experience the Extraordinary</p>
      </div>
    </section>
  );
};
