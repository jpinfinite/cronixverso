import React from 'react';

interface AdSensePlaceholderProps {
  slotId?: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
}

export const AdSensePlaceholder: React.FC<AdSensePlaceholderProps> = ({
  slotId = '0000000000',
  format = 'auto',
  className = ''
}) => {
  return (
    <div className={`my-8 w-full flex flex-col items-center justify-center p-4 bg-[#0b0f19] border border-cyan-500/20 rounded-2xl text-center relative overflow-hidden group ${className}`}>
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-purple-500/5 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center space-y-1 py-3">
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
          PUBLICIDADE | GOOGLE ADSENSE
        </span>
        <p className="text-xs text-slate-300 font-medium">
          Espaço de Anúncios Otimizado ({format.toUpperCase()})
        </p>
        <span className="text-[10px] text-slate-400 font-mono">Slot ID: {slotId}</span>
      </div>

      {/* Código Real do Google AdSense (será ativado com o ID de Publisher do usuário) */}
      {/* 
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot={slotId}
           data-ad-format={format}
           data-full-width-responsive="true"></ins>
      */}
    </div>
  );
};
