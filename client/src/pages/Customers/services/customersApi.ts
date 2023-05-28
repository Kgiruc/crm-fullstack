import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Customer } from '../../../models/customer';

export const customersApi = createApi({
  reducerPath: 'customersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['Customers'],
  endpoints: (builder) => ({
    customers: builder.query<Customer[], void>({
      query: () => '/customers',
      providesTags: ['Customers'],
    }),
    addCustomer: builder.mutation<void, Customer>({
      query: (customer) => ({
        url: '/customers',
        method: 'POST',
        body: customer,
      }),
      invalidatesTags: ['Customers'],
    }),
    updateCustomer: builder.mutation<void, Customer>({
      query: ({ id, ...rest }) => ({
        url: `customers/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Customers'],
    }),
    deleteCustomer: builder.mutation<void, string>({
      query: (id) => ({
        url: `customers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Customers'],
    }),
  }),
});

export const {
  useCustomersQuery,
  useAddCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} = customersApi;
