import { useState } from 'react';
import { Atom, Send, RefreshCw, Cpu, Orbit } from 'lucide-react';
import { cronixAIGateway } from '../services/cronixAIGateway';

export function ChronosAIEngine() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setAnswer(null);

    try {
      const res = await cronixAIGateway.generateText({
        messages: [
          {
            role: 'system',
            content: 'Você é o Chronos AI, o oráculo e motor de análise de Ciência de Fronteira, Inteligência Artificial, Física Quântica e Cibersegurança do portal Cronixverso (cronixverso.com.br). Diferencie estritamente fatos comprovados de hipóteses teóricas. Responda em português com rigor e tom fascinante.'
          },
          {
            role: 'user',
            content: query
          }
        ],
        maxTokens: 450
      });
      setAnswer(res);
    } catch {
      setAnswer('A computação quântica e a IA autônoma representam a convergência máxima entre matemática fundamental e engenharia de software de próxima geração.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative my-12 bg-slate-950 border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-slate-100">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-black uppercase tracking-wider mb-2">
              <Atom className="w-3.5 h-3.5" />
              <span>Chronos AI Studio • Mercury-2 Core</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
              Explorador de Ciência & Inteligência de Próxima Geração
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Decodifique avanços em física quântica, modelos de difusão de linguagem e cibersegurança em tempo real.
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-400 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Quantum Engine Ativo</span>
          </div>
        </div>

        {/* Layout Grid: 3D Asset + Prompt Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-800 relative h-52 sm:h-64 bg-slate-950">
            <img 
              src="/motion/cronix_ai.jpg" 
              alt="3D Quantum Cosmos Engine" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-purple-500/30 text-[10px] font-bold text-purple-400 backdrop-blur-md flex items-center space-x-1">
              <Orbit className="w-3 h-3" />
              <span>3D Singularity • Deep Neural Space</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <form onSubmit={handleAsk} className="flex gap-2">
              <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: Como funciona a computação quântica topológica? Ou: O que é difusão em LLMs?"
                className="flex-1 px-4 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-all"
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="px-5 py-3 rounded-2xl bg-purple-600 text-white font-black text-xs sm:text-sm hover:bg-purple-500 disabled:opacity-50 transition-all flex items-center space-x-1.5 shadow-lg shadow-purple-600/20"
              >
                <span>Decodificar</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Exemplos */}
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
              <span className="font-bold text-slate-500">Tópicos quânticos:</span>
              {[
                'O que é Entrelaçamento Quântico?',
                'Como funcionam os dLLMs?',
                'Limites da Lei de Moore'
              ].map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setQuery(item)}
                  className="bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 hover:text-purple-400 hover:border-purple-500/40 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Resposta */}
            {loading && (
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-bold text-purple-400 flex items-center space-x-2 animate-pulse">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Chronos AI está sintetizando papers e evidências científicas...</span>
              </div>
            )}

            {answer && (
              <div className="p-4 rounded-2xl bg-slate-900 border border-purple-500/40 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2">
                <div className="flex items-center space-x-2 text-[10px] font-black uppercase text-purple-400 border-b border-slate-800 pb-1.5">
                  <Cpu className="w-3 h-3" />
                  <span>Análise Chronos AI (Fato vs Hipótese)</span>
                </div>
                <div className="whitespace-pre-line">{answer}</div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
