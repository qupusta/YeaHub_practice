import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ISpecializations } from "@/entities/specializations/model/types/specializations";

export const specializationsApi = createApi({
    reducerPath: 'specializationsApi',
    tagTypes: ['Specializations', "Specializations_detail"],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru' }),
    endpoints: (builder) => ({
        getSpecializations: builder.query<{ data: ISpecializations[] }, (params: string) => void>({
            query: (params) => ({
                url: '/specializations',
                params,
            }),
            providesTags: ['Specializations']
        }),
        getSpecializationsById: builder.query<{ data: ISpecializations[] }, string>({
            query: (id) => `/specializations/${id}`,
            providesTags: ['Specializations_detail']
        }),
    }),
});

export const { useGetSpecializationsQuery, useGetSpecializationsByIdQuery } = specializationsApi