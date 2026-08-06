import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, Sparkles } from 'lucide-react';

interface ArticleAudioPlayerProps {
  title: string;
  text: string;
}

export const ArticleAudioPlayer: React.FC<ArticleAudioPlayerProps> = ({ title, text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<number>(1);
  const [progress, setProgress] = useState(0);
  const [isSupported, setIsSupported] = useState(true);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    // Cancelar fala anterior ao mudar de artigo
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
  }, [title, text]);

  const fullTextToRead = `${title}. ${text.replace(/###|##|#|\*\*|\*|\[|\]|\(http[^)]+\)/g, '')}`;

  const handlePlayPause = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPlaying) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
    } else {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(fullTextToRead);
      utterance.lang = 'pt-BR';
      utterance.rate = speed;

      // Tentar selecionar uma voz neural/natural em português brasileiro se disponível
      const voices = window.speechSynthesis.getVoices();
      const ptVoice = voices.find(v => v.lang.includes('pt-BR') || v.lang.includes('pt_BR'));
      if (ptVoice) {
        utterance.voice = ptVoice;
      }

      utterance.onboundary = (event) => {
        if (event.charIndex && fullTextToRead.length > 0) {
          const pct = Math.min(100, Math.round((event.charIndex / fullTextToRead.length) * 100));
          setProgress(pct);
        }
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
        setProgress(100);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        setIsPaused(false);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    if (isPlaying && utteranceRef.current) {
      handleStop();
    }
  };

  if (!isSupported) return null;

  return (
    <div className="rounded-2xl bg-gradient-to-r from-[#0d1322] via-[#0f172a] to-[#11192e] border border-cyan-500/20 p-4 sm:p-5 my-6 shadow-xl relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Lado Esquerdo: Título & Status */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
            <Volume2 className={`w-5 h-5 ${isPlaying && !isPaused ? 'animate-pulse' : ''}`} />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 flex items-center">
                <Sparkles className="w-3 h-3 mr-1" /> Ouvir Matéria
              </span>
              <span className="text-[10px] bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded-full font-semibold">
                Grátis por Áudio
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium line-clamp-1">
              {isPlaying ? (isPaused ? 'Narração pausada...' : 'Narrando artigo em voz alta...') : 'Ouça o artigo narrado em português com alta qualidade.'}
            </p>
          </div>
        </div>

        {/* Lado Direito: Controles */}
        <div className="flex items-center space-x-2 shrink-0 self-end sm:self-auto">
          {/* Seletor de Velocidade */}
          <div className="flex bg-white/5 border border-white/10 rounded-full p-0.5 text-[11px] font-bold">
            {[1, 1.25, 1.5, 2].map((s) => (
              <button
                key={s}
                onClick={() => handleSpeedChange(s)}
                className={`px-2 py-1 rounded-full transition-all ${
                  speed === s ? 'bg-cyan-500 text-black shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>

          {/* Botão Reiniciar */}
          {isPlaying && (
            <button
              onClick={handleStop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Reiniciar Narração"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* Botão Play / Pause */}
          <button
            onClick={handlePlayPause}
            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-black font-extrabold text-xs px-4 py-2 rounded-full transition-all shadow-md shadow-cyan-500/20"
          >
            {isPlaying && !isPaused ? (
              <>
                <Pause className="w-4 h-4 fill-black" />
                <span>Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-black" />
                <span>{isPaused ? 'Continuar' : 'Ouvir Agora'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Barra de Progresso */}
      {isPlaying && (
        <div className="mt-3 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-cyan-400 to-indigo-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};
