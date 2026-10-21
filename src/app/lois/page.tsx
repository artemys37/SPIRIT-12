import Link from "next/link";

const laws = [
  { slug: "loi-1", title: "Loi 1 - La Responsabilité", summary: "Nous sommes responsables de notre réalité." },
  { slug: "loi-2", title: "Loi 2 - L'Attraction", summary: "Ce sur quoi nous nous concentrons se manifeste." },
  { slug: "loi-3", title: "Loi 3 - L'Action", summary: "L'intention doit s'accompagner d'action." },
  { slug: "loi-4", title: "Loi 4 - Le Présent", summary: "Le pouvoir est dans l'instant présent." },
  { slug: "loi-5", title: "Loi 5 - L'Équilibre", summary: "Tout dans l'univers tend vers l'équilibre." },
  { slug: "loi-6", title: "Loi 6 - Le Don", summary: "Donner ouvre la voie à recevoir." },
  { slug: "loi-7", title: "Loi 7 - Le Karma", summary: "Chaque action a sa conséquence." },
  { slug: "loi-8", title: "Loi 8 - Le Changement", summary: "Le changement est la seule constante." },
  { slug: "loi-9", title: "Loi 9 - L'Unité", summary: "Tout est interconnecté." },
  { slug: "loi-10", title: "Loi 10 - Le Pardon", summary: "Le pardon libère celui qui pardonne." },
  { slug: "loi-11", title: "Loi 11 - La Foi", summary: "La foi précède la manifestation." },
  { slug: "loi-12", title: "Loi 12 - L'Amour", summary: "L'amour est la force la plus puissante." },
];

export default function LoisPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-slate-900">Les 12 Lois Spirituelles</h1>
          <p className="text-slate-600 mt-2">Étudiez et appliquez ces principes dans votre vie quotidienne</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laws.map((law) => (
            <Link
              key={law.slug}
              href={`/lois/${law.slug}`}
              className="block p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-slate-900 mb-2">{law.title}</h2>
              <p className="text-slate-600">{law.summary}</p>
              <span className="inline-block mt-4 text-slate-900 font-medium">Découvrir →</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
