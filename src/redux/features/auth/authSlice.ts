import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthStateType = {
  accessToken: string;
  refreshToken: string;
};

const initialState: AuthStateType = {
  accessToken: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<AuthStateType>) => {
      // console.log("action.payload.accessToken = ", action.payload.accessToken);
      // console.log("action.payload.accessToken type = ",typeof action.payload.accessToken);
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },

    // userLoggedOut: (state) => {
    //   state.accessToken = "";
    //   state.refreshToken = "";
    // },
    userLoggedOut: () => initialState, // Return initial state directly
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;

//gey chatgpt, is syntax and format is okey
// or there is a better conventional way
