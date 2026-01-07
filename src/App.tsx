import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { TemperaturesPage } from './pages/TemperaturesPage';
import { BeafortovaStupnicePage } from './pages/BeafortovaStupnicePage';
import { PocasiKlimaPage } from './pages/PocasiKlimaPage';
import { DestekoveSrazkyPage } from './pages/DestekoveSrazkyPage';
import { FotoPage } from './pages/FotoPage';
import { KontaktPage } from './pages/KontaktPage';
import { SimplePage } from './pages/SimplePage';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Temperature archives */}
        <Route path="/temperatures/:year" element={<TemperaturesPage />} />
        
        {/* Specific pages */}
        <Route path="/beaufortova-stupnice" element={<BeafortovaStupnicePage />} />
        <Route path="/pocasi-klima" element={<PocasiKlimaPage />} />
        <Route path="/destove-srazky" element={<DestekoveSrazkyPage />} />
        <Route path="/foto" element={<FotoPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
        
        {/* Simple content pages */}
        <Route path="/bourky-na-vysocine" element={<SimplePage title="Bouřky na Vysočině" />} />
        <Route path="/orkany" element={<SimplePage title="Orkány a jejich škody" />} />
        <Route path="/orkany-2020" element={<SimplePage title="Orkány a jejich škody 2020" />} />
        <Route path="/detekce-blesku" element={<SimplePage title="Detekce blesků nad ČR" />} />
        <Route path="/meteorologicky-radar" element={<SimplePage title="Meteorologický radar" />} />
        <Route path="/radar-bourky" element={<SimplePage title="Radar bouřky" />} />
        <Route path="/niederschlagsradar" element={<SimplePage title="Niederschlagsradar" />} />
        <Route path="/druzice-eumetsat" element={<SimplePage title="Družice Eumetsat" />} />
        <Route path="/online-data" element={<SimplePage title="Online data" />} />
        <Route path="/mesicni-statistika" element={<SimplePage title="Měsíční statistika teploty (Online)" />} />
        <Route path="/snehova-pokryvka" element={<SimplePage title="Sněhová pokrývka v cm" />} />
        <Route path="/mlhy" element={<SimplePage title="Mlhy na Vysočině" />} />
        <Route path="/srazky" element={<SimplePage title="Srážky a jejich složení" />} />
        <Route path="/teplota-vzduchu" element={<SimplePage title="Teplota vzduchu" />} />
        <Route path="/slunecni-zareni" element={<SimplePage title="Sluneční záření" />} />
        <Route path="/tlakova-nize" element={<SimplePage title="Tlaková níže" />} />
        <Route path="/tlakova-vyse" element={<SimplePage title="Tlaková výše" />} />
        <Route path="/pocasi-tlakova-vyse" element={<SimplePage title="Počasí v tlakové výši" />} />
        <Route path="/pocasi-tlakova-nize" element={<SimplePage title="Počasí v tlakové níži" />} />
        <Route path="/vznik-teple-fronty" element={<SimplePage title="Vznik teplé fronty" />} />
        <Route path="/vznik-studene-fronty" element={<SimplePage title="Vznik studené fronty" />} />
        <Route path="/vznik-okluzni-fronty" element={<SimplePage title="Vznik okluzní fronty" />} />
        <Route path="/povidani-blesky" element={<SimplePage title="Povídání o blescích" />} />
        <Route path="/povidani-vitr" element={<SimplePage title="Povídání o rychlosti větru" />} />
        <Route path="/pouzivane-pristroje" element={<SimplePage title="Používané přístroje" />} />
        <Route path="/popis-pristroju" element={<SimplePage title="Popis přístrojů" />} />
        <Route path="/stanice-chmu" element={<SimplePage title="Meteorologické stanice ČHMÚ" />} />
        <Route path="/kontakty-stanic" element={<SimplePage title="Kontakty meteorologických stanic" />} />
        <Route path="/stanice-kostelni-myslova" element={<SimplePage title="Naše nejbližší Meteorologická stanice Kostelní Myslová" />} />
        <Route path="/predpoved-vysocina" element={<SimplePage title="Předpověď počasí a grafy pro Vysočinu" />} />
        <Route path="/geologie-vysocina" element={<SimplePage title="Geologie a geomorfologie kraje Vysočina" />} />
        <Route path="/nejvyssi-vrchol" element={<SimplePage title="Nejvyšší vrchol" />} />
        <Route path="/studanka-pane" element={<SimplePage title="Studánka Páně" />} />
        <Route path="/gps" element={<SimplePage title="Odkaz na GPS" />} />
        
        {/* Storm/pressure pages */}
        <Route path="/tlakova-nize-andrea" element={<SimplePage title="Pokles tlaku při tlakové níži Andrea" />} />
        <Route path="/tlakova-nize-fabienne" element={<SimplePage title="Pokles tlaku při tlakové níži Fabienne" />} />
        <Route path="/tlakova-nize-joachim" element={<SimplePage title="Pokles tlaku při tlakové níži Joachim" />} />
        <Route path="/tlakova-nize-mischka" element={<SimplePage title="Pokles tlaku při tlakové níži Mischka" />} />
        <Route path="/tlakova-nize-niklas" element={<SimplePage title="Pokles tlaku při tlakové níži Niklas" />} />
        <Route path="/tlakova-nize-herwart" element={<SimplePage title="Pokles tlaku při tlakové níži Herwart" />} />
        <Route path="/tlakova-nize-sabine" element={<SimplePage title="Pokles tlaku při tlakové níži Sabine" />} />
        <Route path="/orkan-xaver" element={<SimplePage title="Pokles tlaku při orkánu Xaver" />} />
        <Route path="/tlakova-nize-zehra" element={<SimplePage title="Pokles tlaku při tlakové níži Zehra" />} />
        <Route path="/tlakova-nize-joachim-2011" element={<SimplePage title="Tlaková níže Joachim a vichřice během dne 16.12. 2011" />} />
        <Route path="/tlakova-nize-andrea-2012" element={<SimplePage title="Tlaková níže Andrea dne 5.1. 2012" />} />
        
        {/* Admin routes - protected */}
        <Route path="/admin" element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
