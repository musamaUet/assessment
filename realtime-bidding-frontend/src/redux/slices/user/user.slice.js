/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import initialUserState from "./user.initialStates";
import { getProfile } from "./user.actions";

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    logout: (state) => {
      return initialUserState;
    },
    updateUserDetail: (state, action) => {
      state.user = {...action.payload};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.user = action.payload.data;
    });
  },
});

export const { logout, updateUserDetail } = userSlice.actions;
export default userSlice.reducer;