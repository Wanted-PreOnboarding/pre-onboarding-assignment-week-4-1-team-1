import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../utils/token';

export const accountApi = createApi({
  reducerPath: 'accountApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: headers => {
      const token = getToken();
      if (token) headers.set('Authorization', `Bearer ${token}`);

      headers.set('Content-type', 'application/json');
      return headers;
    },
  }),

  endpoints: builder => ({
    getAccountsByPage: builder.query({
      query: page => ({ url: `accounts?_page=${page}_limit=10` }),
      transformResponse: (res, meta, arg) => {
        const totalLength = meta.response.headers.get('x-total-count');
        return { accounts: res, meta: { totalLength } };
      },
    }),
    searchAccount: builder.query({
      query: word => ({ url: `accounts?q=${word}` }),
    }),
  }),
});

export const { useGetAccountsByPageQuery, useSearchAccountQuery } = accountApi;
