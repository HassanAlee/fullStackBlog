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
// get all blogs
export const getAllBlogs = createAsyncThunk(
  "getAllBlogs/blogsSLice",
  async (thunkAPI) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const requestOptions = {
      method: "GET",
      headers,
    };
    let res = await fetch("/api/v1/blog/get-Blogs", requestOptions);
    if (!res.ok) {
      res = await res.json();
      thunkAPI.rejectWithValue(res.message);
    } else {
      res = await res.json();
      return res;
    }
  }
);
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
    [getAllBlogs.pending]: (state) => {
      state.loading = true;
    },
    [getAllBlogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    },
    [getAllBlogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export default blogsSlice.reducer;
