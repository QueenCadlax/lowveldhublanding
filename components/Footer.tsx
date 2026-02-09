
import React, { useState } from 'react';
import { Instagram, Youtube, Facebook, ArrowRight, Check, Loader2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const TikTokIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram className="w-4 h-4" />, 
      url: 'https://www.instagram.com/lowveldhub/' 
    },
    { 
      name: 'TikTok', 
      icon: <TikTokIcon />, 
      url: 'https://www.tiktok.com/@lowveldhub' 
    },
    { 
      name: 'YouTube', 
      icon: <Youtube className="w-4 h-4" />, 
      url: 'https://www.youtube.com/@lowveldhub' 
    },
    { 
      name: 'Facebook', 
      icon: <Facebook className="w-4 h-4" />, 
      url: 'https://www.facebook.com/profile.php?id=61587666952204' 
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
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
      setMessage('Connection lost. Please try again.');
    }
  };

  return (
    <footer className="py-24 bg-luxury-black border-t border-white/5 mt-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-luxury-gold/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-2 mb-8 outline-none text-left group">
              <span className="font-serif text-3xl font-bold tracking-[0.2em] text-white group-hover:tracking-[0.22em] transition-all duration-500">
                LOWVELD<span className="text-luxury-gold">HUB</span>
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
            </button>
            <p className="text-white/40 font-sans font-light text-sm tracking-widest uppercase mb-1">Mpumalanga’s Premium Digital Ecosystem</p>
            <h4 className="text-luxury-gold font-serif italic text-2xl mb-8">Get Early Access. Be the first to experience Mpumalanga’s premium digital ecosystem.</h4>
            
            <form onSubmit={handleSubmit} className="relative max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  disabled={status === 'loading' || status === 'success'}
                  className="bg-white/5 border border-white/10 px-6 py-4 text-sm font-sans font-light outline-none focus:border-luxury-gold/50 transition-all duration-500 flex-grow disabled:opacity-50 text-white"
                />
                <button 
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`bg-luxury-gold text-black px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-3 transition-all duration-500 ${
                    status === 'success' 
                      ? 'bg-green-500/80 text-white cursor-default' 
                      : 'hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.03] active:scale-95'
                  } disabled:opacity-70`}
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-3 h-3 animate-spin" />
                  ) : status === 'success' ? (
                    <Check className="w-3 h-3" />
                  ) : (
                    <>Notify Me <ArrowRight className="w-3 h-3" /></>
                  )}
                </button>
              </div>
              
              {message && (
                <p className={`absolute -bottom-8 left-0 text-[10px] uppercase tracking-[0.2em] font-sans ${status === 'error' ? 'text-red-400' : 'text-luxury-gold'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.4em] font-sans text-white/60 mb-6 font-medium">Contact</h5>
              <ul className="space-y-4 text-sm font-sans font-extralight text-white/40">
                <li><a href="mailto:INFO@LOWVELDHUB.CO.ZA" className="hover:text-luxury-gold transition-colors block">INFO@LOWVELDHUB.CO.ZA</a></li>
                <li className="text-[10px] text-white/20 tracking-[0.2em] mt-4 uppercase">NELSPRUIT, MPUMALANGA</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.4em] font-sans text-white/60 mb-6 font-medium">Experience</h5>
              <ul className="space-y-3 mb-8 text-[10px] uppercase tracking-[0.2em] font-sans text-white/30">
                <li><button onClick={() => onNavigate('vision')} className="hover:text-luxury-gold transition-colors text-left uppercase tracking-[0.2em]">The Vision</button></li>
                <li><button onClick={() => onNavigate('ecosystem')} className="hover:text-luxury-gold transition-colors text-left uppercase tracking-[0.2em]">Ecosystem</button></li>
                <li><button onClick={() => onNavigate('careers')} className="hover:text-luxury-gold transition-colors text-left uppercase tracking-[0.2em]">Careers</button></li>
                <li><button onClick={() => onNavigate('early-access')} className="hover:text-luxury-gold transition-colors text-left uppercase tracking-[0.2em]">Reservation List</button></li>
              </ul>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-luxury-gold hover:text-luxury-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500 hover:scale-110 shadow-lg"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] font-sans text-white/30">
            Copyright © 2026 LowveldHub. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-[0.3em] font-sans text-white/30">
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">Terms of Excellence</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
