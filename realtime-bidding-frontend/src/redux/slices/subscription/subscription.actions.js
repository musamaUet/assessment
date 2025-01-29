import { subscriptionService } from "@/services/subscription.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPlans = createAsyncThunk(
  "subscription/get-plans",
  async (_, { rejectWithValue }) => {
    try {
      const response = await subscriptionService.getPlans();
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "An error occurred while registering"
      );
    }
  }
);