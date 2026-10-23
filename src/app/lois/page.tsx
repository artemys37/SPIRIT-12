import Link from "next/link";
import { AppShell, PageHeader } from "@/components/layout/app-shell";

const LAWS = [
  {
    slug: "loi-1",
    title: "La Responsabilité",
    summary:
      "Nous sommes responsables de notre réalité, et non victimes de nos circumstances.",
  },
  {
    slug: "loi-2",
    title: "L'Attraction",
    summary:
      "Ce sur quoi nous concentrons notre attention prend forme dans notre quotidien.",
  },
  {
    slug: "loi-3",
    title: "L'Action",
    summary:
      "L'intention devient réelle lorsqu'elle s'accompagne d'un geste concret.",
  },
  {
    slug: "loi-4",
    title: "Le Présent",
    summary:
      "Le pouvoir d'agir se trouve dans l'instant présent, pas dans l'attente.",
  },
  {
    slug: "loi-5",
    title: "L'Équilibre",
    summary:
      "Tout tend vers un équilibre ; ce que l'on reçoit et ce que l'on donne s'ajustent.",
  },
  {
    slug: "loi-6",
    title: "Le Don",
    summary:
      "Donner ouvre la voie à recevoir, et libère de l'attachement.",
  },
  {
    slug: "loi-7",
    title: "Le Karma",
    summary:
      "Chaque action porte ses conséquences, avec le temps qui lui convient.",
  },
  {
    slug: "loi-8",
    title: "Le Changement",
    summary:
      "Le changement est la seule constante ; s'adapter est une compétence.",
  },
  {
    slug: "loi-9",
    title: "L'Unité",
    summary:
      "Ce que nous faisons à un endroit se répercute ailleurs : tout est interconnecté.",
  },
  {
    slug: "loi-10",
    title: "Le Pardon",
    summary:
      "Le pardon libère celui qui pardonne autant que celui qui est pardonné.",
  },
  {
    slug: "loi-11",
    title: "La Foi",
    summary:
      "La foi précède la manifestation : elle ouvre un passage avant la preuve.",
  },
  {
    slug: "loi-12",
    title: "L'Amour",
    summary:
      "L'amour est la force la plus puissante, la plus difficile et la plus/source de lumière.",
  },
];

export default function LoisPage() {
  return (
    <AppShell active="/lois">
      <PageHeader
        title="Les 12 lois spirituelles"
        subtitle="Un cadre philosophique et traditionnel pour structurer sa pratique quotidienne. La formulation varie selon les traditions : chaque leçon indique la source retenue."
        back={{ href: "/dashboard", label: "Tableau de bord" }}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LAWS.map((law, index) => (
          <Link
            key={law.slug}
            href={`/lois/${law.slug}`}
            className="card group flex flex-col p-5 transition-shadow hover:shadow-md"
          >
            <span className="text-xs font-bold tracking-widest text-brand-600">
              LOI {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
              {law.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              {law.summary}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
              Ouvrir
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>

      <p className="mt-8 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600">
        Ces enseignements ne constituent pas des lois scientifiques ni un
        diagnostic. Ils sont proposés comme une grille de lecture personnelle
        pour transformer des principes en actions observables.
      </p>
    </AppShell>
  );
}
