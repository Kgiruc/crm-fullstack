import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['Profile'],
  endpoints: (builder) => ({
    logout: builder.mutation({
      query: () => ({
        url: 'user/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLogoutMutation } = profileApi;
