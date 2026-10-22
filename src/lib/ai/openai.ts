import OpenAI from "openai";

export const AGENT_ROLES = {
  PROFIL: "profil",
  ENSEIGNEMENT: "enseignement",
  PLANIFICATEUR: "planificateur",
  COACH: "coach",
  PROGRESSION: "progression",
  CONTROLE: "controle",
} as const;

export type AgentRole = (typeof AGENT_ROLES)[keyof typeof AGENT_ROLES];

let client: OpenAI | null = null;

export function getOpenAI(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured on the server");
  }
  if (!client) {
    client = new OpenAI({ apiKey });
  }
  return client;
}

export function isOpenAIAvailable(): boolean {
  return Boolean(process.env.OPENAI_API_KEY);
}
