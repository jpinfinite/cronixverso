import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  ChevronRight, 
  ArrowLeft,
  BookOpen,
  Tag,
  Bookmark,
  List
} from 'lucide-react';
import { ALL_ARTICLES } from '../data/articles';
import { AdSensePlaceholder } from '../components/AdSensePlaceholder';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { TransmissionSchema, BreadcrumbSchema, FoundationSchema } from '../components/SchemaMarkup';
import { ArticleAudioPlayer } from '../components/ArticleAudioPlayer';
import { ArticleAISummary } from '../components/ArticleAISummary';
import { ArticleComments } from '../components/ArticleComments';


interface ArticlePageProps {
  savedArticleIds?: string[];
  onToggleSaveArticle?: (id: string) => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  savedArticleIds = [],
  onToggleSaveArticle
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [scrollProgress, setScrollProgress] = useState(0);

  const article = ALL_ARTICLES.find(a => a.id === id);
  const isSaved = article ? savedArticleIds.includes(article.id) : false;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (article) {
      document.title = `${article.title} | CRONIXVERSO`;
    } else {
      document.title = 'Transmissão Não Encontrada | CRONIXVERSO';
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article, id]);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <BookOpen className="w-16 h-16 text-slate-500 mx-auto mb-4" />
        <h1 className="text-3xl font-extrabold text-white mb-2">Transmissão Não Encontrada</h1>
        <p className="text-slate-400 text-sm mb-6">
          A transmissão solicitada não existe ou foi movida para outra categoria.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold px-6 py-3 rounded-full text-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para a Página Inicial</span>
        </Link>
      </div>
    );
  }

  // Extrair Seções para o Índice (Table of Contents) — usando "índice de leitura"
  const tocHeadings = article.content 
    ? article.content.split('\n').filter(line => line.startsWith('### '))
    : [];

  // Encontrar transmissões relacionadas — registros conexos
  const relatedArticles = ALL_ARTICLES.filter((item) => {
    if (item.id === article.id) return false;
    if (article.relatedIds && article.relatedIds.includes(item.id)) return true;
    return item.category === article.category;
  }).slice(0, 3);

  // Dividir o conteúdo em 2 metades para o AdSense
  const blocks = article.content ? article.content.split(/\n\n+/) : [article.excerpt];
  const halfIndex = Math.ceil(blocks.length / 2);
  const firstHalfText = blocks.slice(0, halfIndex).join('\n\n');
  const secondHalfText = blocks.slice(halfIndex).join('\n\n');

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link do registro copiado para a área de transferência!');
    }
  };

  return (
    <>
      {/* Foundation Schema for site-wide organization */}
      <FoundationSchema />
      
      {/* Transmission Article Schema using CRONIX terminology */}
      <TransmissionSchema
        headline={article.title}
        description={article.excerpt}
        datePublished={article.date}
        author={{ name: 'Fundação CRONIX', role: 'Transmissor da Fundação' }}
        image={article.image}
        url={window.location.href}
        transmissionCategory={article.category}
      />

      {/* Breadcrumb Schema for navigation context */}
      <BreadcrumbSchema items={[
        { name: 'Início', url: 'https://cronixverso.com.br/' },
        { name: article.category, url: 'https://cronixverso.com.br/' },
        { name: article.title, url: window.location.href },
      ]} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      
      {/* Barra de Progresso de Leitura Fixa no Topo */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#0b0f19] z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Breadcrumbs de Navegação */}
      <div className="flex items-center space-x-2 text-xs text-slate-400 mb-6 font-mono">
        <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-cyan-400 uppercase font-semibold">{article.category}</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
        <span className="text-slate-500 truncate max-w-[200px] hidden sm:inline">{article.title}</span>
      </div>

      {/* Botão Voltar & Ações */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors bg-white/5 border border-white/10 px-3.5 py-2 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para o Feed</span>
        </button>

        <button 
          onClick={() => onToggleSaveArticle && onToggleSaveArticle(article.id)}
          className={`inline-flex items-center space-x-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
            isSaved 
              ? 'bg-cyan-500 text-black border-cyan-400 shadow-md shadow-cyan-500/20' 
              : 'bg-white/5 text-slate-300 hover:text-cyan-300 border-white/10'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" />
          <span>{isSaved ? 'Salvo em Meus Registros' : 'Salvar para Ler Mais Tarde'}</span>
        </button>
      </div>

      {/* Header do Registro — using "registro" terminology */}
      <header className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
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

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
          {article.title}
        </h1>

        <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed italic border-l-4 border-cyan-500 pl-4 py-2 bg-cyan-500/5 rounded-r-xl">
          {article.excerpt}
        </p>

        {/* Botão de Compartilhamento */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
          <span className="text-slate-400">Transmissão original da <strong>Fundação CRONIX</strong></span>
          <button 
            onClick={handleShare}
            className="flex items-center space-x-1.5 bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 px-4 py-2 rounded-full transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Compartilhar Registro</span>
          </button>
        </div>
      </header>

      {/* AdSense Placement 1: Topo do Registro */}
      <AdSensePlaceholder slotId="ads-top-article" format="horizontal" />

      {/* Imagem de Capa */}
      <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-8 max-h-[480px] bg-slate-950">
        <img 
          src={article.image} 
          alt={article.title}
          onError={(e) => { e.currentTarget.src = '/art_openai_o3.png'; }}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Player de Áudio (Ouvir Transmissão Narrada) */}
      <ArticleAudioPlayer 
        title={article.title} 
        text={`${article.excerpt}. ${article.content}`}
      />

      {/* Resumo Inteligente por IA (TL;DR do Registro) */}
      <ArticleAISummary 
        title={article.title}
        excerpt={article.excerpt}
        content={article.content}
      />

      {/* Table of Contents (Índice de Seções do Registro) */}
      {tocHeadings.length > 0 && (
        <div className="bg-[#0f1420] border border-cyan-500/30 rounded-2xl p-5 mb-10 space-y-3">
          <h3 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/10 pb-2">
            <List className="w-4 h-4 text-cyan-400" /> Índice de Leitura
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {tocHeadings.map((h, idx) => {
              const cleanText = h.replace(/^###\s+/, '');
              return (
                <li key={idx} className="flex items-center text-slate-300 hover:text-cyan-300 transition-colors">
                  <span className="text-cyan-400 mr-2 font-bold">•</span>
                  <span className="truncate">{cleanText}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Primeira Metade do Registro */}
      <MarkdownRenderer content={firstHalfText} />

      {/* AdSense Placement 2: In-Article Ad */}
      <AdSensePlaceholder slotId="ads-in-article" format="auto" />

      {/* Segunda Metade do Registro */}
      <MarkdownRenderer content={secondHalfText} />

      {/* AdSense Placement 3: Rodapé do Registro */}
      <AdSensePlaceholder slotId="ads-bottom-article" format="horizontal" />

      {/* Transmissões Relacionadas (registros conexos) */}
      {relatedArticles.length > 0 && (
        <section className="pt-10 border-t border-white/10 mt-12 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-2xl text-white flex items-center gap-2">
              <Tag className="w-5 h-5 text-cyan-400" /> Transmissões Relacionadas
            </h3>
            <Link to="/" className="text-xs text-cyan-400 hover:underline flex items-center">
              Ver todas <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                to={`/artigo/${rel.id}`}
                className="group cursor-pointer rounded-2xl bg-[#0f1420] p-4 border border-white/10 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-32 w-full rounded-xl overflow-hidden mb-3 bg-slate-950">
                    <img 
                      src={rel.image} 
                      alt={rel.title}
                      onError={(e) => { e.currentTarget.src = '/art_openai_o3.png'; }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mt-1 mb-2">
                    {rel.title}
                  </h4>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/5">
                  <span>{rel.readTime}</span>
                  <span className="text-cyan-400 flex items-center font-semibold group-hover:translate-x-1 transition-transform">
                    Ler <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Módulo de Comentários & Reações da Comunidade */}
      <ArticleComments articleId={article.id} />

      </article>
    </>
  );
};