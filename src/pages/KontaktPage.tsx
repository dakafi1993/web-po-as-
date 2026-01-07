import { PageLayout } from '../components/PageLayout';

export function KontaktPage() {
  return (
    <PageLayout title="Kontakt">
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-400/30">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6">Meteorologická stanice Nová Ves u Batelova</h2>
          
          <div className="space-y-4 text-lg">
            <div>
              <p className="text-gray-400 mb-1">Provozovatel:</p>
              <p className="text-white font-semibold">Josef Soukup</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">Lokalita:</p>
              <p className="text-white">Nová Ves u Batelova</p>
              <p className="text-white">okres Jihlava</p>
              <p className="text-white">kraj Vysočina</p>
            </div>

            <div>
              <p className="text-gray-400 mb-1">Email:</p>
              <a href="mailto:meteostanice@email.cz" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                meteostanice@email.cz
              </a>
            </div>

            <div>
              <p className="text-gray-400 mb-1">Web:</p>
              <a href="https://meteostanicenovaves.netstranky.cz/" className="text-cyan-400 hover:text-cyan-300 transition-colors break-all">
                meteostanicenovaves.netstranky.cz
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">O stanici</h2>
          <p className="mb-4">
            Meteorologická stanice v Nové Vsi u Batelova provádí pravidelná měření od roku 2008. 
            Měření probíhá každý den ve třech termínech - 6:00, 12:00 a 18:00 hodin, jak v létě tak v zimě.
          </p>
          <p>
            Všechna naměřená data jsou pečlivě zaznamenávána a archivována. Na těchto stránkách 
            najdete kompletní archiv teplot, informace o bouřkách, orkánech a dalších meteorologických jevech.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6">
          <h3 className="text-xl font-bold text-cyan-300 mb-4">Časy měření</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-3xl font-bold text-cyan-400">6:00</div>
              <div className="text-gray-400 text-sm mt-2">Ranní měření</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-3xl font-bold text-cyan-400">12:00</div>
              <div className="text-gray-400 text-sm mt-2">Polední měření</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-3xl font-bold text-cyan-400">18:00</div>
              <div className="text-gray-400 text-sm mt-2">Večerní měření</div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
