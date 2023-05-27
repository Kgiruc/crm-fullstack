import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { User } from '../../../models/login';
import LoginResponse from '../../../models/LoginResponse';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
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

// loginApi.middleware.push(async (baseQuery, options, _api, _endpoint) => {
//   const token = getAccessTokenFromCookie();

//   if (token) {
//     options.headers = {
//       ...options.headers,
//       Authorization: `Bearer ${token}`,
//     };
//   }

//   return baseQuery(options);
// });

export const { useLoginMutation } = loginApi;
