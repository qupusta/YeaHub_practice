import { configureStore } from '@reduxjs/toolkit';
import { questionsApi } from '@/entities/questions/api/questionsApi';
import { questionsPageReducer } from '@/pages/QuestionsPage';

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    questionsPage: questionsPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
