import { PageLayout } from '../components/PageLayout';

export function FotoPage() {
  return (
    <PageLayout title="Fotogalerie">
      <p className="mb-8 text-lg">
        Fotografie zajímavých meteorologických jevů, bouřek, orkánů a přírodních úkazů zaznamenaných 
        v okolí naší meteorologické stanice v Nové Vsi u Batelova.
      </p>

      <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-6 mb-8">
        <p className="text-center text-gray-300">
          📸 Fotogalerie bude doplněna administrátorem přes admin panel.
        </p>
      </div>

      <p className="text-gray-400 text-sm">
        Pokud jste administrátor, můžete přidávat fotografie přes <a href="/login" className="text-cyan-400 hover:underline">admin panel</a>.
      </p>
    </PageLayout>
  );
}
