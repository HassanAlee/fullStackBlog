import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  loading: false,
  error: "",
};
// register user
export const registerUser = createAsyncThunk(
  "userSlice/register",
  async (data, thunkAPI) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const raw = JSON.stringify(data);
    const requestOptions = {
      method: "POST",
      headers: headers,
      body: raw,
    };
    let res = await fetch(
      "http://localhost:3000/api/v1/user/register",
      requestOptions
    );
    if (!res.ok) {
      res = await res.json();
      toast.error(res.message, {
        duration: 6000,
      });
      return thunkAPI.rejectWithValue(res.message);
    } else {
      toast.success("User created successfully");
      return true;
    }
  }
);
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export default userSlice.reducer;
