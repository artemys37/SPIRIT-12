import { ProfilAgent } from './profil-agent';
import { EnseignementAgent } from './enseignement-agent';
import { PlanificateurAgent } from './planificateur-agent';
import { CoachAgent } from './coach-agent';
import { AgentRole } from '@/lib/ai/openai';

export class Orchestrator {
  private agents = {
    profil: new ProfilAgent(),
    enseignement: new EnseignementAgent(),
    planificateur: new PlanificateurAgent(),
    coach: new CoachAgent(),
  };

  private whitelist: AgentRole[] = ['profil', 'enseignement', 'planificateur', 'coach'];
  private maxTurns = 3;
  private maxTokensBudget = 5000;

  async route(role: AgentRole, input: unknown) {
    if (!this.whitelist.includes(role)) {
      throw new Error(`Agent role ${role} not authorized`);
    }

    const agent = this.agents[role];
    if (!agent) {
      throw new Error(`Agent ${role} not found`);
    }

    // Log metadata only (no full prompts)
    console.log(`[ORCHESTRATOR] Calling agent: ${role}`, { timestamp: new Date().toISOString() });
    
    try {
      return await agent.execute(typeof input === 'string' ? input : JSON.stringify(input));
    } catch (error) {
      console.error(`[ORCHESTRATOR] Error with agent ${role}:`, error);
      return this.getFallback();
    }
  }

  private getFallback() {
    return {
      summary: "Le service d'accompagnement est temporairement indisponible.",
      suggestions: ["Reprends ta mission du jour si elle existe", "Consulte la bibliothèque des lois pour t'inspirer"],
      references: [],
      warnings: [],
      actions: [],
      confidence: 'low' as const
    };
  }
}

export const orchestrator = new Orchestrator();
