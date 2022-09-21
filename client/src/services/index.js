import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const prefaceApi = createApi({
  reducerPath: 'prefaceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),

  endpoints: builder => ({
    loginUser: builder.query({
      query: payload => ({
        url: 'login',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: 'users',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAZ21haWwuY29tIiwiaWF0IjoxNjYzNzUzNjcwLCJleHAiOjE2NjM3NTcyNzAsInN1YiI6IjEwMSJ9.JZxORgcokM0I2BD-_-hMU9At0RZ7mWfcr-XJCRlscTA`,
        },
      }),
    }),
  }),
});

export const { useLoginUserQuery, useGetUsersQuery } = prefaceApi;
