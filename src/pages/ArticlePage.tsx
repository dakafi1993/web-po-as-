import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { Calendar, User } from 'lucide-react';

export function ArticlePage() {
  const { slug } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Demo data - bude nahrazeno Firebase daty
  const article = {
    title: 'Bouřky na Vysočině',
    date: '15. ledna 2026',
    author: 'Josef Soukup',
    content: `
      <p class="mb-4">Bouřky představují jedny z nejnápadnějších meteorologických jevů v naší oblasti. 
      Vysočina je díky své geografické poloze často postihována silnými bouřkovými systémy.</p>
      
      <p class="mb-4">Během léta se bouřky tvoří zejména v odpoledních hodinach, kdy je atmosféra 
      nejméně stabilní. Konvektivní oblačnost se vyvíjí rychle a může přinést prudké srážky, krupobití 
      a silný vítr.</p>
      
      <p class="mb-4">Naše meteorologická stanice pravidelně zaznamenává bouřkovou aktivitu a dokumentuje 
      zajímavé jevy spojené s těmito přírodními událostmi.</p>
    `
  };

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
                <header className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {article.title}
                  </h1>
                  
                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-cyan-400" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none">
                  <div 
                    className="text-gray-300 leading-relaxed text-lg space-y-4"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
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
