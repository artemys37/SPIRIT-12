import Link from "next/link";

export default function LoiPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/lois" className="text-slate-600 hover:text-slate-900 mb-4 inline-block">← Retour aux lois</Link>
          <h1 className="text-3xl font-bold text-slate-900">Loi 6</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-xl border shadow-sm p-8">
          <p className="text-slate-600 mb-6">Contenu en cours de développement - À enrichir avec leçons, exemples et exercices.</p>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <h2 className="font-semibold mb-2">Leçon</h2>
              <p className="text-slate-600">À venir</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <h2 className="font-semibold mb-2">Exercice pratique</h2>
              <p className="text-slate-600">À venir</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <h2 className="font-semibold mb-2">Réflexion</h2>
              <p className="text-slate-600">À venir</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
