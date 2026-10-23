import { AppShell, PageHeader } from "@/components/layout/app-shell";

export default function ParcoursPage() {
  return (
    <AppShell active="/parcours">
      <PageHeader
        title="Mon parcours"
        subtitle="Construisez un programme sur 21, 30, 60, 90 ou 180 jours, calibré sur vos objectifs et le temps dont vous disposez réellement."
        back={{ href: "/dashboard", label: "Tableau de bord" }}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900">
            Créer mon parcours
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Le parcours est généré par des règles déterministes, puis relu par
            l&apos;agent Planificateur.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="goal"
                className="block text-sm font-medium text-slate-700"
              >
                Quel est ton objectif principal ?
              </label>
              <input
                id="goal"
                type="text"
                placeholder="Ex. Mieux gérer mon stress au quotidien"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              />
              <p className="mt-1.5 text-xs text-slate-500">
                Utilisez un indicateur mesurable si possible : cela rendra vos
                bilans plus utiles.
              </p>
            </div>

            <fieldset>
              <legend className="text-sm font-medium text-slate-700">
                Durée du parcours
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {[21, 30, 60, 90, 180].map((duration) => (
                  <button
                    key={duration}
                    type="button"
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {duration} jours
                  </button>
                ))}
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="duration-select"
                className="block text-sm font-medium text-slate-700"
              >
                Ou choisissez une durée personnalisée
              </label>
              <select
                id="duration-select"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              >
                <option value="">Sélectionner une durée</option>
                <option value="21">21 jours</option>
                <option value="30">30 jours</option>
                <option value="60">60 jours</option>
                <option value="90">90 jours</option>
                <option value="180">180 jours</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-slate-700"
              >
                Temps disponible chaque jour
              </label>
              <select
                id="time"
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
              >
                <option value="5">5 minutes</option>
                <option value="10">10 minutes</option>
                <option value="15">15 minutes</option>
                <option value="20">20 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
              </select>
            </div>
          </div>

          <button
            type="button"
            disabled
            className="btn-primary mt-8 w-full cursor-not-allowed opacity-60"
          >
            Générer mon parcours — disponible après configuration Supabase
          </button>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Vos parcours
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Aucun parcours actif. Le parcours créé apparaîtra ici avec sa
              progression.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Ce que le parcours garantit
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>✓ Une durée et un objectif clairement définis</li>
              <li>✓ Une charge quotidienne qui respecte votre temps</li>
              <li>✓ Des jalons et des indicateurs observables</li>
              <li>✓ La possibilité de suspendre, reprendre ou arrêter</li>
            </ul>
            <p className="mt-4 border-t border-slate-200 pt-4 text-xs text-slate-500">
              Aucun parcours ne garantit un résultat. L&apos;accompagnement propose
              des actions, vous décidez.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
