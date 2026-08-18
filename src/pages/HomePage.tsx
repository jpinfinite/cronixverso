import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  TrendingUp, 
  Clock, 
  ChevronRight, 
  BookOpen, 
  Sparkles, 
  Send, 
  CheckCircle2,
  Cpu,
  Bot,
  Star,
  Zap,
  Bookmark,
  Flame
} from 'lucide-react';
import { ALL_ARTICLES } from '../data/articles';
import { TechComparator } from '../components/TechComparator';
import { VideoSection } from '../components/VideoSection';
import { ChronosAIEngine } from '../components/ChronosAIEngine';
import { ChronosMotionPortal } from '../components/ChronosMotionPortal';
import { TechAffiliateShowcase } from '../components/TechAffiliateShowcase';
import { GamerBottleneckCalculator } from '../components/GamerBottleneckCalculator';
import { subscribeNewsletter } from '../services/newsletterService';
import { sendGAEvent } from '../utils/analytics';


const AI_TOOLS_DIRECTORY = [
  {
    name: 'Cursor IDE',
    desc: 'Editor de código revolucionário construído sobre o VS Code com IA nativa profunda.',
    category: 'Desenvolvimento',
    rating: '4.9',
    badge: 'Popular',
    icon: Cpu
  },
  {
    name: 'Claude 3.7 Sonnet',
    desc: 'Modelo de linguagem de ponta com raciocínio híbrido e janela de contexto gigantesca.',
    category: 'IA Gerativa',
    rating: '4.9',
    badge: 'Top Pick',
    icon: Bot
  },
  {
    name: 'Flux 1.1 Pro',
    desc: 'O estado da arte em geração de imagens ultra-realistas via comandos de texto.',
    category: 'Design & Imagem',
    rating: '4.8',
    badge: 'Novo',
    icon: Sparkles
  },
  {
    name: 'Windsurf AI',
    desc: 'Agente de codificação autônomo com inteligência de fluxo contínuo de trabalho.',
    category: 'Desenvolvimento',
    rating: '4.7',
    badge: 'Destaque',
    icon: Zap
  }
];

interface HomePageProps {
  activeTab: 'todos' | 'ia' | 'games' | 'ciencia' | 'hardware' | 'salvos';
  setActiveTab: (tab: 'todos' | 'ia' | 'games' | 'ciencia' | 'hardware' | 'salvos') => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  savedArticleIds?: string[];
  onToggleSaveArticle?: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  activeTab,
  setActiveTab,
  searchTerm,
  setSearchTerm,
  savedArticleIds = [],
  onToggleSaveArticle
}) => {
  const navigate = useNavigate();

  const [homeNewsletterEmail, setHomeNewsletterEmail] = useState('');
  const [homeNewsletterSubmitted, setHomeNewsletterSubmitted] = useState(false);
  const [homeNewsletterLoading, setHomeNewsletterLoading] = useState(false);

  const handleHomeNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (homeNewsletterEmail && !homeNewsletterLoading) {
      setHomeNewsletterLoading(true);
      sendGAEvent('subscribe_newsletter', 'conversion_home', homeNewsletterEmail);
      await subscribeNewsletter(homeNewsletterEmail);
      setHomeNewsletterLoading(false);
      setHomeNewsletterSubmitted(true);
      setHomeNewsletterEmail('');
    }
  };

  // Função utilitária para normalizar categorias
  const normalizeCat = (cat: string) => {
    const c = cat.toLowerCase();
    if (c.includes('ia') || c.includes('inteligência')) return 'ia';
    if (c.includes('game') || c.includes('dev')) return 'games';
    if (c.includes('hardware') || c.includes('processador')) return 'hardware';
    if (c.includes('ciência') || c.includes('ciencia') || c.includes('espaço')) return 'ciencia';
    return 'outros';
  };

  // Artigo Principal do Hero
  const heroMainArticle = ALL_ARTICLES.find(a => a.id === 'art-24') || ALL_ARTICLES[0];
  
  // Artigos Secundários do Hero
  const heroSecondaryArticles = [
    ALL_ARTICLES.find(a => a.id === 'art-2') || ALL_ARTICLES[1],
    ALL_ARTICLES.find(a => a.id === 'art-3') || ALL_ARTICLES[2]
  ];

  // Filtragem Dinâmica
  const filteredArticles = ALL_ARTICLES.filter((art) => {
    if (activeTab === 'salvos') {
      return savedArticleIds.includes(art.id);
    }
    const matchesTab = activeTab === 'todos' || normalizeCat(art.category) === activeTab;
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch = !term || 
      art.title.toLowerCase().includes(term) ||
      art.excerpt.toLowerCase().includes(term) ||
      art.category.toLowerCase().includes(term) ||
      (art.content && art.content.toLowerCase().includes(term));
    return matchesTab && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section id="destaques" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Matéria Capa Principal */}
          <Link 
            to={`/artigo/${heroMainArticle.id}`}
            className="lg:col-span-8 group cursor-pointer relative rounded-3xl overflow-hidden glass-card glass-card-hover border border-white/10"
          >
            <div className="relative h-[420px] sm:h-[480px] w-full">
              <img 
                src={heroMainArticle.image} 
                alt={heroMainArticle.title} 
                onError={(e) => { e.currentTarget.src = '/art_openai_o3.png'; }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-transparent"></div>
              
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-black tracking-wider px-3 py-1 rounded-full uppercase flex items-center gap-1 shadow-lg shadow-amber-500/10">
                    <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>MANCHETE PRINCIPAL</span>
                  </span>
                  <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-[11px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                    {heroMainArticle.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> {heroMainArticle.date}
                  </span>
                </div>

                <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-cyan-300 transition-colors leading-tight mb-3">
                  {heroMainArticle.title}
                </h1>

                <p className="text-slate-300 text-sm sm:text-base line-clamp-2 mb-4 font-normal">
                  {heroMainArticle.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400">
                  <span>Por <strong className="text-slate-200">{heroMainArticle.author}</strong></span>
                  <span className="flex items-center text-cyan-400 group-hover:translate-x-1 transition-transform font-bold">
                    Ler matéria completa <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Destaques Secundários */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {heroSecondaryArticles.map((item) => (
              <Link 
                key={item.id} 
                to={`/artigo/${item.id}`}
                className="group cursor-pointer rounded-2xl overflow-hidden glass-card glass-card-hover border border-white/10 flex flex-col justify-between h-[228px] relative p-5"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    onError={(e) => { e.currentTarget.src = '/art_openai_o3.png'; }}
                    className="w-full h-full object-cover opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1420] via-[#0f1420]/80 to-transparent"></div>
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mt-3 line-clamp-3 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/10">
                  <span>{item.date}</span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center font-semibold">
                    Ler <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* CHRONOS AI STUDIO - QUANTUM & AI INTELLIGENCE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChronosAIEngine />
      </div>

      {/* Scrollytelling Kinetic Motion Portal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChronosMotionPortal />
      </div>

      {/* Feed de Notícias & Filtros por Categoria */}
      <section id="noticias" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>
                {activeTab === 'salvos' 
                  ? 'Seus Artigos Salvos para Ler Mais Tarde' 
                  : searchTerm ? `Resultados da Pesquisa ("${searchTerm}")` : 'Conteúdo em Tempo Real'}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {activeTab === 'salvos' ? 'Meus' : searchTerm ? 'Artigos Encontrados' : 'Últimas'} <span className="gradient-text">{activeTab === 'salvos' ? 'Salvos' : searchTerm ? `(${filteredArticles.length})` : 'Publicações'}</span>
            </h2>
          </div>

          {/* Abas de Categorias + Salvos */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'todos', label: 'Tudo' },
              { id: 'ia', label: 'Inteligência Artificial' },
              { id: 'games', label: 'Games & Dev' },
              { id: 'hardware', label: 'Hardware' },
              { id: 'ciencia', label: 'Ciência' },
              { id: 'salvos', label: `⭐ Salvos (${savedArticleIds.length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25'
                    : 'bg-[#0f1420] text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mensagem se nenhum resultado for encontrado */}
        {filteredArticles.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-white/10 rounded-2xl bg-[#0f1420]/50">
            <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">
              {activeTab === 'salvos' ? 'Você ainda não salvou nenhum artigo' : 'Nenhum artigo encontrado'}
            </h3>
            <p className="text-slate-400 text-xs mb-4">
              {activeTab === 'salvos' ? 'Clique no ícone de marcador em qualquer matéria para ler mais tarde.' : 'Tente buscar por outros termos ou selecionar outra categoria.'}
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setActiveTab('todos'); }}
              className="px-4 py-2 rounded-full bg-cyan-500 text-black font-extrabold text-xs"
            >
              Ver Todos os Artigos
            </button>
          </div>
        ) : (
          /* Grid de Artigos Filtrados */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArticles.map((article) => {
              const isSaved = savedArticleIds.includes(article.id);
              
              // Mapeamento de estilos dinâmicos WCAG compliant por categoria
              const catLower = article.category.toLowerCase();
              let borderAccent = 'hover:border-cyan-500/50';
              let tagStyle = 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30';
              
              if (catLower.includes('hardware') || catLower.includes('processador')) {
                borderAccent = 'hover:border-indigo-500/50';
                tagStyle = 'bg-indigo-950/80 text-indigo-300 border-indigo-500/30';
              } else if (catLower.includes('game') || catLower.includes('dev')) {
                borderAccent = 'hover:border-purple-500/50';
                tagStyle = 'bg-purple-950/80 text-purple-300 border-purple-500/30';
              } else if (catLower.includes('ciência') || catLower.includes('ciencia')) {
                borderAccent = 'hover:border-emerald-500/50';
                tagStyle = 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30';
              }

              return (
                <div 
                  key={article.id} 
                  className={`group cursor-pointer rounded-2xl glass-card glass-card-hover overflow-hidden border border-white/10 ${borderAccent} flex flex-col justify-between relative transition-all duration-300`}
                >
                  {/* Botão de Salvar Rápido */}
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (onToggleSaveArticle) onToggleSaveArticle(article.id);
                    }}
                    className={`absolute top-3 right-3 z-20 p-2 rounded-full backdrop-blur-md border transition-all ${
                      isSaved 
                        ? 'bg-cyan-500 text-black border-cyan-400 shadow-md shadow-cyan-500/30' 
                        : 'bg-[#07090e]/70 text-slate-300 hover:text-cyan-400 border-white/10'
                    }`}
                    title={isSaved ? 'Remover dos Salvos' : 'Salvar Artigo'}
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-current" />
                  </button>

                  <Link to={`/artigo/${article.id}`}>
                    <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        onError={(e) => { e.currentTarget.src = '/art_openai_o3.png'; }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute top-3 left-3 backdrop-blur-md border ${tagStyle} text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm`}>
                        {article.category}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug mb-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>

                  <div className="px-5 pb-5 pt-0 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 mt-auto">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-slate-400" /> {article.date}
                    </span>
                    <Link to={`/artigo/${article.id}`} className="text-cyan-400 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                      {article.readTime} <ChevronRight className="w-3 h-3 ml-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Vitrine de Hardware, Consoles & Games (Shopee & Mercado Livre) */}
      <TechAffiliateShowcase />

      {/* Widget Comparador de Hardware & IA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechComparator />
      </section>

      {/* Seção Cronix TV: Vídeos & Dicas Tech Brasileiras */}
      <section id="videos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <VideoSection />
      </section>

      {/* Calculadora de Gargalo de PC Gamer (Bottleneck) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GamerBottleneckCalculator />
      </div>

      {/* Vitrine Gamer & Hardware Hub (Shopee + Mercado Livre) */}
      <TechAffiliateShowcase />



      {/* Hub de Ferramentas de IA */}
      <section id="ferramentas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-gradient-to-b from-[#0f1420] to-[#07090e] border border-white/10 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-2xl mb-10 relative z-10">
            <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              ✨ ECOSSISTEMA CRONIXVERSO
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-3">
              Hub de Ferramentas de <span className="gradient-text-cyan">Inteligência Artificial</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Explore os melhores modelos, agentes e editores curados e testados por nossa equipe de especialistas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {AI_TOOLS_DIRECTORY.map((tool, idx) => {
              const IconComp = tool.icon;
              return (
                <div 
                  key={idx} 
                  onClick={() => { setSearchTerm(tool.name); navigate('/#noticias'); }}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="bg-white/5 border border-white/10 text-cyan-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {tool.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-1">{tool.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{tool.desc}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-3 border-t border-white/5">
                    <span className="text-slate-400">{tool.category}</span>
                    <span className="flex items-center font-semibold text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" /> {tool.rating}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Newsletter */}
      <section id="newsletter" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0f1420] to-indigo-950/40 border border-cyan-500/20 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-4 animate-bounce" />
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Receba as novidades do <span className="gradient-text">Futuro em Primeira Mão</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-8">
              Inscreva-se gratuitamente na nossa newsletter semanal com o resumo das principais inovações em IA, games e ciência.
            </p>

            {homeNewsletterSubmitted ? (
              <div className="bg-cyan-500/10 border border-cyan-500/40 p-4 rounded-2xl text-cyan-400 font-bold text-sm inline-flex items-center space-x-2 max-w-md mx-auto">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Inscrição confirmada! Você receberá as novidades no seu e-mail.</span>
              </div>
            ) : (
              <form onSubmit={handleHomeNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail..."
                  required
                  value={homeNewsletterEmail}
                  onChange={(e) => setHomeNewsletterEmail(e.target.value)}
                  className="flex-1 bg-[#07090e] border border-white/15 rounded-full px-5 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                />
                <button 
                  type="submit"
                  disabled={homeNewsletterLoading}
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50"
                >
                  <span>{homeNewsletterLoading ? 'Enviando...' : 'Inscrever-se'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="flex items-center justify-center space-x-4 text-xs text-slate-400 mt-4">
              <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mr-1" /> Sem spam</span>
              <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mr-1" /> Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
