// /types/api.ts
export interface SkillItem {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
  meta?: Record<string, unknown>;
  version?: number;
  skill_name: string;
  description?: string | null;
  courses?: string | null;
  certifications?: { name?: string } | null;
}

  export interface RoleItem {
    id?: number;
    role_id: string;
    title: string;
    description?: string;
    meta?: Record<string, unknown>;
    [key: string]: unknown;
  }

export interface AnalyzeRequest {
  role_id: string;
  current_skills: string[];
}

export interface AnalyzeResponse {
  status: 'success' | 'error' | string;
  result?: {
    existing_skills?: SkillItem[];
    required_skills?: SkillItem[];
  };
  [key: string]: unknown;
}
