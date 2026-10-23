import Link from "next/link";

export interface NavItem {
  href: string;
  label: string;
}

export const APP_NAV: NavItem[] = [
  { href: "/dashboard", label: "Tableau de bord" },
  { href: "/parcours", label: "Mon parcours" },
  { href: "/lois", label: "Les 12 lois" },
  { href: "/journal", label: "Journal" },
  { href: "/progression", label: "Progression" },
  { href: "/profil", label: "Profil" },
];

export function AppShell({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link
            href="/dashboard"
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

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-1 md:flex"
          >
            {APP_NAV.map((item) => {
              const isActive = active === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/profil" className="btn-secondary shrink-0">
            Mon profil
          </Link>
        </div>

        <nav
          aria-label="Navigation mobile"
          className="flex gap-1 overflow-x-auto border-t border-slate-200 px-4 py-2 md:hidden"
        >
          {APP_NAV.map((item) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-brand-600 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            SPIRIT 12 — accompagnement par agents IA. Aucune promesse de résultat
            garanti.
          </p>
          <p>Les contenus spirituels sont présentés comme un cadre philosophique.</p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  back,
}: {
  title: string;
  subtitle?: string;
  back?: { href: string; label: string };
}) {
  return (
    <div className="mb-8">
      {back ? (
        <Link
          href={back.href}
          className="mb-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          {`← ${back.label}`}
        </Link>
      ) : null}
      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="card flex flex-col items-center gap-3 px-6 py-14 text-center">
      <div
        aria-hidden
        className="grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-xl"
      >
        ✦
      </div>
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <p className="max-w-md text-sm text-slate-600">{description}</p>
      {action ? (
        <Link href={action.href} className="btn-primary mt-2">
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="card p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">{value}</p>
      {hint ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}
