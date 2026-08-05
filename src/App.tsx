import { useState } from 'react';
import { 
  Cpu, 
  Bot, 
  Gamepad2, 
  Sparkles, 
  Search, 
  TrendingUp, 
  ArrowUpRight, 
  Flame, 
  Clock, 
  Layers, 
  Star, 
  ChevronRight,
  Send,
  Zap,
  CheckCircle2
} from 'lucide-react';

// Mock Data para Notícias e Artigos de Capa estilo Tecnoblog / TecMundo / Canaltech
const FEATURED_NEWS = {
  id: 'main-1',
  tag: 'INTELIGÊNCIA ARTIFICIAL',
  title: 'OpenAI o3: o modelo que pensa como um cientista e resolve problemas nunca antes imaginados por uma IA',
  excerpt: 'O novo modelo o3 da OpenAI alcança desempenho humano em benchmarks olímpicos de matemática e código, inaugurando a era dos modelos de raciocínio profundo e autônomo. Uma nova era começa agora.',
  author: 'Equipe Cronixverso',
  date: 'Há 15 minutos',
  readTime: '5 min de leitura',
  image: '/art_openai_o3.png',
  hot: true
};

const SECONDARY_FEATURED = [
  {
    id: 'sec-1',
    category: 'HARDWARE & PROCESSADORES',
    title: 'NVIDIA RTX 5090 é oficial: monstro com 32GB GDDR7 e desempenho 3x superior ao RTX 4090',
    image: '/art_rtx5090.png',
    date: 'Há 1 hora'
  },
  {
    id: 'sec-2',
    category: 'CIÊNCIA & ESPAÇO',
    title: 'James Webb detecta moléculas orgânicas em exoplaneta a 120 anos-luz — a maior pista de vida extraterrestre já encontrada',
    image: '/art_james_webb.png',
    date: 'Há 2 horas'
  }
];

const LATEST_ARTICLES = [
  {
    id: 'art-1',
    category: 'IA',
    title: 'Cursor vs Windsurf: o confronto definitivo dos editores de código com IA em 2026',
    excerpt: 'Testamos ambos por 30 dias em projetos reais. O resultado vai surpreender quem acha que um é simplesmente melhor que o outro.',
    author: 'Lucas Mendes',
    date: 'Hoje às 14:20',
    readTime: '7 min',
    image: '/art_cursor_windsurf.png',
    tagColor: 'text-cyan-400'
  },
  {
    id: 'art-2',
    category: 'Hardware',
    title: 'RTX 5090 em benchmarks: os números reais que a NVIDIA não quer que você saiba',
    excerpt: 'Vazamento de benchmarks revela salto generacional absurdo no ray tracing e na inferência de IA local com 32GB de VRAM.',
    author: 'Gabriel Santos',
    date: 'Hoje às 12:45',
    readTime: '8 min',
    image: '/art_rtx5090.png',
    tagColor: 'text-purple-400'
  },
  {
    id: 'art-3',
    category: 'Ciência',
    title: 'James Webb encontra vapor d\'água e CO₂ em exoplaneta com temperatura habitável',
    excerpt: 'Pela primeira vez, a humanidade detectou assinaturas bioquímicas combinadas em planeta fora do sistema solar.',
    author: 'Dr. Roberto Ramos',
    date: 'Hoje às 10:15',
    readTime: '6 min',
    image: '/art_james_webb.png',
    tagColor: 'text-blue-400'
  },
  {
    id: 'art-4',
    category: 'IA',
    title: 'Apple Intelligence 2.0: IA local sem nuvem que protege totalmente sua privacidade',
    excerpt: 'A Apple reinventa a privacidade com modelos que rodam completamente no chip A19 Bionic sem enviar dados para servidores.',
    author: 'Fernanda Costa',
    date: 'Ontem às 18:30',
    readTime: '5 min',
    image: '/art_apple_intelligence.png',
    tagColor: 'text-cyan-400'
  },
  {
    id: 'art-5',
    category: 'Hardware',
    title: 'AMD Ryzen 9000X3D: o processador que eliminou de vez a diferença para a Intel',
    excerpt: 'Com 3D V-Cache de terceira geração e arquitetura Zen 6, o Ryzen 9 9900X3D lidera todos os benchmarks de gaming.',
    author: 'Ricardo Alves',
    date: 'Ontem às 15:00',
    readTime: '9 min',
    image: '/art_amd_ryzen.png',
    tagColor: 'text-purple-400'
  },
  {
    id: 'art-6',
    category: 'Ciência',
    title: 'SpaceX Starship completa missão orbital e pousa no Oceano Índico com precisão milimétrica',
    excerpt: 'O maior foguete já construído completou sua sétima missão com sucesso total, abrindo caminho definitivo para Marte.',
    author: 'Marina Duarte',
    date: 'Há 2 dias',
    readTime: '7 min',
    image: '/art_starship.png',
    tagColor: 'text-orange-400'
  },
  {
    id: 'art-7',
    category: 'IA',
    title: 'Claude 3.7 Sonnet supera GPT-4o em raciocínio lógico e código — análise completa',
    excerpt: 'O Claude 3.7 lidera 7 dos 9 principais benchmarks de programação, incluindo HumanEval e SWE-Bench.',
    author: 'Pedro Nascimento',
    date: 'Há 2 dias',
    readTime: '6 min',
    image: '/art_claude_37.png',
    tagColor: 'text-cyan-400'
  },
  {
    id: 'art-8',
    category: 'Games',
    title: 'Steam Deck 2 confirmado: OLED 8 polegadas, RDNA 4 e 12 horas de bateria',
    excerpt: 'Valve confirma oficialmente o Steam Deck 2 com especificações que vão redefinir o que significa jogar em qualquer lugar.',
    author: 'Beatriz Lima',
    date: 'Há 3 dias',
    readTime: '5 min',
    image: '/art_steam_deck.png',
    tagColor: 'text-emerald-400'
  },
  {
    id: 'art-9',
    category: 'Hardware',
    title: 'Chips de 2nm: Apple, TSMC e Samsung na corrida que redefine a computação',
    excerpt: 'A miniaturização extrema dos transistores em escala de 2nm está prestes a chegar aos consumidores com implicações revolucionárias.',
    author: 'Gabriel Santos',
    date: 'Há 3 dias',
    readTime: '10 min',
    image: '/art_2nm_chip.png',
    tagColor: 'text-purple-400'
  },
  {
    id: 'art-10',
    category: 'IA',
    title: 'IA da DeepMind detecta câncer de pulmão 3 anos antes dos sintomas com 94,7% de acerto',
    excerpt: 'Pesquisa publicada na Nature revela que o modelo multimodal da Google DeepMind muda para sempre o diagnóstico médico.',
    author: 'Dr. Roberto Ramos',
    date: 'Há 4 dias',
    readTime: '8 min',
    image: '/art_openai_o3.png',
    tagColor: 'text-rose-400'
  }
];

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

export function App() {
  const [activeTab, setActiveTab] = useState<'todos' | 'ia' | 'games' | 'ciencia' | 'hardware'>('todos');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-black">
      
      {/* Ticker Bar Superior (Ticker de Destaques e Tendências estilo Portal de Tech) */}
      <div className="bg-[#0b0f19] border-b border-white/10 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-400">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-cyan-400 font-semibold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 mr-1 animate-pulse text-amber-400" /> TENDÊNCIAS HOJE:
            </span>
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">#1 OpenAI o3</span>
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">#2 RTX 5090</span>
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">#3 Claude 3.7</span>
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">#4 Processadores 2nm</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Quarta-feira, 5 de Agosto de 2026</span>
          </div>
        </div>
      </div>

      {/* Header Principal estilo Tecnoblog / TecMundo */}
      <header className="sticky top-0 z-50 bg-[#07090e]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Cronixverso */}
          <a href="#" className="flex items-center group">
            <img 
              src="/logo-principal.svg" 
              alt="CRONIXVERSO" 
              className="h-9 w-auto group-hover:opacity-90 transition-opacity" 
            />
          </a>

          {/* Navegação Principal */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#destaques" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-400" /> Destaques
            </a>
            <a href="#noticias" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Bot className="w-4 h-4 text-cyan-400" /> Notícias & IA
            </a>
            <a href="#categorias" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Gamepad2 className="w-4 h-4 text-purple-400" /> Games
            </a>
            <a href="#ferramentas" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-indigo-400" /> Hub de IA
            </a>
            <a href="#comparativos" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-400" /> Comparativos
            </a>
          </nav>

          {/* Campo de Busca & Ação */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block w-48 lg:w-64">
              <input 
                type="text" 
                placeholder="Buscar notícias, IA, gadgets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0f1420] border border-white/10 rounded-full py-2 pl-9 pr-4 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <button className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-semibold text-xs px-4 py-2.5 rounded-full flex items-center space-x-1.5 transition-all shadow-md shadow-cyan-500/20">
              <span>Newsletter</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section: Destaque Principal + Grid Bento estilo TecMundo / Tecnoblog */}
      <section id="destaques" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Matéria Capa (Card Grande) */}
          <div className="lg:col-span-8 group cursor-pointer relative rounded-3xl overflow-hidden glass-card glass-card-hover border border-white/10">
            <div className="relative h-[420px] sm:h-[480px] w-full">
              <img 
                src={FEATURED_NEWS.image} 
                alt={FEATURED_NEWS.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-transparent"></div>
              
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col justify-end">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-[11px] font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                    {FEATURED_NEWS.tag}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> {FEATURED_NEWS.date}
                  </span>
                </div>

                <h1 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-cyan-300 transition-colors leading-tight mb-3">
                  {FEATURED_NEWS.title}
                </h1>

                <p className="text-slate-300 text-sm sm:text-base line-clamp-2 mb-4 font-normal">
                  {FEATURED_NEWS.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs text-slate-400">
                  <span>Por <strong className="text-slate-200">{FEATURED_NEWS.author}</strong></span>
                  <span className="flex items-center text-cyan-400 group-hover:translate-x-1 transition-transform">
                    Ler matéria completa <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Destaques Secundários na Lateral */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {SECONDARY_FEATURED.map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer rounded-2xl overflow-hidden glass-card glass-card-hover border border-white/10 flex flex-col justify-between h-[228px] relative p-5"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
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
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center">
                    Ver <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Seção Feed de Notícias & Filtros por Categoria */}
      <section id="noticias" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>Conteúdo em Tempo Real</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Últimas <span className="gradient-text">Publicações</span>
            </h2>
          </div>

          {/* Abas de Categorias */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'todos', label: 'Tudo' },
              { id: 'ia', label: 'Inteligência Artificial' },
              { id: 'games', label: 'Games & Dev' },
              { id: 'hardware', label: 'Hardware' },
              { id: 'ciencia', label: 'Ciência' }
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

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LATEST_ARTICLES.map((article) => (
            <article key={article.id} className="group cursor-pointer rounded-2xl glass-card glass-card-hover overflow-hidden border border-white/10 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#07090e]/80 backdrop-blur-md border border-white/10 text-cyan-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
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
              </div>

              <div className="px-5 pb-5 pt-0 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 mt-auto">
                <span className="flex items-center">
                  <Clock className="w-3 h-3 mr-1 text-slate-400" /> {article.date}
                </span>
                <span className="text-slate-400">{article.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Hub de Ferramentas de IA & Recursos Exclusivos (O Diferencial do Cronixverso) */}
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
                <div key={idx} className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between">
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

      {/* Seção Newsletter Final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0f1420] to-indigo-950/40 border border-cyan-500/20 p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-4 animate-bounce" />
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-3">
              Receba as novidades do <span className="gradient-text">Futuro em Primeira Mão</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-8">
              Inscreva-se gratuitamente na nossa newsletter semanal com o resumo das principais inovações em IA, games e ciência.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail..."
                required
                className="flex-1 bg-[#07090e] border border-white/15 rounded-full px-5 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
              />
              <button 
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm px-6 py-3 rounded-full flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/25"
              >
                <span>Inscrever-se</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-center space-x-4 text-xs text-slate-400 mt-4">
              <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mr-1" /> Sem spam</span>
              <span className="flex items-center"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mr-1" /> Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Profissional */}
      <footer className="bg-[#04060a] border-t border-white/10 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#" className="inline-block mb-4">
              <img 
                src="/logo-principal.svg" 
                alt="CRONIXVERSO" 
                className="h-8 w-auto" 
              />
            </a>
            <p className="text-slate-400 leading-relaxed">
              O portal definitivo de inteligência artificial, notícias de tecnologia, universo gamer e ciência do futuro.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Categorias</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Inteligência Artificial</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Hardware & Processadores</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Games & Dev</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Ciência & Espaço</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Hub de Ferramentas IA</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Análises de Hardware</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tabelas Comparativas</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Linha do Tempo 2026</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Institucional</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Sobre o Cronixverso</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contato & Imprensa</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center text-slate-500">
          <p>© 2026 CRONIXVERSO. Todos os direitos reservados.</p>
          <p className="mt-2 sm:mt-0">Desenvolvido com excelência técnica e design moderno.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
