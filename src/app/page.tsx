import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">SPIRIT 12</h1>
          <nav className="flex gap-4">
            <Link href="/auth/login" className="text-slate-600 hover:text-slate-900">Connexion</Link>
            <Link href="/auth/signup" className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800">Commencer</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Transformez vos enseignements en actions quotidiennes
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Étudiez les 12 lois spirituelles, définissez vos objectifs et suivez votre progression avec un accompagnement IA bienveillant.
          </p>
          <Link href="/auth/signup" className="inline-block px-8 py-3 bg-slate-900 text-white rounded-lg text-lg hover:bg-slate-800">
            Créer mon parcours
          </Link>
        </section>

        <section className="max-w-5xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Parcours personnalisé</h3>
            <p className="text-slate-600">Un programme adapté à vos objectifs, votre temps disponible et vos priorités sur 21 à 180 jours.</p>
          </div>
          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Missions quotidiennes</h3>
            <p className="text-slate-600">Des actions concrètes et réalistes à réaliser chaque jour, sans culpabilisation.</p>
          </div>
          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Accompagnement IA encadré</h3>
            <p className="text-slate-600">Des agents bienveillants pour vous guider, sans promesses ni diagnostic médical.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
