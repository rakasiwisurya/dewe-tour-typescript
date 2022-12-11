import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { IGroupTour } from "@/interfaces";
import { api, requestQuery } from "@/utils";

export const getGroupTours = createAsyncThunk(
  "groupTours",
  async (payload: object | undefined, thunkAPI) => {
    try {
      const response = await api.get(`/trips${requestQuery(payload)}`);
      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error?.response?.data?.message);
      }

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getGroupTour = createAsyncThunk(
  "groupTour",
  async (payload: { id?: string }, thunkAPI) => {
    try {
      const response = await api.get(`/trips/${payload.id}`);
      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error?.response?.data?.message);
      }

      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState: IGroupTour = {
  groupTours: [],
  isGroupToursLoading: true,
  groupToursSucess: null,
  groupToursErrors: null,

  groupTour: {},
  isGroupTourLoading: true,
  groupTourSucess: null,
  groupTourErrors: null,
};

const groupTourSlice = createSlice({
  name: "groupTour",
  initialState,
  reducers: {
    resetGroupTours: (state) => {
      state.groupToursSucess = null;
      state.groupToursErrors = null;
    },
    resetGroupTour: (state) => {
      state.groupTourSucess = null;
      state.groupTourErrors = null;
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
        state.groupToursSucess = action.payload.message;
      })
      .addCase(getGroupTours.rejected, (state, action) => {
        state.isGroupToursLoading = false;
        state.groupToursErrors = action.payload;
      })
      .addCase(getGroupTour.pending, (state) => {
        state.isGroupTourLoading = true;
      })
      .addCase(getGroupTour.fulfilled, (state, action) => {
        state.isGroupTourLoading = false;
        state.groupTour = action.payload.data;
        state.groupTourSucess = action.payload.message;
      })
      .addCase(getGroupTour.rejected, (state, action) => {
        state.isGroupTourLoading = false;
        state.groupTourErrors = action.payload;
      });
  },
});

export const { resetGroupTours, resetGroupTour } = groupTourSlice.actions;

const groupTourReducer = groupTourSlice.reducer;

export default groupTourReducer;
