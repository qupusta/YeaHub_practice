import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ISpecializations } from "@/shared/types/specializations";

export const specializationsApi = createApi({
    reducerPath: 'specializationsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru' }),
    endpoints: (builder) => ({
        getSpecializations: builder.query<{ data: ISpecializations[] }, void>({
            query: () => ({
                url: '/specializations',
            }),
        }),
        getSpecializationsById: builder.query<{ data: ISpecializations[] }, string>({
            query: (id) => `/specializations/${id}`,
        }),
    }),
});

export const { useGetSpecializationsQuery, useGetSpecializationsByIdQuery } = specializationsApi