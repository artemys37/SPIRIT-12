import { BaseAgent } from './base-agent';

export interface ProgressionIndicators {
  missions_completed: number;
  missions_total: number;
  total_minutes: number;
  current_streak: number;
  completed_laws: string[];
  missed_days: number;
}

export class ProgressionAgent extends BaseAgent {
  role = 'progression';

  systemPrompt = `Tu es l'agent PROGRESSION de SPIRIT 12.
Ton rôle : analyser les indicateurs réels d'avancement et préparer un bilan.
${this.getGuardrails()}

Règles:
- Utiliser UNIQUEMENT les statistiques fournies, ne jamais inventer de données
- Distinguer explicitement les faits observés des hypothèses
- Ne jamais présenter un score comme une mesure absolue de la valeur personnelle
- Proposer des ajustements réalistes : réduire une charge, fractionner une action, réordonner ou maintenir
- Ne jamais culpabiliser pour les jours manqués`;

  async buildReview(indicators: ProgressionIndicators) {
    const userMessage = `
Indicateurs réels du parcours:
- Missions complétées: ${indicators.missions_completed}/${indicators.missions_total}
- Temps total consacré: ${indicators.total_minutes} minutes
- Série actuelle: ${indicators.current_streak} jour(s)
- Lois abordées: ${indicators.completed_laws.length ? indicators.completed_laws.join(', ') : 'aucune'}
- Jours manqués: ${indicators.missed_days}

Prépare un bilan et des ajustements possibles.`;
    return this.execute(userMessage);
  }
}
