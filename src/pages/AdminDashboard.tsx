import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, FileText, Thermometer, Image, FileEdit } from 'lucide-react';
import { Header } from '../components/Header';
import { AddTemperatureForm } from '../components/admin/AddTemperatureForm';
import { AddArticleForm } from '../components/admin/AddArticleForm';
import { AddPhotoForm } from '../components/admin/AddPhotoForm';
import { PageEditor } from '../components/admin/PageEditor';

type TabType = 'overview' | 'pages' | 'temperatures' | 'articles' | 'photos';

export function AdminDashboard() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const tabs = [
    { id: 'overview' as TabType, label: 'Přehled', icon: FileText },
    { id: 'pages' as TabType, label: 'Editor stránek', icon: FileEdit },
    { id: 'temperatures' as TabType, label: 'Teploty', icon: Thermometer },
    { id: 'articles' as TabType, label: 'Články', icon: FileText },
    { id: 'photos' as TabType, label: 'Fotografie', icon: Image },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Admin Panel</h1>
              <p className="text-gray-400">Přihlášen jako: {user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-300 px-4 py-2 rounded-xl transition-all"
            >
              <LogOut className="w-5 h-5" />
              Odhlásit se
            </button>
          </div>

          {/* Tabs */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-2 mb-8">
            <div className="flex gap-2 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">Vítejte v administraci</h2>
                <p className="text-gray-300">
                  Zde můžete spravovat obsah webu - přidávat naměřené teploty, vytvářet články o počasí a nahrávat fotografie.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-6 border border-orange-500/30">
                    <Thermometer className="w-12 h-12 text-orange-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Teploty</h3>
                    <p className="text-gray-300 text-sm">Přidávejte denní měření teplot</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30">
                    <FileText className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Články</h3>
                    <p className="text-gray-300 text-sm">Vytvářejte články o bouřkách a orkánech</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30">
                    <Image className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Fotografie</h3>
                    <p className="text-gray-300 text-sm">Nahrávejte fotografie počasí</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'temperatures' && <AddTemperatureForm />}
            {activeTab === 'articles' && <AddArticleForm />}
            {activeTab === 'photos' && <AddPhotoForm />}
            {activeTab === 'pages' && <PageEditor />}
          </div>
        </div>
      </div>
    </div>
  );
}
