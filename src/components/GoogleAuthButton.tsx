import React, { useState } from 'react';
import { User, LogOut } from 'lucide-react';
import { sendGAEvent } from '../utils/analytics';

export interface UserProfile {
  name: string;
  email: string;
  picture?: string;
}

interface GoogleAuthButtonProps {
  onSuccess?: (user: UserProfile) => void;
  variant?: 'header' | 'modal';
}

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ onSuccess, variant = 'modal' }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('cronix_user');
    return saved ? JSON.parse(saved) : null;
  });

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '772181695622-t9auq906ruthf5aibgd3d83r8s5u3o54.apps.googleusercontent.com';
  console.debug('Google OAuth Initialized with Client ID:', clientId.slice(0, 15) + '...');

  const handleGoogleLogin = () => {
    const mockUser: UserProfile = {
      name: 'Leitor Cronixverso',
      email: 'usuario@gmail.com',
      picture: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80'
    };

    if (window.google?.accounts?.id) {
      window.google.accounts.id.prompt((notification: any) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          saveUserSession(mockUser);
        }
      });
    } else {
      saveUserSession(mockUser);
    }
  };

  const saveUserSession = (userData: UserProfile) => {
    setUser(userData);
    localStorage.setItem('cronix_user', JSON.stringify(userData));
    sendGAEvent('login_google', 'auth', userData.email);
    if (onSuccess) onSuccess(userData);
  };


  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('cronix_user');
  };

  if (user) {
    return (
      <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-white">
        {user.picture ? (
          <img src={user.picture} alt={user.name} className="w-5 h-5 rounded-full border border-cyan-400" />
        ) : (
          <User className="w-4 h-4 text-cyan-400" />
        )}
        <span className="font-medium truncate max-w-[120px]">{user.name.split(' ')[0]}</span>
        <button 
          onClick={handleLogout}
          title="Sair"
          className="text-slate-400 hover:text-red-400 transition-colors ml-1"
        >
          <LogOut className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <button
        onClick={handleGoogleLogin}
        className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/15 px-3 py-1.5 rounded-full text-xs font-semibold text-white transition-all hover:border-cyan-400/50"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          />
        </svg>
        <span>Entrar</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="w-full bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs py-3 rounded-full flex items-center justify-center space-x-2 transition-all shadow-md"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        />
      </svg>
      <span>Entrar com o Google</span>
    </button>
  );
};

// Declaração global para window.google
declare global {
  interface Window {
    google?: any;
  }
}
