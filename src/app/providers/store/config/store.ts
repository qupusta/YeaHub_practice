import { configureStore } from '@reduxjs/toolkit';
import { questionsApi } from '@/features/questions/api/questionsApi';
import { questionsReducer } from '@/features/questions/model/slices/questionsSlice';
import { specializationsApi } from '@/entities/specializations/api/specializationsApi';

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    questions: questionsReducer,
    [specializationsApi.reducerPath]: specializationsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware, specializationsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
