import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { IAuth } from "@/interfaces";
import { api, webStorage } from "@/utils";

export const register = createAsyncThunk(
  "register",
  async (payload: object | undefined, thunkAPI) => {
    try {
      const response = await api.json.post(`/register`, payload);
      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error?.response?.data?.message);
      }

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk("login", async (payload: object | undefined, thunkAPI) => {
  try {
    const response = await api.json.post(`/login`, payload);
    webStorage.set("user", response.data.data);
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message);
    }

    return thunkAPI.rejectWithValue(error);
  }
});

const initialState: IAuth = {
  user: null,

  isRegisterLoading: false,
  registerSuccess: null,
  registerErrors: null,

  isLoginLoading: false,
  loginSuccess: null,
  loginErrors: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetRegister: (state) => {
      state.registerSuccess = null;
      state.registerErrors = null;
    },
    resetLogin: (state) => {
      state.loginSuccess = null;
      state.loginErrors = null;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers(builder) {
    return builder
      .addCase(register.pending, (state) => {
        state.isRegisterLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isRegisterLoading = false;
        state.registerSuccess = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isRegisterLoading = false;
        state.registerErrors = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoginLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoginLoading = false;
        state.loginSuccess = action.payload.message;
        state.user = action.payload.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoginLoading = false;
        state.loginErrors = action.payload;
      });
  },
});

export const { resetRegister, resetLogin, logout } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
