import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { QuestionsState } from "../types/questionsType";

const initialState: QuestionsState = {
  page: 1,
  title: undefined,
  skills: undefined,
  rate: undefined,
  complexity: undefined,
  specializations: 11,
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
    setSkills: (state, action: PayloadAction<number>) => {
      state.skills?.push(action.payload)
    },
    toggleSpecializations: (state, action: PayloadAction<number>) => {
      state.specializations = action.payload
    },
    setComplexity: (state, action: PayloadAction<number[] | undefined>) => {
      state.complexity = action.payload;
    },
    setRate: (state, action: PayloadAction<number[]>) => {
      state.rate = action.payload;
    },
    resetFilters: () => {
      return initialState
    }
  },
});

export const { reducer: questionsReducer, actions: questionsActions } = questionsSlice