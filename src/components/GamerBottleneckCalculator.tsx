import React, { useState } from 'react';
import { Cpu, Monitor, Zap, AlertTriangle, CheckCircle2, ShoppingBag, ShieldCheck } from 'lucide-react';
import { getShopeeTechUrl, getMercadoLivreTechUrl } from '../utils/affiliates';

interface ProcessorOption {
  name: string;
  tier: number; // 1 (básico) a 5 (entusiasta)
  socket: string;
}

interface GpuOption {
  name: string;
  tier: number;
  vram: string;
}

const PROCESSORS: ProcessorOption[] = [
  { name: 'AMD Ryzen 7 7800X3D', tier: 5, socket: 'AM5' },
  { name: 'Intel Core i7-14700K', tier: 5, socket: 'LGA1700' },
  { name: 'AMD Ryzen 5 7600X', tier: 4, socket: 'AM5' },
  { name: 'Intel Core i5-13600K', tier: 4, socket: 'LGA1700' },
  { name: 'AMD Ryzen 5 5600', tier: 3, socket: 'AM4' },
  { name: 'Intel Core i5-12400F', tier: 3, socket: 'LGA1700' },
  { name: 'AMD Ryzen 5 3600', tier: 2, socket: 'AM4' },
  { name: 'Intel Core i3-12100F', tier: 2, socket: 'LGA1700' },
];

const GPUS: GpuOption[] = [
  { name: 'Nvidia GeForce RTX 4090 24GB', tier: 5, vram: '24GB GDDR6X' },
  { name: 'Nvidia GeForce RTX 4080 Super 16GB', tier: 5, vram: '16GB GDDR6X' },
  { name: 'Nvidia GeForce RTX 4070 Ti Super 16GB', tier: 4, vram: '16GB GDDR6X' },
  { name: 'Nvidia GeForce RTX 4070 Super 12GB', tier: 4, vram: '12GB GDDR6X' },
  { name: 'Nvidia GeForce RTX 4060 8GB', tier: 3, vram: '8GB GDDR6' },
  { name: 'AMD Radeon RX 7600 8GB', tier: 3, vram: '8GB GDDR6' },
  { name: 'Nvidia GeForce GTX 1660 Super 6GB', tier: 2, vram: '6GB GDDR6' },
  { name: 'AMD Radeon RX 580 8GB', tier: 1, vram: '8GB GDDR5' },
];

export const GamerBottleneckCalculator: React.FC = () => {
  const [selectedCpu, setSelectedCpu] = useState<string>(PROCESSORS[4].name);
  const [selectedGpu, setSelectedGpu] = useState<string>(GPUS[4].name);
  const [resolution, setResolution] = useState<'1080p' | '1440p' | '4k'>('1080p');

  const cpu = PROCESSORS.find((p) => p.name === selectedCpu) || PROCESSORS[4];
  const gpu = GPUS.find((g) => g.name === selectedGpu) || GPUS[4];

  // Cálculo de gargalo relativo por resolução
  // Em 1080p, a CPU pesa mais. Em 4K, a GPU pesa mais.
  const resolutionWeights = {
    '1080p': { cpuWeight: 1.2, gpuWeight: 0.8 },
    '1440p': { cpuWeight: 1.0, gpuWeight: 1.0 },
    '4k': { cpuWeight: 0.7, gpuWeight: 1.3 },
  };

  const currentWeight = resolutionWeights[resolution];
  const cpuPower = cpu.tier * currentWeight.cpuWeight;
  const gpuPower = gpu.tier * currentWeight.gpuWeight;

  const diff = cpuPower - gpuPower;
  let bottleneckPercentage = Math.round(Math.abs(diff) * 11);
  if (bottleneckPercentage < 3) bottleneckPercentage = 3;
  if (bottleneckPercentage > 48) bottleneckPercentage = 48;

  let status: 'balanced' | 'cpu_bottleneck' | 'gpu_bottleneck' = 'balanced';
  let recommendation = '';

  if (diff < -0.6) {
    status = 'cpu_bottleneck';
    recommendation = `O seu processador (${cpu.name}) pode limitar o desempenho máximo da sua placa de vídeo em resoluções mais baixas. Recomendamos um upgrade para o Ryzen 7 7800X3D ou Core i5-13600K.`;
  } else if (diff > 0.6) {
    status = 'gpu_bottleneck';
    recommendation = `Seu processador sobra para a placa atual. Em jogos pesados ou com Ray Tracing, sua GPU (${gpu.name}) trabalhará a 100%, sendo o fator limitante de FPS. Recomendamos upgrade para RTX 4070 Super ou superior.`;
  } else {
    status = 'balanced';
    recommendation = `Excelente equilíbrio de setup! O seu processador e a placa de vídeo trabalham em harmonia sem desperdício de desempenho em ${resolution}.`;
  }

  return (
    <section id="calculadora-pc-gamer" className="my-16 scroll-mt-24">
      <div className="max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c1322] via-[#0f172a] to-[#070b14] border border-cyan-500/30 shadow-2xl space-y-8">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold font-mono tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Simulador de Hardware & Gargalo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Calculadora de Gargalo de PC Gamer (Bottleneck)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Descubra se o seu processador e placa de vídeo estão trabalhando em sincronia perfeita para extrair o máximo de taxa de quadros (FPS).
          </p>
        </div>

        {/* Seletores de Componentes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Processador (CPU) */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> Processador (CPU)
            </label>
            <select
              value={selectedCpu}
              onChange={(e) => setSelectedCpu(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs font-semibold focus:outline-none focus:border-cyan-400 transition-colors"
            >
              {PROCESSORS.map((p) => (
                <option key={p.name} value={p.name} className="bg-slate-900 text-white">
                  {p.name} ({p.socket})
                </option>
              ))}
            </select>
          </div>

          {/* Placa de Vídeo (GPU) */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> Placa de Vídeo (GPU)
            </label>
            <select
              value={selectedGpu}
              onChange={(e) => setSelectedGpu(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs font-semibold focus:outline-none focus:border-cyan-400 transition-colors"
            >
              {GPUS.map((g) => (
                <option key={g.name} value={g.name} className="bg-slate-900 text-white">
                  {g.name}
                </option>
              ))}
            </select>
          </div>

          {/* Resolução do Monitor */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Monitor className="w-4 h-4" /> Resolução de Jogo
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['1080p', '1440p', '4k'] as const).map((res) => (
                <button
                  key={res}
                  type="button"
                  onClick={() => setResolution(res)}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                    resolution === res
                      ? 'bg-cyan-500 text-black border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {res.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Painel de Diagnóstico */}
        <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              {status === 'balanced' ? (
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              ) : (
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <AlertTriangle className="w-6 h-6" />
                </div>
              )}
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold block">
                  Status do Setup em {resolution}
                </span>
                <h4 className="text-lg font-bold text-white">
                  {status === 'balanced'
                    ? 'Setup Equilibrado e Otimizado'
                    : status === 'cpu_bottleneck'
                    ? 'Gargalo de Processador (CPU Limit)'
                    : 'Gargalo de Placa Gráfica (GPU Limit)'}
                </h4>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block">
                Índice de Gargalo Estimado
              </span>
              <span
                className={`text-2xl font-black font-mono ${
                  bottleneckPercentage <= 10
                    ? 'text-emerald-400'
                    : bottleneckPercentage <= 25
                    ? 'text-amber-400'
                    : 'text-rose-400'
                }`}
              >
                {bottleneckPercentage}%
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {recommendation}
          </p>

          {/* Ações e Links de Hardware */}
          <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Compare preços oficiais nas lojas verificadas:</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={getShopeeTechUrl(status === 'cpu_bottleneck' ? 'Ryzen 7 7800X3D' : 'RTX 4070 Super')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Ofertas Shopee</span>
              </a>

              <a
                href={getMercadoLivreTechUrl(status === 'cpu_bottleneck' ? 'Ryzen 7 7800X3D' : 'RTX 4070 Super')}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-[#ffe600] hover:bg-[#ffd000] text-slate-950 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <Zap className="w-4 h-4 text-blue-700" />
                <span>ML Entrega Full</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
