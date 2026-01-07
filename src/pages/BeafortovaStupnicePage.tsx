import { PageLayout } from '../components/PageLayout';

export function BeafortovaStupnicePage() {
  return (
    <PageLayout title="Beaufortova stupnice">
      <p className="mb-6">
        Beaufortova stupnice (také Beaufortova škála) je empirická míra používaná k popisu síly větru 
        podle pozorovatelných účinků na souši či na moři. Stupnice je pojmenována po irském hydrografovi 
        admirálu Francisi Beaufortovi (1774–1857), který ji vytvořil v roce 1805.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border border-white/20">
          <thead className="bg-white/10">
            <tr>
              <th className="border border-white/20 px-4 py-3 text-left">Stupeň</th>
              <th className="border border-white/20 px-4 py-3 text-left">Označení</th>
              <th className="border border-white/20 px-4 py-3 text-left">Rychlost větru (km/h)</th>
              <th className="border border-white/20 px-4 py-3 text-left">Projevy na souši</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3">0</td>
              <td className="border border-white/20 px-4 py-3">Bezvětří</td>
              <td className="border border-white/20 px-4 py-3">&lt; 1</td>
              <td className="border border-white/20 px-4 py-3">Kouř stoupá svisle vzhůru</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3">1</td>
              <td className="border border-white/20 px-4 py-3">Vánek</td>
              <td className="border border-white/20 px-4 py-3">1-5</td>
              <td className="border border-white/20 px-4 py-3">Směr větru lze poznat podle kouře</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3">2</td>
              <td className="border border-white/20 px-4 py-3">Slabý vítr</td>
              <td className="border border-white/20 px-4 py-3">6-11</td>
              <td className="border border-white/20 px-4 py-3">Listí šelestí, vlající vlajky</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3">3</td>
              <td className="border border-white/20 px-4 py-3">Mírný vítr</td>
              <td className="border border-white/20 px-4 py-3">12-19</td>
              <td className="border border-white/20 px-4 py-3">Listy a tenké větve se pohybují</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3">4</td>
              <td className="border border-white/20 px-4 py-3">Dost čerstvý vítr</td>
              <td className="border border-white/20 px-4 py-3">20-28</td>
              <td className="border border-white/20 px-4 py-3">Zvedá prach a kousky papíru</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3">5</td>
              <td className="border border-white/20 px-4 py-3">Čerstvý vítr</td>
              <td className="border border-white/20 px-4 py-3">29-38</td>
              <td className="border border-white/20 px-4 py-3">Malé stromy se pohybují</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3">6</td>
              <td className="border border-white/20 px-4 py-3">Silný vítr</td>
              <td className="border border-white/20 px-4 py-3">39-49</td>
              <td className="border border-white/20 px-4 py-3">Velké větve se pohybují</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3">7</td>
              <td className="border border-white/20 px-4 py-3">Prudký vítr</td>
              <td className="border border-white/20 px-4 py-3">50-61</td>
              <td className="border border-white/20 px-4 py-3">Celé stromy se pohybují</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3">8</td>
              <td className="border border-white/20 px-4 py-3">Bouřlivý vítr</td>
              <td className="border border-white/20 px-4 py-3">62-74</td>
              <td className="border border-white/20 px-4 py-3">Láme větve stromů</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3">9</td>
              <td className="border border-white/20 px-4 py-3">Vichřice</td>
              <td className="border border-white/20 px-4 py-3">75-88</td>
              <td className="border border-white/20 px-4 py-3">Strhává tašky ze střech</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3">10</td>
              <td className="border border-white/20 px-4 py-3">Silná vichřice</td>
              <td className="border border-white/20 px-4 py-3">89-102</td>
              <td className="border border-white/20 px-4 py-3">Vyvrací stromy, poškozuje budovy</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3">11</td>
              <td className="border border-white/20 px-4 py-3">Orkán</td>
              <td className="border border-white/20 px-4 py-3">103-117</td>
              <td className="border border-white/20 px-4 py-3">Rozsáhlé škody</td>
            </tr>
            <tr>
              <td className="border border-white/20 px-4 py-3">12</td>
              <td className="border border-white/20 px-4 py-3">Hurikán</td>
              <td className="border border-white/20 px-4 py-3">&gt; 118</td>
              <td className="border border-white/20 px-4 py-3">Zpustošení, katastrofální škody</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6">
        Beaufortova stupnice je velmi užitečná pro rychlé posouzení síly větru bez použití přístrojů. 
        Na našílé meteorologické stanici pravidelně zaznamenáváme rychlost větru a zařazujeme ji podle této stupnice.
      </p>
    </PageLayout>
  );
}
