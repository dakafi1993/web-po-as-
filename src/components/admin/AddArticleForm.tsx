import { useState, FormEvent } from 'react';
import { Plus, Check } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../lib/api';

export function AddArticleForm() {
  const { token } = useAuth();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!token) return;
    
    setLoading(true);
    setSuccess(false);

    try {
      await api.createArticle(token, {
        title,
        content,
        category: 'aktuality'
      });

      setSuccess(true);
      setTitle('');
      setContent('');
      
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error adding article:', error);
      alert('Chyba při ukládání článku');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Přidat nový článek</h2>
      
      {success && (
        <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-6 flex items-center gap-3">
          <Check className="w-5 h-5 text-green-400" />
          <p className="text-green-300">Článek byl úspěšně uložen!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Název článku
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
            placeholder="Bouřky na Vysočině 2026"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Obsah článku
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={12}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            placeholder="Napište obsah článku..."
          />
          <p className="text-gray-400 text-sm mt-2">
            Tip: Můžete použít HTML tagy pro formátování (např. &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;)
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-5 h-5" />
          {loading ? 'Ukládání...' : 'Přidat článek'}
        </button>
      </form>
    </div>
  );
}
