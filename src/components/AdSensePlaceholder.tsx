import React, { useEffect, useRef, useState } from 'react';

export const CRONIXVERSO_AD_SLOTS = {
  'ads-top-article': '7125135295',
  'ads-in-article': '4498971950',
  'ads-bottom-article': '1498415859'
};

interface AdSensePlaceholderProps {
  slotId?: string;
  format?: 'auto' | 'horizontal' | 'rectangle' | 'fluid';
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const AdSensePlaceholder: React.FC<AdSensePlaceholderProps> = ({
  slotId = 'ads-in-article',
  format = 'auto',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pushedRef = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current || pushedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pushedRef.current) {
          pushedRef.current = true;
          try {
            if (typeof window !== 'undefined') {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
            }
          } catch (err) {
            console.error('AdSense lazy push error:', err);
          }
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [isMounted, slotId]);

  const activeSlot = CRONIXVERSO_AD_SLOTS[slotId as keyof typeof CRONIXVERSO_AD_SLOTS] || '7125135295';

  return (
    <div 
      ref={containerRef}
      className={`my-8 w-full flex flex-col items-center justify-center p-2 bg-[#0b0f19]/90 border border-cyan-500/20 rounded-2xl text-center relative overflow-hidden group shadow-inner ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-purple-500/5 pointer-events-none" />
      
      <span className="relative z-10 block text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase mb-2">
        PUBLICIDADE | GOOGLE ADSENSE
      </span>

      <ins 
        className="adsbygoogle relative z-10 w-full"
        style={{ display: 'block', minHeight: '120px', textAlign: 'center' }}
        data-ad-client="ca-pub-1151448515464841"
        data-ad-slot={activeSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};
