import { ISpecialization } from "@/entities/specializations/model/types/specializations";
import { ISkills } from '@/entities/skills/model/types/skills';
import { Response } from "@/shared/types/types";

export interface IQuestion {
  id: number;
  title: string;
  description: string;
  code?: string | null;
  imageSrc?: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: 'public' | 'draft';
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
  questionSpecializations: ISpecialization[];
  questionSkills: ISkills[];
  checksCount?: number;
  isLearned?: boolean;
  profileId?: string;
}

export type PublicQuestion = Omit<IQuestion, 'isLearned' | 'profileId' | 'checksCount'>

export interface GetQuestionsListParamsRequest {
  page?: number;
  limit?: number;
  title?: string;
  titleOrDescription?: string;
  skills?: number[];
  complexity?: number[];
  rate?: number[];
  keywords?: string[];
  skillFilterMode?: 'ALL' | 'ANY';
  specialization?: string | number;
  order?: string;
  orderBy?: string;
  random?: boolean;
  profileId?: string;
}

export type GetQuestionsListResponse = Response<IQuestion[]>;

export type GetQuestionsByIdResponse = IQuestion;

export type GetQuestionsByIdParamsRequest = {
  questionId?: string;
  profileId: string;
}