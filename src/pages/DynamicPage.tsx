import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { api } from '../lib/api';
import ReactMarkdown from 'react-markdown';

export function DynamicPage() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPage = async () => {
      setLoading(true);
      try {
        const data = await api.getPage(location.pathname);
        setPageData(data);
      } catch (error) {
        console.error('Error loading page:', error);
        setPageData({ title: 'Stránka nenalezena', content: '# Stránka se načítá...\n\nObsah této stránky zatím nebyl vytvořen.' });
      } finally {
        setLoading(false);
      }
    };
    loadPage();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10">
        <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            
            <main className="flex-1">
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/10">
                {loading ? (
                  <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-cyan-500 border-t-transparent"></div>
                    <p className="text-gray-400 mt-4">Načítání...</p>
                  </div>
                ) : (
                  <article className="prose prose-invert max-w-none">
                    <ReactMarkdown
                      components={{
                        h1: ({node, ...props}) => <h1 className="text-4xl font-bold text-white mb-6" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-white mt-8 mb-4" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-white mt-6 mb-3" {...props} />,
                        p: ({node, ...props}) => <p className="text-gray-300 mb-4 leading-relaxed" {...props} />,
                        a: ({node, ...props}) => <a className="text-cyan-400 hover:text-cyan-300 underline" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2" {...props} />,
                        img: ({node, ...props}) => <img className="rounded-xl my-6 max-w-full h-auto shadow-lg" {...props} />,
                        code: ({node, inline, ...props}: any) => 
                          inline 
                            ? <code className="bg-slate-800 px-2 py-1 rounded text-cyan-400" {...props} />
                            : <code className="block bg-slate-800 p-4 rounded-xl text-cyan-400 overflow-x-auto" {...props} />,
                        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-gray-400 my-4" {...props} />,
                      }}
                    >
                      {pageData?.content || '# Obsah se načítá...\n\nStránka zatím nemá vytvořený obsah. Přejděte do admin panelu a vytvořte obsah této stránky.'}
                    </ReactMarkdown>
                  </article>
                )}
              </div>
            </main>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
