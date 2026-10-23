import Link from "next/link";
import { AppShell, StatCard } from "@/components/layout/app-shell";

export default function DashboardPage() {
  return (
    <AppShell active="/dashboard">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Bonjour !
        </h1>
        <p className="mt-2 text-slate-600">
          Voici où vous en êtes. Chaque jour compte, mais rien ne se perd si un
          jour passe.
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Missions réalisées" value="0" hint="Aucune mission validée" />
        <StatCard label="Série en cours" value="0" hint="Jours consécutifs" />
        <StatCard label="Temps consacré" value="0 min" hint="Cumul du parcours" />
        <StatCard label="Lois abordées" value="0 / 12" hint="Progression contenu" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6 lg:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Mission du jour
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Aucune mission active pour le moment. Créez un parcours pour
                recevoir votre première mission personnalisée.
              </p>
            </div>
            <span
              aria-hidden
              className="hidden h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl text-brand-600 sm:grid"
            >
              ◎
            </span>
          </div>
          <Link href="/parcours" className="btn-primary mt-6">
            Créer mon parcours
          </Link>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold text-slate-900">Journal privé</h2>
          <p className="mt-2 text-sm text-slate-600">
            Personne ne lit vos reflections. Le journal n&apos;est jamais transmis
            aux agents sans votre consentement explicite.
          </p>
          <Link href="/journal" className="btn-secondary mt-6 w-full">
            Écrire une entrée
          </Link>
        </div>
      </div>

      <div className="card mt-6 p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Prochaine étape
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Le questionnaire de départ permet de calibrer votre parcours sur vos
          objectifs, votre temps disponible et vos préférences.
        </p>
        <Link href="/parcours" className="mt-4 inline-flex text-sm font-semibold text-brand-600 hover:text-brand-700">
          Commencer le questionnaire →
        </Link>
      </div>
    </AppShell>
  );
}
