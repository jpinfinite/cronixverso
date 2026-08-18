import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Flame, 
  Bot, 
  Gamepad2, 
  Cpu, 
  Layers, 
  Search, 
  ArrowUpRight,
  Sun,
  Moon,
  Bookmark,
  Menu,
  X,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { GoogleAuthButton } from './GoogleAuthButton';



interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSelectCategory?: (category: 'todos' | 'ia' | 'games' | 'ciencia' | 'hardware' | 'salvos') => void;
  savedCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  onSelectCategory,
  savedCount = 0
}) => {
  const navigate = useNavigate();

  // Dark/Light Theme State with Persistence
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('cronix_theme') !== 'light';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('cronix_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('cronix_theme', 'light');
    }
  }, [isDarkMode]);

  // Mobile Menu Drawer State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleCategoryClick = (cat: 'todos' | 'ia' | 'games' | 'ciencia' | 'hardware' | 'salvos') => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate('/');
  };

  return (
    <>
      {/* Ticker Bar Superior */}
      <div className="bg-[#0b0f19] border-b border-white/10 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-400">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-cyan-400 font-semibold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 mr-1 animate-pulse text-amber-400" /> TENDÊNCIAS HOJE:
            </span>
            <button 
              onClick={() => { setSearchTerm('OpenAI o3'); navigate('/'); }}
              className="hover:text-cyan-400 transition-colors"
            >
              #1 OpenAI o3
            </button>
            <button 
              onClick={() => { setSearchTerm('RTX 5090'); navigate('/'); }}
              className="hover:text-cyan-400 transition-colors"
            >
              #2 RTX 5090
            </button>
            <button 
              onClick={() => { setSearchTerm('Claude 3.7'); navigate('/'); }}
              className="hover:text-cyan-400 transition-colors"
            >
              #3 Claude 3.7
            </button>
            <button 
              onClick={() => { setSearchTerm('2nm'); navigate('/'); }}
              className="hover:text-cyan-400 transition-colors"
            >
              #4 Processadores 2nm
            </button>
          </div>
          <div className="flex items-center space-x-4 text-slate-400">
            <span>Edição de Hoje | Atualização em Tempo Real</span>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <header className="sticky top-0 z-40 bg-[#07090e]/95 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo Cronixverso oficial */}
          <Link to="/" className="flex items-center group shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="/logo-principal.svg" 
              alt="CRONIXVERSO" 
              className="h-9 sm:h-10 w-auto group-hover:opacity-90 transition-all drop-shadow-[0_0_12px_rgba(6,182,212,0.35)]" 
            />
          </Link>

          {/* Navegação Principal Padronizada e Alinhada (Desktop & Tablet) */}
          <nav className="hidden xl:flex items-center space-x-1 text-xs font-semibold text-slate-300">
            <Link 
              to="/" 
              className="px-3 py-2 rounded-full hover:bg-white/5 hover:text-cyan-400 transition-all flex items-center gap-1.5"
            >
              <Flame className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Destaques</span>
            </Link>

            <button 
              onClick={() => handleCategoryClick('ia')}
              className="px-3 py-2 rounded-full hover:bg-white/5 hover:text-cyan-400 transition-all flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Notícias & IA</span>
            </button>

            <button 
              onClick={() => handleCategoryClick('games')}
              className="px-3 py-2 rounded-full hover:bg-white/5 hover:text-cyan-400 transition-all flex items-center gap-1.5"
            >
              <Gamepad2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Games</span>
            </button>

            <button 
              onClick={() => handleCategoryClick('hardware')}
              className="px-3 py-2 rounded-full hover:bg-white/5 hover:text-cyan-400 transition-all flex items-center gap-1.5"
            >
              <Cpu className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Hardware</span>
            </button>

            <button 
              onClick={() => handleCategoryClick('ciencia')}
              className="px-3 py-2 rounded-full hover:bg-white/5 hover:text-cyan-400 transition-all flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Ciência</span>
            </button>

            <Link 
              to="/ferramentas-ia" 
              className="px-3 py-2 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all flex items-center gap-1.5 font-mono font-bold"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>Ferramentas IA</span>
            </Link>

            <a 
              href="/#hardware-games"
              className="px-3 py-2 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 transition-all flex items-center gap-1.5 font-bold"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Ofertas Gamer</span>
            </a>

            <a 
              href="#videos"
              className="px-3 py-2 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-all flex items-center gap-1.5 font-bold"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
              <span>Cronixverso TV</span>
            </a>
          </nav>

          {/* Ações & Busca & Tema & Salvos & Google Auth */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            
            {/* Botão Meus Salvos */}
            <button 
              onClick={() => handleCategoryClick('salvos')}
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 transition-colors"
              title="Ver Artigos Salvos"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyan-500 text-black font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Alternador de Tema Dark / Light */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 border border-white/10 transition-colors"
              title={isDarkMode ? "Mudar para Tema Claro" : "Mudar para Tema Escuro"}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>

            {/* Campo de Busca (Desktop & Tablet) */}
            <form onSubmit={handleSearchSubmit} className="relative hidden md:block w-36 lg:w-44 xl:w-52">
              <input 
                type="text" 
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0f1420] border border-white/10 rounded-full py-2 pl-9 pr-8 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 transition-all"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              {searchTerm && (
                <button 
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </form>

            <GoogleAuthButton variant="header" />

            <a 
              href="#newsletter"
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-extrabold text-xs px-3.5 py-2.5 rounded-full hidden sm:flex items-center space-x-1.5 transition-all shadow-md shadow-cyan-500/20 shrink-0"
            >
              <span>Newsletter</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Botão de Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 xl:hidden transition-colors"
              aria-label="Abrir Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Menu Suspenso Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#07090e]/98 border-b border-white/10 p-4 space-y-4 animate-fade-in backdrop-blur-2xl">
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <input 
                type="text" 
                placeholder="Buscar notícias, IA..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0f1420] border border-white/10 rounded-full py-2.5 pl-10 pr-8 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </form>

            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <button 
                onClick={() => handleCategoryClick('todos')}
                className="p-2.5 rounded-xl bg-white/5 text-slate-200 hover:bg-white/10 flex items-center space-x-2"
              >
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Destaques</span>
              </button>
              <button 
                onClick={() => handleCategoryClick('ia')}
                className="p-2.5 rounded-xl bg-white/5 text-slate-200 hover:bg-white/10 flex items-center space-x-2"
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Notícias & IA</span>
              </button>
              <button 
                onClick={() => handleCategoryClick('games')}
                className="p-2.5 rounded-xl bg-white/5 text-slate-200 hover:bg-white/10 flex items-center space-x-2"
              >
                <Gamepad2 className="w-4 h-4 text-purple-400" />
                <span>Games</span>
              </button>
              <button 
                onClick={() => handleCategoryClick('hardware')}
                className="p-2.5 rounded-xl bg-white/5 text-slate-200 hover:bg-white/10 flex items-center space-x-2"
              >
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span>Hardware</span>
              </button>
              <button 
                onClick={() => handleCategoryClick('ciencia')}
                className="p-2.5 rounded-xl bg-white/5 text-slate-200 hover:bg-white/10 flex items-center space-x-2"
              >
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Ciência</span>
              </button>
              <a 
                href="#videos"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-red-500/10 text-red-300 hover:bg-red-500/20 flex items-center space-x-2 border border-red-500/20"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>Cronixverso TV</span>
              </a>
            </div>
          </div>
        )}
      </header>


    </>
  );
};
