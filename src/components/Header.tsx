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
  Bookmark
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

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const handleCategoryClick = (cat: 'todos' | 'ia' | 'games' | 'ciencia' | 'hardware' | 'salvos') => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    navigate('/');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <header className="sticky top-0 z-40 bg-[#07090e]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Cronixverso */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo-principal.svg" 
              alt="CRONIXVERSO" 
              onError={(e) => { e.currentTarget.src = '/logo-icon.svg'; }}
              className="h-9 w-auto group-hover:opacity-90 transition-opacity" 
            />
          </Link>

          {/* Navegação Principal */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link to="/" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-400" /> Destaques
            </Link>
            <button 
              onClick={() => handleCategoryClick('ia')}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4 text-cyan-400" /> Notícias & IA
            </button>
            <button 
              onClick={() => handleCategoryClick('games')}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Gamepad2 className="w-4 h-4 text-purple-400" /> Games
            </button>
            <button 
              onClick={() => handleCategoryClick('hardware')}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Cpu className="w-4 h-4 text-indigo-400" /> Hardware
            </button>
            <button 
              onClick={() => handleCategoryClick('ciencia')}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-emerald-400" /> Ciência
            </button>
            <a 
              href="#videos"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-bold text-cyan-400"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" /> Cronix TV
            </a>
          </nav>


          {/* Ações & Busca & Tema & Salvos */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Botão Meus Salvos */}
            <button 
              onClick={() => handleCategoryClick('salvos')}
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 transition-colors"
              title="Ver Artigos Salvos"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyan-500 text-black font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
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

            {/* Campo de Busca */}
            <form onSubmit={handleSearchSubmit} className="relative hidden sm:block w-40 lg:w-60">
              <input 
                type="text" 
                placeholder="Buscar notícias, IA..."
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
              className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-semibold text-xs px-4 py-2.5 rounded-full hidden sm:flex items-center space-x-1.5 transition-all shadow-md shadow-cyan-500/20"
            >
              <span>Newsletter</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

          </div>
        </div>
      </header>
    </>
  );
};
