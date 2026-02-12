import React from 'react';
import { CheckCircle, Globe, Users, Zap, Shield, Lightbulb } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const About: React.FC<AboutPageProps> = ({ onNavigate }) => {
  React.useEffect(() => {
    // Add meta tags for About page
    document.title = 'About LowveldHub | Mpumalanga\'s Premium Digital Ecosystem';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about LowveldHub – Mpumalanga\'s premium digital ecosystem connecting verified businesses, trusted professionals, luxury experiences & regional innovation.');
    }
  }, []);

  return (
    <div className="bg-luxury-black text-white">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto relative">
        <div className="mb-6">
          <span className="text-luxury-gold text-sm uppercase tracking-[0.15em] font-semibold">Our Story</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair leading-tight">
          About LowveldHub
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Mpumalanga's Premium Digital Ecosystem
        </p>
        <p className="text-lg text-gray-400 mb-10">
          LowveldHub is a next-generation digital platform connecting people, businesses, creators, and premium services across Mpumalanga - built to elevate trust, visibility, and economic growth in the region.
        </p>
        <p className="text-gray-300 italic">
          We are creating a luxury-grade, verified digital ecosystem that brings together trusted professionals, high-quality businesses, exclusive experiences, and essential services into one powerful platform.
        </p>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-20 px-6 bg-luxury-gold/5 border-y border-luxury-gold/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Vision */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-playfair">Our Vision</h2>
            <p className="text-luxury-gold text-2xl font-semibold mb-6">
              To become Africa's most trusted regional digital ecosystem, starting with Mpumalanga.
            </p>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                <span>Every trusted business is visible</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                <span>Every professional is discoverable</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                <span>Every experience is premium</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                <span>Every transaction is secure</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                <span>Every community thrives digitally</span>
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-playfair">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              LowveldHub exists to reimagine how regions thrive in the digital age. We are committed to:
            </p>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                <span><strong>Digitize</strong> regional economies</span>
              </p>
              <p className="flex items-start gap-3">
                <Users className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                <span><strong>Empower</strong> local entrepreneurs</span>
              </p>
              <p className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                <span><strong>Build</strong> trusted business ecosystems</span>
              </p>
              <p className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                <span><strong>Create</strong> opportunities for communities</span>
              </p>
              <p className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-1" />
                <span><strong>Set</strong> new standards of African digital excellence</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why LowveldHub Exists */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-playfair">Why LowveldHub Exists</h2>
        
        <div className="bg-luxury-gold/5 border border-luxury-gold/30 p-10 rounded-lg mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Mpumalanga is rich in tourism, culture, nature, talent, and boundless business potential. Yet, it lacked a central, trusted digital platform that truly represents its excellence and connects its vibrant ecosystem.
          </p>
          <p className="text-2xl font-semibold text-luxury-gold">
            LowveldHub was created to fill that gap.
          </p>
        </div>

        <p className="text-lg text-gray-300 mb-8">We are building:</p>
        <ul className="grid md:grid-cols-2 gap-6">
          {[
            'A verified business directory',
            'A premium tourism & lifestyle hub',
            'A creator economy marketplace',
            'A digital commerce ecosystem',
            'A payments and loyalty system',
            'A smart AI-powered concierge'
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0"></div>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-400 mt-8 text-sm italic">
          All designed to serve, grow, and protect the regional economy.
        </p>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-6 bg-luxury-gold/5 border-y border-luxury-gold/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center font-playfair">What Makes Us Different</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Verified Listings Only',
                desc: 'Every business and professional is vetted to ensure trust and quality.'
              },
              {
                title: 'Premium Positioning',
                desc: 'We focus on excellence, not mass listings. Quality over quantity.'
              },
              {
                title: 'Regional Focus, Global Standards',
                desc: 'Local pride with world-class execution and international best practices.'
              },
              {
                title: 'Creator + Business Ecosystem',
                desc: 'We connect brands, creators, customers, and services in one unified platform.'
              },
              {
                title: 'Built for Scale',
                desc: 'Designed to expand across South Africa and throughout Africa.'
              },
              {
                title: 'Community-First',
                desc: 'Your success is our success. We grow together as a unified ecosystem.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-luxury-black border border-luxury-gold/30 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-luxury-gold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The LowveldHub Ecosystem */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-playfair">The LowveldHub Ecosystem</h2>
        
        <p className="text-center text-gray-300 mb-12 text-lg">
          LowveldHub integrates all the essential elements of a thriving regional economy:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            'Premium Business Directory',
            'Doctors, Lawyers & Trusted Experts',
            'Luxury Stays & Resorts',
            'Curated Tourism Experiences',
            'Real Estate & Investments',
            'Luxury Assets Marketplace',
            'Events & Lifestyle Experiences',
            'Creator Economy Hub',
            'Jobs & Opportunities Board',
            'Payments & Loyalty Infrastructure',
            'AI Concierge Services',
            'Community & Networking Hub'
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-luxury-gold/5 border border-luxury-gold/20">
              <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2 flex-shrink-0"></div>
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-luxury-gold/5 border-y border-luxury-gold/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center font-playfair">Our Core Values</h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { icon: '🏆', title: 'Excellence', desc: 'Premium standards in everything we do' },
              { icon: '🤝', title: 'Integrity', desc: 'Trust is our most valuable currency' },
              { icon: '⚡', title: 'Innovation', desc: 'Future-focused solutions for today\'s challenges' },
              { icon: '🌍', title: 'Community', desc: 'Growth and success for all participants' },
              { icon: '🚀', title: 'Empowerment', desc: 'Creating real opportunity and impact' }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-luxury-gold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Vision */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 font-playfair">Our Long-Term Vision</h2>
        
        <div className="bg-luxury-gold/10 border-2 border-luxury-gold/40 p-12 rounded-lg mb-10">
          <p className="text-xl text-gray-200 leading-relaxed mb-6">
            LowveldHub is Phase One of a <strong>continental expansion strategy</strong> to build <strong>Africa's most powerful regional digital ecosystems</strong>, province by province, country by country.
          </p>
          <p className="text-lg text-luxury-gold font-semibold">
            We're not just building a platform. We're building a movement.
          </p>
        </div>

        <p className="text-gray-300 mb-8">
          Our vision extends beyond Mpumalanga. We see LowveldHub as the blueprint for regional digital transformation across Africa - proving that local excellence + global standards + community focus = sustainable economic growth.
        </p>
      </section>

      {/* Join the Movement */}
      <section className="py-24 px-6 bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-playfair">Join the Movement</h2>
          
          <p className="text-xl text-gray-300 mb-12">
            LowveldHub is not just a platform. <strong>It is a movement to redefine African digital excellence.</strong>
          </p>

          <p className="text-gray-300 mb-10">Whether you are:</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              'A business owner',
              'A professional or creator',
              'An investor or partner',
              'An innovator or entrepreneur',
              'A community leader',
              'A visionary'
            ].map((role, index) => (
              <div key={index} className="py-3">
                <p className="text-gray-300">{role}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-luxury-gold font-semibold mb-12">
            There is a place for you inside LowveldHub.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button
              onClick={() => onNavigate('early-access')}
              className="bg-luxury-gold text-black px-10 py-4 rounded font-bold hover:bg-luxury-goldLight transition-colors text-lg"
            >
              Get Early Access
            </button>
            <button
              onClick={() => onNavigate('partners')}
              className="border-2 border-luxury-gold text-luxury-gold px-10 py-4 rounded font-bold hover:bg-luxury-gold/10 transition-colors text-lg"
            >
              Partner With Us
            </button>
          </div>

          <p className="text-gray-400 text-sm">
            📩 Partnerships & Enquiries: <span className="text-luxury-gold font-semibold">hello@lowveldhub.co.za</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
