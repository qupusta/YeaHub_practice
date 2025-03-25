import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

import { ISkills } from "@/shared/types/skills";

export const skillsApi = createApi({
    reducerPath: 'skillsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru' }),
    endpoints: (builder) => ({
        getSkills: builder.query<{ data: ISkills[] }, void>({
            query: () => ({
                url: '/skills',
            }),
        }),
        getSkillById: builder.query<{ data: ISkills[] }, string>({
            query: (id) => `/skills/${id}`,
        }),
    }),
});

export const { useGetSkillByIdQuery, useGetSkillsQuery } = skillsApi