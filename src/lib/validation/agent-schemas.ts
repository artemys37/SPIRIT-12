import { z } from "zod";

export const SUPPORTED_DURATIONS = [21, 30, 60, 90, 180] as const;

export const DurationDaysSchema = z.union(
  SUPPORTED_DURATIONS.map((d) => z.literal(d))
);

export const AgentResponseSchema = z.object({
  summary: z.string().min(1),
  suggestions: z.array(z.string()).default([]),
  references: z
    .array(
      z.object({
        title: z.string(),
        source: z.string().optional(),
        url: z.string().url().optional(),
      })
    )
    .default([]),
  warnings: z.array(z.string()).default([]),
  actions: z
    .array(
      z.object({
        title: z.string(),
        description: z.string(),
        estimated_minutes: z.number().min(1).max(60),
      })
    )
    .default([]),
  confidence: z.enum(["low", "medium", "high"]).default("medium"),
});

export type AgentResponse = z.infer<typeof AgentResponseSchema>;

export const ProfilAgentInputSchema = z.object({
  goals: z.array(z.string()),
  available_time_minutes: z.number().min(5).max(120),
  experience_level: z
    .enum(["beginner", "intermediate", "advanced"])
    .optional(),
});

export const PlanificateurInputSchema = z.object({
  goal: z.string().min(1),
  duration_days: DurationDaysSchema,
  available_time_minutes: z.number().min(5).max(60),
  preferences: z.record(z.string(), z.unknown()).optional(),
});

export const CoachAgentInputSchema = z.object({
  question: z.string().min(1),
  current_mission: z.string().optional(),
  recent_progress: z.string().optional(),
});

export const EnseignementAgentInputSchema = z.object({
  law_slug: z.string().min(1),
  question: z.string().optional(),
});
