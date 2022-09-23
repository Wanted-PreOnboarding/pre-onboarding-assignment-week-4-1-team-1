// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { getToken } from '../utils/token';
import instance from '../api/index';

class Auth {
  async login(email, password) {
    const res = await instance.post('/login', {
      email: email,
      password: password,
    });

    return res;
  }
}

export default new Auth();

// export const authApi = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: '/',
//     prepareHeaders: headers => {
//       const token = getToken();
//       if (token) headers.set('Authorization', `Bearer ${token}`);

//       headers.set('Content-type', 'application/json');
//       return headers;
//     },
//   }),

//   endpoints: builder => ({
//     signupUser: builder.query({
//       query: newUser => ({
//         url: 'signup',
//         method: 'POST',
//         body: newUser,
//       }),
//     }),
//     loginUser: builder.query({
//       query: user => ({
//         url: 'login',
//         method: 'POST',
//         body: user,
//       }),
//     }),
//   }),
// });

// export const { useLoginUserQuery, useSignupUserQuery } = authApi;
