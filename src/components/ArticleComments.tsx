import React, { useState, useEffect } from 'react';
import { MessageSquare, ThumbsUp, Send, User, Sparkles } from 'lucide-react';
import { GoogleAuthButton } from './GoogleAuthButton';

interface CommentItem {
  id: string;
  userName: string;
  userEmail: string;
  userPicture?: string;
  text: string;
  createdAt: string;
  likes: number;
}

interface ArticleCommentsProps {
  articleId: string;
}

export const ArticleComments: React.FC<ArticleCommentsProps> = ({ articleId }) => {
  const [comments, setComments] = useState<CommentItem[]>(() => {
    try {
      const saved = localStorage.getItem(`cronix_comments_${articleId}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Filtrar comentários artificiais antigos
        return parsed.filter((c: CommentItem) => c.id !== 'c1' && c.id !== 'c2');
      }
    } catch {
      // Fallback
    }
    return [];
  });

  const [newCommentText, setNewCommentText] = useState('');
  const [likesCount, setLikesCount] = useState<number>(() => {
    const saved = localStorage.getItem(`cronix_likes_${articleId}`);
    return saved && saved !== '48' ? parseInt(saved, 10) : 0;
  });
  const [hasLikedArticle, setHasLikedArticle] = useState<boolean>(() => {
    return localStorage.getItem(`cronix_user_liked_${articleId}`) === 'true';
  });

  // Usuário do Google Auth armazenado
  const savedUser = (() => {
    try {
      const u = localStorage.getItem('cronix_user');
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  })();

  useEffect(() => {
    try {
      localStorage.setItem(`cronix_comments_${articleId}`, JSON.stringify(comments));
    } catch {
      // Ignore
    }
  }, [comments, articleId]);

  const handleLikeArticle = () => {
    if (hasLikedArticle) {
      setLikesCount(prev => prev - 1);
      setHasLikedArticle(false);
      localStorage.removeItem(`cronix_user_liked_${articleId}`);
      localStorage.setItem(`cronix_likes_${articleId}`, (likesCount - 1).toString());
    } else {
      setLikesCount(prev => prev + 1);
      setHasLikedArticle(true);
      localStorage.setItem(`cronix_user_liked_${articleId}`, 'true');
      localStorage.setItem(`cronix_likes_${articleId}`, (likesCount + 1).toString());
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const userProfile = savedUser || {
      name: 'Leitor Convidado',
      email: 'convidado@cronixverso.com.br',
    };

    const newComment: CommentItem = {
      id: Date.now().toString(),
      userName: userProfile.name,
      userEmail: userProfile.email,
      userPicture: userProfile.picture,
      text: newCommentText.trim(),
      createdAt: 'Agora mesmo',
      likes: 0
    };

    setComments(prev => [newComment, ...prev]);
    setNewCommentText('');
  };

  const handleLikeComment = (commentId: string) => {
    setComments(prev =>
      prev.map(c => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  return (
    <section className="mt-12 pt-8 border-t border-white/10 space-y-8">
      {/* Barra de Reações & Engajamento */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-3xl p-5">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-bold text-white text-base">Gostou deste conteúdo?</h4>
            <p className="text-xs text-slate-400">Deixe sua reação e participe do debate da comunidade.</p>
          </div>
        </div>

        <button
          onClick={handleLikeArticle}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-extrabold transition-all shadow-lg ${
            hasLikedArticle
              ? 'bg-cyan-500 text-black shadow-cyan-500/25'
              : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
          }`}
        >
          <ThumbsUp className={`w-4 h-4 ${hasLikedArticle ? 'fill-black' : ''}`} />
          <span>{likesCount > 0 ? `${likesCount} Recomendações` : 'Recomendar Matéria'}</span>
        </button>
      </div>

      {/* Seção de Comentários */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-display font-extrabold text-xl text-white flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            <span>Comentários {comments.length > 0 ? `(${comments.length})` : ''}</span>
          </h3>

          {!savedUser && <GoogleAuthButton variant="header" />}
        </div>

        {/* Formulário de Novo Comentário */}
        <form onSubmit={handleAddComment} className="space-y-3">
          <div className="flex items-start space-x-3">
            {savedUser?.picture ? (
              <img src={savedUser.picture} alt={savedUser.name} className="w-9 h-9 rounded-full border border-cyan-400 shrink-0 mt-1" />
            ) : (
              <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-400 shrink-0 mt-1">
                <User className="w-4 h-4" />
              </div>
            )}

            <div className="flex-1 space-y-2">
              <textarea
                rows={3}
                required
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder={savedUser ? `Comentar como ${savedUser.name}...` : 'Escreva seu comentário técnico ou dúvida...'}
                className="w-full bg-[#0b0f19] border border-white/15 rounded-2xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-all resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs px-5 py-2.5 rounded-full flex items-center space-x-1.5 transition-all shadow-md shadow-cyan-500/20"
                >
                  <span>Publicar Comentário</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Lista de Comentários */}
        <div className="space-y-4 pt-2">
          {comments.length === 0 ? (
            <div className="text-center py-8 px-4 rounded-2xl bg-white/[0.02] border border-white/5 text-slate-400 text-xs">
              Nenhum comentário ainda. Participe do debate e compartilhe suas ideias sobre esta matéria!
            </div>
          ) : (
            comments.map((c) => (
              <div key={c.id} className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    {c.userPicture ? (
                      <img src={c.userPicture} alt={c.userName} className="w-7 h-7 rounded-full border border-cyan-500/50" />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-bold">
                        {c.userName.charAt(0)}
                      </div>
                    )}
                    <div>
                      <span className="font-bold text-xs text-white block leading-none">{c.userName}</span>
                      <span className="text-[10px] text-slate-500">{c.createdAt}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleLikeComment(c.id)}
                    className="flex items-center space-x-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{c.likes}</span>
                  </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pl-9">{c.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
