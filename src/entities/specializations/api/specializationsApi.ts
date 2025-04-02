import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISpecialization } from "../model/types/specializations";

export const specializationsApi = createApi({
    reducerPath: 'specializationsApi',
    tagTypes: ['Specializations', "Specializations_detail"],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru' }),
    endpoints: (builder) => ({
        getSpecializations: builder.query<{ data: ISpecialization[] }, void>({
            query: () => ({
                url: '/specializations',
            }),
            providesTags: ['Specializations']
        }),
        getSpecializationsById: builder.query<{ data: ISpecialization[] }, string>({
            query: (id) => `/specializations/${id}`,
            providesTags: ['Specializations_detail']
        }),
    }),
});

export const { useGetSpecializationsQuery, useGetSpecializationsByIdQuery } = specializationsApi