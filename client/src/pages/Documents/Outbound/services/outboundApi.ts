import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Outbound } from '../../../../models/Outbound';

export const outboundApi = createApi({
  reducerPath: 'outboundApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['Outbound'],
  endpoints: (builder) => ({
    outbound: builder.query<Outbound[], void>({
      query: () => '/outbound',
      providesTags: ['Outbound'],
    }),
    addOutbound: builder.mutation<void, Outbound>({
      query: (customer) => ({
        url: '/outbound',
        method: 'POST',
        body: customer,
      }),
      invalidatesTags: ['Outbound'],
    }),
    updateOutbound: builder.mutation<void, Outbound>({
      query: ({ id, ...rest }) => ({
        url: `outbound/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Outbound'],
    }),
    deleteOutbound: builder.mutation<void, string>({
      query: (id) => ({
        url: `outbound/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Outbound'],
    }),
  }),
});

export const {
  useOutboundQuery,
  useAddOutboundMutation,
  useDeleteOutboundMutation,
  useUpdateOutboundMutation,
} = outboundApi;
