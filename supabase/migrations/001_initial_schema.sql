-- SPIRIT 12 - Schéma initial avec RLS

-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  display_name TEXT,
  timezone TEXT DEFAULT 'Europe/Paris',
  language TEXT DEFAULT 'fr',
  preferences JSONB DEFAULT '{}',
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Goals
CREATE TABLE IF NOT EXISTS goals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  priority INTEGER DEFAULT 1,
  target_metric JSONB,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused', 'cancelled')),
  target_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Programs
CREATE TABLE IF NOT EXISTS programs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  goal_id UUID REFERENCES goals(id) ON DELETE CASCADE NOT NULL,
  start_date DATE NOT NULL,
  duration_days INTEGER NOT NULL CHECK (duration_days IN (21, 30, 60, 90, 180)),
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'paused', 'completed', 'cancelled')),
  version INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Laws (contenu public)
CREATE TABLE IF NOT EXISTS laws (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  summary TEXT,
  tradition TEXT,
  content JSONB,
  order_index INTEGER,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Daily Missions
CREATE TABLE IF NOT EXISTS daily_missions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  program_id UUID REFERENCES programs(id) ON DELETE CASCADE NOT NULL,
  scheduled_date DATE NOT NULL,
  title TEXT NOT NULL,
  instructions TEXT NOT NULL,
  estimated_minutes INTEGER DEFAULT 10,
  law_id UUID REFERENCES laws(id),
  status TEXT DEFAULT 'todo' CHECK (status IN ('todo', 'started', 'done', 'postponed', 'skipped')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, program_id, scheduled_date)
);

-- Journal Entries (privé)
CREATE TABLE IF NOT EXISTS journal_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  entry_date DATE NOT NULL,
  content TEXT NOT NULL,
  is_private BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, entry_date)
);

-- AI Runs (logs)
CREATE TABLE IF NOT EXISTS ai_runs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  agent_role TEXT NOT NULL CHECK (agent_role IN ('profil', 'enseignement', 'planificateur', 'coach', 'progression', 'controle')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'running', 'success', 'failed', 'blocked')),
  input_hash TEXT NOT NULL,
  output_schema_version TEXT NOT NULL,
  tokens_used INTEGER,
  cost_cents INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_missions ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE laws ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can CRUD own goals" ON goals FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can CRUD own programs" ON programs FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can CRUD own missions" ON daily_missions FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can CRUD own journal" ON journal_entries FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own ai_runs" ON ai_runs FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Anyone can view published laws" ON laws FOR SELECT USING (published = TRUE);

-- Indexes
CREATE INDEX idx_goals_user_id ON goals(user_id);
CREATE INDEX idx_programs_user_id ON programs(user_id);
CREATE INDEX idx_missions_user_date ON daily_missions(user_id, scheduled_date);
CREATE INDEX idx_journal_user_date ON journal_entries(user_id, entry_date);
CREATE INDEX idx_ai_runs_user_id ON ai_runs(user_id, created_at);
