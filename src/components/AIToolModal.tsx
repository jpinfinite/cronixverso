import React from 'react';
import { X, ExternalLink, Star, Check, Sparkles, BookOpen, type LucideIcon } from 'lucide-react';

export interface AIToolItem {
  id: string;
  name: string;
  desc: string;
  longDesc: string;
  category: string;
  rating: string;
  badge: string;
  officialUrl: string;
  pricing: string;
  features: string[];
  icon: LucideIcon;
}

interface AIToolModalProps {
  tool: AIToolItem | null;
  onClose: () => void;
  onSearchArticles: (toolName: string) => void;
}

export const AIToolModal: React.FC<AIToolModalProps> = ({
  tool,
  onClose,
  onSearchArticles
}) => {
  if (!tool) return null;

  const IconComp = tool.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#0b0f19] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-left space-y-6 max-h-[90vh] overflow-y-auto custom-scrollbar my-auto">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <IconComp className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">{tool.category}</span>
                <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {tool.badge}
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl text-white mt-1">{tool.name}</h2>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Avaliação e Preço */}
        <div className="grid grid-cols-2 gap-4 bg-[#07090e] border border-white/10 p-4 rounded-2xl text-xs">
          <div>
            <span className="text-slate-400 block mb-0.5">Avaliação dos Especialistas:</span>
            <span className="flex items-center font-bold text-amber-400 text-sm">
              <Star className="w-4 h-4 fill-amber-400 mr-1" /> {tool.rating} / 5.0
            </span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">Modelo de Preço:</span>
            <span className="font-bold text-cyan-300 text-sm">{tool.pricing}</span>
          </div>
        </div>

        {/* Descrição Detalhada */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-cyan-400" /> Sobre a Ferramenta
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {tool.longDesc}
          </p>
        </div>

        {/* Recursos Principais */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Recursos & Funcionalidades</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
            {tool.features.map((feat, idx) => (
              <li key={idx} className="flex items-center space-x-2 bg-[#0f1420] p-2.5 rounded-xl border border-white/5">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ações: Visitar Site Oficial e Ver Artigos */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
          <a 
            href={tool.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-extrabold text-xs py-3 px-4 rounded-full flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/20"
          >
            <span>Acessar Site Oficial</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button 
            onClick={() => {
              onSearchArticles(tool.name);
              onClose();
            }}
            className="flex-1 bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 font-bold text-xs py-3 px-4 rounded-full flex items-center justify-center space-x-2 transition-all"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Ver Artigos no Portal</span>
          </button>
        </div>

      </div>
    </div>
  );
};
