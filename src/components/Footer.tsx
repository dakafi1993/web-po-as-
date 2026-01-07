export function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-xl border-t border-white/10 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Meteorologická stanice
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nová Ves u Batelova<br />
              okres Jihlava<br />
              Josef Soukup
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Rychlé odkazy
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/kontakt" className="text-gray-300 hover:text-cyan-300 transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/online-data" className="text-gray-300 hover:text-cyan-300 transition-colors">
                  Online data
                </a>
              </li>
              <li>
                <a href="/foto" className="text-gray-300 hover:text-cyan-300 transition-colors">
                  Fotogalerie
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              O projektu
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Měření a záznam meteorologických dat probíhá denně v časech 6:00, 12:00 a 18:00 hodin 
              po celý rok.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} meteostanicenovaves.netstranky.cz - Všechna práva vyhrazena
          </p>
        </div>
      </div>
    </footer>
  );
}
