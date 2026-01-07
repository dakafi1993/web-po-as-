import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuSections = [
    {
      title: 'Hlavní',
      items: [
        { label: 'VŠE O POČASÍ', href: '/' },
        { label: 'Online data', href: '/online-data' },
        { label: 'Měsíční statistika teploty (Online)', href: '/mesicni-statistika' },
      ]
    },
    {
      title: 'Naměřené teploty',
      items: [
        { label: 'Naměřené teploty rok 2026', href: '/temperatures/2026' },
        { label: 'Naměřené teploty rok 2025', href: '/temperatures/2025' },
        { label: 'Naměřené teploty rok 2024', href: '/temperatures/2024' },
        { label: 'Naměřené teploty rok 2023', href: '/temperatures/2023' },
        { label: 'Naměřené teploty rok 2022', href: '/temperatures/2022' },
        { label: 'Naměřené teploty rok 2021', href: '/temperatures/2021' },
        { label: 'Naměřené teploty rok 2020', href: '/temperatures/2020' },
        { label: 'Naměřené teploty rok 2019', href: '/temperatures/2019' },
        { label: 'Naměřené teploty rok 2018', href: '/temperatures/2018' },
        { label: 'Naměřené teploty rok 2017', href: '/temperatures/2017' },
        { label: 'Naměřené teploty rok 2016', href: '/temperatures/2016' },
        { label: 'Naměřené teploty rok 2015', href: '/temperatures/2015' },
        { label: 'Naměřené teploty rok 2014', href: '/temperatures/2014' },
        { label: 'Naměřené teploty rok 2013', href: '/temperatures/2013' },
        { label: 'Naměřené teploty rok 2012', href: '/temperatures/2012' },
        { label: 'Naměřené teploty rok 2011', href: '/temperatures/2011' },
        { label: 'Naměřené teploty rok 2010', href: '/temperatures/2010' },
        { label: 'Naměřené teploty rok 2009', href: '/temperatures/2009' },
        { label: 'Naměřené teploty rok 2008', href: '/temperatures/2008' },
      ]
    },
    {
      title: 'Bouřky a orkány',
      items: [
        { label: 'Bouřky na Vysočině', href: '/bourky-na-vysocine' },
        { label: 'Orkány a jejich škody', href: '/orkany' },
        { label: 'Orkány a jejich škody 2020', href: '/orkany-2020' },
        { label: 'Pokles tlaku při tlakové níži Andrea', href: '/tlakova-nize-andrea' },
        { label: 'Pokles tlaku při tlakové níži Fabienne', href: '/tlakova-nize-fabienne' },
        { label: 'Pokles tlaku při tlakové níži Joachim', href: '/tlakova-nize-joachim' },
        { label: 'Pokles tlaku při tlakové níži Mischka', href: '/tlakova-nize-mischka' },
        { label: 'Pokles tlaku při tlakové níži Niklas', href: '/tlakova-nize-niklas' },
        { label: 'Pokles tlaku při tlakové níži Herwart', href: '/tlakova-nize-herwart' },
        { label: 'Pokles tlaku při tlakové níži Sabine', href: '/tlakova-nize-sabine' },
        { label: 'Pokles tlaku při orkánu Xaver', href: '/orkan-xaver' },
        { label: 'Pokles tlaku při tlakové níži Zehra', href: '/tlakova-nize-zehra' },
        { label: 'Tlaková níže Joachim a vichřice během dne 16.12. 2011', href: '/tlakova-nize-joachim-2011' },
        { label: 'Tlaková níže Andrea dne 5.1. 2012', href: '/tlakova-nize-andrea-2012' },
      ]
    },
    {
      title: 'Meteorologie - základy',
      items: [
        { label: 'Co je počasí a co klima?', href: '/pocasi-klima' },
        { label: 'Beaufortova stupnice', href: '/beaufortova-stupnice' },
        { label: 'Teplota vzduchu', href: '/teplota-vzduchu' },
        { label: 'Srážky a jejich složení', href: '/srazky' },
        { label: 'Dešťové srážky v mm', href: '/destove-srazky' },
        { label: 'Sněhová pokrývka v cm', href: '/snehova-pokryvka' },
        { label: 'Mlhy na Vysočině', href: '/mlhy' },
        { label: 'Sluneční záření', href: '/slunecni-zareni' },
        { label: 'Tlaková níže', href: '/tlakova-nize' },
        { label: 'Tlaková výše', href: '/tlakova-vyse' },
        { label: 'Počasí v tlakové výši', href: '/pocasi-tlakova-vyse' },
        { label: 'Počasí v tlakové níži', href: '/pocasi-tlakova-nize' },
        { label: 'Vznik teplé fronty', href: '/vznik-teple-fronty' },
        { label: 'Vznik studené fronty', href: '/vznik-studene-fronty' },
        { label: 'Vznik okluzní fronty', href: '/vznik-okluzni-fronty' },
      ]
    },
    {
      title: 'Detekce a radar',
      items: [
        { label: 'Detekce blesků nad ČR', href: '/detekce-blesku' },
        { label: 'Meteorologický radar', href: '/meteorologicky-radar' },
        { label: 'Radar bouřky', href: '/radar-bourky' },
        { label: 'Niederschlagsradar', href: '/niederschlagsradar' },
        { label: 'Družice Eumetsat', href: '/druzice-eumetsat' },
        { label: 'Povídání o blescích', href: '/povidani-blesky' },
        { label: 'Povídání o rychlosti větru', href: '/povidani-vitr' },
      ]
    },
    {
      title: 'Přístroje a stanice',
      items: [
        { label: 'Používané přístroje', href: '/pouzivane-pristroje' },
        { label: 'Popis přístrojů', href: '/popis-pristroju' },
        { label: 'Meteorologické stanice ČHMÚ', href: '/stanice-chmu' },
        { label: 'Kontakty meteorologických stanic', href: '/kontakty-stanic' },
        { label: 'Naše nejbližší Meteorologická stanice Kostelní Myslová', href: '/stanice-kostelni-myslova' },
        { label: 'Předpověď počasí a grafy pro Vysočinu', href: '/predpoved-vysocina' },
      ]
    },
    {
      title: 'Vysočina',
      items: [
        { label: 'Geologie a geomorfologie kraje Vysočina', href: '/geologie-vysocina' },
        { label: 'Nejvyšší vrchol', href: '/nejvyssi-vrchol' },
        { label: 'Studánka Páně', href: '/studanka-pane' },
        { label: 'Odkaz na GPS', href: '/gps' },
      ]
    },
    {
      title: 'Ostatní',
      items: [
        { label: 'Foto', href: '/foto' },
        { label: 'Kontakt', href: '/kontakt' },
      ]
    }
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen
          w-80 lg:w-80 bg-[#1e3a5f] shadow-2xl
          transform transition-transform duration-300 ease-in-out z-50
          flex flex-col
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header - fixed */}
          <div className="bg-[#2a4d7a] p-4 border-b border-[#3d5f8a] flex items-center justify-between flex-shrink-0">
            <h2 className="text-white font-bold text-xl">Menu</h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-white/10 rounded transition-all duration-300"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Menu Items - scrollable */}
          <div className="flex-1 overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-[#3d5f8a] scrollbar-track-[#1e3a5f]">
            {menuSections.map((section, idx) => (
              <div key={idx} className="mb-0">
                {section.title !== 'Hlavní' && (
                  <div className="px-4 py-2 bg-[#1a3152] border-t border-[#2a4563]">
                    <h3 className="text-gray-300 font-semibold text-xs uppercase tracking-wider">
                      {section.title}
                    </h3>
                  </div>
                )}
                <ul className="space-y-0">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="block px-4 py-3 text-white hover:bg-[#2a4d7a] border-b border-[#2a4563] transition-colors duration-200 text-[15px]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Oblíbené odkazy section - fixed at bottom */}
          <div className="bg-[#1a3152] border-t border-[#2a4563] flex-shrink-0">
            <div className="px-4 py-3">
              <h3 className="text-white font-semibold text-base mb-3">Oblíbené odkazy</h3>
              <a 
                href="http://radar.bourky.cz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-[#2d5573] hover:bg-[#3a6685] rounded-lg transition-colors text-white"
              >
                <span className="text-orange-400">⚡</span>
                <span>Radar bouřky</span>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
