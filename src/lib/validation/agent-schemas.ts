import { z } from "zod";

export const AgentResponseSchema = z.object({
  summary: z.string().min(1),
  suggestions: z.array(z.string()).default([]),
  references: z.array(z.object({
    title: z.string(),
    source: z.string().optional(),
    url: z.string().url().optional()
  })).default([]),
  warnings: z.array(z.string()).default([]),
  actions: z.array(z.object({
    title: z.string(),
    description: z.string(),
    estimated_minutes: z.number().min(1).max(60)
  })).default([]),
  confidence: z.enum(['low', 'medium', 'high']).default('medium')
});

export type AgentResponse = z.infer<typeof AgentResponseSchema>;

export const ProfilAgentInputSchema = z.object({
  goals: z.array(z.string()),
  available_time_minutes: z.number().min(5).max(120),
  experience_level: z.enum(['beginner', 'intermediate', 'advanced']).optional()
});

export const PlanificateurInputSchema = z.object({
  goal: z.string().min(1),
  duration_days: z.enum([21, 30, 60, 90, 180]),
  available_time_minutes: z.number().min(5).max(60),
  preferences: z.record(z.any()).optional()
});

export const CoachInputSchema = z.object({
  question: z.string().min(1),
  current_mission: z.string().optional(),
  recent_progress: z.string().optional()
});
