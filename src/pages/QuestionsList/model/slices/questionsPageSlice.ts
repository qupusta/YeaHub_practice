import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { QuestionsPageState } from "../types/questionsPageType";

const initialState: QuestionsPageState = {
  page: 1,
  title: undefined,
  skills: undefined,
  rate: undefined,
  complexity: undefined,
}

const questionsPageSlice = createSlice({
  name: 'questionsPage',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
      state.page = 1;
    },
    setSkills: (state, action: PayloadAction<number[] | undefined>) => {
      state.skills = action.payload;
      state.page = 1;
    },
    setComplexity: (state, action: PayloadAction<number[] | undefined>) => {
      state.complexity = action.payload;
      state.page = 1;
    },
    setRate: (state, action: PayloadAction<number[]>) => {
      state.rate = action.payload;
      state.page = 1;
    },
  },
});

export const { reducer: questionsPageReducer, actions: questionsPageActions } = questionsPageSlice