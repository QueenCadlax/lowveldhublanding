import React from 'react';
import { About } from '../components/About';
import { Features } from '../components/Features';
import { Careers } from '../components/Careers';
import { EarlyAccess } from '../components/EarlyAccess';
import { ChevronDown } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const ParticleContainer: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {[...Array(60)].map((_, i) => {
        const size = Math.random() * 2 + 0.5;
        const duration = 15 + Math.random() * 25;
        const delay = Math.random() * 10;
        const left = Math.random() * 100;
        const isLight = Math.random() > 0.5;
        
        return (
          <div
            key={i}
            className="particle"
            style={{
              left: `${left}%`,
              bottom: `-5%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: isLight ? '#F9E4B7' : '#D4AF37',
              boxShadow: `0 0 ${size * 2}px ${isLight ? '#F9E4B7' : '#D4AF37'}`,
              animation: `float-particle ${duration}s linear infinite, twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${delay}s, ${Math.random() * 5}s`,
              opacity: 0,
            }}
          />
        );
      })}
    </div>
  );
};

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEarlyAccess = () => {
    const accessSection = document.getElementById('early-access');
    if (accessSection) {
      accessSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden -mt-20 bg-[#020203]">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] pointer-events-none"></div>
          
          <div className="absolute inset-0 z-10 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=95&w=2400" 
              alt="Luxury Architecture" 
              className="w-full h-full object-cover scale-[1.05] opacity-25 grayscale contrast-[1.1] brightness-[0.8] blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020203]/95 via-[#020203]/40 to-[#020203]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(2,2,3,0.3)_40%,#020203_90%)]"></div>
          </div>
          
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-luxury-gold/5 to-transparent skew-x-[-25deg] animate-[shimmer_12s_infinite_ease-in-out]"></div>
          </div>
        </div>

        <ParticleContainer />

        <div className="relative z-50 text-center px-6 max-w-6xl mt-24 py-12">
          {/* Brand Header Label */}
          <div className="inline-block mb-8 md:mb-10 px-6 md:px-8 py-2 border border-luxury-gold/20 rounded-full bg-black/40 backdrop-blur-3xl animate-in fade-in zoom-in duration-1000">
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-sans text-luxury-goldLight font-medium">
              Mpumalanga’s Premium Digital Ecosystem
            </span>
          </div>
          
          <div className="relative inline-block mb-6 md:mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 w-full">
            <h1 className="text-5xl sm:text-7xl lg:text-[10rem] font-serif font-light tracking-tight leading-none text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]">
              LOWVELD<span className="italic font-normal text-gold-gradient pr-4 sm:pr-6 lg:pr-12">HUB</span>
            </h1>
          </div>
          
          <p className="text-base md:text-xl lg:text-2xl font-sans font-extralight text-white/60 max-w-4xl mx-auto mb-10 md:mb-16 leading-relaxed tracking-wide md:tracking-[0.05em] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            Discover Mpumalanga’s finest: verified businesses, luxury stays, exclusive vehicles, and curated experiences — <span className="text-white/90 font-light">all in one trusted platform.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <button 
              onClick={scrollToEarlyAccess}
              className="w-full sm:w-auto group relative px-10 md:px-16 py-5 md:py-6 bg-luxury-gold text-black font-sans font-bold text-xs uppercase tracking-[0.3em] md:tracking-[0.45em] transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] hover:scale-[1.03] active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Get Early Access</span>
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <button 
              onClick={() => window.location.href = "mailto:INFO@LOWVELDHUB.CO.ZA"}
              className="w-full sm:w-auto px-10 md:px-16 py-5 md:py-6 border border-white/20 hover:border-luxury-goldLight text-white/90 hover:text-white font-sans font-light text-xs uppercase tracking-[0.3em] md:tracking-[0.45em] transition-all duration-1000 backdrop-blur-xl bg-white/[0.01] hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:scale-[1.03] active:scale-95 group relative overflow-hidden hover:brightness-110"
            >
              Partner With Us
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-luxury-gold transition-all duration-700 group-hover:w-3/4"></div>
            </button>
          </div>

          <div className="mt-16 md:mt-24 animate-in fade-in duration-1000 delay-1000 relative">
            <div className="flex items-center justify-center mb-6">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-gold-gradient tracking-[0.25em] md:tracking-[0.35em] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] animate-soft-pulse leading-tight">
                Launching May 2026
              </p>
            </div>
            <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-luxury-gold/60 via-luxury-gold/5 to-transparent mx-auto"></div>
          </div>

          <button 
            onClick={scrollToContent}
            className="hidden sm:flex absolute bottom-[-5vh] lg:bottom-[-10vh] left-1/2 -translate-x-1/2 group flex-col items-center gap-2 text-white/30 hover:text-luxury-gold transition-colors duration-500 animate-bounce"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-sans">The Vision</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>
      
      <About onNavigate={onNavigate} />
      <Features />
      <Careers onNavigate={onNavigate} />
      <EarlyAccess />
    </>
  );
};