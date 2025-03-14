import { apiSlice } from "../api/apiSlice";
import { initiateProfileInfo } from "../profile/profileSlice";
import { loginResponseType, loginPayloadType } from "./authApiTypes";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true, //in development mode, and HMR (Hot Module Replacement) tries to redefine the endpoint. For that i added this

  endpoints: (builder) => ({
    login: builder.mutation<loginResponseType, loginPayloadType>({
      query: (data) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          // console.log('inside authApi arg = ', arg);
          const result = await queryFulfilled;
          // console.log("inside login result = ", result);
          // console.log("accessToken = ", result.data.token.accessToken);
          // console.log("refreshToken = ", result.data.token.refreshToken);

          // Remember,
          // TypeScript only checks types at compile time, not runtime.
          // If the API response returns accessToken as a number, TypeScript won't detect this issue unless you manually check it.
          dispatch(
            userLoggedIn({
              accessToken: result.data.token.accessToken,
              refreshToken: result.data.token.refreshToken,
            })
          );
          dispatch(
            initiateProfileInfo({
              name: result.data.user.name,
              email: result.data.user.email,
              picture: result.data.user.picture,
            })
          );

          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.token.accessToken,
              refreshToken: result.data.token.refreshToken,
            })
          );

          localStorage.setItem(
            "profile",
            JSON.stringify({
              name: result.data.user.name,
              email: result.data.user.email,
              picture: result.data.user.picture,
            })
          );
        } catch (error) {
          //
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
