import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900">SPIRIT 12</h1>
          <nav className="flex gap-6 text-sm">
            <Link href="/dashboard" className="text-slate-900 font-medium">Tableau de bord</Link>
            <Link href="/parcours" className="text-slate-600 hover:text-slate-900">Mon parcours</Link>
            <Link href="/lois" className="text-slate-600 hover:text-slate-900">Les 12 lois</Link>
            <Link href="/journal" className="text-slate-600 hover:text-slate-900">Journal</Link>
            <Link href="/progression" className="text-slate-600 hover:text-slate-900">Progression</Link>
            <Link href="/profil" className="text-slate-600 hover:text-slate-900">Profil</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Bonjour !</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <h3 className="font-semibold mb-2">Mission du jour</h3>
            <p className="text-slate-600 text-sm mb-4">Aucune mission active</p>
            <Link href="/parcours" className="text-slate-900 font-medium text-sm">Créer mon parcours →</Link>
          </div>
          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <h3 className="font-semibold mb-2">Progression</h3>
            <p className="text-slate-600 text-sm mb-4">0 jour complété</p>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div className="bg-slate-900 h-2 rounded-full" style={{width: '0%'}}></div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <h3 className="font-semibold mb-2">Journal</h3>
            <p className="text-slate-600 text-sm mb-4">Aucune entrée aujourd'hui</p>
            <Link href="/journal" className="text-slate-900 font-medium text-sm">Écrire dans mon journal →</Link>
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h3 className="font-semibold mb-4">Commencer</h3>
          <p className="text-slate-600 mb-4">Crée ton parcours personnalisé pour commencer ton accompagnement.</p>
          <Link href="/parcours" className="inline-block px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800">
            Créer mon parcours
          </Link>
        </div>
      </main>
    </div>
  );
}
