import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center px-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900"
          >
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-sm font-bold text-white"
            >
              S12
            </span>
            <span>
              SPIRIT <span className="text-brand-600">12</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="card p-8">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Créer mon compte
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Quelques informations suffisent pour construire votre premier
              parcours.
            </p>

            <form className="mt-6 space-y-5" action="#" method="post">
              <div>
                <label
                  htmlFor="display-name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Nom d&apos;affichage{" "}
                  <span className="font-normal text-slate-400">(facultatif)</span>
                </label>
                <input
                  id="display-name"
                  name="displayName"
                  type="text"
                  autoComplete="nickname"
                  disabled
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Adresse e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Mot de passe
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={12}
                  disabled
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
                <p className="mt-1.5 text-xs text-slate-500">
                  12 caractères minimum. Ne réutilisez pas un mot de passe déjà
                  utilisé ailleurs.
                </p>
              </div>

              <button
                type="submit"
                disabled
                className="btn-primary w-full cursor-not-allowed opacity-60"
              >
                Créer mon compte
              </button>
            </form>

            <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-center text-xs text-slate-500">
              Inscription disponible après configuration de Supabase.
            </p>
          </div>

          <p className="mt-6 text-center text-sm text-slate-600">
            Déjà un compte ?{" "}
            <Link
              href="/auth/login"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              Se connecter
            </Link>
          </p>

          <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
            Vos données restent privées. Vous pouvez exporter ou supprimer votre
            compte à tout moment depuis votre profil.
          </p>
        </div>
      </main>
    </div>
  );
}
