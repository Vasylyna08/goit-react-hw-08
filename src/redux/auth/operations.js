import { createAsyncThunk } from '@reduxjs/toolkit';
// import { setAuthHeader, clearAuthHeader } from '../../axios.js';
import {
  requestLogOutUser,
  requestLoginUser,
  requestSignupUser,
  requestRefreshUser,
  setAuthHeader,
  clearAuthHeader,
} from '../../services/userApi.js';

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkApi) => {
    try {
      const data = await requestSignupUser(newUser);
      // setAuthHeader(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userInfo, thunkApi) => {
    try {
      const data = await requestLoginUser(userInfo);
      // setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await requestLogOutUser();
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const reduxState = thunkApi.getState();
    setAuthHeader(reduxState.auth.token);
    const data = await requestRefreshUser();
    return data;
  },
  {
    condition(_, thunkApi) {
      const reduxState = thunkApi.getState();
      return reduxState.auth.token !== null;
    },
  }
);
