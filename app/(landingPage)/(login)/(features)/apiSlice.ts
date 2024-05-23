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
  }),
});

export const { useLoginUserMutation } = apiSlice;
