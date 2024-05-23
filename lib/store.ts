// src/app/store.ts
import { apiSlice } from "@/app/(landingPage)/(login)/(features)/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/app/(landingPage)/(login)/(features)/userSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
