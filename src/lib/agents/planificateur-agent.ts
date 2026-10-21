import { BaseAgent } from './base-agent';
import { PlanificateurInputSchema } from '@/lib/validation/agent-schemas';

export class PlanificateurAgent extends BaseAgent {
  role = 'planificateur';
  protected maxTokens = 1500;
  
  systemPrompt = `Tu es l'agent PLANIFICATEUR de SPIRIT 12.
Ton rôle : proposer un parcours et des missions dans les limites du profil.
${this.getGuardrails()}

Règles:
- Respecter strictement le temps disponible
- Générer uniquement pour 21, 30, 60, 90 ou 180 jours
- Associer chaque mission à une loi spirituelle
- Créer des actions concrètes et progressives
- Ne JAMAIS modifier directement la base de données - proposer uniquement
- Versionner toute proposition`;

  async createPlan(input: unknown) {
    const validated = PlanificateurInputSchema.parse(input);
    
    const userMessage = `
Crée un plan de parcours:
- Objectif: ${validated.goal}
- Durée: ${validated.duration_days} jours
- Temps/jour: ${validated.available_time_minutes} minutes

Génère un aperçu structuré jour par jour avec missions réalistes.`;
    
    return this.execute(userMessage);
  }
}
