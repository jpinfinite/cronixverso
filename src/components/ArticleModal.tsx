import React, { useEffect } from 'react';
import { X, Clock, Calendar, User, Share2, Tag, ChevronRight, BookOpen } from 'lucide-react';
import type { Article } from '../data/types';
import { ALL_ARTICLES } from '../data/articles';
import { MarkdownRenderer } from './MarkdownRenderer';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onSelectArticle
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  // Encontrar artigos relacionados
  const relatedArticles = ALL_ARTICLES.filter((item) => {
    if (item.id === article.id) return false;
    if (article.relatedIds && article.relatedIds.includes(item.id)) return true;
    return item.category === article.category;
  }).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link do artigo copiado para a área de transferência!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      {/* Overlay Backdrop */}
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card Principal */}
      <div className="relative w-full max-w-4xl bg-[#0b0f19] border border-cyan-500/20 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#07090e]/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
            <BookOpen className="w-4 h-4" />
            <span className="uppercase tracking-widest font-semibold">{article.category}</span>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              onClick={handleShare}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors border border-white/10"
              title="Compartilhar Artigo"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 text-slate-300 hover:text-red-400 transition-colors border border-white/10"
              title="Fechar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 custom-scrollbar">
          
          {/* Header Info */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full font-bold uppercase">
                {article.category}
              </span>
              <span className="flex items-center">
                <User className="w-3.5 h-3.5 mr-1 text-cyan-400" /> {article.author}
              </span>
              <span className="flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" /> {article.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" /> {article.readTime}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
              {article.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed italic border-l-4 border-cyan-500 pl-4 py-1 bg-cyan-500/5 rounded-r-lg">
              {article.excerpt}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg max-h-[420px] bg-slate-950">
            <img 
              src={article.image} 
              alt={article.title}
              onError={(e) => {
                e.currentTarget.src = '/art_openai_o3.png';
              }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body via MarkdownRenderer */}
          <MarkdownRenderer content={article.content} />

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="pt-8 border-t border-white/10 mt-10 space-y-4">
              <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                <Tag className="w-5 h-5 text-cyan-400" /> Artigos Relacionados
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => {
                      onSelectArticle(rel);
                      const modalEl = document.querySelector('.custom-scrollbar');
                      if (modalEl) modalEl.scrollTop = 0;
                    }}
                    className="group cursor-pointer rounded-xl bg-[#0f1420] p-4 border border-white/10 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                        {rel.category}
                      </span>
                      <h4 className="font-display font-bold text-xs text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mt-1 mb-2">
                        {rel.title}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/5">
                      <span>{rel.readTime}</span>
                      <span className="text-cyan-400 flex items-center group-hover:translate-x-1 transition-transform">
                        Ler <ChevronRight className="w-3 h-3 ml-0.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#07090e] flex justify-between items-center text-xs text-slate-400">
          <span>Fonte: <strong>CRONIXVERSO</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold transition-all"
          >
            Fechar Artigo
          </button>
        </div>

      </div>
    </div>
  );
};
