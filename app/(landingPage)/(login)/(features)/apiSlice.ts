import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Credentials, User } from "./types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<User, Credentials>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: credentials,
      }),
    }),
    fetchUser: builder.query<User, string>({
      query: (token) => ({
        url: "/auth/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    refreshAccessToken: builder.query<User, string>({
      query: (token) => ({
        url: "/auth/refresh",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          expiresInMins: 30,
        }),
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useFetchUserQuery,
  useRefreshAccessTokenQuery,
} = apiSlice;
