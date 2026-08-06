import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { InstitutionalPage } from './pages/InstitutionalPage';
import { NewsletterModal } from './components/NewsletterModal';
import { initGA, sendPageView } from './utils/analytics';

// Componente para escutar navegações e enviar rastreamento para o Google Analytics
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    sendPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

export function App() {

  const [activeTab, setActiveTab] = useState<'todos' | 'ia' | 'games' | 'ciencia' | 'hardware' | 'salvos'>('todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Persistent Bookmarks State
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cronix_saved_articles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cronix_saved_articles', JSON.stringify(savedArticleIds));
    } catch {
      // Ignore write errors
    }
  }, [savedArticleIds]);

  const toggleSaveArticle = (id: string) => {
    setSavedArticleIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-black flex flex-col justify-between">

        
        {/* Header Compartilhado */}
        <Header 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          onSelectCategory={(cat) => setActiveTab(cat)} 
          savedCount={savedArticleIds.length}
        />

        {/* Rotas Principais */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  activeTab={activeTab} 
                  setActiveTab={setActiveTab} 
                  searchTerm={searchTerm} 
                  setSearchTerm={setSearchTerm} 
                  savedArticleIds={savedArticleIds}
                  onToggleSaveArticle={toggleSaveArticle}
                />
              } 
            />
            <Route 
              path="/artigo/:id" 
              element={
                <ArticlePage 
                  savedArticleIds={savedArticleIds}
                  onToggleSaveArticle={toggleSaveArticle}
                />
              } 
            />
            <Route 
              path="/sobre" 
              element={<InstitutionalPage />} 
            />
            <Route 
              path="/contato" 
              element={<InstitutionalPage />} 
            />
            <Route 
              path="/termos" 
              element={<InstitutionalPage />} 
            />
            <Route 
              path="/privacidade" 
              element={<InstitutionalPage />} 
            />
            <Route 
              path="*" 
              element={<Navigate to="/" replace />} 
            />
          </Routes>
        </main>

        {/* Footer Compartilhado */}
        <Footer onSelectCategory={(cat) => setActiveTab(cat)} />

        {/* Modal Lead Magnet de Newsletter */}
        <NewsletterModal />

      </div>
    </BrowserRouter>
  );
}

export default App;
