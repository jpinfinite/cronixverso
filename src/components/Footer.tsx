import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface FooterProps {
  onSelectCategory?: (category: 'todos' | 'ia' | 'games' | 'ciencia' | 'hardware') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (cat: 'todos' | 'ia' | 'games' | 'ciencia' | 'hardware') => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060a] border-t border-white/10 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <Link to="/" className="inline-block mb-4">
            <img 
              src="/logo-principal.svg" 
              alt="CRONIXVERSO" 
              className="h-8 sm:h-9 w-auto drop-shadow-[0_0_10px_rgba(6,182,212,0.25)]" 
            />
          </Link>

          <p className="text-slate-400 leading-relaxed">
            O portal definitivo de inteligência artificial, notícias de tecnologia, universo gamer e ciência do futuro.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase tracking-wider mb-3">Categorias</h4>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => handleCategoryClick('ia')} 
                className="hover:text-cyan-400 transition-colors text-left"
              >
                Inteligência Artificial
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('hardware')} 
                className="hover:text-cyan-400 transition-colors text-left"
              >
                Hardware & Processadores
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('games')} 
                className="hover:text-cyan-400 transition-colors text-left"
              >
                Games & Dev
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('ciencia')} 
                className="hover:text-cyan-400 transition-colors text-left"
              >
                Ciência & Espaço
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase tracking-wider mb-3">Recursos</h4>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('ferramentas'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }} 
                className="hover:text-cyan-400 transition-colors text-left"
              >
                Hub de Ferramentas IA
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('hardware')} 
                className="hover:text-cyan-400 transition-colors text-left"
              >
                Análises de Hardware
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('todos')} 
                className="hover:text-cyan-400 transition-colors text-left"
              >
                Tabelas Comparativas
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleCategoryClick('ia')} 
                className="hover:text-cyan-400 transition-colors text-left"
              >
                Destaques 2026
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white uppercase tracking-wider mb-3">Institucional</h4>
          <ul className="space-y-2">
            <li><Link to="/sobre" className="hover:text-cyan-400 transition-colors">Sobre o Cronixverso</Link></li>
            <li><Link to="/politica-editorial" className="hover:text-cyan-400 transition-colors">Diretrizes Editoriais & E-E-A-T</Link></li>
            <li><Link to="/contato" className="hover:text-cyan-400 transition-colors">Contato & Imprensa</Link></li>
            <li><Link to="/termos" className="hover:text-cyan-400 transition-colors">Termos de Uso</Link></li>
            <li><Link to="/privacidade" className="hover:text-cyan-400 transition-colors">Política de Privacidade</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center text-slate-500">
        <p>© 2026 CRONIXVERSO. Todos os direitos reservados.</p>
        <p className="mt-2 sm:mt-0">Desenvolvido com excelência técnica e design moderno.</p>
      </div>
    </footer>
  );
};
