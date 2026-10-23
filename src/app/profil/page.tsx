import Link from "next/link";
import { AppShell, PageHeader } from "@/components/layout/app-shell";

export default function ProfilPage() {
  return (
    <AppShell active="/profil">
      <PageHeader
        title="Mon profil"
        subtitle="Vos informations, vos préférences et le contrôle sur vos données."
        back={{ href: "/dashboard", label: "Tableau de bord" }}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Informations personnelles
            </h2>
            <div className="mt-5 space-y-5">
              <div>
                <label
                  htmlFor="display-name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Nom d&apos;affichage
                </label>
                <input
                  id="display-name"
                  type="text"
                  disabled
                  placeholder="Facultatif"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="timezone"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Fuseau horaire
                  </label>
                  <select
                    id="timezone"
                    disabled
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-slate-50"
                  >
                    <option>Europe/Paris</option>
                    <option>Europe/London</option>
                    <option>America/New_York</option>
                    <option>Asia/Tokyo</option>
                  </select>
                  <p className="mt-1.5 text-xs text-slate-500">
                    Les missions et rappels utilisent ce fuseau.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="language"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Langue
                  </label>
                  <select
                    id="language"
                    disabled
                    className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-slate-50"
                  >
                    <option>Français</option>
                    <option>English</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="time-available"
                  className="block text-sm font-medium text-slate-700"
                >
                  Temps disponible par jour
                </label>
                <select
                  id="time-available"
                  disabled
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-slate-50"
                >
                  <option>5 minutes</option>
                  <option>10 minutes</option>
                  <option>15 minutes</option>
                  <option>20 minutes</option>
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              disabled
              className="btn-primary mt-6 cursor-not-allowed opacity-60"
            >
              Enregistrer les modifications
            </button>
          </div>

          <div className="card p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Notifications
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Les rappels sont non culpabilisants et respectent vos périodes
              silencieuses.
            </p>
            <div className="mt-5 space-y-3">
              {[
                "Rappel de mission quotidienne",
                "Bilan hebdomadaire",
                "Messages de l'agent Coach",
              ].map((label) => (
                <label
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 px-4 py-3"
                >
                  <span className="text-sm text-slate-700">{label}</span>
                  <input
                    type="checkbox"
                    disabled
                    className="h-4 w-4 rounded border-slate-300 text-brand-600 disabled:cursor-not-allowed"
                  />
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Mes données
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Vous gardez le contrôle sur vos données personnelles.
            </p>

            <div className="mt-4 space-y-3">
              <button
                type="button"
                disabled
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-left transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="block text-sm font-medium text-slate-900">
                  Exporter mes données
                </span>
                <span className="block text-xs text-slate-600">
                  Toutes vos données au format JSON
                </span>
              </button>

              <button
                type="button"
                disabled
                className="w-full rounded-lg border border-red-200 px-4 py-3 text-left transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="block text-sm font-medium text-red-900">
                  Supprimer mon compte
                </span>
                <span className="block text-xs text-red-700">
                  Suppression définitive et authentifiée
                </span>
              </button>
            </div>

            <p className="mt-4 border-t border-slate-200 pt-4 text-xs text-slate-500">
              Conformément au RGPD : export, suppression, durée de conservation
              définie et documentation des fournisseurs tiers.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-base font-semibold text-slate-900">
              Usage de l&apos;IA
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Les requêtes IA sont envoyées côté serveur à un fournisseur
              d&apos;IA. Seules les informations nécessaires au rôle de l&apos;agent
              lui sont transmises, jamais votre journal ni vos notes privées.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
