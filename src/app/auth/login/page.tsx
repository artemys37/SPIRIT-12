import Link from "next/link";

export default function LoginPage() {
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
              Connexion
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Reprenez votre parcours là où vous l&apos;aviez laissé.
            </p>

            <form className="mt-6 space-y-5" action="#" method="post">
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
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Mot de passe
                  </label>
                  <button
                    type="button"
                    className="text-xs font-medium text-brand-600 hover:text-brand-700"
                  >
                    Mot de passe oublié ?
                  </button>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  disabled
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200 disabled:cursor-not-allowed disabled:bg-slate-50"
                />
              </div>

              <button
                type="submit"
                disabled
                className="btn-primary w-full cursor-not-allowed opacity-60"
              >
                Se connecter
              </button>
            </form>

            <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-center text-xs text-slate-500">
              Authentification disponible après configuration de Supabase.
            </p>
          </div>

          <p className="mt-6 text-center text-sm text-slate-600">
            Pas encore de compte ?{" "}
            <Link
              href="/auth/signup"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              Créer un compte
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
