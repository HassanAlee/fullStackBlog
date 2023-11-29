import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  loading: false,
  error: "",
  currentUser: "",
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
// login user
export const loginUSer = createAsyncThunk(
  "userSlice/login",
  async (data, thunkAPI) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const raw = JSON.stringify(data);
    const requestOptions = {
      method: "POST",
      headers,
      body: raw,
    };
    let res = await fetch("/api/v1/user/login", requestOptions);
    if (!res.ok) {
      res = await res.json();
      toast.error(res.message, {
        duration: 6000,
      });
      return thunkAPI.rejectWithValue(res.message);
    }
    res = await res.json();
    toast.success(`${res.name} welcome to the socialBlog`);
    return res;
  }
);
// update user
export const updateUser = createAsyncThunk(
  "userSlice/updateUser",
  async (data, thunkAPI) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const raw = JSON.stringify(data);
    const requestOptions = {
      method: "PATCH",
      headers,
      body: raw,
    };
    let res = await fetch("/api/v1/user/update-profile", requestOptions);
    if (!res.ok) {
      res = await res.json();
      toast.error(res.message, {
        duration: 6000,
      });
      return thunkAPI.rejectWithValue(res.message);
    }
    res = await res.json();
    toast.success("Profile updated successfully");
    return res;
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
    [loginUSer.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUSer.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    [loginUSer.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    [updateUser.rejected]: (state, action) => {
      (state.loading = false), (state.error = action.payload);
    },
  },
});
export default userSlice.reducer;
