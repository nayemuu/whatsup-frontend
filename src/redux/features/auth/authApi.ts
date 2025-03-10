import { apiSlice } from "../api/apiSlice";
import { loginResponseType, loginArgumentsType } from "./authApiTypes";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<loginResponseType, loginArgumentsType>({
      query: (data) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
