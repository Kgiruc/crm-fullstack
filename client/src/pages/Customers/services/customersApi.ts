import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Customer } from '../../../types/customer';

export const customersApi = createApi({
  reducerPath: 'customersApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    customers: builder.query<Customer[], void>({
      query: () => '/clients',
    }),
    customer: builder.query<Customer, string>({
      query: (id) => `/clients/${id}`,
    }),
  }),
});

export const { useCustomersQuery, useCustomerQuery } = customersApi;
