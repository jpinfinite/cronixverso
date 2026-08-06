import React from 'react';
import { X, ExternalLink, Sparkles, Eye, Clock, Share2 } from 'lucide-react';

export interface VideoItem {
  id: string;
  title: string;
  desc: string;
  category: string;
  duration: string;
  views: string;
  youtubeId: string;
  thumbnail: string;
  badge?: string;
}

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  const shareVideo = () => {
    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: video.desc,
        url: `https://www.youtube.com/watch?v=${video.youtubeId}`
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${video.youtubeId}`);
      alert('Link do vídeo copiado para a área de transferência!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#0b0f19] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl z-10 space-y-4">
        {/* Header do Modal */}
        <div className="flex items-center justify-between px-6 pt-5 pb-2 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
              {video.category}
            </span>
            <span className="text-slate-400 text-xs flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1" /> {video.duration}
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Player de Vídeo Responsivo (YouTube Embed Oficial) */}
        <div className="relative aspect-video w-full bg-slate-950">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>


        {/* Informações e Detalhes do Vídeo */}
        <div className="p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="font-display font-extrabold text-xl text-white">{video.title}</h3>
            
            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={shareVideo}
                className="flex items-center space-x-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs px-3.5 py-2 rounded-full transition-all"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Compartilhar</span>
              </button>

              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs px-4 py-2 rounded-full transition-all shadow-md shadow-red-600/20"
              >
                <span>Assistir no YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">{video.desc}</p>

          <div className="flex items-center space-x-4 pt-2 text-[11px] text-slate-400 border-t border-white/5">
            <span className="flex items-center">
              <Eye className="w-3.5 h-3.5 mr-1 text-cyan-400" /> {video.views} visualizações
            </span>
            <span className="flex items-center text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> Conteúdo Curado CRONIXVERSO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
