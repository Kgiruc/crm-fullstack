import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import LoginResponse from '../../../models/LoginResponse';
import { User } from '../../../models/login';

export const registerApi = createApi({
  reducerPath: 'RegisterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    register: builder.mutation<LoginResponse, User>({
      query: (user) => ({
        url: 'user/register',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
