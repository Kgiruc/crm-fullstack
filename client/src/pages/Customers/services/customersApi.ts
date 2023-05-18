import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Customer } from '../../../models/customer';

export const customersApi = createApi({
  reducerPath: 'customersApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['Clients'],
  endpoints: (builder) => ({
    customers: builder.query<Customer[], void>({
      query: () => '/clients',
      providesTags: ['Clients'],
    }),
    addCustomer: builder.mutation<void, Customer>({
      query: (customer) => ({
        url: '/clients',
        method: 'POST',
        body: customer,
      }),
    }),
    updateCustomer: builder.mutation<void, Customer>({
      query: ({ id, ...rest }) => ({
        url: `/clients/${id}`,
        method: 'PUT',
        body: rest,
      }),
    }),
    deleteCustomer: builder.mutation<void, string>({
      query: (id) => ({
        url: `/clients/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Clients'],
    }),
  }),
});

export const {
  useCustomersQuery,
  useAddCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} = customersApi;
