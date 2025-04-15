import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISpecialization } from '../model/types/specializations';

import { ApiTags } from '@/shared/config/api/apiTags';
import { API_BASE_URL } from '@/shared/config/api/api';

export const specializationsApi = createApi({
  reducerPath: 'specializationsApi',
  tagTypes: Object.values(ApiTags),
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getSpecializations: builder.query<{ data: ISpecialization[] }, void>({
      query: () => ({
        url: '/specializations',
      }),
      providesTags: [ApiTags.SPECIALIZTIONS],
    }),
    getSpecializationsById: builder.query<{ data: ISpecialization[] }, string>({
      query: (id) => `/specializations/${id}`,
      providesTags: [ApiTags.SPECIALIZATION_DETAIL],
    }),
  }),
});

export const { useGetSpecializationsQuery, useGetSpecializationsByIdQuery } =
  specializationsApi;
