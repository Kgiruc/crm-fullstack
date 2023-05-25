import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { User } from '../../../models/login';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<void, User>({
      query: (user) => ({
        url: '/login',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
