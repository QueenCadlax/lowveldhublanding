import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const TikTokIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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

  return (
    <footer className="py-20 bg-luxury-black border-t border-white/5 mt-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-luxury-gold/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand Section */}
          <div>
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-2 mb-4 outline-none text-left group">
              <Logo variant="full" size="md" />
            </button>
            <p className="text-white/40 font-sans font-light text-sm tracking-widest uppercase">Mpumalanga's Premium Digital Ecosystem</p>
          </div>

          {/* Contact Section */}
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-sans text-white/60 mb-6 font-medium">Contact</h5>
            <ul className="space-y-3 text-sm font-sans font-extralight text-white/40">
              <li>
                <a href="mailto:INFO@LOWVELDHUB.CO.ZA" className="hover:text-luxury-gold transition-colors block">
                  INFO@LOWVELDHUB.CO.ZA
                </a>
              </li>
              <li className="text-[10px] text-white/20 tracking-[0.2em] uppercase pt-2">
                Nelspruit, Mpumalanga
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.4em] font-sans text-white/60 mb-6 font-medium">Connect</h5>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-luxury-gold hover:text-luxury-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-500 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] font-sans text-white/30">
            © 2026 LowveldHub. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-[0.3em] font-sans text-white/30">
            <button onClick={() => onNavigate('vision')} className="hover:text-white transition-colors">
              Vision
            </button>
            <span className="text-white/10">•</span>
            <button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span className="text-white/10">•</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
              Terms of Excellence
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
