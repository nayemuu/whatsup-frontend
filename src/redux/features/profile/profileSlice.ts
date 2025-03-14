import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProfileStateType = {
  name: string;
  email: string;
  picture: string;
};

const initialState: ProfileStateType = {
  name: "",
  email: "",
  picture: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    initiateProfileInfo: (state, action: PayloadAction<ProfileStateType>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.picture = action.payload.picture;
    },

    // clearProfileInfo: (state) => {
    //   state.name = "";
    //   state.email = "";
    //   state.picture = "";
    // },
    clearProfileInfo: () => initialState, // Return initial state directly
  },
});

export const { initiateProfileInfo, clearProfileInfo } = profileSlice.actions;
export default profileSlice.reducer;
