import Link from "next/link";

export default function ProgressionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/dashboard" className="text-slate-600 hover:text-slate-900 mb-2 inline-block">← Tableau de bord</Link>
          <h1 className="text-2xl font-bold text-slate-900">Ma progression</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="p-6 bg-white rounded-xl border shadow-sm text-center">
            <div className="text-3xl font-bold text-slate-900">0</div>
            <div className="text-sm text-slate-600 mt-1">Jours complétés</div>
          </div>
          <div className="p-6 bg-white rounded-xl border shadow-sm text-center">
            <div className="text-3xl font-bold text-slate-900">0</div>
            <div className="text-sm text-slate-600 mt-1">Missions réalisées</div>
          </div>
          <div className="p-6 bg-white rounded-xl border shadow-sm text-center">
            <div className="text-3xl font-bold text-slate-900">0h</div>
            <div className="text-sm text-slate-600 mt-1">Temps consacré</div>
          </div>
          <div className="p-6 bg-white rounded-xl border shadow-sm text-center">
            <div className="text-3xl font-bold text-slate-900">0</div>
            <div className="text-sm text-slate-600 mt-1">Série en cours</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Statistiques hebdomadaires</h2>
          <p className="text-slate-600">Aucune donnée disponible. Crée ton parcours pour commencer à suivre ta progression.</p>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Agent Progression</h2>
          <p className="text-slate-600 mb-4">L&apos;agent analysera tes indicateurs réels pour te proposer des ajustements bienveillants.</p>
          <button className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800">Demander un bilan (Sprint 9)</button>
        </div>
      </main>
    </div>
  );
}
