import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl border shadow-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Connexion</h1>
        <p className="text-center text-slate-600 mb-6">Sprint 2 - À implémenter</p>
        <Link href="/" className="block text-center text-slate-600 hover:text-slate-900">← Retour à l'accueil</Link>
      </div>
    </div>
  );
}
