import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

import { ISkills } from "@/entities/skills/model/types/skills";

export const skillsApi = createApi({
    reducerPath: 'skillsApi',
    tagTypes: ['Specializations'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru' }),
    endpoints: (builder) => ({
        getSkills: builder.query<{ data: ISkills[] }, void>({
            query: () => ({
                url: '/skills',
            }),
            providesTags: ['Specializations']
        }),
        getSkillById: builder.query<{ data: ISkills[] }, string>({
            query: (id) => `/skills/${id}`,
        }),
    }),
});

export const { useGetSkillByIdQuery, useGetSkillsQuery } = skillsApi