import { NextRequest, NextResponse } from 'next/server';
import { orchestrator } from '@/lib/agents/orchestrator';
import { AgentRole } from '@/lib/ai/openai';
import { z } from 'zod';

const RequestSchema = z.object({
  role: z.enum(['profil', 'enseignement', 'planificateur', 'coach']),
  input: z.any()
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { role, input } = RequestSchema.parse(body);

    // TODO: Add auth check
    // TODO: Add rate limiting
    // TODO: Add logging to ai_runs
    
    const result = await orchestrator.route(role as AgentRole, input);
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Agent API error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Invalid request' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Service temporarily unavailable' },
      { status: 500 }
    );
  }
}
