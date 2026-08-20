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
  const adRef = useRef<HTMLModElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pushedRef = useRef(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !adRef.current || pushedRef.current) return;

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

    observer.observe(adRef.current);

    const mutationObserver = new MutationObserver(() => {
      const ins = adRef.current;
      if (ins) {
        const isUnfilled = ins.getAttribute('data-ad-status') === 'unfilled';
        const hasIframe = ins.querySelector('iframe') !== null;
        if (isUnfilled) {
          setIsLoaded(false);
        } else if (hasIframe) {
          setIsLoaded(true);
        }
      }
    });

    mutationObserver.observe(adRef.current, {
      attributes: true,
      attributeFilter: ['data-ad-status', 'style'],
      childList: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [isMounted, slotId]);

  const activeSlot = CRONIXVERSO_AD_SLOTS[slotId as keyof typeof CRONIXVERSO_AD_SLOTS] || '7125135295';

  return (
    <div 
      ref={containerRef}
      className={`my-6 mx-auto w-full text-center transition-all duration-300 ${isLoaded ? 'block' : 'hidden'} ${className}`}
    >
      <span className="block text-[10px] font-mono tracking-widest text-cyan-400/80 uppercase mb-1">
        PUBLICIDADE | GOOGLE ADSENSE
      </span>

      <ins 
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-1151448515464841"
        data-ad-slot={activeSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSensePlaceholder;

