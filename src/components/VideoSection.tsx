import React, { useState } from 'react';
import { Play, Sparkles, Clock, Eye, ChevronRight } from 'lucide-react';
import { VideoModal, type VideoItem } from './VideoModal';



export const VIDEOS_DATABASE: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'O Fim da Programação com Inteligência Artificial: Minha Opinião DEFINITIVA',
    desc: 'Filipe Deschamps analisa o impacto profundo das IAs geradoras de código na carreira dos desenvolvedores e o futuro da profissão.',
    category: 'Inteligência Artificial',
    duration: '14:35',
    views: '385.4K',
    youtubeId: 'wXWzOaFv7yQ',
    thumbnail: 'https://img.youtube.com/vi/wXWzOaFv7yQ/hqdefault.jpg',
    badge: 'Filipe Deschamps'
  },
  {
    id: 'vid-2',
    title: 'A Inteligência Artificial Vai SUBSTITUIR os Programadores? (Análise Completa)',
    desc: 'O time do Código Fonte TV desmistifica o uso de IAs em produção, limitações técnicas e o novo papel dos engenheiros de software.',
    category: 'Desenvolvimento',
    duration: '19:12',
    views: '492.1K',
    youtubeId: '5Vz1ySgR4q8',
    thumbnail: 'https://img.youtube.com/vi/5Vz1ySgR4q8/hqdefault.jpg',
    badge: 'Código Fonte TV'
  },
  {
    id: 'vid-3',
    title: 'Machine Learning e Inteligência Artificial na Prática: Tutorial & Conceitos',
    desc: 'Diolinux explora ferramentas de aprendizado de máquina, IA local no Linux, modelos de linguagem e automações para devs.',
    category: 'Dev & Linux',
    duration: '16:50',
    views: '215.8K',
    youtubeId: 'mD2s0E_W364',
    thumbnail: 'https://img.youtube.com/vi/mD2s0E_W364/hqdefault.jpg',
    badge: 'Diolinux'
  },
  {
    id: 'vid-4',
    title: 'Lembra Daquela I.A. Que Programava Sozinha? Então...',
    desc: 'Pedro Loos (Ciência Todo Dia) e convidados exploram as fronteiras do aprendizado de máquina, redes neurais e limites computacionais.',
    category: 'Ciência & Tecnologia',
    duration: '18:40',
    views: '530.9K',
    youtubeId: 'N_u4eP9Hq40',
    thumbnail: 'https://img.youtube.com/vi/N_u4eP9Hq40/hqdefault.jpg',
    badge: 'Ciência Todo Dia'
  }
];



export const VideoSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <>
      <section className="my-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b0f1a] via-[#0e1526] to-[#090d18] border border-cyan-500/20 p-6 sm:p-10 shadow-2xl">
        {/* Glows Futuristas de Fundo */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-[120px] pointer-events-none rounded-full" />

        {/* Cabeçalho da Seção */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping mr-1.5" /> CRONIX TV & VÍDEOS
              </span>
              <span className="text-xs text-slate-400 font-semibold flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1 text-cyan-400" /> Dicas e Notícias em Vídeo
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Vídeos em Destaque & <span className="gradient-text">Tutoriais Práticos</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Assista a análises profundas, comparações de hardware em tempo real e os melhores tutoriais de IA da nossa redação.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <span className="text-xs text-slate-400 hidden sm:inline">4 vídeos selecionados</span>
          </div>
        </div>

        {/* Grid de Vídeos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {VIDEOS_DATABASE.map((video) => (
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

                  {/* Badge & Duração */}
                  {video.badge && (
                    <span className="absolute top-2 left-2 bg-black/80 backdrop-blur-md border border-cyan-400/40 text-cyan-300 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                      {video.badge}
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
