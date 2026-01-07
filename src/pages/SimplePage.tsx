import { PageLayout } from '../components/PageLayout';

interface SimplePageProps {
  title: string;
}

export function SimplePage({ title }: SimplePageProps) {
  return (
    <PageLayout title={title}>
      <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-8 text-center">
        <p className="text-lg mb-4">
          📝 Obsah této stránky bude doplněn administrátorem.
        </p>
        <p className="text-gray-400 text-sm">
          Pokud jste administrátor, můžete přidat obsah přes{' '}
          <a href="/admin" className="text-cyan-400 hover:underline">admin panel</a>.
        </p>
      </div>
    </PageLayout>
  );
}
