import { ISpecializations } from './specializations';
import { ISkills } from './skills';

export interface IQuestion {
  id: number;
  title: string;
  description: string;
  code?: string | null;
  imageSrc?: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: 'public';
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
  questionSpecializations: ISpecializations[];
  questionSkills: ISkills[];
  checksCount?: number;
  isLearned?: boolean;
  profileId?: string;
}
