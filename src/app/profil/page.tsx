"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilPage() {
  const [timezone, setTimezone] = useState("Europe/Paris");
  
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/dashboard" className="text-slate-600 hover:text-slate-900 mb-2 inline-block">← Tableau de bord</Link>
          <h1 className="text-2xl font-bold text-slate-900">Mon profil</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl space-y-6">
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Informations personnelles</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nom d'affichage</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Fuseau horaire</label>
              <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900">
                <option value="Europe/Paris">Europe/Paris</option>
                <option value="Europe/London">Europe/London</option>
                <option value="America/New_York">America/New_York</option>
                <option value="Asia/Tokyo">Asia/Tokyo</option>
              </select>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800">Enregistrer</button>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Mes données (RGPD)</h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 border rounded-lg hover:bg-slate-50">
              <div className="font-medium">Exporter mes données</div>
              <div className="text-sm text-slate-600">Télécharger toutes mes données au format JSON</div>
            </button>
            <button className="w-full text-left px-4 py-3 border border-red-200 rounded-lg hover:bg-red-50">
              <div className="font-medium text-red-900">Supprimer mon compte</div>
              <div className="text-sm text-red-700">Suppression définitive de toutes mes données</div>
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-4">Conformément au RGPD - Export et suppression disponibles (Sprint 12)</p>
        </div>
      </main>
    </div>
  );
}
