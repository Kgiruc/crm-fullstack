import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { LoginResponse, User } from '../../../models/login';


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
