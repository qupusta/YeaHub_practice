import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

import { ISkills } from '@/entities/skills/model/types/skills';
import { ApiTags } from '@/shared/config/api/apiTags';
import { API_BASE_URL } from '@/shared/config/api/api';

export const skillsApi = createApi({
  reducerPath: 'skillsApi',
  tagTypes: Object.values(ApiTags),
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getSkills: builder.query<{ data: ISkills[] }, void>({
      query: () => ({
        url: '/skills',
      }),
      providesTags: [ApiTags.SKILLS],
    }),
    getSkillById: builder.query<{ data: ISkills[] }, string>({
      query: (id) => `/skills/${id}`,
      providesTags: [ApiTags.SKILL_DETAIL],
    }),
  }),
});

export const { useGetSkillByIdQuery, useGetSkillsQuery } = skillsApi;
