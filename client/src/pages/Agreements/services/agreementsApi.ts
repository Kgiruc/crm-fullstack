import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Agreement } from '../../../models/agreement';

export const agreementsApi = createApi({
  reducerPath: 'agreementsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['Agreements'],
  endpoints: (builder) => ({
    agreements: builder.query<Agreement[], void>({
      query: () => '/agreements',
      providesTags: ['Agreements'],
    }),
    addAgreement: builder.mutation<void, Agreement>({
      query: (agreement) => ({
        url: '/agreements',
        method: 'POST',
        body: agreement,
      }),
      invalidatesTags: ['Agreements'],
    }),
    updateAgreement: builder.mutation<void, Agreement>({
      query: ({ id, ...rest }) => ({
        url: `agreements/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Agreements'],
    }),
    deleteAgreement: builder.mutation<void, string>({
      query: (id) => ({
        url: `agreements/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Agreements'],
    }),
  }),
});

export const {
  useAgreementsQuery,
  useAddAgreementMutation,
  useUpdateAgreementMutation,
  useDeleteAgreementMutation,
} = agreementsApi;
