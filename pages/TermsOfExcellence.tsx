
import React from 'react';
import { Award, CheckCircle, ShieldAlert, Zap } from 'lucide-react';

export const TermsOfExcellence: React.FC = () => {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-luxury-gold mb-8 font-sans">The Code of Quality</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-light italic leading-tight mb-8">
          Terms of <span className="text-gold-gradient">Excellence</span>
        </h1>
        <div className="w-24 h-px bg-luxury-gold/30 mx-auto"></div>
      </div>

      <div className="prose prose-invert max-w-none space-y-16 font-sans font-extralight text-white/70 leading-relaxed">
        <p className="text-xl italic font-serif text-white/90 text-center mb-16">
          LowveldHub operates under a philosophy of premium quality, trust, and elite standards.
        </p>

        <section className="space-y-6 bg-luxury-gold/[0.02] p-10 border border-luxury-gold/10">
          <div className="flex items-center space-x-4 mb-4">
            <Award className="w-5 h-5 text-luxury-gold" />
            <h3 className="text-2xl font-serif text-white uppercase tracking-wider">1. Platform Philosophy</h3>
          </div>
          <p>LowveldHub is built to represent the highest standards of digital excellence in Mpumalanga.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="text-center">
              <p className="text-luxury-gold font-serif italic text-lg">We curate quality.</p>
            </div>
            <div className="text-center">
              <p className="text-luxury-gold font-serif italic text-lg">We protect trust.</p>
            </div>
            <div className="text-center">
              <p className="text-luxury-gold font-serif italic text-lg">We elevate standards.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <CheckCircle className="w-5 h-5 text-luxury-gold" />
            <h3 className="text-2xl font-serif text-white uppercase tracking-wider">2. Business Listings & Verification</h3>
          </div>
          <p>All businesses listed on LowveldHub must meet strict criteria:</p>
          <ul className="list-none space-y-3 pl-0">
            {[
              "Authentic registration and identity",
              "Proven service quality",
              "Ethical business conduct",
              "Commitment to excellence"
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="italic">We reserve the right to approve, suspend, or remove any listing that fails to meet our standards.</p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <Zap className="w-5 h-5 text-luxury-gold" />
            <h3 className="text-2xl font-serif text-white uppercase tracking-wider">3. Premium Conduct</h3>
          </div>
          <p>All platform users, partners, and service providers are expected to maintain:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {["Professionalism", "Integrity", "Respect", "Transparency"].map((attr, i) => (
              <div key={i} className="px-4 py-2 border border-white/10 text-center text-xs uppercase tracking-widest text-white/50">
                {attr}
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/40 text-sm">Abusive, fraudulent, misleading, or unethical conduct will result in immediate removal.</p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <ShieldAlert className="w-5 h-5 text-luxury-gold" />
            <h3 className="text-2xl font-serif text-white uppercase tracking-wider">4. Brand Protection</h3>
          </div>
          <p>LowveldHub reserves the right to protect its brand, platform experience, and community from misuse, misrepresentation, or damage.</p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-serif text-white uppercase tracking-wider">5. Platform Evolution</h3>
          <p>LowveldHub is a living ecosystem. Features, services, and standards will continuously evolve to maintain elite positioning and global competitiveness.</p>
        </section>

        <section className="space-y-6 pt-12 border-t border-white/5">
          <h3 className="text-xl font-serif text-white italic">6. Agreement</h3>
          <p>By accessing or using LowveldHub, you agree to uphold these Terms of Excellence and align with our mission to elevate Mpumalanga digitally.</p>
          <div className="pt-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Contact</p>
            <p className="text-luxury-gold">info@lowveldhub.co.za</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-4">© 2026 LowveldHub. All Rights Reserved.</p>
          </div>
        </section>
      </div>
    </div>
  );
};
