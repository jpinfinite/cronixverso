import { useEffect, useRef, useState } from 'react';
import { Zap, Activity, Sparkles } from 'lucide-react';

interface ScrollytellingNode {
  id: string;
  stageNumber: string;
  category: string;
  title: string;
  description: string;
  telemetry: { label: string; value: string }[];
  accentColor: string;
}

const NODES_DATA: ScrollytellingNode[] = [
  {
    id: 'stage-01',
    stageNumber: '01',
    category: 'RACIOCÍNIO NEURAL HÍBRIDO',
    title: 'Camada de Inferência & Árvore de Pensamento (MCTS)',
    description: 'Processamento simultâneo de múltiplos caminhos de raciocínio lógico antes da geração do primeiro token. O modelo avalia a viabilidade semântica e descarta alucinações em micropassos.',
    telemetry: [
      { label: 'Tempo de Deliberação', value: '450ms' },
      { label: 'Profundidade da Árvore', value: '32 Ramos' }
    ],
    accentColor: '#06b6d4'
  },
  {
    id: 'stage-02',
    stageNumber: '02',
    category: 'MODEL CONTEXT PROTOCOL (MCP)',
    title: 'Interoperabilidade de Ferramentas & Sandboxing Seguro',
    description: 'Execução autônoma de consultas SQL, interpretadores de Python e navegação web através de chamadas JSON-RPC 2.0 estritamente tipadas e isoladas em contêineres efêmeros.',
    telemetry: [
      { label: 'Protocolo de Transporte', value: 'Stdio & SSE' },
      { label: 'Isolamento de Memória', value: '100% Sandbox' }
    ],
    accentColor: '#a855f7'
  },
  {
    id: 'stage-03',
    stageNumber: '03',
    category: 'HARDWARE & COMPUTAÇÃO QUÂNTICA',
    title: 'Aceleração Óptica & Chips Fotônicos de 2nm',
    description: 'Transferência de terabytes por segundo em barramentos de laser de silício, reduzindo o calor gerado por resistência elétrica e acelerando o throughput em clusters exascale.',
    telemetry: [
      { label: 'Eficiência Energética', value: '3.8x superior' },
      { label: 'Latência Inter-Nó', value: '< 1.2μs' }
    ],
    accentColor: '#10b981'
  }
];

export function ChronosMotionPortal() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalDist = rect.height + windowHeight;
      const currentPos = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentPos / totalDist, 0), 1);
      
      setScrollProgress(progress);
      
      if (progress < 0.35) {
        setActiveStage(0);
      } else if (progress < 0.70) {
        setActiveStage(1);
      } else {
        setActiveStage(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentNode = NODES_DATA[activeStage];

  // 3D Motion Matrix Calculations
  const scale = 0.94 + scrollProgress * 0.06;
  const rotateY = (0.5 - scrollProgress) * 14;

  return (
    <section 
      ref={containerRef}
      className="relative my-16 py-12 px-4 sm:px-6 lg:px-8 bg-[#090d16] rounded-3xl border border-cyan-500/20 overflow-hidden shadow-2xl"
      style={{ perspective: '1000px' }}
    >
      {/* Background Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: currentNode.accentColor,
          opacity: 0.15 + scrollProgress * 0.2
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Scrollytelling • Portal Cronixverso 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
            Arquitetura Neural & Fronteiras Científicas em Movimento
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Role a página para navegar interativamente pelas camadas de raciocínio agêntico, protocolos MCP e aceleração quântica.
          </p>
        </div>

        {/* 3D Kinetic Card */}
        <div 
          className="transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `scale(${scale}) rotateY(${rotateY}deg)`
          }}
        >
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
            
            {/* Top Control Bar */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                  FLUXO_SCROLL: {(scrollProgress * 100).toFixed(1)}% • ESTÁGIO 0{activeStage + 1}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {NODES_DATA.map((node, idx) => (
                  <button
                    key={node.id}
                    onClick={() => setActiveStage(idx)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                      activeStage === idx
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    {node.stageNumber}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Stage Info */}
              <div className="lg:col-span-7 space-y-4">
                <span 
                  className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border"
                  style={{
                    backgroundColor: `${currentNode.accentColor}15`,
                    borderColor: `${currentNode.accentColor}40`,
                    color: currentNode.accentColor
                  }}
                >
                  {currentNode.category}
                </span>

                <h3 className="text-2xl font-bold text-white leading-tight">
                  {currentNode.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentNode.description}
                </p>

                {/* Telemetry Chips */}
                <div className="grid grid-cols-2 gap-3 pt-3">
                  {currentNode.telemetry.map(item => (
                    <div key={item.label} className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3">
                      <span className="text-[11px] text-slate-500 block">{item.label}</span>
                      <span className="text-sm font-mono font-bold text-white mt-0.5 block">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual HUD Telemetry Box */}
              <div className="lg:col-span-5">
                <div className="bg-slate-950 rounded-xl border border-slate-800/80 p-5 space-y-4 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2.5">
                    <span className="font-mono uppercase">TELEMETRIA_EM_TEMPO_REAL</span>
                    <span className="flex items-center gap-1 text-emerald-400 font-mono">
                      <Zap className="w-3.5 h-3.5" /> LIVE
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Ciclos de Clock Neural:</span>
                      <span className="text-cyan-400 font-bold">12.8 TFLOPS</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-cyan-400 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${35 + activeStage * 30}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center text-slate-300 pt-2">
                      <span>Rigor de Autocorreção:</span>
                      <span className="text-purple-400 font-bold">99.8% Verificado</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-purple-400 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${80 + activeStage * 8}%` }}
                      />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Cronix Quantum Layer</span>
                    <span className="text-cyan-400 font-semibold">60 FPS Native WebGL Ready</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
