import { PageLayout } from '../components/PageLayout';

export function DestekoveSrazkyPage() {
  return (
    <PageLayout title="Dešťové srážky v mm">
      <p className="mb-6">
        Dešťové srážky jsou jedním z nejdůležitějších meteorologických prvků, které sledujeme na naší stanici. 
        Množství srážek měříme v milimetrech (mm), přičemž 1 mm odpovídá 1 litru vody na 1 m².
      </p>

      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-8">Měření srážek</h2>
      <p className="mb-6">
        Srážky měříme pomocí srážkoměru (ombrometru), který zachycuje veškerou vodu, která spadne na jeho 
        sběrnou plochu. Měření provádíme třikrát denně v časech 6:00, 12:00 a 18:00 hodin.
      </p>

      <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-blue-300 mb-3">Klasifikace intenzity deště:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Slabý déšť:</strong> méně než 2,5 mm/hod</li>
          <li><strong>Mírný déšť:</strong> 2,6 - 10 mm/hod</li>
          <li><strong>Silný déšť:</strong> 10 - 50 mm/hod</li>
          <li><strong>Přívalový déšť:</strong> více než 50 mm/hod</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-cyan-300 mb-4 mt-8">Srážkové úhrny na Vysočině</h2>
      <p className="mb-6">
        Vysočina patří mezi oblasti s průměrnými ročními srážkami kolem 600-700 mm. Nejvíce srážek 
        spadne obvykle v letních měsících (červen-srpen), kdy se vyskytují i bouřkové přeháňky.
      </p>

      <p className="mb-6">
        Naše meteorologická stanice zaznamenává všechna srážková data, která jsou k dispozici v archivech 
        podle jednotlivých let. Dlouhodobé sledování nám umožňuje pozorovat trendy a odchylky od normálu.
      </p>

      <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-xl p-6 my-8">
        <h3 className="text-xl font-bold text-cyan-300 mb-3">Zajímavosti:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Rekordní denní úhrn srážek v ČR byl 345,1 mm (Nová Louka, 1897)</li>
          <li>Průměrné roční srážky v ČR: cca 700 mm</li>
          <li>Nejvlhčí měsíc na Vysočině: červenec</li>
          <li>Nejsušší měsíc na Vysočině: únor</li>
        </ul>
      </div>
    </PageLayout>
  );
}
