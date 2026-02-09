
import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-luxury-gold mb-8 font-sans">Commitment to Security</h2>
        <h1 className="text-5xl md:text-7xl font-serif font-light italic leading-tight mb-8">
          Privacy <span className="text-gold-gradient">Policy</span>
        </h1>
        <div className="w-24 h-px bg-luxury-gold/30 mx-auto"></div>
      </div>

      <div className="prose prose-invert max-w-none space-y-16 font-sans font-extralight text-white/70 leading-relaxed">
        <p className="text-xl italic font-serif text-white/90 text-center mb-16">
          At LowveldHub, your privacy, trust, and security are fundamental to everything we build.
        </p>

        <section className="space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <FileText className="w-5 h-5 text-luxury-gold" />
            <h3 className="text-2xl font-serif text-white uppercase tracking-wider">1. Information We Collect</h3>
          </div>
          <p>We may collect the following information when you use LowveldHub:</p>
          <ul className="list-none space-y-3 pl-0">
            {[
              "Personal details (name, email address, phone number)",
              "Business information (company name, services, location, listings)",
              "Usage data (pages visited, interactions, preferences)",
              "Communication records (emails, enquiries, applications)"
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <Eye className="w-5 h-5 text-luxury-gold" />
            <h3 className="text-2xl font-serif text-white uppercase tracking-wider">2. How We Use Your Information</h3>
          </div>
          <p>Your information is used to:</p>
          <ul className="list-none space-y-3 pl-0">
            {[
              "Provide and improve our services",
              "Process listings, enquiries, and applications",
              "Communicate platform updates and opportunities",
              "Enhance platform experience and performance",
              "Maintain security and prevent misuse"
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-luxury-gold font-medium italic text-lg mt-8">We never sell your data. Ever.</p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <Shield className="w-5 h-5 text-luxury-gold" />
            <h3 className="text-2xl font-serif text-white uppercase tracking-wider">3. Data Protection & Security</h3>
          </div>
          <p>We implement industry-standard security measures to protect your personal information against unauthorized access, misuse, or disclosure.</p>
          <p className="italic font-serif text-white">Your trust is our responsibility.</p>
        </section>

        <section className="space-y-6">
          <div className="flex items-center space-x-4 mb-4">
            <Lock className="w-5 h-5 text-luxury-gold" />
            <h3 className="text-2xl font-serif text-white uppercase tracking-wider">4. Sharing of Information</h3>
          </div>
          <p>Your information may only be shared with trusted service partners strictly for platform functionality and service delivery: never for marketing abuse.</p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-serif text-white uppercase tracking-wider">5. Cookies & Tracking</h3>
          <p>LowveldHub uses cookies and analytics tools to improve user experience, platform performance, and service personalization. You may disable cookies in your browser settings.</p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-serif text-white uppercase tracking-wider">6. Your Rights</h3>
          <p>You have the right to request access to your personal data, request corrections or deletion, and withdraw consent for communications.</p>
          <p>Requests can be made at: <a href="mailto:info@lowveldhub.co.za" className="text-luxury-gold underline decoration-luxury-gold/30">info@lowveldhub.co.za</a></p>
        </section>

        <section className="space-y-6 pt-12 border-t border-white/5">
          <h3 className="text-xl font-serif text-white italic">7. Policy Updates</h3>
          <p>We may update this Privacy Policy as our platform evolves. Any changes will be posted on this page.</p>
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
