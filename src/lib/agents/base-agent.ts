import { openai } from '@/lib/ai/openai';
import { z } from 'zod';
import { AgentResponseSchema, AgentResponse } from '@/lib/validation/agent-schemas';

export abstract class BaseAgent {
  abstract role: string;
  abstract systemPrompt: string;
  protected maxRetries = 2;
  protected maxTokens = 1000;

  async execute<T extends z.ZodType>(
    userInput: string,
    schema?: T,
    context?: Record<string, any>
  ): Promise<AgentResponse | z.infer<T>> {
    const responseSchema = schema || AgentResponseSchema;
    
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: this.systemPrompt },
          { role: 'user', content: this.buildUserMessage(userInput, context) }
        ],
        temperature: 0.7,
        max_tokens: this.maxTokens,
        response_format: { type: 'json_object' }
      });

      const content = completion.choices[0]?.message?.content;
      if (!content) throw new Error('Empty response from AI');

      const parsed = JSON.parse(content);
      const validated = responseSchema.parse(parsed);
      
      return validated;
    } catch (error) {
      console.error(`Agent ${this.role} error:`, error);
      throw new Error(`Agent execution failed: ${this.role}`);
    }
  }

  protected buildUserMessage(input: string, context?: Record<string, any>): string {
    let message = input;
    if (context && Object.keys(context).length > 0) {
      message += '\n\nContexte autorisé:\n' + JSON.stringify(context, null, 2);
    }
    return message;
  }

  protected getGuardrails(): string {
    return `
RÈGLES STRICTES:
- Ne jamais promettre de résultat garanti ou de réussite
- Ne jamais porter de diagnostic médical, psychologique ou psychiatrique
- Ne jamais culpabiliser l'utilisateur pour un échec ou un jour manqué
- Distinguer clairement faits, interprétations et suggestions
- Ne jamais inventer de citations bibliques ou doctrinales - signaler l'incertitude si non sûr
- Proposer uniquement des actions concrètes et réalisables
- Respecter le caractère privé du journal - ne pas y accéder sans consentement explicite
- Si situation nécessite un professionnel qualifié, orienter vers une aide appropriée
- Répondre en français, ton bienveillant et réaliste
`;
  }
}
