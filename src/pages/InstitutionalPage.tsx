import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, 
  Shield, 
  FileText, 
  Info, 
  Mail, 
  Send, 
  CheckCircle2,
  Clock,
  Target,
  Sparkles
} from 'lucide-react';

export const InstitutionalPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [path]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Render Sobre o Cronixverso
  if (path === '/sobre') {
    document.title = 'Sobre o Cronixverso | CRONIXVERSO';
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 mb-6 bg-white/5 border border-white/10 px-3.5 py-2 rounded-full">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para o Portal</span>
        </Link>

        {/* Hero Header */}
        <header className="space-y-3 mb-10">
          <span className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-semibold px-3 py-1 rounded-full uppercase">
            <Info className="w-3.5 h-3.5 inline mr-1" /> INSTITUCIONAL
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
            SOBRE <span className="gradient-text">NÓS</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Sua fonte definitiva de análises técnicas, inteligência artificial, hardware de ponta e jornalismo do futuro.
          </p>
        </header>

        {/* Card Principal: Revolucionando a Leitura de Tecnologia */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0f1420] to-[#07090e] border border-cyan-500/20 p-6 sm:p-10 shadow-2xl mb-10 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 relative z-10">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Revolucionando a Leitura de Tecnologia
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O <strong>CRONIXVERSO</strong> nasceu da constatação de que entusiastas, desenvolvedores, engenheiros e profissionais dinâmicos perdiam horas buscando análises reais em meio a conteúdos superficiais. Nós filtramos o ruído e entregamos o sinal puro com matérias aprofundadas e dados testados em laboratório.
            </p>
          </div>

          {/* Card do Fundador: Jonatha Pereira */}
          <div className="rounded-2xl bg-[#07090e] border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20">
                <img 
                  src="/jonatha-pereira.jpeg" 
                  alt="Jonatha Pereira" 
                  onError={(e) => { e.currentTarget.src = '/logo-icon.svg'; }}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 bg-cyan-500 text-black text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase shadow">
                Líder
              </span>
            </div>

            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-display font-extrabold text-xl text-white">Jonatha Pereira</h3>
                <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold px-3 py-1 rounded-full w-max mx-auto sm:mx-0">
                  Fundador & Editor-Chefe
                </span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Especialista em inteligência artificial, engenharia de software e síntese de dados de mercado. Idealizou o método do CRONIXVERSO para transformar artigos técnicos, benchmarks e especificações complexas em análises acionáveis e matérias completas para o ecossistema tech.
              </p>
            </div>
          </div>

          {/* Três Pilares */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            <div className="rounded-2xl bg-[#07090e]/80 border border-white/10 p-5 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Leitura Aprofundada</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Artigos completos com análises profundas de código, arquitetura e telemetria real.
              </p>

            </div>

            <div className="rounded-2xl bg-[#07090e]/80 border border-white/10 p-5 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Visão Tática</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Transformamos especificações complexas em gatilhos de conhecimento estratégico para o seu dia a dia.
              </p>
            </div>

            <div className="rounded-2xl bg-[#07090e]/80 border border-white/10 p-5 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">100% Independente</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Jornalismo imparcial sem influências de marcas, patrocinadores ou recomendações compradas.
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Render Contato
  if (path === '/contato') {
    document.title = 'Contato & Imprensa | CRONIXVERSO';
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 mb-6 bg-white/5 border border-white/10 px-3.5 py-2 rounded-full">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para o Portal</span>
        </Link>

        <header className="space-y-3 mb-10">
          <span className="bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-xs font-mono font-semibold px-3 py-1 rounded-full uppercase">
            <Mail className="w-3.5 h-3.5 inline mr-1" /> ATENDIMENTO
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Contato & <span className="gradient-text">Imprensa</span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Dúvidas, sugestões de pauta, parcerias ou solicitações de imprensa? Fale conosco.
          </p>
        </header>

        {formSubmitted ? (
          <div className="bg-cyan-500/10 border border-cyan-500/30 p-8 rounded-3xl text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto" />
            <h3 className="text-2xl font-bold text-white">Mensagem Enviada!</h3>
            <p className="text-slate-300 text-sm">
              Obrigado pelo contato. Nossa equipe editorial responderá em até 24 horas úteis.
            </p>
            <button 
              onClick={() => setFormSubmitted(false)}
              className="mt-4 px-6 py-2.5 rounded-full bg-cyan-500 text-black font-extrabold text-xs"
            >
              Enviar Outra Mensagem
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#0f1420] border border-white/10 p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Seu nome..."
                  className="w-full bg-[#07090e] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-2">E-mail de Contato</label>
                <input 
                  type="email" 
                  required 
                  placeholder="seu.email@exemplo.com"
                  className="w-full bg-[#07090e] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Assunto</label>
              <select className="w-full bg-[#07090e] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400">
                <option value="pauta">Sugestão de Pauta / Notícia</option>
                <option value="imprensa">Assessoria de Imprensa</option>
                <option value="parceria">Parceria Comercial</option>
                <option value="outro">Outros Assuntos</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Mensagem</label>
              <textarea 
                required 
                rows={5}
                placeholder="Escreva sua mensagem em detalhes..."
                className="w-full bg-[#07090e] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button 
              type="submit"
              className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm px-8 py-3.5 rounded-full flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/25"
            >
              <span>Enviar Mensagem</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    );
  }

  // Render Termos
  if (path === '/termos') {
    document.title = 'Termos de Uso | CRONIXVERSO';
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 mb-6 bg-white/5 border border-white/10 px-3.5 py-2 rounded-full">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para o Portal</span>
        </Link>

        <header className="space-y-3 mb-10">
          <span className="bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs font-mono font-semibold px-3 py-1 rounded-full uppercase">
            <FileText className="w-3.5 h-3.5 inline mr-1" /> LEGAL
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Termos de <span className="gradient-text">Uso</span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Última atualização: Agosto de 2026.
          </p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-base leading-relaxed">
          <h3 className="text-xl font-bold text-white">1. Aceitação dos Termos</h3>
          <p>
            Ao acessar o portal <strong>CRONIXVERSO</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
          </p>

          <h3 className="text-xl font-bold text-white">2. Propriedade Intelectual</h3>
          <p>
            Todo o conteúdo publicado neste site, incluindo artigos, textos, gráficos, logotipos, ícones e imagens, é de propriedade exclusiva do CRONIXVERSO e protegido pelas leis de direitos autorais e propriedade intelectual.
          </p>

          <h3 className="text-xl font-bold text-white">3. Isenção de Responsabilidade</h3>
          <p>
            Os materiais no site do CRONIXVERSO são fornecidos "como estão". Não oferecemos garantias expressas ou implícitas e renunciamos a todas as outras garantias, incluindo garantias de comercialização ou adequação a um fim específico.
          </p>
        </div>
      </div>
    );
  }

  // Render Privacidade (Essencial para Google AdSense)
  document.title = 'Política de Privacidade | CRONIXVERSO';
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/" className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 mb-6 bg-white/5 border border-white/10 px-3.5 py-2 rounded-full">
        <ArrowLeft className="w-4 h-4" />
        <span>Voltar para o Portal</span>
      </Link>

      <header className="space-y-3 mb-10">
        <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold px-3 py-1 rounded-full uppercase">
          <Shield className="w-3.5 h-3.5 inline mr-1" /> PRIVACIDADE & ADSENSE
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
          Política de <span className="gradient-text">Privacidade</span>
        </h1>
        <p className="text-slate-400 text-base leading-relaxed">
          Conformidade total com a LGPD e Diretrizes do Google AdSense.
        </p>
      </header>

      <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-base leading-relaxed">
        <p>
          A sua privacidade é extremamente importante para nós no <strong>CRONIXVERSO</strong>. É nossa política respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site CRONIXVERSO.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-3">1. Coleta de Informações e Uso de Cookies</h3>
        <p>
          Utilizamos cookies para melhorar a sua experiência de navegação, analisar o tráfego do site e personalizar anúncios através da rede do <strong>Google AdSense</strong>.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-3">2. Cookies do Google AdSense (Cookie DART/DoubleCLick)</h3>
        <p>
          O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios em nosso site:
        </p>
        <ul className="space-y-2 list-disc pl-5">
          <li>Com o cookie DART, o Google exibe anúncios para os usuários com base nas visitas feitas ao CRONIXVERSO e a outros sites na Internet.</li>
          <li>Os usuários podem desativar a utilização do cookie DART visitando a Política de Privacidade da rede de conteúdo e dos anúncios do Google.</li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-8 mb-3">3. Proteção de Dados (LGPD)</h3>
        <p>
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. Nosso site está em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
        </p>
      </div>
    </div>
  );
};
