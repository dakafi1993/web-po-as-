import { useState } from 'react';
import { Thermometer, Droplets, Wind, CloudRain, Calendar, Eye } from 'lucide-react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const weatherStats = [
    { icon: Thermometer, label: 'Teplota', value: '15°C', color: 'from-orange-400 to-red-500', bgColor: 'from-orange-500/20 to-red-500/20' },
    { icon: Droplets, label: 'Vlhkost', value: '68%', color: 'from-blue-400 to-cyan-500', bgColor: 'from-blue-500/20 to-cyan-500/20' },
    { icon: Wind, label: 'Vítr', value: '12 km/h', color: 'from-sky-400 to-blue-500', bgColor: 'from-sky-500/20 to-blue-500/20' },
    { icon: CloudRain, label: 'Srážky', value: '2 mm', color: 'from-indigo-400 to-purple-500', bgColor: 'from-indigo-500/20 to-purple-500/20' },
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
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            
            <main className="flex-1 space-y-8">
              {/* Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&h=500&fit=crop"
                    alt="Weather landscape"
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="space-y-2">
                        <div className="inline-block px-4 py-1 bg-cyan-500/30 backdrop-blur-md rounded-full border border-cyan-400/30 mb-3">
                          <span className="text-cyan-200 text-sm font-medium">Aktuální počasí</span>
                        </div>
                        <h1 className="text-3xl md:text-6xl font-bold text-white mb-2 drop-shadow-2xl">
                          VŠE O POČASÍ
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl max-w-2xl drop-shadow-lg">
                          Meteorologická stanice Nová Ves u Batelova - Profesionální měření a záznamy od roku 2008
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weather Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {weatherStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300`}></div>
                      <div className={`relative bg-gradient-to-br ${stat.bgColor} backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105`}>
                        <Icon className={`w-8 h-8 mb-3 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                        <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
                        <p className="text-white text-2xl font-bold">{stat.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Main Content Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-10 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
                    <h2 className="text-3xl font-bold text-white">O meteorologické stanici</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-blue-400/20">
                      <p className="text-gray-200 leading-relaxed text-lg">
                        <strong className="text-cyan-300">Zapisování naměřených meteorologických hodnot</strong> probíhá každý den 
                        v <strong className="text-cyan-300">6:00, 12:00 a 18:00 hodin</strong> jak v létě, tak v zimě. 
                        Všechna data jsou pečlivě zaznamenávána a archivována pro dlouhodobé sledování klimatických změn.
                      </p>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-lg">
                      <strong className="text-blue-300">
                        Meteorologie je věda zabývající se atmosférou. Studuje její složení, stavbu, vlastnosti, 
                        jevy a děje v ní probíhající například počasí. Meteorologie je považována za část fyziky, 
                        proto je často chápaná jako fyzika atmosféry. Je součást věd o Zemi, což zohledňuje 
                        souvislost atmosféry s dalšími krajinnými sférami. Poznatky meteorologie jsou nezbytné 
                        v mnoha odvětvích lidské činnosti - doprava, zemědělství, vojenství. 
                        S meteorologií úzce souvisí hydrologie.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Measurement Times Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-3xl shadow-2xl p-8 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-8">
                      <Calendar className="w-10 h-10" />
                      <h2 className="text-3xl font-bold">Časy měření</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {['6:00', '12:00', '18:00'].map((time, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all">
                          <div className="text-4xl font-bold mb-2">{time}</div>
                          <div className="text-sm text-cyan-100">Denní měření</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to="/meteorologicky-radar" className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-emerald-500/30">
                        <Eye className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Meteorologický radar</h3>
                        <p className="text-gray-300 text-sm">Sledování srážek v reálném čase</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="/detekce-blesku" className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-yellow-500/30">
                        <CloudRain className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Detekce blesků</h3>
                        <p className="text-gray-300 text-sm">Sledování bouřkové aktivity</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </main>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
