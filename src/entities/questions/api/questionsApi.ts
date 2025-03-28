import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import {
  GetQuestionsByIdParamsRequest,
  GetQuestionsByIdResponse,
  GetQuestionsListParamsRequest,
  GetQuestionsListResponse
} from '@/entities/questions/model/types/question';
import { ApiTags } from '@/shared/config/api/apiTags';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  tagTypes: Object.values(ApiTags),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru/questions' }),
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<GetQuestionsListResponse, GetQuestionsListParamsRequest>({
      query: (params) => ({
        url: '/public-questions',
        params: {
          page: params.page,
          limit: 10,
          title: params.title,
          skills: params.skills?.join(','),
          complexity: params.complexity?.join(','),
          rate: params.rate?.join(',')
        }
      }),
      providesTags: [ApiTags.QUESTIONS],
    }),
    getPublicQuestionById: builder.query<GetQuestionsByIdResponse, GetQuestionsByIdParamsRequest>({
      query: (id) => `/public-questions/${id}`,
      providesTags: [ApiTags.QUESTION_DETAIL],
    }),
  }),
});

export const { useGetPublicQuestionsQuery, useGetPublicQuestionByIdQuery } =
  questionsApi;
