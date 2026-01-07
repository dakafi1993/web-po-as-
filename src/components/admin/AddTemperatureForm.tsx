import { useState, FormEvent } from 'react';
import { Plus, Check } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../lib/api';

export function AddTemperatureForm() {
  const { token } = useAuth();
  const [date, setDate] = useState('');
  const [temp6, setTemp6] = useState('');
  const [temp12, setTemp12] = useState('');
  const [temp18, setTemp18] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!token) return;
    
    setLoading(true);
    setSuccess(false);

    try {
      await api.addTemperature(token, {
        date: date,
        time: '06:00',
        temperature: parseFloat(temp6),
        humidity: null,
        pressure: null,
        wind_speed: null,
        precipitation: null
      });

      setSuccess(true);
      setDate('');
      setTemp6('');
      setTemp12('');
      setTemp18('');
      
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error adding temperature:', error);
      alert('Chyba při ukládání dat');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Přidat naměřené teploty</h2>
      
      {success && (
        <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-6 flex items-center gap-3">
          <Check className="w-5 h-5 text-green-400" />
          <p className="text-green-300">Data byla úspěšně uložena!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Datum
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Teplota v 6:00 (°C)
            </label>
            <input
              type="number"
              step="0.1"
              value={temp6}
              onChange={(e) => setTemp6(e.target.value)}
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="-5.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Teplota v 12:00 (°C)
            </label>
            <input
              type="number"
              step="0.1"
              value={temp12}
              onChange={(e) => setTemp12(e.target.value)}
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="2.3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Teplota v 18:00 (°C)
            </label>
            <input
              type="number"
              step="0.1"
              value={temp18}
              onChange={(e) => setTemp18(e.target.value)}
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="0.8"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-5 h-5" />
          {loading ? 'Ukládání...' : 'Přidat měření'}
        </button>
      </form>
    </div>
  );
}
