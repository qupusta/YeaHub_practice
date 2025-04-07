import { ComplexityFilterId } from "@/shared/constants/complexityFilters";
import { RateFilterId } from "@/shared/constants/rateFilters";

export interface QuestionsState {
	page: number;
	title?: string;
	skills?: number[];
	rate?: RateFilterId[];
	complexity?: ComplexityFilterId[];
	specializations?: number;
}