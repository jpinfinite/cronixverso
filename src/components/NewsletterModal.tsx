import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem('cronix_newsletter_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 8000); // 8 seconds trigger
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('cronix_newsletter_dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      handleClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="fixed inset-0" onClick={handleClose} />

      <div className="relative w-full max-w-md bg-[#0b0f19] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-center space-y-4">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        {subscribed ? (
          <div className="py-6 space-y-3">
            <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto animate-bounce" />
            <h3 className="text-xl font-bold text-white">Inscrição Confirmada!</h3>
            <p className="text-xs text-slate-300">
              Você agora receberá em primeira mão o melhor do ecossistema CRONIXVERSO.
            </p>
          </div>
        ) : (
          <>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto text-cyan-400">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">NEWSLETTER EXCLUSIVA</span>
              <h3 className="font-display font-extrabold text-xl text-white">
                Não Perca o <span className="gradient-text">Futuro da Tech</span>
              </h3>
              <p className="text-xs text-slate-400">
                Junte-se a +45 mil engenheiros e entusiastas. Receba resumos semanais de IA, hardware e ciência.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <input 
                type="email"
                required
                placeholder="Seu melhor e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#07090e] border border-white/15 rounded-full px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button 
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs py-3 rounded-full flex items-center justify-center space-x-1.5 transition-all shadow-lg shadow-cyan-500/25"
              >
                <span>Inscrever-me Gratuitamente</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <p className="text-[10px] text-slate-500">Sem spam. Cancele quando quiser com 1 clique.</p>
          </>
        )}
      </div>
    </div>
  );
};
