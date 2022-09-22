import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { accountApi } from '../services/account';
import { authApi } from '../services/auth';
import { userApi } from '../services/user';

export const store = configureStore({
  reducer: {
    [accountApi.reducerPath]: accountApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(accountApi.middleware, authApi.middleware, userApi.middleware),
});

setupListeners(store.dispatch);
