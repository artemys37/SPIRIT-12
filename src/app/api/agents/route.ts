import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { orchestrator } from "@/lib/agents/orchestrator";
import { checkGuardrails } from "@/lib/agents/guardrails";

export const runtime = "nodejs";

const RequestSchema = z.object({
  role: z.enum([
    "profil",
    "enseignement",
    "planificateur",
    "coach",
    "progression",
    "controle",
  ]),
  input: z.unknown(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { role, input } = RequestSchema.parse(body);

    if (!orchestrator.isAuthorized(role)) {
      return NextResponse.json(
        { success: false, error: "Rôle d'agent non autorisé" },
        { status: 403 }
      );
    }

    const result = await orchestrator.route(role, input);

    const report = checkGuardrails(result);

    if (!report.approved) {
      return NextResponse.json(
        {
          success: false,
          error: "Sortie refusée par les règles de sécurité",
          blocked: true,
          findings: report.findings,
        },
        { status: 422 }
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("Agent API error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Requête invalide" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Service temporairement indisponible" },
      { status: 503 }
    );
  }
}
