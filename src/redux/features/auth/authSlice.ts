/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  accessToken: undefined | string;
  refreshToken: undefined | string;
};

const initialState: AuthState = {
  accessToken: undefined,
  refreshToken: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      // console.log("action.payload.accessToken = ", action.payload.accessToken);
      // console.log("action.payload.accessToken type = ",typeof action.payload.accessToken);
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },

    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.refreshToken = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
