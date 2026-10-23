import { AppShell, PageHeader } from "@/components/layout/app-shell";

export default function JournalPage() {
  return (
    <AppShell active="/journal">
      <PageHeader
        title="Journal privé"
        subtitle="Un espace de réflexion qui vous appartient. Personne ne le lit à part vous."
        back={{ href: "/dashboard", label: "Tableau de bord" }}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6 lg:col-span-2">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Nouvelle entrée
            </h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              Aujourd&apos;hui
            </span>
          </div>

          <label htmlFor="entry" className="sr-only">
            Contenu de l&apos;entrée
          </label>
          <textarea
            id="entry"
            rows={10}
            disabled
            placeholder="Comment te sens-tu aujourd'hui ? Qu'as-tu observé ? De quoi es-tu reconnaissant ?"
            className="mt-4 w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-slate-50"
          />

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled
              className="btn-primary cursor-not-allowed opacity-60"
            >
              Enregistrer
            </button>
            <span className="text-xs text-slate-500">
              Disponible après configuration Supabase
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Confidentialité
            </h2>
            <ul className="mt-3 space-y-2.5 text-sm text-slate-600">
              <li className="flex gap-2">
                <span aria-hidden className="text-brand-600">
                  ◆
                </span>
                <span>
                  Le journal est privé par défaut et protégé par des politiques
                  d&apos;accès strictes.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="text-brand-600">
                  ◆
                </span>
                <span>
                  Il n&apos;est jamais injecté dans le contexte d&apos;un agent sans
                  votre consentement explicite.
                </span>
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="text-brand-600">
                  ◆
                </span>
                <span>
                  L&apos;agent Journal ne propose de questions que lorsque vous le
                  demandez.
                </span>
              </li>
            </ul>
          </div>

          <div className="card p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Questions de réflexion
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              L&apos;agent Journal pourra vous proposer des questions adaptées à
              votre parcours, sur simple demande.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Aucune entrée
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Vos entrées apparaîtront ici, de la plus récente à la plus
              ancienne.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
