import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { IQuestion } from "@/shared/types/question";

export const questionsApi = createApi({
    reducerPath: 'questionsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru/questions' }),
    endpoints: (builder) => ({
        getPublicQuestions: builder.query<IQuestion[], void>({
            query: () => '/public_questions',
        }),
        getPublicQuestionById: builder.query<IQuestion[], string>({
            query: (id) => `/public_questions/${id}`,
        })
    })
})

export const { useGetPublicQuestionsQuery, useGetPublicQuestionByIdQuery } = questionsApi