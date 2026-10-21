export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          display_name: string | null
          timezone: string
          language: string
          preferences: Json
          role: 'user' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          display_name?: string | null
          timezone?: string
          language?: string
          preferences?: Json
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          display_name?: string | null
          timezone?: string
          language?: string
          preferences?: Json
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      goals: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          priority: number
          target_metric: Json | null
          status: 'active' | 'completed' | 'paused' | 'cancelled'
          target_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          priority?: number
          target_metric?: Json | null
          status?: 'active' | 'completed' | 'paused' | 'cancelled'
          target_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          priority?: number
          target_metric?: Json | null
          status?: 'active' | 'completed' | 'paused' | 'cancelled'
          target_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      programs: {
        Row: {
          id: string
          user_id: string
          goal_id: string
          start_date: string
          duration_days: number
          status: 'draft' | 'active' | 'paused' | 'completed' | 'cancelled'
          version: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          goal_id: string
          start_date: string
          duration_days: number
          status?: 'draft' | 'active' | 'paused' | 'completed' | 'cancelled'
          version?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          goal_id?: string
          start_date?: string
          duration_days?: number
          status?: 'draft' | 'active' | 'paused' | 'completed' | 'cancelled'
          version?: number
          created_at?: string
          updated_at?: string
        }
      }
      daily_missions: {
        Row: {
          id: string
          user_id: string
          program_id: string
          scheduled_date: string
          title: string
          instructions: string
          estimated_minutes: number
          law_id: string | null
          status: 'todo' | 'started' | 'done' | 'postponed' | 'skipped'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          program_id: string
          scheduled_date: string
          title: string
          instructions: string
          estimated_minutes?: number
          law_id?: string | null
          status?: 'todo' | 'started' | 'done' | 'postponed' | 'skipped'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          program_id?: string
          scheduled_date?: string
          title?: string
          instructions?: string
          estimated_minutes?: number
          law_id?: string | null
          status?: 'todo' | 'started' | 'done' | 'postponed' | 'skipped'
          created_at?: string
          updated_at?: string
        }
      }
      journal_entries: {
        Row: {
          id: string
          user_id: string
          entry_date: string
          content: string
          is_private: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          entry_date: string
          content: string
          is_private?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          entry_date?: string
          content?: string
          is_private?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      ai_runs: {
        Row: {
          id: string
          user_id: string
          agent_role: 'profil' | 'enseignement' | 'planificateur' | 'coach' | 'progression' | 'controle'
          status: 'pending' | 'running' | 'success' | 'failed' | 'blocked'
          input_hash: string
          output_schema_version: string
          tokens_used: number | null
          cost_cents: number | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          agent_role: 'profil' | 'enseignement' | 'planificateur' | 'coach' | 'progression' | 'controle'
          status?: 'pending' | 'running' | 'success' | 'failed' | 'blocked'
          input_hash: string
          output_schema_version: string
          tokens_used?: number | null
          cost_cents?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          agent_role?: 'profil' | 'enseignement' | 'planificateur' | 'coach' | 'progression' | 'controle'
          status?: 'pending' | 'running' | 'success' | 'failed' | 'blocked'
          input_hash?: string
          output_schema_version?: string
          tokens_used?: number | null
          cost_cents?: number | null
          created_at?: string
        }
      }
    }
  }
}
