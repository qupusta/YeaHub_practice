import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import {
  GetQuestionsByIdParamsRequest,
  GetQuestionsByIdResponse,
  GetQuestionsListParamsRequest,
  GetQuestionsListResponse,
} from '@/features/questions/model/types/question';
import { ApiTags } from '@/shared/config/api/apiTags';
import { API_BASE_URL } from '@/shared/config/api/api';
import { DEFAULT_LIMIT_VALUE } from '@/shared/constants/queryConstants';

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  tagTypes: Object.values(ApiTags),
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<
      GetQuestionsListResponse,
      GetQuestionsListParamsRequest
    >({
      query: (params) => ({
        url: 'questions/public-questions',
        params: {
          page: params.page,
          limit: DEFAULT_LIMIT_VALUE,
          title: params.title,
          skills: params.skills?.join(','),
          complexity: params.complexity?.join(','),
          rate: params.rate?.join(','),
          specialization: params.specialization || undefined,
        },
      }),
      providesTags: [ApiTags.QUESTIONS],
    }),
    getPublicQuestionById: builder.query<
      GetQuestionsByIdResponse,
      GetQuestionsByIdParamsRequest
    >({
      query: (param) => {
        const id = param?.questionId?.replace(':', '');
        return {
          url: `/questions/public-questions/${id || ''}`,
        };
      },
      providesTags: [ApiTags.QUESTION_DETAIL],
    }),
  }),
});

export const { useGetPublicQuestionsQuery, useGetPublicQuestionByIdQuery } =
  questionsApi;
