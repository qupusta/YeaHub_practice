import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { QuestionsState } from '../types/questionsType';
import { ComplexityFilterId } from '@/shared/constants/complexityFilters';
import { RateFilterId } from '@/shared/constants/rateFilters';
import {
  DEFAULT_PAGE,
  DEFAULT_SPECIALIZATION_NUMBER,
} from '@/shared/constants/queryConstants';

const initialState: QuestionsState = {
  page: DEFAULT_PAGE,
  title: undefined,
  skills: undefined,
  rate: undefined,
  complexity: undefined,
  specializations: DEFAULT_SPECIALIZATION_NUMBER,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setSkills: (state, action: PayloadAction<number>) => {
      if (state.skills === undefined) {
        state.skills = [action.payload];
      } else if (state.skills.includes(action.payload)) {
        state.skills = state.skills.filter((id) => id !== action.payload);
        if (state.skills.length === 0) {
          state.skills = undefined;
        }
      } else {
        state.skills.push(action.payload);
      }
    },
    toggleSpecializations: (state, action: PayloadAction<number>) => {
      state.specializations = action.payload;
    },
    setComplexity: (
      state,
      action: PayloadAction<ComplexityFilterId | undefined>
    ) => {
      const payload = action.payload;

      if (payload === undefined) {
        state.complexity = undefined;
        return;
      }

      state.complexity = state.complexity?.includes(payload)
        ? state.complexity.filter((id) => id !== payload).length
          ? state.complexity.filter((id) => id !== payload)
          : undefined
        : [...(state.complexity || []), payload];
    },
    setRate: (state, action: PayloadAction<RateFilterId | undefined>) => {
      const payload = action.payload;

      if (payload === undefined) {
        state.complexity = undefined;
        return;
      }

      state.rate = state.rate?.includes(payload)
        ? state.rate.filter((id) => id !== payload).length
          ? state.rate.filter((id) => id !== payload)
          : undefined
        : [...(state.rate || []), payload];
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const { reducer: questionsReducer, actions: questionsActions } =
  questionsSlice;
