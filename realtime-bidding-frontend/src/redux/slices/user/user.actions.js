import { userService } from "@/services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfile = createAsyncThunk(
  "user/get-profile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await userService.getUserProfile();
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "An error occurred while registering"
      );
    }
  }
);