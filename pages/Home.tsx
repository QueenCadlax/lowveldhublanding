import React from 'react';
import { About } from '../components/About';
import { Features } from '../components/Features';
import { Careers } from '../components/Careers';
import { ChevronDown } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const ParticleContainer: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {[...Array(20)].map((_, i) => {
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

  return (
    <>
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#020203]">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] pointer-events-none"></div>
          
          <div className="absolute inset-0 z-10 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=95&w=2400" 
              alt="Luxury Architecture" 
              className="w-full h-full object-cover scale-[1.05] opacity-25 grayscale brightness-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020203]/95 via-[#020203]/40 to-[#020203]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(2,2,3,0.3)_40%,#020203_90%)]"></div>
          </div>
          
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-luxury-gold/5 to-transparent skew-x-[-25deg] animate-[shimmer_12s_infinite_ease-in-out]"></div>
          </div>
        </div>

        <ParticleContainer />

        <div className="relative z-50 text-center px-6 max-w-6xl py-12">
          <div className="relative inline-block mb-6 md:mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-tight text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.08)]">
              Mpumalanga's <span className="text-luxury-gold">Premium</span> Digital Ecosystem
            </h1>
          </div>
          
          <p className="text-base md:text-xl lg:text-2xl font-sans font-extralight text-white/60 max-w-4xl mx-auto mb-10 md:mb-16 leading-relaxed tracking-wide md:tracking-[0.05em] animate-in fade-in slide-in-from-bottom-8 duration-700">
            Verified professionals, essential services & premium businesses - all in one trusted platform.
          </p>

          <div className="mt-16 md:mt-24 animate-in fade-in duration-700 relative">
            <div className="flex items-center justify-center mb-6">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-luxury-gold tracking-[0.15em] md:tracking-[0.2em] drop-shadow-[0_0_30px_rgba(212,175,55,0.6)] leading-tight animate-pulse-subtle">
                Launching July 2026
              </p>
            </div>
            <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-luxury-gold/60 via-luxury-gold/5 to-transparent mx-auto"></div>
          </div>

          <button 
            onClick={scrollToContent}
            className="hidden sm:flex absolute bottom-[-5vh] lg:bottom-[-10vh] left-1/2 -translate-x-1/2 group flex-col items-center gap-2 text-white/30 hover:text-luxury-gold transition-colors duration-500 animate-bounce"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </section>
      
      <About onNavigate={onNavigate} />
      <Features />
      <Careers onNavigate={onNavigate} />
    </>
  );
};