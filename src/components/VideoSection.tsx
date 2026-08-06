import React, { useState } from 'react';
import { Play, Sparkles, Clock, Eye, ChevronRight, Video } from 'lucide-react';
import { VideoModal, type VideoItem } from './VideoModal';

export interface ChannelInfo {
  name: string;
  handle: string;
  url: string;
}

export const FEATURED_CHANNELS: ChannelInfo[] = [
  { name: 'Mano Deyvin', handle: '@manodeyvin', url: 'https://www.youtube.com/@manodeyvin' },
  { name: 'Matheus Battisti', handle: '@MatheusBattisti', url: 'https://www.youtube.com/@MatheusBattisti' },
  { name: 'Xerife Tech', handle: '@xerifetech', url: 'https://www.youtube.com/@xerifetech' },
  { name: 'O Bobo de Wall Street', handle: '@OBobodeWallStreet', url: 'https://www.youtube.com/@OBobodeWallStreet' },
  { name: 'Gu Campelo', handle: '@gucampelo', url: 'https://www.youtube.com/@gucampelo' },
  { name: 'Quant Brasil', handle: '@QuantBrasil', url: 'https://www.youtube.com/@QuantBrasil' },
  { name: 'Ciência Todo Dia', handle: '@CienciaTodoDia', url: 'https://www.youtube.com/@CienciaTodoDia' },
  { name: 'FireMythX', handle: '@firemythx', url: 'https://www.youtube.com/@firemythx' },
];

export const VIDEOS_DATABASE: VideoItem[] = [
  {
    id: 'vid-deyvin',
    title: 'A IA Vai Acabar com os Programadores? A Realidade Dev em 2026',
    desc: 'Mano Deyvin analisa com muito humor e acidez o impacto dos agentes autônomos de IA no dia a dia dos desenvolvedores.',
    category: 'Humor & Dev',
    duration: '14:35',
    views: '385.4K',
    youtubeId: 'N_u4eP9Hq40',
    thumbnail: 'https://img.youtube.com/vi/N_u4eP9Hq40/hqdefault.jpg',
    badge: 'Mano Deyvin'
  },
  {
    id: 'vid-battisti',
    title: 'Como Usar IA para Programar 10x Mais Rápido (Guia Completo para Devs)',
    desc: 'Matheus Battisti (Hora de Codar) ensina na prática como integrar assistentes de IA e autocompletar na sua rotina de desenvolvimento.',
    category: 'Programação & IA',
    duration: '19:12',
    views: '492.1K',
    youtubeId: '5Vz1ySgR4q8',
    thumbnail: 'https://img.youtube.com/vi/5Vz1ySgR4q8/hqdefault.jpg',
    badge: 'Matheus Battisti'
  },
  {
    id: 'vid-xerife',
    title: 'Otimização Suprema do Windows 11 para Jogos e IA: Mais FPS e Menos Latência',
    desc: 'Xerife Tech traz os melhores ajustes, desativação de processos pesados e otimizações de sistema para jogos e aplicações pesadas.',
    category: 'Hardware & Dicas PC',
    duration: '16:50',
    views: '280.5K',
    youtubeId: 'mD2s0E_W364',
    thumbnail: 'https://img.youtube.com/vi/mD2s0E_W364/hqdefault.jpg',
    badge: 'Xerife Tech'
  },
  {
    id: 'vid-bobo',
    title: 'Como a Inteligência Artificial Está Revolucionando as Finanças e o Mercado',
    desc: 'O Bobo de Wall Street descomplica as maiores inovações de IA no mercado financeiro global e investimentos em tecnologia.',
    category: 'Mercado & Tech',
    duration: '18:40',
    views: '320.9K',
    youtubeId: 'wXWzOaFv7yQ',
    thumbnail: 'https://img.youtube.com/vi/wXWzOaFv7yQ/hqdefault.jpg',
    badge: 'O Bobo de Wall Street'
  },
  {
    id: 'vid-campelo',
    title: 'Como Virar um Desenvolvedor Full-Stack na Era dos Agentes de IA em 2026',
    desc: 'Gu Campelo compartilha o roteiro essencial de estudos, ferramentas e metodologias para se destacar no mercado tech atual.',
    category: 'Carreira & IA',
    duration: '15:20',
    views: '195.3K',
    youtubeId: 'X-sX-4i21C0',
    thumbnail: 'https://img.youtube.com/vi/X-sX-4i21C0/hqdefault.jpg',
    badge: 'Gu Campelo'
  },
  {
    id: 'vid-quant',
    title: 'Trading Algorítmico com Python e Inteligência Artificial na Prática',
    desc: 'Quant Brasil mostra como funcionam os modelos quantitativos, análise de dados de mercado e automação com modelos preditivos.',
    category: 'IA Financeira & Quant',
    duration: '21:10',
    views: '164.8K',
    youtubeId: 'wXWzOaFv7yQ',
    thumbnail: 'https://img.youtube.com/vi/wXWzOaFv7yQ/hqdefault.jpg',
    badge: 'Quant Brasil'
  },
  {
    id: 'vid-ciencia',
    title: 'O Fantástico Avanço dos Computadores Quânticos e o Futuro do Universo',
    desc: 'Pedro Loos (Ciência Todo Dia) explica os segredos da física quântica, supercomputadores e o impacto nas próximas décadas.',
    category: 'Ciência & Espaço',
    duration: '17:45',
    views: '610.2K',
    youtubeId: 'N_u4eP9Hq40',
    thumbnail: 'https://img.youtube.com/vi/N_u4eP9Hq40/hqdefault.jpg',
    badge: 'Ciência Todo Dia'
  },
  {
    id: 'vid-firemythx',
    title: 'Análise de Desempenho e Gráficos Next-Gen nos Jogos de 2026',
    desc: 'FireMythX analisa a performance dos novos jogos com Ray Tracing, Unreal Engine 5.5 e otimização de placas de vídeo.',
    category: 'Games & Análise',
    duration: '16:15',
    views: '210.4K',
    youtubeId: 't4zYhU0w31A',
    thumbnail: 'https://img.youtube.com/vi/t4zYhU0w31A/hqdefault.jpg',
    badge: 'FireMythX'
  }
];

export const VideoSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeChannel, setActiveChannel] = useState<string>('todos');

  const filteredVideos = activeChannel === 'todos'
    ? VIDEOS_DATABASE
    : VIDEOS_DATABASE.filter(v => v.badge?.toLowerCase() === activeChannel.toLowerCase());

  return (
    <>
      <section className="my-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b0f1a] via-[#0e1526] to-[#090d18] border border-cyan-500/20 p-6 sm:p-10 shadow-2xl">
        {/* Glows Futuristas de Fundo */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[120px] pointer-events-none rounded-full" />

        {/* Cabeçalho da Seção */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping mr-1.5" /> CRONIX TV & VÍDEOS BRASIL
              </span>
              <span className="text-xs text-slate-400 font-semibold flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-cyan-400" /> Os Melhores Criadores Tech
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Vídeos em Destaque & <span className="gradient-text">Canais Recomendados</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Assista a análises, dicas de programação, hardware, finanças quantitativas, games e ciência dos principais criadores do Brasil.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <span className="text-xs text-slate-400 font-mono">{filteredVideos.length} vídeos em exibição</span>
          </div>
        </div>

        {/* Chips dos Canais Recomendados */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 no-scrollbar relative z-10 border-b border-white/5">
          <button
            onClick={() => setActiveChannel('todos')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
              activeChannel === 'todos'
                ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
            }`}
          >
            Todos os Canais ({VIDEOS_DATABASE.length})
          </button>

          {FEATURED_CHANNELS.map((ch) => (
            <a
              key={ch.handle}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                // Filtrar os vídeos da página ao clicar no canal
                e.preventDefault();
                setActiveChannel(activeChannel === ch.name ? 'todos' : ch.name);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 flex items-center space-x-1.5 border ${
                activeChannel.toLowerCase() === ch.name.toLowerCase()
                  ? 'bg-red-500/20 text-red-300 border-red-500/40 shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-red-500" />
              <span>{ch.name}</span>
            </a>
          ))}
        </div>

        {/* Grid de Vídeos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer rounded-2xl bg-[#0f1420]/90 border border-white/10 hover:border-cyan-500/50 p-4 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Thumbnail com Botão de Play */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-3 bg-slate-950">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/90 group-hover:bg-cyan-400 text-black flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-black ml-0.5" />
                    </div>
                  </div>

                  {/* Badge do Canal & Duração */}
                  {video.badge && (
                    <span className="absolute top-2 left-2 bg-black/80 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-[10px] font-extrabold px-2 py-0.5 rounded-md flex items-center">
                      <Video className="w-3 h-3 mr-1 text-red-400" /> {video.badge}
                    </span>
                  )}
                  <span className="absolute bottom-2 right-2 bg-black/90 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded flex items-center">
                    <Clock className="w-3 h-3 mr-1 text-slate-400" /> {video.duration}
                  </span>
                </div>

                {/* Categoria & Título */}
                <div className="flex items-center justify-between text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
                  <span>{video.category}</span>
                  <span className="flex items-center text-slate-400 font-normal">
                    <Eye className="w-3 h-3 mr-1 text-slate-400" /> {video.views}
                  </span>
                </div>

                <h3 className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mb-2">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {video.desc}
                </p>
              </div>

              {/* Botão Assistir */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium group-hover:text-white transition-colors">Assistir Vídeo</span>
                <span className="text-cyan-400 font-bold flex items-center group-hover:translate-x-1 transition-transform">
                  Play <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal de Vídeo */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
};
