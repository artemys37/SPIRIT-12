import Link from "next/link";

const FEATURES = [
  {
    title: "Parcours personnalisé",
    description:
      "Un programme adapté à vos objectifs, votre temps disponible et vos priorités sur 21 à 180 jours.",
    icon: "◈",
  },
  {
    title: "Missions quotidiennes",
    description:
      "Des actions concrètes et réalistes à réaliser chaque jour, sans culpabilisation.",
    icon: "◎",
  },
  {
    title: "Accompagnement IA encadré",
    description:
      "Des agents bienveillants pour vous guider, sans promesses ni diagnostic médical.",
    icon: "✦",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Répondez au questionnaire",
    description:
      "Objectifs, durée, temps disponible et orientation spirituelle en quelques minutes.",
  },
  {
    step: "02",
    title: "Choisissez votre durée",
    description:
      "21, 30, 60, 90 ou 180 jours, avec une charge quotidienne calibrée sur vos contraintes.",
  },
  {
    step: "03",
    title: "Avancez à votre rythme",
    description:
      "Missions, journal privé et bilans hebdo. Vous pouvez suspendre ou reprendre quand vous le souhaitez.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-slate-200 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <span className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900">
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-sm font-bold text-white"
            >
              S12
            </span>
            <span>
              SPIRIT <span className="text-brand-600">12</span>
            </span>
          </span>
          <nav className="flex items-center gap-2">
            <Link
              href="/auth/login"
              className="btn-secondary hidden sm:inline-flex"
            >
              Connexion
            </Link>
            <Link href="/auth/signup" className="btn-primary">
              Commencer
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-50/70 via-background to-background">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold text-brand-700">
                <span aria-hidden>✦</span> Accompagnement par agents IA
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
                Transformez vos enseignements en{" "}
                <span className="text-brand-600">actions quotidiennes</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                Étudiez les 12 lois spirituelles, définissez vos objectifs et
                suivez votre progression avec un accompagnement IA benevolent,
                encadré et respectueux de votre rythme.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/auth/signup" className="btn-primary px-6 py-3 text-base">
                  Créer mon parcours
                </Link>
                <Link href="/lois" className="btn-secondary px-6 py-3 text-base">
                  Découvrir les 12 lois
                </Link>
              </div>
              <p className="mt-6 text-sm text-slate-500">
                Aucune promesse de résultat garanti. Les contenus spirituels
                sont présentés comme un cadre philosophique ou traditionnel.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="card p-6">
                <span
                  aria-hidden
                  className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-xl text-brand-600"
                >
                  {feature.icon}
                </span>
                <h2 className="mt-4 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
              Comment ça marche
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
              Trois étapes simples pour transformer une intention en habitude
              mesurable.
            </p>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {STEPS.map((item) => (
                <li key={item.step} className="rounded-2xl border border-slate-200 p-6">
                  <span className="text-sm font-bold tracking-widest text-brand-600">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="rounded-2xl bg-slate-900 px-6 py-14 text-center sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Prêt à commencer votre parcours ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-300">
              Créez votre compte, répondez au questionnaire et recevez votre
              première mission en quelques minutes.
            </p>
            <Link
              href="/auth/signup"
              className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
              Créer mon compte
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-500">
          SPIRIT 12 — Application d&apos;enseignement spirituel et
          d&apos;accompagnement personnalisé.
        </div>
      </footer>
    </div>
  );
}
