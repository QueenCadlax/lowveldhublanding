
import React, { useState } from 'react';
import { Loader2, Check, AlertCircle } from 'lucide-react';

export const EarlyAccess: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

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
        setMessage(data.message || 'Your seat among the elite is reserved. Check your email for confirmation.');
        setEmail('');
        // Reset after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(data.message || 'Connection failed. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Our systems are currently experiencing high demand. Please try again shortly.');
    }
  };

  return (
    <section id="early-access" className="py-40 bg-luxury-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">Request Your <span className="italic text-gold-gradient">Invitation</span></h2>
        <p className="text-lg md:text-xl font-sans font-extralight text-white/60 mb-16 leading-relaxed max-w-2xl mx-auto">
          Join Mpumalanga's most exclusive digital platform.
        </p>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-luxury-gold/30">
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
                className={`px-10 py-5 font-sans font-bold text-xs uppercase tracking-[0.4em] transition-all duration-700 whitespace-nowrap ${
                  status === 'success' 
                    ? 'bg-green-600 text-white cursor-default' 
                    : status === 'error'
                    ? 'bg-red-600 text-white cursor-default'
                    : 'bg-luxury-gold text-black hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-95'
                }`}
              >
                {status === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                ) : status === 'success' ? (
                  <Check className="w-4 h-4 mx-auto" />
                ) : status === 'error' ? (
                  <AlertCircle className="w-4 h-4 mx-auto" />
                ) : (
                  'Request Invitation'
                )}
              </button>
            </div>
            
            {message && (
              <div className={`text-[10px] uppercase tracking-[0.3em] font-sans italic animate-in fade-in slide-in-from-top-2 duration-500 ${status === 'error' ? 'text-red-400' : status === 'success' ? 'text-green-400' : 'text-luxury-gold'}`}>
                {message}
              </div>
            )}
          </form>
          
          <p className="mt-8 text-[9px] uppercase tracking-[0.4em] text-white/20 font-sans">
            Direct enquiries to: <a href="mailto:INFO@LOWVELDHUB.CO.ZA" className="hover:text-luxury-gold transition-colors">INFO@LOWVELDHUB.CO.ZA</a>
          </p>
        </div>
      </div>
    </section>
  );
};
