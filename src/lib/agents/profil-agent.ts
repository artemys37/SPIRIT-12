import { BaseAgent } from './base-agent';
import { ProfilAgentInputSchema } from '@/lib/validation/agent-schemas';

export class ProfilAgent extends BaseAgent {
  role = 'profil';
  
  systemPrompt = `Tu es l'agent PROFIL de SPIRIT 12.
Ton rôle : résumer les objectifs et contraintes déclarés, demander les informations manquantes.
${this.getGuardrails()}

Tu dois uniquement utiliser le questionnaire et les préférences autorisées.
Propose, ne modifie pas directement.
Pose des questions précises si informations manquantes.`;

  async analyzeProfile(input: unknown) {
    const validated = ProfilAgentInputSchema.parse(input);
    
    const userMessage = `
Analyse ce profil utilisateur:
- Objectifs: ${validated.goals.join(', ')}
- Temps disponible: ${validated.available_time_minutes} minutes/jour
- Niveau: ${validated.experience_level || 'non spécifié'}

Fournis un résumé structuré et des recommandations réalistes.`;
    
    return this.execute(userMessage);
  }
}
