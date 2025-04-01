import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { QuestionsState } from "../types/questionsType";

const initialState: QuestionsState = {
  page: 1,
  title: undefined,
  skills: undefined,
  rate: undefined,
  complexity: undefined,
  specializations: undefined,
}

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
    setSkills: (state, action: PayloadAction<number[] | undefined>) => {
      state.skills = action.payload;
    },
    setSpecializations: (state, action: PayloadAction<number[] | undefined>) => {
      state.specializations = action.payload;
    },
    toggleSpecializations: (state, action: PayloadAction<number>) => {
      if (!state.specializations) {
        state.specializations = [action.payload];
        return;
      }

      const index = state.specializations.indexOf(action.payload);
      if (index === -1) {
        state.specializations.push(action.payload);
      } else {
        state.specializations.splice(index, 1);
        if (state.specializations.length === 0) {
          state.specializations = undefined
        }
      }
    },
    setComplexity: (state, action: PayloadAction<number[] | undefined>) => {
      state.complexity = action.payload;
    },
    setRate: (state, action: PayloadAction<number[]>) => {
      state.rate = action.payload;
    },
    resetFilters: (state) => {
      state.page = 1;
    }
  },
});

export const { reducer: questionsReducer, actions: questionsActions } = questionsSlice