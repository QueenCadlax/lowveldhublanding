import React from 'react';
import { CheckCircle2, Stethoscope, Briefcase, Sparkles, Car, Home, Hotel, ShoppingBag, BookOpen, Truck, ArrowRight } from 'lucide-react';

const partnerCategories = [
  { name: "Medical & Health Professionals", icon: <Stethoscope className="w-8 h-8" /> },
  { name: "Legal & Financial Services", icon: <Briefcase className="w-8 h-8" /> },
  { name: "Beauty, Wellness & Lifestyle", icon: <Sparkles className="w-8 h-8" /> },
  { name: "Automotive & Transport", icon: <Car className="w-8 h-8" /> },
  { name: "Real Estate & Construction", icon: <Home className="w-8 h-8" /> },
  { name: "Hospitality & Tourism", icon: <Hotel className="w-8 h-8" /> },
  { name: "Retail & Local Brands", icon: <ShoppingBag className="w-8 h-8" /> },
  { name: "Education & Training", icon: <BookOpen className="w-8 h-8" /> },
  { name: "Logistics & Infrastructure", icon: <Truck className="w-8 h-8" /> },
];

const partnerBenefits = [
  {
    number: "01",
    title: "Unmatched Visibility",
    desc: "Get discovered by customers actively searching for trusted businesses across Mpumalanga."
  },
  {
    number: "02",
    title: "Verified Trust",
    desc: "Our verification seal positions your brand as premium, professional, and reliable."
  },
  {
    number: "03",
    title: "Real Business Growth",
    desc: "Access marketing exposure, analytics, and premium tools designed to grow your customer base."
  }
];

const earlyPartnerPerks = [
  "Priority verification",
  "Premium placement at launch",
  "Early marketing exposure",
  "Founding partner status"
];

export const Partners: React.FC = () => {
  return (
    <div className="min-h-screen bg-luxury-black relative">
      {/* Hero Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-4">
            Become a <span className="italic text-gold-gradient">Verified</span> LowveldHub Partner
          </h1>
          
          <p className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold mb-12 font-sans font-medium">
            Mpumalanga's Trusted Premium Network
          </p>
          
          <div className="space-y-8 max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl font-sans font-extralight text-white/70 leading-relaxed">
              We list, verify, and promote trusted professionals, essential services, and premium businesses across all industries - connecting them with real customers actively searching for quality.
            </p>
            
            <p className="text-base md:text-lg font-sans font-extralight text-white/60 leading-relaxed">
              From doctors and law firms to lodges, developers, retailers, and creators - LowveldHub is where Mpumalanga finds excellence.
            </p>
          </div>

          <div className="inline-flex items-center space-x-3 mb-12 px-4 py-1.5 border border-luxury-gold/20 rounded-full bg-luxury-gold/5">
            <span className="text-[10px] uppercase tracking-[0.4em] font-sans text-luxury-gold">Launching July 2026 - Early Partner Applications Now Open</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:info@lowveldhub.co.za?subject=Partnership Listing Application - LowveldHub"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-luxury-gold text-black font-sans font-bold text-xs uppercase tracking-[0.4em] transition-all duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] hover:scale-[1.03] active:scale-95 group rounded-lg"
            >
              <span>Apply for Listing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
            <button 
              onClick={() => window.location.href = "mailto:info@lowveldhub.co.za?subject=Partnership Call Request - LowveldHub"}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 hover:border-luxury-goldLight text-white/90 hover:text-white font-sans font-light text-xs uppercase tracking-[0.4em] transition-all duration-500 hover:bg-white/[0.05] hover:scale-[1.03] active:scale-95 group rounded-lg"
            >
              <span>Request Partnership Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-32 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-white">
              Who Can Be Listed on LowveldHub?
            </h2>
            <p className="text-lg font-sans font-extralight text-white/60 mb-12">
              Any business or professional committed to quality, trust, and service excellence.
            </p>
            <p className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-sans font-medium mb-16">
              Core Categories Include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partnerCategories.map((category, idx) => (
              <div 
                key={idx}
                className="group relative rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-luxury-gold/30 hover:border-luxury-gold/60 p-10 flex flex-col items-center text-center transition-all duration-700 hover:bg-gradient-to-br hover:from-luxury-gold/[0.08] hover:to-luxury-gold/[0.02] cursor-default overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <h4 className="text-base font-serif font-medium text-white group-hover:text-luxury-gold transition-colors duration-500 relative z-10">
                  {category.name}
                </h4>
              </div>
            ))}
          </div>

          <div className="text-center py-8 border-t border-white/5">
            <p className="text-sm font-sans font-extralight text-white/50">And many more.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
              Why Partner With LowveldHub?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {partnerBenefits.map((benefit, idx) => (
              <div key={idx} className="text-center space-y-4">
                <div className="text-5xl font-serif italic text-luxury-gold mb-6">{benefit.number}</div>
                <h3 className="text-xl font-serif font-medium text-white mb-4">{benefit.title}</h3>
                <p className="text-sm font-sans font-extralight text-white/50 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-32 px-6 relative border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-12 text-white">
            Our Promise
          </h2>

          <h3 className="text-3xl md:text-4xl font-serif font-light mb-16 text-white">
            Premium standard. <span className="italic text-gold-gradient">Not limited access.</span>
          </h3>

          <div className="space-y-8 max-w-3xl mx-auto">
            <p className="text-base md:text-lg font-sans font-extralight text-white/60 leading-relaxed">
              <strong className="text-white">LowveldHub is an open platform - anyone can apply.</strong> But only verified excellence is listed.
            </p>
            
            <p className="text-base md:text-lg font-sans font-extralight text-white/60 leading-relaxed">
              Every partner undergoes a quality and credibility review to ensure we protect customer trust and maintain world-class standards.
            </p>

            <p className="text-base md:text-lg font-sans font-extralight text-white/60 leading-relaxed">
              <strong className="text-white">We are not a classifieds site.</strong> We are Mpumalanga's official digital business ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Early Partner Section */}
      <section className="py-32 px-6 relative border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-white">
              Early Partner Advantage
            </h2>
            <p className="text-lg font-sans font-extralight text-white/60">Launching July 2026</p>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-12 mb-12">
            <p className="text-center text-sm font-sans font-extralight text-white/70 mb-8">
              Early partners receive:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {earlyPartnerPerks.map((perk, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <CheckCircle2 className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <span className="text-sm font-sans font-extralight text-white/70">{perk}</span>
                </div>
              ))}
            </div>

            <div className="text-center pt-8 border-t border-white/5">
              <p className="text-xs font-sans font-extralight text-white/50 italic">
                Limited early-access partner slots available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 relative border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-white">
            Ready to List Your Business?
          </h2>
          <p className="text-lg font-sans font-extralight text-white/60 mb-12">
            Apply to become a verified LowveldHub partner and position your business at the forefront of Mpumalanga's digital future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href="mailto:info@lowveldhub.co.za?subject=Partnership Listing Application - LowveldHub"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-luxury-gold text-black font-sans font-bold text-sm uppercase tracking-[0.4em] transition-all duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] hover:scale-[1.03] active:scale-95 group rounded-lg"
            >
              <span>Apply for Listing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <p className="text-sm font-sans font-extralight text-white/50">
            or email: <span className="text-white/70">info@lowveldhub.co.za</span>
          </p>
        </div>
      </section>
    </div>
  );
};
