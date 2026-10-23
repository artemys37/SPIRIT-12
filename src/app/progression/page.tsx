import Link from "next/link";
import { AppShell, PageHeader, StatCard } from "@/components/layout/app-shell";

export default function ProgressionPage() {
  return (
    <AppShell active="/progression">
      <PageHeader
        title="Ma progression"
        subtitle="Des indicateurs calculés à partir de vos actions réellement enregistrées, jamais de scores Presentations comme une mesure de votre valeur."
        back={{ href: "/dashboard", label: "Tableau de bord" }}
      />

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Jours complétés" value="0" hint="Sur le parcours en cours" />
        <StatCard label="Missions réalisées" value="0" hint="Validations enregistrées" />
        <StatCard label="Temps consacré" value="0 min" hint="Cumul des missions" />
        <StatCard label="Jours manqués" value="0" hint="Aucun échec n'est compté" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900">
            Activité hebdomadaire
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Le graphique se remplira à partir des événements de mission
            enregistrés en base. Rien n&apos;est estimé ni inventé.
          </p>

          <div
            role="img"
            aria-label="Aucune donnée d'activité enregistrée pour le moment"
            className="mt-8 grid h-48 place-items-center rounded-xl border border-dashed border-slate-300 bg-slate-50"
          >
            <p className="text-sm text-slate-500">
              Aucune donnée enregistrée
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Semaine", "Mois", "Parcours complet"].map((period, index) => (
              <button
                key={period}
                type="button"
                className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-brand-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Bilan de l&apos;agent Progression
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              L&apos;agent analysera vos indicateurs réels pour vous proposer un
              ajustement : réduire une charge, fractionner une action ou
              maintenir le programme.
            </p>
            <button
              type="button"
              disabled
              className="btn-secondary mt-4 w-full cursor-not-allowed opacity-60"
            >
              Demander un bilan
            </button>
            <p className="mt-2 text-xs text-slate-500">
              Les changements majeurs du programme toujours soumis à votre
              confirmation.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Comment lire ces chiffres
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Ces indicateurs décrivent une activité, pas une valeur personnelle.
              Un jour manqué n&apos;est ni compté comme un échec, ni utilisé pour
              vous culpabiliser.
            </p>
            <Link
              href="/journal"
              className="mt-3 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Écrire dans mon journal →
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
