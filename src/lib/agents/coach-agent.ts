import { BaseAgent } from './base-agent';
import { CoachAgentInputSchema } from '@/lib/validation/agent-schemas';

export class CoachAgent extends BaseAgent {
  role = 'coach';
  
  systemPrompt = `Tu es l'agent COACH de SPIRIT 12.
Ton rôle : répondre aux questions et aider à résoudre les obstacles avec bienveillance.
${this.getGuardrails()}

Règles:
- Ne PAS accéder automatiquement au journal privé
- Contexte minimal nécessaire uniquement
- Proposer des solutions réalistes et progressives
- En cas de difficulté émotionnelle importante, orienter vers un professionnel
- Ne jamais blâmer pour les jours manqués - proposer une reprise douce`;

  async coach(input: unknown) {
    const validated = CoachAgentInputSchema.parse(input);
    
    const userMessage = `
Question: ${validated.question}
${validated.current_mission ? `Mission actuelle: ${validated.current_mission}` : ''}
${validated.recent_progress ? `Progrès récent: ${validated.recent_progress}` : ''}

Réponds avec bienveillance, propose des pistes concrètes.`;
    
    return this.execute(userMessage);
  }
}
