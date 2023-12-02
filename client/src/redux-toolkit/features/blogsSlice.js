import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  error: "",
  loading: false,
  blogs: [],
};
// add new blog
export const addBlog = createAsyncThunk("addBlog/blogsSlice", async (data) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const raw = JSON.stringify(data);
  const requestOptions = {
    method: "POST",
    headers,
    body: raw,
  };
  let res = await fetch("/api/v1/blog/add-blog", requestOptions);
  if (!res.ok) {
    res = await res.json();
    toast.error(res.message, {
      duration: 6000,
    });
    return thunkAPI.rejectWithValue(res.message);
  } else {
    res = await res.json();
    toast.success("Added new blog successfully");
    return res;
  }
});
const blogsSlice = createSlice({
  name: "blogsSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [addBlog.pending]: (state) => {
      state.loading = true;
    },
    [addBlog.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = [...state.blogs, action.payload];
    },
    [addBlog.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export default blogsSlice.reducer;
