import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Invoice } from '../../../models/invoice';

export const invoicesApi = createApi({
  reducerPath: 'invoicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['Invoices'],
  endpoints: (builder) => ({
    invoices: builder.query<Invoice[], void>({
      query: () => '/invoices',
      providesTags: ['Invoices'],
    }),
    addInvoice: builder.mutation<void, Invoice>({
      query: (invoice) => ({
        url: '/invoices',
        method: 'POST',
        body: invoice,
      }),
      invalidatesTags: ['Invoices'],
    }),
    updateInvoice: builder.mutation<void, Invoice>({
      query: ({ id, ...rest }) => ({
        url: `invoices/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Invoices'],
    }),
    deleteInvoice: builder.mutation<void, string>({
      query: (id) => ({
        url: `invoices/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Invoices'],
    }),
  }),
});

export const {
  useInvoicesQuery,
  useAddInvoiceMutation,
  useUpdateInvoiceMutation,
  useDeleteInvoiceMutation,
} = invoicesApi;
