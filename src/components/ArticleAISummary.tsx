import React, { useState } from 'react';
import { Sparkles, Check, Copy, ChevronDown, ChevronUp, Bot } from 'lucide-react';

interface ArticleAISummaryProps {
  title: string;
  excerpt: string;
  content: string;
}

export const ArticleAISummary: React.FC<ArticleAISummaryProps> = ({ title, excerpt, content }) => {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  // Extração inteligente de pontos chave a partir dos cabeçalhos e parágrafos do artigo
  const extractKeyPoints = () => {
    const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
    const headings = lines.filter(l => l.startsWith('### ')).map(l => l.replace('### ', ''));
    
    if (headings.length >= 3) {
      return headings.slice(0, 3).map((h, idx) => ({
        topic: `Ponto ${idx + 1}`,
        desc: h
      }));
    }

    // Fallback inteligente baseado em sentenças principais
    const sentences = excerpt.split('. ').concat(lines.filter(l => !l.startsWith('#') && l.length > 40));
    return [
      { topic: 'Inovação Principal', desc: sentences[0] || title },
      { topic: 'Impacto Técnico', desc: sentences[1] || 'Transformação significativa no ecossistema de tecnologia e inteligência artificial.' },
      { topic: 'Conclusão & Tendência', desc: sentences[2] || 'Adoção em larga escala esperada para os próximos trimestres.' }
    ];
  };

  const points = extractKeyPoints();

  const handleCopy = () => {
    const textToCopy = `Resumo por IA (CRONIXVERSO):\n${title}\n\n` + 
      points.map(p => `• ${p.topic}: ${p.desc}`).join('\n');
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#0c1220] via-[#0f172a] to-[#131b30] border border-cyan-500/30 p-5 sm:p-6 my-6 shadow-2xl relative overflow-hidden">
      {/* Detalhes de luz de fundo */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header do Card */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Bot className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400 flex items-center">
                <Sparkles className="w-3 h-3 mr-1 text-amber-400" /> RESUMO POR IA
              </span>
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                TL;DR 60 Segundos
              </span>
            </div>
            <h3 className="text-sm font-bold text-white">Destaques Essenciais da Notícia</h3>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 text-xs text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 transition-all"
            title="Copiar Resumo"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copiado!' : 'Copiar'}</span>
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Conteúdo Expandível */}
      {isExpanded && (
        <div className="space-y-3 animate-fade-in">
          {points.map((pt, idx) => (
            <div key={idx} className="flex items-start space-x-3 bg-white/5 rounded-2xl p-3.5 border border-white/5">
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-cyan-300 block">{pt.topic}</span>
                <p className="text-xs text-slate-300 leading-relaxed">{pt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
