import { configureStore } from '@reduxjs/toolkit';
import { questionsApi } from '@/features/questions/api/questionsApi';
import { questionsReducer } from '@/features/questions/model/slices/questionsSlice';
import { specializationsApi } from '@/entities/specializations/api/specializationsApi';
import { skillsApi } from '@/entities/skills/api/skillsApi';

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    [specializationsApi.reducerPath]: specializationsApi.reducer,
    questions: questionsReducer,
    [skillsApi.reducerPath]: skillsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware, specializationsApi.middleware, skillsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
