import { ProfilAgent } from './profil-agent';
import { EnseignementAgent } from './enseignement-agent';
import { PlanificateurAgent } from './planificateur-agent';
import { CoachAgent } from './coach-agent';
import { ProgressionAgent } from './progression-agent';
import { ControleAgent } from './controle-agent';
import { BaseAgent } from './base-agent';

export type RoutedRole =
  | 'profil'
  | 'enseignement'
  | 'planificateur'
  | 'coach'
  | 'progression'
  | 'controle';

const AGENT_WHITELIST: RoutedRole[] = [
  'profil',
  'enseignement',
  'planificateur',
  'coach',
  'progression',
  'controle',
];

export class Orchestrator {
  private agents: Record<RoutedRole, BaseAgent>;

  private whitelist: RoutedRole[] = AGENT_WHITELIST;

  private maxTurns = 3;

  private maxTokensBudget = 5000;

  constructor() {
    this.agents = {
      profil: new ProfilAgent(),
      enseignement: new EnseignementAgent(),
      planificateur: new PlanificateurAgent(),
      coach: new CoachAgent(),
      progression: new ProgressionAgent(),
      controle: new ControleAgent(),
    };
  }

  isAuthorized(role: string): role is RoutedRole {
    return this.whitelist.includes(role as RoutedRole);
  }

  async route(role: RoutedRole, input: unknown) {
    if (!this.isAuthorized(role)) {
      throw new Error(`Agent role ${role} not authorized`);
    }

    const agent = this.agents[role];
    if (!agent) {
      throw new Error(`Agent ${role} not found`);
    }

    console.log(`[ORCHESTRATOR] Calling agent: ${role}`, {
      timestamp: new Date().toISOString(),
    });

    try {
      return await agent.execute(
        typeof input === 'string' ? input : JSON.stringify(input)
      );
    } catch (error) {
      console.error(`[ORCHESTRATOR] Error with agent ${role}:`, error);
      return this.getFallback();
    }
  }

  private getFallback() {
    return {
      summary:
        "Le service d'accompagnement est temporairement indisponible. Tes données sont intactes.",
      suggestions: [
        'Reprends ta mission du jour si elle existe',
        'Consulte la bibliothèque des lois pour t inspires',
        'Reviens plus tard, le service devrait être rétabli',
      ],
      references: [],
      warnings: [
        "Aucun accompagnement IA n'a pu être généré pour le moment",
      ],
      actions: [],
      confidence: 'low' as const,
    };
  }
}

export const orchestrator = new Orchestrator();
