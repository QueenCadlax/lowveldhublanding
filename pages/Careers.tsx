
import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Mail, FileText, CheckCircle2, X, Filter } from 'lucide-react';

const jobRoles = [
  {
    title: "Field Agents",
    category: "Operations",
    purpose: "Recruit, verify, and onboard businesses into the LowveldHub ecosystem.",
    responsibilities: [
      "Visit businesses across Mpumalanga",
      "Register and onboard verified listings",
      "Educate businesses about LowveldHub",
      "Capture high-quality business data",
      "Maintain professional relationships",
      "Ensure data accuracy and quality"
    ]
  },
  {
    title: "Team Leaders",
    category: "Management",
    purpose: "Manage and lead Field Agent teams across districts.",
    responsibilities: [
      "Supervise agent performance",
      "Set targets and KPIs",
      "Train and onboard new agents",
      "Quality control of listings",
      "Regional performance reporting",
      "Business development support"
    ]
  },
  {
    title: "Business Development Officers",
    category: "Sales & Partnerships",
    purpose: "Secure premium partners, luxury brands, developers, and high-value listings.",
    responsibilities: [
      "Acquire premium businesses",
      "Build strategic partnerships",
      "Secure exclusive listings",
      "Manage corporate clients",
      "Drive revenue growth",
      "Handle key accounts"
    ]
  },
  {
    title: "Sales & Partnerships Agents",
    category: "Sales & Partnerships",
    purpose: "Drive platform monetization through sales of premium listings, ads, and memberships.",
    responsibilities: [
      "Sell premium listings",
      "Onboard advertisers",
      "Pitch platform services",
      "Maintain client relationships",
      "Upsell platform features",
      "Monthly sales reporting"
    ]
  },
  {
    title: "Content Creators & Social Media Scouts",
    category: "Creative",
    purpose: "Discover, capture, and promote Mpumalanga’s finest experiences and businesses.",
    responsibilities: [
      "Identify viral-worthy content",
      "Capture photos & short videos",
      "Discover trending locations",
      "Create platform content",
      "Assist social media campaigns",
      "Promote businesses organically"
    ]
  },
  {
    title: "Community Managers",
    category: "Operations",
    purpose: "Manage user engagement and business relationships.",
    responsibilities: [
      "Manage community interactions",
      "Handle onboarding queries",
      "Support businesses & users",
      "Moderate reviews & feedback",
      "Maintain platform trust"
    ]
  },
  {
    title: "Regional Ambassadors",
    category: "Brand",
    purpose: "Represent LowveldHub in towns and districts.",
    responsibilities: [
      "Represent brand locally",
      "Build regional partnerships",
      "Promote platform adoption",
      "Attend events",
      "Community engagement"
    ]
  }
];

const categories = ["All Positions", "Operations", "Management", "Sales & Partnerships", "Creative", "Brand"];

export const Careers: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Positions");
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  const filteredRoles = activeCategory === "All Positions" 
    ? jobRoles 
    : jobRoles.filter(role => role.category === activeCategory);

  const handleApplyClick = (e: React.MouseEvent, roleTitle: string) => {
    e.preventDefault();
    setSelectedRole(roleTitle);
    setTimeout(() => {
      setIsModalAnimating(true);
    }, 100);
  };

  const closeModal = () => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setSelectedRole(null);
    }, 500);
  };

  return (
    <div className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-8 px-4 py-1.5 border border-luxury-gold/20 rounded-full bg-luxury-gold/5">
            <MapPin className="w-3 h-3 text-luxury-gold" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-sans text-luxury-gold">Mpumalanga, South Africa Only</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-light mb-8">
            We’re <span className="italic text-gold-gradient">Hiring</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl font-sans font-extralight text-white/60 leading-relaxed">
            Join Mpumalanga’s most ambitious digital ecosystem and help shape the future of business, tourism, and lifestyle in the province.
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-16 flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-6 text-white/40">
            <Filter className="w-3 h-3" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans">Filter Excellence</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-sans transition-all duration-500 border rounded-sm ${
                  activeCategory === cat
                    ? 'bg-luxury-gold text-black border-luxury-gold shadow-[0_0_30px_rgba(212,175,55,0.4)] scale-105'
                    : 'bg-transparent text-white/40 border-white/10 hover:border-luxury-gold/50 hover:text-white hover:scale-105 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-32 transition-all duration-700">
          {filteredRoles.map((role, i) => (
            <div key={role.title} className="bg-luxury-black p-12 flex flex-col justify-between group transition-all duration-700 hover:bg-luxury-gold/[0.02] animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-serif text-white group-hover:text-luxury-gold transition-colors">{role.title}</h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-sans text-luxury-gold/60 py-1 px-3 border border-luxury-gold/20 rounded-full">
                    {role.category}
                  </span>
                </div>
                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-sans text-white/30 mb-2">Role Purpose</p>
                  <p className="text-sm font-sans font-extralight text-white/60 italic">{role.purpose}</p>
                </div>
                <div className="mb-12">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-sans text-white/30 mb-4">Key Responsibilities</p>
                  <ul className="space-y-3">
                    {role.responsibilities.map((res, j) => (
                      <li key={j} className="flex items-start space-x-3 text-xs font-sans font-extralight text-white/40">
                        <div className="w-1 h-1 rounded-full bg-luxury-gold/40 mt-1.5 shrink-0"></div>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button 
                onClick={(e) => handleApplyClick(e, role.title)}
                className="inline-flex items-center self-start px-6 py-3 border border-luxury-gold/20 text-[10px] uppercase tracking-[0.4em] font-sans text-luxury-gold transition-all duration-500 group text-left hover:border-luxury-gold hover:text-white hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-95"
              >
                <span>Apply Now</span>
                <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
          
          {filteredRoles.length === 0 && (
            <div className="col-span-full py-24 text-center bg-luxury-black">
              <p className="font-serif italic text-white/40 text-xl tracking-widest">No positions currently curated for this category.</p>
            </div>
          )}
        </div>

        <div className="text-center py-20 border-t border-white/5">
          <p className="text-sm font-sans font-extralight text-white/40 mb-4">Direct applications to</p>
          <a href="mailto:INFO@LOWVELDHUB.CO.ZA" className="text-3xl md:text-5xl font-serif text-white hover:text-luxury-gold transition-all duration-500 italic tracking-widest underline decoration-luxury-gold/30 underline-offset-8 hover:decoration-luxury-gold inline-block hover:scale-[1.02] active:scale-95">
            INFO@LOWVELDHUB.CO.ZA
          </a>
        </div>
      </div>

      {/* Luxury Instruction Modal */}
      {selectedRole && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 transition-opacity duration-700 ${isModalAnimating ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-black/90 backdrop-blur-3xl" onClick={closeModal}></div>
          <div className={`relative w-full max-w-2xl bg-luxury-black border border-luxury-gold/20 p-8 md:p-16 shadow-[0_0_120px_rgba(212,175,55,0.1)] overflow-y-auto max-h-[90vh] transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) ${isModalAnimating ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}>
            <button 
              onClick={closeModal} 
              className="absolute top-8 right-8 text-white/30 hover:text-luxury-gold transition-colors outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">Application <span className="italic text-gold-gradient">Process</span></h2>
              <p className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-sans">Role: {selectedRole}</p>
            </div>

            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-4 h-4 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.3em] font-sans text-white/80 mb-2">Step 1: Compose Email</h4>
                  <p className="text-sm font-sans font-extralight text-white/50 leading-relaxed">
                    Direct your application to <span className="text-white font-medium">INFO@LOWVELDHUB.CO.ZA</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0 mt-1">
                  <FileText className="w-4 h-4 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.3em] font-sans text-white/80 mb-2">Step 2: Attach Documents</h4>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-center space-x-3 text-xs font-sans font-extralight text-white/50">
                      <CheckCircle2 className="w-3 h-3 text-luxury-gold/60" />
                      <span>Updated Curriculum Vitae (CV)</span>
                    </li>
                    <li className="flex items-center space-x-3 text-xs font-sans font-extralight text-white/50">
                      <CheckCircle2 className="w-3 h-3 text-luxury-gold/60" />
                      <span>Brief Motivation Letter (Why you?)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full border border-luxury-gold/30 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-luxury-gold font-serif italic text-lg">!</span>
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-[0.3em] font-sans text-white/80 mb-2">Important Notice</h4>
                  <p className="text-sm font-sans font-extralight text-white/50 leading-relaxed">
                    Ensure the subject line reads: <br/>
                    <span className="text-luxury-gold italic tracking-widest font-serif text-lg">"Application for {selectedRole}"</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/5">
              <a 
                href={`mailto:INFO@LOWVELDHUB.CO.ZA?subject=Application for ${selectedRole}`}
                className="w-full inline-flex items-center justify-center px-10 py-5 bg-luxury-gold text-black font-sans font-bold text-[10px] uppercase tracking-[0.4em] transition-all duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] hover:scale-[1.03] active:scale-95"
              >
                Apply Now
              </a>
              <button 
                onClick={closeModal}
                className="w-full mt-4 text-[10px] uppercase tracking-[0.3em] font-sans text-white/30 hover:text-white transition-all duration-500 py-4 hover:tracking-[0.4em]"
              >
                Return to roles
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
