"use client";

import { useState } from "react";
import Link from "next/link";

export default function JournalPage() {
  const [entry, setEntry] = useState("");
  
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/dashboard" className="text-slate-600 hover:text-slate-900 mb-2 inline-block">← Tableau de bord</Link>
          <h1 className="text-2xl font-bold text-slate-900">Journal privé</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-xl border shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Nouvelle entrée - {new Date().toLocaleDateString('fr-FR')}</h2>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Comment te sens-tu aujourd'hui ? Qu'as-tu appris ? De quoi es-tu reconnaissant ?"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 h-40 resize-none"
          />
          <button className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800">
            Enregistrer (privé)
          </button>
          <p className="text-xs text-slate-500 mt-2">Ce journal est privé et ne sera jamais exposé aux agents sans ton consentement explicite.</p>
        </div>
        
        <div className="text-center text-slate-600 py-8">
          <p>Aucune entrée enregistrée</p>
        </div>
      </main>
    </div>
  );
}
