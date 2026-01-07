import { useState } from 'react';
import { Cloud, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-2xl shadow-2xl border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 hover:bg-white/10 rounded-xl transition-all duration-300"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
            
            <Link to="/" className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-100 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-3 rounded-2xl shadow-2xl">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                  Počasí Nová Ves
                </h1>
                <p className="text-sm text-cyan-200 hidden sm:block drop-shadow-md">
                  Josef Soukup - Meteorologická stanice
                </p>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-2 bg-white/15 backdrop-blur-md border border-cyan-400/30 rounded-xl px-4 py-2.5 min-w-[280px] shadow-lg shadow-cyan-500/10 hover:bg-white/20">
            <Search className="w-5 h-5 text-cyan-200" />
            <input
              type="text"
              placeholder="Hledat..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-white placeholder-cyan-300/60 w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
