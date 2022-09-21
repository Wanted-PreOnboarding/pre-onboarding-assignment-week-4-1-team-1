import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { prefaceApi } from '../services';

export const store = configureStore({
  reducer: {
    [prefaceApi.reducerPath]: prefaceApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(prefaceApi.middleware),
});

setupListeners(store.dispatch);
