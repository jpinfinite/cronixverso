import React, { useState } from 'react';
import { Layers, Check } from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  category: string;
  badge: string;
  specs: {
    perf: string;
    efficiency: string;
    context: string;
    price: string;
  };
  highlights: string[];
  verdict: string;
}

const COMPARISON_ITEMS: TechItem[] = [
  {
    id: 'cursor',
    name: 'Cursor IDE (2026)',
    category: 'IA & Dev',
    badge: 'Líder em Indexação',
    specs: {
      perf: '98,4 pts (MMLU Code)',
      efficiency: '1,8 GB RAM (Otimizado)',
      context: 'Global / Multi-repositório',
      price: '$20 / mês'
    },
    highlights: [
      'Indexação vetorial em tempo real da codebase inteira',
      'Regras personalizadas de arquitetura (Cursor Rules)',
      'Integração profunda com Git e Histórico'
    ],
    verdict: 'Melhor opção para grandes empresas e bases de código legadas gigantesas.'
  },
  {
    id: 'windsurf',
    name: 'Windsurf AI (2026)',
    category: 'IA & Dev',
    badge: 'Flow Agent Autônomo',
    specs: {
      perf: '96,8 pts (SWE-bench)',
      efficiency: '2,2 GB RAM (Agente)',
      context: 'Fluxo Contínuo / Terminal',
      price: '$15 / mês'
    },
    highlights: [
      'Agente autônomo com auto-correção de erros de CI/CD',
      'Execução direta de comandos e suítes de teste no terminal',
      'Velocidade 41% mais rápida em tarefas greenfield'
    ],
    verdict: 'Ideal para prototipagem ultra-rápida e automação contínua de tarefas.'
  },
  {
    id: 'rtx5090',
    name: 'NVIDIA RTX 5090',
    category: 'Hardware & GPU',
    badge: '32GB GDDR7',
    specs: {
      perf: '42.450 pts (TimeSpy Extreme)',
      efficiency: '490W (TGP Médio)',
      context: '1,8 TB/s Banda de Memória',
      price: '$1.999 USD'
    },
    highlights: [
      'DLSS 4 com Geração Multi-Quadro por IA',
      'Inferência de LLMs de 70B localmente a 47 tok/s',
      'Path Tracing nativo em 4K a +120 FPS'
    ],
    verdict: 'A placa definitiva para pesquisadores de IA e gamers em 4K ultra.'
  },
  {
    id: 'rtx4090',
    name: 'NVIDIA RTX 4090',
    category: 'Hardware & GPU',
    badge: '24GB GDDR6X',
    specs: {
      perf: '18.600 pts (TimeSpy Extreme)',
      efficiency: '450W (TGP Médio)',
      context: '1,0 TB/s Banda de Memória',
      price: '$1.599 USD'
    },
    highlights: [
      'DLSS 3 com Frame Generation simples',
      'Inferência de LLMs de 70B a 18,6 tok/s',
      'Excelente desempenho em 4K'
    ],
    verdict: 'Ainda extremamente poderosa, mas superada em 128% pela nova geração.'
  }
];

export const TechComparator: React.FC = () => {
  const [item1Id, setItem1Id] = useState<string>('cursor');
  const [item2Id, setItem2Id] = useState<string>('windsurf');

  const item1 = COMPARISON_ITEMS.find(i => i.id === item1Id) || COMPARISON_ITEMS[0];
  const item2 = COMPARISON_ITEMS.find(i => i.id === item2Id) || COMPARISON_ITEMS[1];

  return (
    <div className="rounded-3xl bg-gradient-to-b from-[#0f1420] to-[#07090e] border border-cyan-500/20 p-6 sm:p-10 shadow-2xl relative overflow-hidden my-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 relative z-10 space-y-2">
        <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5 inline mr-1" /> FERRAMENTA INTERATIVA
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white">
          Comparador de <span className="gradient-text">Tecnologias ⚔️</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm">
          Selecione 2 tecnologias para comparar especificações, desempenho e veredito em tempo real.
        </p>
      </div>

      {/* Seletores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8 relative z-10">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Tecnologia A</label>
          <select 
            value={item1Id}
            onChange={(e) => setItem1Id(e.target.value)}
            className="w-full bg-[#07090e] border border-cyan-500/40 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
          >
            {COMPARISON_ITEMS.map(i => (
              <option key={i.id} value={i.id} disabled={i.id === item2Id}>
                {i.name} ({i.category})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Tecnologia B</label>
          <select 
            value={item2Id}
            onChange={(e) => setItem2Id(e.target.value)}
            className="w-full bg-[#07090e] border border-purple-500/40 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-purple-400"
          >
            {COMPARISON_ITEMS.map(i => (
              <option key={i.id} value={i.id} disabled={i.id === item1Id}>
                {i.name} ({i.category})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid de Comparação Lado a Lado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        
        {/* Card A */}
        <div className="bg-[#07090e] border border-cyan-500/30 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">{item1.category}</span>
              <h3 className="font-display font-extrabold text-xl text-white">{item1.name}</h3>
            </div>
            <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full">
              {item1.badge}
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-slate-400">Desempenho:</span>
              <strong className="text-white">{item1.specs.perf}</strong>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-slate-400">Eficiência / Recurso:</span>
              <strong className="text-white">{item1.specs.efficiency}</strong>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-slate-400">Arquitetura / Escopo:</span>
              <strong className="text-white">{item1.specs.context}</strong>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-slate-400">Preço / Investimento:</span>
              <strong className="text-cyan-400 font-bold">{item1.specs.price}</strong>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase">Destaques Principais</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {item1.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/20 p-3 rounded-xl text-xs text-cyan-200">
            <strong className="block text-cyan-400 mb-0.5">Veredito:</strong> {item1.verdict}
          </div>
        </div>

        {/* Card B */}
        <div className="bg-[#07090e] border border-purple-500/30 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">{item2.category}</span>
              <h3 className="font-display font-extrabold text-xl text-white">{item2.name}</h3>
            </div>
            <span className="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full">
              {item2.badge}
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-slate-400">Desempenho:</span>
              <strong className="text-white">{item2.specs.perf}</strong>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-slate-400">Eficiência / Recurso:</span>
              <strong className="text-white">{item2.specs.efficiency}</strong>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-slate-400">Arquitetura / Escopo:</span>
              <strong className="text-white">{item2.specs.context}</strong>
            </div>
            <div className="flex justify-between py-1.5 border-b border-white/5">
              <span className="text-slate-400">Preço / Investimento:</span>
              <strong className="text-purple-400 font-bold">{item2.specs.price}</strong>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase">Destaques Principais</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {item2.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/20 p-3 rounded-xl text-xs text-purple-200">
            <strong className="block text-purple-400 mb-0.5">Veredito:</strong> {item2.verdict}
          </div>
        </div>

      </div>
    </div>
  );
};
