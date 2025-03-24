import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { IQuestion } from '@/shared/types/question';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru/questions' }),
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<{ data: IQuestion[] }, void>({
      query: () => ({
        url: '/public-questions',
        params: { page: 1, limit: 10 }
      }),
    }),
    getPublicQuestionById: builder.query<{ data: IQuestion[] }, string>({
      query: (id) => `/public-questions/${id}`,
    }),
  }),
});

export const { useGetPublicQuestionsQuery, useGetPublicQuestionByIdQuery } =
  questionsApi;
