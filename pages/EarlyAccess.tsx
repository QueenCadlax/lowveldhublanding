
import React, { useState } from 'react';
import { Mail, Briefcase, UserCheck, Layout, Loader2, Check, ArrowRight } from 'lucide-react';

export const EarlyAccess: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleMainSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message);
      }
    } catch (err) {
      setStatus('error');
      setMessage('Our network is currently exclusive. Please try again.');
    }
  };

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-[10px] uppercase tracking-[0.6em] text-luxury-gold mb-8 font-sans font-medium">Get Early Access</h2>
        <h1 className="text-5xl md:text-8xl font-serif font-light italic leading-tight mb-8">
          The <span className="text-gold-gradient">Reservation</span> List
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl font-sans font-extralight text-white/50 leading-relaxed mb-16">
          Be the first to experience Mpumalanga’s premium digital ecosystem. <br className="hidden md:block" /> 
          The ecosystem is launching <span className="text-white">July 2026</span>. Secure your presence today.
        </p>

        {/* Primary Early Access Form */}
        <div className="max-w-xl mx-auto relative">
          <div className="absolute inset-0 bg-luxury-gold/5 blur-3xl rounded-full -z-10"></div>
          <form onSubmit={handleMainSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                required
                disabled={status === 'loading' || status === 'success'}
                className="bg-transparent px-6 py-5 text-sm font-sans font-light outline-none flex-grow disabled:opacity-50 text-white placeholder:text-white/20"
              />
              <button 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`px-10 py-5 bg-luxury-gold text-black font-sans font-bold text-xs uppercase tracking-[0.3em] transition-all duration-500 whitespace-nowrap ${
                  status === 'success' 
                    ? 'bg-green-500/80 text-white cursor-default' 
                    : 'hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-95'
                }`}
              >
                {status === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                ) : status === 'success' ? (
                  <Check className="w-4 h-4 mx-auto" />
                ) : (
                  'Notify Me'
                )}
              </button>
            </div>
            {message && (
              <p className={`text-[10px] uppercase tracking-[0.3em] font-sans italic transition-all duration-500 ${status === 'error' ? 'text-red-400' : 'text-luxury-gold'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-[10px] uppercase tracking-[0.5em] text-white/30 text-center mb-10 font-sans font-medium">Specific Enquiries</h3>
        
        {/* User Interest */}
        <div className="p-12 border border-white/10 bg-luxury-dark/50 flex flex-col md:flex-row gap-10 items-center justify-between group hover:border-luxury-gold/30 transition-all duration-700 hover:bg-luxury-gold/[0.01] shadow-lg">
          <div className="max-w-md">
            <div className="flex items-center space-x-4 mb-4">
              <UserCheck className="w-5 h-5 text-luxury-gold" />
              <h3 className="text-2xl font-serif text-white/95">Early User Signup</h3>
            </div>
            <p className="text-sm font-sans font-extralight text-white/50 leading-relaxed">
              Be the first to experience the LowveldHub interface. Get notified of private beta openings and exclusive experiences.
            </p>
          </div>
          <a href="mailto:info@lowveldhub.co.za?subject=Early User Interest" className="px-10 py-4 border border-white/20 text-[10px] uppercase tracking-[0.3em] font-sans hover:bg-white hover:text-black hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 whitespace-nowrap active:scale-95">
            Secure My Spot
          </a>
        </div>

        {/* Business Interest */}
        <div className="p-12 border border-white/10 bg-luxury-dark/50 flex flex-col md:flex-row gap-10 items-center justify-between group hover:border-luxury-gold/30 transition-all duration-700 hover:bg-luxury-gold/[0.01] shadow-lg">
          <div className="max-w-md">
            <div className="flex items-center space-x-4 mb-4">
              <Layout className="w-5 h-5 text-luxury-gold" />
              <h3 className="text-2xl font-serif text-white/95">Business Pre-Listing</h3>
            </div>
            <p className="text-sm font-sans font-extralight text-white/50 leading-relaxed">
              Secure a verified position for your business. Priority placement and early-bird listing rates for verified premium providers.
            </p>
          </div>
          <a href="mailto:info@lowveldhub.co.za?subject=Business Pre-listing Inquiry" className="px-10 py-4 border border-white/20 text-[10px] uppercase tracking-[0.3em] font-sans hover:bg-white hover:text-black hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 whitespace-nowrap active:scale-95">
            Register Business
          </a>
        </div>

        {/* Agent Interest */}
        <div className="p-12 border border-white/10 bg-luxury-dark/50 flex flex-col md:flex-row gap-10 items-center justify-between group hover:border-luxury-gold/30 transition-all duration-700 hover:bg-luxury-gold/[0.01] shadow-lg">
          <div className="max-w-md">
            <div className="flex items-center space-x-4 mb-4">
              <Briefcase className="w-5 h-5 text-luxury-gold" />
              <h3 className="text-2xl font-serif text-white/95">Agent & Partner Interest</h3>
            </div>
            <p className="text-sm font-sans font-extralight text-white/50 leading-relaxed">
              Join our network of regional partners and ambassadors. Collaborate on expanding the ecosystem across Mpumalanga.
            </p>
          </div>
          <a href="mailto:info@lowveldhub.co.za?subject=Partnership Interest" className="px-10 py-4 border border-white/20 text-[10px] uppercase tracking-[0.3em] font-sans hover:bg-white hover:text-black hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 whitespace-nowrap active:scale-95">
            Express Interest
          </a>
        </div>
      </div>

      <div className="mt-32 text-center">
        <div className="inline-block p-1 bg-luxury-gold/10 rounded-full mb-8">
          <div className="px-8 py-3 bg-luxury-black rounded-full">
            <p className="text-[10px] uppercase tracking-[0.4em] font-sans text-luxury-gold font-medium">Contact Us Directly</p>
          </div>
        </div>
        <a href="mailto:info@lowveldhub.co.za" className="flex items-center justify-center space-x-4 group hover:scale-[1.05] active:scale-95 transition-all duration-700">
          <Mail className="w-6 h-6 text-luxury-gold group-hover:scale-125 transition-transform duration-700" />
          <span className="text-3xl md:text-5xl font-serif text-white group-hover:text-luxury-gold transition-colors italic tracking-widest drop-shadow-[0_0_10px_rgba(212,175,55,0)] group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">info@lowveldhub.co.za</span>
        </a>
      </div>
    </div>
  );
};
