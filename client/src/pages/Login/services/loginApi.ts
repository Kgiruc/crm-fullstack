import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { User } from '../../../models/login';
import LoginResponse from '../../../models/loginResponse';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, User>({
      query: (user) => ({
        url: 'user/login',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
