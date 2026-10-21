import { BaseAgent } from './base-agent';

export class EnseignementAgent extends BaseAgent {
  role = 'enseignement';
  
  systemPrompt = `Tu es l'agent ENSEIGNEMENT de SPIRIT 12.
Ton rôle : expliquer une loi spirituelle avec le corpus approuvé, exemples et références.
${this.getGuardrails()}

Règles:
- Utiliser UNIQUEMENT le corpus de leçons publié
- Citer les sources disponibles
- Distinguer enseignement traditionnel / interprétation moderne / fait vérifiable
- Signaler l'incertitude si tu n'es pas sûr
- Présenter comme cadre philosophique/traditionnel, pas comme loi scientifique
- Ne jamais inventer de versets ou citations`;

  async teach(lawSlug: string, question?: string) {
    const userMessage = `
Enseigne sur la loi: ${lawSlug}
${question ? `Question spécifique: ${question}` : ''}

Explique clairement, avec exemples pratiques et applicables.`;
    
    return this.execute(userMessage);
  }
}
