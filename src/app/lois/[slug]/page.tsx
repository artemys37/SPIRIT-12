import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/app-shell";
import { LAWS, getLawBySlug } from "@/lib/content/laws";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return LAWS.map((law) => ({ slug: law.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const law = getLawBySlug(slug);
  if (!law) return { title: "Loi introuvable" };
  return {
    title: `${law.title} - Loi ${law.order_index}`,
    description: law.summary,
  };
}

export default async function LawDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const law = getLawBySlug(slug);

  if (!law) {
    notFound();
  }

  const nextLaw = LAWS.find((item) => item.order_index === law.order_index + 1);

  return (
    <AppShell active="/lois">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/lois"
          className="inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          ← Les 12 lois
        </Link>

        <header className="mt-4">
          <p className="text-xs font-bold tracking-widest text-brand-600">
            LOI {String(law.order_index).padStart(2, "0")} / 12
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {law.title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            {law.summary}
          </p>

          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Tradition / cadrage
              </dt>
              <dd className="mt-1 text-sm text-slate-700">{law.tradition}</dd>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Source retenue
              </dt>
              <dd className="mt-1 text-sm text-slate-700">{law.source_note}</dd>
            </div>
          </dl>
        </header>

        <div className="mt-10 space-y-8">
          {law.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-slate-900">
                {section.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-slate-700">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">Exercices</h2>
          <div className="mt-4 space-y-4">
            {law.exercises.map((exercise, index) => (
              <div key={exercise.title} className="card p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-slate-900">
                    {index + 1}. {exercise.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {exercise.duration_minutes} min
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {exercise.instructions}
                </p>
                {exercise.safety_notes ? (
                  <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
                    {exercise.safety_notes}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-slate-900 p-6 text-slate-300">
          <h2 className="text-lg font-semibold text-white">
            Transformer cette loi en action
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            L&apos;agent Coach peut vous aider à appliquer cette loi à votre
            situation personnelle. Il travaillera uniquement à partir des
            informations que vous lui donnez, sans accéder à votre journal
            privé.
          </p>
          <Link href="/parcours" className="btn-primary mt-5">
            Intégrer cette loi à mon parcours
          </Link>
        </section>

        {nextLaw ? (
          <nav className="mt-12 border-t border-slate-200 pt-6">
            <Link
              href={`/lois/${nextLaw.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              <span aria-hidden className="transition-transform group-hover:-translate-x-0.5">
                →
              </span>
              Loi {nextLaw.order_index} : {nextLaw.title}
            </Link>
          </nav>
        ) : null}
      </article>
    </AppShell>
  );
}
