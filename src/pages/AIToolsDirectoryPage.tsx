import { useState } from 'react';
import { Sparkles, Search, ExternalLink, Bot, CheckCircle2, Bookmark } from 'lucide-react';
import { SoftwareApplicationSchema } from '../components/SchemaMarkup';

interface AITool {
  id: string;
  name: string;
  category: 'produtividade' | 'design' | 'dev' | 'texto' | 'audio';
  description: string;
  pricing: 'Gratuito' | 'Freemium' | 'Pago';
  url: string;
  rating: number;
  popularPrompt?: string;
  badge: string;
}

export function AIToolsDirectoryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const tools: AITool[] = [
    {
      id: 'chatgpt',
      name: 'ChatGPT / GPT-4o',
      category: 'produtividade',
      description: 'Assistente multifuncional da OpenAI para redação, análise de dados, geração de código e pesquisas.',
      pricing: 'Freemium',
      url: 'https://chatgpt.com',
      rating: 4.9,
      badge: 'ESSENCIAL',
      popularPrompt: 'Atue como um Engenheiro de Software Sênior. Revise este código buscando vulnerabilidades de segurança e sugira otimizações de performance em TypeScript.'
    },
    {
      id: 'claude-35',
      name: 'Claude 3.5 Sonnet',
      category: 'dev',
      description: 'Modelo da Anthropic renomado por raciocínio lógico avançado, geração limpa de código e redação natural.',
      pricing: 'Freemium',
      url: 'https://claude.ai',
      rating: 4.9,
      badge: 'TOP PROGRAMAÇÃO',
      popularPrompt: 'Crie uma função assíncrona em React Native com tratamento de erros completo e suporte a cache local.'
    },
    {
      id: 'midjourney',
      name: 'Midjourney v6',
      category: 'design',
      description: 'Gerador de imagens ultra-realistas e artes fotográficas de padrão profissional via Discord.',
      pricing: 'Pago',
      url: 'https://midjourney.com',
      rating: 4.8,
      badge: 'ARTE 8K',
      popularPrompt: '/imagine prompt: Futuristic cyberpunk city highway with neon teal and magenta lights, hyperrealistic 8k, cinematic lighting, wide shot --ar 16:9 --v 6.0'
    },
    {
      id: 'v0-dev',
      name: 'v0.dev by Vercel',
      category: 'dev',
      description: 'Gera componentes de interface UI modernos em React e Tailwind CSS a partir de prompts em linguagem natural.',
      pricing: 'Freemium',
      url: 'https://v0.dev',
      rating: 4.9,
      badge: 'CRIAÇÃO UI',
      popularPrompt: 'Create a dark mode analytics dashboard with crypto price charts, stat cards, and glowing neon accents.'
    },
    {
      id: 'elevenlabs',
      name: 'ElevenLabs Voice AI',
      category: 'audio',
      description: 'Plataforma líder em clonagem de voz e síntese de áudio realista com entonação humana.',
      pricing: 'Freemium',
      url: 'https://elevenlabs.io',
      rating: 4.7,
      badge: 'VOZ IA',
      popularPrompt: 'Gere uma narração em Português do Brasil com tom entusiasta e profissional para apresentação de um produto de tecnologia.'
    },
    {
      id: 'perplexity',
      name: 'Perplexity AI',
      category: 'produtividade',
      description: 'Mecanismo de busca guiado por IA que sintetiza respostas com citações e fontes em tempo real.',
      pricing: 'Freemium',
      url: 'https://perplexity.ai',
      rating: 4.8,
      badge: 'PESQUISA GEO',
      popularPrompt: 'Quais são as principais tendências de automação industrial com Inteligência Artificial para o ano de 2026? Resuma com fontes.'
    }
  ];

  const handleCopyPrompt = (id: string, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2500);
  };

  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'todos' || tool.category === activeCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 py-16 font-sans">
      {tools.map(t => (
        <SoftwareApplicationSchema
          key={t.id}
          name={t.name}
          description={t.description}
          applicationCategory={t.category === 'dev' ? 'DeveloperApplication' : t.category === 'design' ? 'DesignApplication' : 'BusinessApplication'}
          offers={{ price: t.pricing === 'Gratuito' ? '0' : '20', priceCurrency: 'USD' }}
          aggregateRating={{ ratingValue: t.rating, ratingCount: 140 }}
        />
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>CATÁLOGO ATUALIZADO 2026</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-mono">
            Diretório de <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Ferramentas de IA</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Curadoria com as melhores Inteligências Artificiais para Devs, Designers e Produtividade, incluindo prompts prontos para copiar.
          </p>
        </div>

        {/* Busca e Filtros */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-xl">
          {/* Busca */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar IA por nome ou utilidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {/* Categorias */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {[
              { id: 'todos', label: 'Todas' },
              { id: 'produtividade', label: 'Produtividade' },
              { id: 'dev', label: 'Código & Dev' },
              { id: 'design', label: 'Design & Imagem' },
              { id: 'audio', label: 'Voz & Áudio' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Ferramentas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map(tool => (
            <div
              key={tool.id}
              className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-cyan-500/40 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl group"
            >
              <div className="space-y-6">
                {/* Header Card */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    {tool.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-lg">
                    {tool.pricing}
                  </span>
                </div>

                {/* Nome & Descrição */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors font-mono">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                {/* Prompt Testado Pronto para Copiar */}
                {tool.popularPrompt && (
                  <div className="bg-black/50 border border-white/10 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                      <span className="flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5" />
                        <span>Prompt Recomendado</span>
                      </span>
                      <button
                        onClick={() => handleCopyPrompt(tool.id, tool.popularPrompt!)}
                        className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        {copiedPromptId === tool.id ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Bookmark className="w-3.5 h-3.5" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs font-mono text-slate-400 line-clamp-3 leading-relaxed italic">
                      "{tool.popularPrompt}"
                    </p>
                  </div>
                )}
              </div>

              {/* Botão de Acesso Externa */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-cyan-500 hover:text-black border border-white/10 hover:border-cyan-400 flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                >
                  <span>Testar Ferramenta</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
