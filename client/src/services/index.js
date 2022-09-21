import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAccessToken } from '../utils/token';

export const prefaceApi = createApi({
  reducerPath: 'prefaceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: headers => {
      const token = getAccessToken();
      if (token) headers.set('Authorization', `Bearer ${token}`);

      headers.set('Content-type', 'application/json');
      return headers;
    },
  }),

  endpoints: builder => ({
    signupUser: builder.query({
      query: newUser => ({
        url: 'signup',
        method: 'POST',
        body: newUser,
      }),
    }),
    loginUser: builder.query({
      query: user => ({
        url: 'login',
        method: 'POST',
        body: user,
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: 'users',
      }),
    }),
    getAccounts: builder.query({
      query: () => ({
        url: 'accounts',
      }),
    }),
  }),
});

export const { useLoginUserQuery, useGetUsersQuery, useSignupUserQuery, useGetAccountsQuery } =
  prefaceApi;
