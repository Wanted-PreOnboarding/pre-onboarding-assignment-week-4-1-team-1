// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { getToken } from '../utils/token';
import instance from '../api/index';

class Customers {
  // 사용자 추가
  async createCustomers() {
    const res = await instance.post('/customers');
    return res;
  }

  // 사용자 삭제
  async deleteCustomers(id) {
    const res = await instance.delete(`/customers/${id}`);
    return res;
  }

  // 사용자명 변경
  async updateCustomers(id) {
    const res = await instance.put(`/customers/${id}`);
    return res;
  }

  // 사용자명 필터
  // async filterCustomers(id) {
  //   const res = await instance.put(`/customers/${id}`);
  //   return res;
  // }
}

export default new Customers();

// export const userApi = createApi({
//   reducerPath: 'userApi',
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
//     //todo meta로 users의 전체 길이 전달
//     getUsersByPage: builder.query({
//       query: page => ({
//         url: `users?_page=${page}`,
//       }),
//       transformResponse: (res, meta, arg) => {
//         const totalLength = meta.response.headers.get('x-total-count');
//         return { users: res, meta: { totalLength } };
//       },
//     }),
//     searchUser: builder.query({
//       query: word => ({
//         url: `users?q=${word}`,
//       }),
//     }),
//     getFilterdUsers: builder.query({
//       async queryFn({ page = 1, isActive, isStaff }, _queryApi, _extraOptions, fetchWithBQ) {
//         let filterQuery = ``;

//         if (isActive === undefined && isStaff === undefined) {
//           const { data } = await fetchWithBQ(`users?_page=${page}`);
//           return { data };
//         }
//         if (isActive !== undefined) filterQuery += `&is_active=${isActive}`;
//         if (isStaff !== undefined) filterQuery += `&is_staff=${isStaff}`;

//         const { data: userSettings } = await fetchWithBQ(
//           `userSetting?&_page=${page}${filterQuery}`
//         );
//         const { data: users } = await fetchWithBQ('users');

//         const results = [];
//         userSettings.forEach(setting => {
//           users.forEach(user => {
//             if (setting.uuid === user.uuid) {
//               results.push(user);
//             }
//           });
//         });
//         return { data: results };
//       },
//     }),
//     createUser: builder.query({
//       query: newUser => ({
//         url: 'users',
//         method: 'POST',
//         body: newUser,
//       }),
//     }),
//     deleteUser: builder.query({
//       query: id => ({
//         url: `users/${id}`,
//         method: 'DELETE',
//       }),
//     }),
//     editUser: builder.query({
//       query: (id, newUser) => ({
//         url: `users/${id}`,
//         method: 'PATCH',
//         body: newUser,
//       }),
//     }),
//   }),
// });

// export const {
//   useCreateUserQuery,
//   useDeleteUserQuery,
//   useEditUserQuery,
//   useGetFilterdUsersQuery,
//   useGetUsersByPageQuery,
//   useSearchUserQuery,
// } = userApi;