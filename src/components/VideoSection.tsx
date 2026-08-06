import React, { useState } from 'react';
import { Play, Sparkles, Clock, Eye, ChevronRight } from 'lucide-react';
import { VideoModal, type VideoItem } from './VideoModal';



export const VIDEOS_DATABASE: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'A IA Vai Substituir os Programadores? A Verdade que Ninguém Te Conta em 2026',
    desc: 'Análise profunda sobre a evolução do GPT, Claude e Cursor IDE, o novo papel do desenvolvedor e como se posicionar no mercado.',
    category: 'Inteligência Artificial',
    duration: '15:42',
    views: '342.1K',
    youtubeId: 'Wn2jJz8XhNo',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    badge: 'Filipe Deschamps'
  },
  {
    id: 'vid-2',
    title: 'NVIDIA RTX 5090: O Teste Definitivo de Benchmark, DLSS 4 e 4K NATIVO',
    desc: 'Testamos a nova top de linha da NVIDIA em jogos pesados com Ray Tracing e Path Tracing ativados. Vale o investimento?',
    category: 'Hardware & GPUs',
    duration: '22:15',
    views: '512.8K',
    youtubeId: 't4zYhU0w31A',
    thumbnail: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80',
    badge: 'Adrenaline'
  },
  {
    id: 'vid-3',
    title: 'Como a Inteligência Artificial Está Mudar o Linux e o Código Aberto',
    desc: 'Explorando assistentes de terminal com IA local, Ollama, DeepSeek e a revolução dos agentes open-source no ecossistema dev.',
    category: 'Dev & Linux',
    duration: '18:30',
    views: '189.5K',
    youtubeId: 'L_LUpnjgPso',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    badge: 'Diolinux'
  },
  {
    id: 'vid-4',
    title: 'O Fantástico Avanço dos Computadores Quânticos e o Futuro do Universo',
    desc: 'Como os supercomputadores de qubits e a inteligência artificial estão decifrando os maiores mistérios da física moderna.',
    category: 'Ciência & Espaço',
    duration: '19:40',
    views: '420.3K',
    youtubeId: 'QuR969uMICM',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
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
