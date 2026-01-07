import { useState, useEffect } from 'react';
import { FileEdit, Save, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../lib/api';

interface Page {
  path: string;
  title: string;
  category: string;
}

const pages: Page[] = [
  // O meteostanici
  { path: '/o-meteostanici/aktualni-pocasi', title: 'Aktuální počasí', category: 'O meteostanici' },
  { path: '/o-meteostanici/fotogalerie', title: 'Fotogalerie', category: 'O meteostanici' },
  { path: '/o-meteostanici/rozcestnik', title: 'Rozcestník', category: 'O meteostanici' },
  { path: '/o-meteostanici/historicke-extremy', title: 'Historické extrémy', category: 'O meteostanici' },
  
  // Počasí
  { path: '/pocasi/srazky', title: 'Srážky', category: 'Počasí' },
  { path: '/pocasi/tlak-vzduchu', title: 'Tlak vzduchu', category: 'Počasí' },
  { path: '/pocasi/bourecna-cinnost', title: 'Bouřečná činnost', category: 'Počasí' },
  { path: '/pocasi/orkany', title: 'Orkány', category: 'Počasí' },
  
  // Archivy teplot
  ...Array.from({ length: 19 }, (_, i) => ({
    path: `/archivy-teplot/${2008 + i}`,
    title: `Archiv ${2008 + i}`,
    category: 'Archivy teplot'
  })),
  
  // Grafy
  { path: '/grafy/mesicni-prumery', title: 'Měsíční průměry', category: 'Grafy' },
  { path: '/grafy/rocni-prumery', title: 'Roční průměry', category: 'Grafy' },
  { path: '/grafy/extremy', title: 'Extrémy', category: 'Grafy' },
  
  // Články
  { path: '/clanky', title: 'Články', category: 'Články' },
  
  // Odkazy
  { path: '/odkazy/mestecka-pocasi', title: 'Městečka s počasím', category: 'Odkazy' },
  { path: '/odkazy/severni-cechy', title: 'Severní Čechy', category: 'Odkazy' },
  { path: '/odkazy/vychodni-cechy', title: 'Východní Čechy', category: 'Odkazy' },
  { path: '/odkazy/stredni-cechy', title: 'Střední Čechy', category: 'Odkazy' },
  { path: '/odkazy/jizni-cechy', title: 'Jižní Čechy', category: 'Odkazy' },
  { path: '/odkazy/morava', title: 'Morava', category: 'Odkazy' },
  
  // Kontakt
  { path: '/kontakt', title: 'Kontakt', category: 'Kontakt' },
];

export function PageEditor() {
  const { token } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadPage = async () => {
      if (!selectedPage) return;
      setLoading(true);
      try {
        const data = await api.getPage(selectedPage.path);
        setContent(data.content || `# ${selectedPage.title}\n\nObsah stránky "${selectedPage.title}"`);
        setTitle(data.title || selectedPage.title);
      } catch (error) {
        console.error('Error loading page:', error);
        setContent(`# ${selectedPage.title}\n\nObsah stránky "${selectedPage.title}"`);
        setTitle(selectedPage.title);
      } finally {
        setLoading(false);
      }
    };
    loadPage();
  }, [selectedPage]);

  const filteredPages = pages.filter(page =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedPages = filteredPages.reduce((acc, page) => {
    if (!acc[page.category]) {
      acc[page.category] = [];
    }
    acc[page.category].push(page);
    return acc;
  }, {} as Record<string, Page[]>);

  const handleSave = async () => {
    if (!selectedPage || !token) return;
    setSaving(true);
    try {
      await api.updatePage(token, selectedPage.path, { title, content });
      alert('✅ Obsah stránky uložen!');
    } catch (error) {
      console.error('Error saving page:', error);
      alert('❌ Chyba při ukládání stránky');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Editor stránek</h2>
        <p className="text-gray-300 mb-6">
          Upravujte obsah jednotlivých stránek webu
        </p>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Hledat stránku..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Seznam stránek */}
        <div className="lg:col-span-1 space-y-4 max-h-[600px] overflow-y-auto">
          {Object.entries(groupedPages).map(([category, categoryPages]) => (
            <div key={category} className="bg-white/5 rounded-xl p-4 border border-white/10">
              <h3 className="text-sm font-semibold text-cyan-400 mb-3">{category}</h3>
              <div className="space-y-2">
                {categoryPages.map((page) => (
                  <button
                    key={page.path}
                    onClick={() => {
                      setSelectedPage(page);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                      selectedPage?.path === page.path
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <FileEdit className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm truncate">{page.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Editor */}
        <div className="lg:col-span-2">
          {selectedPage ? (
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedPage.title}</h3>
                  <p className="text-sm text-gray-400">{selectedPage.path}</p>
                </div>
                <button
                  onClick={handleSave}
                  disabled={saving || loading}
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
                >
                  <Save className="w-5 h-5" />
                  {saving ? 'Ukládám...' : 'Uložit'}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Název stránky
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    disabled={loading}
                    className="w-full bg-slate-900/50 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Obsah stránky (Markdown)
                  </label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    disabled={loading}
                    rows={20}
                    className="w-full bg-slate-900/50 border border-white/20 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
                    placeholder="# Nadpis stránky&#10;&#10;Text obsahu..."
                  />
                </div>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-blue-300 mb-2">💡 Markdown nápověda:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li><code className="text-cyan-400"># Nadpis 1</code> - hlavní nadpis</li>
                    <li><code className="text-cyan-400">## Nadpis 2</code> - podnadpis</li>
                    <li><code className="text-cyan-400">**tučný text**</code> - tučné písmo</li>
                    <li><code className="text-cyan-400">*kurzíva*</code> - kurzíva</li>
                    <li><code className="text-cyan-400">[odkaz](url)</code> - odkaz</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/5 rounded-xl p-12 border border-white/10 text-center">
              <FileEdit className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">Vyberte stránku k editaci</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
