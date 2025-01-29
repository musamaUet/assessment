/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import initialSubscriptionState from "./subscription.initialStates";
import { getPlans } from "./subscription.actions";

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: initialSubscriptionState,
  reducers: {
    updateSubscription: (state, action) => {
      state.subscription = { ...action.payload?.user };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPlans.fulfilled, (state, action) => {
        state.plans = action.payload.data;
      });
  },
});

export const { updateSubscription } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;