import { useState, FormEvent } from 'react';
import { Plus, Check, Upload } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../lib/api';

export function AddPhotoForm() {
  const { token } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file || !token) return;

    setLoading(true);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append('photo', file);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('category', 'bourky');

      await api.uploadPhoto(token, formData);

      setSuccess(true);
      setTitle('');
      setDescription('');
      setFile(null);
      
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error adding photo:', error);
      alert('Chyba při nahrávání fotografie');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Přidat fotografii</h2>
      
      {success && (
        <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-6 flex items-center gap-3">
          <Check className="w-5 h-5 text-green-400" />
          <p className="text-green-300">Fotografie byla úspěšně nahrána!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Název fotografie
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
            placeholder="Bouřka nad Vysočinou"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Popis
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            placeholder="Popis fotografie..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Soubor obrázku
          </label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 cursor-pointer hover:bg-white/15 transition-colors"
            >
              <Upload className="w-5 h-5 text-cyan-400" />
              <span className="text-white">
                {file ? file.name : 'Vyberte soubor...'}
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !file}
          className="w-full md:w-auto flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-5 h-5" />
          {loading ? 'Nahrávání...' : 'Přidat fotografii'}
        </button>
      </form>
    </div>
  );
}
