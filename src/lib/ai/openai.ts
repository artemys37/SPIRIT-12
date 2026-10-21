import OpenAI from 'openai'

if (!process.env.OPENAI_API_KEY) {
  // Ne pas throw à l'import pour éviter les erreurs en build
  console.warn('OPENAI_API_KEY is not set')
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

export const AGENT_ROLES = {
  PROFIL: 'profil',
  ENSEIGNEMENT: 'enseignement',
  PLANIFICATEUR: 'planificateur',
  COACH: 'coach',
  PROGRESSION: 'progression',
  CONTROLE: 'controle'
} as const

export type AgentRole = typeof AGENT_ROLES[keyof typeof AGENT_ROLES]
