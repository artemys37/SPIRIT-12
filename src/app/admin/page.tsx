import Link from "next/link";
import { AppShell, PageHeader } from "@/components/layout/app-shell";

const ADMIN_SECTIONS = [
  {
    href: "/admin/contenu",
    title: "Contenu",
    description: "Rédiger, prévisualiser, publier et archiver les lois et leçons.",
    status: "À configurer",
  },
  {
    href: "/admin/utilisateurs",
    title: "Utilisateurs",
    description: "Consulter les comptes et les rôles, sans accès aux journaux privés.",
    status: "À configurer",
  },
  {
    href: "/admin/metriques",
    title: "Métriques",
    description: "Parcours actifs, missions complétées, erreurs et latence IA.",
    status: "À configurer",
  },
  {
    href: "/admin/taches",
    title: "Tâches planifiées",
    description: "Statut des rappels et des bilans, avec reprise sur échec.",
    status: "À configurer",
  },
];

export default function AdminPage() {
  return (
    <AppShell>
      <PageHeader
        title="Administration"
        subtitle="Gestion des contenus, des utilisateurs, des métriques et des coûts. Les routes sont protégées côté serveur et les journaux personnels ne sont jamais exposés."
        back={{ href: "/dashboard", label: "Tableau de bord" }}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {ADMIN_SECTIONS.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="card group p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                {section.title}
              </h2>
              <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                {section.status}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {section.description}
            </p>
          </Link>
        ))}
      </div>

      <section className="card mt-6 p-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Principes de l&apos;espace d&apos;administration
        </h2>
        <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
          <li className="flex gap-2">
            <span aria-hidden className="text-brand-600">
              ◆
            </span>
            <span>Publication des contenus réservée à un administrateur humain.</span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="text-brand-600">
              ◆
            </span>
            <span>
              Les métriques sont agrégées et ne révèlent aucun journal personnel.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="text-brand-600">
              ◆
            </span>
            <span>
              Les quotas et limites d&apos;usage sont appliqués côté serveur.
            </span>
          </li>
          <li className="flex gap-2">
            <span aria-hidden className="text-brand-600">
              ◆
            </span>
            <span>
              Les journaux techniques masquent les données personnelles et les
              secrets.
            </span>
          </li>
        </ul>
      </section>
    </AppShell>
  );
}
