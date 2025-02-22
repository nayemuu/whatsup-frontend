import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {} = authApi;
