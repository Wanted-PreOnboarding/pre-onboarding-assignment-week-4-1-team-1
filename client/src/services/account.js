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
    getTotalAccouts: builder.query({
      query: () => ({ url: 'accounts' }),
    }),
    getAccountsByPage: builder.query({
      query: page => ({ url: `accounts?_page=${page}_limit=10` }),
      transformResponse: (res, meta, arg) => {
        console.log('res.headers', res);
        console.log('res', meta.response.headers.get('x-total-count'));
        return res;
      },
    }),
    searchAccount: builder.query({
      query: word => ({ url: `accounts?q=${word}` }),
    }),
  }),
});

export const { useGetAccountsByPageQuery, useGetTotalAccoutsQuery, useSearchAccountQuery } =
  accountApi;
