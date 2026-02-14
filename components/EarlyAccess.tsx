
import React, { useState } from 'react';
import { Loader2, Check, AlertCircle, Mail } from 'lucide-react';
import { validateEmail } from '../lib/validation';

export const EarlyAccess: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [retryCount, setRetryCount] = useState(0);

  // Real-time email validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    if (!value) {
      setEmailError('');
      return;
    }

    if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || emailError) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok || response.status === 409) {
        // 200 (new signup) or 409 (duplicate) both indicate success
        setStatus('success');
        setMessage(
          response.status === 409
            ? '✨ You're already on our exclusive list!'
            : data.message || 'Your seat among the elite is reserved. Check your email for confirmation.'
        );
        setEmail('');
        setRetryCount(0);
        
        // Reset after 6 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 6000);
      } else if (response.status === 429) {
        // Rate limited
        setStatus('error');
        setMessage('Too many attempts. Please wait a minute before trying again.');
      } else if (response.status === 400) {
        setStatus('error');
        setMessage(data.message || 'Invalid email address. Please try again.');
      } else {
        setStatus('error');
        setMessage(data.message || 'Connection failed. Please try again shortly.');
        setRetryCount(retryCount + 1);
      }
    } catch (err) {
      console.error('Signup error:', err);
      setStatus('error');
      setMessage(
        retryCount >= 2
          ? 'Our systems are experiencing issues. Please try again in a few moments.'
          : 'Connection failed. Please check your internet and try again.'
      );
      setRetryCount(retryCount + 1);
    }
  };

  const isFormValid = email && !emailError && status !== 'loading' && status !== 'success';

  return (
    <section id="early-access" className="py-40 bg-luxury-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">Request Your <span className="italic text-gold-gradient">Invitation</span></h2>
        <p className="text-lg md:text-xl font-sans font-extralight text-white/60 mb-16 leading-relaxed max-w-2xl mx-auto">
          Join Mpumalanga's most exclusive digital platform. <span className="font-serif text-lg md:text-2xl font-light italic text-gold-gradient tracking-[0.2em] drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">Launching July 2026</span>. Limited spots available for visionaries.
        </p>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-luxury-gold/30 focus-within:border-luxury-gold/50">
                <div className="flex items-center px-4 sm:px-6 text-white/40">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email" 
                  required
                  disabled={status === 'loading' || status === 'success'}
                  maxLength={254}
                  className="bg-transparent px-4 sm:px-6 py-5 text-sm font-sans font-light outline-none flex-grow disabled:opacity-50 text-white placeholder:text-white/20"
                  aria-label="Email address"
                  aria-invalid={!!emailError}
                />
                <button 
                  type="submit"
                  disabled={!isFormValid}
                  className={`px-10 py-5 font-sans font-bold text-xs uppercase tracking-[0.4em] transition-all duration-700 whitespace-nowrap ${
                    status === 'success' 
                      ? 'bg-green-600 text-white cursor-default' 
                      : status === 'error'
                      ? 'bg-red-600 text-white cursor-default'
                      : !isFormValid
                      ? 'bg-luxury-gold/40 text-black/40 cursor-not-allowed'
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
              
              {emailError && status !== 'success' && (
                <div className="text-red-400 text-xs font-sans animate-in fade-in slide-in-from-top-1 duration-300 px-4">
                  {emailError}
                </div>
              )}
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
    </section>
  );
};
