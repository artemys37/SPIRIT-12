import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-slate-900">Administration SPIRIT 12</h1>
          <p className="text-slate-600 mt-1">Accès réservé aux administrateurs</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <h2 className="font-semibold mb-2">Contenu</h2>
            <p className="text-slate-600 text-sm mb-4">Gérer les 12 lois et leçons</p>
            <Link href="/admin/contenu" className="text-slate-900 font-medium text-sm">Gérer →</Link>
          </div>
          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <h2 className="font-semibold mb-2">Utilisateurs</h2>
            <p className="text-slate-600 text-sm mb-4">Liste et gestion</p>
            <Link href="/admin/utilisateurs" className="text-slate-900 font-medium text-sm">Gérer →</Link>
          </div>
          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <h2 className="font-semibold mb-2">Métriques</h2>
            <p className="text-slate-600 text-sm mb-4">Parcours, missions, IA</p>
            <span className="text-slate-400 text-sm">À venir</span>
          </div>
          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <h2 className="font-semibold mb-2">Tâches planifiées</h2>
            <p className="text-slate-600 text-sm mb-4">Statut et logs</p>
            <span className="text-slate-400 text-sm">À venir</span>
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-6">Routes admin protégées côté serveur (Sprint 11)</p>
      </main>
    </div>
  );
}
