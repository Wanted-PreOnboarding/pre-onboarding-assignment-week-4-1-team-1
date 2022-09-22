import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/users',
    prepareHeaders: headers => {},
  }),
  endpoints: builder => ({
    getUsersByPage: builder.query({
      query: page => ({ url: `?_page=${page}` }),
    }),
    filterUsers: builder.query({}),
    searchUsers: builder.query({
      query: word => ({
        url: `?q=${word}`,
      }),
    }),
    createUser: builder.query({}),
    deleteUser: builder.query({}),
    editUser: builder.query({}),
  }),
});
