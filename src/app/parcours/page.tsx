"use client";

import { useState } from "react";
import Link from "next/link";

export default function ParcoursPage() {
  const [duration, setDuration] = useState(30);
  const [goal, setGoal] = useState("");
  
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/dashboard" className="text-slate-600 hover:text-slate-900 mb-2 inline-block">← Tableau de bord</Link>
          <h1 className="text-2xl font-bold text-slate-900">Mon parcours</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-xl border shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Créer mon parcours personnalisé</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Quel est ton objectif ?</label>
              <input 
                type="text" 
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Ex: Mieux gérer mon stress, développer ma sérénité..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Durée du parcours</label>
              <div className="grid grid-cols-5 gap-2">
                {[21, 30, 60, 90, 180].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`px-4 py-2 rounded-lg border ${duration === d ? 'bg-slate-900 text-white border-slate-900' : 'bg-white hover:bg-slate-50'}`}
                  >
                    {d} jours
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Temps disponible par jour</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900">
                <option value="5">5-10 minutes</option>
                <option value="10">10-15 minutes</option>
                <option value="20">15-20 minutes</option>
                <option value="30">20-30 minutes</option>
              </select>
            </div>
          </div>
          
          <button className="mt-6 w-full px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800">
            Générer mon parcours (Sprint 5)
          </button>
        </div>
        
        <p className="text-sm text-slate-600 text-center">
          Le parcours sera généré par des règles déterministes, sans promesse de résultat.
        </p>
      </main>
    </div>
  );
}
