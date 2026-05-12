// /types/roles.d.ts
export interface RolesModel {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string | null;
  version: number;
  role_id: string;
  title: string;
  description: string;
  level: string;
  yoe: string;
  skills?: string | null;
  meta?: {
    nextRoles?: string[];
    // add any other meta fields you might have
    [key: string]: unknown;
  };
}

// Partial type for @mrblenny/react-flow-chart chart state
import { IChart } from '@mrblenny/react-flow-chart';

export type ChartState = IChart;
