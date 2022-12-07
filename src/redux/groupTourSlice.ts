import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGroupTour } from "../interfaces";
import { api } from "../utils";

export const getGroupTours = createAsyncThunk("groupTours", async () => {
  try {
    const response = await api.get("/trips");
    return response.data;
  } catch (error: unknown) {
    return error;
  }
});

const initialState: IGroupTour = {
  groupTours: [],
  isGroupToursLoading: true,
  groupToursErrors: null,
};

const groupTourSlice = createSlice({
  name: "groupTour",
  initialState,
  reducers: {
    resetGroupTours: (state) => {
      state.isGroupToursLoading = true;
      state.groupToursErrors = null;
      state.groupTours = [];
    },
  },
  extraReducers(builder) {
    return builder
      .addCase(getGroupTours.pending, (state) => {
        state.isGroupToursLoading = true;
      })
      .addCase(getGroupTours.fulfilled, (state, action) => {
        state.isGroupToursLoading = false;
        state.groupTours = action.payload.data;
      })
      .addCase(getGroupTours.rejected, (state, action) => {
        state.isGroupToursLoading = false;
        state.groupToursErrors = action.payload;
      });
  },
});

export const { resetGroupTours } = groupTourSlice.actions;

const groupTourReducer = groupTourSlice.reducer;

export default groupTourReducer;
