import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const loginRequest = createAsyncThunk("LOGIN", (data) => {
  return axios.post("/api/auth/login", data).then((res) => res.data);
});

export const logoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios.post("/api/auth/logout");
});

export const addFavorites = createAsyncThunk("ADD", (Title, thunkAPI) => {
  const { user } = thunkAPI.getState();
  if (!user.id) throw new Error("Need to login");

  return axios
    .post(`/api/users/${user.id}/favs/${Title}`)
    .then((respe) => respe.data);
});

export const removeFavorites = createAsyncThunk("REMOVE", (Title, thunkAPI) => {
  const { user } = thunkAPI.getState();

  return axios
    .delete(`/api/users/${user.id}/favs/${Title}`)
    .then((respu) => respu.data);
});

export const setUser = createAction("SET_USER");

const userReducer = createReducer(
  {},
  {
    [setUser]: (state, action) => (state = action.payload),
    [addFavorites.fulfilled]: (state, action) => (state = action.payload.data),
    [removeFavorites.fulfilled]: (state, action) =>(state = action.payload.data),
    [loginRequest.fulfilled]: (state, action) => (state = action.payload),
    [logoutRequest.fulfilled]: (state, action) => (state = {}),
  }
);

export default userReducer;
