import React from 'react';
import { ShoppingBag, Zap, Star, ShieldCheck, Cpu } from 'lucide-react';
import { FEATURED_TECH_PRODUCTS, getAmazonTechUrl, getMercadoLivreTechUrl } from '../utils/affiliates';

interface ArticleTechCardProps {
  category?: string;
  id?: string;
}

export const ArticleTechCard: React.FC<ArticleTechCardProps> = ({ category, id }) => {
  const matchedProducts = FEATURED_TECH_PRODUCTS.filter((product) => {
    const catLower = (category || '').toLowerCase();
    const idLower = (id || '').toLowerCase();

    if (catLower.includes('game') || idLower.includes('game') || idLower.includes('console')) {
      return product.category === 'consoles' || product.category === 'perifericos';
    }
    if (catLower.includes('hardware') || idLower.includes('gpu') || idLower.includes('processador') || idLower.includes('chip')) {
      return product.category === 'hardware' || product.category === 'armazenamento';
    }
    if (catLower.includes('ia') || catLower.includes('inteligência')) {
      return product.id === 'rtx-4060-gpu' || product.id === 'ryzen-7-7800x3d';
    }
    return product.badge === 'Mais Vendido' || product.badge === 'Escolha Gamer';
  }).slice(0, 2);

  if (matchedProducts.length === 0) return null;

  return (
    <div className="my-10 p-6 rounded-2xl bg-gradient-to-br from-[#0c1322] via-[#0f172a] to-[#090d16] border border-cyan-500/30 shadow-2xl space-y-4">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              Hardware & Setup Recomendado
            </span>
            <h4 className="text-sm font-bold text-white">Equipamentos Recomendados para Esta Categoria</h4>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Ofertas Verificadas</span>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {matchedProducts.map((prod) => (
          <div
            key={prod.id}
            className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex flex-col justify-between space-y-3 hover:border-cyan-400/40 transition-colors"
          >
            <div className="flex gap-3">
              <img
                src={prod.imageUrl}
                alt={prod.name}
                className="w-16 h-16 rounded-lg object-cover bg-slate-900 shrink-0"
              />
              <div className="space-y-1 min-w-0">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">{prod.brand}</span>
                <h5 className="text-xs font-bold text-white line-clamp-2 leading-tight">{prod.name}</h5>
                <div className="flex items-center gap-1 text-[10px] text-amber-400 font-bold">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{prod.rating}</span>
                  <span className="text-slate-500 font-normal">({prod.reviewsCount})</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-white font-mono">{prod.priceEstimate}</span>
              
              <div className="flex items-center gap-1.5">
                <a
                  href={getAmazonTechUrl(prod.searchKeyword)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-2.5 py-1.5 rounded-lg bg-[#FF9900] hover:bg-[#FFAC1C] text-slate-950 text-[10px] font-bold transition-all flex items-center gap-1 shadow-sm"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>Amazon</span>
                </a>

                <a
                  href={getMercadoLivreTechUrl(prod.searchKeyword)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-2.5 py-1.5 rounded-lg bg-[#ffe600] hover:bg-[#ffd000] text-slate-950 text-[10px] font-bold transition-all flex items-center gap-1 shadow-sm"
                >
                  <Zap className="w-3 h-3 text-blue-700" />
                  <span>ML Full</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
