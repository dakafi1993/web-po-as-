import { PageLayout } from '../components/PageLayout';

export function PocasiKlimaPage() {
  return (
    <PageLayout title="Co je počasí a co klima?">
      <h2 className="text-2xl font-bold text-cyan-300 mb-4">Počasí</h2>
      <p className="mb-6">
        <strong>Počasí</strong> je okamžitý stav atmosféry v daném místě a čase. Zahrnuje všechny meteorologické 
        jevy, které v danou chvíli probíhají - teplotu vzduchu, vlhkost, tlak vzduchu, vítr, oblačnost, srážky a viditelnost.
      </p>

      <p className="mb-6">
        Počasí se mění velmi rychle - v průběhu hodin nebo dnů. Může být slunečné, zatažené, deštivé, sněžité, 
        větrné nebo klidné. Tyto změny jsou způsobeny pohybem vzduchových mas, tlakovými systémy a dalšími 
        atmosférickými jevy.
      </p>

      <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-300 mb-3">Prvky počasí:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Teplota vzduchu</li>
          <li>Tlak vzduchu</li>
          <li>Vlhkost vzduchu</li>
          <li>Rychlost a směr větru</li>
          <li>Oblačnost</li>
          <li>Srážky (déšť, sníh, krupobití)</li>
          <li>Viditelnost</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-12">Klima</h2>
      <p className="mb-6">
        <strong>Klima</strong> je průměrný stav počasí v určité oblasti za dlouhé období (typicky 30 let a více). 
        Popisuje typické povětrnostní podmínky, jejich pravidelné střídání během roku a extrémní hodnoty, 
        které se mohou vyskytnout.
      </p>

      <p className="mb-6">
        Zatímco počasí se může měnit ze dne na den, klima je relativně stabilní a mění se velmi pomalu 
        v průběhu desetiletí až staletí. Klima určuje, jaké druhy rostlin a živočichů mohou v dané oblasti žít.
      </p>

      <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-cyan-300 mb-3">Klimatické charakteristiky:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Průměrné roční teploty</li>
          <li>Roční úhrn srážek</li>
          <li>Roční chod teploty</li>
          <li>Rozložení srážek během roku</li>
          <li>Extrémní hodnoty (nejnižší/nejvyšší teplota)</li>
          <li>Převládající směry větru</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-12">Hlavní rozdíly</h2>
      
      <div className="overflow-x-auto my-8">
        <table className="w-full border border-white/20">
          <thead className="bg-white/10">
            <tr>
              <th className="border border-white/20 px-4 py-3 text-left">Aspekt</th>
              <th className="border border-white/20 px-4 py-3 text-left">Počasí</th>
              <th className="border border-white/20 px-4 py-3 text-left">Klima</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3 font-bold">Časové měřítko</td>
              <td className="border border-white/20 px-4 py-3">Krátkodobé (hodiny, dny)</td>
              <td className="border border-white/20 px-4 py-3">Dlouhodobé (roky, desetiletí)</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3 font-bold">Variabilita</td>
              <td className="border border-white/20 px-4 py-3">Velmi proměnlivé</td>
              <td className="border border-white/20 px-4 py-3">Relativně stabilní</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="border border-white/20 px-4 py-3 font-bold">Předpověditelnost</td>
              <td className="border border-white/20 px-4 py-3">Několik dní dopředu</td>
              <td className="border border-white/20 px-4 py-3">Trendy v desetiletích</td>
            </tr>
            <tr>
              <td className="border border-white/20 px-4 py-3 font-bold">Příklad</td>
              <td className="border border-white/20 px-4 py-3">"Dnes prší"</td>
              <td className="border border-white/20 px-4 py-3">"Vysočina má mírné klima"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-8">
        Na naší meteorologické stanici v Nové Vsi u Batelova měříme denní počasí již od roku 2008. 
        Díky dlouhodobému záznamu dat můžeme pozorovat nejen aktuální počasí, ale také klimatické trendy 
        a změny v naší oblasti.
      </p>
    </PageLayout>
  );
}
