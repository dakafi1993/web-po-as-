import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { api } from '../lib/api';

export function TemperaturesPage() {
  const { year } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [temperatures, setTemperatures] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!year) return;
      try {
        const data = await api.getTemperatures(parseInt(year));
        setTemperatures(data);
      } catch (error) {
        console.error('Error fetching temperatures:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [year]);

  const demoData = temperatures.map(t => ({
    date: t.date,
    temp6: t.temperature,
    temp12: t.temperature,
    temp18: t.temperature
  }));

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
            
            <main className="flex-1 space-y-8">
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/10">
                <h1 className="text-3xl font-bold text-white mb-6">Naměřené teploty rok {year}</h1>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 mb-8">
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={demoData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                      <XAxis dataKey="date" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1e293b', 
                          border: '1px solid #334155',
                          borderRadius: '12px'
                        }}
                      />
                      <Line type="monotone" dataKey="temp6" stroke="#06b6d4" name="6:00" strokeWidth={2} />
                      <Line type="monotone" dataKey="temp12" stroke="#f59e0b" name="12:00" strokeWidth={2} />
                      <Line type="monotone" dataKey="temp18" stroke="#8b5cf6" name="18:00" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-4 px-4 text-cyan-300">Datum</th>
                        <th className="text-left py-4 px-4 text-cyan-300">6:00</th>
                        <th className="text-left py-4 px-4 text-cyan-300">12:00</th>
                        <th className="text-left py-4 px-4 text-cyan-300">18:00</th>
                      </tr>
                    </thead>
                    <tbody>
                      {demoData.map((row, idx) => (
                        <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                          <td className="py-3 px-4 text-white">{row.date}</td>
                          <td className="py-3 px-4 text-cyan-300">{row.temp6}°C</td>
                          <td className="py-3 px-4 text-orange-300">{row.temp12}°C</td>
                          <td className="py-3 px-4 text-purple-300">{row.temp18}°C</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
