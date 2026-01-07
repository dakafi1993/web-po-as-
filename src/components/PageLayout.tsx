import { useState } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

interface PageProps {
  title: string;
  children: React.ReactNode;
}

export function PageLayout({ title, children }: PageProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
              <article className="bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  {title}
                </h1>
                <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                  {children}
                </div>
              </article>
            </main>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
