import React, { useState, useMemo } from 'react';
import { 
  Gamepad2, 
  Cpu, 
  HardDrive, 
  Headphones, 
  Star, 
  ShoppingBag, 
  Zap, 
  ExternalLink, 
  Search, 
  ShieldCheck 
} from 'lucide-react';
import { FEATURED_TECH_PRODUCTS, getShopeeTechUrl, getMercadoLivreTechUrl } from '../utils/affiliates';

export const TechAffiliateShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Todos os Itens', icon: Cpu },
    { id: 'consoles', label: 'Consoles & Games', icon: Gamepad2 },
    { id: 'hardware', label: 'Hardware & GPUs', icon: Cpu },
    { id: 'armazenamento', label: 'Armazenamento & SSD', icon: HardDrive },
    { id: 'perifericos', label: 'Periféricos & Setup', icon: Headphones },
  ];

  const filteredProducts = useMemo(() => {
    return FEATURED_TECH_PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id="hardware-games" className="py-16 bg-[#090d16] border-t border-b border-cyan-500/20 relative overflow-hidden">
      {/* Glow ambient lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Gamepad2 className="w-4 h-4 text-cyan-400" />
            <span>Hub de Hardware, Consoles & Periféricos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Guia de Compras <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Tech & Gaming</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Equipamentos de alta performance recomendados pela equipe editorial do Cronixverso com as melhores ofertas e cupons na Shopee e Mercado Livre.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0d1527]/80 backdrop-blur-md p-4 rounded-2xl border border-cyan-500/20 shadow-xl">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/50'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar GPU, console, SSD..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-950/90 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-gradient-to-b from-[#0f172a] to-[#0b1120] rounded-2xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div>
                {/* Image & Badges */}
                <div className="h-48 relative overflow-hidden bg-slate-950">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />
                  
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
                      {product.badge}
                    </div>
                  )}

                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded text-[11px] font-mono text-cyan-300 font-semibold">
                    {product.brand}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-cyan-400/90 tracking-wide uppercase">
                      {product.categoryLabel}
                    </span>

                    <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{product.rating}</span>
                      <span className="text-slate-500 text-[10px]">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Pricing & Dual Marketplace CTAs */}
              <div className="p-5 pt-0 border-t border-slate-800/80 mt-4 space-y-3">
                <div className="flex items-baseline justify-between pt-3">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">Média de Preço</span>
                  <span className="text-base font-extrabold text-white font-mono">
                    {product.priceEstimate}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={getShopeeTechUrl(product.searchKeyword)}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-[11px] transition-all shadow-md active:scale-95 text-center"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Shopee</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>

                  <a
                    href={getMercadoLivreTechUrl(product.searchKeyword)}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#ffe600] hover:bg-[#ffd000] text-slate-950 font-bold text-[11px] transition-all shadow-md active:scale-95 text-center"
                  >
                    <Zap className="w-3.5 h-3.5 text-blue-700" />
                    <span>Mercado Livre</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Universal Banner Footer */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0d1527] via-[#0f172a] to-cyan-950/40 border border-cyan-500/30 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Procurando outro componente, jogo ou acessório gamer?</h4>
              <p className="text-xs text-slate-400">Acesse nossas lojas oficiais na Shopee e no Mercado Livre para encontrar placas de vídeo, gabinetes, memórias e consoles com cupons e frete grátis.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={getShopeeTechUrl()}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs transition-all inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Loja na Shopee</span>
            </a>

            <a
              href={getMercadoLivreTechUrl()}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="px-5 py-2.5 rounded-xl bg-[#ffe600] hover:bg-[#ffd000] text-slate-950 font-bold text-xs transition-all inline-flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-blue-700" />
              <span>Loja Mercado Livre</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
